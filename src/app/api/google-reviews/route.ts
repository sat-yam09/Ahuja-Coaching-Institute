import { NextResponse } from 'next/server';
import { googleReviews, googleReviewStats } from '@/data/mockData';

// Place Details API URL format:
// https://maps.googleapis.com/maps/api/place/details/json?place_id=PLACE_ID&fields=name,rating,user_ratings_total,reviews&key=API_KEY

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const branch = searchParams.get('branch'); // 'maninagar' | 'vastral' | null

  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const placeIdManinagar = process.env.GOOGLE_PLACE_ID_MANINAGAR;
  const placeIdVastral = process.env.GOOGLE_PLACE_ID_VASTRAL;

  // If no API key configured yet, return realistic mock data
  if (!apiKey || (!placeIdManinagar && !placeIdVastral)) {
    let reviews = googleReviews;
    if (branch === 'maninagar') {
      reviews = googleReviews.filter((r) => r.branch.toLowerCase().includes('maninagar'));
    } else if (branch === 'vastral') {
      reviews = googleReviews.filter((r) => r.branch.toLowerCase().includes('vastral'));
    }

    return NextResponse.json({
      success: true,
      isLive: false,
      stats: googleReviewStats,
      reviews,
    });
  }

  try {
    const targetPlaceId = branch === 'vastral' ? placeIdVastral : placeIdManinagar;

    const res = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${targetPlaceId}&fields=name,rating,user_ratings_total,reviews&key=${apiKey}`,
      { next: { revalidate: 86400 } } // Cache for 24 hours to stay well within free tier
    );

    const data = await res.json();

    if (data.status !== 'OK' || !data.result) {
      return NextResponse.json({
        success: true,
        isLive: false,
        stats: googleReviewStats,
        reviews: googleReviews,
      });
    }

    const liveReviews = (data.result.reviews || []).map((r: any, idx: number) => ({
      id: `live-gr-${idx}`,
      authorName: r.author_name,
      authorPhotoUrl: r.profile_photo_url || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150',
      rating: r.rating || 5,
      relativeTimeDescription: r.relative_time_description || 'Recently',
      text: r.text || '',
      branch: branch === 'vastral' ? 'Vastral Branch' : 'Maninagar Head Office',
      tag: 'Google Maps Verified Review',
      badge: 'Verified Student / Parent',
    }));

    return NextResponse.json({
      success: true,
      isLive: true,
      stats: {
        averageRating: data.result.rating || 4.9,
        totalReviews: data.result.user_ratings_total || 486,
      },
      reviews: liveReviews.length > 0 ? liveReviews : googleReviews,
    });
  } catch (error) {
    console.error('Google Reviews API route error:', error);
    return NextResponse.json({
      success: true,
      isLive: false,
      stats: googleReviewStats,
      reviews: googleReviews,
    });
  }
}
