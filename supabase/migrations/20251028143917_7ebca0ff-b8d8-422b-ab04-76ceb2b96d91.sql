-- Delete Bibi's project and all related media
DELETE FROM projects_media WHERE project_id = '455bc0f8-afe5-4ee0-b715-28f239c7f061';
DELETE FROM projects WHERE id = '455bc0f8-afe5-4ee0-b715-28f239c7f061';

-- Add Lizzy Van Baaren - Human Design Coach project
INSERT INTO projects (
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
  'Lizzy Van Baaren',
  'lizzy-van-baaren',
  'Human Design Coach',
  'A personalized coaching website helping individuals discover their unique Human Design blueprint and unlock their full potential through customized guidance and insights.',
  ARRAY['Custom Site'],
  true,
  true,
  now(),
  now()
);