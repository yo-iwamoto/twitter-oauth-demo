import { z } from 'zod';

const schema = z.object({
  code: z.string(),
  message: z.string(),
});

export const parseFirebaseError = (error: unknown): z.infer<typeof schema> | null => {
  try {
    return schema.parse(error);
  } catch (_) {
    return null;
  }
};
