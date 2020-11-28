import * as slugify from 'slugify';

export class CreateSlugService {
  public create(value: string) {
    return slugify.default(value, '_')
  }
}