export type Certificate = {
  id: string;
  title: string;
  /** Include issuer and issue date only after reading them from the document. */
  issuer?: string;
  issuedOn?: string;
  /** Local image preview; PDF originals need an image preview for WebGL textures. */
  preview: string;
  previewAlt: string;
  original: string;
};

export const certificateCollection = {
  sourceFolder: 'https://drive.google.com/drive/folders/19JgDl9R84wS3I71DCtC8TUgE0YNCGer4?usp=sharing',
  // Waiting for the actual files; never substitute demo certificates or stock images.
  items: [] as Certificate[],
};
