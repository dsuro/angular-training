import { ConcatNamesPipe } from './concat-names.pipe';

describe('ConcatNamesPipe', () => {
  it('create an instance', () => {
    const pipe = new ConcatNamesPipe();
    expect(pipe).toBeTruthy();
  });
});
