-- Remove coming soon status and update Lanzarote Surf Lessons project with content
UPDATE projects
SET 
  is_coming_soon = false,
  description = 'Professional surf school offering private and small-group surf lessons at Famara Beach, Lanzarote. Experienced multilingual coaching with surfskate training for all skill levels.',
  challenge = 'SmyleSurf needed a professional online presence to attract surf students in Lanzarote''s competitive surf lesson market. The instructor required a multilingual platform that could showcase his decade of experience, communicate his unique teaching approach with surfskate training, and help potential clients discover his services through Google search.',
  solution = 'We created a clean, SEO-optimized website for lanzarotesurflessons.com that positions SmyleSurf as a premium surf school. The site features clear service descriptions, multilingual support (English, Spanish, Italian), professional imagery, and strong calls-to-action. We also set up and optimized his Google Business Profile to maximize local visibility and enable client reviews, which has driven significant visitor traffic.',
  results = 'The combination of the professional website and Google Business Profile has established SmyleSurf as a findable, credible surf school in Lanzarote. The instructor now receives consistent inquiries through both the website and Google, with growing positive reviews building social proof. The site effectively communicates his unique approach with surfskate training and attracts students of all levels.',
  link = 'https://lanzarotesurflessons.com/',
  categories = ARRAY['Web Design', 'SEO', 'Local Business'],
  key_features = ARRAY[
    'Multilingual Support (EN/ES/IT)',
    'SEO-Optimized Content',
    'Google Business Profile Setup',
    'Mobile-First Design',
    'Clear Service Descriptions',
    'Direct Booking Contact',
    'Equipment & Accommodation Info',
    'Surfskate Training Focus'
  ],
  technologies = ARRAY['React', 'Tailwind CSS', 'SEO Optimization', 'Google Business Profile'],
  build_time = '1 week'
WHERE slug = 'lanzarote-surf-lessons';