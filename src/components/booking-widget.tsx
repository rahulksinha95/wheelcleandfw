'use client';

import { useEffect } from 'react';

export default function BookingWidget() {
  useEffect(() => {
    if (document.getElementById('simplybook-widget-script')) return;

    const script = document.createElement('script');
    script.id = 'simplybook-widget-script';
    script.src = '//widget.simplybook.me/v2/widget/widget.js';
    script.async = true;

    script.onload = () => {
      // @ts-ignore
      if (typeof SimplybookWidget !== 'undefined') {
        // @ts-ignore
        new SimplybookWidget({
          widget_type: 'iframe',
          url: 'https://wheelcleandfw.simplybook.me',
          theme: 'air',
          theme_settings: {
            timeline_hide_unavailable: '1',
            hide_past_days: '0',
            timeline_show_end_time: '0',
            timeline_modern_display: 'as_slots',
            sb_base_color: '#8d9eab',
            display_item_mode: 'block',
            booking_nav_bg_color: '#8d9eab',
            body_bg_color: '#ffffff',
            sb_review_image: '',
            dark_font_color: '#212528',
            light_font_color: '#ffffff',
            btn_color_1: '#b9c4ce',
            sb_company_label_color: '#2d4354',
            hide_img_mode: '1',
            show_sidebar: '1',
            sb_busy: '#c7b3b3',
            sb_available: '#ebddde',
          },
          timeline: 'modern',
          datepicker: 'top_calendar',
          is_rtl: false,
          app_config: {
            clear_session: 0,
            allow_switch_to_ada: 1,
            predefined: [],
          },
        });
      }
    };

    document.body.appendChild(script);
  }, []);

  return (
    <section className="booking-section" style={{ padding: '4rem 1rem', background: '#f9fafb' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', fontSize: '2rem' }}>
          Schedule Your Cleaning
        </h2>
        <div 
          id="sbw_widget" 
          style={{ 
            width: '100%', 
            minHeight: '650px',
            maxHeight: '800px',
            overflow: 'auto',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
          }}
        />
      </div>
    </section>
  );
}