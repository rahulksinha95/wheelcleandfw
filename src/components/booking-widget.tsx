'use client';

export default function BookingWidget() {
  // Full widget URL matching the settings you provided
  const widgetSrc = "https://wheelcleandfw.simplybook.me/v2/?widget-type=iframe&theme=air&timeline=modern&datepicker=top_calendar&theme_settings[timeline_hide_unavailable]=1&theme_settings[hide_past_days]=0&theme_settings[timeline_show_end_time]=0&theme_settings[timeline_modern_display]=as_slots&theme_settings[sb_base_color]=%238d9eab&theme_settings[display_item_mode]=block&theme_settings[booking_nav_bg_color]=%238d9eab&theme_settings[body_bg_color]=%23ffffff&theme_settings[dark_font_color]=%23212528&theme_settings[light_font_color]=%23ffffff&theme_settings[btn_color_1]=%23b9c4ce&theme_settings[sb_company_label_color]=%232d4354&theme_settings[hide_img_mode]=1&theme_settings[show_sidebar]=1&theme_settings[sb_busy]=%23c7b3b3&theme_settings[sb_available]=%23ebddde";

  return (
    <section
      className="booking-section"
      style={{
        padding: '4rem 1rem',
        background: '#f8f9fa',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div style={{ maxWidth: '920px', margin: '0 auto' }}>
        <h2
          style={{
            textAlign: 'center',
            marginBottom: '1.5rem',
            fontSize: '2rem',
            fontWeight: 600,
          }}
        >
          Schedule Your Cleaning
        </h2>

        <div
          style={{
            width: '100%',
            height: '720px',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
            background: '#FAEDDA',
          }}
        >
          <iframe
            src={widgetSrc}
            title="Book a WheelCleanDFW appointment"
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
              display: 'block',
            }}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}