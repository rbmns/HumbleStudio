-- Update Lanzarote Surf Lessons project to use the new hero image
UPDATE public.projects 
SET 
  main_image = '/images/portfolio/lanzarote-surf-lessons-hero.png',
  featured_image = '/images/portfolio/lanzarote-surf-lessons-hero.png',
  updated_at = now()
WHERE id = '66573f7e-74c9-48c0-b21c-de8fa0b0fe3e';

-- Delete any existing media for this project first to avoid conflicts
DELETE FROM public.projects_media 
WHERE project_id = '66573f7e-74c9-48c0-b21c-de8fa0b0fe3e';

-- Insert the primary media for Lanzarote Surf Lessons project
INSERT INTO public.projects_media (project_id, media_url, is_primary, display_order, media_type, alt_text)
VALUES (
  '66573f7e-74c9-48c0-b21c-de8fa0b0fe3e',
  '/images/portfolio/lanzarote-surf-lessons-hero.png',
  true,
  0,
  'image',
  'Lanzarote Surf Lessons with SmyleSurf - Private & Small Group Surf Coaching'
);