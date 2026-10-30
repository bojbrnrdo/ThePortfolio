/** Matching cubic topology lets GSAP interpolate the same ribbons through every scene. */
const forms = [
  [420,1050, 560,920,650,910,820,690, 1040,410,1060,530,1190,280, 1320,30,1450,20,1690,-140],
  [550,1050, 600,850,1080,900,1140,670, 1200,440,830,480,1040,270, 1250,60,1400,180,1600,-100],
  [-150,750, 220,750,400,730,650,660, 900,590,920,390,1150,340, 1380,290,1500,350,1660,240],
  [-100,900, 340,900,1090,930,1140,740, 1190,550,1050,170,1250,160, 1450,150,1560,220,1700,0],
  [-120,440, 200,180,500,950,820,690, 1140,430,900,160,1160,220, 1420,280,1450,700,1640,480],
  [-120,800, 200,650,380,900,690,650, 1000,400,900,700,1190,480, 1480,260,1410,190,1680,140],
  [-100,900, 300,890,520,670,780,640, 1040,610,1000,710,1230,590, 1460,470,1540,280,1700,270],
];
export const ribbonCount = 9;
export function ribbonPath(form: number, line: number) {
  const offset = (line - (ribbonCount - 1) / 2) * 18;
  const points = forms[form].map((value, index) => Math.round(value + (index % 2 ? offset : offset * .32)));
  return `M${points[0]},${points[1]} C${points.slice(2,8).join(',')} C${points.slice(8,14).join(',')} C${points.slice(14,20).join(',')}`;
}
export const ribbonFormCount = forms.length;
