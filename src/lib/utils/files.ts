import { mkdirSync, writeFileSync, existsSync } from 'fs';
import path from 'path';

export const saveFile = async (file: File, title: string): Promise<string> => {
  if (!(file instanceof File)) throw new Error("Type de fichier invalide");

  const uploadDir = path.resolve('static/uploads');
  if (!existsSync(uploadDir)) {
    mkdirSync(uploadDir, { recursive: true });
  }

  const filename = `${title}-${Date.now()}-${file.name}`;
  const filePath = path.join(uploadDir, filename);

  const buffer = Buffer.from(await file.arrayBuffer());
  writeFileSync(filePath, buffer);

  return `/uploads/${filename}`;
};
