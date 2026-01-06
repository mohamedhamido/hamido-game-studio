export type Project = {
  id: string;
  title: string;
  platform: string;
  shortTagline: string;
  description: string;
  features: string[];
  coverImage: string;
  galleryImages: string[];
  videoEmbedUrl: string;
  downloadUrl: string;
};

export const projects: Project[] = [
  {
    id: 'unknown-survival',
    title: 'النجاة من المجهول',
    platform: 'PC',
    shortTagline: 'تجربة رعب ونجاة في عالم غامض.',
    description: 'لعبة رعب/نجاة في مكان مجهول بأجواء توتر وغموض.',
    features: ['Atmospheric horror experience', 'Focused on tension and exploration'],
    coverImage: '/images/unknown-survival-cover.jpg',
    galleryImages: [],
    videoEmbedUrl:
      'https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1652041409501247%2F&show_text=false&width=560&t=0',
    downloadUrl: '#'
  },
  {
    id: 'treasure-hunter',
    title: 'صائد الكنوز',
    platform: 'Mobile',
    shortTagline: 'مغامرة موبايل خفيفة للبحث عن الكنوز.',
    description: 'لعبة موبايل بمراحل وتحديات للبحث عن الكنوز وجمع الجوائز.',
    features: ['Designed for mobile play', 'Casual but challenging gameplay'],
    coverImage: '/images/treasure-hunter-cover.jpg',
    galleryImages: [],
    videoEmbedUrl:
      'https://www.facebook.com/plugins/video.php?height=317&href=https%3A%2F%2Fwww.facebook.com%2Fmohamed.hamido.379196%2Fvideos%2F7975101415883382%2F&show_text=false&width=560&t=0',
    downloadUrl: '#'
  }
];
