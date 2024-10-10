import type { StoreType } from './types.ts';
import { getCreate } from '@hooks/useAppStore/utils/getCreate.ts';
import { slice } from './slice.ts';

export * from './types.ts';

export const useJlptStore = getCreate<StoreType>(slice, 'jlpt-store');
