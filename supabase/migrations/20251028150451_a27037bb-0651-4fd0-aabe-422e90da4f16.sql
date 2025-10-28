-- Update The Lineup project to use the new hero image
UPDATE public.projects 
SET 
  main_image = '/images/portfolio/the-lineup-hero.png',
  featured_image = '/images/portfolio/the-lineup-hero.png',
  updated_at = now()
WHERE id = '6eee9d16-e7f2-405f-b323-eb8d2f81b0de';

-- Update or insert the primary media for The Lineup project
INSERT INTO public.projects_media (project_id, media_url, is_primary, display_order, media_type, alt_text)
VALUES (
  '6eee9d16-e7f2-405f-b323-eb8d2f81b0de',
  '/images/portfolio/the-lineup-hero.png',
  true,
  0,
  'image',
  'The Lineup - Your local schedule for beach life in Portugal'
)
ON CONFLICT (id) 
DO UPDATE SET 
  media_url = EXCLUDED.media_url,
  is_primary = EXCLUDED.is_primary,
  display_order = EXCLUDED.display_order,
  alt_text = EXCLUDED.alt_text;

-- Set all other media for this project to not be primary
UPDATE public.projects_media 
SET is_primary = false 
WHERE project_id = '6eee9d16-e7f2-405f-b323-eb8d2f81b0de' 
  AND media_url != '/images/portfolio/the-lineup-hero.png';