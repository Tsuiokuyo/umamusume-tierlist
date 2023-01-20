const events = {
    10021: [25,10,5,5,15,70,160,10],
    10022: [10,10,20,10,20,240,65,10],
    10060: [10,95,5,55,0,20,125,17],
    10074: [30,30,30,30,30,65,110,0],
    10083: [47,0,0,77,0,30,185,15],
    
    20001: [0,0,0,0,20,15,0,0],
    20002: [0,0,0,0,15,0,15,5],
    20003: [15,0,5,0,0,0,0,5],
    20004: [0,5,10,15,0,0,-10,0],
    20005: [5,0,20,0,0,0,0,0],
    20006: [0,5,30,0,0,0,-20,0],
    20007: [0,10,0,0,0,45,0,5],
    20008: [0,15,0,0,0,15,15,0],
    20009: [0,0,5,15,0,15,-10,5],
    20010: [0,0,20,0,0,15,0,5],
    20011: [0,0,5,0,25,0,0,5],
    20012: [0,0,0,0,15,30,0,0],
    20013: [0,0,0,0,0,0,30,0],
    20014: [10,10,5,0,0,0,0,0],
    20015: [0,0,0,20,20,0,0,0],
    20016: [0,0,0,0,0,60,5,5],
    20017: [0,0,0,5,0,15,20,5],
    20018: [0,15,0,5,0,0,30,0],
    20019: [0,10,0,15,0,0,0,0],
    20020: [25,0,0,0,0,15,0,0],
    20021: [10,10,20,10,20,240,65,10],
    20022: [10,5,0,0,0,10,10,5],
    20023: [15,0,0,0,0,30,0,5],
    20024: [0,0,10,0,0,0,20,5],
    20025: [0,0,0,0,25,20,0,0],
    20026: [0,0,0,0,8,0,15,20],
    20027: [3,0,8,0,3,0,0,0],
    20028: [0,15,0,0,15,0,0,5],
    20029: [0,0,5,5,0,0,30,0],
    20030: [10,0,0,0,0,0,10,5],

    20031: [20,0,0,0,0,15,0,5],
    20032: [22,0,12,0,0,0,-15,5],
    20033: [20,0,20,0,0,0,0,5],
    20034: [5,0,0,0,5,10,40,0],
    20035: [0,0,0,0,0,40,10,5],

    20037: [0,0,5,0,0,30,15,0],
    20038: [15,0,15,15,0,0,0,5],
    20039: [30,0,0,0,0,15,0,5],

    20040: [0,10,0,0,0,0,25,5],
    20041: [10,0,0,0,10,0,20,5],
    20042: [30,0,10,0,0,0,-20,5],
    20043: [0,0,0,0,0,0,25,5],
    20044: [20,0,0,0,0,0,0,5],
    20045: [0,0,5,0,0,25,10,5],
    20046: [10,0,0,0,0,30,0,5],
    20047: [0,0,0,0,0,10,20,5],
    20048: [0,0,7,7,0,10,0,15],
    20049: [10,0,0,0,0,40,0,5],
    20050: [15,25,0,0,0,0,0,5],
    20051: [5,0,5,5,0,0,30,5],
    20052: [17,0,10,17,0,7,-10,5],
    20053: [0,10,10,0,0,30,10,5],
    20054: [0,25,0,0,0,10,0,5],

    30001: [35,35,0,25,0,0,-20,0],
    30002: [30,0,10,0,0,0,0,5],
    30003: [15,0,0,0,5,0,30,0],
    30004: [0,55,0,25,0,35,-20,5],
    30005: [0,0,50,0,0,60,0,5],
    30006: [15,0,0,15,20,15,25,5],
    30007: [0,0,25,10,0,0,30,5],
    30008: [25,25,0,0,15,5,30,5],
    30009: [0,35,20,5,0,0,0,5],
    30010: [0,0,0,5,15,45,-10,5],
    30011: [5,5,0,40,5,30,-30,0],
    30012: [0,5,0,50,0,0,0,5],
    30013: [0,35,0,0,35,60,0,0],
    30014: [20,20,0,0,0,0,50,5],
    30015: [25,0,10,0,0,0,0,0],
    30016: [0,20,10,0,0,0,10,0],
    30017: [25,0,25,0,25,0,0,5],
    30018: [5,0,0,0,40,10,-10,5],
    30019: [0,0,0,0,0,0,45,0],
    30020: [15,0,5,15,0,0,0,0],
    30021: [25,10,5,5,15,70,160,10],
    30022: [0,30,0,0,0,0,-10,0],
    30023: [0,10,0,10,0,0,-10,5],
    30024: [0,0,25,10,0,25,0,0],
    30025: [30,0,0,0,0,10,10,0],
    30026: [50,0,0,0,0,0,-10,5],
    30027: [0,35,0,35,5,0,-5,5],
    30028: [12,0,12,0,2,0,10,5],
    30029: [0,52,0,2,3,0,25,0],
    30030: [0,0,15,0,0,25,30,5],
    30031: [0,0,20,20,20,0,0,5],
    30032: [15,10,25,0,0,40,10,0],
    30033: [0,15,15,0,0,0,-40,0],
    30034: [0,5,20,0,5,0,15,5],

    30036: [10,95,5,55,0,20,125,17],

    30038: [0,60,0,0,0,35,-15,5],
    30039: [25,0,0,20,0,0,0,5],
    30040: [0,10,0,30,0,0,30,5],
    30041: [0,0,0,8,8,50,-20,5],
    30042: [0,33,43,18,0,0,-20,0],
    30043: [0,15,0,15,0,50,-10,5],
    30044: [45,0,0,0,0,0,-20,0],
    30045: [5,0,0,0,5,35,10,5],
    30046: [25,35,0,25,0,0,0,5],
    30047: [3,0,18,0,8,0,-5,5],
    30048: [0,0,20,10,10,15,0,0],

    30052: [47,0,0,77,0,30,180,15],
    30053: [17,0,32,10,0,0,0,5],
    30054: [5,0,0,5,10,0,20,5],
    30055: [0,0,0,0,25,30,10,5],
    30056: [0,15,65,0,0,20,-15,5],
    30057: [25,15,0,0,0,0,-25,5],
    30058: [0,7,17,0,0,0,10,5],
    30059: [5,15,0,0,0,10,0,5],
    30060: [7,0,7,30,0,0,-25,5],
    30061: [0,0,10,0,10,10,0,5],
    30062: [15,15,0,0,0,10,0,0],
    30063: [0,60,0,25,5,20,0,10],
    30064: [25,0,35,0,0,0,0,5],
    30065: [0,0,0,0,30,35,0,0],
    30066: [0,10,0,0,35,0,0,5],
    30067: [80,0,0,0,155,85,90,15],
    30068: [10,0,0,0,30,20,0,5],
    30069: [0,25,5,0,0,0,-5,0],
    30070: [0,5,0,30,15,0,-30,5],
    30071: [20,0,45,0,0,20,-20,5],
    30072: [40,0,0,20,0,0,10,5],
    30073: [0,30,0,0,20,0,-5,5],
    30074: [15,0,0,0,0,10,10,0],
    30075: [0,35,0,0,15,0,0,0],
    30076: [30,0,0,0,0,20,0,0],
    30077: [0,0,22,0,17,0,15,5],
    30078: [21,21,21,21,21,7,0,7],
    30079: [8,13,3,0,0,10,-10,5],
    30080: [30,30,30,30,30,65,110,0],
    30081: [68,37,63,15,15,60,90,10],
    30082: [0,0,0,0,10,25,20,5],
    30083: [20,0,0,30,0,0,0,5],
    30084: [35,5,0,0,0,10,-10,5],
    30085: [0,15,15,0,0,50,0,5],
    30086: [22,22,0,0,7,30,0,5],
    30087: [0,30,0,0,10,0,10,10],
    30088: [10,0,0,0,50,0,0,5],
    30089: [0,0,0,35,10,50,-20,5],
    30090: [0,20,0,0,0,50,10,5],
    30091: [10,0,0,0,40,0,15,5],
    30092: [35,0,10,0,0,10,0,5],
    30093: [0,0,25,0,15,20,0,5],
    30094: [0,20,15,50,0,0,-25,1],
    30095: [24,0,20,7,17,10,0,5],
    30096: [0,0,60,0,0,0,-30,5],
    30097: [0,0,10,0,30,10,20,5],
    30098: [0,4,12,0,0,2,90,5],
    30099: [0,30,0,0,13,0,30,5],
    30100: [0,0,0,0,40,0,5,5],
    30101: [10,10,0,0,10,40,10,5],
    30102: [12,0,7,37,0,30,0,5],
    30103: [7,7,7,7,0,50,0,5],
    30104: [0,30,0,0,10,10,0,5],
    30105: [20,10,10,10,10,0,-10,5],
    30106: [0,0,27,0,17,0,0,5],
    30107: [60,0,5,0,15,0,0,15],
    30108: [20,20,0,0,30,50,10,5],
    30109: [0,0,0,35,0,10,0,5],
    30110: [0,15,0,0,0,0,75,5],
    30111: [0,0,25,0,40,0,0,5],
    30112: [40,0,0,40,0,15,-25,5],
    30113: [0,30,0,0,0,10,0,5],
    30114: [0,0,40,0,0,25,10,5],
    30115: [30,15,0,0,0,30,0,5],
    30116: [30,0,0,10,0,70,0,5],
    30117: [15,0,15,20,0,10,0,5],
    30118: [0,22,7,32,0,10,15,5],
    30119: [20,0,0,0,0,5,15,0],
    30120: [17,0,17,17,0,55,0,5],
    30121: [30,0,0,0,0,15,0,5],
    30122: [5,0,10,0,0,15,50,5],
    30123: [0,35,35,0,0,0,0,5],
    30124: [17,0,0,0,27,0,20,5],
    30125: [0,25,0,10,0,0,0,5],
    30126: [7,0,7,25,0,0,20,5],
    30127: [8,15,0,8,0,0,40,5],
    30128: [0,0,15,0,30,25,0,10],
    30129: [0,5,20,0,0,0,15,5],

    30145: [0,25,40,0,0,15,0,5],
    30146: [20,0,0,0,10,50,30,5],
}

export default events;