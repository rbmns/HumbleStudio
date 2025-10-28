-- Update Lizzy van Baaren project to use the new hero image
UPDATE public.projects 
SET 
  main_image = '/images/portfolio/lizzy-van-baaren-hero.png',
  featured_image = '/images/portfolio/lizzy-van-baaren-hero.png',
  updated_at = now()
WHERE id = '871a5841-8a5f-46a4-808f-b3931f113efb';

-- Delete any existing media for this project first to avoid conflicts
DELETE FROM public.projects_media 
WHERE project_id = '871a5841-8a5f-46a4-808f-b3931f113efb';

-- Insert the primary media for Lizzy van Baaren project
INSERT INTO public.projects_media (project_id, media_url, is_primary, display_order, media_type, alt_text)
VALUES (
  '871a5841-8a5f-46a4-808f-b3931f113efb',
  '/images/portfolio/lizzy-van-baaren-hero.png',
  true,
  0,
  'image',
  'Lizzy van Baaren - Human Design Specialist'
);