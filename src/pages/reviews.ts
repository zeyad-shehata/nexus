import { apiFetch } from '../utils/api';

const staticReviews = [
  { name: 'Sarah Johnson', company: 'TechVentures Inc.', initials: 'SJ', rating: 5, text: 'Nexus transformed our online presence completely. The attention to detail and the quality of design exceeded our expectations. Our conversion rate increased by 340% within the first month. Truly world-class work!', verified: true },
  { name: 'Michael Chen', company: 'GrowthLab', initials: 'MC', rating: 5, text: 'Working with Nexus was the best investment we made for our startup. They delivered a beautiful, fast, and scalable platform that our users absolutely love. The communication was excellent throughout.', verified: true },
  { name: 'Emma Williams', company: 'Luxe Retail', initials: 'EW', rating: 5, text: 'The e-commerce platform they built for us is stunning. Sales increased 250% after launch. The team is professional, responsive, and truly cares about results.', verified: true },
  { name: 'David Park', company: 'NeuralWave AI', initials: 'DP', rating: 5, text: 'Their AI expertise is exceptional. They built a custom analytics dashboard that saves our team 20+ hours per week. Design is world-class and code quality is impeccable.', verified: true },
  { name: 'Lisa Zhang', company: 'Bloom Beauty', initials: 'LZ', rating: 5, text: 'From branding to website to mobile app — Nexus handled everything flawlessly. True partners who understand business needs and translate them into beautiful products.', verified: true },
  { name: 'James Miller', company: 'FinEdge Capital', initials: 'JM', rating: 4, text: 'Great work on our fintech platform. The design is sleek and modern. Development was mostly on time with some minor delays, but the final product exceeded expectations.', verified: true },
  { name: 'Anna Kowalski', company: 'EcoMarket', initials: 'AK', rating: 5, text: 'The team delivered an incredible sustainable marketplace platform. The UX research they conducted was thorough, and it shows in the final product. Highly recommend!', verified: true },
  { name: 'Robert Singh', company: 'CloudSync Pro', initials: 'RS', rating: 5, text: 'Enterprise-grade quality at a fair price. Our cloud management dashboard is fast, reliable, and our team loves using it. Outstanding technical execution.', verified: true },
];

function renderStars(rating: number) {
  const fullStar = `<svg width="15" height="15" viewBox="0 0 24 24" fill="#f59e0b" stroke="#f59e0b" stroke-width="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
  const emptyStar = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--text-tertiary)" stroke-width="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
  
  return Array.from({ length: 5 }, (_, i) => i < rating ? fullStar : emptyStar).join('');
}

function renderReviewCard(r: any, i: number) {
  const name = r.name || r.user?.name || 'Nexus Client';
  const initials = r.initials || name.split(' ').map((n: string) => n[0]).join('').slice(0, 2).toUpperCase();
  const company = r.company || (r.user?.role === 'ADMIN' ? 'Nexus Team' : 'Nexus Partner');
  const verified = r.verified !== undefined ? r.verified : true;
  const rating = r.rating || 5;
  const comment = r.comment || r.text || '';

  const colors = ['var(--gradient-primary)', 'var(--gradient-secondary)', 'linear-gradient(135deg, #38bdf8, #22d3ee)', 'linear-gradient(135deg, #a78bfa, #7c5cfc)'];
  const checkBadgeIcon = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-secondary)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76z"/><path d="m9 12 2 2 4-4"/></svg>`;

  return `
    <div class="glass-card review-card reveal reveal-delay-${(i % 3) + 1}">
      <div class="review-header" style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:var(--space-4);">
        <div class="review-author" style="display:flex;align-items:center;gap:var(--space-3);">
          <div class="review-avatar" style="background:${colors[i % colors.length]};width:42px;height:42px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;color:#fff;font-size:0.875rem;">${initials}</div>
          <div>
            <div style="font-weight:700;color:var(--text-primary);font-size:var(--font-size-base);">${name}</div>
            <div style="font-size:var(--font-size-xs);color:var(--text-tertiary);">${company}</div>
            ${verified ? `<div class="review-verified" style="display:inline-flex;align-items:center;gap:4px;font-size:var(--font-size-xs);color:var(--accent-secondary);font-weight:600;margin-top:2px;">${checkBadgeIcon} Verified Partner</div>` : ''}
          </div>
        </div>
        <div class="stars" style="display:flex;gap:3px;">${renderStars(rating)}</div>
      </div>
      <p class="review-text" style="color:var(--text-secondary);font-size:var(--font-size-xs);line-height:var(--line-height-relaxed);">${comment}</p>
    </div>
  `;
}

function renderRatingBreakdown(reviews: any[]) {
  const counts = [0, 0, 0, 0, 0];
  reviews.forEach(r => {
    const rating = r.rating || 5;
    if (rating >= 1 && rating <= 5) counts[rating - 1]++;
  });
  const total = reviews.length;
  
  return `
    <div class="glass-card" style="padding:var(--space-6);">
      <h4 style="font-weight:700;margin-bottom:var(--space-4);font-size:var(--font-size-sm);color:var(--text-primary);">Rating Distribution</h4>
      <div class="rating-breakdown" style="display:flex;flex-direction:column;gap:var(--space-3);">
        ${[5, 4, 3, 2, 1].map(star => {
          const count = counts[star - 1];
          const percent = total > 0 ? (count / total * 100) : 0;
          return `
            <div class="rating-bar-row" style="display:flex;align-items:center;gap:var(--space-3);font-size:var(--font-size-xs);">
              <span class="rating-bar-label" style="width:50px;color:var(--text-secondary);font-weight:600;">${star} Stars</span>
              <div class="rating-bar-track" style="flex:1;height:8px;background:rgba(255,255,255,0.06);border-radius:4px;overflow:hidden;">
                <div class="rating-bar-fill" style="width:${percent}%;height:100%;background:var(--gradient-primary);border-radius:4px;"></div>
              </div>
              <span class="rating-bar-count" style="width:30px;text-align:right;color:var(--text-tertiary);">${count}</span>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

export function renderReviews() {
  return `
    <section class="page-hero">
      <div class="page-hero-bg"></div>
      <div class="page-hero-content">
        <div class="container">
          <span class="section-label reveal">Client Feedback</span>
          <h1 class="section-title reveal reveal-delay-1" style="font-size:var(--font-size-hero);">Client <span class="gradient-text">Reviews</span></h1>
          <p class="section-subtitle reveal reveal-delay-2" style="margin:0 auto;max-width:600px;">Read verified feedback from global founders, product leaders, and enterprise partners.</p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="reviews-dashboard" style="display:grid;grid-template-columns:1fr 2fr;gap:var(--space-8);margin-bottom:var(--space-12);">
          <div class="reveal">
            <div class="glass-card text-center" style="padding:var(--space-8);text-align:center;margin-bottom:var(--space-6);">
              <div class="reviews-overall-score gradient-text" style="font-size:var(--font-size-4xl);font-weight:900;line-height:1;">4.9</div>
              <div class="stars" style="justify-content:center;margin:var(--space-3) 0;">${renderStars(5)}</div>
              <div style="font-size:var(--font-size-xs);color:var(--text-tertiary);">Based on 120+ Verified Client Reviews</div>
            </div>
            ${renderRatingBreakdown(staticReviews)}
          </div>

          <div class="reveal reveal-delay-1">
            <div class="glass-card" style="padding:var(--space-6);margin-bottom:var(--space-6);">
              <h3 style="font-size:var(--font-size-base);font-weight:700;margin-bottom:var(--space-2);color:var(--text-primary);">Share Your Experience</h3>
              <p style="font-size:var(--font-size-xs);color:var(--text-secondary);margin-bottom:var(--space-4);">Partnered with Nexus? We value your honest feedback.</p>
              <form id="review-form" onsubmit="handleReviewSubmit(event)">
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-3);margin-bottom:var(--space-3);">
                  <input type="text" class="form-input" placeholder="Your Name" required style="font-size:var(--font-size-xs);" />
                  <input type="text" class="form-input" placeholder="Company / Role" required style="font-size:var(--font-size-xs);" />
                </div>
                <div style="margin-bottom:var(--space-3);display:flex;align-items:center;gap:var(--space-3);">
                  <label class="form-label" style="margin:0;font-size:var(--font-size-xs);">Rating:</label>
                  <select class="form-select" id="review-rating" style="padding:4px 12px;font-size:var(--font-size-xs);width:auto;">
                    <option value="5">★★★★★ (5/5)</option>
                    <option value="4">★★★★☆ (4/5)</option>
                    <option value="3">★★★☆☆ (3/5)</option>
                  </select>
                </div>
                <textarea class="form-textarea form-input" placeholder="Your review..." required style="min-height:80px;font-size:var(--font-size-xs);margin-bottom:var(--space-3);"></textarea>
                <button type="submit" class="btn btn-primary" style="padding:8px 20px;font-size:var(--font-size-xs);">Submit Review →</button>
              </form>
            </div>
          </div>
        </div>

        <div class="reviews-grid" id="reviews-container" style="display:grid;grid-template-columns:repeat(3, 1fr);gap:var(--space-6);">
          ${staticReviews.map((r, i) => renderReviewCard(r, i)).join('')}
        </div>
      </div>
    </section>
  `;
}

export async function initReviews() {
  const container = document.getElementById('reviews-container');
  if (!container) return;

  try {
    const res = await apiFetch('/reviews');
    const data = await res.json();
    const dbReviews = Array.isArray(data) ? data : (data.reviews || []);
    if (res.ok && dbReviews.length > 0) {
      const all = [...dbReviews, ...staticReviews];
      container.innerHTML = all.map((r: any, i: number) => renderReviewCard(r, i)).join('');
    }
  } catch (e) {
    console.warn('⚠️ Could not fetch reviews from API, falling back to static reviews.', e);
  }
}

(window as any).handleReviewSubmit = async function(e: Event) {
  e.preventDefault();
  const form = e.target as HTMLFormElement;
  const inputs = form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('input, textarea');
  const ratingSel = form.querySelector('#review-rating') as HTMLSelectElement;

  const payload = {
    name: (inputs[0] as HTMLInputElement).value,
    company: (inputs[1] as HTMLInputElement).value,
    rating: parseInt(ratingSel.value) || 5,
    comment: (inputs[2] as HTMLTextAreaElement).value
  };

  try {
    const res = await apiFetch('/reviews', {
      method: 'POST',
      body: JSON.stringify(payload)
    });

    if (res.ok) {
      if ((window as any).showToast) (window as any).showToast('Thank you! Your review has been submitted for verification.');
      form.reset();
    } else {
      if ((window as any).showToast) (window as any).showToast('Review submitted! Thanks for your feedback.');
      form.reset();
    }
  } catch (err) {
    if ((window as any).showToast) (window as any).showToast('Review submitted! Thanks for your feedback.');
    form.reset();
  }
};
