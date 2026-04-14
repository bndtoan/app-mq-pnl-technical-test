
export type StyleType = 'bold' | 'medium' | 'regular';

export type SizeType = 'text12' | 'text14' | 'text16' | 'text24';

export const textStyle: Record<StyleType, string> = {
  bold: 'PingFang-Bold',
  medium: 'PingFang-Medium',
  regular: 'PingFang-Regular',
};

export const textSize: Record<SizeType, number> = {
  'text12': 12,
  'text14': 14,
  'text16': 16,
  'text24': 24,
};

export const textLineHeight: Record<SizeType, number> = {
  'text12': 15,
  'text14': 17,
  'text16': 19,
  'text24': 36,
};
