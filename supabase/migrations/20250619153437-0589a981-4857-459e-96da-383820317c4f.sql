
-- Insert the surf instructor project into the projects table
INSERT INTO projects (
  title,
  description,
  slug,
  categories,
  main_image,
  featured_image,
  link,
  build_time,
  is_featured,
  is_coming_soon,
  technologies,
  key_features,
  challenge,
  solution,
  results,
  created_at
) VALUES (
  'Surf Coach E.',
  'A bilingual professional website for a certified surf coach offering private and freelance lessons in Spain, designed to establish credibility and attract clients.',
  'surf-instructor',
  ARRAY['web', 'freelance'],
  '/lovable-uploads/62039a47-ce32-4800-bfec-e882f691e01f.png',
  '/lovable-uploads/62039a47-ce32-4800-bfec-e882f691e01f.png',
  'https://coastvibe-surf.lovable.app',
  '5 days',
  true,
  false,
  ARRAY['React', 'TypeScript', 'Tailwind CSS', 'Lovable.dev'],
  ARRAY['Bilingual support (English/Dutch)', 'Mobile-optimized design', 'Professional certification display', 'Contact optimization', 'Coastal design theme'],
  'Surf Coach E. needed a digital presence to showcase his surf coaching services and establish credibility within the surf and hospitality industries. As a certified surf coach offering services in Spain, he required a professional platform that could serve multiple purposes.',
  'We designed and developed coastvibe-surf.lovable.app using Lovable.dev, creating a clean, coastal-themed website that perfectly captures the professional surf coaching brand while maintaining an approachable, authentic feel.',
  'Surf Coach E. now has a professional, approachable online presence that effectively communicates his unique surf coaching approach and qualifications. The bilingual setup broadens his audience and client base, allowing him to serve both English and Dutch-speaking clients.',
  NOW()
);

-- Insert media for the surf instructor project
INSERT INTO projects_media (
  project_id,
  media_url,
  alt_text,
  media_type,
  is_primary,
  display_order
) VALUES (
  (SELECT id FROM projects WHERE slug = 'surf-instructor'),
  '/lovable-uploads/62039a47-ce32-4800-bfec-e882f691e01f.png',
  'Surf Coach E. website homepage',
  'image',
  true,
  1
);
