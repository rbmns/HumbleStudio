-- Restore Bibi's project (it was deleted, so we need to recreate it)
INSERT INTO projects (
  id,
  title,
  slug,
  subtitle,
  description,
  categories,
  is_coming_soon,
  show_on_home,
  created_at,
  updated_at
) VALUES (
  '455bc0f8-afe5-4ee0-b715-28f239c7f061',
  'BIBI - creative producer',
  'bibi-portfolio',
  'Creative Producer Portfolio',
  'A stunning portfolio website for a creative producer showcasing their work and creative vision.',
  ARRAY['Custom Site'],
  true,
  false,
  now(),
  now()
)
ON CONFLICT (id) DO UPDATE SET
  show_on_home = false,
  updated_at = now();

-- Hide Nonna's Table from the work page
UPDATE projects
SET show_on_home = false
WHERE slug = 'nonnas-table' OR title ILIKE '%nonna%';