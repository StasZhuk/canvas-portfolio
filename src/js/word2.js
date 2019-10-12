const WORD2 = [78.4,259.9,80,253.6,58.8,262.2,
    58.8,262.2,80,246.3,15.1,262.2,
    15.1,262.2,80,246.3,15.1,246.3,
    33.4,337.7,78.4,259.9,58.8,262.2,
    80,253.6,80,246.3,58.8,262.2,
    78.9,353.7,78.9,337.7,12.2,353.7,
    12.2,353.7,33.4,337.7,12.2,345.8,
    78.9,337.7,33.4,337.7,12.2,353.7,
    13.7,340.4,33.4,337.7,58.8,262.2,
    12.2,345.8,33.4,337.7,12.6,343,
    12.6,343,33.4,337.7,13.7,340.4,
    150.6,306.8,166.9,246.3,150.6,292.5,
    109.4,292.5,150.6,306.8,150.6,292.5,
    109.4,306.8,150.6,306.8,109.4,292.5,
    150.6,292.5,166.9,246.3,150.6,246.3,
    109.4,353.7,109.4,306.8,93,353.7,
    166.9,353.7,166.9,246.3,150.6,306.8,
    93,353.7,109.4,306.8,109.4,292.5,
    150.6,353.7,166.9,353.7,150.6,306.8,
    109.4,246.3,93,246.3,109.4,292.5,
    93,246.3,93,353.7,109.4,292.5,
    221.8,354.9,236.9,351.6,230.2,335.7,
    248.4,342.4,255.6,328.3,240.4,321.8,
    236.9,351.6,248.4,342.4,236.5,330.2,
    230.2,335.7,236.9,351.6,236.5,330.2,
    236.5,330.2,248.4,342.4,240.4,321.8,
    258.1,310.6,258.1,246.3,241.8,310.6,
    241.8,310.6,258.1,246.3,241.8,246.3,
    240.4,321.8,258.1,310.6,241.8,310.6,
    255.6,328.3,258.1,310.6,240.4,321.8,
    203.1,321.7,195.1,342.4,207,330.2,
    201.7,310.5,187.9,328.3,203.1,321.7,
    185.4,310.6,187.9,328.3,201.7,310.5,
    185.4,246.3,185.4,310.6,201.7,246.3,
    187.9,328.3,195.1,342.4,203.1,321.7,
    201.7,246.3,185.4,310.6,201.7,310.5,
    206.6,351.6,221.8,354.9,213.3,335.7,
    221.8,337.6,221.8,354.9,230.2,335.7,
    213.3,335.7,221.8,354.9,221.8,337.6,
    207,330.2,206.6,351.6,213.3,335.7,
    195.1,342.4,206.6,351.6,207,330.2,
    303.1,288,302.4,307.3,313.9,296.7,
    313.9,296.7,302.4,307.3,317.5,299.2,
    319.3,290.9,303.1,288,313.9,296.7,
    327.3,250.5,303.1,288,319.3,290.9,
    305.1,310.1,329.9,349.8,320.5,303.4,
    317.5,299.2,305.1,310.1,320.5,303.4,
    336.6,353.7,351,353.7,320.5,303.4,
    332.3,352.7,336.6,353.7,320.5,303.4,
    329.9,349.8,332.3,352.7,320.5,303.4,
    330.5,247.2,327.3,250.5,319.3,290.9,
    302.4,307.3,305.1,310.1,317.5,299.2,
    292.9,246.3,276.6,246.3,292.9,291.3,
    276.6,246.3,292.9,306.5,292.9,291.3,
    276.6,353.7,292.9,306.5,276.6,246.3,
    292.9,353.7,292.9,306.5,276.6,353.7,
    292.9,291.3,292.9,306.5,296.7,291.3,
    296.7,291.3,298,306.5,300.5,290.5,
    348.8,246.3,334.7,246.3,319.3,290.9,
    292.9,306.5,298,306.5,296.7,291.3,
    300.5,290.5,302.4,307.3,303.1,288,
    334.7,246.3,330.5,247.2,319.3,290.9,
    298,306.5,302.4,307.3,300.5,290.5,
    382.9,335.2,376.3,350.8,394.5,337.8,
    353.2,321.9,362.3,339.3,374.2,327.7,
    362.3,339.3,376.3,350.8,382.9,335.2,
    374.2,327.7,362.3,339.3,382.9,335.2,
    366.7,300,350,300,368.6,315.9,
    350,300,353.2,321.9,368.6,315.9,
    368.6,315.9,353.2,321.9,374.2,327.7,
    435.7,321.9,438.9,300,422.2,300,
    414.7,327.7,426.7,339.3,420.3,315.9,
    376.3,350.8,394.5,354.9,394.5,337.8,
    406,335.2,412.7,350.8,414.7,327.7,
    426.7,339.3,435.7,321.9,420.3,315.9,
    412.7,350.8,426.7,339.3,414.7,327.7,
    422.2,300,438.9,300,437.5,285,
    394.5,337.8,394.5,354.9,406,335.2,
    420.3,315.9,435.7,321.9,422.2,300,
    353.2,278.1,350,300,366.7,300,
    368.6,284.1,353.2,278.1,366.7,300,
    433.3,271.8,426.7,260.7,420.3,284.1,
    422.2,300,437.5,285,420.3,284.1,
    420.3,284.1,426.7,260.7,414.7,272.2,
    394.5,354.9,412.7,350.8,406,335.2,
    417.8,252.3,407,247,406,264.7,
    362.3,260.7,353.2,278.1,368.6,284.1,
    426.7,260.7,417.8,252.3,414.7,272.2,
    414.7,272.2,417.8,252.3,406,264.7,
    437.5,285,433.3,271.8,420.3,284.1,
    382.9,264.7,376.3,249.2,374.2,272.2,
    376.3,249.2,362.3,260.7,374.2,272.2,
    394.5,245.1,376.3,249.2,382.9,264.7,
    406,264.7,407,247,394.5,262.1,
    374.2,272.2,362.3,260.7,368.6,284.1,
    407,247,394.5,245.1,394.5,262.1,
    394.5,262.1,394.5,245.1,382.9,264.7,
    456.5,247.6,453.1,246.3,459.6,281.3,
    458.5,250.8,456.5,247.6,459.6,281.3,
    453.1,246.3,440,246.3,459.6,281.3,
    483,331.3,481.2,323.4,459.6,281.3,
    440,246.3,475.4,353.7,459.6,281.3,
    481.2,323.4,479.2,316.3,459.6,281.3,
    479.2,316.3,458.5,250.8,459.6,281.3,
    475.4,353.7,490.1,353.7,483,331.3,
    486.4,316.3,484.6,323.4,501.3,300,
    508.9,247.7,507,250.8,501.3,300,
    507,250.8,486.4,316.3,501.3,300,
    484.6,323.4,483,331.3,501.3,300,
    501.3,300,490.1,353.7,525.6,246.3,
    483,331.3,490.1,353.7,501.3,300,
    501.3,300,501.3,300,501.3,300,
    501.3,300,501.3,300,501.3,300,
    512.4,246.3,508.9,247.7,501.3,300,
    459.6,281.3,475.4,353.7,483,331.3,
    501.3,300,501.3,300,501.3,300,
    501.3,300,501.3,300,501.3,300,
    501.3,300,525.6,246.3,512.4,246.3,
    579.2,265.8,583.3,256.4,577.6,268.1,
    544.3,274.9,529.1,275.9,546,281.2,
    529.1,275.9,530.8,288.3,546,281.2,
    531,264.5,529.1,275.9,544.3,274.9,
    535.4,296.7,541.9,302.1,546,281.2,
    530.8,288.3,535.4,296.7,546,281.2,
    536.5,254.6,531,264.5,545.2,269.4,
    545.5,247.7,536.5,254.6,547.7,265.2,
    552,262.4,545.5,247.7,547.7,265.2,
    546,281.2,541.9,302.1,550.6,285.5,
    545.2,269.4,531,264.5,544.3,274.9,
    547.7,265.2,536.5,254.6,545.2,269.4,
    578.5,300.8,567.8,316,583.1,308.7,
    563.2,311.5,567.8,316,578.5,300.8,
    557.8,245.1,545.5,247.7,552,262.4,
    525.5,340.8,531.3,346.6,530.3,331.2,
    569.5,322.9,584.8,320.1,583.1,308.7,
    572,295.4,563.2,311.5,578.5,300.8,
    564.6,291.7,556.7,308.4,572,295.4,
    550.6,285.5,549.3,305.6,557.1,288.7,
    549.3,305.6,556.7,308.4,557.1,288.7,
    541.9,302.1,549.3,305.6,550.6,285.5,
    556.7,308.4,563.2,311.5,572,295.4,
    557.1,288.7,556.7,308.4,564.6,291.7,
    567.8,316,569.5,322.9,583.1,308.7,
    538.3,351,546.1,353.9,547.1,337,
    541.4,333.7,538.3,351,547.1,337,
    547.1,337,546.1,353.9,554.9,338.6,
    554.4,354.9,567.3,352.2,554.9,338.6,
    546.1,353.9,554.4,354.9,554.9,338.6,
    554.9,338.6,567.3,352.2,565.7,334.5,
    531.3,346.6,538.3,351,541.4,333.7,
    558,261.4,557.8,245.1,552,262.4,
    530.3,331.2,531.3,346.6,531.9,329.5,
    531.9,329.5,531.3,346.6,533.9,328.8,
    533.9,328.8,531.3,346.6,537.2,330.3,
    537.2,330.3,531.3,346.6,541.4,333.7,
    565.7,334.5,582.8,333.7,569.5,322.9,
    569.3,265.1,583.3,256.4,564.5,262.5,
    583.3,256.4,572.1,248.1,564.5,262.5,
    572.9,267.6,583.3,256.4,569.3,265.1,
    567.3,352.2,576.9,344.8,565.7,334.5,
    564.5,262.5,572.1,248.1,558,261.4,
    572.1,248.1,557.8,245.1,558,261.4,
    575.6,268.8,583.3,256.4,572.9,267.6,
    582.8,333.7,584.8,320.1,569.5,322.9,
    576.9,344.8,582.8,333.7,565.7,334.5,
    577.6,268.1,583.3,256.4,575.6,268.8,
    636.3,296.7,627.5,310.1,639.9,299.2,
    624.9,307.3,627.5,310.1,636.3,296.7,
    625.6,288,623,290.5,636.3,296.7,
    641.7,290.9,625.6,288,636.3,296.7,
    659.1,353.7,673.5,353.7,643,303.4,
    639.9,299.2,627.5,310.1,643,303.4,
    654.7,352.7,659.1,353.7,643,303.4,
    649.8,250.5,625.6,288,641.7,290.9,
    652.3,349.8,654.7,352.7,643,303.4,
    627.5,310.1,652.3,349.8,643,303.4,
    623,290.5,624.9,307.3,636.3,296.7,
    599,246.3,599,353.7,615.3,291.3,
    599,353.7,615.3,306.5,615.3,291.3,
    615.3,246.3,599,246.3,615.3,291.3,
    615.3,353.7,615.3,306.5,599,353.7,
    615.3,306.5,620.5,306.5,615.3,291.3,
    619.2,291.3,620.5,306.5,623,290.5,
    657.2,246.3,653,247.2,641.7,290.9,
    671.3,246.3,657.2,246.3,641.7,290.9,
    620.5,306.5,624.9,307.3,623,290.5,
    653,247.2,649.8,250.5,641.7,290.9,
    615.3,291.3,620.5,306.5,619.2,291.3,
    690.4,300,698.6,246.3,682.2,246.3,
    698.6,353.7,698.6,246.3,690.4,300,
    682.2,246.3,682.2,353.7,690.4,300,
    682.2,353.7,698.6,353.7,690.4,300,
    747.8,298.3,755.8,312.1,749.6,292.6,
    739.6,312.1,755.8,312.1,747.8,298.3,
    745.9,292.6,739.6,312.1,747.8,298.3,
    752,286.6,755.8,312.1,768,250.7,
    749.6,292.6,755.8,312.1,752,286.6,
    773.4,246.3,755.8,312.1,787.8,246.3,
    770,247.7,755.8,312.1,773.4,246.3,
    768,250.7,755.8,312.1,770,247.7,
    739.6,353.7,755.8,353.7,747.7,332.9,
    707.6,246.3,739.6,312.1,722,246.3,
    743.5,286.6,739.6,312.1,745.9,292.6,
    755.8,353.7,755.8,312.1,747.7,332.9,
    739.6,312.1,739.6,353.7,747.7,332.9,
    747.7,332.9,755.8,312.1,739.6,312.1,
    722,246.3,739.6,312.1,725.3,247.6,
    727.4,250.7,739.6,312.1,743.5,286.6,
    725.3,247.6,739.6,312.1,727.4,250.7];

export default WORD2;