'use strict';
var e;
var aa = [
  {
    a: "AngelBlue.PNG",
    b: {
      x: 1962,
      y: 1346
    }
  }, {
    a: "AngelBrown.PNG",
    b: {
      x: 1906,
      y: 1402
    }
  }, {
    a: "AngelGrey.PNG",
    b: {
      x: 1906,
      y: 1346
    }
  }, {
    a: "AngelGrey2.PNG",
    b: {
      x: 1962,
      y: 1290
    }
  }, {
    a: "AngelOrange.PNG",
    b: {
      x: 1906,
      y: 1290
    }
  }, {
    a: "AngelPurple.PNG",
    b: {
      x: 1850,
      y: 1402
    }
  }, {
    a: "AngelRed.PNG",
    b: {
      x: 1850,
      y: 1346
    }
  }, {
    a: "AngelSilver.PNG",
    b: {
      x: 1850,
      y: 1290
    }
  }, {
    a: "AntBlack.PNG",
    b: {
      x: 1962,
      y: 1234
    }
  }, {
    a: "AntBlue.PNG",
    b: {
      x: 1906,
      y: 1234
    }
  }, {
    a: "AntBrown.PNG",
    b: {
      x: 1850,
      y: 1234
    }
  }, {
    a: "AntGrey.PNG",
    b: {
      x: 1794,
      y: 1402
    }
  }, {
    a: "AntOrange.PNG",
    b: {
      x: 1794,
      y: 1346
    }
  },
  {
    a: "AntPink.PNG",
    b: {
      x: 1794,
      y: 1290
    }
  }, {
    a: "AntRed.PNG",
    b: {
      x: 1794,
      y: 1234
    }
  }, {
    a: "AntRed2.PNG",
    b: {
      x: 1962,
      y: 1178
    }
  }, {
    a: "AntWhite.PNG",
    b: {
      x: 1906,
      y: 1178
    }
  }, {
    a: "BarbarianFighter.PNG",
    b: {
      x: 1850,
      y: 1178
    }
  }, {
    a: "BarbarianFighter2.PNG",
    b: {
      x: 1794,
      y: 1178
    }
  }, {
    a: "BarbarianFighter3.PNG",
    b: {
      x: 1738,
      y: 1402
    }
  }, {
    a: "BarbarianFighter4.PNG",
    b: {
      x: 1738,
      y: 1346
    }
  }, {
    a: "BarbarianMage.PNG",
    b: {
      x: 1738,
      y: 1290
    }
  }, {
    a: "BarbarianPriest.PNG",
    b: {
      x: 1738,
      y: 1234
    }
  }, {
    a: "BasiliskBrown.PNG",
    b: {
      x: 1738,
      y: 1178
    }
  }, {
    a: "BasiliskGreen.PNG",
    b: {
      x: 1962,
      y: 1122
    }
  }, {
    a: "BasiliskRed.PNG",
    b: {
      x: 1906,
      y: 1122
    }
  }, {
    a: "BasiliskSilver.PNG",
    b: {
      x: 1850,
      y: 1122
    }
  }, {
    a: "BatBlueTail.PNG",
    b: {
      x: 1794,
      y: 1122
    }
  }, {
    a: "BatBrown.PNG",
    b: {
      x: 1738,
      y: 1122
    }
  }, {
    a: "BatGrey.PNG",
    b: {
      x: 1682,
      y: 1402
    }
  }, {
    a: "BatRedTail.PNG",
    b: {
      x: 1682,
      y: 1346
    }
  }, {
    a: "BatSilver.PNG",
    b: {
      x: 1682,
      y: 1290
    }
  }, {
    a: "BeetleBlue.PNG",
    b: {
      x: 1682,
      y: 1234
    }
  }, {
    a: "BeetleBrown.PNG",
    b: {
      x: 1682,
      y: 1178
    }
  }, {
    a: "BeetleBrownStiped.PNG",
    b: {
      x: 1682,
      y: 1122
    }
  }, {
    a: "BeetleGreyRed.PNG",
    b: {
      x: 1962,
      y: 1066
    }
  }, {
    a: "BeetlePink.PNG",
    b: {
      x: 1906,
      y: 1066
    }
  }, {
    a: "BeetleRed.PNG",
    b: {
      x: 1850,
      y: 1066
    }
  }, {
    a: "BeetleWarrior.PNG",
    b: {
      x: 1794,
      y: 1066
    }
  }, {
    a: "BeetleWhite.PNG",
    b: {
      x: 1738,
      y: 1066
    }
  }, {
    a: "BeetleYellow.PNG",
    b: {
      x: 1682,
      y: 1066
    }
  }, {
    a: "BlackBear.PNG",
    b: {
      x: 1626,
      y: 1402
    }
  }, {
    a: "BrownBear.PNG",
    b: {
      x: 1626,
      y: 1346
    }
  }, {
    a: "BugBlue.PNG",
    b: {
      x: 1626,
      y: 1290
    }
  }, {
    a: "BugBrown.PNG",
    b: {
      x: 1626,
      y: 1234
    }
  }, {
    a: "BugGreen.PNG",
    b: {
      x: 1626,
      y: 1178
    }
  }, {
    a: "BugGrey.PNG",
    b: {
      x: 1626,
      y: 1122
    }
  }, {
    a: "BugLong.PNG",
    b: {
      x: 1626,
      y: 1066
    }
  }, {
    a: "BugRed.PNG",
    b: {
      x: 1962,
      y: 1010
    }
  }, {
    a: "BugWhite.PNG",
    b: {
      x: 1906,
      y: 1010
    }
  }, {
    a: "CentipedeBlue.PNG",
    b: {
      x: 1850,
      y: 1010
    }
  }, {
    a: "CentipedeBlueTentacles.PNG",
    b: {
      x: 1794,
      y: 1010
    }
  }, {
    a: "CentipedeBrown.PNG",
    b: {
      x: 1738,
      y: 1010
    }
  }, {
    a: "CentipedeGreenDark.PNG",
    b: {
      x: 1682,
      y: 1010
    }
  }, {
    a: "CentipedeGreenTentacles.PNG",
    b: {
      x: 1626,
      y: 1010
    }
  }, {
    a: "CentipedeGreenTentacles2.PNG",
    b: {
      x: 1570,
      y: 1402
    }
  }, {
    a: "CentipedeGrey.PNG",
    b: {
      x: 1570,
      y: 1346
    }
  }, {
    a: "CentipedePink.PNG",
    b: {
      x: 1570,
      y: 1290
    }
  }, {
    a: "CentipedeRed.PNG",
    b: {
      x: 1570,
      y: 1234
    }
  }, {
    a: "CentipedeRedTentacles.PNG",
    b: {
      x: 1570,
      y: 1178
    }
  }, {
    a: "CentipedeSilver.PNG",
    b: {
      x: 1570,
      y: 1122
    }
  }, {
    a: "Chicken1.PNG",
    b: {
      x: 1570,
      y: 1066
    }
  }, {
    a: "Chicken2.PNG",
    b: {
      x: 1570,
      y: 1010
    }
  },
  {
    a: "CowLeft.PNG",
    b: {
      x: 1962,
      y: 954
    }
  }, {
    a: "CowRight.PNG",
    b: {
      x: 1906,
      y: 954
    }
  }, {
    a: "CrawlerBlue.PNG",
    b: {
      x: 1850,
      y: 954
    }
  }, {
    a: "CrawlerBlueLight.PNG",
    b: {
      x: 1794,
      y: 954
    }
  }, {
    a: "CrawlerGreen.PNG",
    b: {
      x: 1738,
      y: 954
    }
  }, {
    a: "CrawlerGrey.PNG",
    b: {
      x: 1682,
      y: 954
    }
  }, {
    a: "CrawlerOrange.PNG",
    b: {
      x: 1626,
      y: 954
    }
  }, {
    a: "CrawlerRed.PNG",
    b: {
      x: 1570,
      y: 954
    }
  }, {
    a: "CrawlerSilver.PNG",
    b: {
      x: 1514,
      y: 1402
    }
  }, {
    a: "CrawlerWhite.PNG",
    b: {
      x: 1514,
      y: 1346
    }
  }, {
    a: "CubeGelatinous.PNG",
    b: {
      x: 1514,
      y: 1290
    }
  }, {
    a: "Cyclops4Armed.PNG",
    b: {
      x: 1514,
      y: 1234
    }
  }, {
    a: "CyclopsFighter.PNG",
    b: {
      x: 1514,
      y: 1178
    }
  }, {
    a: "CyclopsFighter2.PNG",
    b: {
      x: 1514,
      y: 1122
    }
  }, {
    a: "CyclopsFighter3.PNG",
    b: {
      x: 1514,
      y: 1066
    }
  }, {
    a: "CyclopsMage.PNG",
    b: {
      x: 1514,
      y: 1010
    }
  }, {
    a: "CyclopsMage2.PNG",
    b: {
      x: 1514,
      y: 954
    }
  }, {
    a: "CyclopsPriest.PNG",
    b: {
      x: 1962,
      y: 898
    }
  }, {
    a: "DemonMajorFighter.PNG",
    b: {
      x: 1906,
      y: 898
    }
  }, {
    a: "DemonMajorFighter2.PNG",
    b: {
      x: 1850,
      y: 898
    }
  }, {
    a: "DemonMajorFighter3.PNG",
    b: {
      x: 1794,
      y: 898
    }
  }, {
    a: "DemonMajorLord.PNG",
    b: {
      x: 1738,
      y: 898
    }
  }, {
    a: "DemonMajorMage.PNG",
    b: {
      x: 1682,
      y: 898
    }
  }, {
    a: "DemonMajorPriest.PNG",
    b: {
      x: 1626,
      y: 898
    }
  }, {
    a: "DemonMinorFighter.PNG",
    b: {
      x: 1570,
      y: 898
    }
  }, {
    a: "DemonMinorFighter2.PNG",
    b: {
      x: 1514,
      y: 898
    }
  }, {
    a: "DemonMinorFighter3.PNG",
    b: {
      x: 1458,
      y: 1402
    }
  }, {
    a: "DemonMinorFighter4.PNG",
    b: {
      x: 1458,
      y: 1346
    }
  }, {
    a: "DemonMinorMage.PNG",
    b: {
      x: 1458,
      y: 1290
    }
  }, {
    a: "DemonMinorPriest.PNG",
    b: {
      x: 1458,
      y: 1234
    }
  }, {
    a: "DinosaurBeastBrown.PNG",
    b: {
      x: 1458,
      y: 1178
    }
  }, {
    a: "DinosaurBeastBrown2.PNG",
    b: {
      x: 1458,
      y: 1122
    }
  }, {
    a: "DinosaurBeastBrownLight.PNG",
    b: {
      x: 1458,
      y: 1066
    }
  }, {
    a: "DinosaurBeastGiantBrown.PNG",
    b: {
      x: 1458,
      y: 1010
    }
  }, {
    a: "DinosaurBeastGiantGreen.PNG",
    b: {
      x: 1458,
      y: 954
    }
  }, {
    a: "DinosaurBeastGiantGrey.PNG",
    b: {
      x: 1458,
      y: 898
    }
  }, {
    a: "DinosaurBeastGiantPink.PNG",
    b: {
      x: 1962,
      y: 842
    }
  }, {
    a: "DinosaurBeastGiantRed.PNG",
    b: {
      x: 1906,
      y: 842
    }
  }, {
    a: "DinosaurBeastGiantSilver.PNG",
    b: {
      x: 1850,
      y: 842
    }
  }, {
    a: "DinosaurBeastGiantYellow.PNG",
    b: {
      x: 1794,
      y: 842
    }
  }, {
    a: "DinosaurBeastGrey.PNG",
    b: {
      x: 1738,
      y: 842
    }
  }, {
    a: "DinosaurBeastPink.PNG",
    b: {
      x: 1682,
      y: 842
    }
  }, {
    a: "DinosaurBeastRed.PNG",
    b: {
      x: 1626,
      y: 842
    }
  }, {
    a: "DinosaurBeastRed2.PNG",
    b: {
      x: 1570,
      y: 842
    }
  }, {
    a: "DinosaurBeastSmallGreen.PNG",
    b: {
      x: 1514,
      y: 842
    }
  }, {
    a: "DinosaurBeastSmallPink.PNG",
    b: {
      x: 1458,
      y: 842
    }
  },
  {
    a: "DinosaurBeastSmallSilver.PNG",
    b: {
      x: 1402,
      y: 1402
    }
  }, {
    a: "DinosaurBeastSmallYellow.PNG",
    b: {
      x: 1402,
      y: 1346
    }
  }, {
    a: "DogBrown.PNG",
    b: {
      x: 1402,
      y: 1290
    }
  }, {
    a: "DogDarkGrey.PNG",
    b: {
      x: 1402,
      y: 1234
    }
  }, {
    a: "DogGrey.PNG",
    b: {
      x: 1402,
      y: 1178
    }
  }, {
    a: "DogOrange.PNG",
    b: {
      x: 1402,
      y: 1122
    }
  }, {
    a: "DogPink.PNG",
    b: {
      x: 1402,
      y: 1066
    }
  }, {
    a: "DogWhite.PNG",
    b: {
      x: 1402,
      y: 1010
    }
  }, {
    a: "Dragon3Headed.PNG",
    b: {
      x: 1402,
      y: 954
    }
  }, {
    a: "DragonAdultBlack.PNG",
    b: {
      x: 1402,
      y: 898
    }
  }, {
    a: "DragonAdultBlue.PNG",
    b: {
      x: 1402,
      y: 842
    }
  }, {
    a: "DragonAdultBronze.PNG",
    b: {
      x: 1962,
      y: 786
    }
  },
  {
    a: "DragonAdultGold.PNG",
    b: {
      x: 1906,
      y: 786
    }
  }, {
    a: "DragonAdultGreen.PNG",
    b: {
      x: 1850,
      y: 786
    }
  }, {
    a: "DragonAdultRainbow.PNG",
    b: {
      x: 1794,
      y: 786
    }
  }, {
    a: "DragonAdultRed.PNG",
    b: {
      x: 1738,
      y: 786
    }
  }, {
    a: "DragonAdultSilver.PNG",
    b: {
      x: 1682,
      y: 786
    }
  }, {
    a: "DragonAncientBlack.PNG",
    b: {
      x: 1626,
      y: 786
    }
  }, {
    a: "DragonAncientBlue.PNG",
    b: {
      x: 1570,
      y: 786
    }
  }, {
    a: "DragonAncientBlueWhite.PNG",
    b: {
      x: 1514,
      y: 786
    }
  }, {
    a: "DragonAncientBronze.PNG",
    b: {
      x: 1458,
      y: 786
    }
  }, {
    a: "DragonAncientGold.PNG",
    b: {
      x: 1402,
      y: 786
    }
  }, {
    a: "DragonAncientGoldWhite.PNG",
    b: {
      x: 1346,
      y: 1402
    }
  },
  {
    a: "DragonAncientGreen.PNG",
    b: {
      x: 1346,
      y: 1346
    }
  }, {
    a: "DragonAncientGreenGrey.PNG",
    b: {
      x: 1346,
      y: 1290
    }
  }, {
    a: "DragonAncientLordBlack.PNG",
    b: {
      x: 1346,
      y: 1234
    }
  }, {
    a: "DragonAncientLordBlackRed.PNG",
    b: {
      x: 1346,
      y: 1178
    }
  }, {
    a: "DragonAncientLordBlue.PNG",
    b: {
      x: 1346,
      y: 1122
    }
  }, {
    a: "DragonAncientLordBronze.PNG",
    b: {
      x: 1346,
      y: 1066
    }
  }, {
    a: "DragonAncientLordGreen.PNG",
    b: {
      x: 1346,
      y: 1010
    }
  }, {
    a: "DragonAncientLordRed.PNG",
    b: {
      x: 1346,
      y: 954
    }
  }, {
    a: "DragonAncientLordSilver.PNG",
    b: {
      x: 1346,
      y: 898
    }
  }, {
    a: "DragonAncientLordSilverRed.PNG",
    b: {
      x: 1346,
      y: 842
    }
  }, {
    a: "DragonAncientPurpleBlue.PNG",
    b: {
      x: 1346,
      y: 786
    }
  }, {
    a: "DragonAncientRainbow.PNG",
    b: {
      x: 1962,
      y: 730
    }
  }, {
    a: "DragonAncientRed.PNG",
    b: {
      x: 1906,
      y: 730
    }
  }, {
    a: "DragonAncientSilver.PNG",
    b: {
      x: 1850,
      y: 730
    }
  }, {
    a: "DragonAncientWhiteGold.PNG",
    b: {
      x: 1794,
      y: 730
    }
  }, {
    a: "DragonBabyBlack.PNG",
    b: {
      x: 1738,
      y: 730
    }
  }, {
    a: "DragonBabyBlue.PNG",
    b: {
      x: 1682,
      y: 730
    }
  }, {
    a: "DragonBabyBronze.PNG",
    b: {
      x: 1626,
      y: 730
    }
  }, {
    a: "DragonBabyGold.PNG",
    b: {
      x: 1570,
      y: 730
    }
  }, {
    a: "DragonBabyGreen.PNG",
    b: {
      x: 1514,
      y: 730
    }
  }, {
    a: "DragonBabyRainbow.PNG",
    b: {
      x: 1458,
      y: 730
    }
  },
  {
    a: "DragonBabyRed.PNG",
    b: {
      x: 1402,
      y: 730
    }
  }, {
    a: "DragonBabySilver.PNG",
    b: {
      x: 1346,
      y: 730
    }
  }, {
    a: "DragonFlyBlack.PNG",
    b: {
      x: 1290,
      y: 1402
    }
  }, {
    a: "DragonFlyGreen.PNG",
    b: {
      x: 1290,
      y: 1346
    }
  }, {
    a: "DragonFlyOrange.PNG",
    b: {
      x: 1290,
      y: 1290
    }
  }, {
    a: "DragonFlyPink.PNG",
    b: {
      x: 1290,
      y: 1234
    }
  }, {
    a: "DragonFlyWhite.PNG",
    b: {
      x: 1290,
      y: 1178
    }
  }, {
    a: "DragonGiantBone.PNG",
    b: {
      x: 1290,
      y: 1122
    }
  }, {
    a: "DragonGiantBoneBlue.PNG",
    b: {
      x: 1290,
      y: 1066
    }
  }, {
    a: "DragonGiantBoneGreen.PNG",
    b: {
      x: 1290,
      y: 1010
    }
  }, {
    a: "DragonGiantBoneGrey.PNG",
    b: {
      x: 1290,
      y: 954
    }
  }, {
    a: "DragonGiantBoneGreyBlue.PNG",
    b: {
      x: 1290,
      y: 898
    }
  }, {
    a: "DragonGiantBoneGreyGreen.PNG",
    b: {
      x: 1290,
      y: 842
    }
  }, {
    a: "DragonGiantBoneGreyRed.PNG",
    b: {
      x: 1290,
      y: 786
    }
  }, {
    a: "DragonGiantBoneRed.PNG",
    b: {
      x: 1290,
      y: 730
    }
  }, {
    a: "DragonManBlack.PNG",
    b: {
      x: 1962,
      y: 674
    }
  }, {
    a: "DragonManBlue.PNG",
    b: {
      x: 1906,
      y: 674
    }
  }, {
    a: "DragonManBronze.PNG",
    b: {
      x: 1850,
      y: 674
    }
  }, {
    a: "DragonManGold.PNG",
    b: {
      x: 1794,
      y: 674
    }
  }, {
    a: "DragonManGreen.PNG",
    b: {
      x: 1738,
      y: 674
    }
  }, {
    a: "DragonManRainbow.PNG",
    b: {
      x: 1682,
      y: 674
    }
  }, {
    a: "DragonManRed.PNG",
    b: {
      x: 1626,
      y: 674
    }
  }, {
    a: "DragonManSilver.PNG",
    b: {
      x: 1570,
      y: 674
    }
  },
  {
    a: "DragonSpirit.PNG",
    b: {
      x: 1514,
      y: 674
    }
  }, {
    a: "DragonYoungBlack.PNG",
    b: {
      x: 1458,
      y: 674
    }
  }, {
    a: "DragonYoungBlue.PNG",
    b: {
      x: 1402,
      y: 674
    }
  }, {
    a: "DragonYoungBronze.PNG",
    b: {
      x: 1346,
      y: 674
    }
  }, {
    a: "DragonYoungGold.PNG",
    b: {
      x: 1290,
      y: 674
    }
  }, {
    a: "DragonYoungGreen.PNG",
    b: {
      x: 1234,
      y: 1402
    }
  }, {
    a: "DragonYoungRainbow.PNG",
    b: {
      x: 1234,
      y: 1346
    }
  }, {
    a: "DragonYoungRed.PNG",
    b: {
      x: 1234,
      y: 1290
    }
  }, {
    a: "DragonYoungSilver.PNG",
    b: {
      x: 1234,
      y: 1234
    }
  }, {
    a: "DrakeGiantBlack.PNG",
    b: {
      x: 1234,
      y: 1178
    }
  }, {
    a: "DrakeGiantBlue.PNG",
    b: {
      x: 1234,
      y: 1122
    }
  }, {
    a: "DrakeGiantBronze.PNG",
    b: {
      x: 1234,
      y: 1066
    }
  }, {
    a: "DrakeGiantGrey.PNG",
    b: {
      x: 1234,
      y: 1010
    }
  }, {
    a: "DrakeGiantRed.PNG",
    b: {
      x: 1234,
      y: 954
    }
  }, {
    a: "DrakeGiantRed2.PNG",
    b: {
      x: 1234,
      y: 898
    }
  }, {
    a: "DrakeGiantWhite.PNG",
    b: {
      x: 1234,
      y: 842
    }
  }, {
    a: "DrakeSpirit.PNG",
    b: {
      x: 1234,
      y: 786
    }
  }, {
    a: "Eagle.PNG",
    b: {
      x: 1234,
      y: 730
    }
  }, {
    a: "Eagle2Headed.PNG",
    b: {
      x: 1234,
      y: 674
    }
  }, {
    a: "EagleHoundBlack.PNG",
    b: {
      x: 1962,
      y: 618
    }
  }, {
    a: "EagleHoundBlue.PNG",
    b: {
      x: 1906,
      y: 618
    }
  }, {
    a: "EagleHoundBrown.PNG",
    b: {
      x: 1850,
      y: 618
    }
  }, {
    a: "EagleHoundGold.PNG",
    b: {
      x: 1794,
      y: 618
    }
  }, {
    a: "EagleHoundGreenDark.PNG",
    b: {
      x: 1738,
      y: 618
    }
  }, {
    a: "EagleHoundGrey.PNG",
    b: {
      x: 1682,
      y: 618
    }
  }, {
    a: "EagleHoundGrey2.PNG",
    b: {
      x: 1626,
      y: 618
    }
  }, {
    a: "EagleHoundGrey3.PNG",
    b: {
      x: 1570,
      y: 618
    }
  }, {
    a: "EagleHoundOrange.PNG",
    b: {
      x: 1514,
      y: 618
    }
  }, {
    a: "EagleHoundPink.PNG",
    b: {
      x: 1458,
      y: 618
    }
  }, {
    a: "EagleHoundPink2.PNG",
    b: {
      x: 1402,
      y: 618
    }
  }, {
    a: "EagleHoundPinkLight.PNG",
    b: {
      x: 1346,
      y: 618
    }
  }, {
    a: "EagleHoundPurple.PNG",
    b: {
      x: 1290,
      y: 618
    }
  }, {
    a: "EagleHoundPurpleLight.PNG",
    b: {
      x: 1234,
      y: 618
    }
  }, {
    a: "EagleHoundRainbow.PNG",
    b: {
      x: 1178,
      y: 1402
    }
  }, {
    a: "EagleHoundRed.PNG",
    b: {
      x: 1178,
      y: 1346
    }
  }, {
    a: "EagleHoundSilver.PNG",
    b: {
      x: 1178,
      y: 1290
    }
  }, {
    a: "EagleHoundTeal.PNG",
    b: {
      x: 1178,
      y: 1234
    }
  }, {
    a: "EagleHoundTealLight.PNG",
    b: {
      x: 1178,
      y: 1178
    }
  }, {
    a: "EagleHoundWhite.PNG",
    b: {
      x: 1178,
      y: 1122
    }
  }, {
    a: "ElementalAir.PNG",
    b: {
      x: 1178,
      y: 1066
    }
  }, {
    a: "ElementalEarth.PNG",
    b: {
      x: 1178,
      y: 1010
    }
  }, {
    a: "ElementalFire.PNG",
    b: {
      x: 1178,
      y: 954
    }
  }, {
    a: "ElementalStone.PNG",
    b: {
      x: 1178,
      y: 898
    }
  }, {
    a: "ElementalVoid.PNG",
    b: {
      x: 1178,
      y: 842
    }
  }, {
    a: "ElementalWater.PNG",
    b: {
      x: 1178,
      y: 786
    }
  }, {
    a: "ElementalWater2.PNG",
    b: {
      x: 1178,
      y: 730
    }
  }, {
    a: "ElfDarkAssasin.PNG",
    b: {
      x: 1178,
      y: 674
    }
  }, {
    a: "ElfDarkFigher4.PNG",
    b: {
      x: 1178,
      y: 618
    }
  }, {
    a: "ElfDarkFighter.PNG",
    b: {
      x: 1962,
      y: 562
    }
  }, {
    a: "ElfDarkFighter13.PNG",
    b: {
      x: 1906,
      y: 562
    }
  }, {
    a: "ElfDarkFighter2.PNG",
    b: {
      x: 1850,
      y: 562
    }
  }, {
    a: "ElfDarkFighter3.PNG",
    b: {
      x: 1794,
      y: 562
    }
  }, {
    a: "ElfDarkFighter5.PNG",
    b: {
      x: 1738,
      y: 562
    }
  }, {
    a: "ElfDarkFighter6.PNG",
    b: {
      x: 1682,
      y: 562
    }
  }, {
    a: "ElfDarkFighter7.PNG",
    b: {
      x: 1626,
      y: 562
    }
  }, {
    a: "ElfDarkFighter8.PNG",
    b: {
      x: 1570,
      y: 562
    }
  }, {
    a: "ElfDarkLord.PNG",
    b: {
      x: 1514,
      y: 562
    }
  }, {
    a: "ElfDarkMage.PNG",
    b: {
      x: 1458,
      y: 562
    }
  }, {
    a: "ElfDarkMage10.PNG",
    b: {
      x: 1402,
      y: 562
    }
  }, {
    a: "ElfDarkMage11.PNG",
    b: {
      x: 1346,
      y: 562
    }
  }, {
    a: "ElfDarkMage2.PNG",
    b: {
      x: 1290,
      y: 562
    }
  }, {
    a: "ElfDarkMage3.PNG",
    b: {
      x: 1234,
      y: 562
    }
  }, {
    a: "ElfDarkMage4.PNG",
    b: {
      x: 1178,
      y: 562
    }
  }, {
    a: "ElfDarkMage5.PNG",
    b: {
      x: 1122,
      y: 1402
    }
  }, {
    a: "ElfDarkMage6.PNG",
    b: {
      x: 1122,
      y: 1346
    }
  }, {
    a: "ElfDarkMage7.PNG",
    b: {
      x: 1122,
      y: 1290
    }
  }, {
    a: "ElfDarkMage8.PNG",
    b: {
      x: 1122,
      y: 1290
    }
  }, {
    a: "ElfDarkMage9.PNG",
    b: {
      x: 1122,
      y: 1234
    }
  }, {
    a: "ElfDarkOld.PNG",
    b: {
      x: 1122,
      y: 1178
    }
  }, {
    a: "ElfDarkPaladin.PNG",
    b: {
      x: 1122,
      y: 1122
    }
  }, {
    a: "ElfDarkPriest.PNG",
    b: {
      x: 1122,
      y: 1066
    }
  }, {
    a: "ElfDarkPriest2.PNG",
    b: {
      x: 1122,
      y: 1010
    }
  }, {
    a: "ElfDarkThief.PNG",
    b: {
      x: 1122,
      y: 954
    }
  }, {
    a: "ElfDarkThief2.PNG",
    b: {
      x: 1122,
      y: 898
    }
  }, {
    a: "FemaleDruid01.PNG",
    b: {
      x: 1122,
      y: 842
    }
  }, {
    a: "FemaleDruid02.PNG",
    b: {
      x: 1122,
      y: 786
    }
  }, {
    a: "FemaleFighter01.PNG",
    b: {
      x: 1122,
      y: 730
    }
  }, {
    a: "FemaleFighter02.PNG",
    b: {
      x: 1122,
      y: 674
    }
  }, {
    a: "FemaleFighter03.PNG",
    b: {
      x: 1122,
      y: 618
    }
  }, {
    a: "FemaleMage01.PNG",
    b: {
      x: 1122,
      y: 562
    }
  }, {
    a: "FemaleMage02.PNG",
    b: {
      x: 1962,
      y: 506
    }
  }, {
    a: "FemalePaladin01.PNG",
    b: {
      x: 1906,
      y: 506
    }
  }, {
    a: "FemalePaladin02.PNG",
    b: {
      x: 1850,
      y: 506
    }
  }, {
    a: "FemalePriest01.PNG",
    b: {
      x: 1794,
      y: 506
    }
  }, {
    a: "FemalePriest02.PNG",
    b: {
      x: 1738,
      y: 506
    }
  }, {
    a: "FemaleRanger01.PNG",
    b: {
      x: 1682,
      y: 506
    }
  }, {
    a: "FemaleRanger02.PNG",
    b: {
      x: 1626,
      y: 506
    }
  }, {
    a: "FemaleThief01.PNG",
    b: {
      x: 1570,
      y: 506
    }
  }, {
    a: "FemaleThief02.PNG",
    b: {
      x: 1514,
      y: 506
    }
  }, {
    a: "FloatingEye6Eyed.PNG",
    b: {
      x: 1458,
      y: 506
    }
  }, {
    a: "FloatingEyeBlue.PNG",
    b: {
      x: 1402,
      y: 506
    }
  }, {
    a: "FloatingEyeGreen.PNG",
    b: {
      x: 1346,
      y: 506
    }
  }, {
    a: "FloatingEyeGrey.PNG",
    b: {
      x: 1290,
      y: 506
    }
  }, {
    a: "FloatingEyeRed.PNG",
    b: {
      x: 1234,
      y: 506
    }
  }, {
    a: "FloatingEyeTentacled.PNG",
    b: {
      x: 1178,
      y: 506
    }
  }, {
    a: "FloatingEyeTentacled3Eyes.PNG",
    b: {
      x: 1122,
      y: 506
    }
  }, {
    a: "FloatingEyeTentacled4Eyes.PNG",
    b: {
      x: 1066,
      y: 1402
    }
  }, {
    a: "FloatingEyeTentacled6Eyes.PNG",
    b: {
      x: 1066,
      y: 1346
    }
  }, {
    a: "FloatingEyeYellow.PNG",
    b: {
      x: 1066,
      y: 1290
    }
  }, {
    a: "Fly.PNG",
    b: {
      x: 1066,
      y: 1234
    }
  }, {
    a: "FlyCarrion.PNG",
    b: {
      x: 1066,
      y: 1178
    }
  }, {
    a: "FrogGiantGreen.PNG",
    b: {
      x: 1066,
      y: 1122
    }
  }, {
    a: "FrogGiantPink.PNG",
    b: {
      x: 1066,
      y: 1066
    }
  }, {
    a: "GargoyleBrown.PNG",
    b: {
      x: 1066,
      y: 1010
    }
  }, {
    a: "GargoyleRed.PNG",
    b: {
      x: 1066,
      y: 954
    }
  }, {
    a: "Genie.PNG",
    b: {
      x: 1066,
      y: 898
    }
  }, {
    a: "Ghost2Grey.PNG",
    b: {
      x: 1066,
      y: 842
    }
  }, {
    a: "Ghost2GreyRed.PNG",
    b: {
      x: 1066,
      y: 786
    }
  }, {
    a: "Ghost3Blue.PNG",
    b: {
      x: 1066,
      y: 730
    }
  }, {
    a: "Ghost3Grey.PNG",
    b: {
      x: 1066,
      y: 674
    }
  }, {
    a: "Ghost3Pink.PNG",
    b: {
      x: 1066,
      y: 618
    }
  }, {
    a: "GhostBlack.PNG",
    b: {
      x: 1066,
      y: 562
    }
  }, {
    a: "GhostBlue.PNG",
    b: {
      x: 1066,
      y: 506
    }
  }, {
    a: "GhostGreen.PNG",
    b: {
      x: 1962,
      y: 450
    }
  }, {
    a: "GhostGrey.PNG",
    b: {
      x: 1906,
      y: 450
    }
  }, {
    a: "GhostOrange.PNG",
    b: {
      x: 1850,
      y: 450
    }
  }, {
    a: "GhostPurple.PNG",
    b: {
      x: 1794,
      y: 450
    }
  }, {
    a: "GhostRed.PNG",
    b: {
      x: 1738,
      y: 450
    }
  }, {
    a: "GiantCloud.PNG",
    b: {
      x: 1682,
      y: 450
    }
  }, {
    a: "GiantFire.PNG",
    b: {
      x: 1626,
      y: 450
    }
  }, {
    a: "GiantFrost.PNG",
    b: {
      x: 1570,
      y: 450
    }
  }, {
    a: "GiantHill.PNG",
    b: {
      x: 1514,
      y: 450
    }
  }, {
    a: "GiantStorm.PNG",
    b: {
      x: 1458,
      y: 450
    }
  }, {
    a: "GiantTitanGreater.PNG",
    b: {
      x: 1402,
      y: 450
    }
  }, {
    a: "GiantTitanLesser.PNG",
    b: {
      x: 1346,
      y: 450
    }
  }, {
    a: "GiantTwoHeaded.PNG",
    b: {
      x: 1290,
      y: 450
    }
  }, {
    a: "Gnome3.PNG",
    b: {
      x: 1234,
      y: 450
    }
  }, {
    a: "GnomeFighter.PNG",
    b: {
      x: 1178,
      y: 450
    }
  }, {
    a: "GnomeFighter10.PNG",
    b: {
      x: 1122,
      y: 450
    }
  }, {
    a: "GnomeFighter2.PNG",
    b: {
      x: 1066,
      y: 450
    }
  }, {
    a: "GnomeFighter3.PNG",
    b: {
      x: 1010,
      y: 1402
    }
  }, {
    a: "GnomeFighter4.PNG",
    b: {
      x: 1010,
      y: 1346
    }
  }, {
    a: "GnomeFighter5.PNG",
    b: {
      x: 1010,
      y: 1290
    }
  }, {
    a: "GnomeFighter6.PNG",
    b: {
      x: 1010,
      y: 1234
    }
  }, {
    a: "GnomeFighter7.PNG",
    b: {
      x: 1010,
      y: 1178
    }
  }, {
    a: "GnomeFighter8.PNG",
    b: {
      x: 1010,
      y: 1122
    }
  }, {
    a: "GnomeFighter9.PNG",
    b: {
      x: 1010,
      y: 1066
    }
  }, {
    a: "GnomeMage.PNG",
    b: {
      x: 1010,
      y: 1010
    }
  }, {
    a: "GnomeMage10.PNG",
    b: {
      x: 1010,
      y: 954
    }
  }, {
    a: "GnomeMage12.PNG",
    b: {
      x: 1010,
      y: 898
    }
  }, {
    a: "GnomeMage15.PNG",
    b: {
      x: 1010,
      y: 842
    }
  }, {
    a: "GnomeMage16.PNG",
    b: {
      x: 1010,
      y: 786
    }
  }, {
    a: "GnomeMage2.PNG",
    b: {
      x: 1010,
      y: 730
    }
  }, {
    a: "GnomeMage3.PNG",
    b: {
      x: 1010,
      y: 674
    }
  }, {
    a: "GnomeMage4.PNG",
    b: {
      x: 1010,
      y: 618
    }
  }, {
    a: "GnomeMage5.PNG",
    b: {
      x: 1010,
      y: 562
    }
  }, {
    a: "GnomeMage6.PNG",
    b: {
      x: 1010,
      y: 506
    }
  }, {
    a: "GnomeMage7.PNG",
    b: {
      x: 1010,
      y: 450
    }
  }, {
    a: "GnomeMage8.PNG",
    b: {
      x: 1962,
      y: 394
    }
  }, {
    a: "GnomeMage9.PNG",
    b: {
      x: 1906,
      y: 394
    }
  }, {
    a: "GnomePriest.PNG",
    b: {
      x: 1850,
      y: 394
    }
  }, {
    a: "GnomePriest2.PNG",
    b: {
      x: 1794,
      y: 394
    }
  }, {
    a: "GnomePriest3.PNG",
    b: {
      x: 1738,
      y: 394
    }
  }, {
    a: "GnomeThief.PNG",
    b: {
      x: 1682,
      y: 394
    }
  }, {
    a: "GolemBlue.PNG",
    b: {
      x: 1626,
      y: 394
    }
  }, {
    a: "GolemBrown.PNG",
    b: {
      x: 1570,
      y: 394
    }
  }, {
    a: "GolemBrownCaped.PNG",
    b: {
      x: 1514,
      y: 394
    }
  }, {
    a: "GolemBrownStick.PNG",
    b: {
      x: 1458,
      y: 394
    }
  }, {
    a: "GolemDragonGrey.PNG",
    b: {
      x: 1402,
      y: 394
    }
  }, {
    a: "GolemDragonRed.PNG",
    b: {
      x: 1346,
      y: 394
    }
  }, {
    a: "GolemElectric.PNG",
    b: {
      x: 1290,
      y: 394
    }
  }, {
    a: "GolemGrey.PNG",
    b: {
      x: 1234,
      y: 394
    }
  }, {
    a: "GolemGreyClothed.PNG",
    b: {
      x: 1178,
      y: 394
    }
  }, {
    a: "GolemGreyStick.PNG",
    b: {
      x: 1122,
      y: 394
    }
  }, {
    a: "GolemTeal.PNG",
    b: {
      x: 1066,
      y: 394
    }
  }, {
    a: "GrassKiller.PNG",
    b: {
      x: 1010,
      y: 394
    }
  }, {
    a: "GrayWolf.PNG",
    b: {
      x: 954,
      y: 1402
    }
  }, {
    a: "GreyOnesFighter.PNG",
    b: {
      x: 954,
      y: 1346
    }
  }, {
    a: "GreyOnesFighter2.PNG",
    b: {
      x: 954,
      y: 1290
    }
  }, {
    a: "GreyOnesFighter3.PNG",
    b: {
      x: 954,
      y: 1234
    }
  }, {
    a: "GreyOnesMage.PNG",
    b: {
      x: 954,
      y: 1178
    }
  }, {
    a: "GreyOnesMage2.PNG",
    b: {
      x: 954,
      y: 1122
    }
  },
  {
    a: "GreyOnesMage3.PNG",
    b: {
      x: 954,
      y: 1066
    }
  }, {
    a: "GrizzlyBear.PNG",
    b: {
      x: 954,
      y: 1010
    }
  }, {
    a: "Gryphon.PNG",
    b: {
      x: 954,
      y: 954
    }
  }, {
    a: "GryphonBrown.PNG",
    b: {
      x: 954,
      y: 898
    }
  }, {
    a: "GryphonRed.PNG",
    b: {
      x: 954,
      y: 842
    }
  }, {
    a: "HB_Banshee1.PNG",
    b: {
      x: 954,
      y: 786
    }
  }, {
    a: "HB_Elvenarcher1.PNG",
    b: {
      x: 954,
      y: 730
    }
  }, {
    a: "HB_Elvenarcher2.PNG",
    b: {
      x: 954,
      y: 674
    }
  }, {
    a: "HB_Elvenarcher3.PNG",
    b: {
      x: 954,
      y: 618
    }
  }, {
    a: "HB_Elvenfemale1.PNG",
    b: {
      x: 954,
      y: 562
    }
  }, {
    a: "HB_Elvenfemaleranger1.PNG",
    b: {
      x: 954,
      y: 506
    }
  }, {
    a: "HB_Elvenranger1.PNG",
    b: {
      x: 954,
      y: 450
    }
  }, {
    a: "HalfOgreFighter.PNG",
    b: {
      x: 954,
      y: 394
    }
  }, {
    a: "HalfOgreFighter10.PNG",
    b: {
      x: 1962,
      y: 338
    }
  }, {
    a: "HalfOgreFighter13.PNG",
    b: {
      x: 1906,
      y: 338
    }
  }, {
    a: "HalfOgreFighter2.PNG",
    b: {
      x: 1850,
      y: 338
    }
  }, {
    a: "HalfOgreFighter3.PNG",
    b: {
      x: 1794,
      y: 338
    }
  }, {
    a: "HalfOgreFighter4.PNG",
    b: {
      x: 1738,
      y: 338
    }
  }, {
    a: "HalfOgreMage.PNG",
    b: {
      x: 1682,
      y: 338
    }
  }, {
    a: "HalfOgreMage2.PNG",
    b: {
      x: 1626,
      y: 338
    }
  }, {
    a: "HalfOgreMage3.PNG",
    b: {
      x: 1570,
      y: 338
    }
  }, {
    a: "HalfOgrePriest.PNG",
    b: {
      x: 1514,
      y: 338
    }
  }, {
    a: "HalfOgrePriest3.PNG",
    b: {
      x: 1514,
      y: 338
    }
  }, {
    a: "HalflingFighter.PNG",
    b: {
      x: 1458,
      y: 338
    }
  }, {
    a: "HalflingFighter2.PNG",
    b: {
      x: 1402,
      y: 338
    }
  }, {
    a: "HalflingFighter3.PNG",
    b: {
      x: 1346,
      y: 338
    }
  }, {
    a: "HalflingFighter7.PNG",
    b: {
      x: 1290,
      y: 338
    }
  }, {
    a: "HalflingMage.PNG",
    b: {
      x: 1234,
      y: 338
    }
  }, {
    a: "HalflingMage2.PNG",
    b: {
      x: 1178,
      y: 338
    }
  }, {
    a: "HalflingMage3.PNG",
    b: {
      x: 1122,
      y: 338
    }
  }, {
    a: "HalflingMage4.PNG",
    b: {
      x: 1066,
      y: 338
    }
  }, {
    a: "HalflingMage5.PNG",
    b: {
      x: 1010,
      y: 338
    }
  }, {
    a: "HalflingPriest.PNG",
    b: {
      x: 954,
      y: 338
    }
  }, {
    a: "HalflingPriest2.PNG",
    b: {
      x: 898,
      y: 1402
    }
  }, {
    a: "HalflingThief.PNG",
    b: {
      x: 898,
      y: 1346
    }
  }, {
    a: "Horse01.PNG",
    b: {
      x: 898,
      y: 1290
    }
  }, {
    a: "Horse02.PNG",
    b: {
      x: 898,
      y: 1234
    }
  },
  {
    a: "Horse03.PNG",
    b: {
      x: 898,
      y: 1178
    }
  }, {
    a: "HumanArcher.PNG",
    b: {
      x: 898,
      y: 1122
    }
  }, {
    a: "HumanDruid01.PNG",
    b: {
      x: 898,
      y: 1066
    }
  }, {
    a: "HumanDruid02.PNG",
    b: {
      x: 898,
      y: 1010
    }
  }, {
    a: "HumanDruid03.PNG",
    b: {
      x: 898,
      y: 954
    }
  }, {
    a: "HumanDruid04.PNG",
    b: {
      x: 898,
      y: 898
    }
  }, {
    a: "HumanDruid05.PNG",
    b: {
      x: 898,
      y: 842
    }
  }, {
    a: "HumanDruid06.PNG",
    b: {
      x: 898,
      y: 786
    }
  }, {
    a: "HumanDruid07.PNG",
    b: {
      x: 898,
      y: 730
    }
  }, {
    a: "HumanDruid08.PNG",
    b: {
      x: 898,
      y: 674
    }
  }, {
    a: "HumanDruid31.PNG",
    b: {
      x: 898,
      y: 618
    }
  }, {
    a: "HumanDruid32.PNG",
    b: {
      x: 898,
      y: 562
    }
  }, {
    a: "HumanFighter.PNG",
    b: {
      x: 898,
      y: 506
    }
  },
  {
    a: "HumanFighter10.PNG",
    b: {
      x: 898,
      y: 450
    }
  }, {
    a: "HumanFighter11.PNG",
    b: {
      x: 898,
      y: 394
    }
  }, {
    a: "HumanFighter12.PNG",
    b: {
      x: 898,
      y: 338
    }
  }, {
    a: "HumanFighter13.PNG",
    b: {
      x: 1962,
      y: 282
    }
  }, {
    a: "HumanFighter14.PNG",
    b: {
      x: 1906,
      y: 282
    }
  }, {
    a: "HumanFighter15.PNG",
    b: {
      x: 1850,
      y: 282
    }
  }, {
    a: "HumanFighter16.PNG",
    b: {
      x: 1794,
      y: 282
    }
  }, {
    a: "HumanFighter2.PNG",
    b: {
      x: 1738,
      y: 282
    }
  }, {
    a: "HumanFighter21.PNG",
    b: {
      x: 1682,
      y: 282
    }
  }, {
    a: "HumanFighter22.PNG",
    b: {
      x: 1626,
      y: 282
    }
  }, {
    a: "HumanFighter3.PNG",
    b: {
      x: 1570,
      y: 282
    }
  }, {
    a: "HumanFighter31.PNG",
    b: {
      x: 1514,
      y: 282
    }
  }, {
    a: "HumanFighter32.PNG",
    b: {
      x: 1458,
      y: 282
    }
  }, {
    a: "HumanFighter33.PNG",
    b: {
      x: 1402,
      y: 282
    }
  }, {
    a: "HumanFighter34.PNG",
    b: {
      x: 1346,
      y: 282
    }
  }, {
    a: "HumanFighter35.PNG",
    b: {
      x: 1290,
      y: 282
    }
  }, {
    a: "HumanFighter36.PNG",
    b: {
      x: 1234,
      y: 282
    }
  }, {
    a: "HumanFighter5.PNG",
    b: {
      x: 1178,
      y: 282
    }
  }, {
    a: "HumanFighter6.PNG",
    b: {
      x: 1122,
      y: 282
    }
  }, {
    a: "HumanFighter7.PNG",
    b: {
      x: 1066,
      y: 282
    }
  }, {
    a: "HumanFighter8.PNG",
    b: {
      x: 1010,
      y: 282
    }
  }, {
    a: "HumanFighter9.PNG",
    b: {
      x: 954,
      y: 282
    }
  }, {
    a: "HumanMage.PNG",
    b: {
      x: 898,
      y: 282
    }
  }, {
    a: "HumanMage10.PNG",
    b: {
      x: 842,
      y: 1402
    }
  }, {
    a: "HumanMage11.PNG",
    b: {
      x: 842,
      y: 1346
    }
  },
  {
    a: "HumanMage12.PNG",
    b: {
      x: 842,
      y: 1290
    }
  }, {
    a: "HumanMage13.PNG",
    b: {
      x: 842,
      y: 1234
    }
  }, {
    a: "HumanMage14.PNG",
    b: {
      x: 842,
      y: 1178
    }
  }, {
    a: "HumanMage15.PNG",
    b: {
      x: 842,
      y: 1122
    }
  }, {
    a: "HumanMage18.PNG",
    b: {
      x: 842,
      y: 1066
    }
  }, {
    a: "HumanMage19.PNG",
    b: {
      x: 842,
      y: 1010
    }
  }, {
    a: "HumanMage2.PNG",
    b: {
      x: 842,
      y: 954
    }
  }, {
    a: "HumanMage20.PNG",
    b: {
      x: 842,
      y: 898
    }
  }, {
    a: "HumanMage3.PNG",
    b: {
      x: 842,
      y: 842
    }
  }, {
    a: "HumanMage31.PNG",
    b: {
      x: 842,
      y: 786
    }
  }, {
    a: "HumanMage32.PNG",
    b: {
      x: 842,
      y: 730
    }
  }, {
    a: "HumanMage33.PNG",
    b: {
      x: 842,
      y: 674
    }
  }, {
    a: "HumanMage34.PNG",
    b: {
      x: 842,
      y: 618
    }
  }, {
    a: "HumanMage35.PNG",
    b: {
      x: 842,
      y: 562
    }
  }, {
    a: "HumanMage36.PNG",
    b: {
      x: 842,
      y: 506
    }
  }, {
    a: "HumanMage4.PNG",
    b: {
      x: 842,
      y: 450
    }
  }, {
    a: "HumanMage5.PNG",
    b: {
      x: 842,
      y: 394
    }
  }, {
    a: "HumanMage6.PNG",
    b: {
      x: 842,
      y: 338
    }
  }, {
    a: "HumanMage7.PNG",
    b: {
      x: 842,
      y: 282
    }
  }, {
    a: "HumanMage8.PNG",
    b: {
      x: 1962,
      y: 226
    }
  }, {
    a: "HumanMage9.PNG",
    b: {
      x: 1906,
      y: 226
    }
  }, {
    a: "HumanPaladin.PNG",
    b: {
      x: 1850,
      y: 226
    }
  }, {
    a: "HumanPriest.PNG",
    b: {
      x: 1794,
      y: 226
    }
  }, {
    a: "HumanPriest01.PNG",
    b: {
      x: 1738,
      y: 226
    }
  }, {
    a: "HumanPriest02.PNG",
    b: {
      x: 1682,
      y: 226
    }
  }, {
    a: "HumanPriest03.PNG",
    b: {
      x: 1626,
      y: 226
    }
  }, {
    a: "HumanPriest04.PNG",
    b: {
      x: 1570,
      y: 226
    }
  }, {
    a: "HumanPriest2.PNG",
    b: {
      x: 1514,
      y: 226
    }
  }, {
    a: "HumanPriest20.PNG",
    b: {
      x: 1458,
      y: 226
    }
  }, {
    a: "HumanPriest3.PNG",
    b: {
      x: 1402,
      y: 226
    }
  }, {
    a: "HumanPriest31.PNG",
    b: {
      x: 1346,
      y: 226
    }
  }, {
    a: "HumanPriest32.PNG",
    b: {
      x: 1290,
      y: 226
    }
  }, {
    a: "HumanPriest33.PNG",
    b: {
      x: 1234,
      y: 226
    }
  }, {
    a: "HumanPriest34.PNG",
    b: {
      x: 1178,
      y: 226
    }
  }, {
    a: "HumanPriest35.PNG",
    b: {
      x: 1122,
      y: 226
    }
  }, {
    a: "HumanPriest4.PNG",
    b: {
      x: 1066,
      y: 226
    }
  }, {
    a: "HumanPriest9.PNG",
    b: {
      x: 1010,
      y: 226
    }
  }, {
    a: "HumanRanger31.PNG",
    b: {
      x: 954,
      y: 226
    }
  }, {
    a: "HumanThief.PNG",
    b: {
      x: 898,
      y: 226
    }
  },
  {
    a: "HumanThief2.PNG",
    b: {
      x: 842,
      y: 226
    }
  }, {
    a: "HumanThief3.PNG",
    b: {
      x: 786,
      y: 1402
    }
  }, {
    a: "HumanThief4.PNG",
    b: {
      x: 786,
      y: 1346
    }
  }, {
    a: "HumanThief6.PNG",
    b: {
      x: 786,
      y: 1290
    }
  }, {
    a: "HumanThief7.PNG",
    b: {
      x: 786,
      y: 1234
    }
  }, {
    a: "HumanThief8.PNG",
    b: {
      x: 786,
      y: 1178
    }
  }, {
    a: "Hydra10HeadRed.PNG",
    b: {
      x: 786,
      y: 1122
    }
  }, {
    a: "Hydra2HeadBrown.PNG",
    b: {
      x: 786,
      y: 1066
    }
  }, {
    a: "Hydra3HeadRed.PNG",
    b: {
      x: 786,
      y: 1010
    }
  }, {
    a: "Hydra4HeadGrey.PNG",
    b: {
      x: 786,
      y: 954
    }
  }, {
    a: "Hydra5EyedWhite.PNG",
    b: {
      x: 786,
      y: 898
    }
  }, {
    a: "Hydra6HeadYellow.PNG",
    b: {
      x: 786,
      y: 842
    }
  }, {
    a: "Hydra7HeadGrey.PNG",
    b: {
      x: 786,
      y: 786
    }
  }, {
    a: "Hydra8HeadPurple.PNG",
    b: {
      x: 786,
      y: 730
    }
  }, {
    a: "Hydra9HeadGreen.PNG",
    b: {
      x: 786,
      y: 674
    }
  }, {
    a: "Hydra9HeadedGreen.PNG",
    b: {
      x: 786,
      y: 618
    }
  }, {
    a: "Imp.PNG",
    b: {
      x: 786,
      y: 562
    }
  }, {
    a: "ImpFighter.PNG",
    b: {
      x: 786,
      y: 506
    }
  }, {
    a: "ImpFighter2.PNG",
    b: {
      x: 786,
      y: 450
    }
  }, {
    a: "ImpFighter4.PNG",
    b: {
      x: 786,
      y: 394
    }
  }, {
    a: "ImpMage.PNG",
    b: {
      x: 786,
      y: 338
    }
  }, {
    a: "ImpMage2.PNG",
    b: {
      x: 786,
      y: 282
    }
  }, {
    a: "ImpPriest.PNG",
    b: {
      x: 786,
      y: 226
    }
  }, {
    a: "JellyfishBlue.PNG",
    b: {
      x: 1962,
      y: 170
    }
  }, {
    a: "JellyfishBrown.PNG",
    b: {
      x: 1906,
      y: 170
    }
  }, {
    a: "JellyfishGreen.PNG",
    b: {
      x: 1850,
      y: 170
    }
  }, {
    a: "JellyfishGrey.PNG",
    b: {
      x: 1794,
      y: 170
    }
  }, {
    a: "JellyfishGrey2.PNG",
    b: {
      x: 1738,
      y: 170
    }
  }, {
    a: "JellyfishOrange.PNG",
    b: {
      x: 1682,
      y: 170
    }
  }, {
    a: "JellyfishOrange2.PNG",
    b: {
      x: 1626,
      y: 170
    }
  }, {
    a: "JellyfishPink.PNG",
    b: {
      x: 1570,
      y: 170
    }
  }, {
    a: "JellyfishPink2.PNG",
    b: {
      x: 1514,
      y: 170
    }
  }, {
    a: "JellyfishPurple.PNG",
    b: {
      x: 1458,
      y: 170
    }
  }, {
    a: "JellyfishRed.PNG",
    b: {
      x: 1402,
      y: 170
    }
  }, {
    a: "JellyfishTeal.PNG",
    b: {
      x: 1346,
      y: 170
    }
  }, {
    a: "JellyfishWhite2.PNG",
    b: {
      x: 1290,
      y: 170
    }
  }, {
    a: "JellyfishYellow.PNG",
    b: {
      x: 1234,
      y: 170
    }
  }, {
    a: "JellyfishYellow2.PNG",
    b: {
      x: 1178,
      y: 170
    }
  }, {
    a: "KoboldFighter.PNG",
    b: {
      x: 1122,
      y: 170
    }
  }, {
    a: "KoboldFighter10.PNG",
    b: {
      x: 1066,
      y: 170
    }
  }, {
    a: "KoboldFighter2.PNG",
    b: {
      x: 1010,
      y: 170
    }
  }, {
    a: "KoboldFighter3.PNG",
    b: {
      x: 954,
      y: 170
    }
  }, {
    a: "KoboldFighter4.PNG",
    b: {
      x: 898,
      y: 170
    }
  }, {
    a: "KoboldLarge.PNG",
    b: {
      x: 842,
      y: 170
    }
  }, {
    a: "KoboldMage.PNG",
    b: {
      x: 786,
      y: 170
    }
  }, {
    a: "KoboldMage2.PNG",
    b: {
      x: 730,
      y: 1402
    }
  }, {
    a: "KoboldMage3.PNG",
    b: {
      x: 730,
      y: 1346
    }
  }, {
    a: "KoboldMedium.PNG",
    b: {
      x: 730,
      y: 1290
    }
  }, {
    a: "KoboldPriest.PNG",
    b: {
      x: 730,
      y: 1234
    }
  }, {
    a: "KoboldSmall.PNG",
    b: {
      x: 730,
      y: 1178
    }
  }, {
    a: "LivingMoundBrown.PNG",
    b: {
      x: 730,
      y: 1122
    }
  }, {
    a: "LivingMoundBrownGreen.PNG",
    b: {
      x: 730,
      y: 1066
    }
  }, {
    a: "LivingMoundFlesh.PNG",
    b: {
      x: 730,
      y: 1010
    }
  }, {
    a: "LivingMoundGreen.PNG",
    b: {
      x: 730,
      y: 954
    }
  }, {
    a: "LivingMoundGreenBrown.PNG",
    b: {
      x: 730,
      y: 898
    }
  }, {
    a: "LivingMoundLightGreen.PNG",
    b: {
      x: 730,
      y: 842
    }
  }, {
    a: "LivingMoundMagenta.PNG",
    b: {
      x: 730,
      y: 786
    }
  }, {
    a: "LivingMoundOrange.PNG",
    b: {
      x: 730,
      y: 730
    }
  }, {
    a: "LivingMoundRed.PNG",
    b: {
      x: 730,
      y: 674
    }
  }, {
    a: "LivingMoundTeal.PNG",
    b: {
      x: 730,
      y: 618
    }
  }, {
    a: "LizardBrown.PNG",
    b: {
      x: 730,
      y: 562
    }
  }, {
    a: "LizardGreen.PNG",
    b: {
      x: 730,
      y: 506
    }
  }, {
    a: "LizardGrey.PNG",
    b: {
      x: 730,
      y: 450
    }
  }, {
    a: "LizardRed.PNG",
    b: {
      x: 730,
      y: 394
    }
  }, {
    a: "LizardStriped.PNG",
    b: {
      x: 730,
      y: 338
    }
  }, {
    a: "Medusa.PNG",
    b: {
      x: 730,
      y: 282
    }
  }, {
    a: "MoldBlue.PNG",
    b: {
      x: 730,
      y: 226
    }
  }, {
    a: "MoldBlueDark.PNG",
    b: {
      x: 730,
      y: 170
    }
  }, {
    a: "MoldBlueGrey.PNG",
    b: {
      x: 1962,
      y: 114
    }
  }, {
    a: "MoldBownDark.PNG",
    b: {
      x: 1906,
      y: 114
    }
  }, {
    a: "MoldBrown.PNG",
    b: {
      x: 1850,
      y: 114
    }
  }, {
    a: "MoldGreen.PNG",
    b: {
      x: 1794,
      y: 114
    }
  }, {
    a: "MoldGreenDark.PNG",
    b: {
      x: 1738,
      y: 114
    }
  }, {
    a: "MoldGrey.PNG",
    b: {
      x: 1682,
      y: 114
    }
  }, {
    a: "MoldPurple.PNG",
    b: {
      x: 1626,
      y: 114
    }
  }, {
    a: "MoldPurpleDark.PNG",
    b: {
      x: 1570,
      y: 114
    }
  }, {
    a: "MoldRed.PNG",
    b: {
      x: 1514,
      y: 114
    }
  }, {
    a: "MoldRedLight.PNG",
    b: {
      x: 1458,
      y: 114
    }
  }, {
    a: "Mule.PNG",
    b: {
      x: 1402,
      y: 114
    }
  }, {
    a: "MummyGreen.PNG",
    b: {
      x: 1346,
      y: 114
    }
  }, {
    a: "MummyGrey.PNG",
    b: {
      x: 1290,
      y: 114
    }
  }, {
    a: "MummyPink.PNG",
    b: {
      x: 1234,
      y: 114
    }
  }, {
    a: "MummyPurple.PNG",
    b: {
      x: 1178,
      y: 114
    }
  }, {
    a: "MummyRed.PNG",
    b: {
      x: 1122,
      y: 114
    }
  }, {
    a: "MummyTeal.PNG",
    b: {
      x: 1066,
      y: 114
    }
  }, {
    a: "MummyWhite.PNG",
    b: {
      x: 1010,
      y: 114
    }
  }, {
    a: "MummyYellow.PNG",
    b: {
      x: 954,
      y: 114
    }
  }, {
    a: "MushroomsBlack.PNG",
    b: {
      x: 898,
      y: 114
    }
  }, {
    a: "MushroomsGold.PNG",
    b: {
      x: 842,
      y: 114
    }
  }, {
    a: "MushroomsGreen.PNG",
    b: {
      x: 786,
      y: 114
    }
  }, {
    a: "MushroomsGreenBlue.PNG",
    b: {
      x: 730,
      y: 114
    }
  }, {
    a: "MushroomsGrey.PNG",
    b: {
      x: 674,
      y: 1402
    }
  }, {
    a: "MushroomsPink.PNG",
    b: {
      x: 674,
      y: 1346
    }
  }, {
    a: "MushroomsPurple.PNG",
    b: {
      x: 674,
      y: 1290
    }
  }, {
    a: "Ninja.PNG",
    b: {
      x: 674,
      y: 1234
    }
  }, {
    a: "OgreBlack.PNG",
    b: {
      x: 674,
      y: 1178
    }
  }, {
    a: "OgreBrown.PNG",
    b: {
      x: 674,
      y: 1122
    }
  }, {
    a: "OgreLord.PNG",
    b: {
      x: 674,
      y: 1066
    }
  }, {
    a: "OgreMage.PNG",
    b: {
      x: 674,
      y: 1010
    }
  }, {
    a: "OgrePrimitive.PNG",
    b: {
      x: 674,
      y: 954
    }
  }, {
    a: "OozeBlack.PNG",
    b: {
      x: 674,
      y: 898
    }
  }, {
    a: "OozeBlue.PNG",
    b: {
      x: 674,
      y: 842
    }
  }, {
    a: "OozeBrown.PNG",
    b: {
      x: 674,
      y: 786
    }
  }, {
    a: "OozeGreen.PNG",
    b: {
      x: 674,
      y: 730
    }
  }, {
    a: "OozeGrey.PNG",
    b: {
      x: 674,
      y: 674
    }
  }, {
    a: "Orc.PNG",
    b: {
      x: 674,
      y: 618
    }
  }, {
    a: "OrcClub.PNG",
    b: {
      x: 674,
      y: 562
    }
  }, {
    a: "OrcFighter.PNG",
    b: {
      x: 674,
      y: 506
    }
  }, {
    a: "OrcFighter2.PNG",
    b: {
      x: 674,
      y: 450
    }
  }, {
    a: "OrcFighter3.PNG",
    b: {
      x: 674,
      y: 394
    }
  }, {
    a: "OrcFighter4.PNG",
    b: {
      x: 674,
      y: 338
    }
  }, {
    a: "OrcFighter5.PNG",
    b: {
      x: 674,
      y: 282
    }
  }, {
    a: "OrcFighter6.PNG",
    b: {
      x: 674,
      y: 226
    }
  }, {
    a: "OrcFighter7.PNG",
    b: {
      x: 674,
      y: 170
    }
  }, {
    a: "OrcFighter8.PNG",
    b: {
      x: 674,
      y: 114
    }
  }, {
    a: "OrcGreenFighter.PNG",
    b: {
      x: 1962,
      y: 58
    }
  }, {
    a: "OrcGreyFighter.PNG",
    b: {
      x: 1906,
      y: 58
    }
  }, {
    a: "OrcGreyFighter2.PNG",
    b: {
      x: 1850,
      y: 58
    }
  }, {
    a: "OrcGreyFighter4.PNG",
    b: {
      x: 1794,
      y: 58
    }
  }, {
    a: "OrcGreyMage.PNG",
    b: {
      x: 1738,
      y: 58
    }
  }, {
    a: "OrcGuard.PNG",
    b: {
      x: 1682,
      y: 58
    }
  }, {
    a: "OrcMage.PNG",
    b: {
      x: 1626,
      y: 58
    }
  }, {
    a: "OrcMage2.PNG",
    b: {
      x: 1570,
      y: 58
    }
  }, {
    a: "OrcPriest.PNG",
    b: {
      x: 1514,
      y: 58
    }
  }, {
    a: "OrcRed.PNG",
    b: {
      x: 1458,
      y: 58
    }
  }, {
    a: "OrcRedFighter.PNG",
    b: {
      x: 1402,
      y: 58
    }
  }, {
    a: "OrcRedFighter3.PNG",
    b: {
      x: 1346,
      y: 58
    }
  }, {
    a: "OrcRedKing.PNG",
    b: {
      x: 1290,
      y: 58
    }
  }, {
    a: "People01.PNG",
    b: {
      x: 1234,
      y: 58
    }
  }, {
    a: "People02.PNG",
    b: {
      x: 1178,
      y: 58
    }
  }, {
    a: "People03.PNG",
    b: {
      x: 1122,
      y: 58
    }
  }, {
    a: "People04.PNG",
    b: {
      x: 1066,
      y: 58
    }
  }, {
    a: "People05.PNG",
    b: {
      x: 1010,
      y: 58
    }
  }, {
    a: "People06.PNG",
    b: {
      x: 954,
      y: 58
    }
  }, {
    a: "PeopleBeggar.PNG",
    b: {
      x: 898,
      y: 58
    }
  }, {
    a: "PeopleBlond.PNG",
    b: {
      x: 842,
      y: 58
    }
  }, {
    a: "PeopleBodybuilder.PNG",
    b: {
      x: 786,
      y: 58
    }
  }, {
    a: "PeopleChild.PNG",
    b: {
      x: 730,
      y: 58
    }
  }, {
    a: "PeopleDrunk.PNG",
    b: {
      x: 674,
      y: 58
    }
  }, {
    a: "PeopleFarmer.PNG",
    b: {
      x: 618,
      y: 1402
    }
  }, {
    a: "PeopleGuard.PNG",
    b: {
      x: 618,
      y: 1346
    }
  }, {
    a: "PeopleHunchback.PNG",
    b: {
      x: 618,
      y: 1290
    }
  }, {
    a: "PeopleHunchbackGrey.PNG",
    b: {
      x: 618,
      y: 1234
    }
  }, {
    a: "PeopleHunchbackRed.PNG",
    b: {
      x: 618,
      y: 1178
    }
  }, {
    a: "PeopleJester.PNG",
    b: {
      x: 618,
      y: 1122
    }
  }, {
    a: "PhantomEye.PNG",
    b: {
      x: 618,
      y: 1066
    }
  }, {
    a: "PhantomHand.PNG",
    b: {
      x: 618,
      y: 1010
    }
  }, {
    a: "PhantomSkull.PNG",
    b: {
      x: 618,
      y: 954
    }
  }, {
    a: "Pheonix.PNG",
    b: {
      x: 618,
      y: 898
    }
  }, {
    a: "Race10Fighter.PNG",
    b: {
      x: 618,
      y: 842
    }
  }, {
    a: "Race10Fighter2.PNG",
    b: {
      x: 618,
      y: 786
    }
  }, {
    a: "Race10Fighter3.PNG",
    b: {
      x: 618,
      y: 730
    }
  }, {
    a: "Race10Fighter4.PNG",
    b: {
      x: 618,
      y: 674
    }
  }, {
    a: "Race10Mage.PNG",
    b: {
      x: 618,
      y: 618
    }
  }, {
    a: "Race10Mage2.PNG",
    b: {
      x: 618,
      y: 562
    }
  }, {
    a: "Race10Mage3.PNG",
    b: {
      x: 618,
      y: 506
    }
  }, {
    a: "Race10Priest.PNG",
    b: {
      x: 618,
      y: 450
    }
  }, {
    a: "Race11Fighter.PNG",
    b: {
      x: 618,
      y: 394
    }
  }, {
    a: "Race11Fighter2.PNG",
    b: {
      x: 618,
      y: 338
    }
  }, {
    a: "Race11Fighter3.PNG",
    b: {
      x: 618,
      y: 282
    }
  }, {
    a: "Race11Fighter4.PNG",
    b: {
      x: 618,
      y: 226
    }
  }, {
    a: "Race11Fighter5.PNG",
    b: {
      x: 618,
      y: 170
    }
  }, {
    a: "Race11Mage.PNG",
    b: {
      x: 618,
      y: 114
    }
  }, {
    a: "Race11Priest.PNG",
    b: {
      x: 618,
      y: 58
    }
  }, {
    a: "Race12Fighter.PNG",
    b: {
      x: 1962,
      y: 2
    }
  }, {
    a: "Race12Fighter2.PNG",
    b: {
      x: 1906,
      y: 2
    }
  }, {
    a: "Race12Fighter3.PNG",
    b: {
      x: 1850,
      y: 2
    }
  }, {
    a: "Race12Fighter4.PNG",
    b: {
      x: 1794,
      y: 2
    }
  }, {
    a: "Race12Mage.PNG",
    b: {
      x: 1738,
      y: 2
    }
  }, {
    a: "Race12Priest.PNG",
    b: {
      x: 1682,
      y: 2
    }
  }, {
    a: "Race13Fighter1.PNG",
    b: {
      x: 1626,
      y: 2
    }
  }, {
    a: "Race13Fighter2.PNG",
    b: {
      x: 1570,
      y: 2
    }
  }, {
    a: "Race13Fighter3.PNG",
    b: {
      x: 1514,
      y: 2
    }
  }, {
    a: "Race13Fighter5.PNG",
    b: {
      x: 1458,
      y: 2
    }
  }, {
    a: "Race13Fighter6.PNG",
    b: {
      x: 1402,
      y: 2
    }
  }, {
    a: "Race13Fighter8.PNG",
    b: {
      x: 1346,
      y: 2
    }
  }, {
    a: "Race13Mage.PNG",
    b: {
      x: 1290,
      y: 2
    }
  }, {
    a: "Race13Mage2.PNG",
    b: {
      x: 1234,
      y: 2
    }
  }, {
    a: "Race13Mage3.PNG",
    b: {
      x: 1178,
      y: 2
    }
  }, {
    a: "Race13Mage4.PNG",
    b: {
      x: 1122,
      y: 2
    }
  }, {
    a: "Race13Mage5.PNG",
    b: {
      x: 1066,
      y: 2
    }
  }, {
    a: "Race13Mage6.PNG",
    b: {
      x: 1010,
      y: 2
    }
  }, {
    a: "Race13Mage8.PNG",
    b: {
      x: 954,
      y: 2
    }
  }, {
    a: "Race13Priest.PNG",
    b: {
      x: 898,
      y: 2
    }
  }, {
    a: "Race14Grey.PNG",
    b: {
      x: 842,
      y: 2
    }
  }, {
    a: "Race14Red.PNG",
    b: {
      x: 786,
      y: 2
    }
  }, {
    a: "Race14Yellow.PNG",
    b: {
      x: 730,
      y: 2
    }
  }, {
    a: "Race1Fighter.PNG",
    b: {
      x: 674,
      y: 2
    }
  }, {
    a: "Race1Fighter2.PNG",
    b: {
      x: 618,
      y: 2
    }
  }, {
    a: "Race1Fighter3.PNG",
    b: {
      x: 562,
      y: 1402
    }
  }, {
    a: "Race1Fighter4.PNG",
    b: {
      x: 562,
      y: 1346
    }
  }, {
    a: "Race1Mage.PNG",
    b: {
      x: 562,
      y: 1290
    }
  }, {
    a: "Race1Mage2.PNG",
    b: {
      x: 562,
      y: 1234
    }
  }, {
    a: "Race1Mage3.PNG",
    b: {
      x: 562,
      y: 1178
    }
  }, {
    a: "Race1Mage4.PNG",
    b: {
      x: 562,
      y: 1122
    }
  }, {
    a: "Race1Mage5.PNG",
    b: {
      x: 562,
      y: 1066
    }
  }, {
    a: "Race1Mage6.PNG",
    b: {
      x: 562,
      y: 1010
    }
  }, {
    a: "Race1Priest.PNG",
    b: {
      x: 562,
      y: 954
    }
  }, {
    a: "Race1Priest2.PNG",
    b: {
      x: 562,
      y: 898
    }
  }, {
    a: "Race2Fighter.PNG",
    b: {
      x: 562,
      y: 842
    }
  }, {
    a: "Race2Fighter2.PNG",
    b: {
      x: 618,
      y: 170
    }
  }, {
    a: "Race2Fighter3.PNG",
    b: {
      x: 562,
      y: 786
    }
  }, {
    a: "Race2Fighter4.PNG",
    b: {
      x: 562,
      y: 730
    }
  }, {
    a: "Race2Mage.PNG",
    b: {
      x: 562,
      y: 674
    }
  }, {
    a: "Race2Mage2.PNG",
    b: {
      x: 562,
      y: 618
    }
  }, {
    a: "Race2Mage3.PNG",
    b: {
      x: 562,
      y: 562
    }
  }, {
    a: "Race2Mage4.PNG",
    b: {
      x: 562,
      y: 506
    }
  }, {
    a: "Race2Mage5.PNG",
    b: {
      x: 562,
      y: 450
    }
  }, {
    a: "Race2Mage6.PNG",
    b: {
      x: 562,
      y: 394
    }
  }, {
    a: "Race2Priest.PNG",
    b: {
      x: 562,
      y: 338
    }
  }, {
    a: "Race2Priest2.PNG",
    b: {
      x: 562,
      y: 282
    }
  }, {
    a: "Race3Fighter.PNG",
    b: {
      x: 562,
      y: 226
    }
  }, {
    a: "Race3Fighter2.PNG",
    b: {
      x: 562,
      y: 170
    }
  }, {
    a: "Race3Fighter3.PNG",
    b: {
      x: 562,
      y: 114
    }
  }, {
    a: "Race3Mage.PNG",
    b: {
      x: 562,
      y: 58
    }
  }, {
    a: "Race3Mage2.PNG",
    b: {
      x: 562,
      y: 2
    }
  }, {
    a: "Race3Priest.PNG",
    b: {
      x: 506,
      y: 1402
    }
  }, {
    a: "Race4Fighter.PNG",
    b: {
      x: 506,
      y: 1346
    }
  }, {
    a: "Race4Fighter2.PNG",
    b: {
      x: 506,
      y: 1290
    }
  }, {
    a: "Race4Fighter3.PNG",
    b: {
      x: 506,
      y: 1234
    }
  }, {
    a: "Race4Fighter4.PNG",
    b: {
      x: 506,
      y: 1178
    }
  }, {
    a: "Race4Mage.PNG",
    b: {
      x: 506,
      y: 1122
    }
  }, {
    a: "Race4Mage2.PNG",
    b: {
      x: 506,
      y: 1066
    }
  }, {
    a: "Race5Fighter.PNG",
    b: {
      x: 506,
      y: 1010
    }
  }, {
    a: "Race5Fighter2.PNG",
    b: {
      x: 506,
      y: 954
    }
  }, {
    a: "Race5Fighter3.PNG",
    b: {
      x: 506,
      y: 898
    }
  }, {
    a: "Race5Fighter4.PNG",
    b: {
      x: 506,
      y: 842
    }
  }, {
    a: "Race6Fighter.PNG",
    b: {
      x: 506,
      y: 786
    }
  }, {
    a: "Race6Fighter2.PNG",
    b: {
      x: 506,
      y: 730
    }
  }, {
    a: "Race6Fighter3.PNG",
    b: {
      x: 506,
      y: 674
    }
  }, {
    a: "Race6Fighter4.PNG",
    b: {
      x: 506,
      y: 618
    }
  }, {
    a: "Race6Mage.PNG",
    b: {
      x: 506,
      y: 562
    }
  }, {
    a: "Race6Priest.PNG",
    b: {
      x: 506,
      y: 506
    }
  }, {
    a: "Race7Fighter.PNG",
    b: {
      x: 506,
      y: 450
    }
  }, {
    a: "Race7Fighter2.PNG",
    b: {
      x: 506,
      y: 394
    }
  }, {
    a: "Race8Fighter.PNG",
    b: {
      x: 506,
      y: 338
    }
  }, {
    a: "Race8Fighter2.PNG",
    b: {
      x: 506,
      y: 282
    }
  }, {
    a: "Race8Fighter3.PNG",
    b: {
      x: 506,
      y: 226
    }
  }, {
    a: "Race8Fighter4.PNG",
    b: {
      x: 506,
      y: 170
    }
  }, {
    a: "Race8Fighter5.PNG",
    b: {
      x: 506,
      y: 114
    }
  }, {
    a: "Race8Fighter6.PNG",
    b: {
      x: 506,
      y: 58
    }
  }, {
    a: "Race8Fighter7.PNG",
    b: {
      x: 506,
      y: 2
    }
  }, {
    a: "Race8Mage.PNG",
    b: {
      x: 450,
      y: 1402
    }
  }, {
    a: "Race8Mage2.PNG",
    b: {
      x: 450,
      y: 1346
    }
  }, {
    a: "Race8Mage5.PNG",
    b: {
      x: 450,
      y: 1290
    }
  }, {
    a: "Race8Priest.PNG",
    b: {
      x: 450,
      y: 1234
    }
  }, {
    a: "Race9Angel.PNG",
    b: {
      x: 450,
      y: 1178
    }
  }, {
    a: "Race9Fighter.PNG",
    b: {
      x: 450,
      y: 1122
    }
  }, {
    a: "Race9Mage.PNG",
    b: {
      x: 450,
      y: 1066
    }
  }, {
    a: "Race9Mage2.PNG",
    b: {
      x: 450,
      y: 1010
    }
  }, {
    a: "Race9Mage3.PNG",
    b: {
      x: 450,
      y: 954
    }
  }, {
    a: "Race9Priest.PNG",
    b: {
      x: 450,
      y: 898
    }
  }, {
    a: "RatBrownDark.PNG",
    b: {
      x: 450,
      y: 842
    }
  }, {
    a: "RatBrownLight.PNG",
    b: {
      x: 450,
      y: 786
    }
  }, {
    a: "RatGrey.PNG",
    b: {
      x: 450,
      y: 730
    }
  }, {
    a: "RatWhite.PNG",
    b: {
      x: 450,
      y: 674
    }
  }, {
    a: "Rocks.PNG",
    b: {
      x: 450,
      y: 618
    }
  }, {
    a: "ScorpionBlack.PNG",
    b: {
      x: 450,
      y: 562
    }
  }, {
    a: "ScorpionBlue.PNG",
    b: {
      x: 450,
      y: 506
    }
  }, {
    a: "ScorpionBrown.PNG",
    b: {
      x: 450,
      y: 450
    }
  }, {
    a: "ScorpionGreenYellow.PNG",
    b: {
      x: 450,
      y: 394
    }
  }, {
    a: "ScorpionGrey.PNG",
    b: {
      x: 450,
      y: 338
    }
  }, {
    a: "ScorpionPink.PNG",
    b: {
      x: 450,
      y: 282
    }
  }, {
    a: "Serpent.PNG",
    b: {
      x: 450,
      y: 226
    }
  }, {
    a: "Skeleton.PNG",
    b: {
      x: 450,
      y: 170
    }
  }, {
    a: "Skeleton2.PNG",
    b: {
      x: 450,
      y: 114
    }
  }, {
    a: "Skeleton3.PNG",
    b: {
      x: 450,
      y: 58
    }
  }, {
    a: "Skeleton4.PNG",
    b: {
      x: 450,
      y: 2
    }
  }, {
    a: "Skeleton5.PNG",
    b: {
      x: 394,
      y: 1402
    }
  }, {
    a: "Skeleton6.PNG",
    b: {
      x: 394,
      y: 1346
    }
  }, {
    a: "Skeleton7.PNG",
    b: {
      x: 394,
      y: 1290
    }
  }, {
    a: "SkeletonDemon.PNG",
    b: {
      x: 394,
      y: 1234
    }
  }, {
    a: "SkeletonDemonFighter.PNG",
    b: {
      x: 394,
      y: 1178
    }
  }, {
    a: "SkeletonFighter.PNG",
    b: {
      x: 394,
      y: 1122
    }
  }, {
    a: "SkeletonFighter10.PNG",
    b: {
      x: 394,
      y: 1066
    }
  },
  {
    a: "SkeletonFighter11.PNG",
    b: {
      x: 394,
      y: 1010
    }
  }, {
    a: "SkeletonFighter12.PNG",
    b: {
      x: 394,
      y: 954
    }
  }, {
    a: "SkeletonFighter13.PNG",
    b: {
      x: 394,
      y: 898
    }
  }, {
    a: "SkeletonFighter2.PNG",
    b: {
      x: 394,
      y: 842
    }
  }, {
    a: "SkeletonFighter3.PNG",
    b: {
      x: 394,
      y: 786
    }
  }, {
    a: "SkeletonFighter4.PNG",
    b: {
      x: 394,
      y: 730
    }
  }, {
    a: "SkeletonFighter5.PNG",
    b: {
      x: 394,
      y: 674
    }
  }, {
    a: "SkeletonFighter6.PNG",
    b: {
      x: 394,
      y: 618
    }
  }, {
    a: "SkeletonFighter7.PNG",
    b: {
      x: 394,
      y: 562
    }
  }, {
    a: "SkeletonFighter8.PNG",
    b: {
      x: 394,
      y: 506
    }
  }, {
    a: "SkeletonFighter9.PNG",
    b: {
      x: 394,
      y: 450
    }
  }, {
    a: "SkeletonFighterLord1.PNG",
    b: {
      x: 394,
      y: 394
    }
  }, {
    a: "SkeletonFighterLord2.PNG",
    b: {
      x: 394,
      y: 338
    }
  }, {
    a: "SkeletonFighterLord3.PNG",
    b: {
      x: 394,
      y: 282
    }
  }, {
    a: "SkeletonFighterLord4.PNG",
    b: {
      x: 394,
      y: 226
    }
  }, {
    a: "SkeletonFighterLord5.PNG",
    b: {
      x: 394,
      y: 170
    }
  }, {
    a: "SkeletonKing.PNG",
    b: {
      x: 394,
      y: 114
    }
  }, {
    a: "SkeletonMage.PNG",
    b: {
      x: 394,
      y: 58
    }
  }, {
    a: "SkeletonMage1.PNG",
    b: {
      x: 394,
      y: 2
    }
  }, {
    a: "SkeletonMage2.PNG",
    b: {
      x: 338,
      y: 1402
    }
  }, {
    a: "SkeletonMage3.PNG",
    b: {
      x: 338,
      y: 1346
    }
  }, {
    a: "SkeletonMageLord1.PNG",
    b: {
      x: 394,
      y: 58
    }
  }, {
    a: "Smithy01.PNG",
    b: {
      x: 338,
      y: 1290
    }
  }, {
    a: "SnakeBlue.PNG",
    b: {
      x: 338,
      y: 1234
    }
  }, {
    a: "SnakeBrown.PNG",
    b: {
      x: 338,
      y: 1178
    }
  }, {
    a: "SnakeCobraBrown.PNG",
    b: {
      x: 338,
      y: 1122
    }
  }, {
    a: "SnakeCobraDarkGreen.PNG",
    b: {
      x: 338,
      y: 1066
    }
  }, {
    a: "SnakeCobraGreen.PNG",
    b: {
      x: 338,
      y: 1010
    }
  }, {
    a: "SnakeCobraGreen2.PNG",
    b: {
      x: 338,
      y: 954
    }
  }, {
    a: "SnakeCobraGrey.PNG",
    b: {
      x: 338,
      y: 898
    }
  }, {
    a: "SnakeCobraGrey2.PNG",
    b: {
      x: 338,
      y: 842
    }
  }, {
    a: "SnakeCobraRed.PNG",
    b: {
      x: 338,
      y: 786
    }
  }, {
    a: "SnakeGreen.PNG",
    b: {
      x: 338,
      y: 730
    }
  }, {
    a: "SnakeGrey.PNG",
    b: {
      x: 338,
      y: 674
    }
  }, {
    a: "SnakeOrange.PNG",
    b: {
      x: 338,
      y: 618
    }
  }, {
    a: "SnakePink.PNG",
    b: {
      x: 338,
      y: 562
    }
  }, {
    a: "SnakeRed2Headed.PNG",
    b: {
      x: 338,
      y: 506
    }
  }, {
    a: "SnakeSilver.PNG",
    b: {
      x: 338,
      y: 450
    }
  }, {
    a: "SnakeSilver2.PNG",
    b: {
      x: 338,
      y: 394
    }
  }, {
    a: "SnakeWhite.PNG",
    b: {
      x: 338,
      y: 338
    }
  }, {
    a: "SnakeWhite2.PNG",
    b: {
      x: 338,
      y: 282
    }
  }, {
    a: "SnakeYellow.PNG",
    b: {
      x: 338,
      y: 226
    }
  }, {
    a: "SnakeYellow2.PNG",
    b: {
      x: 338,
      y: 170
    }
  }, {
    a: "SpectreBlack.PNG",
    b: {
      x: 338,
      y: 114
    }
  }, {
    a: "SpectreBlue.PNG",
    b: {
      x: 338,
      y: 58
    }
  }, {
    a: "SpectreGreen.PNG",
    b: {
      x: 338,
      y: 2
    }
  }, {
    a: "SpectreOrange.PNG",
    b: {
      x: 282,
      y: 1402
    }
  }, {
    a: "SpectrePurple.PNG",
    b: {
      x: 282,
      y: 1346
    }
  }, {
    a: "SpectreRed.PNG",
    b: {
      x: 282,
      y: 1290
    }
  }, {
    a: "SpectreSilver.PNG",
    b: {
      x: 282,
      y: 1234
    }
  }, {
    a: "SpiderBlack.PNG",
    b: {
      x: 282,
      y: 1178
    }
  }, {
    a: "SpiderBlue.PNG",
    b: {
      x: 282,
      y: 1122
    }
  }, {
    a: "SpiderGiantGrey.PNG",
    b: {
      x: 282,
      y: 1066
    }
  }, {
    a: "SpiderGiantRed.PNG",
    b: {
      x: 282,
      y: 1010
    }
  }, {
    a: "SpiderGold.PNG",
    b: {
      x: 282,
      y: 954
    }
  }, {
    a: "SpiderGreen.PNG",
    b: {
      x: 282,
      y: 898
    }
  }, {
    a: "SpiderPurple.PNG",
    b: {
      x: 282,
      y: 842
    }
  }, {
    a: "SpiderRed.PNG",
    b: {
      x: 282,
      y: 786
    }
  }, {
    a: "SpiderRed2.PNG",
    b: {
      x: 282,
      y: 730
    }
  }, {
    a: "SpiritAir.PNG",
    b: {
      x: 282,
      y: 674
    }
  }, {
    a: "SpiritBrown.PNG",
    b: {
      x: 282,
      y: 618
    }
  }, {
    a: "SpiritBrownLight.PNG",
    b: {
      x: 282,
      y: 562
    }
  }, {
    a: "SpiritEarth.PNG",
    b: {
      x: 282,
      y: 506
    }
  }, {
    a: "SpiritFire.PNG",
    b: {
      x: 282,
      y: 450
    }
  }, {
    a: "SpiritGreen.PNG",
    b: {
      x: 282,
      y: 394
    }
  }, {
    a: "SpiritGreyDark.PNG",
    b: {
      x: 282,
      y: 338
    }
  }, {
    a: "SpiritGreyLight.PNG",
    b: {
      x: 282,
      y: 282
    }
  }, {
    a: "SpiritOrange.PNG",
    b: {
      x: 282,
      y: 226
    }
  }, {
    a: "SpiritPink.PNG",
    b: {
      x: 282,
      y: 170
    }
  }, {
    a: "SpiritPurple.PNG",
    b: {
      x: 282,
      y: 114
    }
  }, {
    a: "SpiritRed.PNG",
    b: {
      x: 282,
      y: 58
    }
  }, {
    a: "SpiritWater.PNG",
    b: {
      x: 282,
      y: 2
    }
  }, {
    a: "SpiritWater2.PNG",
    b: {
      x: 226,
      y: 1402
    }
  }, {
    a: "SpiritWhite.PNG",
    b: {
      x: 226,
      y: 1346
    }
  }, {
    a: "SpiritYelloBrown.PNG",
    b: {
      x: 226,
      y: 1290
    }
  }, {
    a: "SpriteFire.PNG",
    b: {
      x: 226,
      y: 1234
    }
  }, {
    a: "SpriteWater.PNG",
    b: {
      x: 226,
      y: 1178
    }
  }, {
    a: "TricksterBlack.PNG",
    b: {
      x: 226,
      y: 1122
    }
  }, {
    a: "TricksterBlue.PNG",
    b: {
      x: 226,
      y: 1066
    }
  }, {
    a: "TricksterBrown.PNG",
    b: {
      x: 226,
      y: 1010
    }
  }, {
    a: "TricksterGreen.PNG",
    b: {
      x: 226,
      y: 954
    }
  }, {
    a: "TricksterMage.PNG",
    b: {
      x: 226,
      y: 898
    }
  }, {
    a: "TricksterPurpleMage.PNG",
    b: {
      x: 226,
      y: 842
    }
  }, {
    a: "TricksterPurpleMage2.PNG",
    b: {
      x: 226,
      y: 786
    }
  }, {
    a: "TricksterRed.PNG",
    b: {
      x: 226,
      y: 730
    }
  }, {
    a: "TrollDark.PNG",
    b: {
      x: 226,
      y: 674
    }
  }, {
    a: "TrollFighter.PNG",
    b: {
      x: 226,
      y: 618
    }
  }, {
    a: "TrollFighter2.PNG",
    b: {
      x: 226,
      y: 562
    }
  }, {
    a: "TrollFighter3.PNG",
    b: {
      x: 226,
      y: 506
    }
  }, {
    a: "TrollFighter4.PNG",
    b: {
      x: 226,
      y: 450
    }
  }, {
    a: "TrollFire.PNG",
    b: {
      x: 226,
      y: 394
    }
  }, {
    a: "TrollGrey.PNG",
    b: {
      x: 226,
      y: 338
    }
  }, {
    a: "TrollKing.PNG",
    b: {
      x: 226,
      y: 282
    }
  }, {
    a: "TrollMage.PNG",
    b: {
      x: 226,
      y: 226
    }
  }, {
    a: "TrollMage2.PNG",
    b: {
      x: 226,
      y: 170
    }
  }, {
    a: "TrollPriest.PNG",
    b: {
      x: 226,
      y: 114
    }
  }, {
    a: "TrollPriest2.PNG",
    b: {
      x: 226,
      y: 58
    }
  }, {
    a: "TrollPrimitive.PNG",
    b: {
      x: 226,
      y: 2
    }
  }, {
    a: "TrollPrimitive2.PNG",
    b: {
      x: 170,
      y: 1402
    }
  }, {
    a: "TrollPrimitive3.PNG",
    b: {
      x: 170,
      y: 1346
    }
  }, {
    a: "TrollPrimitive4.PNG",
    b: {
      x: 170,
      y: 1290
    }
  }, {
    a: "TrollPrimitiveFighter.PNG",
    b: {
      x: 170,
      y: 1234
    }
  }, {
    a: "TrollWater.PNG",
    b: {
      x: 170,
      y: 1178
    }
  }, {
    a: "TrollWraith.PNG",
    b: {
      x: 170,
      y: 1122
    }
  }, {
    a: "TrollZombie.PNG",
    b: {
      x: 170,
      y: 1066
    }
  }, {
    a: "TurtleBlue.PNG",
    b: {
      x: 170,
      y: 1010
    }
  }, {
    a: "TurtleBrown.PNG",
    b: {
      x: 170,
      y: 954
    }
  }, {
    a: "TurtleGreen.PNG",
    b: {
      x: 170,
      y: 898
    }
  }, {
    a: "TurtleGrey.PNG",
    b: {
      x: 170,
      y: 842
    }
  }, {
    a: "TurtlePink.PNG",
    b: {
      x: 170,
      y: 786
    }
  }, {
    a: "TurtleYellow.PNG",
    b: {
      x: 170,
      y: 730
    }
  }, {
    a: "Unique1.PNG",
    b: {
      x: 170,
      y: 674
    }
  }, {
    a: "Unique10.PNG",
    b: {
      x: 170,
      y: 618
    }
  }, {
    a: "Unique11.PNG",
    b: {
      x: 170,
      y: 562
    }
  },
  {
    a: "Unique12.PNG",
    b: {
      x: 170,
      y: 506
    }
  }, {
    a: "Unique13.PNG",
    b: {
      x: 170,
      y: 450
    }
  }, {
    a: "Unique14.PNG",
    b: {
      x: 170,
      y: 394
    }
  }, {
    a: "Unique15.PNG",
    b: {
      x: 170,
      y: 338
    }
  }, {
    a: "Unique16.PNG",
    b: {
      x: 170,
      y: 282
    }
  }, {
    a: "Unique17.PNG",
    b: {
      x: 170,
      y: 226
    }
  }, {
    a: "Unique18.PNG",
    b: {
      x: 170,
      y: 170
    }
  }, {
    a: "Unique19.PNG",
    b: {
      x: 170,
      y: 114
    }
  }, {
    a: "Unique2.PNG",
    b: {
      x: 170,
      y: 58
    }
  }, {
    a: "Unique20.PNG",
    b: {
      x: 170,
      y: 2
    }
  }, {
    a: "Unique21.PNG",
    b: {
      x: 114,
      y: 1402
    }
  }, {
    a: "Unique3.PNG",
    b: {
      x: 114,
      y: 1346
    }
  }, {
    a: "Unique4.PNG",
    b: {
      x: 114,
      y: 1290
    }
  }, {
    a: "Unique5.PNG",
    b: {
      x: 114,
      y: 1234
    }
  }, {
    a: "Unique6.PNG",
    b: {
      x: 114,
      y: 1178
    }
  }, {
    a: "Unique7.PNG",
    b: {
      x: 114,
      y: 1122
    }
  }, {
    a: "Unique8.PNG",
    b: {
      x: 114,
      y: 1066
    }
  }, {
    a: "Unique9.PNG",
    b: {
      x: 114,
      y: 1010
    }
  }, {
    a: "Vampire2.PNG",
    b: {
      x: 114,
      y: 954
    }
  }, {
    a: "Vampire3.PNG",
    b: {
      x: 114,
      y: 898
    }
  }, {
    a: "Vampire4.PNG",
    b: {
      x: 114,
      y: 842
    }
  }, {
    a: "VampireBlue.PNG",
    b: {
      x: 114,
      y: 786
    }
  }, {
    a: "VampireMage1.PNG",
    b: {
      x: 114,
      y: 730
    }
  }, {
    a: "VortexChaos.PNG",
    b: {
      x: 114,
      y: 674
    }
  }, {
    a: "VortexCold.PNG",
    b: {
      x: 114,
      y: 618
    }
  }, {
    a: "VortexEnergy.PNG",
    b: {
      x: 114,
      y: 562
    }
  }, {
    a: "VortexEthereal.PNG",
    b: {
      x: 114,
      y: 506
    }
  }, {
    a: "VortexFire.PNG",
    b: {
      x: 114,
      y: 450
    }
  }, {
    a: "VortexPlasma.PNG",
    b: {
      x: 114,
      y: 394
    }
  }, {
    a: "VortexPurple.PNG",
    b: {
      x: 114,
      y: 338
    }
  }, {
    a: "VortexShimmering.PNG",
    b: {
      x: 114,
      y: 282
    }
  }, {
    a: "VortexTime.PNG",
    b: {
      x: 114,
      y: 226
    }
  }, {
    a: "VortexWater.PNG",
    b: {
      x: 114,
      y: 170
    }
  }, {
    a: "WarElephantBrown.PNG",
    b: {
      x: 114,
      y: 114
    }
  }, {
    a: "WarElephantGreen.PNG",
    b: {
      x: 114,
      y: 58
    }
  }, {
    a: "WarElephantGrey.PNG",
    b: {
      x: 114,
      y: 2
    }
  }, {
    a: "Wolf.PNG",
    b: {
      x: 58,
      y: 1402
    }
  }, {
    a: "WormBlue.PNG",
    b: {
      x: 58,
      y: 1346
    }
  }, {
    a: "WormGreen.PNG",
    b: {
      x: 58,
      y: 1290
    }
  }, {
    a: "WormGrey.PNG",
    b: {
      x: 58,
      y: 1234
    }
  }, {
    a: "WormMassBlue.PNG",
    b: {
      x: 58,
      y: 1178
    }
  }, {
    a: "WormMassGreen.PNG",
    b: {
      x: 58,
      y: 1122
    }
  }, {
    a: "WormMassGrey.PNG",
    b: {
      x: 58,
      y: 1066
    }
  }, {
    a: "WormMassPinkGrey.PNG",
    b: {
      x: 58,
      y: 1010
    }
  }, {
    a: "WormMassRedPink.PNG",
    b: {
      x: 58,
      y: 954
    }
  }, {
    a: "WormMassTeal.PNG",
    b: {
      x: 58,
      y: 898
    }
  }, {
    a: "WormMassYellow.PNG",
    b: {
      x: 58,
      y: 842
    }
  }, {
    a: "WormPink.PNG",
    b: {
      x: 58,
      y: 786
    }
  }, {
    a: "WormPurple.PNG",
    b: {
      x: 58,
      y: 730
    }
  }, {
    a: "WormRed.PNG",
    b: {
      x: 58,
      y: 674
    }
  }, {
    a: "WormSerpentBlue.PNG",
    b: {
      x: 58,
      y: 618
    }
  }, {
    a: "WormSerpentGreen.PNG",
    b: {
      x: 58,
      y: 562
    }
  }, {
    a: "WormSerpentGrey.PNG",
    b: {
      x: 58,
      y: 506
    }
  }, {
    a: "WormSerpentPinkGrey.PNG",
    b: {
      x: 58,
      y: 450
    }
  }, {
    a: "WormSerpentPinkRed.PNG",
    b: {
      x: 58,
      y: 394
    }
  }, {
    a: "WormSerpentRainbow.PNG",
    b: {
      x: 58,
      y: 338
    }
  }, {
    a: "WormWhite.PNG",
    b: {
      x: 58,
      y: 282
    }
  }, {
    a: "WormYellow.PNG",
    b: {
      x: 58,
      y: 226
    }
  }, {
    a: "WraithBlue.PNG",
    b: {
      x: 58,
      y: 170
    }
  }, {
    a: "WraithGreen.PNG",
    b: {
      x: 58,
      y: 114
    }
  }, {
    a: "WraithGrey.PNG",
    b: {
      x: 58,
      y: 58
    }
  }, {
    a: "WraithKing.PNG",
    b: {
      x: 58,
      y: 2
    }
  }, {
    a: "WraithLord.PNG",
    b: {
      x: 2,
      y: 1402
    }
  }, {
    a: "WraithOrange.PNG",
    b: {
      x: 2,
      y: 1346
    }
  }, {
    a: "WraithPurple.PNG",
    b: {
      x: 2,
      y: 1290
    }
  }, {
    a: "WraithRed.PNG",
    b: {
      x: 2,
      y: 1234
    }
  }, {
    a: "Xorn4Armed.PNG",
    b: {
      x: 2,
      y: 1178
    }
  }, {
    a: "Xorn4ArmedGreen.PNG",
    b: {
      x: 2,
      y: 1122
    }
  }, {
    a: "XornBlades.PNG",
    b: {
      x: 2,
      y: 1066
    }
  }, {
    a: "YetiBlack.PNG",
    b: {
      x: 2,
      y: 1010
    }
  }, {
    a: "YetiBlue.PNG",
    b: {
      x: 2,
      y: 954
    }
  }, {
    a: "YetiBrown.PNG",
    b: {
      x: 2,
      y: 898
    }
  }, {
    a: "YetiGreen.PNG",
    b: {
      x: 2,
      y: 842
    }
  }, {
    a: "YetiGreenBlue.PNG",
    b: {
      x: 2,
      y: 786
    }
  }, {
    a: "YetiGreyDark.PNG",
    b: {
      x: 2,
      y: 730
    }
  }, {
    a: "YetiGreyLight.PNG",
    b: {
      x: 2,
      y: 674
    }
  }, {
    a: "YetiOrange.PNG",
    b: {
      x: 2,
      y: 618
    }
  }, {
    a: "YetiPink.PNG",
    b: {
      x: 2,
      y: 562
    }
  }, {
    a: "YetiPinkLight.PNG",
    b: {
      x: 2,
      y: 506
    }
  }, {
    a: "YetiPinkLight2.PNG",
    b: {
      x: 2,
      y: 450
    }
  }, {
    a: "YetiPurple.PNG",
    b: {
      x: 2,
      y: 394
    }
  }, {
    a: "YetiRedDark.PNG",
    b: {
      x: 2,
      y: 338
    }
  }, {
    a: "YetiRedOrange.PNG",
    b: {
      x: 2,
      y: 282
    }
  }, {
    a: "YetiWhite.PNG",
    b: {
      x: 2,
      y: 226
    }
  }, {
    a: "YetiYellowBrown.PNG",
    b: {
      x: 2,
      y: 170
    }
  }, {
    a: "Zombie.PNG",
    b: {
      x: 2,
      y: 114
    }
  }, {
    a: "ZombieBlue.PNG",
    b: {
      x: 2,
      y: 58
    }
  }, {
    a: "ZombieRed.PNG",
    b: {
      x: 2,
      y: 2
    }
  }
];
/*

 Copyright (c) 2013 Pieroxy <pieroxy@pieroxy.net>
 For more information see LICENSE.txt or http://www.wtfpl.net/
 For more information, the home page:
 http://pieroxy.net/blog/pages/lz-string/testing.html
 LZ-based compression algorithm, version 1.3.3
*/
var fa = {
  ij: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  Un: String.fromCharCode,
  cD: function(a) {
    if (null == a) return "";
    var b = "",
      c, d, f, g, h, l, n = 0;
    for (a = fa.az(a); n < 2 * a.length;) 0 == n % 2 ? (c = a.charCodeAt(n / 2) >> 8, d = a.charCodeAt(n / 2) & 255, f = n / 2 + 1 < a.length ? a.charCodeAt(n / 2 + 1) >> 8 : NaN) : (c = a.charCodeAt((n - 1) / 2) & 255, (n + 1) / 2 < a.length ? (d = a.charCodeAt((n + 1) / 2) >> 8, f = a.charCodeAt((n + 1) / 2) & 255) : d = f = NaN), n += 3, g = c >> 2, c = (c & 3) << 4 | d >> 4, h = (d & 15) << 2 | f >> 6, l = f & 63, isNaN(d) ? h = l = 64 : isNaN(f) && (l = 64), b = b + fa.ij.charAt(g) +
      fa.ij.charAt(c) + fa.ij.charAt(h) + fa.ij.charAt(l);
    return b
  },
  eD: function(a) {
    if (null == a) return "";
    var b = "",
      c = 0,
      d, f, g, h, l, n, p = 0,
      s = fa.Un;
    for (a = a.replace(/[^A-Za-z0-9\+\/\=]/g, ""); p < a.length;) f = fa.ij.indexOf(a.charAt(p++)), g = fa.ij.indexOf(a.charAt(p++)), l = fa.ij.indexOf(a.charAt(p++)), n = fa.ij.indexOf(a.charAt(p++)), f = f << 2 | g >> 4, g = (g & 15) << 4 | l >> 2, h = (l & 3) << 6 | n, 0 == c % 2 ? (d = f << 8, 64 != l && (b += s(d | g)), 64 != n && (d = h << 8)) : (b += s(d | f), 64 != l && (d = g << 8), 64 != n && (b += s(d | h))), c += 3;
    return fa.jz(b)
  },
  ZE: function(a) {
    if (null == a) return "";
    var b = "",
      c, d, f, g = 0,
      h = fa.Un;
    a = fa.az(a);
    for (c = 0; c < a.length; c++) switch (d = a.charCodeAt(c), g++) {
      case 0:
        b += h((d >> 1) + 32);
        f = (d & 1) << 14;
        break;
      case 1:
        b += h(f + (d >> 2) + 32);
        f = (d & 3) << 13;
        break;
      case 2:
        b += h(f + (d >> 3) + 32);
        f = (d & 7) << 12;
        break;
      case 3:
        b += h(f + (d >> 4) + 32);
        f = (d & 15) << 11;
        break;
      case 4:
        b += h(f + (d >> 5) + 32);
        f = (d & 31) << 10;
        break;
      case 5:
        b += h(f + (d >> 6) + 32);
        f = (d & 63) << 9;
        break;
      case 6:
        b += h(f + (d >> 7) + 32);
        f = (d & 127) << 8;
        break;
      case 7:
        b += h(f + (d >> 8) + 32);
        f = (d & 255) << 7;
        break;
      case 8:
        b += h(f + (d >> 9) + 32);
        f = (d & 511) << 6;
        break;
      case 9:
        b += h(f + (d >> 10) +
          32);
        f = (d & 1023) << 5;
        break;
      case 10:
        b += h(f + (d >> 11) + 32);
        f = (d & 2047) << 4;
        break;
      case 11:
        b += h(f + (d >> 12) + 32);
        f = (d & 4095) << 3;
        break;
      case 12:
        b += h(f + (d >> 13) + 32);
        f = (d & 8191) << 2;
        break;
      case 13:
        b += h(f + (d >> 14) + 32);
        f = (d & 16383) << 1;
        break;
      case 14:
        b += h(f + (d >> 15) + 32, (d & 32767) + 32), g = 0
    }
    return b + h(f + 32)
  },
  $E: function(a) {
    if (null == a) return "";
    for (var b = "", c, d, f = 0, g = 0, h = fa.Un; g < a.length;) {
      d = a.charCodeAt(g) - 32;
      switch (f++) {
        case 0:
          c = d << 1;
          break;
        case 1:
          b += h(c | d >> 14);
          c = (d & 16383) << 2;
          break;
        case 2:
          b += h(c | d >> 13);
          c = (d & 8191) << 3;
          break;
        case 3:
          b +=
            h(c | d >> 12);
          c = (d & 4095) << 4;
          break;
        case 4:
          b += h(c | d >> 11);
          c = (d & 2047) << 5;
          break;
        case 5:
          b += h(c | d >> 10);
          c = (d & 1023) << 6;
          break;
        case 6:
          b += h(c | d >> 9);
          c = (d & 511) << 7;
          break;
        case 7:
          b += h(c | d >> 8);
          c = (d & 255) << 8;
          break;
        case 8:
          b += h(c | d >> 7);
          c = (d & 127) << 9;
          break;
        case 9:
          b += h(c | d >> 6);
          c = (d & 63) << 10;
          break;
        case 10:
          b += h(c | d >> 5);
          c = (d & 31) << 11;
          break;
        case 11:
          b += h(c | d >> 4);
          c = (d & 15) << 12;
          break;
        case 12:
          b += h(c | d >> 3);
          c = (d & 7) << 13;
          break;
        case 13:
          b += h(c | d >> 2);
          c = (d & 3) << 14;
          break;
        case 14:
          b += h(c | d >> 1);
          c = (d & 1) << 15;
          break;
        case 15:
          b += h(c | d), f = 0
      }
      g++
    }
    return fa.jz(b)
  },
  az: function(a) {
    if (null == a) return "";
    var b, c, d = {},
      f = {},
      g = "",
      h = "",
      l = "",
      n = 2,
      p = 3,
      s = 2,
      u = "",
      y = 0,
      A = 0,
      C, v = fa.Un;
    for (C = 0; C < a.length; C += 1)
      if (g = a.charAt(C), Object.prototype.hasOwnProperty.call(d, g) || (d[g] = p++, f[g] = !0), h = l + g, Object.prototype.hasOwnProperty.call(d, h)) l = h;
      else {
        if (Object.prototype.hasOwnProperty.call(f, l)) {
          if (256 > l.charCodeAt(0)) {
            for (b = 0; b < s; b++) y <<= 1, 15 == A ? (A = 0, u += v(y), y = 0) : A++;
            c = l.charCodeAt(0);
            for (b = 0; 8 > b; b++) y = y << 1 | c & 1, 15 == A ? (A = 0, u += v(y), y = 0) : A++, c >>= 1
          } else {
            c = 1;
            for (b = 0; b < s; b++) y = y << 1 | c, 15 == A ?
              (A = 0, u += v(y), y = 0) : A++, c = 0;
            c = l.charCodeAt(0);
            for (b = 0; 16 > b; b++) y = y << 1 | c & 1, 15 == A ? (A = 0, u += v(y), y = 0) : A++, c >>= 1
          }
          n--;
          0 == n && (n = Math.pow(2, s), s++);
          delete f[l]
        } else
          for (c = d[l], b = 0; b < s; b++) y = y << 1 | c & 1, 15 == A ? (A = 0, u += v(y), y = 0) : A++, c >>= 1;
        n--;
        0 == n && (n = Math.pow(2, s), s++);
        d[h] = p++;
        l = String(g)
      } if ("" !== l) {
      if (Object.prototype.hasOwnProperty.call(f, l)) {
        if (256 > l.charCodeAt(0)) {
          for (b = 0; b < s; b++) y <<= 1, 15 == A ? (A = 0, u += v(y), y = 0) : A++;
          c = l.charCodeAt(0);
          for (b = 0; 8 > b; b++) y = y << 1 | c & 1, 15 == A ? (A = 0, u += v(y), y = 0) : A++, c >>= 1
        } else {
          c = 1;
          for (b =
            0; b < s; b++) y = y << 1 | c, 15 == A ? (A = 0, u += v(y), y = 0) : A++, c = 0;
          c = l.charCodeAt(0);
          for (b = 0; 16 > b; b++) y = y << 1 | c & 1, 15 == A ? (A = 0, u += v(y), y = 0) : A++, c >>= 1
        }
        n--;
        0 == n && (n = Math.pow(2, s), s++);
        delete f[l]
      } else
        for (c = d[l], b = 0; b < s; b++) y = y << 1 | c & 1, 15 == A ? (A = 0, u += v(y), y = 0) : A++, c >>= 1;
      n--;
      0 == n && s++
    }
    c = 2;
    for (b = 0; b < s; b++) y = y << 1 | c & 1, 15 == A ? (A = 0, u += v(y), y = 0) : A++, c >>= 1;
    for (;;)
      if (y <<= 1, 15 == A) {
        u += v(y);
        break
      } else A++;
    return u
  },
  jz: function(a) {
    if (null == a) return "";
    if ("" == a) return null;
    for (var b = [], c = 4, d = 4, f = 3, g = "", h = "", l, n, p, s, u, y = fa.Un, A = a.charCodeAt(0),
        C = 32768, v = 1, h = 0; 3 > h; h += 1) b[h] = h;
    g = 0;
    p = Math.pow(2, 2);
    for (s = 1; s != p;) n = A & C, C >>= 1, 0 == C && (C = 32768, A = a.charCodeAt(v++)), g |= (0 < n ? 1 : 0) * s, s <<= 1;
    switch (g) {
      case 0:
        g = 0;
        p = Math.pow(2, 8);
        for (s = 1; s != p;) n = A & C, C >>= 1, 0 == C && (C = 32768, A = a.charCodeAt(v++)), g |= (0 < n ? 1 : 0) * s, s <<= 1;
        u = y(g);
        break;
      case 1:
        g = 0;
        p = Math.pow(2, 16);
        for (s = 1; s != p;) n = A & C, C >>= 1, 0 == C && (C = 32768, A = a.charCodeAt(v++)), g |= (0 < n ? 1 : 0) * s, s <<= 1;
        u = y(g);
        break;
      case 2:
        return ""
    }
    for (l = h = b[3] = u;;) {
      if (v > a.length) return "";
      g = 0;
      p = Math.pow(2, f);
      for (s = 1; s != p;) n = A & C, C >>= 1, 0 == C &&
        (C = 32768, A = a.charCodeAt(v++)), g |= (0 < n ? 1 : 0) * s, s <<= 1;
      switch (u = g) {
        case 0:
          g = 0;
          p = Math.pow(2, 8);
          for (s = 1; s != p;) n = A & C, C >>= 1, 0 == C && (C = 32768, A = a.charCodeAt(v++)), g |= (0 < n ? 1 : 0) * s, s <<= 1;
          b[d++] = y(g);
          u = d - 1;
          c--;
          break;
        case 1:
          g = 0;
          p = Math.pow(2, 16);
          for (s = 1; s != p;) n = A & C, C >>= 1, 0 == C && (C = 32768, A = a.charCodeAt(v++)), g |= (0 < n ? 1 : 0) * s, s <<= 1;
          b[d++] = y(g);
          u = d - 1;
          c--;
          break;
        case 2:
          return h
      }
      0 == c && (c = Math.pow(2, f), f++);
      if (b[u]) g = b[u];
      else if (u === d) g = l + l.charAt(0);
      else return null;
      h += g;
      b[d++] = l + g.charAt(0);
      c--;
      l = g;
      0 == c && (c = Math.pow(2, f),
        f++)
    }
  }
};
"undefined" !== typeof module && null != module && (module.aF = fa);

function ga(a) {
  this.Xc = 624;
  this.Gq = 397;
  this.uy = 2567483615;
  this.Kt = 2147483648;
  this.Jt = 2147483647;
  this.jd = Array(this.Xc);
  this.hg = this.Xc + 1;
  this.sE = 1 / 4294967296;
  this.jd[0] = a & 4294967295;
  for (this.hg = 1; this.hg < this.Xc; this.hg++) this.jd[this.hg] = 1812433253 * (this.jd[this.hg - 1] ^ this.jd[this.hg - 1] >> 30) + this.hg, this.jd[this.hg] &= 4294967295;
  this.tp = [0, this.uy]
}
ga.prototype.random = function() {
  var a;
  this.tp[0] = 0;
  this.tp[1] = this.uy;
  if (this.hg >= this.Xc) {
    var b;
    for (b = 0; b < this.Xc - this.Gq; b++) a = this.jd[b] & this.Kt | this.jd[b + 1] & this.Jt, this.jd[b] = this.jd[b + this.Gq] ^ a >>> 1 ^ this.tp[a & 1];
    for (; b < this.Xc - 1; b++) a = this.jd[b] & this.Kt | this.jd[b + 1] & this.Jt, this.jd[b] = this.jd[b + (this.Gq - this.Xc)] ^ a >>> 1 ^ this.tp[a & 1];
    a = this.jd[this.Xc - 1] & this.Kt | this.jd[0] & this.Jt;
    this.jd[this.Xc - 1] = this.jd[this.Gq - 1] ^ a >>> 1 ^ this.tp[a & 1];
    this.hg = 0
  }
  a = this.jd[this.hg++];
  a ^= a >>> 11;
  a ^= a << 7 & 2636928640;
  a ^= a << 15 & 4022730752;
  return ((a ^ a >>> 18) >>> 0) * this.sE
};

function ma(a, b) {
  return a.random() * b | 0
};

function oa() {
  this.Im = [
    [1, 1, 0],
    [-1, 1, 0],
    [1, -1, 0],
    [-1, -1, 0],
    [1, 0, 1],
    [-1, 0, 1],
    [1, 0, -1],
    [-1, 0, -1],
    [0, 1, 1],
    [0, -1, 1],
    [0, 1, -1],
    [0, -1, -1]
  ];
  this.Wj = [];
  this.HB = Math.sqrt(3)
};

function k(a) {
  return 0 >= a ? 0 : m(Math.random() * a)
};

function ra(a, b) {
  return -1 !== a.indexOf(b, a.length - b.length)
};

function ua(a) {
  return 1E4 > a ? "" + m(a) : 1E5 > a ? (a / 1E3).toFixed(1) + "K" : 1E6 > a ? m(a / 1E3) + "K" : 1E7 > a ? (a / 1E6).toFixed(2) + "M" : 1E8 > a ? (a / 1E6).toFixed(1) + "M" : 1E9 > a ? m(a / 1E6) + "M" : 1E10 > a ? (a / 1E9).toFixed(2) + "B" : 1E11 > a ? (a / 1E9).toFixed(1) + "B" : 1E12 > a ? m(a / 1E9) + "B" : 1E13 > a ? (a / 1E12).toFixed(2) + "T" : 1E14 > a ? (a / 1E12).toFixed(1) + "T" : 1E15 > a ? m(a / 1E12) + "T" : 1E16 > a ? (a / 1E15).toFixed(2) + "P" : 1E17 > a ? (a / 1E15).toFixed(1) + "P" : 1E18 > a ? m(a / 1E15) + "P" : 1E19 > a ? (a / 1E18).toFixed(2) + "P" : 1E20 > a ? (a / 1E18).toFixed(1) + "P" : 1E21 > a ? m(a / 1E18) + "P" : 1E22 > a ? (a / 1E21).toFixed(2) +
    "Z" : 9.999999999999999E22 > a ? (a / 1E21).toFixed(1) + "Z" : 1E24 > a ? m(a / 1E21) + "Z" : 1E25 > a ? (a / 1E24).toFixed(2) + "Y" : 1E26 > a ? (a / 1E24).toFixed(1) + "Y" : 1E27 > a ? m(a / 1E24) + "Y" : a.toFixed(0)
}

function r(a) {
  return 0 <= a ? ua(a) : "-" + ua(-a)
}

function xa(a) {
  var b = parseInt(Math.abs(+a || 0)) + "",
    c = 3 < b.length ? b.length % 3 : 0;
  return (0 > a ? "-" : "") + (c ? b.substr(0, c) + "," : "") + b.substr(c).replace(/(\d{3})(?=\d)/g, "$1,")
};

function m(a) {
  return 2147483648 > a ? a | 0 : Math.floor(a)
};
var ya = 1E3 / 60;

function Ba() {
  return Date.now ? Date.now() : (new Date).valueOf()
};

function Ia(a, b, c) {
  a = Math.max(0, a - 1);
  return m(c * (b.Xd + b.Ed * Math.pow(a, b.Fd) * Math.pow(b.Vd, a)))
}

function Oa(a, b, c) {
  a = Ia(a, b, c);
  b = 1.1 - 0.2 * Math.random();
  return m(a * b)
};

function Pa(a, b, c) {
  a = (a << 5) - a + b;
  a &= a;
  a = (a << 5) - a + c;
  return a & a
};

function Ta(a, b) {
  "undefined" != typeof ganal && ganal("send", "event", a, b)
};

function Za() {
  this.U = this.T = 0
}

function $a(a, b) {
  a.T = b.T;
  a.U = b.U
}

function t(a, b, c) {
  a.T = b;
  a.U = c
}

function ab(a, b) {
  a.T = b.T;
  a.U = b.U
}

function ib(a, b) {
  a.T += b.T;
  a.U += b.U
}

function tb(a, b) {
  a.T -= b.T;
  a.U -= b.U
}
Za.prototype.ac = function(a) {
  var b = this.T - a.T;
  a = this.U - a.U;
  return Math.sqrt(b * b + a * a)
};

function Jb(a, b, c) {
  b = a.T - b;
  a = a.U - c;
  return Math.sqrt(b * b + a * a)
}
Za.prototype.Ud = function(a) {
  var b = this.T - a.T;
  a = this.U - a.U;
  return b * b + a * a
};

function Kb(a, b, c) {
  b = a.T - b;
  a = a.U - c;
  return b * b + a * a
}

function Lb(a) {
  return Math.sqrt(a.T * a.T + a.U * a.U)
}

function Mb(a) {
  var b = a.T * a.T + a.U * a.U;
  0 < b && (b = 1 / Math.sqrt(b), a.T *= b, a.U *= b)
}

function Nb(a, b) {
  a.T *= b;
  a.U *= b
}
Za.prototype.toString = function() {
  return "(" + this.T + ", " + this.U + ")"
};

function Ob(a, b, c, d) {
  this.Ad = a;
  this.ub = b;
  this.vb = c;
  this.name = d
}
Ob.prototype.getName = function() {
  return this.name
};
Ob.prototype.Hj = function() {
  return this.Ad.Hj()
};

function Pb(a, b, c) {
  this.loaded = !1;
  this.ue = b;
  this.Yh = {};
  var d = this;
  this.Il = new Image;
  this.Il.onload = function() {
    d.$w(c);
    d.loaded = !0
  };
  this.Il.src = a
}
Pb.prototype.$w = function(a) {
  var b, c;
  for (b = 0; b < a.length; b++) c = a[b], this.Yh[c.a] = new Ob(this, c.b.x, c.b.y, c.a)
};
Pb.prototype.v = function(a) {
  return this.Yh[a]
};
Pb.prototype.Hj = function() {
  return this.Il
};
Pb.prototype.cl = function() {
  return this.loaded
};

function Qb(a, b, c, d, f, g, h, l) {
  this.Ad = a;
  this.animationName = b;
  this.zc = l;
  a = [];
  var n, p, s;
  b = 0;
  var u;
  l = this.Ad.ue;
  for (n = d; n <= g; n++)
    for (s = n * l, u = n < g ? h : Math.min(f, h), d = c; d <= u; d++) p = d * l, a.push(new Rb(b++, p, s));
  this.qq = a
}
Qb.prototype.Hj = function() {
  return this.Ad.Hj()
};
Qb.prototype.To = function() {
  return this.qq.length
};

function Rb(a, b, c) {
  this.oc = a;
  this.qt = b;
  this.rt = c
};

function Wb(a, b, c, d) {
  this.loaded = !1;
  this.fileName = a;
  this.ue = b;
  this.Yh = {};
  this.FB = [];
  var f = this;
  this.Il = new Image;
  this.Il.onload = function() {
    f.$w(c, d);
    f.loaded = !0
  };
  this.Il.src = a
}
Wb.prototype.$w = function(a, b) {
  var c, d;
  for (c = 0; c < a.length; c++) d = a[c], this.FB.push(d.animationName), this.Yh[d.animationName] = new Qb(this, d.animationName, d.O, d.P, d.M, d.N, b, d.zc)
};
Wb.prototype.Zg = function(a) {
  return this.Yh[a]
};
Wb.prototype.Hj = function() {
  return this.Il
};
Wb.prototype.cl = function() {
  return this.loaded
};

function Xb(a) {
  this.Yh = null;
  this.Zt = a
}
Xb.prototype.Zg = function(a) {
  var b = this.Yh[a];
  return b ? b.Zg(a) : null
};
Xb.prototype.cl = function() {
  var a;
  for (a = 0; a < this.Zt.length; a++)
    if (!this.Zt[a].cl()) return !1;
  if (!this.Yh) {
    a = this.Zt;
    var b, c, d, f, g = {};
    for (b = 0; b < a.length; b++)
      for (d = a[b], f = d.FB, c = 0; c < f.length; c++) g[f[c]] && console.log("effect name already defined: " + f[c]), g[f[c]] = d;
    this.Yh = g
  }
  return !0
};
var Yb = 3;

function Zb(a, b, c, d, f) {
  this.ca = a;
  this.Io = f;
  this.ew = this.ud = null;
  this.li = 0;
  d ? (f = new Za, $a(f, b)) : f === Yb ? (f = new Za, $a(f, c)) : f = c;
  this.iD = b;
  this.wm = f;
  this.xi = c;
  this.Pk = !1;
  this.Xb = d;
  this.bg = this.Cj = this.Gs = !1;
  this.nd = a ? w.Dj.Zg(a) : null;
  a && !this.nd && console.log("Failed to find animated sprite: " + a);
  this.De = this.nd ? this.nd.To() : 0;
  this.bx = -1;
  this.oc = 0;
  this.nd && this.nd.zc && (this.oc = $b(this));
  this.yi = 0;
  this.uA = !1
}
var ic = new Za;

function $b(a) {
  ab(ic, a.xi);
  tb(ic, a.wm);
  Mb(ic);
  a = ic.T;
  var b = ic.U,
    c = 180 * -Math.atan2(b, a) / Math.PI;
  0 > c && (c += 360);
  if (337.5 <= c || 22.5 > c) return 3;
  if (22.5 <= c && 67.5 > c) return 2;
  if (67.5 <= c && 112.5 > c) return 1;
  if (112.5 <= c && 157.5 > c) return 0;
  if (157.5 <= c && 202.5 > c) return 7;
  if (202.5 <= c && 247.5 > c) return 6;
  if (247.5 <= c && 292.5 > c) return 5;
  if (292.5 <= c && 337.5 > c) return 4;
  console.log("direction fail x=" + a + " y=" + b + " angle=" + c)
}
Zb.prototype.Zg = function() {
  return this.nd
};
Zb.prototype.qB = function(a) {
  this.li = a
};
Zb.prototype.bl = function() {
  return this.bg || this.Pk
};

function jc(a, b) {
  a.yi += b * ya;
  var c = a.Xb ? kc : lc;
  a.bx = a.oc;
  if (a.yi >= c) {
    var d = Math.min(1, m(a.yi / c));
    a.yi = Math.max(0, m(a.yi % c));
    a.oc += d;
    a.oc >= a.De && (a.uA ? a.ud.Ja.Kf ? a.oc = 0 : a.bg = !0 : a.Xb ? a.oc = 0 : a.bg = !0)
  }
}
Zb.prototype.To = function() {
  return this.De
};

function oc() {
  var a = w.df;
  if (0 < a.Wg.length) {
    var b;
    for (b = 0; b < a.Wg.length; b++) {
      var c = a.Wg[b];
      c.bg = !0;
      c.Pk = !0
    }
    a.Wg.length = 0
  }
}

function pc(a, b) {
  b && a.Wg.push(b)
};
var xc = 19,
  yc = 18,
  zc = 100,
  Ac = 100;

function Bc(a) {
  this.wa = a;
  this.yy = "Abhorrent Abandoned Abominable Accursed Baleful Bloody Bitter Cursed Corrupted Contradictory Creepy Damned Decrepit Distasteful Dark Dingy Derelict Demented Dead Deep Dusty Disturbing Desolate Damp Dumpy Disgusting Disturbing Feared Foul Forbidden Friendless Forgotten Grimy Grim Gloomy Hellish Hateful Horrible Humid Infested Infected Infernal Inimical Invidious Lightless Loathsome Lost Mildewed Mystical Merciless Misty Nether Nice Nasty Nauseating Naughty Normal Noisome Nasty Odious Obnoxious Objectionable Poisonous Pale Polluted Putrid Ruined Rotten Rancid Repellent Repugnant Reeking Revolting Smelly Stinking Shattered Sickening Shrouded Sorrowful Secret Shadowed Tormented Tortured Unholy Unknown Unfriendly Unnamed Vile Whispered Wicked".split(" ");
  this.FA = "Burrow Basement Cavern Cave Cavity Den Hole Hollow Grotto Labyrinth Maze Morass Mine Passage Pit Subway Substratum Subterrane Sink Tunnels".split(" ");
  this.cz = "Catacomb Cellar Chamber Crawlway Charnel Crypt Grave Grotto Hell Hellscape Mausoleum Mortuary Necropolis Ossuary Polyandrium Sepulcher Tomb Vault".split(" ");
  this.xr = "Asylum;Abattoir;Dungeon;Darkness;Dimension;Domain;Furnace;Inferno;Oubliette;Keep;Prison;Slaughterhouse;Torture Chamber;Vault".split(";");
  this.zC = "Belfry Citadel Lookout Minaret Monolith Obelisk Pillar Refuge Spire Steeple Turret Tower".split(" ");
  this.TB = "Abbey Basilica Cathedral Chapel Convent Chancel Ministry Mission Oratory Pantheon Priory Reliquary Sacellum Sanctum Sanctuary Sanctorium Shrine Temple".split(" ");
  this.cB = "Cairn Cenotaph Edifice Monolith Monument Memorial Momento Mound Obelisk Pyramid Palace Precipice Remnants Shrine Tribute Tomb Vestiges".split(" ");
  this.My = "Alcazar Bastion Citadel Castle Chateau Estate Fastness Fortress Fortification Fort Fortification Hall House Hold Keep Mansion Manor Palace Seat Stronghold Villa".split(" ");
  this.Xz = "Arctic;Brisk;Bitter;Cold;Chill;Chilly;Chilled;Crystalyn;Frozen;Frosted;Frigid;Glacial;Iced;Icy;Ice-Covered;Ice-Cold;Icicle Infested;Nippy;Numbing;Shivery;Snowy".split(";")
}

function Cc(a, b) {
  var c;
  a: switch (b) {
    case 3:
      c = a.Xz[ma(a.wa, a.Xz.length)];
      break a;
    default:
      c = a.yy[ma(a.wa, a.yy.length)]
  }
  return "The " + c + " " + Dc(a, b)
}

function Dc(a, b) {
  switch (b) {
    case 0:
    case 2:
    case 3:
    case 1:
      return a.FA[ma(a.wa, a.FA.length)];
    case 4:
    case 5:
      return a.zC[ma(a.wa, a.zC.length)];
    case 6:
      return a.xr[ma(a.wa, a.xr.length)];
    case 7:
    case 8:
      return a.cB[ma(a.wa, a.cB.length)];
    case 9:
      return a.cz[ma(a.wa, a.cz.length)];
    case 10:
      return a.TB[ma(a.wa, a.TB.length)];
    case 11:
      return a.My[ma(a.wa, a.My.length)];
    default:
      return a.xr[ma(a.wa, a.xr.length)]
  }
};

function Hc(a, b, c) {
  this.io = a;
  this.Hd = b;
  this.Id = c;
  this.cu = null
};

function Ic(a, b, c, d, f, g) {
  this.lo = a;
  this.mi = b;
  this.ZC = c;
  this.$C = d;
  this.dm = f;
  this.em = g;
  this.Bj = this.cb = !1;
  this.$b = !0;
  this.ye = !1;
  this.Jf = this.yk = 0;
  this.ck = [];
  this.Ab = []
}
Ic.prototype.tx = function(a) {
  this.cb = a
};

function Jc(a) {
  return !a.$b && !a.cb && a.Bj && !a.ye
}
Ic.prototype.Is = function() {
  Kc(this)
};

function Kc(a) {
  if (a.Bj || a.cb) a.yk = a.Ab.length;
  else {
    var b;
    for (b = a.yk = 0; b < a.Ab.length; b++) a.Ab[b].cb && a.yk++;
    a.yk === a.Ab.length && (a.Bj = !0, b = w.kb, b.Uj++, a.Jf = b.Uj, Lc());
    Jc(a) && Pc(a)
  }
}
Ic.prototype.er = function() {
  return Pa(this.ZC, this.$C, 1)
};

function Qc() {
  this.BA = w.Pe.Rh;
  this.EA = w.Pe.Sh;
  var a = w.Pe;
  this.$D = a.Rh + a.Eh;
  a = w.Pe;
  this.bE = a.Sh + a.Eh
}

function Rc(a, b, c, d) {
  return b - 1 >= a.BA && (a = b - 1 + "_" + c, !d[a]) ? w.Pe.sk[a] : null
}

function Sc(a, b, c, d) {
  return b + 1 < a.$D && (a = b + 1 + "_" + c, !d[a]) ? w.Pe.sk[a] : null
}

function Wc(a, b, c, d) {
  return c - 1 >= a.EA && (a = b + "_" + (c - 1), !d[a]) ? w.Pe.sk[a] : null
}

function Xc(a, b, c, d) {
  return c + 1 < a.bE && (a = b + "_" + (c + 1), !d[a]) ? w.Pe.sk[a] : null
}

function Yc(a, b, c, d) {
  var f = b.Hd;
  b = b.Id;
  if (0.5 > d.random())
    if (0.5 > d.random()) {
      if ((d = Rc(a, f, b, c)) || (d = Sc(a, f, b, c)) || (d = Xc(a, f, b, c))) return d;
      d = Wc(a, f, b, c)
    } else {
      if ((d = Sc(a, f, b, c)) || (d = Rc(a, f, b, c)) || (d = Wc(a, f, b, c))) return d;
      d = Xc(a, f, b, c)
    }
  else if (0.5 > d.random()) {
    if ((d = Wc(a, f, b, c)) || (d = Xc(a, f, b, c)) || (d = Sc(a, f, b, c))) return d;
    d = Rc(a, f, b, c)
  } else {
    if ((d = Xc(a, f, b, c)) || (d = Wc(a, f, b, c)) || (d = Rc(a, f, b, c))) return d;
    d = Sc(a, f, b, c)
  }
  if (d) return d
};

function Zc() {
  var a = w.kb;
  a.Jg.length = 0;
  a.Dh.length = 0;
  a.cm = 0;
  a.Uj = 1;
  var b;
  for (b = 0; b < a.pd.length; b++) {
    var c = a.pd[b];
    c.cb = !1;
    c.$b = !0;
    c.ye = !1;
    c.yk = 0;
    c.Jf = 0;
    c.Bj = 0 === c.Ab.length
  }
}

function cd() {
  var a = w.S.q[1][1],
    a = a.Hd + "_" + a.Id,
    b = dd(a);
  b ? (b.$b = !1, ed(w.S)) : console.log("failed to find world block owner castle: " + a)
}

function fd(a) {
  return (a = w.kb.bm[a]) ? a : null
}

function dd(a) {
  return (a = w.kb.ju[a]) ? a : null
}

function Pc(a) {
  var b = w.kb;
  b.cm++;
  var c = b.Jg.indexOf(a);
  Jc(a) ? 0 > c && (b.Jg.push(a), md(b, b.Jg)) : -1 < c && b.Jg.splice(c, 1)
}

function nd(a) {
  var b = w.kb;
  b.cm++;
  var c = b.Dh.indexOf(a);
  a.ye ? 0 > c && (b.Dh.push(a), md(b, b.Dh)) : -1 < c && b.Dh.splice(c, 1)
}

function Lc() {
  w.kb.cm++
}

function md(a, b) {
  !b || 2 > b.length || b.sort(a.GE)
};

function od(a) {
  switch (a) {
    case 0:
      return pd;
    case 1:
      return pd;
    case 2:
      return qd;
    case 3:
      return rd;
    case 4:
      return sd;
    case 5:
      return td;
    case 6:
      return ud;
    case 7:
      return sd;
    case 8:
      return Bd;
    case 9:
      return Cd;
    case 10:
      return Dd;
    case 11:
      return Ed;
    default:
      return Dd
  }
}

function Fd(a) {
  switch (a) {
    case 0:
      return "L2_Terrain068.PNG";
    case 1:
      return "L2_Terrain070.PNG";
    case 2:
      return "L2_Terrain069.PNG";
    case 3:
      return "L2_Terrain071.PNG";
    case 4:
      return "L2_Terrain081.PNG";
    case 5:
      return "L2_Terrain082.PNG";
    case 6:
      return "L2_DungeonE.PNG";
    case 7:
      return "L2_Terrain090.PNG";
    case 8:
      return "L2_Terrain091.PNG";
    case 9:
      return "L2_Terrain095.PNG";
    case 10:
      return "L2_Terrain099.PNG";
    default:
      return "L2_Terrain068.PNG"
  }
};

function Gd(a, b, c, d, f, g, h, l, n) {
  this.ag = a;
  this.Eo = b;
  this.Go = c;
  this.Nk = 0;
  this.Aj = !(4 === c || 5 === c || 7 === c || 8 === c);
  this.Fo = Fd(c);
  this.cb = this.oe = this.Lc = this.qf = !1;
  this.zi = this.Mg = 0;
  this.Qn = d;
  this.Tn = f;
  this.WE = g;
  this.XE = h;
  this.rs = l;
  this.ri = 0;
  this.zj = n
}
e = Gd.prototype;
e.tx = function(a) {
  this.cb = a
};
e.dc = function() {
  return w.S.dc(this.Qn)
};
e.ec = function() {
  return w.S.ec(this.Tn)
};
e.bc = function() {
  return this.Qn
};
e.cc = function() {
  return this.Tn
};
e.vw = function() {
  return this.WE
};
e.ww = function() {
  return this.XE
};

function Hd(a) {
  return a.qf && a.cb && !a.oe && a.zj.cb
}
e.er = function() {
  return Pa(this.Qn, this.Tn, this.ri)
};
e.iw = function() {
  this.ri++;
  Id();
  w.i.aa.$r();
  if (this.ri < this.rs) Jd(this.er(), this.Go, this.Aj, !0), Kd(Ld), Ta("Dungeon", "Enter Level " + this.ri);
  else {
    w.Mc = null;
    this.cb = this.Lc = w.wb = !0;
    this.Mg = w.i.$a;
    w.Aa.Is(this);
    this.zj.Is();
    w.i.aa.Vr();
    Kd(Pd);
    Ta("Dungeon", "Dungeon Cleared");
    var a, b, c = Qd(),
      d;
    for (a = 0; a < c.length; a++) d = c[a], b = d.p, Rd(b), b.cd = null, b.w = null, d.Y = Sd;
    $d()
  }
};

function ae(a) {
  switch (ma(a, 11)) {
    case 0:
      return 0;
    case 1:
      return 1;
    case 2:
      return 2;
    case 3:
      return 3;
    case 4:
      return 4;
    case 5:
      return 5;
    case 6:
      return 6;
    case 7:
      return 7;
    case 8:
      return 8;
    case 9:
      return 9;
    case 10:
      return 10;
    default:
      return 0
  }
};

function be() {
  this.Ab = [];
  this.Do = {};
  this.Mk = 0;
  this.Ge = [];
  this.ze = [];
  this.dg = [];
  this.uj = [];
  this.bk = [];
  this.lt = !0;
  this.Sd = 0;
  this.EE = function(a, b) {
    return m(a.Nk * ce.t) < m(b.Nk * ce.t) ? -1 : 1
  }
}

function de() {
  var a = w.Aa;
  a.uj.length = 0;
  a.Ge.length = 0;
  a.ze.length = 0;
  a.dg.length = 0;
  a.bk.length = 0;
  a.Mk = 0;
  a.Sd = 0;
  var b;
  for (b = 0; b < a.Ab.length; b++) {
    var c = a.Ab[b];
    c.qf = !1;
    c.Lc = !1;
    c.cb = !1;
    c.oe = !1;
    c.zi = 0;
    c.Mg = 0
  }
}
be.prototype.dt = function(a) {
  this.Sd = a
};

function ee(a) {
  var b = w.Aa;
  0 > b.uj.indexOf(a) && (b.uj.push(a), b.Mk++);
  a.qf && !a.Lc && !a.oe && 0 > b.Ge.indexOf(a) && (b.Ge.push(a), fe(b, b.Ge));
  ge(b, a)
}
be.prototype.Is = function(a) {
  0 > this.ze.indexOf(a) && (this.ze.push(a), fe(this, this.ze));
  var b = this.Ge.indexOf(a); - 1 < b && this.Ge.splice(b, 1);
  ge(this, a)
};

function ge(a, b) {
  var c = a.bk.indexOf(b);
  Hd(b) ? 0 > c && (a.bk.push(b), fe(a, a.bk)) : -1 < c && a.bk.splice(c, 1)
}

function he(a) {
  var b = w.Aa;
  0 > b.dg.indexOf(a) && (b.dg.push(a), fe(b, b.dg));
  var c = b.Ge.indexOf(a); - 1 < c && b.Ge.splice(c, 1);
  c = b.ze.indexOf(a); - 1 < c && b.ze.splice(c, 1);
  ge(b, a)
}

function fe(a, b) {
  !a.lt || !b || 2 > b.length || b.sort(a.EE)
};

function ie(a, b, c) {
  this.ag = a;
  this.kw = b;
  this.lw = c
};

function je() {
  this.nw = [];
  this.jw = {};
  this.Gz = "L2_Town01.PNG"
}

function ke() {
  var a = w.Bm;
  a.nw.length = 0;
  a.jw = {}
}

function le(a, b) {
  a.nw.push(b);
  a.jw[b.ag] = b;
  var c = w.S.hb(b.kw, b.lw);
  c && c.ea(w.I.v(a.Gz))
}
je.prototype.Yw = function(a) {
  var b = 1 + k(2);
  return 0.5 > Math.random() ? a - b : a + b
};

function ze(a, b, c) {
  this.ag = a;
  this.iq = b;
  this.jq = c
};

function Ae() {
  this.ht = [];
  this.zx = {};
  this.ni = 0;
  this.tB = "L2_Terrain089.PNG L2_Terrain077.PNG L2_Terrain077.PNG L2_Terrain076.PNG L2_Terrain078.PNG L2_Terrain079.PNG L2_Terrain083.PNG L2_Terrain084.PNG L2_Terrain085.PNG".split(" ")
}

function Be() {
  var a = w.ug;
  a.ht.length = 0;
  a.ni = 0;
  a.zx = {}
}

function Ce(a) {
  return a.tB[k(a.tB.length)]
}
Ae.prototype.Ut = function(a) {
  this.ht.push(a);
  this.zx[a.ag] = a;
  if (a = w.S.hb(a.iq, a.jq)) {
    var b = w.I.v(Ce(this));
    a.ea(b)
  }
};
Ae.prototype.Yw = function(a) {
  return 0.5 > Math.random() ? a - 4 : a + 4
};
var De = "O";
var Ee = {
    GOGO: "L1_ShoreEout.PNG",
    GOGG: "L1_ShoreNEin.PNG",
    OOGO: "L1_ShoreNEout.PNG",
    OOGG: "L1_ShoreNout.PNG",
    GGGO: "L1_ShoreSEin.PNG",
    GOOO: "L1_ShoreSEout.PNG",
    GGOO: "L1_ShoreSout.PNG",
    OGGG: "L1_ShoreWNin.PNG",
    OOOG: "L1_ShoreWNout.PNG",
    GOOG: "L1_ShoreWN-SE.PNG",
    OGOG: "L1_ShoreWout.PNG",
    GGOG: "L1_ShoreWSin.PNG",
    OGGO: "L1_ShoreWS-NE.PNG",
    OGOO: "L1_ShoreWSout.PNG",
    DDGG: "L1_GrassDesertEdgeE.PNG",
    DGDG: "L1_GrassDesertEdgeN.PNG",
    DDDG: "L1_GrassDesertEdgeNE.PNG",
    GGGD: "L1_GrassDesertEdgeNEin.PNG",
    DGDD: "L1_GrassDesertEdgeNW.PNG",
    GDGG: "L1_GrassDesertEdgeNWin.PNG",
    GDGD: "L1_GrassDesertEdgeS.PNG",
    DDGD: "L1_GrassDesertEdgeSE.PNG",
    GGDG: "L1_GrassDesertEdgeSEin.PNG",
    GDDD: "L1_GrassDesertEdgeSW.PNG",
    DGGG: "L1_GrassDesertEdgeSWin.PNG",
    GGDD: "L1_GrassDesertEdgeW.PNG",
    GSGG: "L1_SnowEdge01.PNG",
    GSGS: "L1_SnowEdge02.PNG",
    GGGS: "L1_SnowEdge03.PNG",
    SSGG: "L1_SnowEdge04.PNG",
    GGSS: "L1_SnowEdge05.PNG",
    SGGG: "L1_SnowEdge06.PNG",
    SGSG: "L1_SnowEdge07.PNG",
    GGSG: "L1_SnowEdge08.PNG",
    SGSS: "L1_SnowEdge09.PNG",
    SSSG: "L1_SnowEdge10.PNG",
    GSSS: "L1_SnowEdge11.PNG",
    SSGS: "L1_SnowEdge12.PNG",
    PPDD: "L1_DesertShoreE.PNG",
    PDPD: "L1_DesertShoreN.PNG",
    PPPD: "L1_DesertShoreNE.PNG",
    DDDP: "L1_DesertShoreNEin.PNG",
    PDPP: "L1_DesertShoreNW.PNG",
    DPDD: "L1_DesertShoreNWin.PNG",
    DPDP: "L1_DesertShoreS.PNG",
    PPDP: "L1_DesertShoreSE.PNG",
    DDPD: "L1_DesertShoreSEin.PNG",
    DPPP: "L1_DesertShoreSW.PNG",
    PDDD: "L1_DesertShoreSWin.PNG",
    DDPP: "L1_DesertShoreW.PNG",
    ISII: "L1_IceShore01.PNG",
    ISIS: "L1_IceShore02.PNG",
    IIIS: "L1_IceShore03.PNG",
    SSII: "L1_IceShore04.PNG",
    IISS: "L1_IceShore05.PNG",
    SIII: "L1_IceShore06.PNG",
    SISI: "L1_IceShore07.PNG",
    IISI: "L1_IceShore08.PNG",
    SISS: "L1_IceShore13.PNG",
    SSSI: "L1_IceShore14.PNG",
    ISSS: "L1_IceShore15.PNG",
    SSIS: "L1_IceShore16.PNG",
    GGGG: "L1_Terrain001.PNG",
    OOOO: "L1_Terrain005.PNG",
    DDDD: "L1_Terrain011.PNG",
    PPPP: "L1_Terrain004.PNG",
    SSSS: "L1_Terrain035.PNG",
    IIII: "L1_Terrain005.PNG",
    JD: "L1_Terrain048.PNG"
  },
  Fe = "L2_ForestCanopy01.PNG",
  Ge = "L2_ForestCanopy03.PNG",
  He = "L2_ForestMaple03.PNG",
  Ie = "L2_ForestPine01.PNG",
  Je = "L2_ForestPine02.PNG",
  Ke = "L2_ForestPine03.PNG",
  Te = "L2_ForestPine07.PNG",
  Ue = "L2_ForestPine08.PNG",
  Ve = "L2_ForestPine09.PNG",
  We = "L2_ForestMixed05.PNG",
  Xe = "L2_ForestWillow03.PNG",
  Ye = "L1_Hills.PNG",
  Ze = "L2_MountainBigEarth01.PNG",
  $e = "L2_MountainBigRock01.PNG",
  af = "L2_MountainBigVolcano01.PNG",
  bf = "L2_MountainBigVolcanoActive01.PNG",
  cf = "L2_MountainBigVolcanoErupt01.PNG",
  df = "L2_MountainRocky01.PNG",
  ef = "L2_MountainRocky02.PNG",
  ff = "L2_MountainRocky03.PNG",
  gf = "L2_MountainRocky04.PNG",
  hf = "L2_MountainRocky05.PNG",
  jf = "L2_Terrain041.PNG",
  kf = "L1_Terrain033.PNG",
  lf = "L2_MountainDesert01.PNG",
  mf = "L2_MountainDesert02.PNG",
  Ff = "L2_MountainDesert03.PNG",
  Gf = "L2_MountainDesert04.PNG",
  Hf = "L2_MountainDesert05.PNG",
  If = "L2_MountainDesert06.PNG",
  Jf = "L2_ForestPine04.PNG",
  Kf = "L2_ForestPine05.PNG",
  Lf = "L2_ForestPine06.PNG",
  Mf = "L2_Terrain040.PNG",
  Nf = "L1_Terrain039.PNG";

function Of(a, b, c, d, f) {
  var g = this.RA = new oa,
    h, l;
  h = new ga(a);
  l = [];
  for (a = 0; 256 > a; a++) l[a] = Math.floor(256 * h.random());
  g.Wj = [];
  for (a = 0; 512 > a; a++) g.Wj[a] = l[a & 255];
  this.NE = 1;
  this.QE = b;
  this.PE = c;
  this.RE = d;
  this.OE = f
}

function Pf(a, b, c) {
  var d = 0,
    f = a.NE,
    g = a.OE,
    h;
  for (h = 0; h < a.RE; h++) {
    var l = a.RA,
      n = b * g,
      p = c * g,
      s = void 0,
      u = void 0,
      y = void 0,
      A = y = void 0,
      C = void 0,
      v = void 0,
      D = s = u = y = u = void 0,
      N = u = void 0,
      I = v = y = void 0,
      x = void 0,
      N = D = x = I = C = A = void 0,
      y = 0.5 * (n + p) * (l.HB - 1),
      A = Math.floor(n + y),
      C = Math.floor(p + y),
      v = (3 - l.HB) / 6,
      u = (A + C) * v,
      y = A - u,
      u = C - u,
      s = n - y,
      D = p - u,
      p = n = void 0;
    s > D ? (n = 1, p = 0) : (n = 0, p = 1);
    u = s - n + v;
    N = D - p + v;
    y = s - 1 + 2 * v;
    v = D - 1 + 2 * v;
    I = A & 255;
    x = C & 255;
    A = l.Wj[I + l.Wj[x]] % 12;
    C = l.Wj[I + n + l.Wj[x + p]] % 12;
    I = l.Wj[I + 1 + l.Wj[x + 1]] % 12;
    x = 0.5 - s * s - D * D;
    0 > x ? s = 0 : (x *= x,
      s = x * x * (l.Im[A][0] * s + l.Im[A][1] * D));
    D = 0.5 - u * u - N * N;
    0 > D ? u = 0 : (D *= D, u = D * D * (l.Im[C][0] * u + l.Im[C][1] * N));
    N = 0.5 - y * y - v * v;
    0 > N ? y = 0 : (N *= N, y = N * N * (l.Im[I][0] * y + l.Im[I][1] * v));
    d += 70 * f * (s + u + y);
    f *= a.PE;
    g *= a.QE
  }
  return d
};

function Qf() {
  this.ow = new Of(5, 2, 0.5, 4, 0.003);
  this.qD = new Of(2, 2, 0.5, 2, 1E-4);
  this.Dr = []
}

function Rf(a, b) {
  a.Dr.push(b)
}
Qf.prototype.v = function(a, b) {
  var c = a * w.B,
    d = b * w.B;
  if (-0.3 < Pf(this.ow, c, d)) return null;
  c = (Pf(this.qD, c, d) - -0.8) / (2 / this.Dr.length) | 0;
  return c > this.Dr.length ? w.I.v("L2_Town01.PNG") : w.I.v(this.Dr[c])
};

function Sf() {
  this.ow = new Of(9, 2, 0.5, 4, 0.003);
  this.fE = new Of(7, 2, 0.9, 1, 0.02);
  this.Fs = []
}

function Tf(a, b) {
  a.Fs.push(b)
}
Sf.prototype.v = function(a, b) {
  var c = a * w.B,
    d = b * w.B;
  if (-0.3 < Pf(this.ow, c, d)) return null;
  c = (Pf(this.fE, c, d) - -0.8) / (0.1 / this.Fs.length) | 0;
  return c > this.Fs.length ? null : w.I.v(this.Fs[c])
};

function Uf(a, b) {
  this.pE = new Of(10, 2.012, 0.5, 5, 1E-4);
  this.ox = new Of(2, 2, 0.5, 3, 5E-4);
  this.eg = new Qf;
  Rf(this.eg, Fe);
  Rf(this.eg, Ge);
  Rf(this.eg, Ie);
  Rf(this.eg, Je);
  Rf(this.eg, Ke);
  Rf(this.eg, Te);
  Rf(this.eg, Ue);
  Rf(this.eg, Ve);
  Rf(this.eg, Xe);
  Rf(this.eg, We);
  Rf(this.eg, He);
  this.wf = new Sf;
  Tf(this.wf, Ze);
  Tf(this.wf, $e);
  Tf(this.wf, af);
  Tf(this.wf, bf);
  Tf(this.wf, cf);
  Tf(this.wf, df);
  Tf(this.wf, ef);
  Tf(this.wf, ff);
  Tf(this.wf, gf);
  Tf(this.wf, hf);
  Tf(this.wf, jf);
  Tf(this.wf, Ye);
  this.kt = new Qf;
  Rf(this.kt, Jf);
  Rf(this.kt, Kf);
  Rf(this.kt, Lf);
  this.Bx = new Sf;
  Tf(this.Bx, Nf);
  Tf(this.Bx, Mf);
  this.tj = new Sf;
  Tf(this.tj, lf);
  Tf(this.tj, mf);
  Tf(this.tj, kf);
  Tf(this.tj, Ff);
  Tf(this.tj, Gf);
  Tf(this.tj, Hf);
  Tf(this.tj, If);
  this.rc = a;
  this.sc = b;
  this.tE = this.ZD = "L1_Terrain015.PNG"
}

function Vf(a, b) {
  var c = dd(b.Hd + "_" + b.Id),
    d, f, g = b.Hd * a.rc,
    h = b.Id * a.sc;
  for (f = 0; f <= a.rc; f++)
    for (d = 0; d <= a.sc; d++) {
      var l = b,
        n = f,
        p = d,
        s = Wf(a, g + f, h + d, c),
        u = void 0;
      if (u = Xf(l, n - 1, p - 1)) u.xB = s;
      if (u = Xf(l, n, p - 1)) u.yB = s;
      if (u = Xf(l, n - 1, p)) u.KA = s;
      if (u = Xf(l, n, p)) u.LA = s
    }
  for (f = 0; f < a.rc; f++)
    for (d = 0; d < a.sc; d++) g = Xf(b, f, d), h = void 0, !c || c.$b ? (h = a.ZD, g.Kn = null, g.Ln = 1E5) : (l = g.LA + g.KA + g.yB + g.xB, h = Ee[l], g.Kn = l, h || (console.log("no sprite found for key: [" + l + "]"), h = Ee.JD), g.Ln = "PPPP" === g.Kn || "OOOO" === g.Kn || "IIII" === g.Kn ? 1E5 : 0), (h =
      w.I.v(h)) && g.Qa(h);
  g = b.Hd * a.rc;
  h = b.Id * a.sc;
  if (!c || c.$b)
    for (f = 0; f < a.rc; f++)
      for (d = 0; d < a.sc; d++) n = Xf(b, f, d), n.ea(null), n.Ln = 1E5;
  else
    for (f = 0; f < a.rc; f++)
      for (d = 0; d < a.sc; d++) n = Xf(b, f, d), (l = n.Kn) ? (s = null, p = 0, "GGGG" === l ? (s = a.eg.v(g + f, h + d)) ? p = 10 : (s = a.wf.v(g + f, h + d)) && (p = 1E4) : "DDDD" === l ? (s = a.tj.v(g + f, h + d)) && (p = 1E4) : "SSSS" === l && ((s = a.kt.v(g + f, h + d)) ? p = 10 : (s = a.Bx.v(g + f, h + d)) && (p = 1E4)), s ? (n.Ln += p, n.ea(s)) : n.ea(null)) : n.ea(null);
  c && !c.$b && ((d = (d = w.Aa.Do[b.Hd + "_" + b.Id]) ? d : null) ? (f = d.bc(), g = d.cc(), (h = w.S.hb(f, g)) ?
    h.ea(w.I.v(d.Fo)) : (console.log("no tile for: col=" + f + " row=" + g), d = null)) : d = null, d && ((f = w.Bm.jw[d.ag]) && (f = w.S.hb(f.kw, f.lw)) && f.ea(w.I.v(w.Bm.Gz)), a.Ut(d)), f = fd(b.Hd + "_" + b.Id)) && (d = f.dm, f = f.em, (g = w.S.hb(d, f)) ? g.ea(w.I.v(w.kb.Ny)) : console.log("no tile for: col=" + d + " row=" + f));
  f = w.I.v(a.tE);
  g = dd(b.Hd + "_" + (b.Id - 1));
  h = dd(b.Hd - 1 + "_" + b.Id);
  l = dd(b.Hd - 1 + "_" + (b.Id - 1));
  if (c != g)
    for (n = 0; n < a.rc; n++) d = Xf(b, n, 0), d.Qa(f), d.ea(null);
  if (c != h)
    for (n = 0; n < a.sc; n++) d = Xf(b, 0, n), d.Qa(f), d.ea(null);
  c === g && c === h && c != l && (d =
    Xf(b, 0, 0), d.Qa(f), d.ea(null))
}
Uf.prototype.Ut = function(a) {
  var b;
  if (b = w.ug.zx[a.ag]) {
    if (a = w.S.hb(b.iq, b.jq)) b = w.I.v(Ce(w.ug)), a.ea(b)
  } else {
    b = w.ug;
    for (var c = a.vw(), d = a.ww(), f = a.bc(), g = a.cc(), h = 1 + c * xc + k(xc - 1), l = 1 + d * yc + k(yc - 1); h === f && l === g;) h = 1 + c * xc + k(xc - 1), l = 1 + d * yc + k(yc - 1);
    b.Ut(new ze(a.ag, h, l))
  }
};

function Wf(a, b, c, d) {
  b *= w.B;
  c *= w.B;
  var f = Pf(a.pE, b, c);
  return !d || d.$b ? 0.5 > f && (a = Pf(a.ox, b, c), -0.6 > a) ? "P" : "D" : d.cb ? 0.5 > f && (a = Pf(a.ox, b, c), -0.6 > a) ? De : "G" : 0.5 > f && (a = Pf(a.ox, b, c), -0.6 > a) ? "I" : "S"
};

function Yf(a, b) {
  this.Qn = a;
  this.Tn = b;
  this.NC = a * w.B;
  this.OC = b * w.B;
  this.Yf = this.Jn = null;
  this.Kn = "GGGG";
  this.xB = this.KA = this.yB = this.LA = De;
  this.Ln = this.ln = 0
}
e = Yf.prototype;
e.dc = function() {
  return this.NC
};
e.ec = function() {
  return this.OC
};
e.bc = function() {
  return this.Qn
};
e.cc = function() {
  return this.Tn
};
e.Qa = function(a) {
  this.Jn = a
};
e.ea = function(a) {
  this.Yf = a
};

function Zf(a, b, c) {
  this.jo = [];
  this.Hd = a;
  this.Id = b;
  this.sc = yc;
  this.rc = xc;
  this.Qj = a * this.rc;
  this.Rj = b * this.sc;
  this.wp = this.Qj + this.rc;
  this.xp = this.Rj + this.sc;
  this.yp = this.Qj * w.B;
  this.Mw = this.wp * w.B;
  this.zp = this.Rj * w.B;
  this.Nw = this.xp * w.B;
  this.wt = c;
  this.Aw()
}

function B(a, b, c, d) {
  a.Hd = b;
  a.Id = c;
  a.Qj = b * a.rc;
  a.Rj = c * a.sc;
  a.wp = a.Qj + a.rc;
  a.xp = a.Rj + a.sc;
  a.yp = a.Qj * w.B;
  a.Mw = a.wp * w.B;
  a.zp = a.Rj * w.B;
  a.Nw = a.xp * w.B;
  if (d) {
    for (c = 0; c < a.rc; c++)
      for (d = a.jo[c], b = 0; b < a.sc; b++) {
        var f = d[b],
          g = a.Qj + c,
          h = a.Rj + b;
        f.Qn = g;
        f.Tn = h;
        f.NC = g * w.B;
        f.OC = h * w.B
      }
    Vf(a.wt, a)
  }
}

function $f(a, b, c) {
  return b >= a.yp && b < a.Mw && c >= a.zp && c < a.Nw
}
Zf.prototype.Aw = function() {
  var a, b, c, d = this.Hd * this.rc,
    f = this.Id * this.sc;
  for (b = 0; b < this.rc; b++) {
    c = [];
    for (a = 0; a < this.sc; a++) c.push(new Yf(d + b, f + a));
    this.jo.push(c)
  }
};

function Xf(a, b, c) {
  return 0 > b || b >= a.rc || 0 > c || c >= a.sc ? null : a.jo[b][c]
};

function ag() {
  this.wt = new Uf(xc, yc);
  this.ie = this.he = 0;
  this.R = zc;
  this.L = Ac;
  this.q = [];
  this.ty = !1
}

function bg(a) {
  var b = [],
    c, d, f;
  for (d = 0; 3 > d; d++) {
    c = [];
    for (f = 0; 3 > f; f++) c.push(new Zf(d + a.R, f + a.L, a.wt));
    b.push(c)
  }
  return b
}

function cg() {
  var a = w.S;
  a.q = bg(a);
  ed(a);
  a.he = a.q[1][1].yp + xc * w.B / 2 | 0;
  a.ie = a.q[1][1].zp + yc * w.B / 2 | 0;
  var b;
  for (b = 0; b < w.i.D.length; b++) {
    var c = a.he + k(30),
      d = a.ie + k(30);
    t(w.i.D[b].p.Db, c, d)
  }
  a.ty = !0
}

function ed(a) {
  var b, c;
  for (c = 0; 3 > c; c++)
    for (b = 0; 3 > b; b++) {
      var d = a.q[c][b];
      Vf(d.wt, d)
    }
}
e = ag.prototype;
e.hb = function(a, b) {
  var c = (a / xc | 0) - this.R,
    d = (b / yc | 0) - this.L;
  if (0 > c || 3 <= c || 0 > d || 3 <= d) return null;
  c = this.q[c][d];
  return Xf(c, a - (c.yp / w.B | 0), b - (c.zp / w.B | 0))
};
e.bc = function(a) {
  return a / w.B | 0
};
e.cc = function(a) {
  return a / w.B | 0
};
e.vw = function(a) {
  return this.bc(a) / xc | 0
};
e.ww = function(a) {
  return this.cc(a) / yc | 0
};
e.dc = function(a) {
  return a * w.B | 0
};
e.ec = function(a) {
  return a * w.B | 0
};

function dg(a) {
  var b = w.S,
    c, d, f, g = 1E9,
    h = -1;
  for (c = 0; c < b.q.length; c++) d = b.q[c][0], d = a < d.Qj ? d.Qj : a >= d.wp ? d.wp - 1 : a, f = Math.abs(a - d), f < g && (h = d, g = f);
  return h
}

function pg(a) {
  var b, c, d, f = w.S.q[0],
    g = 1E8,
    h = -1;
  for (b = 0; b < f.length; b++) c = f[b], c = a < c.Rj ? c.Rj : a >= c.xp ? c.xp - 1 : a, d = Math.abs(a - c), d < g && (g = d, h = c);
  return h
};
var sd = {
    floor: "L1_Terrain014.PNG",
    Za: {
      di: "L2_Door007.PNG",
      ci: "L2_Door008.PNG",
      Lh: "L2_StairsDownNS.PNG",
      Kh: "L2_StairsDownEW.PNG"
    },
    Ac: {
      kg: "L2_Door001.PNG",
      jg: "L2_Door002.PNG",
      Vf: "L2_Door003.PNG",
      Uf: "L2_Door004.PNG"
    },
    Kb: {
      Cg: "L2_WallBrickNS.PNG",
      Eg: "L2_WallBrickEW.PNG",
      Fg: "L2_WallBrickNE.PNG",
      Dg: "L2_WallBrickES.PNG",
      Hg: "L2_WallBrickNW.PNG",
      Gg: "L2_WallBrickSW.PNG",
      ii: "L2_WallBrickNESW.PNG",
      Ah: "L2_WallBrickESW.PNG",
      Bh: "L2_WallBrickNEW.PNG",
      zh: "L2_WallBrickNES.PNG",
      Ch: "L2_WallBrickNSW.PNG",
      Xc: "L2_WallBrickW.PNG",
      E: "L2_WallBrickN.PNG",
      ji: "L2_WallBrickE.PNG",
      ki: "L2_WallBrickS.PNG"
    },
    Th: [{
      Oo: [],
      JC: ["L3_WallDeco23.PNG", "L3_WallDeco49.PNG"],
      KC: ["L3_WallDeco24.PNG", "L3_WallDeco50.PNG"]
    }]
  },
  Cd = {
    floor: "L1_Terrain015.PNG",
    Za: {
      di: "L2_DarkStoneStairsUpNS.PNG",
      ci: "L2_DarkStoneStairsUpEW.PNG",
      Lh: "L2_DarkStoneStairsDownNS.PNG",
      Kh: "L2_DarkStoneStairsDownEW.PNG"
    },
    Ac: {
      kg: "L2_Door001.PNG",
      jg: "L2_Door002.PNG",
      Vf: "L2_Door003.PNG",
      Uf: "L2_Door004.PNG"
    },
    Kb: {
      Cg: "L2_WallDarkBrickNS.PNG",
      Eg: "L2_WallDarkBrickEW.PNG",
      Fg: "L2_WallDarkBrickNE.PNG",
      Dg: "L2_WallDarkBrickES.PNG",
      Hg: "L2_WallDarkBrickNW.PNG",
      Gg: "L2_WallDarkBrickSW.PNG",
      ii: "L2_WallDarkBrickNESW.PNG",
      Ah: "L2_WallDarkBrickESW.PNG",
      Bh: "L2_WallDarkBrickNEW.PNG",
      zh: "L2_WallDarkBrickNES.PNG",
      Ch: "L2_WallDarkBrickNSW.PNG",
      Xc: "L2_WallDarkBrickW.PNG",
      E: "L2_WallDarkBrickN.PNG",
      ji: "L2_WallDarkBrickE.PNG",
      ki: "L2_WallDarkBrickS.PNG"
    },
    Th: []
  },
  qd = {
    floor: "L1_Terrain013.PNG",
    Za: {
      di: "L2_StairsHutUpNS.PNG",
      ci: "L2_StairsHutUpEW.PNG",
      Lh: "L2_StairsHutDownNS.PNG",
      Kh: "L2_StairsHutDownEW.PNG"
    },
    Ac: {
      kg: "L2_Door001.PNG",
      jg: "L2_Door002.PNG",
      Vf: "L2_Door003.PNG",
      Uf: "L2_Door004.PNG"
    },
    Kb: {
      Cg: "L2_WallCaveNS.PNG",
      Eg: "L2_WallCaveEW.PNG",
      Fg: "L2_WallCaveNE.PNG",
      Dg: "L2_WallCaveES.PNG",
      Hg: "L2_WallCaveNW.PNG",
      Gg: "L2_WallCaveSW.PNG",
      ii: "L2_WallCaveNESW.PNG",
      Ah: "L2_WallCaveESW.PNG",
      Bh: "L2_WallCaveNEW.PNG",
      zh: "L2_WallCaveNES.PNG",
      Ch: "L2_WallCaveNSW.PNG",
      Xc: "L2_WallCaveW.PNG",
      E: "L2_WallCaveN.PNG",
      ji: "L2_WallCaveE.PNG",
      ki: "L2_WallCaveS.PNG"
    },
    Th: []
  },
  Ed = {
    floor: "L1_FloorPattern.PNG",
    Za: {
      di: "L2_StairsBoneUpNS.PNG",
      ci: "L2_StairsBoneUpEW.PNG",
      Lh: "L2_StairsBoneDownNS.PNG",
      Kh: "L2_StairsBoneDownEW.PNG"
    },
    Ac: {
      kg: "L2_DoorBoneOpenNS.PNG",
      jg: "L2_DoorBoneOpenEW.PNG",
      Vf: "L2_DoorBoneClosedNS.PNG",
      Uf: "L2_DoorBoneClosedEW.PNG"
    },
    Kb: {
      Cg: "L2_WallBoneNS.PNG",
      Eg: "L2_WallBoneEW.PNG",
      Fg: "L2_WallBoneNE.PNG",
      Dg: "L2_WallBoneES.PNG",
      Hg: "L2_WallBoneNW.PNG",
      Gg: "L2_WallBoneSW.PNG",
      ii: "L2_WallBoneNESW.PNG",
      Ah: "L2_WallBoneESW.PNG",
      Bh: "L2_WallBoneNEW.PNG",
      zh: "L2_WallBoneNES.PNG",
      Ch: "L2_WallBoneNSW.PNG",
      Xc: "L2_WallBoneW.PNG",
      E: "L2_WallBoneN.PNG",
      ji: "L2_WallBoneE.PNG",
      ki: "L2_WallBoneS.PNG"
    },
    Th: []
  },
  Dd = {
    floor: "L1_Terrain049.PNG",
    Za: {
      di: "L2_DarkStoneStairsUpNS.PNG",
      ci: "L2_DarkStoneStairsUpEW.PNG",
      Lh: "L2_DarkStoneStairsDownNS.PNG",
      Kh: "L2_DarkStoneStairsDownEW.PNG"
    },
    Ac: {
      kg: "L2_DoorDarkStoneOpenNS.PNG",
      jg: "L2_DoorDarkStoneOpenEW.PNG",
      Vf: "L2_DoorDarkStoneClosedNS.PNG",
      Uf: "L2_DoorDarkStoneClosedEW.PNG"
    },
    Kb: {
      Cg: "L2_WallDarkStoneNS.PNG",
      Eg: "L2_WallDarkStoneEW.PNG",
      Fg: "L2_WallDarkStoneNE.PNG",
      Dg: "L2_WallDarkStoneES.PNG",
      Hg: "L2_WallDarkStoneNW.PNG",
      Gg: "L2_WallDarkStoneSW.PNG",
      ii: "L2_WallDarkStoneNESW.PNG",
      Ah: "L2_WallDarkStoneESW.PNG",
      Bh: "L2_WallDarkStoneNEW.PNG",
      zh: "L2_WallDarkStoneNES.PNG",
      Ch: "L2_WallDarkStoneNSW.PNG",
      Xc: "L2_WallDarkStoneW.PNG",
      E: "L2_WallDarkStoneN.PNG",
      ji: "L2_WallDarkStoneE.PNG",
      ki: "L2_WallDarkStoneS.PNG"
    },
    Th: []
  },
  rd = {
    floor: "L1_Terrain004.PNG",
    Za: {
      di: "L2_StairsIceUpNS.PNG",
      ci: "L2_StairsIceUpEW.PNG",
      Lh: "L2_StairsIceDownNS.PNG",
      Kh: "L2_StairsIceDownEW.PNG"
    },
    Ac: {
      kg: "L2_DoorIceOpenNS.PNG",
      jg: "L2_DoorIceOpenEW.PNG",
      Vf: "L2_DoorIceClosedNS.PNG",
      Uf: "L2_DoorIceClosedEW.PNG"
    },
    Kb: {
      Cg: "L2_WallIceNS.PNG",
      Eg: "L2_WallIceEW.PNG",
      Fg: "L2_WallIceNE.PNG",
      Dg: "L2_WallIceES.PNG",
      Hg: "L2_WallIceNW.PNG",
      Gg: "L2_WallIceSW.PNG",
      ii: "L2_WallIceNESW.PNG",
      Ah: "L2_WallIceESW.PNG",
      Bh: "L2_WallIceNEW.PNG",
      zh: "L2_WallIceNES.PNG",
      Ch: "L2_WallIceNSW.PNG",
      Xc: "L2_WallIceW.PNG",
      E: "L2_WallIceN.PNG",
      ji: "L2_WallIceE.PNG",
      ki: "L2_WallIceS.PNG"
    },
    Th: [{
      Oo: ["L2_IceFloorDeco1.PNG", "L2_IceFloorDeco3.PNG", "L2_IceFloorDeco2.PNG"],
      JC: [],
      KC: []
    }]
  },
  ud = {
    floor: "L1_Terrain049.PNG",
    Za: {
      di: "L2_StairsIronUpNS.PNG",
      ci: "L2_StairsIronUpEW.PNG",
      Lh: "L2_StairsIronDownNS.PNG",
      Kh: "L2_StairsIronDownEW.PNG"
    },
    Ac: {
      kg: "L2_DoorIronOpenNS.PNG",
      jg: "L2_DoorIronOpenEW.PNG",
      Vf: "L2_DoorIronClosedNS.PNG",
      Uf: "L2_DoorIronClosedEW.PNG"
    },
    Kb: {
      Cg: "L2_WallIronNS.PNG",
      Eg: "L2_WallIronEW.PNG",
      Fg: "L2_WallIronNE.PNG",
      Dg: "L2_WallIronES.PNG",
      Hg: "L2_WallIronNW.PNG",
      Gg: "L2_WallIronSW.PNG",
      ii: "L2_WallIronNESW.PNG",
      Ah: "L2_WallIronESW.PNG",
      Bh: "L2_WallIronNEW.PNG",
      zh: "L2_WallIronNES.PNG",
      Ch: "L2_WallIronNSW.PNG",
      Xc: "L2_WallIronW.PNG",
      E: "L2_WallIronN.PNG",
      ji: "L2_WallIronE.PNG",
      ki: "L2_WallIronS.PNG"
    },
    Th: []
  },
  pd = {
    floor: "L1_Terrain049.PNG",
    Za: {
      di: "L2_DarkStoneStairsUpNS.PNG",
      ci: "L2_DarkStoneStairsUpEW.PNG",
      Lh: "L2_DarkStoneStairsDownNS.PNG",
      Kh: "L2_DarkStoneStairsDownEW.PNG"
    },
    Ac: {
      kg: "L2_DoorDarkStoneOpenNS.PNG",
      jg: "L2_DoorDarkStoneOpenEW.PNG",
      Vf: "L2_DoorDarkStoneClosedNS.PNG",
      Uf: "L2_DoorDarkStoneClosedEW.PNG"
    },
    Kb: {
      Cg: "L2_WallMineNS.PNG",
      Eg: "L2_WallMineEW.PNG",
      Fg: "L2_WallMineNE.PNG",
      Dg: "L2_WallMineES.PNG",
      Hg: "L2_WallMineNW.PNG",
      Gg: "L2_WallMineSW.PNG",
      ii: "L2_WallMineNESW.PNG",
      Ah: "L2_WallMineESW.PNG",
      Bh: "L2_WallMineNEW.PNG",
      zh: "L2_WallMineNES.PNG",
      Ch: "L2_WallMineNSW.PNG",
      Xc: "L2_WallMineW.PNG",
      E: "L2_WallMineN.PNG",
      ji: "L2_WallMineE.PNG",
      ki: "L2_WallMineS.PNG"
    },
    Th: []
  },
  Bd = {
    floor: "L1_Terrain010.PNG",
    Za: {
      di: "L2_StairsUpNS.PNG",
      ci: "L2_StairsUpEW.PNG",
      Lh: "L2_StairsDownNS.PNG",
      Kh: "L2_StairsDownEW.PNG"
    },
    Ac: {
      kg: "L2_DoorOpenNS.PNG",
      jg: "L2_DoorOpenEW.PNG",
      Vf: "L2_DoorClosedNS.PNG",
      Uf: "L2_DoorClosedEW.PNG"
    },
    Kb: {
      Cg: "L2_WallStoneNS.PNG",
      Eg: "L2_WallStoneEW.PNG",
      Fg: "L2_WallStoneNE.PNG",
      Dg: "L2_WallStoneES.PNG",
      Hg: "L2_WallStoneNW.PNG",
      Gg: "L2_WallStoneSW.PNG",
      ii: "L2_WallStoneNESW.PNG",
      Ah: "L2_WallStoneESW.PNG",
      Bh: "L2_WallStoneNEW.PNG",
      zh: "L2_WallStoneNES.PNG",
      Ch: "L2_WallStoneNSW.PNG",
      Xc: "L2_WallStoneW.PNG",
      E: "L2_WallStoneN.PNG",
      ji: "L2_WallStoneE.PNG",
      ki: "L2_WallStoneS.PNG"
    },
    Th: []
  },
  td = {
    floor: "L1_Terrain011.PNG",
    Za: {
      di: "L2_StairsHutUpNS.PNG",
      ci: "L2_StairsHutUpEW.PNG",
      Lh: "L2_StairsHutDownNS.PNG",
      Kh: "L2_StairsHutDownEW.PNG"
    },
    Ac: {
      kg: "L2_DoorHutOpenNS.PNG",
      jg: "L2_DoorHutOpenEW.PNG",
      Vf: "L2_DoorHutClosedNS.PNG",
      Uf: "L2_DoorHutClosedEW.PNG"
    },
    Kb: {
      Cg: "L2_WallWoodNS.PNG",
      Eg: "L2_WallWoodEW.PNG",
      Fg: "L2_WallWoodNE.PNG",
      Dg: "L2_WallWoodES.PNG",
      Hg: "L2_WallWoodNW.PNG",
      Gg: "L2_WallWoodSW.PNG",
      ii: "L2_WallWoodNESW.PNG",
      Ah: "L2_WallWoodESW.PNG",
      Bh: "L2_WallWoodNEW.PNG",
      zh: "L2_WallWoodNES.PNG",
      Ch: "L2_WallWoodNSW.PNG",
      Xc: "L2_WallWoodW.PNG",
      E: "L2_WallWoodN.PNG",
      ji: "L2_WallWoodE.PNG",
      ki: "L2_WallWoodS.PNG"
    },
    Th: []
  };

function qg(a, b, c, d) {
  this.TD = a;
  this.UD = b;
  this.VD = c;
  this.WD = d;
  this.bt = this.Yf = this.Jn = null;
  this.Rb = rg;
  this.Pq = null;
  this.li = 0
}
e = qg.prototype;
e.Ai = function() {
  return this.TD
};
e.Bi = function() {
  return this.UD
};
e.Ob = function() {
  return this.VD
};
e.Pb = function() {
  return this.WD
};
e.Qa = function(a) {
  this.Jn = a
};
e.ea = function(a) {
  this.Yf = a
};

function sg(a, b) {
  a.Pq = b;
  a.li = b ? k(b.li) : 0
}
e.qB = function(a) {
  this.li = a
};
var rg = 0;

function tg(a, b, c, d, f) {
  this.fk = 0;
  this.ia = a;
  this.ja = b;
  this.rb = c;
  this.qb = d;
  this.Yp = f;
  this.ro = [];
  this.Nc = [];
  this.G = this.Ga = this.Za = null;
  this.Xi = !1
}
e = tg.prototype;
e.xx = function(a, b) {
  this.Ga = a;
  this.G = b
};

function ug(a) {
  return a.ia * w.B
}

function vg(a) {
  return a.ia * w.B + a.rb * w.B
}

function wg(a) {
  return a.ja * w.B
}

function xg(a) {
  return a.ja * w.B + a.qb * w.B
}
e.yx = function() {
  1 < this.ia && this.ia--;
  1 < this.ja && this.ja--
};
e.shiftLeft = function() {
  1 < this.ia && this.ia--
};
e.gt = function() {
  1 < this.ja && this.ja--
};
e.Bq = function(a) {
  this.Lw(a);
  var b, c;
  c = this.ja - 1;
  for (b = this.ia - 1; b < this.ia + this.rb + 1; b++) a[b][c].Rb = 2;
  c = this.ja + this.qb;
  for (b = this.ia - 1; b < this.ia + this.rb + 1; b++) a[b][c].Rb = 2;
  b = this.ia - 1;
  b = a[b];
  for (c = this.ja - 1; c < this.ja + this.qb + 1; c++) b[c].Rb = 2;
  b = this.ia + this.rb;
  b = a[b];
  for (c = this.ja - 1; c < this.ja + this.qb + 1; c++) b[c].Rb = 2
};
e.Lw = function(a) {
  var b, c, d = this.ia + this.rb,
    f = this.ja + this.qb,
    g;
  for (c = this.ia; c < d; c++)
    for (b = a[c], g = this.ja; g < f; g++) b[g].Rb = 1
};
e.Ud = function(a) {
  var b = a.ia + a.rb / 2 - (this.ia + this.rb / 2);
  a = a.ja + a.qb / 2 - (this.ja + this.qb / 2);
  return b * b + a * a
};

function yg(a, b, c) {
  return b >= a.ia && b < a.ia + a.rb && c >= a.ja && c < a.ja + a.qb
}

function zg(a, b, c) {
  return c === a.ja - 1 || c === a.ja + a.qb ? b >= a.ia - 1 && b <= a.ia + a.rb : b === a.ia - 1 || b === a.ia + a.rb ? c >= a.ja - 1 && c <= a.ja + a.qb : !1
}

function Ag(a) {
  var b = !a.Xi;
  a.Xi = !0;
  if (b) {
    0 === a.Yp && randomTreasureRoomPotion.t && 0.25 > Math.random() && (a.Yp = 3);
    var c = a.ia,
      d = c + a.rb,
      f = a.ja,
      g = f + a.qb,
      b = a.Nc,
      h, l, n, p = w.I.v(a.Ga.floor);
    n = w.I.v(a.Ga.Kb.Cg);
    var s = w.I.v(a.Ga.Kb.Eg);
    h = a.G[c - 1][f - 1];
    h.Qa(p);
    h.ea(w.I.v(a.Ga.Kb.Gg));
    h = a.G[d][f - 1];
    h.Qa(p);
    h.ea(w.I.v(a.Ga.Kb.Hg));
    h = a.G[c - 1][g];
    h.Qa(p);
    h.ea(w.I.v(a.Ga.Kb.Dg));
    h = a.G[d][g];
    h.Qa(p);
    h.ea(w.I.v(a.Ga.Kb.Fg));
    for (l = c; l < d; l++) h = a.G[l][f - 1], h.Qa(p), h.Yf || h.ea(n);
    for (l = c; l < d; l++) h = a.G[l][g], h.Qa(p), h.Yf || h.ea(n);
    for (n = f; n < g; n++) h =
      a.G[c - 1][n], h.Qa(p), h.Yf || h.ea(s);
    for (n = f; n < g; n++) h = a.G[d][n], h.Qa(p), h.Yf || h.ea(s);
    for (l = c; l < d; l++)
      for (c = a.G[l], n = f; n < g; n++) h = c[n], h.Qa(p);
    for (d = 0; d < b.length; d++) f = b[d], h = a.G[f.wj][f.xj], h.Qa(p), f.Ho ? f.Mb ? h.ea(w.I.v(a.Ga.Ac.kg)) : h.ea(w.I.v(a.Ga.Ac.Vf)) : f.Mb ? h.ea(w.I.v(a.Ga.Ac.jg)) : h.ea(w.I.v(a.Ga.Ac.Uf));
    a.Za && (h = a.G[a.Za.Ex][a.Za.Fx], h.Qa(p), a.Za.Fq ? a.Za.sq ? h.ea(w.I.v(a.Ga.Za.Lh)) : h.ea(w.I.v(a.Ga.Za.di)) : a.Za.sq ? h.ea(w.I.v(a.Ga.Za.Kh)) : h.ea(w.I.v(a.Ga.Za.ci)));
    p = a.Ga.Th;
    h = a.G;
    b = w.yE;
    !p || 0 === p.length ||
      0.2 > b.wa.random() || !(p = 1 === p.length ? p[0] : ma(b.wa, p.length)) || (p.Oo && 0 < p.Oo.length && ((g = a.ia, d = a.ja, f = d + a.qb - 1, g = g + 1 + ma(b.wa, g + a.rb - 1 - g - 2), d = d + 1 + ma(b.wa, f - d - 2), t(b.yh, g, d), f = b.yh, d = h[f.T][f.U], d) ? d.Yf || ((f = p.Oo[ma(b.wa, p.Oo.length)]) ? d.ea(w.I.v(f)) : console.log("failed to select floor sprite.")) : console.log("invalid level tile. col=" + f.T + " row=" + f.U)), 0.5 > b.wa.random() ? (d = b.Xw(a), p = p.JC) : (d = b.Zw(a), p = p.KC), d && p && 0 !== p.length && Cg(a, d) && ((h = h[d.T][d.U], h) ? h.bt || ((b = p[ma(b.wa, p.length)]) ? h.bt = w.I.v(b) :
        console.log("failed to select wall sprite.")) : console.log("invalid level tile. col=" + d.T + " row=" + d.U)));
    if (3 === a.Yp)
      for (d = a.ia + 1, b = d + a.rb, h = a.ja + 1, p = h + a.qb, l = d; l < b; l++)
        for (g = a.G[l], c = h; c < p; c++) 0.8 > Math.random() && (d = 2 * Dg(), 0 < d && (f = g[c], w.ff.pe.push(new Eg(d, f.Ob(), f.Pb(), a))))
  }
}

function Fg(a, b, c) {
  if (b) {
    var d = b.T,
      f = b.U,
      g = (a.ia - 1) * w.B + c,
      h = vg(a) - c,
      l = (a.ja - 1) * w.B + c;
    a = xg(a) - c;
    d < g ? d = g : d > h && (d = h);
    f < l ? f = l : f > a && (f = a);
    t(b, d, f)
  }
}

function Gg(a, b) {
  if (!a.Nc) return !1;
  var c;
  for (c = 0; c < a.Nc.length; c++)
    if (Jb(b, a.Nc[c].me, a.Nc[c].ne) < w.B) return !0;
  return !1
}

function Cg(a, b) {
  var c = b.T,
    d = b.U,
    f;
  for (f = 0; f < a.Nc.length; f++)
    if (c === a.Nc[f].wj && d === a.Nc[f].xj) return !1;
  return a.Za && c === a.Za.Ex && d === a.Za.Fx ? !1 : !0
};

function Hg(a) {
  this.ne = this.me = this.xj = this.wj = 0;
  this.Mb = !1;
  this.Ho = !0;
  this.$d = a;
  this.Yk = null
};

function Ig(a) {
  this.$d = a;
  this.uq = this.tq = this.Fx = this.Ex = 0;
  this.sq = this.Fq = !0
}

function Jg(a, b, c) {
  a.Ex = b;
  a.Fx = c;
  a.tq = b * w.B;
  a.uq = c * w.B
};

function Kg(a, b, c, d) {
  this.Or = 0;
  this.Bl = a;
  this.af = b;
  this.Cl = c;
  this.Be = d;
  this.Sk = [];
  this.G = this.Ga = null;
  this.Km = !1
}
Kg.prototype.xx = function(a, b) {
  this.Ga = a;
  this.G = b
};

function Lg(a, b) {
  if (b === a.af) return a.Be;
  if (b === a.Be) return a.af;
  console.log("failed to find opposite door in hallway");
  return null
}
Kg.prototype.Bq = function(a) {
  var b, c;
  for (c = 0; c < this.Sk.length; c++) {
    b = this.Sk[c];
    var d = b.T;
    b = b.U;
    var f = a[d - 1],
      g = a[d],
      d = a[d + 1];
    f[b - 1].Rb = 2;
    f[b].Rb = 2;
    f[b + 1].Rb = 2;
    g[b - 1].Rb = 2;
    g[b].Rb = 2;
    g[b + 1].Rb = 2;
    d[b - 1].Rb = 2;
    d[b].Rb = 2;
    d[b + 1].Rb = 2
  }
  this.Lw(a)
};
Kg.prototype.Lw = function(a) {
  var b, c;
  for (c = 0; c < this.Sk.length; c++) b = this.Sk[c], a[b.T][b.U].Rb = 1;
  a[this.af.wj][this.af.xj].Rb = 3;
  a[this.Be.wj][this.Be.xj].Rb = 3
};

function Mg(a, b) {
  var c = b && !a.Km;
  a.Km = b;
  if (c) {
    var c = a.Sk,
      d, f, g, h = w.I.v(a.Ga.floor),
      l = w.I.v(a.Ga.Kb.Cg),
      n = w.I.v(a.Ga.Kb.Eg),
      p = w.I.v(a.Ga.Kb.Hg),
      s = w.I.v(a.Ga.Kb.Gg),
      u = w.I.v(a.Ga.Kb.Fg),
      y = w.I.v(a.Ga.Kb.Dg),
      A = w.I.v(a.Ga.Kb.Bh),
      C = w.I.v(a.Ga.Kb.Ah),
      v = w.I.v(a.Ga.Kb.zh),
      D = w.I.v(a.Ga.Kb.Ch);
    for (g = 0; g < c.length; g++) d = c[g], f = a.G[d.T][d.U], f.Qa(h);
    var N = null,
      I = null,
      x, z, O, J, la, Q, V, na, K;
    for (g = 0; g < c.length; g++) d = c[g], I = g + 1 < c.length ? c[g + 1] : null, x = d.T, z = d.U, N || (f = a.G[x][z], f.Qa(h), a.af.Ho ? a.af.Mb ? f.ea(w.I.v(a.Ga.Ac.kg)) :
      f.ea(w.I.v(a.Ga.Ac.Vf)) : a.af.Mb ? f.ea(w.I.v(a.Ga.Ac.jg)) : f.ea(w.I.v(a.Ga.Ac.Uf)), Q = z > I.U, V = z < I.U, K = x > I.T, na = x < I.T, K ? (f = a.G[x][z - 1], f.Qa(h), f.ea(A), f = a.G[x][z + 1], f.Qa(h), f.ea(A)) : na ? (f = a.G[x][z - 1], f.Qa(h), f.ea(C), f = a.G[x][z + 1], f.Qa(h), f.ea(C)) : Q ? (f = a.G[x + 1][z], f.Qa(h), f.ea(v), f = a.G[x - 1][z], f.Qa(h), f.ea(v)) : V && (f = a.G[x + 1][z], f.Qa(h), f.ea(D), f = a.G[x - 1][z], f.Qa(h), f.ea(D))), I || (f = a.G[x][z], f.Qa(h), a.Be.Ho ? a.Be.Mb ? f.ea(w.I.v(a.Ga.Ac.kg)) : f.ea(w.I.v(a.Ga.Ac.Vf)) : a.Be.Mb ? f.ea(w.I.v(a.Ga.Ac.jg)) : f.ea(w.I.v(a.Ga.Ac.Uf)),
      f = z < N.U, O = z > N.U, la = x < N.T, (J = x > N.T) ? (f = a.G[x][z - 1], f.Qa(h), f.ea(A), f = a.G[x][z + 1], f.Qa(h), f.ea(A)) : la ? (f = a.G[x][z - 1], f.Qa(h), f.ea(C), f = a.G[x][z + 1], f.Qa(h), f.ea(C)) : O ? (f = a.G[x + 1][z], f.Qa(h), f.ea(v), f = a.G[x - 1][z], f.Qa(h), f.ea(v)) : f && (f = a.G[x + 1][z], f.Qa(h), f.ea(D), f = a.G[x - 1][z], f.Qa(h), f.ea(D))), N && I && (f = z < N.U, O = z > N.U, la = x < N.T, J = x > N.T, Q = z > I.U, V = z < I.U, K = x > I.T, na = x < I.T, f && K ? (Ng(a.G[x + 1][z], h, n, !1), Ng(a.G[x + 1][z - 1], h, p, !0), Ng(a.G[x][z - 1], h, l, !1), Ng(a.G[x - 1][z + 1], h, p, !0)) : f && Q ? (Ng(a.G[x - 1][z], h, n, !1), Ng(a.G[x +
      1][z], h, n, !1)) : f && na ? (Ng(a.G[x - 1][z], h, n, !1), Ng(a.G[x - 1][z - 1], h, s, !0), Ng(a.G[x][z - 1], h, l, !1), Ng(a.G[x + 1][z + 1], h, s, !0)) : O && K ? (Ng(a.G[x + 1][z], h, n, !1), Ng(a.G[x + 1][z + 1], h, u, !0), Ng(a.G[x][z + 1], h, l, !1), Ng(a.G[x - 1][z - 1], h, u, !0)) : O && V ? (Ng(a.G[x - 1][z], h, n, !1), Ng(a.G[x + 1][z], h, n, !1)) : O && na ? (Ng(a.G[x - 1][z], h, n, !1), Ng(a.G[x - 1][z + 1], h, y, !0), Ng(a.G[x][z + 1], h, l, !1), Ng(a.G[x + 1][z - 1], h, y, !0)) : la && K ? (Ng(a.G[x][z - 1], h, l, !1), Ng(a.G[x][z + 1], h, l, !1)) : la && V ? (Ng(a.G[x - 1][z], h, n, !1), Ng(a.G[x - 1][z - 1], h, s, !0), Ng(a.G[x][z - 1],
      h, l, !1), Ng(a.G[x + 1][z + 1], h, s, !0)) : la && Q ? (Ng(a.G[x - 1][z], h, n, !1), Ng(a.G[x - 1][z + 1], h, y, !0), Ng(a.G[x][z + 1], h, l, !1), Ng(a.G[x + 1][z - 1], h, y, !0)) : J && Q ? (Ng(a.G[x + 1][z], h, n, !1), Ng(a.G[x + 1][z + 1], h, u, !0), Ng(a.G[x][z + 1], h, l, !1), Ng(a.G[x - 1][z - 1], h, u, !0)) : J && V ? (Ng(a.G[x + 1][z], h, n, !1), Ng(a.G[x + 1][z - 1], h, p, !0), Ng(a.G[x][z - 1], h, l, !1), Ng(a.G[x - 1][z + 1], h, p, !0)) : J && na && (Ng(a.G[x][z - 1], h, l, !1), Ng(a.G[x][z + 1], h, l, !1))), N = d
  }
}

function Ng(a, b, c, d) {
  1 !== a.Rb && (a.Qa(b), !d && a.Yf || a.ea(c))
};

function Og(a, b, c) {
  this.fl = a;
  this.Nj = b;
  this.G = c;
  this.oB = new Pg;
  this.Ip = [];
  this.Sw = [];
  this.Cl = this.Bl = null
}

function Qg(a, b) {
  var c = "" + (b.Ai() * a.Nj + b.Bi()),
    d = a.Sw.indexOf(c);
  if (-1 < d) d = a.Ip[d];
  else {
    d = a.oB;
    if (0 < d.nx.length) {
      var f = d = d.nx.shift();
      f.Fl = a;
      f.ss = b;
      f.xk = 0;
      f.Ko = -1;
      f.rl = null;
      f.It = !1;
      f.closed = !1;
      t(f.gh, b.Ai(), b.Bi());
      f.Hs.length = 0
    } else d = new Rg(a, b);
    a.Ip.push(d);
    a.Sw.push(c)
  }
  return d
}

function Sg(a, b, c, d, f) {
  return 0 > b - 1 || 0 > c - 1 || b + 1 >= a.fl || c + 1 >= a.Nj ? !1 : yg(a.Bl, b, c) ? !Tg(b, c, a.Bl) : yg(a.Cl, b, c) ? !Tg(b, c, a.Cl) : zg(a.Bl, b, c) || zg(a.Cl, b, c) ? !d : 0 === f || 2 === f ? a.G[b - 1][c].Rb === rg && a.G[b + 1][c].Rb === rg : a.G[b][c - 1].Rb === rg && a.G[b][c + 1].Rb === rg
}

function Tg(a, b, c) {
  var d = c.ia,
    f = d + c.rb - 1,
    g = c.ja;
  return 2 > Math.abs(g - b) && (2 > Math.abs(d - a) || 2 > Math.abs(f - a)) || 2 > Math.abs(g + c.qb - 1 - b) && (2 > Math.abs(d - a) || 2 > Math.abs(f - a)) ? !0 : !1
};

function Rg(a, b) {
  this.Fl = a;
  this.ss = b;
  this.xk = 0;
  this.Ko = -1;
  this.rl = null;
  this.closed = this.It = !1;
  this.gh = new Za;
  t(this.gh, b.Ai(), b.Bi());
  this.Hs = []
}

function Ug(a) {
  var b;
  b = a.rl ? Ug(a.rl) : [];
  var c = new Za;
  $a(c, a.gh);
  b.push(c);
  return b
};

function Pg() {
  this.nx = []
};

function Vg() {
  this.Ui = []
}
Vg.prototype.push = function(a) {
  var b, c = a.xk + a.Ko;
  for (b = 0; b < this.Ui.length; b++) {
    var d = this.Ui[b];
    if (c <= d.xk + d.Ko) {
      this.Ui.splice(b, 0, a);
      return
    }
  }
  this.Ui.push(a)
};
Vg.prototype.pop = function() {
  return this.Ui.shift()
};
Vg.prototype.remove = function(a) {
  a = this.Ui.indexOf(a); - 1 !== a ? this.Ui.splice(a, 1) : console.log("failed to find node in queue for removal!!!!!!!!!!")
};

function Wg(a, b, c) {
  this.G = c;
  this.Fl = new Og(a, b, c);
  this.open = new Vg
}

function Xg(a, b, c) {
  var d = a.G[b.ia + b.rb / 2 | 0][b.ja + b.qb / 2 | 0],
    f = a.G[c.ia + c.rb / 2 | 0][c.ja + c.qb / 2 | 0],
    g = a.Fl;
  g.Bl = b;
  g.Cl = c;
  a: {
    var g = Qg(a.Fl, d),
      f = Qg(a.Fl, f),
      h, l, n, p, s, d = 0;a.open.Ui.length = 0;a.open.push(g);
    for (g.It = !0; 0 < a.open.Ui.length;) {
      d++;
      if (500 < d) {
        console.log("path finding failure. too many iterations");
        f = null;
        break a
      }
      g = a.open.pop();
      if (g.ss === f.ss) {
        f = Ug(g);
        break a
      }
      g.closed = !0;
      h = g;
      if (0 === h.Hs.length) {
        l = h.Fl;
        n = h.ss;
        p = h.Hs;
        s = n.Ai();
        n = n.Bi();
        var u = !(yg(l.Bl, s, n) || yg(l.Cl, s, n)) && (zg(l.Bl, s, n) || zg(l.Cl, s, n));
        Sg(l, s, n - 1, u, 0) && p.push(Qg(l, l.G[s][n - 1]));
        Sg(l, s - 1, n, u, 3) && p.push(Qg(l, l.G[s - 1][n]));
        Sg(l, s + 1, n, u, 1) && p.push(Qg(l, l.G[s + 1][n]));
        Sg(l, s, n + 1, u, 2) && p.push(Qg(l, l.G[s][n + 1]))
      }
      h = h.Hs;
      for (s = 0; s < h.length; s++)
        if (l = h[s], !l.closed && (p = g.xk + l.gh.ac(g.gh), n = l.It, !n || p < l.xk)) l.rl = g, n ? (a.open.remove(l), l.xk = p) : (0 > l.Ko && (n = l.rl ? (n = l.rl.rl) && l.gh.T !== n.gh.T && l.gh.U !== n.gh.U ? 1.3 : 1 : 1, l.Ko = l.gh.ac(f.gh) * n), l.xk = p, l.It = !0), a.open.push(l)
    }
    console.log("ran out of open nodes before finding path");f = null
  }
  a = a.Fl;
  for (d = 0; d <
    a.Ip.length; d++) a.oB.nx.push(a.Ip[d]);
  a.Ip.length = 0;
  a.Sw.length = 0;
  if (a = f) {
    g = new Hg(b);
    h = new Hg(c);
    l = new Kg(b, g, c, h);
    b.Nc.push(g);
    c.Nc.push(h);
    g.Yk = l;
    h.Yk = l;
    for (f = 0; f < a.length; f++)
      if (d = a[f], !yg(b, d.T, d.U) && !yg(c, d.T, d.U)) {
        if (yg(c, d.T, d.U)) break;
        zg(b, d.T, d.U) ? (p = g, s = d.T, n = d.U, p.wj = s, p.xj = n, p.me = s * w.B, p.ne = n * w.B, g.Ho = d.T != a[f + 1].T) : zg(c, d.T, d.U) && (p = h, s = d.T, n = d.U, p.wj = s, p.xj = n, p.me = s * w.B, p.ne = n * w.B, h.Ho = d.T != a[f - 1].T);
        l.Sk.push(d)
      } b = l
  } else b = null;
  return b
};

function Yg(a, b, c, d, f) {
  this.wa = d;
  this.fl = a;
  this.Nj = b;
  this.G = c;
  this.Aj = f;
  this.iB = Zg;
  this.Ow = $g;
  this.xA = ah;
  this.wA = 15;
  this.DA = 8;
  this.Pa = [];
  this.gd = [];
  this.tf = this.Ce = null;
  this.Xp = this.Zo = 0
}
e = Yg.prototype;
e.rw = function() {
  this.Xp = this.Zo = 0;
  this.Pa.length = 0;
  this.gd.length = 0;
  this.tf = this.Ce = null;
  a: {
    var a = this.Ow + ma(this.wa, this.xA - this.Ow),
      b, c, d = this.DA,
      f = this.wA,
      g, h, l = 0;
    for (b = 0; b < a; b++) {
      g = d + ma(this.wa, f - d);
      h = d + ma(this.wa, f - d);
      c = new tg(1 + ma(this.wa, this.fl - g - 1), 1 + ma(this.wa, this.Nj - h - 1), g, h, 0);
      for (l = 0; bh(this, c);) {
        var n = c,
          p = 1 + ma(this.wa, this.fl - g - 1),
          s = 1 + ma(this.wa, this.Nj - h - 1);
        n.ia = p;
        n.ja = s;
        l++;
        if (15 < l) break a
      }
      g = this.Xp++;
      c.fk = g;
      this.Pa.push(c);
      g = c;
      this.yx(g);
      h = void 0;
      for (h = 0; 3 > h; h++) 0.5 > this.wa.random() ?
        (this.shiftLeft(g), this.gt(g)) : (this.gt(g), this.shiftLeft(g));
      c.Bq(this.G)
    }
  }
  return this.ru() ? this.uu() ? !0 : (console.log("failed to create stairs."), !1) : !1
};
e.ru = function() {
  var a, b, c, d = [],
    f, g, h = new Wg(this.fl, this.Nj, this.G);
  for (a = 1; a < this.Pa.length; a++) {
    b = this.Pa[a];
    d.length = 0;
    c = ch(this, this.Pa[a - 1], d, b);
    g = Date.now();
    f = Xg(h, b, c);
    if (!f) return a = Date.now(), console.log("Failed to generate hallway in " + (a - g) + " millis"), !1;
    g = this.Zo++;
    f.Or = g;
    this.gd.push(f);
    f.Bq(this.G);
    c.ro.push(b);
    b.ro.push(c)
  }
  return !0
};
e.uu = function() {
  for (var a = this.Pa[ma(this.wa, this.Pa.length)], b = this.Pa[ma(this.wa, this.Pa.length)]; b === a;) b = this.Pa[ma(this.wa, this.Pa.length)];
  var c = !1;
  w.Mc ? (c = w.Mc, c = c.ri >= c.rs - 1) : w.le && (c = !0);
  c = c ? !this.Aj : this.Aj;
  this.Ce = this.to(a, !this.Aj);
  this.tf = this.to(b, c);
  return null != this.Ce && null != this.tf
};
e.to = function(a, b) {
  var c;
  0.5 > this.wa.random() ? (c = dh(this, a, b)) || (c = eh(this, a, b)) : (c = eh(this, a, b)) || (c = dh(this, a, b));
  return c ? a.Za = c : null
};

function dh(a, b, c) {
  var d = b.Nc,
    f = 0,
    g, h, l = b.ja - 1;
  h = b.ia + ma(a.wa, b.rb);
  for (g = !a.dl(d, h, l); !g && 6 > f;) f++, h = b.ia + ma(a.wa, b.rb), g = !a.dl(d, h, l);
  if (!g) return null;
  a = new Ig(b);
  a.Fq = !1;
  Jg(a, h, l);
  a.sq = c;
  return a
}

function eh(a, b, c) {
  var d = b.Nc,
    f = 0,
    g, h = b.ia - 1,
    l;
  l = b.ja + ma(a.wa, b.qb);
  for (g = !a.dl(d, h, l); !g && 6 > f;) f++, l = b.ja + ma(a.wa, b.qb), g = !a.dl(d, h, l);
  if (!g) return null;
  a = new Ig(b);
  a.Fq = !0;
  Jg(a, h, l);
  a.sq = c;
  return a
}
e.dl = function(a, b, c) {
  var d;
  for (d = 0; d < a.length; d++)
    if (1 >= Math.abs(a[d].wj - b) && 1 >= Math.abs(a[d].xj - c)) return !0;
  return !1
};

function ch(a, b, c, d) {
  c.push(b);
  var f = b.ro;
  if (0 === f.length) return b;
  var g = b.Ud(d),
    h, l, n;
  for (n = 0; n < f.length; n++) h = f[n], 0 <= c.indexOf(h) || h === d || (h = ch(a, h, c, d), l = h.Ud(d), l < g && (g = l, b = h));
  return b
}
e.yx = function(a) {
  var b, c;
  for (b = !0; b;) {
    b = a.ia;
    c = a.ja;
    if (1 === b && 1 === c) break;
    a.yx();
    if (bh(this, a)) {
      var d = a;
      d.ia = b;
      d.ja = c;
      b = !1
    } else b = !0
  }
};
e.shiftLeft = function(a) {
  var b, c;
  for (b = !0; b;) {
    b = a.ia;
    c = a.ja;
    if (1 === b) break;
    a.shiftLeft();
    if (bh(this, a)) {
      var d = a;
      d.ia = b;
      d.ja = c;
      b = !1
    } else b = !0
  }
};
e.gt = function(a) {
  var b, c;
  for (b = !0; b;) {
    b = a.ia;
    c = a.ja;
    if (1 === c) break;
    a.gt();
    if (bh(this, a)) {
      var d = a;
      d.ia = b;
      d.ja = c;
      b = !1
    } else b = !0
  }
};

function bh(a, b) {
  var c, d;
  for (c = 0; c < a.Pa.length; c++) {
    d = a.Pa[c];
    var f;
    if (f = b !== d) f = a.iB, f = !(b.ia + b.rb + f < d.ia || b.ia > d.ia + d.rb + f || b.ja + b.qb + f < d.ja || b.ja > d.ja + d.qb + f);
    if (f) return !0
  }
  return !1
};

function fh(a, b, c, d) {
  this.wa = d;
  this.fl = a;
  this.Nj = b;
  this.G = c;
  this.iB = 5;
  this.Ow = 4;
  this.xA = 9;
  this.wA = 18;
  this.DA = 6;
  this.Pa = [];
  this.gd = [];
  this.tf = this.Ce = null;
  this.Xp = this.Zo = 0
}
e = fh.prototype;
e.rw = function() {
  this.Xp = this.Zo = 0;
  this.Pa.length = 0;
  this.gd.length = 0;
  this.tf = this.Ce = null;
  gh(this, 1, 1, 15, 15, 1);
  gh(this, 51, 1, 15, 15, 1);
  gh(this, 56, 31, 5, 5, 3);
  gh(this, 51, 46, 15, 15, 1);
  gh(this, 1, 46, 15, 15, 1);
  gh(this, 1, 69, 15, 15, 2);
  gh(this, 27, 74, 5, 5, 3);
  this.ru();
  this.uu()
};

function gh(a, b, c, d, f, g) {
  b = new tg(b, c, d, f, g);
  c = a.Xp++;
  b.fk = c;
  a.Pa.push(b);
  b.Bq(a.G)
}
e.ru = function() {
  var a, b, c, d, f = new Wg(this.fl, this.Nj, this.G);
  for (a = 1; a < this.Pa.length; a++)
    if (b = this.Pa[a - 1], c = this.Pa[a], d = Xg(f, b, c)) {
      var g = this.Zo++;
      d.Or = g;
      this.gd.push(d);
      d.Bq(this.G);
      c.ro.push(b);
      b.ro.push(c)
    } else console.log("failed to generate hallway. bummer.")
};
e.uu = function() {
  var a = this.Pa[this.Pa.length - 1];
  this.Ce = this.to(this.Pa[0], !1);
  this.tf = this.to(a, !1)
};
e.to = function(a, b) {
  var c = new Ig(a),
    d = a.Nc,
    f, g;
  if (0.5 > Math.random()) {
    f = a.ia - 1;
    for (g = a.ja + ma(this.wa, a.qb); this.dl(d, f, g);) g = a.ja + ma(this.wa, a.qb);
    c.Fq = !0
  } else {
    g = a.ja - 1;
    for (f = a.ia + ma(this.wa, a.rb); this.dl(d, f, g);) f = a.ia + ma(this.wa, a.rb);
    c.Fq = !1
  }
  Jg(c, f, g);
  c.sq = b;
  return a.Za = c
};
e.dl = function(a, b, c) {
  var d;
  for (d = 0; d < a.length; d++)
    if (1 >= Math.abs(a[d].wj - b) && 1 >= Math.abs(a[d].xj - c)) return !0;
  return !1
};

function hh() {
  this.yh = new Za;
  this.wa = new ga(3)
}
hh.prototype.Xw = function(a) {
  var b = a.ia,
    c = a.ja - 1;
  a = b + 1 + ma(this.wa, b + a.rb - 1 - b - 2);
  t(this.yh, a, c);
  return this.yh
};
hh.prototype.Zw = function(a) {
  var b = a.ia - 1,
    c = a.ja;
  a = c + 1 + ma(this.wa, c + a.qb - 1 - c - 2);
  t(this.yh, b, a);
  return this.yh
};

function ih() {
  this.Li = this.Ki = 0;
  this.rc = this.sc = 120;
  this.G = null;
  this.Pa = [];
  this.gd = [];
  this.tf = this.Ce = null;
  this.sp = 0
}

function Jd(a, b, c, d) {
  var f = w.Ba;
  f.sp = a;
  var g = new ga(a);
  f.Pa.length = 0;
  f.gd.length = 0;
  f.Ce = null;
  f.tf = null;
  f.G ? jh(f) : f.Aw();
  if (11 === b) c = new fh(f.rc, f.sc, f.G, g), c.rw();
  else
    for (a = 0, c = new Yg(f.rc, f.sc, f.G, g, c); !c.rw();) console.log("Level generation failed for seed: " + f.sp + " attempt: " + a), a++, f.sp++, new ga(f.sp), jh(f);
  f.Pa = c.Pa;
  f.gd = c.gd;
  f.Ce = c.Ce;
  f.tf = c.tf;
  c = od(b);
  for (b = 0; b < f.Pa.length; b++) f.Pa[b].xx(c, f.G);
  for (b = 0; b < f.gd.length; b++) f.gd[b].xx(c, f.G);
  $d();
  b = w.ff;
  0 < b.pe.length && (b.pe.length = 0);
  b = w.Uh;
  0 <
    b.kf.length && (b.kf.length = 0);
  b = w.Ti;
  0 < b.Hf.length && (b.Hf.length = 0);
  b = w.th;
  0 < b.Mn.length && (b.Mn.length = 0, b.Dt = {});
  kh();
  Id();
  oc();
  lh();
  if (d) {
    Ag(f.Ce.$d);
    d = f.Ce.$d;
    c = Qd();
    for (b = 0; b < c.length; b++) {
      var g = c[b],
        h = d;
      a = g.p;
      a.cd = null;
      a.w = h;
      g.Y = Sd;
      Rd(a);
      g = h.Za;
      t(a.u, g.tq, g.uq)
    }
    mh(d);
    nh(f.Ce.$d)
  }
}
ih.prototype.Aw = function() {
  var a, b, c, d, f;
  this.G = [];
  for (b = 0; b < this.rc; b++) {
    c = [];
    d = b * w.B;
    for (a = 0; a < this.sc; a++) f = a * w.B, c.push(new qg(b, a, d, f));
    this.G.push(c)
  }
};

function jh(a) {
  var b, c, d;
  for (c = 0; c < a.rc; c++)
    for (d = a.G[c], b = 0; b < a.sc; b++) {
      var f = d[b];
      f.Jn = null;
      f.Yf = null;
      f.bt = null;
      f.Rb = rg;
      f.Pq = null;
      f.li = 0
    }
}
ih.prototype.hb = function(a, b) {
  return 0 > a || a >= this.rc || 0 > b || b >= this.sc ? null : this.G[a][b]
};
ih.prototype.Ai = function(a) {
  return a / w.B | 0
};
ih.prototype.Bi = function(a) {
  return a / w.B | 0
};

function oh(a) {
  var b = w.Ba,
    c;
  for (c = 0; c < b.Pa.length; c++)
    if (b.Pa[c].fk === a) return b.Pa[c];
  return null
};

function ph(a, b) {
  this.text = a;
  this.SE = b;
  this.De = this.yt = this.xt = 0;
  var c = 1 + k(1);
  this.GD = 0.5 > Math.random() ? -c : c;
  this.HD = -1 + -k(1);
  this.pw = !0
}
ph.prototype.oy = function() {
  this.pw && (0.5 > Math.random() && (this.xt += this.GD), this.yt += this.HD);
  this.pw = !this.pw;
  this.De++;
  return 60 <= this.De
};

function qh() {
  this.al = [];
  this.dA = this.cA = 20
}

function rh(a, b) {
  var c = w.pc;
  0 < b && sh(c, a, "-" + b, "#FF4444")
}

function sh(a, b, c, d) {
  if (!w.ig) {
    c = new ph(c, d);
    b = b.p;
    if (w.wb) {
      d = b.dc();
      var f = b.ec();
      b = w.Sf + (d - w.S.he - (f - w.S.ie)) + a.cA;
      d = w.Tf + 0.5 * (d - w.S.he + (f - w.S.ie)) + a.dA
    } else d = b.Ob(), f = b.Pb(), b = th(d, f) + a.cA, d = uh(d, f) + a.dA;
    c.xt = b;
    c.yt = d;
    a.al.push(c)
  }
}
qh.prototype.oy = function() {
  var a, b = !1;
  for (a = 0; a < this.al.length; a++) this.al[a].oy() && (b = !0);
  if (b)
    for (a = this.al.length - 1; 0 <= a; a--) 60 <= this.al[a].De && this.al.splice(a, 1)
};

function vh() {
  this.Ar = 0;
  this.fw = "";
  this.ym = !0;
  this.du = !1
}

function Id() {
  var a = w.i.Xg;
  a.Ar = 0;
  a.fw = "";
  a.ym = !0;
  a.du = !1
}

function wh(a, b) {
  var c = w.i.Xg;
  c.Ar++;
  c.fw = a;
  c.ym = !1;
  c.du = b
}
vh.prototype.ol = function() {
  if (1 > xh().length) {
    this.ym = !0;
    w.i.aa.es();
    kh();
    Kd(yh);
    var a, b;
    for (a = 0; a < w.i.D.length; a++) b = w.i.D[a].Ja, b.Kf && (b.Kf = !1, zh(b))
  }
};

function mh(a) {
  var b = w.lD;
  if (w.i.Xg.ym) {
    var c = a.Yp;
    if (0 === c)
      if (randomBossEncounterPotion.t && 0.2 > Math.random()) Rh(b, a);
      else {
        var c = E.Ym.t,
          d = Math.max(E.Pj.t, c),
          c = c + k(d - c),
          c = c + moreMonstersPotion.t;
        if (0 < c) {
          for (var d = w.ob, f = d.hd + k(1 + d.fc - d.hd), d = Th(d, f), d = d[k(d.length)], f = d.xd, b = b.dn.Vk(d.nE) + " (Lvl. " + f + ")", f = 0; f < c; f++) {
            var g = w.Gf,
              h = a,
              l = d,
              n = new Uh("Monster", Vh, 12, Wh, null),
              p = n.K;
            n.ee = l.ll;
            n.gq(l);
            p.Eb = l.xd;
            n.Fh = new Xh(h, Yh);
            n.p.w = h;
            frailMonstersPotion.t ? (p.sd.Pc = m(0.7 * l.Gp), p.je.Pc = m(0.7 * l.Ep), p.xe.Pc = m(0.7 * l.Fp), p.Ae.Pc = m(0.7 * l.Hp), p.Jb.Pc = m(0.7 * l.$o), p.Sa =
              m(m(0.7 * $h(p.Jb)))) : (p.sd.Pc = l.Gp, p.je.Pc = l.Ep, p.xe.Pc = l.Fp, p.Ae.Pc = l.Hp, p.Jb.Pc = l.$o, p.Sa = m($h(p.Jb)));
            var s = ug(h) + w.B,
              l = wg(h) + w.B,
              p = xg(h) - w.B,
              h = s + k(vg(h) - w.B - s),
              l = l + k(p - l);
            t(n.p.u, h, l);
            g.Pi.push(n)
          }
          wh(b, !1)
        }
      }
    else 1 === c ? (c = Math.max(E.Pj.xf, E.Ym.t), d = Math.max(E.Pj.t, c), d = c + k(d - c), c = w.ob.fc, d += moreMonstersPotion.t, ai(d, a), a = w.le ? bi(b.dn, w.le.mi) : bi(b.dn, "Unknown Castle"), wh(a + " (Lvl. " + c + ")", !1)) : 2 === c && Rh(b, a)
  }
}

function Rh(a, b) {
  var c = ci(w.i.da),
    d;
  d = w.le ? di(a.dn, w.le.mi) : w.Mc ? di(a.dn, w.Mc.Eo) : di(a.dn, "Unknown Castle");
  var f = ei[k(ei.length)];
  // NOTE: Possible has something to do with the text showing the dungeon name and the dungeon level at the top of the screen
  d = d + " (Lvl. " + c + ")";
  var g = w.Gf,
    h = new fi(gi.Ka, f.d, c),
    f = new Uh(gi.za, 4, gi.pa, gi, null),
    l = f.K;
  f.gq(h);
  f.ee = h.ll;
  h = hi(gi.nb());
  f.Fh = h;
  ii(f, c);
  l.Eb = c;
  ji(l, c, gi.Ma);
  if (gi.eu)
    for (c = 0; c < gi.eu.length; c++) ki(f, new li(gi.eu[c]));
  c = f.p;
  c.w = b;
  c.cd = null;
  var n = ug(b) + w.B,
    l = wg(b) + w.B,
    h = xg(b) - w.B,
    n = n + k(vg(b) - w.B - n),
    l = l + k(h - l);
  t(c.u, n, l);
  mi(f, gi.WC);
  g.Pi.push(f);
  g = Math.max(E.Pj.xf, E.Ym.t);
  f = Math.max(E.Pj.t, g);
  g += k(f - g);
  g += moreMonstersPotion.t;
  ai(g, b);
  wh(d, !0)
}

function ai(a, b) {
  var c, d = w.ob.fc,
    f;
  if (0.5 > Math.random())
    for (c = 0; c < a; c++) f = ni[k(ni.length)], f = oi(f, d, b), w.Gf.Pi.push(f);
  else
    for (f = ni[k(ni.length)], c = 0; c < a; c++) {
      var g = oi(f, d, b);
      w.Gf.Pi.push(g)
    }
};

function pi() {
  this.Pf = []
}

function Qd() {
  return w.$h.Pf
}

function qi(a) {
  var b = w.$h;
  return a.Ja.bi ? ri(a) ? xh() : b.Pf : ri(a) ? b.Pf : xh()
}

function si(a) {
  var b = w.$h;
  return ri(a) ? xh() : b.Pf
}
pi.prototype.J = function() {
  0 < this.Pf.length && (console.log("teams array in invalid state on party creation"), this.Pf.length = 0);
  var a = w.i.D,
    b;
  for (b = 0; b < a.length; b++) this.Pf.push(a[b])
};
pi.prototype.Tt = function(a) {
  this.Pf.push(a)
};

function fi(a, b, c) {
  this.dE = a;
  this.nE = ra(a, "y") ? a.substring(0, a.length - 1) + "ies" : ra(a, "Man") ? a.substring(0, a.length - 3) + "Men" : ra(a, "fish") ? a : a + "s";
  this.d = b;
  this.xd = c;
  this.ll = w.fh.v(b);
  this.$o = this.Sj = this.Hp = this.Fp = this.Ep = this.Gp = this.No = this.ek = this.ml = this.xq = 0;
  ti(this)
}
fi.prototype.Vk = function() {
  return this.dE
};

function ui(a) {
  a.xq++;
  a.ml++;
  a.ml >= a.ek && 5 > a.Sj && (a.ml -= a.ek, ti(a))
}

function ti(a) {
  if (!(5 <= a.Sj)) {
    a.Sj++;
    a.ek += vi;
    var b = 10 * (a.xd - 1) + a.Sj;
    a.$o = Ia(b, wi, 1);
    a.No = Ia(b, xi, 1);
    a.Gp = Ia(b, yi, 1);
    a.Ep = Ia(b, zi, 1);
    a.Fp = Ia(b, Ai, 1);
    a.Hp = Ia(b, Bi, 1)
  }
};

function Ci() {
  this.Pw = "Addicted;Alarming;Addled;Agile;Aggressive;Apathetic;Angry;Antagonistic;Arch;Astute;Adversarial;Abhorrent;Abominable;Bloody;Brooding;Brave;Brazen;Broken;Base;Baleful;Confrontational;Clever;Cursed;Condemnable;Cryptic;Creepy;Craven;Caustic;Chaotic;Celestial;Dark;Dread;Disgruntled;Disgraced;Destitute;Disguised;Drunk;Dire;Dastardly;Disgusting;Disquieting;Dishonored;Depth Dwelling;Distinguished;Desperate;Detestable;Excommunicated;Excited;Enterprising;Eerie;Frost;Fire;Frightening;Forbidding;Fun-loving;Fiendish;Friendly;Fearsome;Furry;Fallen;Feeble;Frozen;Fabled;Fell;Futuristic;Frantic;Frenzied;Fearsome;Foreboding;Formidable;Forgotten;Ghoulish;Gruesome;Gloom;Horrendous;Hypnotized;Hateful;Improper;Impure;Impeccable;Intoxicated;Intolerable;Intelligent;Impolite;Imperfect;Incarcerated;Inflamed;Loathsome;Monumental;Menacing;Merciless;Massive;Magnanimous;Nightmarish;Organized;Orwellian;Ornery;Odious;Overqualified;Ostentatious;Opportunistic;Perilous;Predatory;Phase;Productive;Playful;Seductive;Scary;Spine-chilling;Special Needs;Soul Devouring;Sultry;Swollen;Serious;Secret;Shadow;Reptilian;Revolting;Repugnant;Threatening;Terrible;Troubling;Towering;Unhappy;Uncooperative;Unhealthy;Unhelpful;Untoward;Unholy;Unethical;Unprincipled;Unscrupulous;Undead;Were;Zombified".split(";");
  this.XC = "Baron Boss Caliph Chief Dictator Director Emperor King Kingpin Lord Magnate Monarch Master Overlord Overseer Prince President Potentate Sovereign Sultan Ruler".split(" ");
  this.oD = "Abandoned Baleful Broken Burning Betrayed Barren Bitter Blood Bloody Besieged Corrupted Crystal Cold Dead Deep Dark Dusty Distant Disturbing Desolate Demented Damp Dumpy Disgusting Disturbing Demented Ebony Frozen Friendless Forgotten Forbidden Feared Golden Gloomy Humid Infected Infested Lost Merciless Mystical Misty Nether Nice Nearby Nasty Naughty Normal North Pale Polluted Shattered Shadow Secret Shrouded Suffering Sorrowful Tormented Tortured Unholy Unknown Unnamed Vile Whispered".split(" ");
  this.mE = "Academy;Bog;Barrow;Cavern;Crypt;City;Cave;Canyon;Darkness;Domain;Dungeon;Dimension;District;Dreams;Empire;Forest;Factory;Graveyard;Grotto;Hell;Hollow;Hellscape;Inferno;Kingdom;Land;Library;Marsh;Mausoleum;Mortuary;Mudflats;Neighborhood;Planes;Province;Portal;Planet;Realm;Past;Pit;Palace;River;River Basin;Jungle;Swamp;Slaughterhouse;Suburbs;Tundra;Terrain;Tomb;Temple;Tower;Underground".split(";")
}
Ci.prototype.mn = function(a) {
  return a[k(a.length)]
};

function bi(a, b) {
  return a.mn(a.Pw) + " Guardians of " + b
}

function di(a, b) {
  return a.mn(a.Pw) + " " + a.mn(a.XC) + " of " + b
}
Ci.prototype.Vk = function(a) {
  return 0.5 > Math.random() ? this.mn(this.Pw) + " " + a : a + " of the " + this.mn(this.oD) + " " + this.mn(this.mE)
};

function Th(a, b) {
  b < a.hd && console.log("getMonsterTypesForLevel. monsterLevel (" + b + ") less than min unlocked level: " + a.hd);
  b > a.fc + 1 && console.log("getMonsterTypesForLevel. monsterLevel (" + b + ") greater than max unlocked level: " + a.fc);
  var c = b + "",
    d = a.en[c];
  if (!d) {
    for (var d = [], f = [], g, h = 0; 20 > d.length;) g = a.n[k(a.n.length)], -1 < f.indexOf(g) || (f.push(g), d.push(new fi(g.o, g.d, b)), h++);
    d.sort(a.HE);
    a.en[c] = d
  }
  return d
};

function Di() {
  this.Pi = [];
  this.Og = [];
  this.aE = 50
}

function xh() {
  return w.Gf.Pi
}

function lh() {
  var a = w.Gf;
  0 != a.Pi.length && (a.Pi.length = 0);
  0 != a.Og.length && (a.Og.length = 0)
}
Di.prototype.ol = function(a) {
  if (a) {
    var b = this.Pi.indexOf(a); - 1 < b && this.Pi.splice(b, 1);
    for (this.Og.push(a); this.Og.length > this.aE;) this.Og.shift()
  }
};

function Eg(a, b, c, d) {
  this.Xl = a;
  this.Xo = b;
  this.Yo = c;
  this.vD = d;
  this.gc = !1;
  this.Zc = null;
  this.ph = 0
}
Eg.prototype.oh = function(a) {
  this.gc = a
};
Eg.prototype.Re = function(a) {
  this.Zc = a
};
Eg.prototype.Ud = function() {
  return this.ph
};
Eg.prototype.Se = function(a) {
  this.ph = a
};

function Ei() {
  this.pe = [];
  this.xw = this.xw = this.Sz = null
}
Ei.prototype.zl = function() {
  var a;
  for (a = 0; a < this.pe.length; a++) this.pe[a].Re(null), this.pe[a].Se(0)
};

function Fi(a) {
  var b = w.ff;
  a = b.pe.indexOf(a); - 1 < a && b.pe.splice(a, 1)
};

function Gi(a, b, c, d, f) {
  this.zq = a;
  this.Aq = b;
  this.Nn = c;
  this.Kg = !1;
  this.Vy = f ? d.xh.closed : d.hh.closed;
  this.PA = f ? d.xh.Ec : d.hh.Ec;
  this.Mf = d.Mf;
  this.VE = f;
  this.BC = d;
  this.el = !1
}

function Hi(a, b) {
  if (a.Kg = b) a.el = !1, w.i.da.hq(null)
};

function Ii() {
  this.Mn = [];
  this.Dt = {};
  this.ve = [];
  this.yh = new Za
}

function nh(a) {
  var b = w.th,
    c = 0 < xh().length;
  if (!Ji(b, a)) {
    if (3 != a.Yp) {
      if (!c && 2 > a.Nc.length) return;
      c = E.Et.t / 100;
      if (Math.random() > c) return
    }
    var c = b.ve[k(b.ve.length)],
      d = 0.5 > Math.random(),
      f, g;
    f = !1;
    for (var h = 0; !f && 10 > h;) g = d ? b.Zw(a) : b.Xw(a), (f = Cg(a, g)) || (g = null), h++;
    (f = g) ? (g = f.T * w.B, f = f.U * w.B, c.jh || (d ? g += w.B : f += w.B), a = new Gi(g, f, a, c, d), b.Mn.push(a), b.Dt[a.Nn.fk] = a) : console.log("failed to find treasure chest location.")
  }
}
Ii.prototype.Xw = function(a) {
  var b = a.ja;
  a = a.ia + k(a.rb);
  t(this.yh, a, b - 1);
  return this.yh
};
Ii.prototype.Zw = function(a) {
  var b = a.ia;
  a = a.ja + k(a.qb);
  t(this.yh, b - 1, a);
  return this.yh
};

function Ji(a, b) {
  return b ? a.Dt[b.fk] : null
};
var Ki = {
    X: 13,
    Te: "spritesheet/SpellFXAnim2.png",
    vd: "Bubbles",
    Od: 1,
    Pd: !1,
    Qd: 100,
    cf: "Stunned"
  },
  Li = {
    0: {
      X: 0,
      Te: "spritesheet/SpellFXAnim4.png",
      vd: "Sleep",
      Od: 7,
      Pd: !0,
      Qd: 100,
      cf: "Asleep"
    },
    1: {
      X: 1,
      Te: "spritesheet/SpellFXAnim1.png",
      vd: "Spider Web",
      Od: 7,
      Pd: !0,
      Qd: 100,
      cf: "Held"
    },
    3: {
      X: 3,
      Te: "spritesheet/SpellFXAnim4.png",
      vd: "Blind Eye Blink",
      Od: 7,
      Pd: !0,
      Qd: 100,
      cf: "Blind"
    },
    4: {
      X: 4,
      Te: "spritesheet/SpellFXAnim4.png",
      vd: "Red Eye Blink",
      Od: 6,
      Pd: !0,
      Qd: 100,
      cf: "Turned"
    },
    5: {
      X: 5,
      Te: "spritesheet/SpellFXAnim3.png",
      vd: "Shield",
      Od: 6,
      Pd: !1,
      Qd: 700,
      cf: "Increased Armor"
    },
    6: {
      X: 6,
      Te: "spritesheet/SpellFXAnim3.png",
      vd: "Arm Flex",
      Od: 0,
      Pd: !1,
      Qd: 700,
      cf: "Increased Damage"
    },
    7: {
      X: 7,
      Te: "spritesheet/SpellFXAnim4.png",
      vd: "Eagle",
      Od: 0,
      Pd: !1,
      Qd: 700,
      cf: "Increased Attack Rating"
    },
    8: {
      X: 8,
      Te: "spritesheet/SpellFXAnim4.png",
      vd: "Armor",
      Od: 3,
      Pd: !1,
      Qd: 700,
      cf: "Increased Defense Rating"
    },
    9: {
      X: 9,
      Te: "spritesheet/SpellFXAnim3.png",
      vd: "Super Speed",
      Od: 0,
      Pd: !1,
      Qd: 100,
      cf: "Speedy"
    },
    10: {
      X: 10,
      Te: "spritesheet/SpellFXAnim3.png",
      vd: "Target",
      Od: 8,
      Pd: !1,
      Qd: 50,
      cf: "Monster Target"
    },
    11: {
      X: 11,
      Te: "spritesheet/SpellFXAnim3.png",
      vd: "Color Spiral",
      Od: 8,
      Pd: !1,
      Qd: 50,
      cf: "Stealth Mode"
    },
    12: {
      X: 12,
      Te: "spritesheet/SpellFXAnim4.png",
      vd: "Totems",
      Od: 2,
      Pd: !1,
      Qd: 50,
      cf: "Enraged"
    }
  };
Li[13] = Ki;
Li[14] = {
  X: 14,
  Te: "spritesheet/SpellFXAnim2.png",
  vd: "Bubbles",
  Od: 1,
  Pd: !1,
  Qd: 10,
  cf: "Stunned"
};

function Mi(a) {
  Ni(a.K);
  Oi(a, a.ei);
  Oi(a, a.fi);
  Oi(a, a.gi);
  Oi(a, a.hi)
}

function Oi(a, b) {
  var c = b.Ha,
    d, f;
  for (f = 0; f < c.length; f++) d = c[f], d.Na() === Pi && d.He() && (d = d.Jr(), Qi(a, d.f, d.g))
}

function mi(a, b) {
  if (b && 0 !== b.length) {
    var c, d;
    Ni(a.K);
    for (d = 0; d < b.length; d++) c = b[d], Qi(a, c.f, c.g)
  }
}

function Qi(a, b, c) {
  a = a.K;
  switch (b) {
    case 1:
      a.wo += c;
      break;
    case 2:
      b = a.sd;
      b.wc += c;
      break;
    case 3:
      b = a.je;
      b.wc += c;
      break;
    case 4:
      b = a.xe;
      b.wc += c;
      break;
    case 5:
      b = a.Ae;
      b.wc += c;
      break;
    case 6:
      b = a.Jb;
      b.wc += c;
      break;
    case 7:
      b = a.Ke;
      b.wc += c;
      break;
    case 8:
      a.ap += c;
      break;
    case 9:
      a.pq += c;
      break;
    case 10:
      a.ao += c;
      break;
    case 11:
      a.Ts += c;
      break;
    case 13:
      a.Ps += c;
      break;
    case 12:
      a.Rs += c;
      break;
    case 14:
      a.Qs += c;
      break;
    case 15:
      a.Ss += c;
      break;
    case 16:
      a.xn += c;
      break;
    case 17:
      a.lm += c;
      break;
    case 18:
      a.Oj += c;
      break;
    case 19:
      a.Wn += c;
      break;
    case 21:
      a.ar += c;
      break;
    case 20:
      a.mr += c;
      break;
    case 27:
      a.Ft += c;
      break;
    case 22:
      a.Qq += c;
      break;
    case 25:
      a.ho += 1;
      break;
    case 23:
      a.Df += c;
      break;
    case 24:
      a.Wi += c;
      100 < a.Wi && (a.Wi = 100);
      break;
    case 26:
      a.gl += c;
      break;
    case 28:
      a.vt += c;
      break;
    case 29:
      a.nt += c;
      break;
    case 30:
      a.ku = c;
      break;
    case 31:
      a.lu = c;
      break;
    case 32:
      a.mu = c
  }
};
// NOTE: I'm guessing this is he skill tree stuff
var Ri = {
    c: "improvedDamageBarbarian1",
    title: "Improved Damage I",
    e: "10% Damage Bonus",
    g: 10,
    f: 2
  },
  Si = {
    c: "improvedDamageBarbarian2",
    title: "Improved Damage II",
    e: "10% Damage Bonus",
    g: 10,
    f: 2
  },
  Ti = {
    c: "improvedDamageBarbarian3",
    title: "Improved Damage III",
    e: "10% Damage Bonus",
    g: 10,
    f: 2
  },
  Ui = {
    c: "improvedArmorBarbarian1",
    title: "Improved Armor I",
    e: "10% Armor Bonus",
    g: 10,
    f: 3
  },
  Vi = {
    c: "improvedArmorBarbarian2",
    title: "Improved Armor II",
    e: "10% Armor Bonus",
    g: 10,
    f: 3
  },
  Wi = {
    c: "improvedArmorBarbarian3",
    title: "Improved Armor III",
    e: "10% Armor Bonus",
    g: 10,
    f: 3
  },
  Xi = {
    c: "improvedAttackRatingBarbarian1",
    title: "Improved Attack Rating I",
    e: "10% Attack Rating Bonus",
    g: 10,
    f: 4
  },
  Yi = {
    c: "improvedAttackRatingBarbarian2",
    title: "Improved Attack Rating II",
    e: "10% Attack Rating Bonus",
    g: 10,
    f: 4
  },
  Zi = {
    c: "improvedAttackRatingBarbarian3",
    title: "Improved Attack Rating III",
    e: "10% Attack Rating Bonus",
    g: 10,
    f: 4
  },
  $i = {
    c: "improvedDefenseRatingBarbarian1",
    title: "Improved Defense Rating I",
    e: "10% Defense Rating Bonus",
    g: 10,
    f: 5
  },
  aj = {
    c: "improvedDefenseRatingBarbarian2",
    title: "Improved Defense Rating II",
    e: "10% Defense Rating Bonus",
    g: 10,
    f: 5
  },
  bj = {
    c: "improvedDefenseRatingBarbarian3",
    title: "Improved Defense Rating III",
    e: "10% Defense Rating Bonus",
    g: 10,
    f: 5
  },
  lj = {
    c: "fasterAttacksBarbarian1",
    title: "Faster Attacks I",
    e: "Attack Cool-Down Reduction",
    g: 2,
    f: 10
  },
  mj = {
    c: "fasterAttacksBarbarian2",
    title: "Faster Attacks II",
    e: "Attack Cool-Down Reduction",
    g: 2,
    f: 10
  },
  nj = {
    c: "fasterAttacksBarbarian3",
    title: "Faster Attacks III",
    e: "Attack Cool-Down Reduction",
    g: 2,
    f: 10
  },
  oj = {
    c: "healthRegenerationBarbarian1",
    title: "Faster Health Regeneration I",
    e: "HP Regeneration Rate +1%",
    g: 1,
    f: 8
  },
  pj = {
    c: "healthRegenerationBarbarian2",
    title: "Faster Health Regeneration II",
    e: "HP Regeneration Rate +1%",
    g: 1,
    f: 8
  },
  qj = {
    c: "healthRegenerationBarbarian3",
    title: "Faster Health Regeneration III",
    e: "HP Regeneration Rate +1%",
    g: 1,
    f: 8
  },
  rj = {
    c: "spiritRegenerationBarbarian1",
    title: "Faster Spirit Regeneration I",
    e: "Spirit Regeneration Rate +1%",
    g: 1,
    f: 9
  },
  sj = {
    c: "spiritRegenerationBarbarian2",
    title: "Faster Spirit Regeneration II",
    e: "Spirit Regeneration Rate +1%",
    g: 1,
    f: 9
  },
  tj = {
    c: "improvedHealthBarbarian1",
    title: "Improved Health I",
    e: "Maximum Health +20%",
    g: 20,
    f: 6
  },
  uj = {
    c: "improvedHealthBarbarian2",
    title: "Improved Health II",
    e: "Maximum Health +20%",
    g: 20,
    f: 6
  },
  vj = {
    c: "improvedHealthBarbarian3",
    title: "Improved Health III",
    e: "Maximum Health +20%",
    g: 20,
    f: 6
  },
  wj = {
    c: "improvedSpiritBarbarian1",
    title: "Improved Spirit I",
    e: "Maximum Spirit +20%",
    g: 20,
    f: 7
  },
  xj = {
    c: "improvedSpiritBarbarian2",
    title: "Improved Spirit II",
    e: "Maximum Spirit +20%",
    g: 20,
    f: 7
  },
  yj = {
    c: "ignoreDamageBarbarian1",
    title: "Ignore Damage I",
    e: "Ignore 10% Of Enemy Damage",
    g: 10,
    f: 1
  },
  zj = {
    c: "ignoreDamageBarbarian2",
    title: "Ignore Damage II",
    e: "Ignore 10% Of Enemy Damage",
    g: 10,
    f: 1
  },
  Aj = {
    c: "ignoreDamageBarbarian3",
    title: "Ignore Damage III",
    e: "Ignore 10% Of Enemy Damage",
    g: 10,
    f: 1
  },
  Bj = {
    c: "criticalHitChanceBarbarian1",
    title: "Critical Hit Chance",
    e: "Critical Chance +5%",
    g: 5,
    f: 17
  },
  Cj = {
    c: "criticalHitChanceBarbarian2",
    title: "Critical Hit Chance",
    e: "Critical Chance +5%",
    g: 5,
    f: 17
  },
  Dj = {
    c: "criticalHitChanceBarbarian3",
    title: "Critical Hit Chance",
    e: "Critical Chance +5%",
    g: 5,
    f: 17
  },
  Ej = {
    c: "criticalHitChanceBarbarian4",
    title: "Critical Hit Chance",
    e: "Critical Chance +5%",
    g: 5,
    f: 17
  },
  Fj = {
    c: "improvedSledgeHammerBarbarian1",
    title: "Improved Sledge Hammer I",
    e: "Larger Area Affected",
    g: 1,
    f: 25
  },
  Gj = {
    c: "improvedSledgeHammerBarbarian2",
    title: "Improved Sledge Hammer II",
    e: "Larger Area Affected",
    g: 1,
    f: 25
  };
var Hj = {
    c: "improvedDamageFighter1",
    title: "Improved Damage I",
    e: "10% Damage Bonus",
    g: 10,
    f: 2
  },
  Ij = {
    c: "improvedDamageFighter2",
    title: "Improved Damage II",
    e: "10% Damage Bonus",
    g: 10,
    f: 2
  },
  Jj = {
    c: "improvedDamageFighter3",
    title: "Improved Damage III",
    e: "10% Damage Bonus",
    g: 10,
    f: 2
  },
  Kj = {
    c: "improvedArmorFighter1",
    title: "Improved Armor I",
    e: "10% Armor Bonus",
    g: 10,
    f: 3
  },
  Lj = {
    c: "improvedArmorFighter2",
    title: "Improved Armor II",
    e: "10% Armor Bonus",
    g: 10,
    f: 3
  },
  Mj = {
    c: "improvedArmorFighter3",
    title: "Improved Armor III",
    e: "10% Armor Bonus",
    g: 10,
    f: 3
  },
  Nj = {
    c: "improvedAttackRatingFighter1",
    title: "Improved Attack Rating I",
    e: "10% Attack Rating Bonus",
    g: 10,
    f: 4
  },
  Oj = {
    c: "improvedAttackRatingFighter2",
    title: "Improved Attack Rating II",
    e: "10% Attack Rating Bonus",
    g: 10,
    f: 4
  },
  Pj = {
    c: "improvedAttackRatingFighter3",
    title: "Improved Attack Rating III",
    e: "10% Attack Rating Bonus",
    g: 10,
    f: 4
  },
  Qj = {
    c: "improvedDefenseRatingFighter1",
    title: "Improved Defense Rating I",
    e: "10% Defense Rating Bonus",
    g: 10,
    f: 5
  },
  Rj = {
    c: "improvedDefenseRatingFighter2",
    title: "Improved Defense Rating II",
    e: "10% Defense Rating Bonus",
    g: 10,
    f: 5
  },
  Sj = {
    c: "improvedDefenseRatingFighter3",
    title: "Improved Defense Rating III",
    e: "10% Defense Rating Bonus",
    g: 10,
    f: 5
  },
  Tj = {
    c: "fasterAttacksFighter1",
    title: "Faster Attacks I",
    e: "Attack Cool-Down Reduction",
    g: 2,
    f: 10
  },
  Uj = {
    c: "fasterAttacksFighter2",
    title: "Faster Attacks II",
    e: "Attack Cool-Down Reduction",
    g: 2,
    f: 10
  },
  Vj = {
    c: "fasterAttacksFighter3",
    title: "Faster Attacks III",
    e: "Attack Cool-Down Reduction",
    g: 2,
    f: 10
  },
  Wj = {
    c: "healthRegenerationFighter1",
    title: "Faster Health Regeneration I",
    e: "HP Regeneration Rate +1%",
    g: 1,
    f: 8
  },
  Xj = {
    c: "healthRegenerationFighter2",
    title: "Faster Health Regeneration II",
    e: "HP Regeneration Rate +1%",
    g: 1,
    f: 8
  },
  Yj = {
    c: "healthRegenerationFighter3",
    title: "Faster Health Regeneration III",
    e: "HP Regeneration Rate +1%",
    g: 1,
    f: 8
  },
  Zj = {
    c: "improvedHealthFighter1",
    title: "Improved Health I",
    e: "Maximum Health +20%",
    g: 20,
    f: 6
  },
  ak = {
    c: "improvedHealthFighter2",
    title: "Improved Health II",
    e: "Maximum Health +20%",
    g: 20,
    f: 6
  },
  bk = {
    c: "improvedHealthFighter3",
    title: "Improved Health III",
    e: "Maximum Health +20%",
    g: 20,
    f: 6
  },
  ck = {
    c: "ignoreDamageFighter1",
    title: "Tank Mode",
    e: "Ignore 10% Of Enemy Damage",
    g: 10,
    f: 1
  },
  dk = {
    c: "ignoreDamageFighter2",
    title: "Tank Tank Tank",
    e: "Ignore 10% Of Enemy Damage",
    g: 10,
    f: 1
  },
  ek = {
    c: "ignoreDamageFighter3",
    title: "Pure Tank",
    e: "Ignore 10% Of Enemy Damage",
    g: 10,
    f: 1
  },
  fk = {
    c: "ignoreDamageFighter4",
    title: "Main Battle Tank",
    e: "Ignore 10% Of Enemy Damage",
    g: 10,
    f: 1
  },
  gk = {
    c: "criticalHitChanceFighter1",
    title: "Critical Hit Chance",
    e: "Critical Chance +5%",
    g: 5,
    f: 17
  },
  hk = {
    c: "criticalHitChanceFighter2",
    title: "Critical Condition",
    e: "Critical Chance +5%",
    g: 5,
    f: 17
  },
  ik = {
    c: "criticalHitChanceFighter3",
    title: "Frequent Critical Hits",
    e: "Critical Chance +5%",
    g: 5,
    f: 17
  },
  jk = {
    c: "criticalHitChanceFighter4",
    title: "Likely Critical Hit",
    e: "Critical Chance +5%",
    g: 5,
    f: 17
  },
  kk = {
    c: "attacksPerTurnFighter1",
    title: "Mean Backhand",
    e: "Max Possible Attacks/Turn + 1",
    g: 1,
    f: 18
  },
  lk = {
    c: "attacksPerTurnFighter2",
    title: "Whirlwind Attack",
    e: "Max Possible Attacks/Turn + 1",
    g: 1,
    f: 18
  },
  mk = {
    c: "attacksPerTurnFighter3",
    title: "Impressive Attack",
    e: "Max Possible Attacks/Turn + 1",
    g: 1,
    f: 18
  },
  nk = {
    c: "additionalAttackPercentFighter1",
    title: "Additional Attack Chance",
    e: "+20% Additional Attack Chance",
    g: 20,
    f: 19
  },
  ok = {
    c: "additionalAttackPercentFighter2",
    title: "Additional Attack Chance",
    e: "+20% Additional Attack Chance",
    g: 20,
    f: 19
  },
  pk = {
    c: "additionalAttackPercentFighter3",
    title: "Additional Attack Chance",
    e: "+20% Additional Attack Chance",
    g: 20,
    f: 19
  };
var qk = {
    c: "improvedDamageNinja1",
    title: "Improved Damage I",
    e: "10% Damage Bonus",
    g: 10,
    f: 2
  },
  rk = {
    c: "improvedDamageNinja2",
    title: "Improved Damage II",
    e: "10% Damage Bonus",
    g: 10,
    f: 2
  },
  sk = {
    c: "improvedDamageNinja3",
    title: "Improved Damage III",
    e: "10% Damage Bonus",
    g: 10,
    f: 2
  },
  tk = {
    c: "improvedArmorNinja1",
    title: "Improved Armor I",
    e: "10% Armor Bonus",
    g: 10,
    f: 3
  },
  uk = {
    c: "improvedArmorNinja2",
    title: "Improved Armor II",
    e: "10% Armor Bonus",
    g: 10,
    f: 3
  },
  vk = {
    c: "improvedArmorNinja3",
    title: "Improved Armor III",
    e: "10% Armor Bonus",
    g: 10,
    f: 3
  },
  wk = {
    c: "improvedAttackRatingNinja1",
    title: "Improved Attack Rating I",
    e: "10% Attack Rating Bonus",
    g: 10,
    f: 4
  },
  xk = {
    c: "improvedAttackRatingNinja2",
    title: "Improved Attack Rating II",
    e: "10% Attack Rating Bonus",
    g: 10,
    f: 4
  },
  yk = {
    c: "improvedAttackRatingNinja3",
    title: "Improved Attack Rating III",
    e: "10% Attack Rating Bonus",
    g: 10,
    f: 4
  },
  zk = {
    c: "improvedDefenseRatingNinja1",
    title: "Improved Defense Rating I",
    e: "10% Defense Rating Bonus",
    g: 10,
    f: 5
  },
  Ak = {
    c: "improvedDefenseRatingNinja2",
    title: "Improved Defense Rating II",
    e: "10% Defense Rating Bonus",
    g: 10,
    f: 5
  },
  Bk = {
    c: "improvedDefenseRatingNinja3",
    title: "Improved Defense Rating III",
    e: "10% Defense Rating Bonus",
    g: 10,
    f: 5
  },
  Ck = {
    c: "fasterAttacksNinja1",
    title: "Faster Attacks I",
    e: "Attack Cool-Down Reduction",
    g: 2,
    f: 10
  },
  Dk = {
    c: "fasterAttacksNinja2",
    title: "Faster Attacks II",
    e: "Attack Cool-Down Reduction",
    g: 2,
    f: 10
  },
  Ek = {
    c: "fasterAttacksNinja3",
    title: "Faster Attacks III",
    e: "Attack Cool-Down Reduction",
    g: 2,
    f: 10
  },
  Fk = {
    c: "healthRegenerationNinja1",
    title: "Faster Health Regeneration I",
    e: "HP Regeneration Rate +1%",
    g: 1,
    f: 8
  },
  Gk = {
    c: "healthRegenerationNinja2",
    title: "Faster Health Regeneration II",
    e: "HP Regeneration Rate +1%",
    g: 1,
    f: 8
  },
  Hk = {
    c: "healthRegenerationNinja3",
    title: "Faster Health Regeneration III",
    e: "HP Regeneration Rate +1%",
    g: 1,
    f: 8
  },
  Ik = {
    c: "improvedHealthNinja1",
    title: "Improved Health I",
    e: "Maximum Health +20%",
    g: 20,
    f: 6
  },
  Jk = {
    c: "improvedHealthNinja2",
    title: "Improved Health II",
    e: "Maximum Health +20%",
    g: 20,
    f: 6
  },
  Kk = {
    c: "improvedHealthNinja3",
    title: "Improved Health III",
    e: "Maximum Health +20%",
    g: 20,
    f: 6
  },
  Lk = {
    c: "criticalHitChanceNinja1",
    title: "Critical Hit Chance",
    e: "Critical Chance +5%",
    g: 5,
    f: 17
  },
  Mk = {
    c: "criticalHitChanceNinja2",
    title: "Critical Hit Chance",
    e: "Critical Chance +5%",
    g: 5,
    f: 17
  },
  Nk = {
    c: "criticalHitChanceNinja3",
    title: "Critical Hit Chance",
    e: "Critical Chance +5%",
    g: 5,
    f: 17
  },
  Ok = {
    c: "criticalHitChanceNinja4",
    title: "Critical Hit Chance",
    e: "Critical Chance +5%",
    g: 5,
    f: 17
  },
  Pk = {
    c: "criticalHitChanceNinja5",
    title: "Critical Hit Chance",
    e: "Critical Chance +5%",
    g: 5,
    f: 17
  },
  Qk = {
    c: "attacksPerTurnNinja1",
    title: "Extra Strike",
    e: "Max Possible Attacks/Turn + 1",
    g: 1,
    f: 18
  },
  Rk = {
    c: "attacksPerTurnNinja2",
    title: "Attack Again",
    e: "Max Possible Attacks/Turn + 1",
    g: 1,
    f: 18
  },
  Sk = {
    c: "attacksPerTurnNinja3",
    title: "Attack Again",
    e: "Max Possible Attacks/Turn + 1",
    g: 1,
    f: 18
  },
  Tk = {
    c: "additionalAttackPercentNinja1",
    title: "Additional Attack Chance",
    e: "+10% Additional Attack Chance",
    g: 10,
    f: 19
  },
  Uk = {
    c: "additionalAttackPercentNinja2",
    title: "Additional Attack Chance",
    e: "+10% Additional Attack Chance",
    g: 10,
    f: 19
  },
  Vk = {
    c: "additionalAttackPercentNinja3",
    title: "Additional Attack Chance",
    e: "+10% Additional Attack Chance",
    g: 10,
    f: 19
  },
  Wk = {
    c: "additionalAttackPercentNinja4",
    title: "Additional Attack Chance",
    e: "+10% Additional Attack Chance",
    g: 10,
    f: 19
  },
  Xk = {
    c: "swiftStrikeUpgradeNinja1",
    title: "Swift Strike II",
    e: "Additional Victim",
    g: 1,
    f: 28
  },
  Yk = {
    c: "swiftStrikeUpgradeNinja2",
    title: "Swift Strike III",
    e: "Additional Victim",
    g: 1,
    f: 28
  };
var Zk = {
    c: "improvedDamagePriest1",
    title: "Improved Damage I",
    e: "10% Damage Bonus",
    g: 10,
    f: 2
  },
  $k = {
    c: "improvedDamagePriest2",
    title: "Improved Damage II",
    e: "10% Damage Bonus",
    g: 10,
    f: 2
  },
  al = {
    c: "improvedDamagePriest3",
    title: "Improved Damage III",
    e: "10% Damage Bonus",
    g: 10,
    f: 2
  },
  bl = {
    c: "improvedArmorPriest1",
    title: "Improved Armor I",
    e: "10% Armor Bonus",
    g: 10,
    f: 3
  },
  cl = {
    c: "improvedArmorPriest2",
    title: "Improved Armor II",
    e: "10% Armor Bonus",
    g: 10,
    f: 3
  },
  dl = {
    c: "improvedArmorPriest3",
    title: "Improved Armor III",
    e: "10% Armor Bonus",
    g: 10,
    f: 3
  },
  el = {
    c: "improvedAttackRatingPriest1",
    title: "Improved Attack Rating I",
    e: "10% Attack Rating Bonus",
    g: 10,
    f: 4
  },
  fl = {
    c: "improvedAttackRatingPriest2",
    title: "Improved Attack Rating II",
    e: "10% Attack Rating Bonus",
    g: 10,
    f: 4
  },
  gl = {
    c: "improvedAttackRatingPriest3",
    title: "Improved Attack Rating III",
    e: "10% Attack Rating Bonus",
    g: 10,
    f: 4
  },
  hl = {
    c: "improvedDefenseRatingPriest1",
    title: "Improved Defense Rating I",
    e: "10% Defense Rating Bonus",
    g: 10,
    f: 5
  },
  il = {
    c: "improvedDefenseRatingPriest2",
    title: "Improved Defense Rating II",
    e: "10% Defense Rating Bonus",
    g: 10,
    f: 5
  },
  jl = {
    c: "improvedDefenseRatingPriest3",
    title: "Improved Defense Rating III",
    e: "10% Defense Rating Bonus",
    g: 10,
    f: 5
  },
  kl = {
    c: "healthRegenerationPriest1",
    title: "Faster Health Regeneration I",
    e: "HP Regeneration Rate +1%",
    g: 1,
    f: 8
  },
  ll = {
    c: "healthRegenerationPriest2",
    title: "Faster Health Regeneration II",
    e: "HP Regeneration Rate +1%",
    g: 1,
    f: 8
  },
  ml = {
    c: "spiritRegenerationPriest1",
    title: "Faster Spirit Regeneration I",
    e: "Spirit Regeneration Rate +1%",
    g: 1,
    f: 9
  },
  nl = {
    c: "spiritRegenerationPriest2",
    title: "Faster Spirit Regeneration II",
    e: "Spirit Regeneration Rate +1",
    g: 1,
    f: 9
  },
  ol = {
    c: "improvedHealthPriest1",
    title: "Improved Health I",
    e: "Maximum Health +20%",
    g: 20,
    f: 6
  },
  pl = {
    c: "improvedHealthPriest2",
    title: "Improved Health II",
    e: "Maximum Health +20%",
    g: 20,
    f: 6
  },
  ql = {
    c: "improvedSpiritPriest1",
    title: "Improved Spirit I",
    e: "Maximum Spirit +20%",
    g: 20,
    f: 7
  },
  Bl = {
    c: "improvedSpiritPriest2",
    title: "Improved Spirit II",
    e: "Maximum Spirit +20%",
    g: 20,
    f: 7
  },
  Cl = {
    c: "spellCostPriest1",
    title: "Efficient Caster I",
    e: "Spells Use 10% Less Spirit",
    g: 10,
    f: 16
  },
  Dl = {
    c: "spellCostPriest2",
    title: "Efficient Caster II",
    e: "Spells Use 10% Less Spirit",
    g: 10,
    f: 16
  },
  El = {
    c: "fasterAttacksPriest1",
    title: "Faster Attacks I",
    e: "Attack Cool-Down Reduction",
    g: 2,
    f: 10
  },
  Fl = {
    c: "ignoreDamagePriest1",
    title: "Damage Resist",
    e: "Ignore 10% Of Enemy Damage",
    g: 10,
    f: 1
  },
  Gl = {
    c: "ignoreDamagePriest2",
    title: "Damage Resist",
    e: "Ignore 10% Of Enemy Damage",
    g: 10,
    f: 1
  },
  Hl = {
    c: "improvedHealingSpellPriest",
    title: "Improved Healing Spell",
    e: "Healing Spell Twice As Effective",
    g: 2,
    f: 11
  },
  Il = {
    c: "improvedDamageSpellPriest",
    title: "Improved Damage Spell",
    e: "Damage Spell Bonus x2",
    g: 2,
    f: 12
  },
  Jl = {
    c: "improvedArmorSpellPriest",
    title: "Improved Armor Spell",
    e: "Armor Spell Bonus x2",
    g: 2,
    f: 13
  },
  Kl = {
    c: "improvedAttackRatingSpellPriest",
    title: "Improved Attack Rating Spell",
    e: "Attack Rating Bonus x2",
    g: 2,
    f: 14
  },
  Ll = {
    c: "improvedDefenseRatingSpellPriest",
    title: "Improved Defense Rating Spell",
    e: "Defense Rating Bonus x2",
    g: 2,
    f: 15
  };
var Ml = {
    c: "improvedDamageMageElectric1",
    title: "Improved Damage I",
    e: "10% Damage Bonus",
    g: 10,
    f: 2
  },
  Nl = {
    c: "improvedDamageMageElectric2",
    title: "Improved Damage II",
    e: "10% Damage Bonus",
    g: 10,
    f: 2
  },
  Ol = {
    c: "improvedDamageMageElectric3",
    title: "Improved Damage III",
    e: "10% Damage Bonus",
    g: 10,
    f: 2
  },
  Pl = {
    c: "improvedArmorMageElectric1",
    title: "Improved Armor I",
    e: "10% Armor Bonus",
    g: 10,
    f: 3
  },
  Ql = {
    c: "improvedArmorMageElectric2",
    title: "Improved Armor II",
    e: "10% Armor Bonus",
    g: 10,
    f: 3
  },
  Rl = {
    c: "improvedArmorMageElectric3",
    title: "Improved Armor III",
    e: "10% Armor Bonus",
    g: 10,
    f: 3
  },
  Sl = {
    c: "improvedAttackRatingMageElectric1",
    title: "Improved Attack Rating I",
    e: "10% Attack Rating Bonus",
    g: 10,
    f: 4
  },
  Tl = {
    c: "improvedAttackRatingMageElectric2",
    title: "Improved Attack Rating II",
    e: "10% Attack Rating Bonus",
    g: 10,
    f: 4
  },
  Ul = {
    c: "improvedAttackRatingMageElectric3",
    title: "Improved Attack Rating III",
    e: "10% Attack Rating Bonus",
    g: 10,
    f: 4
  },
  Vl = {
    c: "improvedDefenseRatingMageElectric1",
    title: "Improved Defense Rating I",
    e: "10% Defense Rating Bonus",
    g: 10,
    f: 5
  },
  Wl = {
    c: "improvedDefenseRatingMageElectric2",
    title: "Improved Defense Rating II",
    e: "10% Defense Rating Bonus",
    g: 10,
    f: 5
  },
  Xl = {
    c: "improvedDefenseRatingMageElectric3",
    title: "Improved Defense Rating III",
    e: "10% Defense Rating Bonus",
    g: 10,
    f: 5
  },
  Yl = {
    c: "healthRegenerationMageElectric1",
    title: "Faster Health Regeneration I",
    e: "HP Regeneration Rate +1%",
    g: 1,
    f: 8
  },
  Zl = {
    c: "healthRegenerationMageElectric2",
    title: "Faster Health Regeneration II",
    e: "HP Regeneration Rate +1%",
    g: 1,
    f: 8
  },
  $l = {
    c: "spiritRegenerationMageElectric1",
    title: "Faster Spirit Regeneration I",
    e: "Spirit Regeneration Rate +1%",
    g: 1,
    f: 9
  },
  am = {
    c: "spiritRegenerationMageElectric2",
    title: "Faster Spirit Regeneration II",
    e: "Spirit Regeneration Rate +1%",
    g: 1,
    f: 9
  },
  bm = {
    c: "improvedHealthMageElectric1",
    title: "Improved Health I",
    e: "Maximum Health +20%",
    g: 20,
    f: 6
  },
  cm = {
    c: "improvedHealthMageElectric2",
    title: "Improved Health II",
    e: "Maximum Health +20%",
    g: 20,
    f: 6
  },
  dm = {
    c: "improvedSpiritMageElectric1",
    title: "Improved Spirit I",
    e: "Maximum Spirit +20%",
    g: 20,
    f: 7
  },
  em = {
    c: "improvedSpiritMageElectric2",
    title: "Improved Spirit II",
    e: "Maximum Spirit +20%",
    g: 20,
    f: 7
  },
  fm = {
    c: "spellCostMageElectric1",
    title: "Efficient Caster I",
    e: "Spells Use 10% Less Spirit",
    g: 10,
    f: 16
  },
  gm = {
    c: "spellCostMageElectric2",
    title: "Efficient Caster II",
    e: "Spells Use 10% Less Spirit",
    g: 10,
    f: 16
  },
  hm = {
    c: "fasterAttacksMageElectric1",
    title: "Faster Attacks I",
    e: "Attack Cool-Down Reduction",
    g: 2,
    f: 10
  },
  im = {
    c: "fasterAttacksMageElectric2",
    title: "Faster Attacks II",
    e: "Attack Cool-Down Reduction",
    g: 2,
    f: 10
  },
  jm = {
    c: "improvedSpiderWebMageElectric1",
    title: "Improved Spider Web I",
    e: "Capture More Enemies",
    g: 1,
    f: 20
  },
  km = {
    c: "improvedSpiderWebMageElectric2",
    title: "Improved Spider Web II",
    e: "Capture More Enemies",
    g: 2,
    f: 20
  },
  lm = {
    c: "improvedSpiderWebMageElectric3",
    title: "Improved Spider Web III",
    e: "Capture More Enemies",
    g: 2,
    f: 20
  },
  mm = {
    c: "improvedChainLightningMageElectric1",
    title: "Improved Chain Lightning I",
    e: "Lightning Arc +2",
    g: 2,
    f: 21
  },
  nm = {
    c: "improvedChainLightningMageElectric2",
    title: "Improved Chain Lightning II",
    e: "Lightning Arc +2",
    g: 2,
    f: 21
  },
  om = {
    c: "improvedChainLightningMageElectric3",
    title: "Improved Chain Lightning III",
    e: "Lightning Arc +2",
    g: 2,
    f: 21
  },
  pm = {
    c: "improvedLightningRainMageElectric1",
    title: "Improved Lightning Rain I",
    e: "Rain Falls On Larger Area.",
    g: 1,
    f: 22
  },
  qm = {
    c: "improvedLightningRainMageElectric2",
    title: "Improved Lightning Rain II",
    e: "Rain Falls On Larger Area.",
    g: 1,
    f: 22
  };
var rm = {
    c: "improvedDamageMageFire1",
    title: "Improved Damage I",
    e: "10% Damage Bonus",
    g: 10,
    f: 2
  },
  sm = {
    c: "improvedDamageMageFire2",
    title: "Improved Damage II",
    e: "10% Damage Bonus",
    g: 10,
    f: 2
  },
  tm = {
    c: "improvedDamageMageFire3",
    title: "Improved Damage III",
    e: "10% Damage Bonus",
    g: 10,
    f: 2
  },
  um = {
    c: "improvedArmorMageFire1",
    title: "Improved Armor I",
    e: "10% Armor Bonus",
    g: 10,
    f: 3
  },
  vm = {
    c: "improvedArmorMageFire2",
    title: "Improved Armor II",
    e: "10% Armor Bonus",
    g: 10,
    f: 3
  },
  wm = {
    c: "improvedArmorMageFire3",
    title: "Improved Armor III",
    e: "10% Armor Bonus",
    g: 10,
    f: 3
  },
  xm = {
    c: "improvedAttackRatingMageFire1",
    title: "Improved Attack Rating I",
    e: "10% Attack Rating Bonus",
    g: 10,
    f: 4
  },
  ym = {
    c: "improvedAttackRatingMageFire2",
    title: "Improved Attack Rating II",
    e: "10% Attack Rating Bonus",
    g: 10,
    f: 4
  },
  zm = {
    c: "improvedAttackRatingMageFire3",
    title: "Improved Attack Rating III",
    e: "10% Attack Rating Bonus",
    g: 10,
    f: 4
  },
  Am = {
    c: "improvedDefenseRatingMageFire1",
    title: "Improved Defense Rating I",
    e: "10% Defense Rating Bonus",
    g: 10,
    f: 5
  },
  Bm = {
    c: "improvedDefenseRatingMageFire2",
    title: "Improved Defense Rating II",
    e: "10% Defense Rating Bonus",
    g: 10,
    f: 5
  },
  Cm = {
    c: "improvedDefenseRatingMageFire3",
    title: "Improved Defense Rating III",
    e: "10% Defense Rating Bonus",
    g: 10,
    f: 5
  },
  Dm = {
    c: "healthRegenerationMageFire1",
    title: "Faster Health Regeneration I",
    e: "HP Regeneration Rate +1%",
    g: 1,
    f: 8
  },
  Em = {
    c: "healthRegenerationMageFire2",
    title: "Faster Health Regeneration II",
    e: "HP Regeneration Rate +1%",
    g: 1,
    f: 8
  },
  Fm = {
    c: "spiritRegenerationMageFire1",
    title: "Faster Spirit Regeneration I",
    e: "Spirit Regeneration Rate +1%",
    g: 1,
    f: 9
  },
  Gm = {
    c: "spiritRegenerationMageFire2",
    title: "Faster Spirit Regeneration II",
    e: "Spirit Regeneration Rate +1%",
    g: 1,
    f: 9
  },
  Hm = {
    c: "improvedHealthMageFire1",
    title: "Improved Health I",
    e: "Maximum Health +20%",
    g: 20,
    f: 6
  },
  Im = {
    c: "improvedHealthMageFire2",
    title: "Improved Health II",
    e: "Maximum Health +20%",
    g: 20,
    f: 6
  },
  Jm = {
    c: "improvedSpiritMageFire1",
    title: "Improved Spirit I",
    e: "Maximum Spirit +20%",
    g: 20,
    f: 7
  },
  Km = {
    c: "improvedSpiritMageFire2",
    title: "Improved Spirit II",
    e: "Maximum Spirit +20%",
    g: 20,
    f: 7
  },
  Lm = {
    c: "spellCostMageFire1",
    title: "Efficient Caster I",
    e: "Spells Use 10% Less Spirit",
    g: 10,
    f: 16
  },
  Mm = {
    c: "spellCostMageFire2",
    title: "Efficient Caster II",
    e: "Spells Use 10% Less Spirit",
    g: 10,
    f: 16
  },
  Nm = {
    c: "fasterAttacksMageFire1",
    title: "Faster Attacks I",
    e: "Attack Cool-Down Reduction",
    g: 2,
    f: 10
  },
  Om = {
    c: "fasterAttacksMageFire2",
    title: "Faster Attacks II",
    e: "Attack Cool-Down Reduction",
    g: 2,
    f: 10
  },
  Pm = {
    c: "improvedTurnMonsters1",
    title: "Improved Turn Monsters I",
    e: "Turn More Monsters",
    g: 1,
    f: 27
  },
  Qm = {
    c: "improvedTurnMonsters2",
    title: "Improved Turn Monsters II",
    e: "Turn More Monsters",
    g: 2,
    f: 27
  },
  Rm = {
    c: "improvedTurnMonsters3",
    title: "Improved Turn Monsters III",
    e: "Turn More Monsters",
    g: 2,
    f: 27
  },
  Sm = {
    c: "improvedFireRainMageFire1",
    title: "Improved Fire Rain I",
    e: "Rain Falls On Larger Area.",
    g: 1,
    f: 22
  },
  Tm = {
    c: "improvedFireRainMageFire2",
    title: "Improved Fire Rain II",
    e: "Rain Falls On Larger Area.",
    g: 1,
    f: 22
  },
  Um = {
    c: "improvedFireballMageFire1",
    title: "Improved Fireball I",
    e: "Larger Blast.",
    g: 1,
    f: 25
  },
  Vm = {
    c: "improvedFireballMageFire2",
    title: "Improved Fireball II",
    e: "Larger Blast.",
    g: 1,
    f: 25
  }
;var Wm = {
    c: "improvedDamageRanger1",
    title: "Improved Damage I",
    e: "10% Damage Bonus",
    g: 10,
    f: 2
  },
  Xm = {
    c: "improvedDamageRanger2",
    title: "Improved Damage II",
    e: "10% Damage Bonus",
    g: 10,
    f: 2
  },
  Ym = {
    c: "improvedDamageRanger3",
    title: "Improved Damage III",
    e: "10% Damage Bonus",
    g: 10,
    f: 2
  },
  Zm = {
    c: "improvedArmorRanger1",
    title: "Improved Armor I",
    e: "10% Armor Bonus",
    g: 10,
    f: 3
  },
  $m = {
    c: "improvedArmorRanger2",
    title: "Improved Armor II",
    e: "10% Armor Bonus",
    g: 10,
    f: 3
  },
  an = {
    c: "improvedArmorRanger3",
    title: "Improved Armor III",
    e: "10% Armor Bonus",
    g: 10,
    f: 3
  },
  bn = {
    c: "improvedAttackRatingRanger1",
    title: "Improved Attack Rating I",
    e: "10% Attack Rating Bonus",
    g: 10,
    f: 4
  },
  cn = {
    c: "improvedAttackRatingRanger2",
    title: "Improved Attack Rating II",
    e: "10% Attack Rating Bonus",
    g: 10,
    f: 4
  },
  dn = {
    c: "improvedAttackRatingRanger3",
    title: "Improved Attack Rating III",
    e: "10% Attack Rating Bonus",
    g: 10,
    f: 4
  },
  en = {
    c: "improvedDefenseRatingRanger1",
    title: "Improved Defense Rating I",
    e: "10% Defense Rating Bonus",
    g: 10,
    f: 5
  },
  fn = {
    c: "improvedDefenseRatingRanger2",
    title: "Improved Defense Rating II",
    e: "10% Defense Rating Bonus",
    g: 10,
    f: 5
  },
  gn = {
    c: "improvedDefenseRatingRanger3",
    title: "Improved Defense Rating III",
    e: "10% Defense Rating Bonus",
    g: 10,
    f: 5
  },
  hn = {
    c: "criticalHitChanceRanger1",
    title: "Critical Hit",
    e: "Critical Chance +5%",
    g: 5,
    f: 17
  },
  jn = {
    c: "criticalHitChanceRanger2",
    title: "Critical Hits",
    e: "Critical Chance +5%",
    g: 5,
    f: 17
  },
  kn = {
    c: "criticalHitChanceRanger3",
    title: "More Critical Hits",
    e: "Critical Chance +5%",
    g: 5,
    f: 17
  },
  ln = {
    c: "criticalHitChanceRanger4",
    title: "More Critical Hits",
    e: "Critical Chance +5%",
    g: 5,
    f: 17
  },
  mn = {
    c: "healthRegenerationRanger1",
    title: "Faster Health Regeneration I",
    e: "HP Regeneration Rate +1%",
    g: 1,
    f: 8
  },
  nn = {
    c: "healthRegenerationRanger2",
    title: "Faster Health Regeneration II",
    e: "HP Regeneration Rate +1%",
    g: 1,
    f: 8
  },
  on = {
    c: "healthRegenerationRanger3",
    title: "Faster Health Regeneration III",
    e: "HP Regeneration Rate +1%",
    g: 1,
    f: 8
  },
  pn = {
    c: "improvedHealthRanger1",
    title: "Improved Health I",
    e: "Maximum Health +20%",
    g: 20,
    f: 6
  },
  qn = {
    c: "improvedHealthRanger2",
    title: "Improved Health II",
    e: "Maximum Health +20%",
    g: 20,
    f: 6
  },
  rn = {
    c: "improvedHealthRanger3",
    title: "Improved Health III",
    e: "Maximum Health +20%",
    g: 20,
    f: 6
  },
  sn = {
    c: "fasterAttacksRanger1",
    title: "Quick Shot",
    e: "Attack Cool-Down Reduction",
    g: 2,
    f: 10
  },
  tn = {
    c: "fasterAttacksRanger2",
    title: "Quicker Shot",
    e: "Attack Cool-Down Reduction",
    g: 2,
    f: 10
  },
  un = {
    c: "fasterAttacksRanger3",
    title: "Quickest Shot",
    e: "Attack Cool-Down Reduction",
    g: 2,
    f: 10
  },
  vn = {
    c: "ricochetCountRanger1",
    title: "Ricochet Shot",
    e: "Max Possible Ricochets + 1",
    g: 1,
    f: 23
  },
  wn = {
    c: "ricochetCountRanger2",
    title: "Ricochet Shot",
    e: "Max Possible Ricochets + 1",
    g: 1,
    f: 23
  },
  xn = {
    c: "ricochetCountRanger3",
    title: "Ricochet Shot",
    e: "Max Possible Ricochets + 1",
    g: 1,
    f: 23
  },
  yn = {
    c: "ricochetCountRanger4",
    title: "Ricochet Shot",
    e: "Max Possible Ricochets + 1",
    g: 1,
    f: 23
  },
  zn = {
    c: "ricochetPercentRanger1",
    title: "Ricochet Chance",
    e: "Ricochet Chance +15%",
    g: 15,
    f: 24
  },
  An = {
    c: "ricochetPercentRanger2",
    title: "Ricochet Chance",
    e: "Ricochet Chance +15%",
    g: 15,
    f: 24
  },
  Bn = {
    c: "ricochetPercentRanger3",
    title: "Ricochet Chance",
    e: "Ricochet Chance +15%",
    g: 15,
    f: 24
  },
  Cn = {
    c: "ricochetPercentRanger4",
    title: "Ricochet Chance",
    e: "Ricochet Chance +15%",
    g: 15,
    f: 24
  };
var Dn = {
    c: "improvedDamageRogue1",
    title: "Improved Damage I",
    e: "10% Damage Bonus",
    g: 10,
    f: 2
  },
  En = {
    c: "improvedDamageRogue2",
    title: "Improved Damage II",
    e: "10% Damage Bonus",
    g: 10,
    f: 2
  },
  Fn = {
    c: "improvedDamageRogue3",
    title: "Improved Damage III",
    e: "10% Damage Bonus",
    g: 10,
    f: 2
  },
  Gn = {
    c: "improvedArmorRogue1",
    title: "Improved Armor I",
    e: "10% Armor Bonus",
    g: 10,
    f: 3
  },
  Hn = {
    c: "improvedArmorRogue2",
    title: "Improved Armor II",
    e: "10% Armor Bonus",
    g: 10,
    f: 3
  },
  In = {
    c: "improvedArmorRogue3",
    title: "Improved Armor III",
    e: "10% Armor Bonus",
    g: 10,
    f: 3
  },
  Jn = {
    c: "improvedAttackRatingRogue1",
    title: "Improved Attack Rating I",
    e: "10% Attack Rating Bonus",
    g: 10,
    f: 4
  },
  Kn = {
    c: "improvedAttackRatingRogue2",
    title: "Improved Attack Rating II",
    e: "10% Attack Rating Bonus",
    g: 10,
    f: 4
  },
  Ln = {
    c: "improvedAttackRatingRogue3",
    title: "Improved Attack Rating III",
    e: "10% Attack Rating Bonus",
    g: 10,
    f: 4
  },
  Mn = {
    c: "improvedDefenseRatingRogue1",
    title: "Improved Defense Rating I",
    e: "10% Defense Rating Bonus",
    g: 10,
    f: 5
  },
  Nn = {
    c: "improvedDefenseRatingRogue2",
    title: "Improved Defense Rating II",
    e: "10% Defense Rating Bonus",
    g: 10,
    f: 5
  },
  On = {
    c: "improvedDefenseRatingRogue3",
    title: "Improved Defense Rating III",
    e: "10% Defense Rating Bonus",
    g: 10,
    f: 5
  },
  Pn = {
    c: "fasterAttacksRogue1",
    title: "Faster Attacks I",
    e: "Attack Cool-Down Reduction",
    g: 2,
    f: 10
  },
  Qn = {
    c: "fasterAttacksRogue2",
    title: "Faster Attacks II",
    e: "Attack Cool-Down Reduction",
    g: 2,
    f: 10
  },
  Rn = {
    c: "fasterAttacksRogue3",
    title: "Faster Attacks III",
    e: "Attack Cool-Down Reduction",
    g: 2,
    f: 10
  },
  Sn = {
    c: "healthRegenerationRogue1",
    title: "Faster Health Regeneration I",
    e: "HP Regeneration Rate +1%",
    g: 1,
    f: 8
  },
  Tn = {
    c: "healthRegenerationRogue2",
    title: "Faster Health Regeneration II",
    e: "HP Regeneration Rate +1%",
    g: 1,
    f: 8
  },
  Un = {
    c: "healthRegenerationRogue3",
    title: "Faster Health Regeneration III",
    e: "HP Regeneration Rate +1%",
    g: 1,
    f: 8
  },
  Vn = {
    c: "spiritRegenerationRogue1",
    title: "Faster Spirit Regeneration I",
    e: "Spirit Regeneration Rate +1%",
    g: 1,
    f: 9
  },
  Wn = {
    c: "spiritRegenerationRogue2",
    title: "Faster Spirit Regeneration II",
    e: "Spirit Regeneration Rate +1%",
    g: 1,
    f: 9
  },
  Xn = {
    c: "improvedHealthRogue1",
    title: "Improved Health I",
    e: "Maximum Health +20%",
    g: 20,
    f: 6
  },
  Yn = {
    c: "improvedHealthRogue2",
    title: "Improved Health II",
    e: "Maximum Health +20%",
    g: 20,
    f: 6
  },
  Zn = {
    c: "improvedHealthRogue3",
    title: "Improved Health III",
    e: "Maximum Health +20%",
    g: 20,
    f: 6
  },
  $n = {
    c: "improvedSpiritRogue1",
    title: "Improved Spirit I",
    e: "Maximum Spirit +20%",
    g: 20,
    f: 7
  },
  ao = {
    c: "criticalHitChanceRogue1",
    title: "Critical Hit Chance",
    e: "Critical Chance +5%",
    g: 5,
    f: 17
  },
  bo = {
    c: "criticalHitChanceRogue2",
    title: "Critical Hit Chance",
    e: "Critical Chance +5%",
    g: 5,
    f: 17
  },
  co = {
    c: "criticalHitChanceRogue3",
    title: "Critical Hit Chance",
    e: "Critical Chance +5%",
    g: 5,
    f: 17
  },
  eo = {
    c: "attacksPerTurnRogue1",
    title: "Extra Strike",
    e: "Max Possible Attacks/Turn + 1",
    g: 1,
    f: 18
  },
  fo = {
    c: "attacksPerTurnRogue1",
    title: "Attack Again",
    e: "Max Possible Attacks/Turn + 1",
    g: 1,
    f: 18
  },
  go = {
    c: "additionalAttackPercentRogue1",
    title: "Additional Attack Chance",
    e: "+10% Additional Attack Chance",
    g: 10,
    f: 19
  },
  ho = {
    c: "additionalAttackPercentRogue2",
    title: "Additional Attack Chance",
    e: "+10% Additional Attack Chance",
    g: 10,
    f: 19
  },
  io = {
    c: "additionalAttackPercentRogue3",
    title: "Additional Attack Chance",
    e: "+10% Additional Attack Chance",
    g: 10,
    f: 19
  },
  jo = {
    c: "additionalAttackPercentRogue4",
    title: "Additional Attack Chance",
    e: "+10% Additional Attack Chance",
    g: 10,
    f: 19
  };
var ko = {
    c: "improvedDamageNecromancer1",
    title: "Damage +10%",
    e: "Minion & Summoner Bonus",
    g: 10,
    f: 2
  },
  lo = {
    c: "improvedDamageNecromancer2",
    title: "Damage +10%",
    e: "Minion & Summoner Bonus",
    g: 10,
    f: 2
  },
  mo = {
    c: "improvedDamageNecromancer3",
    title: "Damage +10%",
    e: "Minion & Summoner Bonus",
    g: 10,
    f: 2
  },
  no = {
    c: "improvedArmorNecromancer1",
    title: "Armor +10%",
    e: "Minion & Summoner Bonus",
    g: 10,
    f: 3
  },
  oo = {
    c: "improvedArmorNecromancer2",
    title: "Armor +10%",
    e: "Minion & Summoner Bonus",
    g: 10,
    f: 3
  },
  po = {
    c: "improvedArmorNecromancer3",
    title: "Armor +10%",
    e: "Minion & Summoner Bonus",
    g: 10,
    f: 3
  },
  qo = {
    c: "improvedAttackRatingNecromancer1",
    title: "Attack Rating +10%",
    e: "Minion & Summoner Bonus",
    g: 10,
    f: 4
  },
  ro = {
    c: "improvedAttackRatingNecromancer2",
    title: "Attack Rating +10%",
    e: "Minion & Summoner Bonus",
    g: 10,
    f: 4
  },
  so = {
    c: "improvedAttackRatingNecromancer3",
    title: "Attack Rating +10%",
    e: "Minion & Summoner Bonus",
    g: 10,
    f: 4
  },
  to = {
    c: "improvedDefenseRatingNecromancer1",
    title: "Defense Rating +10%",
    e: "Minion & Summoner Bonus",
    g: 10,
    f: 5
  },
  uo = {
    c: "improvedDefenseRatingNecromancer2",
    title: "Defense Rating +10%",
    e: "Minion & Summoner Bonus",
    g: 10,
    f: 5
  },
  vo = {
    c: "improvedDefenseRatingNecromancer3",
    title: "Defense Rating +10%",
    e: "Minion & Summoner Bonus",
    g: 10,
    f: 5
  },
  wo = {
    c: "healthRegenerationNecromancer1",
    title: "Health Regeneration Rate +1%",
    e: "Minion & Summoner Bonus",
    g: 1,
    f: 8
  },
  xo = {
    c: "healthRegenerationNecromancer2",
    title: "Health Regeneration Rate +1%",
    e: "Minion & Summoner Bonus",
    g: 1,
    f: 8
  },
  yo = {
    c: "spiritRegenerationNecromancer1",
    title: "Spirit Regeneration Rate +1%",
    e: "Minion & Summoner Bonus",
    g: 1,
    f: 9
  },
  zo = {
    c: "spiritRegenerationNecromancer2",
    title: "Spirit Regeneration Rate +1%",
    e: "Minion & Summoner Bonus",
    g: 1,
    f: 9
  },
  Ao = {
    c: "improvedHealthNecromancer1",
    title: "Maximum Health +20%",
    e: "Minion & Summoner Bonus",
    g: 20,
    f: 6
  },
  Bo = {
    c: "improvedHealthNecromancer2",
    title: "Maximum Health +20%",
    e: "Minion & Summoner Bonus",
    g: 20,
    f: 6
  },
  Co = {
    c: "improvedHealthNecromancer3",
    title: "Improved Health +20%",
    e: "Minion & Summoner Bonus",
    g: 20,
    f: 6
  },
  Do = {
    c: "improvedSpiritNecromancer1",
    title: "Maximum Spirit +20%",
    e: "Minion & Summoner Bonus",
    g: 20,
    f: 7
  },
  Eo = {
    c: "improvedSpiritNecromancer2",
    title: "Maximum Spirit +20%",
    e: "Minion & Summoner Bonus",
    g: 20,
    f: 7
  },
  Fo = {
    c: "spellCostNecromancer1",
    title: "Maximum Spirit +20%",
    e: "Minion & Summoner Bonus",
    g: 10,
    f: 16
  },
  Go = {
    c: "spellCostNecromancer2",
    title: "Maximum Spirit +20%",
    e: "Minion & Summoner Bonus",
    g: 10,
    f: 16
  },
  Ho = {
    c: "fasterAttacksNecromancer1",
    title: "Attack Cool-Down Reduction",
    e: "Minion & Summoner Bonus",
    g: 2,
    f: 10
  },
  Io = {
    c: "fasterAttacksNecromancer2",
    title: "Attack Cool-Down Reduction",
    e: "Minion & Summoner Bonus",
    g: 2,
    f: 10
  },
  Jo = {
    c: "largerSkeletonArmyNecromancer1",
    title: "More Skeletons in Army",
    e: "More Death, More Carnage",
    g: 1,
    f: 26
  },
  Ko = {
    c: "largerSkeletonArmyNecromancer2",
    title: "More Skeletons in Army",
    e: "More Death, More Carnage",
    g: 1,
    f: 26
  },
  Lo = {
    c: "largerSkeletonArmyNecromancer3",
    title: "More Skeletons in Army",
    e: "More Death, More Carnage",
    g: 1,
    f: 26
  },
  Mo = {
    c: "greenDeathRicochetCountNecromancer1",
    title: "Green Death II",
    e: "More Green Death",
    g: 1,
    f: 29
  },
  No = {
    c: "greenDeathRicochetCountNecromancer2",
    title: "Green Death III",
    e: "More Green Death",
    g: 1,
    f: 29
  },
  Oo = {
    c: "greenDeathRicochetCountNecromancer3",
    title: "Green Death IV",
    e: "More Green Death",
    g: 1,
    f: 29
  };
var Po = {
    c: "improvedDamageDruid1",
    title: "Damage +10%",
    e: "Minion Bonus",
    g: 10,
    f: 2
  },
  Qo = {
    c: "improvedDamageDruid2",
    title: "Damage +10%",
    e: "Minion Bonus",
    g: 10,
    f: 2
  },
  Ro = {
    c: "improvedDamageDruid3",
    title: "Damage +10%",
    e: "Minion Bonus",
    g: 10,
    f: 2
  },
  So = {
    c: "improvedArmorDruid1",
    title: "Armor +10%",
    e: "Minion & Summoner Bonus",
    g: 10,
    f: 3
  },
  To = {
    c: "improvedArmorDruid2",
    title: "Armor +10%",
    e: "Minion & Summoner Bonus",
    g: 10,
    f: 3
  },
  Uo = {
    c: "improvedArmorDruid3",
    title: "Armor +10%",
    e: "Minion & Summoner Bonus",
    g: 10,
    f: 3
  },
  Vo = {
    c: "improvedAttackRatingDruid1",
    title: "Attack Rating +10%",
    e: "Minion Bonus",
    g: 10,
    f: 4
  },
  Wo = {
    c: "improvedAttackRatingDruid2",
    title: "Attack Rating +10%",
    e: "Minion Bonus",
    g: 10,
    f: 4
  },
  Xo = {
    c: "improvedAttackRatingDruid3",
    title: "Attack Rating +10%",
    e: "Minion Bonus",
    g: 10,
    f: 4
  },
  Yo = {
    c: "improvedDefenseRatingDruid1",
    title: "Defense Rating +10%",
    e: "Minion & Summoner Bonus",
    g: 10,
    f: 5
  },
  Zo = {
    c: "improvedDefenseRatingDruid2",
    title: "Defense Rating +10%",
    e: "Minion & Summoner Bonus",
    g: 10,
    f: 5
  },
  $o = {
    c: "improvedDefenseRatingDruid3",
    title: "Defense Rating +10%",
    e: "Minion & Summoner Bonus",
    g: 10,
    f: 5
  },
  ap = {
    c: "healthRegenerationDruid1",
    title: "Health Regeneration Rate +1%",
    e: "Minion & Summoner Bonus",
    g: 1,
    f: 8
  },
  bp = {
    c: "healthRegenerationDruid2",
    title: "Health Regeneration Rate +1%",
    e: "Minion & Summoner Bonus",
    g: 1,
    f: 8
  },
  cp = {
    c: "spiritRegenerationDruid1",
    title: "Spirit Regeneration Rate +1%",
    e: "Minion & Summoner Bonus",
    g: 1,
    f: 9
  },
  dp = {
    c: "spiritRegenerationDruid2",
    title: "Spirit Regeneration Rate +1%",
    e: "Minion & Summoner Bonus",
    g: 1,
    f: 9
  },
  ep = {
    c: "improvedHealthDruid1",
    title: "Maximum Health +20%",
    e: "Minion & Summoner Bonus",
    g: 20,
    f: 6
  },
  fp = {
    c: "improvedHealthDruid2",
    title: "Maximum Health +20%",
    e: "Minion & Summoner Bonus",
    g: 20,
    f: 6
  },
  gp = {
    c: "improvedSpiritDruid1",
    title: "Maximum Spirit +20%",
    e: "Minion & Summoner Bonus",
    g: 20,
    f: 7
  },
  hp = {
    c: "improvedSpiritDruid2",
    title: "Maximum Spirit +20%",
    e: "Minion & Summoner Bonus",
    g: 20,
    f: 7
  },
  ip = {
    c: "spellCostDruid1",
    title: "Spells Use 10% Less Spirit",
    e: "Minion & Summoner Bonus",
    g: 10,
    f: 16
  },
  jp = {
    c: "spellCostDruid2",
    title: "Spells Use 10% Less Spirit",
    e: "Minion & Summoner Bonus",
    g: 10,
    f: 16
  },
  kp = {
    c: "fasterAttacksDruid1",
    title: "Attack Cool-Down Reduction",
    e: "Minion & Summoner Bonus",
    g: 2,
    f: 10
  },
  lp = {
    c: "fasterAttacksDruid2",
    title: "Attack Cool-Down Reduction",
    e: "Minion & Summoner Bonus",
    g: 2,
    f: 10
  },
  mp = {
    c: "largerWolfPackDruid1",
    title: "Bigger Wolf Pack",
    e: "More Wolves, More Kills",
    g: 1,
    f: 26
  },
  np = {
    c: "largerWolfPackDruid2",
    title: "Bigger Wolf Pack",
    e: "More Wolves, More Kills",
    g: 1,
    f: 26
  },
  op = {
    c: "largerWolfPackDruid3",
    title: "Bigger Wolf Pack",
    e: "More Wolves, More Kills",
    g: 1,
    f: 26
  },
  pp = {
    c: "largerWolfPackDruid4",
    title: "Bigger Wolf Pack",
    e: "More Wolves, More Kills",
    g: 1,
    f: 26
  },
  qp = {
    c: "largerWolfPackDruid5",
    title: "Bigger Wolf Pack",
    e: "More Wolves, More Kills",
    g: 1,
    f: 26
  },
  rp = {
    c: "improvedSleepDruid1",
    title: "Improved Sleep I",
    e: "More Sleeping Monsters",
    g: 1,
    f: 20
  },
  sp = {
    c: "improvedSleepDruid2",
    title: "Improved Sleep II",
    e: "More Sleeping Monsters",
    g: 2,
    f: 20
  },
  tp = {
    c: "improvedSleepDruid3",
    title: "Improved Sleep III",
    e: "More Sleeping Monsters",
    g: 2,
    f: 20
  };
var up = {
    c: "improvedDamageChickenKing1",
    title: "Damage +10%",
    e: "Minion Bonus",
    g: 10,
    f: 2
  },
  vp = {
    c: "improvedDamageChickenKing2",
    title: "Damage +10%",
    e: "Minion Bonus",
    g: 10,
    f: 2
  },
  wp = {
    c: "improvedDamageChickenKing3",
    title: "Damage +10%",
    e: "Minion Bonus",
    g: 10,
    f: 2
  },
  xp = {
    c: "improvedArmorChickenKing1",
    title: "Armor +10%",
    e: "Minion & Summoner Bonus",
    g: 10,
    f: 3
  },
  yp = {
    c: "improvedArmorChickenKing2",
    title: "Armor +10%",
    e: "Minion & Summoner Bonus",
    g: 10,
    f: 3
  },
  zp = {
    c: "improvedArmorChickenKing3",
    title: "Armor +10%",
    e: "Minion & Summoner Bonus",
    g: 10,
    f: 3
  },
  Ap = {
    c: "improvedAttackRatingChickenKing1",
    title: "Attack Rating +10%",
    e: "Minion Bonus",
    g: 10,
    f: 4
  },
  Bp = {
    c: "improvedAttackRatingChickenKing2",
    title: "Attack Rating +10%",
    e: "Minion Bonus",
    g: 10,
    f: 4
  },
  Cp = {
    c: "improvedAttackRatingChickenKing3",
    title: "Attack Rating +10%",
    e: "Minion Bonus",
    g: 10,
    f: 4
  },
  Dp = {
    c: "improvedDefenseRatingChickenKing1",
    title: "Defense Rating +10%",
    e: "Minion & Summoner Bonus",
    g: 10,
    f: 5
  },
  Ep = {
    c: "improvedDefenseRatingChickenKing2",
    title: "Defense Rating +10%",
    e: "Minion & Summoner Bonus",
    g: 10,
    f: 5
  },
  Fp = {
    c: "improvedDefenseRatingChickenKing3",
    title: "Defense Rating +10%",
    e: "Minion & Summoner Bonus",
    g: 10,
    f: 5
  },
  Gp = {
    c: "healthRegenerationChickenKing1",
    title: "Health Regeneration Rate +1%",
    e: "Minion & Summoner Bonus",
    g: 1,
    f: 8
  },
  Hp = {
    c: "healthRegenerationChickenKing2",
    title: "Health Regeneration Rate +1%",
    e: "Minion & Summoner Bonus",
    g: 1,
    f: 8
  },
  Ip = {
    c: "spiritRegenerationChickenKing1",
    title: "Spirit Regeneration Rate +1%",
    e: "Minion & Summoner Bonus",
    g: 1,
    f: 9
  },
  Jp = {
    c: "spiritRegenerationChickenKing2",
    title: "Spirit Regeneration Rate +1%",
    e: "Minion & Summoner Bonus",
    g: 1,
    f: 9
  },
  Kp = {
    c: "improvedHealthChickenKing1",
    title: "Maximum Health +20%",
    e: "Minion & Summoner Bonus",
    g: 20,
    f: 6
  },
  Lp = {
    c: "improvedHealthChickenKing2",
    title: "Maximum Health +20%",
    e: "Minion & Summoner Bonus",
    g: 20,
    f: 6
  },
  Mp = {
    c: "improvedSpiritChickenKing1",
    title: "Maximum Spirit +20%",
    e: "Minion & Summoner Bonus",
    g: 20,
    f: 7
  },
  Wp = {
    c: "improvedSpiritChickenKing2",
    title: "Maximum Spirit +20%",
    e: "Minion & Summoner Bonus",
    g: 20,
    f: 7
  },
  Xp = {
    c: "spellCostChickenKing1",
    title: "Spells Use 10% Less Spirit",
    e: "Minion & Summoner Bonus",
    g: 10,
    f: 16
  },
  Yp = {
    c: "spellCostChickenKing2",
    title: "Spells Use 10% Less Spirit",
    e: "Minion & Summoner Bonus",
    g: 10,
    f: 16
  },
  Zp = {
    c: "fasterAttacksChickenKing1",
    title: "Attack Cool-Down Reduction",
    e: "Minion & Summoner Bonus",
    g: 2,
    f: 10
  },
  $p = {
    c: "fasterAttacksChickenKing2",
    title: "Attack Cool-Down Reduction",
    e: "Minion & Summoner Bonus",
    g: 2,
    f: 10
  },
  aq = {
    c: "largerFlockChickenKing1",
    title: "I Love Chickens!",
    e: "One More Chicken",
    g: 1,
    f: 26
  },
  bq = {
    c: "largerFlockChickenKing2",
    title: "Chicken Army",
    e: "One More Chicken",
    g: 1,
    f: 26
  },
  cq = {
    c: "largerFlockChickenKing3",
    title: "Death by Chicken",
    e: "One More Chicken",
    g: 1,
    f: 26
  },
  dq = {
    c: "largerFlockChickenKing4",
    title: "Chicken Party",
    e: "One More Chicken",
    g: 1,
    f: 26
  },
  eq = {
    c: "largerFlockChickenKing5",
    title: "Flock",
    e: "One More Chicken",
    g: 1,
    f: 26
  },
  fq = {
    c: "largerFlockChickenKing6",
    title: "Fowl Territory",
    e: "One More Chicken",
    g: 1,
    f: 26
  },
  gq = {
    c: "barbarianChanceChickenKing",
    title: "Chicken Chance: Barbarian",
    e: "25% Chance of Barbarian",
    g: 25,
    f: 30
  },
  hq = {
    c: "ninjaChanceChickenKing",
    title: "Chicken Chance: Ninja",
    e: "25% Chance of Ninja",
    g: 25,
    f: 31
  },
  iq = {
    c: "rogueChanceChickenKing",
    title: "Chicken Chance: Rogue",
    e: "25% Chance of Rogue",
    g: 25,
    f: 32
  };
var jq = {
  ta: "Blast Stun",
  description: "Briefly Stuns Monsters",
  ca: "Bubbles",
  ya: null,
  X: 14,
  ga: 2,
  td: !0,
  Ra: 0,
  La: 15
};
var kq = {
  sB: {
    ta: "Shock",
    description: "Shock Damage",
    ca: "Gold Sparkles",
    ya: "Gold Sparkles",
    X: null,
    ga: 4,
    Ra: 0,
    La: 13,
    bo: !0
  },
  CB: {
    ta: "Spider Web",
    description: "Captures Enemies in a Web",
    ca: "Spider Web",
    ya: "Web",
    X: 1,
    ga: 2,
    td: !0,
    Ra: 20,
    La: 20
  },
  XD: {
    ta: "Lightning Rain",
    description: "Rains death upon your foes",
    ca: "Lightning Rain",
    ya: "Orange Star",
    X: null,
    ga: 6,
    Ra: 0,
    La: 30
  },
  br: {
    ta: "Chained Lightning",
    description: "Multiple enemies damaged",
    ca: "Gold Sparkles",
    ya: null,
    X: null,
    ga: 5,
    Ra: 0,
    La: 25
  }
};
var lq = {
  rD: {
    ta: "Fire Ring",
    description: "A ring of fiery death",
    ca: "Yellow Fire Ring",
    ya: "Yellow Star",
    X: null,
    ga: 4,
    Ra: 0,
    La: 13,
    bo: !0
  },
  Lz: {
    ta: "Fire Rain",
    description: "Raining Fiery Death.",
    ca: "Fire Rain",
    ya: "Yellow Star",
    X: null,
    ga: 6,
    Ra: 0,
    La: 40
  },
  Kz: {
    ta: "Fire Ball",
    description: "Exploding Flames",
    ca: "Orange Sparkles",
    ya: "Yellow Star",
    X: null,
    ga: 8,
    Ra: 0,
    La: 35
  },
  TE: {
    ta: "Turn Monster",
    description: "Monsters Attack Monsters",
    ca: "Red Eye Blink",
    ya: "Pink Star",
    X: 4,
    ga: 2,
    td: !0,
    Ra: 0,
    La: 20
  }
};
var mq = {
  ta: "Poison Ring",
  description: "A ring of poison death",
  ca: "Green Ring",
  ya: "Green Star",
  X: null,
  ga: 4,
  Ra: 10,
  La: 13,
  bo: !0
};
var nq = {
  yD: {
    ta: "Heal",
    description: "Restores 35% Health",
    ca: "Red Crosses",
    ya: "Red Crosses",
    X: null,
    ga: 1,
    Ra: 35,
    La: 20
  },
  xE: {
    ta: "Revive",
    description: "Removes Stun Effect",
    ca: "White Crosses",
    ya: "White Crosses",
    X: null,
    ga: 16,
    Ra: 1,
    td: !0,
    La: 20
  },
  Zz: {
    ta: "Increase Armor",
    description: "10% Party Armor",
    ca: "Shields",
    ya: null,
    X: 5,
    ga: 3,
    Ra: 10,
    td: !0,
    La: 700
  },
  FD: {
    ta: "Increase Damage",
    description: "10% Party Damage",
    ca: "Arm Flex",
    ya: null,
    X: 6,
    ga: 3,
    Ra: 10,
    td: !0,
    La: 700
  },
  ED: {
    ta: "Increase Attack Rating",
    description: "10% Party Attack Rating",
    ca: "Eagle",
    ya: null,
    X: 7,
    ga: 3,
    Ra: 10,
    td: !0,
    La: 700
  },
  $z: {
    ta: "Increase Defense Rating",
    description: "10% Party Defense Rating",
    ca: "Armor",
    ya: null,
    X: 8,
    ga: 3,
    Ra: 10,
    td: !0,
    La: 700
  }
};
var oq = {
  ME: {
    ta: "Taunt",
    description: "Enraged Monsters Attack Fighter",
    ca: "Target",
    ya: null,
    X: 10,
    ga: 2,
    td: !0,
    Ra: 50,
    La: 30
  }
};
var pq = {
  IB: {
    ta: "Stealth",
    description: "Sneaky Back-Stab",
    ca: "Color Spiral",
    ya: null,
    X: 11,
    ga: 2,
    td: !0,
    Ra: 100,
    La: 30
  },
  ID: {
    ta: "Loot Instantly",
    description: "Faster Grinding",
    ca: "Gold Sparkles",
    ya: null,
    X: null,
    ga: 14,
    td: !0,
    Ra: 0,
    La: 10
  },
  wu: {
    ta: "Detect Treasure Chest",
    description: "Automatic Loot",
    ca: "Blue Sparkles",
    ya: null,
    X: null,
    ga: 15,
    td: !0,
    Ra: 0,
    La: 10
  }
};
var qq = {
  rE: {
    ta: "Rage",
    description: "Greatly Increased Damage",
    ca: "Totems",
    ya: null,
    X: 12,
    ga: 2,
    td: !0,
    Ra: 100,
    La: 40
  },
  wB: {
    ta: "Sledge Hammer",
    description: "Splash Damage + Knock Back",
    ca: "Red Sparkles",
    ya: null,
    X: null,
    ga: 8,
    Ra: 0,
    La: 25
  }
};
var rq = {
  CD: {
    ta: "Hurt",
    description: "Unkind to Monsters",
    ca: "Skull Cross",
    ya: "Skull Cross",
    X: null,
    ga: 4,
    Ra: 0,
    La: 13,
    bo: !0
  },
  xD: {
    ta: "Green Death",
    description: "Bouncing Death",
    ca: "Green Skull",
    ya: "Green Skull",
    X: null,
    ga: 13,
    Ra: 0,
    La: 20
  },
  OB: {
    ta: "Skeleton Army",
    description: "Skeletons Arise!",
    ca: "Red Damage",
    ya: "Green Projectile",
    X: null,
    ga: 11,
    Ra: 1,
    La: 25
  },
  NB: {
    ta: "Phantom Skull",
    description: "Mage Companion",
    ca: "Red Damage",
    ya: null,
    X: null,
    ga: 9,
    Ra: 1,
    La: 25
  }
};
var sq = {
  PB: {
    ta: "Wolf Pack",
    description: "Summon Pack",
    ca: "Red Damage",
    ya: null,
    X: null,
    ga: 10,
    Ra: 1,
    La: 25,
    bo: !0
  },
  LB: {
    ta: "Guard Dog",
    description: "Canine Companion",
    ca: "Red Damage",
    ya: null,
    X: null,
    ga: 9,
    Ra: 1,
    La: 25
  },
  cE: {
    ta: "Minor Heal",
    description: "Restores 25% Health",
    ca: "Red Crosses",
    ya: "Red Crosses",
    X: null,
    ga: 1,
    Ra: 25,
    La: 25
  },
  DE: {
    ta: "Sleep",
    description: "Monsters Sleep",
    ca: "Sleep",
    ya: "Pink Star",
    X: 0,
    ga: 2,
    td: !0,
    Ra: 0,
    La: 20
  }
};
var tq = {
  Hx: {
    ta: "Swift Strike",
    description: "Monsters Die Quickly",
    ca: "White Damage",
    ya: "Grey Bullet",
    X: null,
    ga: 12,
    td: !1,
    Ra: 100,
    La: 30
  }
};
var uq = {
  KB: {
    ta: "Summon Chickens",
    description: "Standard Chicken Spell",
    ca: "Red Damage",
    ya: null,
    X: null,
    ga: 17,
    Ra: 1,
    La: 25,
    bo: !0
  },
  MB: {
    ta: "Guard Chicken",
    description: "Chicken Companion",
    ca: "Red Damage",
    ya: null,
    X: null,
    ga: 9,
    Ra: 1,
    La: 25
  }
};

function li(a) {
  this.ta = a.ta;
  this.ga = a.ga;
  this.ca = a.ca;
  this.ya = a.ya;
  this.X = a.X;
  this.Ra = a.Ra;
  this.La = a.La;
  this.mq = w.i.$a - 3 * this.La;
  this.td = a.td
}

function vq(a) {
  a.mq = w.i.$a - 3 * a.La
}

function wq(a) {
  a.mq > w.i.$a && vq(a);
  return w.i.$a - a.mq >= a.La
};

function xq(a, b) {
  this.eq = b;
  this.qg = a.qg;
  this.Wh = w.Kj.v(a.Wh);
  this.ke = a.rg;
  this.sg = a.sg;
  this.Yi = a.Yi;
  this.Qh = a.Qh;
  this.mB = a.xa ? new li(a.xa) : null;
  this.tn = a.fq;
  this.Qe = !0;
  this.mh = this.tg = 0;
  this.rn = yq(this);
  this.rg = zq(this);
  this.lx = Aq(this)
}

function Bq(a) {
  return a.Wh
}

function Cq(a) {
  a.mh++;
  var b = 30 + Dq.t;
  a.mh > b && (a.mh = b)
}

function yq(a) {
  return Ia(a.Qe ? a.sg : a.sg + (a.tg + 1) * a.Yi, Eq, 1)
}

function zq(a) {
  if (a.Qe) return "Locked";
  switch (a.tg) {
    case 1:
      return a.ke + " II";
    case 2:
      return a.ke + " III";
    case 3:
      return a.ke + " IV";
    case 4:
      return a.ke + " V";
    case 5:
      return a.ke + " VI";
    case 6:
      return a.ke + " VII";
    case 7:
      return a.ke + " VIII"
  }
  return a.ke
}

function Aq(a) {
  if (!a.Qe) switch (a.tg) {
    case 0:
      return a.ke + " II";
    case 1:
      return a.ke + " III";
    case 2:
      return a.ke + " IV";
    case 3:
      return a.ke + " V";
    case 4:
      return a.ke + " VI";
    case 5:
      return a.ke + " VII";
    case 6:
      return a.ke + " VIII"
  }
  return a.ke
}
xq.prototype.ts = function(a, b) {
  this.Qe && !a && (this.Qe = !1, Fq(w.nh, this));
  this.tg = b;
  if (0 < b && this.tn) {
    var c;
    for (c = 0; c < this.tg; c++) Qi(w.i.ce, this.tn.f, this.tn.g);
    Gq()
  }
  this.rg = zq(this);
  this.lx = Aq(this);
  this.rn = yq(this)
};

function Hq(a, b) {
  if (!a.Qe && (0 < a.mh || b)) {
    var c;
    c = w.i.D[k(w.i.D.length)];
    var d = qi(c);
    if (0 === d.length) c = null;
    else {
      var f = c.p.w;
      if (f) {
        var g, h, l = c.p.u,
          n = null,
          p, s = -1;
        for (h = 0; h < d.length; h++)(g = d[h], c === g || g.Va || g.p.w !== f || (p = g.Ja, p.wg || p.Kd || p.bi || -1 < a.eq.yl.indexOf(g) || (p = l.Ud(g.p.u), !(0 > s || p < s)))) || (n = g, s = p);
        c = n
      } else c = null
    }
    c || (c = Iq(w.i.D[k(w.i.D.length)]), c || (c = xh(), c = 0 === c.length ? null : c[k(c.length)]));
    c && (d = a.eq, 0 > d.yl.indexOf(c) && (d.yl.push(c), 4 <= d.yl.length && d.yl.shift()), d = w.i.ce.p, d.w = c.p.w, w.i.ce.Cb(c),
      a.mB ? (w.i.ce.ld = a.mB, w.i.ce.Y = Jq) : w.i.ce.Y = Kq, c = new Zb("Red Damage", d.u, d.u, !1, 1), pc(w.df, c), Lq(w.i.ce, 1), w.i.aa.fs(), b || (a.mh--, 0 > a.mh && (a.mh = 0)))
  }
};

function kh() {
  var a = w.eq;
  0 < a.yl.length && (a.yl.length = 0)
};

function Mq(a, b, c, d) {
  this.scroll = a;
  this.bq = b;
  this.cq = c;
  this.BE = d;
  this.gc = !1;
  this.Zc = null;
  this.ph = 0
}
e = Mq.prototype;
e.vf = function() {
  return this.scroll
};
e.oh = function(a) {
  this.gc = a
};
e.Re = function(a) {
  this.Zc = a
};
e.Ud = function() {
  return this.ph
};
e.Se = function(a) {
  this.ph = a
};

function Nq() {
  this.kf = []
}
Nq.prototype.zl = function() {
  var a;
  for (a = 0; a < this.kf.length; a++) this.kf[a].Re(null), this.kf[a].Se(0)
};

function Oq(a) {
  var b = w.Uh;
  a = b.kf.indexOf(a); - 1 < a && b.kf.splice(a, 1)
};
// NOTE: Scrolls
var Pq = [{
  qg: "shockScroll",
  rg: "Shock",
  Wh: "Scroll0028.PNG",
  xa: kq.sB,
  sg: 0,
  Yi: 4,
  Qh: 0
}, {
  qg: "spiderWebScroll",
  rg: "Spider Web",
  Wh: "Scroll0054.PNG",
  xa: kq.CB,
  sg: 3,
  Yi: 4,
  Qh: 4,
  fq: {
    f: 20,
    g: 2
  }
}, {
  qg: "arrowScroll",
  rg: "Arrow",
  Wh: "Scroll0012.PNG",
  xa: null,
  sg: 6,
  Yi: 4,
  Qh: 4,
  fq: {
    f: 23,
    g: 1
  }
}, {
  qg: "fireRainScroll",
  rg: "Fire Rain",
  Wh: "Scroll0022.PNG",
  xa: lq.Lz,
  sg: 9,
  Yi: 4,
  Qh: 2,
  fq: {
    f: 22,
    g: 1
  }
}, {
  qg: "chainedLightningScroll",
  rg: "Lightning",
  Wh: "Scroll0034.PNG",
  xa: kq.br,
  sg: 12,
  Yi: 4,
  Qh: 3,
  fq: {
    f: 21,
    g: 1
  }
}, {
  qg: "fireBallScroll",
  rg: "Fire Ball",
  Wh: "Scroll0097.PNG",
  xa: lq.Kz,
  sg: 15,
  Yi: 4,
  Qh: 2,
  fq: {
    f: 25,
    g: 1
  }
}];

function Qq() {
  this.kx = {};
  this.at = [];
  this.Pl = []
}

function Rq() {
  var a = w.nh;
  a.kx = {};
  a.at.length = 0;
  a.Pl.length = 0;
  var b, c;
  for (b = 0; b < Pq.length; b++) c = new xq(Pq[b], w.eq), c.ts(0 < Pq[b].sg, 0), a.at.push(c), a.kx[c.qg] = c, c.Qe || Fq(a, c)
}

function Fq(a, b) {
  0 > a.Pl.indexOf(b) && a.Pl.push(b)
}
Qq.prototype.vf = function(a) {
  return this.kx[a]
};

// NOTE: Potions
var potionInfo = [{
  name: "doubleGoldDropValue",
  title: "Double Gold",
  desc: "Gold Drop Values x2",
  img: "PotionLargeRose.PNG",
  id: 2
}, {
  name: "doubleKills",
  title: "Double Kills",
  desc: "2 Kills / Monster",
  img: "PotionLargeViolet.PNG",
  id: 1
}, {
  name: "doubleExperience",
  title: "Double Experience",
  desc: "2X XP From Kills",
  img: "PotionPurple.PNG",
  id: 3
}, {
  name: "speedWalker",
  title: "Fast Walking",
  desc: "+25% Speed",
  img: "PotionShortRuby.PNG",
  id: 4
}, {
  name: "fasterFarming",
  title: "Faster Farming",
  desc: "Increased Farm Speed",
  img: "PotionTallGreen.PNG",
  id: 5
}, {
  name: "fasterInfestation",
  title: "Faster Infestation",
  desc: "Start Farming Sooner",
  img: "PotionSquareBlue.PNG",
  id: 6
}, {
  name: "infiniteScrolls",
  title: "Infinite Scrolls",
  desc: "Fire At Will",
  img: "PotionShortSilver.PNG",
  id: 7
}, {
  name: "moreMonsters",
  title: "More Monsters",
  desc: "10 More Per Room",
  img: "PotionRoundedTopaz.PNG",
  id: 8
}, {
  name: "guaranteedItemDrops",
  title: "100% Item Drops",
  desc: "All Monsters Drop",
  img: "PotionShortPink.PNG",
  id: 9
}, {
  name: "potionDuration",
  title: "Potions Last Longer",
  desc: "Meta Potion",
  img: "PotionRed.PNG",
  id: 10
}, {
  name: "freeSpellCasting",
  title: "Spells Cost Nothing",
  desc: "No Spirit Needed",
  img: "PotionTriangularYellow.PNG",
  id: 11
}, {
  name: "moreKillsPerFarm",
  title: "More Kills Per Farm",
  desc: "2X Farm Kills",
  img: "PotionEmerald.PNG",
  id: 12
}, {
  name: "docileMonsters",
  title: "Docile Monsters",
  desc: "Harmless Victims",
  img: "PotionShortTan.PNG",
  id: 13
}, {
  name: "higherItemValues",
  title: "Item Gold Values",
  desc: "New Items +20% Gold",
  img: "PotionTallYellow2.PNG",
  id: 14
}, {
  name: "frailMonsters",
  title: "Frail Monsters",
  desc: "Monsters Die Easily",
  img: "PotionShortOrange.PNG",
  id: 15
}, {
  name: "autoFiringScrolls",
  title: "Scrolls Auto Fire",
  desc: "Scroll Counts Unaffected",
  img: "PotionLargeGreen.PNG",
  id: 16
}, {
  name: "doubleGoldDrops",
  title: "Double Gold Drops",
  desc: "2 Drops Per Monster",
  img: "PotionTriangularRuby.PNG",
  id: 17
}, {
  name: "doubleItemDrops",
  title: "Double Item Drops",
  desc: "2 Drops Per Monster",
  img: "PotionLargeTan.PNG",
  id: 18
}, {
  name: "randomTreasureRoom",
  title: "Random Treasure Rooms",
  desc: "25% Chance / Room",
  img: "PotionShortTan2.PNG",
  id: 19
}, {
  name: "randomBossEncounter",
  title: "Random Boss Fights",
  desc: "20% Chance / Room",
  img: "PotionTallBrown.PNG",
  id: 20
}];

// This has something to do with potions
function Tq(a) {
  this.name = a.name;
  this.img = w.Kj.v(a.img);
  this.title = a.title;
  this.desc = a.desc;
  this.id = a.id;
  this.Oe = !1;
  this.Vl = 0;
  this.mg = getPotionVals(this.id)
}

function Vq(a, b) {
  var c = a.Oe;
  a.Oe = b;
  a.Oe && !c ? a.mg && (a.mg.t = a.mg.nc) : !a.Oe && c && a.mg && (a.mg.t = a.mg.defaultValue)
}
Tq.prototype.aw = function() {
  this.Oe || !this.Oe && Wq(this) || (this.Oe = !0, this.Vl = w.i.$a, this.mg && (this.mg.t = this.mg.nc), w.i.aa.cs())
};

function getPotionVals(a) {
  switch (a) {
    case 2:
      return doubleGoldDropValuePotion;
    case 1:
      return doubleKillsPotion;
    case 3:
      return doubleExperiencePotion;
    case 4:
      return speedWalkerPotion;
    case 5:
      return fasterFarmingPotion;
    case 6:
      return fasterInfestationPotion;
    case 7:
      return infiniteScrollsPotion;
    case 8:
      return moreMonstersPotion;
    case 9:
      return guaranteedItemDropsPotion;
    case 10:
      return potionDurationPotion;
    case 11:
      return freeSpellCastingPotion;
    case 12:
      return moreKillsPerFarmPotion;
    case 13:
      return docileMonstersPotion;
    case 14:
      return higherItemValuesPotion;
    case 15:
      return frailMonstersPotion;
    case 16:
      return autoFiringScrollsPotion;
    case 17:
      return doubleGoldDropsPotion;
    case 18:
      return doubleItemDropsPotion;
    case 19:
      return randomTreasureRoomPotion;
    case 20:
      return randomBossEncounterPotion
  }
  console.log("potion type error: " + a);
  return null
}

function Wq(a) {
  return a.mg && a.mg.t === a.mg.nc
};

function mr(a, b, c, d) {
  this.hc = a;
  this.Qp = b;
  this.Rp = c;
  this.oE = d;
  this.gc = !1;
  this.Zc = null;
  this.ph = 0
}
mr.prototype.oh = function(a) {
  this.gc = a
};
mr.prototype.Re = function(a) {
  this.Zc = a
};
mr.prototype.Ud = function() {
  return this.ph
};
mr.prototype.Se = function(a) {
  this.ph = a
};

function nr() {
  this.Hf = []
}
nr.prototype.zl = function() {
  var a;
  for (a = 0; a < this.Hf.length; a++)
  this.Hf[a].Re(null), this.Hf[a].Se(0)
};

function or(a) {
  var b = w.Ti;
  a = b.Hf.indexOf(a); - 1 < a && b.Hf.splice(a, 1)
};

function pr() {
  this.re = []
}

function qr() {
  var a = w.Yj;
  if (0 < a.re.length) {
    var b;
    for (b = 0; b < a.re.length; b++) Vq(a.re[b], !1);
    a.re.length = 0
  }
}

function rr(a) {
  var b = w.Yj;
  a && b.re.length < sr + tr.t && b.re.push(a)
}
pr.prototype.bw = function(a) {
  if (a) {
    var b = this.re.indexOf(a); - 1 < b && this.re.splice(b, 1);
    a.Oe && Vq(a, !1)
  }
};
var yh = 3,
  Ld = 4,
  Pd = 5;
var ur = {
    h: 1,
    Fb: 1,
    Dc: 1,
    yc: 1,
    Fc: "Monster Killed",
    Gc: "Kill Monster"
  },
  vr = {
    h: 2,
    Fb: 1,
    Dc: 1,
    yc: 1,
    Fc: "Door Opened",
    Gc: "Open Door"
  },
  wr = {
    h: yh,
    Fb: 5,
    Dc: 5,
    yc: 5,
    Fc: "Encounter Won",
    Gc: "Win Encounter"
  },
  xr = {
    h: Ld,
    Fb: 100,
    Dc: 100,
    yc: 100,
    Fc: "Level Cleared",
    Gc: "Clear Level"
  },
  yr = {
    h: Pd,
    Fb: 300,
    Dc: 300,
    yc: 300,
    Fc: "Dungeon Cleared",
    Gc: "Conquer Dungeon"
  },
  zr = {
    h: 19,
    Fb: 2E3,
    Dc: 2E3,
    yc: 2E3,
    Fc: "Castle Conquered",
    Gc: "Conquer Castle"
  },
  Ar = {
    h: 6,
    Fb: 50,
    Dc: 50,
    yc: 50,
    Fc: "Treasure Chest",
    Gc: "Loot Treasure Chest"
  },
  Br = {
    h: 7,
    Fb: 50,
    Dc: 50,
    yc: 50,
    Fc: "Weapon Rack",
    Gc: "Loot Weapon Rack"
  },
  Cr = {
    h: 8,
    Fb: 50,
    Dc: 50,
    yc: 50,
    Fc: "Bookcase",
    Gc: "Loot Bookcase"
  },
  Dr = {
    h: 10,
    Fb: 2,
    Dc: 2,
    yc: 2,
    Fc: "Scroll Found",
    Gc: "Find Scroll"
  },
  Er = {
    h: 11,
    Fb: 15,
    Dc: 15,
    yc: 15,
    Fc: "Potion Found",
    Gc: "Find Potion"
  },
  Fr = {
    h: 12,
    Fb: 1,
    Dc: 1,
    yc: 1,
    Fc: "Item Found",
    Gc: "Find Item"
  },
  Gr = {
    h: 9,
    Fb: 1,
    Dc: 1,
    yc: 1,
    Fc: "Gold Found",
    Gc: "Find Gold"
  },
  Hr = {
    h: 18,
    Fb: 15,
    Dc: 15,
    yc: 15,
    Fc: "Minion Summoned",
    Gc: "Summon Minion"
  },
  Ir = {
    h: 13,
    Fb: 5,
    Dc: 5,
    yc: 5,
    Fc: "Uncommon Item",
    Gc: "Find Uncommon Item"
  },
  Jr = {
    h: 14,
    Fb: 25,
    Dc: 25,
    yc: 25,
    Fc: "Rare Item",
    Gc: "Find Rare Item"
  },
  Kr = {
    h: 15,
    Fb: 200,
    Dc: 200,
    yc: 200,
    Fc: "Historic Item",
    Gc: "Find Historic Item"
  },
  Lr = {
    h: 16,
    Fb: 2E3,
    Dc: 2E3,
    yc: 2E3,
    Fc: "Ancient Item",
    Gc: "Find Ancient Item"
  },
  Mr = {
    h: 17,
    Fb: 1,
    Dc: 1,
    yc: 1,
    Fc: "Item Sold",
    Gc: "Sell Item"
  },
  Nr = {
    h: 21,
    Fb: 10,
    Dc: 10,
    yc: 10,
    Fc: "Item Equipped",
    Gc: "Equip Item"
  },
  Or = {
    h: 22,
    Fb: 400,
    Dc: 400,
    yc: 400,
    Fc: "Character Level",
    Gc: "Level Up"
  },
  Pr = {};
Pr[1] = ur;
Pr[2] = vr;
Pr[yh] = wr;
Pr[Ld] = xr;
Pr[Pd] = yr;
Pr[19] = zr;
Pr[6] = Ar;
Pr[7] = Br;
Pr[8] = Cr;
Pr[10] = Dr;
Pr[11] = Er;
Pr[12] = Fr;
Pr[9] = Gr;
Pr[18] = Hr;
Pr[13] = Ir;
Pr[14] = Jr;
Pr[15] = Kr;
Pr[16] = Lr;
Pr[17] = Mr;
Pr[21] = Nr;
Pr[22] = Or;
var Qr = [ur, vr, wr, xr, yr, zr, Ar, Br, Cr, Dr, Er, Fr, Gr, Hr, Ir, Jr, Kr, Lr, Mr, Nr, Or];
var apUpgrades = [{
  id: "moreScrollsInStack",
  title: "More Scrolls in Stack",
  desc: "Max Scrolls +10",
  cost: 5E5,
  Tb: 1
}, {
  id: "cheaperFarms",
  title: "Cheaper Farms",
  desc: "10% Farm Discount",
  cost: 1E6,
  Tb: 5
}, {
  id: "extraPotionSlot1",
  title: "Extra Potion Slot",
  desc: "One More Potion",
  cost: 25E5,
  Tb: 3
}, {
  id: "extraPotionSlot2",
  title: "Extra Potion Slot",
  desc: "One More Potion",
  cost: 25E5,
  Tb: 3
}, {
  id: "walkingSpeedBoost1",
  title: "Walking Speed Boost",
  desc: "Walk 10% Faster",
  cost: 4E6,
  Tb: 2
}, {
  id: "walkingSpeedBoost2",
  title: "Walking Speed Boost",
  desc: "Walk 10% Faster",
  cost: 4E6,
  Tb: 2
}, {
  id: "offlineTimeBonus1",
  title: "Offline Time Bonus",
  desc: "+2 Hours",
  cost: 5E6,
  Tb: 9
}, {
  id: "offlineTimeBonus2",
  title: "Offline Time Bonus",
  desc: "+2 Hours",
  cost: 5E6,
  Tb: 9
}, {
  id: "cheaperMonsterLevels",
  title: "Cheaper Monster Levels",
  desc: "10% Level Discount",
  cost: 6E6,
  Tb: 6
}, {
  id: "cheaperMonsterLevels2",
  title: "Cheaper Monster Levels",
  desc: "10% Level Discount",
  cost: 6E6,
  Tb: 6
}, {
  id: "itemSales1",
  title: "Better Item Sales",
  desc: "Shops Pay 10% More",
  cost: 8E6,
  Tb: 10
}, {
  id: "itemSales2",
  title: "Better Item Sales",
  desc: "Shops Pay 10% More",
  cost: 8E6,
  Tb: 10
}, {
  id: "moreFarmKills1",
  title: "More Kills Per Farm",
  desc: "Harvested Kills +20",
  cost: 7E6,
  Tb: 8
}, {
  id: "moreFarmKills2",
  title: "More Kills Per Farm",
  desc: "Harvested Kills +20",
  cost: 7E6,
  Tb: 8
}, {
  id: "potionTurnDuration1",
  title: "Potion Duration",
  desc: "Last 15% Longer",
  cost: 8E6,
  Tb: 7
}, {
  id: "potionTurnDuration",
  title: "Potion Duration",
  desc: "Last 15% Longer",
  cost: 8E6,
  Tb: 7
}, {
  id: "extraCharacterSlot",
  title: "5th Character Slot",
  desc: "More Carnage",
  cost: 1E7,
  Tb: 4
}, {
  id: "coolDownTurn1",
  title: "Permanent Faster Attacks",
  desc: "Cool-Down Turns -1",
  cost: 11E6,
  Tb: 11
}, {
  id: "coolDownTurn2",
  title: "Permanent Faster Attacks",
  desc: "Cool-Down Turns -1",
  cost: 11E6,
  Tb: 11
}, {
  id: "healthRegeneration1",
  title: "Faster Healing",
  desc: "Party Regeneration +1%",
  cost: 12E6,
  Tb: 12
}, {
  id: "healthRegeneration2",
  title: "Faster Healing",
  desc: "Party Regeneration +1%",
  cost: 12E6,
  Tb: 12
}, {
  id: "spiritRegeneration1",
  title: "Spirit Regeneration",
  desc: "Party Regeneration +1%",
  cost: 13E6,
  Tb: 13
}, {
  id: "spiritRegeneration2",
  title: "Spirit Regeneration",
  desc: "Party Regeneration +1%",
  cost: 13E6,
  Tb: 13
}];

function Sr() {
  var a = w.i.ae;
  a.Dd = 0;
  a.An = 0;
  a.Qi = {};
  a.pj = {};
  var b, c;
  for (b = 0; b < Qr.length; b++) c = Qr[b], c.Fb = c.Dc, a.Qi[c.h] && console.log("error - duplicate point event type: " + c.h), a.Qi[c.h] = 0, a.pj[c.h] = 0;
  for (b = 0; b < a.tl.length; b++) a.tl[b].og()
}

function Kd(a) {
  var b = w.i.ae,
    c = Pr[a];
  if (c) {
    c = c.Fb;
    b.Dd += c;
    var d = b.Qi[a];
    d || (d = 0);
    var f = b.pj[a];
    f || (f = 0);
    f++;
    b.Qi[a] = d + c;
    b.pj[a] = f
  } else console.log("error: point settings not found: " + a)
}

function Tr(a, b) {
  var c = w.i.ae,
    d = Pr[a];
  d ? (d.Fb += b, Ur(c)) : console.log("error: point settings not found: " + a)
}

function Ur(a) {
  var b, c, d, f;
  for (b = a.Dd = 0; b < Qr.length; b++) f = Qr[b].h, c = Qr[b].Fb, (d = a.pj[f]) || (d = 0), c *= d, a.Qi[f] = c, a.Dd += c;
  a.Dd -= a.An;
  0 > a.Dd && (a.Dd = 0)
};
var achievments = [{
    id: "monsterKills100",
    desc: "Kill 100 Monsters",
    m: 1,
    requirement: 100,
    h: 1
  }, {
    id: "monsterKills1000",
    desc: "Kill 1,000 Monsters",
    m: 1,
    requirement: 1E3,
    h: 21
  }, {
    id: "monsterKills5K",
    desc: "Kill 5,000 Monsters",
    m: 1,
    requirement: 5E3,
    h: 1
  }, {
    id: "monsterKills10K",
    desc: "Kill 10,000 Monsters",
    m: 1,
    requirement: 1E4,
    h: 13
  }, {
    id: "monsterKills25K",
    desc: "Kill 25,000 Monsters",
    m: 1,
    requirement: 25E3,
    h: 1
  }, {
    id: "monsterKills50K",
    desc: "Kill 50,000 Monsters",
    m: 1,
    requirement: 5E4,
    h: 14
  }, {
    id: "monsterKills100K",
    desc: "Kill 100,000 Monsters",
    m: 1,
    requirement: 1E5,
    h: 1
  }, {
    id: "monsterKills250K",
    desc: "Kill 250,000 Monsters",
    m: 1,
    requirement: 25E4,
    h: 15
  },
  {
    id: "monsterKills500K",
    desc: "Kill 500,000 Monsters",
    m: 1,
    requirement: 5E5,
    h: 1
  }, {
    id: "monsterKills1M",
    desc: "Kill 1,000,000 Monsters",
    m: 1,
    requirement: 1E6,
    h: 16
  }, {
    id: "monsterKills2M",
    desc: "Kill 2,000,000 Monsters",
    m: 1,
    requirement: 2E6,
    h: 2
  }, {
    id: "scrollKills100",
    desc: "100 Scroll Kills",
    m: 2,
    requirement: 100,
    h: 2
  }, {
    id: "scrollKills500",
    desc: "500 Scroll Kills",
    m: 2,
    requirement: 500,
    h: 22
  }, {
    id: "scrollKills1000",
    desc: "1,000 Scroll Kills",
    m: 2,
    requirement: 1E3,
    h: yh
  }, {
    id: "scrollKills2K",
    desc: "2,000 Scroll Kills",
    m: 2,
    requirement: 2E3,
    h: 9
  }, {
    id: "scrollKills3K",
    desc: "3,000 Scroll Kills",
    m: 2,
    requirement: 3E3,
    h: 12
  }, {
    id: "scrollKills5K",
    desc: "5,000 Scroll Kills",
    m: 2,
    requirement: 5E3,
    h: 1
  }, {
    id: "scrollKills7K",
    desc: "7,000 Scroll Kills",
    m: 2,
    requirement: 7E3,
    h: 7
  }, {
    id: "scrollKills10K",
    desc: "10,000 Scroll Kills",
    m: 2,
    requirement: 1E4,
    h: 2
  }, {
    id: "scrollKills15K",
    desc: "15,000 Scroll Kills",
    m: 2,
    requirement: 15E3,
    h: 19
  }, {
    id: "scrollKills20K",
    desc: "20,000 Scroll Kills",
    m: 2,
    requirement: 2E4,
    h: 21
  }, {
    id: "scrollUses100",
    desc: "100 Scrolls Used",
    m: 3,
    requirement: 100,
    h: 10
  }, {
    id: "scrollUses300",
    desc: "300 Scrolls Used",
    m: 3,
    requirement: 300,
    h: 18
  }, {
    id: "scrollUses500",
    desc: "500 Scrolls Used",
    m: 3,
    requirement: 500,
    h: Pd
  }, {
    id: "scrollUses750",
    desc: "750 Scrolls Used",
    m: 3,
    requirement: 750,
    h: 21
  }, {
    id: "scrollUses1000",
    desc: "1,000 Scrolls Used",
    m: 3,
    requirement: 1E3,
    h: 13
  }, {
    id: "scrollUses2K",
    desc: "2,000 Scrolls Used",
    m: 3,
    requirement: 2E3,
    h: 14
  }, {
    id: "scrollUses3K",
    desc: "3,000 Scrolls Used",
    m: 3,
    requirement: 3E3,
    h: 15
  }, {
    id: "scrollUses4K",
    desc: "4,000 Scrolls Used",
    m: 3,
    requirement: 4E3,
    h: 16
  }, {
    id: "scrollUses5K",
    desc: "5,000 Scrolls Used",
    m: 3,
    requirement: 5E3,
    h: 17
  }, {
    id: "scrollUses7500",
    desc: "7,500 Scrolls Used",
    m: 3,
    requirement: 7500,
    h: 18
  }, {
    id: "scrollUses15K",
    desc: "15,000 Scrolls Used",
    m: 3,
    requirement: 15E3,
    h: 21
  }, {
    id: "scrollUses30K",
    desc: "30,000 Scrolls Used",
    m: 3,
    requirement: 3E4,
    h: 6
  }, {
    id: "scrollUses45K",
    desc: "45,000 Scrolls Used",
    m: 3,
    requirement: 45E3,
    h: 7
  }, {
    id: "scrollUses60K",
    desc: "60,000 Scrolls Used",
    m: 3,
    requirement: 6E4,
    h: 8
  }, {
    id: "potionUses100",
    desc: "100 Potions Used",
    m: 4,
    requirement: 100,
    h: 8
  }, {
    id: "potionUses200",
    desc: "200 Potions Used",
    m: 4,
    requirement: 200,
    h: 7
  }, {
    id: "potionUses300",
    desc: "300 Potions Used",
    m: 4,
    requirement: 300,
    h: 6
  }, {
    id: "potionUses400",
    desc: "400 Potions Used",
    m: 4,
    requirement: 400,
    h: 11
  }, {
    id: "potionUses500",
    desc: "500 Potions Used",
    m: 4,
    requirement: 500,
    h: 10
  }, {
    id: "potionUses750",
    desc: "750 Potions Used",
    m: 4,
    requirement: 750,
    h: 2
  }, {
    id: "potionUses1000",
    desc: "1000 Potions Used",
    m: 4,
    requirement: 1E3,
    h: 17
  }, {
    id: "potionUses1250",
    desc: "1250 Potions Used",
    m: 4,
    requirement: 1250,
    h: 11
  }, {
    id: "potionUses2K",
    desc: "2000 Potions Used",
    m: 4,
    requirement: 2E3,
    h: 10
  }, {
    id: "potionUses2500",
    desc: "2500 Potions Used",
    m: 4,
    requirement: 2500,
    h: 21
  }, {
    id: "potionUses3K",
    desc: "3000 Potions Used",
    m: 4,
    requirement: 3E3,
    h: 17
  }, {
    id: "treasureChests10",
    desc: "10 Treasure Chests Looted",
    m: 5,
    requirement: 10,
    h: 6
  }, {
    id: "treasureChests25",
    desc: "25 Treasure Chests Looted",
    m: 5,
    requirement: 25,
    h: 17
  }, {
    id: "treasureChests50",
    desc: "50 Treasure Chests Looted",
    m: 5,
    requirement: 50,
    h: 9
  }, {
    id: "treasureChests75",
    desc: "75 Treasure Chests Looted",
    m: 5,
    requirement: 75,
    h: 11
  }, {
    id: "treasureChests100",
    desc: "100 Treasure Chests Looted",
    m: 5,
    requirement: 100,
    h: 10
  }, {
    id: "treasureChests125",
    desc: "125 Treasure Chests Looted",
    m: 5,
    requirement: 125,
    h: 18
  }, {
    id: "treasureChests1K",
    desc: "1000 Treasure Chests Looted",
    m: 5,
    requirement: 1E3,
    h: 2
  }, {
    id: "treasureChests2500",
    desc: "2500 Treasure Chests Looted",
    m: 5,
    requirement: 2500,
    h: 9
  }, {
    id: "treasureChests5K",
    desc: "5,000 Treasure Chests Looted",
    m: 5,
    requirement: 5E3,
    h: 12
  }, {
    id: "treasureChests10K",
    desc: "10,000 Treasure Chests Looted",
    m: 5,
    requirement: 1E4,
    h: 11
  }, {
    id: "treasureChests20K",
    desc: "20,000 Treasure Chests Looted",
    m: 5,
    requirement: 2E4,
    h: Pd
  }, {
    id: "weaponRacks10",
    desc: "10 Weapon Racks Looted",
    m: 6,
    requirement: 10,
    h: 7
  }, {
    id: "weaponRacks25",
    desc: "25 Weapon Racks Looted",
    m: 6,
    requirement: 25,
    h: 13
  }, {
    id: "weaponRacks50",
    desc: "50 Weapon Racks Looted",
    m: 6,
    requirement: 50,
    h: 14
  }, {
    id: "weaponRacks75",
    desc: "75 Weapon Racks Looted",
    m: 6,
    requirement: 75,
    h: 15
  }, {
    id: "weaponRacks100",
    desc: "100 Weapon Racks Looted",
    m: 6,
    requirement: 100,
    h: 16
  }, {
    id: "weaponRacks125",
    desc: "125 Weapon Racks Looted",
    m: 6,
    requirement: 125,
    h: 17
  }, {
    id: "weaponRacks1K",
    desc: "1,000 Weapon Racks Looted",
    m: 6,
    requirement: 1E3,
    h: 13
  }, {
    id: "weaponRacks2500",
    desc: "2,500 Weapon Racks Looted",
    m: 6,
    requirement: 2500,
    h: 14
  }, {
    id: "weaponRacks5K",
    desc: "5,000 Weapon Racks Looted",
    m: 6,
    requirement: 5E3,
    h: 15
  }, {
    id: "weaponRacks10K",
    desc: "10,000 Weapon Racks Looted",
    m: 6,
    requirement: 1E4,
    h: 16
  }, {
    id: "weaponRacks20K",
    desc: "20,000 Weapon Racks Looted",
    m: 6,
    requirement: 2E4,
    h: 8
  }, {
    id: "bookcases10",
    desc: "10 Bookcases Looted",
    m: 7,
    requirement: 10,
    h: 8
  }, {
    id: "bookcases25",
    desc: "25 Bookcases Looted",
    m: 7,
    requirement: 25,
    h: 7
  }, {
    id: "bookcases50",
    desc: "50 Bookcases Looted",
    m: 7,
    requirement: 50,
    h: 6
  }, {
    id: "bookcases75",
    desc: "75 Bookcases Looted",
    m: 7,
    requirement: 75,
    h: 8
  }, {
    id: "bookcases100",
    desc: "100 Bookcases Looted",
    m: 7,
    requirement: 100,
    h: 7
  }, {
    id: "bookcases125",
    desc: "125 Bookcases Looted",
    m: 7,
    requirement: 125,
    h: 6
  }, {
    id: "bookcases1K",
    desc: "1,000 Bookcases Looted",
    m: 7,
    requirement: 1E3,
    h: 11
  }, {
    id: "bookcases2500",
    desc: "2,500 Bookcases Looted",
    m: 7,
    requirement: 2500,
    h: yh
  },
  {
    id: "bookcases5K",
    desc: "5,000 Bookcases Looted",
    m: 7,
    requirement: 5E3,
    h: 18
  }, {
    id: "bookcases9K",
    desc: "9,000 Bookcases Looted",
    m: 7,
    requirement: 9E3,
    h: 22
  }, {
    id: "itemsSold100",
    desc: "100 Items Sold",
    m: 8,
    requirement: 100,
    h: 17
  }, {
    id: "itemsSold500",
    desc: "500 Items Sold",
    m: 8,
    requirement: 500,
    h: yh
  }, {
    id: "itemsSold1000",
    desc: "1,000 Items Sold",
    m: 8,
    requirement: 1E3,
    h: 17
  }, {
    id: "itemsSold2K",
    desc: "2,000 Items Sold",
    m: 8,
    requirement: 2E3,
    h: 9
  }, {
    id: "itemsSold3K",
    desc: "3,000 Items Sold",
    m: 8,
    requirement: 3E3,
    h: 10
  }, {
    id: "itemsSold5K",
    desc: "5,000 Items Sold",
    m: 8,
    requirement: 5E3,
    h: 11
  }, {
    id: "itemsSold10K",
    desc: "10,000 Items Sold",
    m: 8,
    requirement: 1E4,
    h: 12
  }, {
    id: "itemsSold15K",
    desc: "15,000 Items Sold",
    m: 8,
    requirement: 15E3,
    h: Ld
  }, {
    id: "itemsSold20K",
    desc: "20,000 Items Sold",
    m: 8,
    requirement: 2E4,
    h: 1
  }, {
    id: "itemsSold40K",
    desc: "40,000 Items Sold",
    m: 8,
    requirement: 4E4,
    h: 16
  }, {
    id: "itemsSold60K",
    desc: "60,000 Items Sold",
    m: 8,
    requirement: 6E4,
    h: 8
  }, {
    id: "itemsSold80K",
    desc: "80,000 Items Sold",
    m: 8,
    requirement: 8E4,
    h: 21
  }, {
    id: "itemsSold100K",
    desc: "100,000 Items Sold",
    m: 8,
    requirement: 1E5,
    h: 17
  }, {
    id: "farmsPurchased5",
    desc: "5 Farms Purchased",
    m: 9,
    requirement: 5,
    h: 2
  }, {
    id: "farmsPurchased15",
    desc: "15 Farms Purchased",
    m: 9,
    requirement: 15,
    h: 9
  }, {
    id: "farmsPurchased25",
    desc: "25 Farms Purchased",
    m: 9,
    requirement: 25,
    h: 12
  }, {
    id: "farmsPurchased50",
    desc: "50 Farms Purchased",
    m: 9,
    requirement: 50,
    h: 10
  }, {
    id: "farmsPurchased75",
    desc: "75 Farms Purchased",
    m: 9,
    requirement: 75,
    h: 11
  }, {
    id: "farmsPurchased100",
    desc: "100 Farms Purchased",
    m: 9,
    requirement: 100,
    h: 13
  }, {
    id: "farmsPurchased150",
    desc: "150 Farms Purchased",
    m: 9,
    requirement: 150,
    h: 14
  }, {
    id: "farmsPurchased200",
    desc: "200 Farms Purchased",
    m: 9,
    requirement: 200,
    h: 15
  }, {
    id: "farmsPurchased250",
    desc: "250 Farms Purchased",
    m: 9,
    requirement: 250,
    h: 16
  }, {
    id: "farmsPurchased300",
    desc: "300 Farms Purchased",
    m: 9,
    requirement: 300,
    h: Pd
  }, {
    id: "farmsPurchased500",
    desc: "500 Farms Purchased",
    m: 9,
    requirement: 500,
    h: 2
  }, {
    id: "farmsPurchased600",
    desc: "600 Farms Purchased",
    m: 9,
    requirement: 600,
    h: 22
  }, {
    id: "farmsPurchased700",
    desc: "700 Farms Purchased",
    m: 9,
    requirement: 700,
    h: 21
  }, {
    id: "dungeonsCleared10",
    desc: "10 Dungeons Cleared",
    m: 10,
    requirement: 10,
    h: Pd
  }, {
    id: "dungeonsCleared25",
    desc: "25 Dungeons Cleared",
    m: 10,
    requirement: 25,
    h: 19
  }, {
    id: "dungeonsCleared50",
    desc: "50 Dungeons Cleared",
    m: 10,
    requirement: 50,
    h: Ld
  }, {
    id: "dungeonsCleared100",
    desc: "100 Dungeons Cleared",
    m: 10,
    requirement: 100,
    h: 17
  }, {
    id: "dungeonsCleared200",
    desc: "200 Dungeons Cleared",
    m: 10,
    requirement: 200,
    h: 8
  }, {
    id: "dungeonsCleared300",
    desc: "300 Dungeons Cleared",
    m: 10,
    requirement: 300,
    h: 7
  }, {
    id: "dungeonsCleared400",
    desc: "400 Dungeons Cleared",
    m: 10,
    requirement: 400,
    h: 6
  }, {
    id: "dungeonsCleared500",
    desc: "500 Dungeons Cleared",
    m: 10,
    requirement: 500,
    h: yh
  }, {
    id: "dungeonsCleared750",
    desc: "750 Dungeons Cleared",
    m: 10,
    requirement: 750,
    h: Pd
  }, {
    id: "dungeonsCleared1K",
    desc: "1,000 Dungeons Cleared",
    m: 10,
    requirement: 1E3,
    h: 21
  }, {
    id: "dungeonsCleared1500",
    desc: "1,500 Dungeons Cleared",
    m: 10,
    requirement: 1500,
    h: Ld
  }, {
    id: "dungeonsCleared2K",
    desc: "2,000 Dungeons Cleared",
    m: 10,
    requirement: 2E3,
    h: 17
  }, {
    id: "dungeonsCleared3K",
    desc: "3,000 Dungeons Cleared",
    m: 10,
    requirement: 3E3,
    h: 21
  }, {
    id: "dungeonsCleared4K",
    desc: "4,000 Dungeons Cleared",
    m: 10,
    requirement: 4E3,
    h: 22
  }, {
    id: "castlesConquered5",
    desc: "5 Castles Conquered",
    m: 11,
    requirement: 5,
    h: 19
  }, {
    id: "castlesConquered30",
    desc: "30 Castles Conquered",
    m: 11,
    requirement: 30,
    h: Pd
  }, {
    id: "castlesConquered60",
    desc: "60 Castles Conquered",
    m: 11,
    requirement: 60,
    h: 2
  }, {
    id: "castlesConquered90",
    desc: "90 Castles Conquered",
    m: 11,
    requirement: 90,
    h: 9
  }, {
    id: "castlesConquered120",
    desc: "120 Castles Conquered",
    m: 11,
    requirement: 120,
    h: 11
  }, {
    id: "castlesConquered150",
    desc: "150 Castles Conquered",
    m: 11,
    requirement: 150,
    h: 10
  }, {
    id: "castlesConquered180",
    desc: "180 Castles Conquered",
    m: 11,
    requirement: 180,
    h: 12
  }, {
    id: "castlesConquered210",
    desc: "210 Castles Conquered",
    m: 11,
    requirement: 210,
    h: 2
  },
  {
    id: "castlesConquered240",
    desc: "240 Castles Conquered",
    m: 11,
    requirement: 240,
    h: 8
  }, {
    id: "castlesConquered270",
    desc: "270 Castles Conquered",
    m: 11,
    requirement: 270,
    h: yh
  }, {
    id: "castlesConquered300",
    desc: "300 Castles Conquered",
    m: 11,
    requirement: 300,
    h: 19
  }, {
    id: "spellsCast1000",
    desc: "1,000 Spells Cast",
    m: 12,
    requirement: 1E3,
    h: Ld
  }, {
    id: "spellsCast5K",
    desc: "5,000 Spells Cast",
    m: 12,
    requirement: 5E3,
    h: Pd
  }, {
    id: "spellsCast25K",
    desc: "25,000 Spells Cast",
    m: 12,
    requirement: 25E3,
    h: 19
  }, {
    id: "spellsCast50K",
    desc: "50,000 Spells Cast",
    m: 12,
    requirement: 5E4,
    h: 16
  }, {
    id: "spellsCast100K",
    desc: "100,000 Spells Cast",
    m: 12,
    requirement: 1E5,
    h: 15
  }, {
    id: "spellsCast150K",
    desc: "150,000 Spells Cast",
    m: 12,
    requirement: 15E4,
    h: 14
  }, {
    id: "spellsCast200K",
    desc: "200,000 Spells Cast",
    m: 12,
    requirement: 2E5,
    h: 13
  }, {
    id: "spellsCast300K",
    desc: "300,000 Spells Cast",
    m: 12,
    requirement: 3E5,
    h: 9
  }, {
    id: "spellsCast500K",
    desc: "500,000 Spells Cast",
    m: 12,
    requirement: 5E5,
    h: 12
  }, {
    id: "spellsCast700K",
    desc: "700,000 Spells Cast",
    m: 12,
    requirement: 7E5,
    h: 11
  }, {
    id: "spellsCast900K",
    desc: "900,000 Spells Cast",
    m: 12,
    requirement: 9E5,
    h: 10
  }, {
    id: "spellsCast1.1M",
    desc: "1,100,000 Spells Cast",
    m: 12,
    requirement: 11E5,
    h: 21
  }, {
    id: "meleeAttacks1000",
    desc: "1,000 Melee Attacks",
    m: 13,
    requirement: 1E3,
    h: 21
  }, {
    id: "meleeAttacks5K",
    desc: "5,000 Melee Attacks",
    m: 13,
    requirement: 5E3,
    h: 9
  }, {
    id: "meleeAttacks25K",
    desc: "25,000 Melee Attacks",
    m: 13,
    requirement: 25E3,
    h: 12
  }, {
    id: "meleeAttacks50K",
    desc: "50,000 Melee Attacks",
    m: 13,
    requirement: 5E4,
    h: 11
  }, {
    id: "meleeAttacks100K",
    desc: "100,000 Melee Attacks",
    m: 13,
    requirement: 1E5,
    h: 10
  }, {
    id: "meleeAttacks150K",
    desc: "150,000 Melee Attacks",
    m: 13,
    requirement: 15E4,
    h: Ld
  }, {
    id: "meleeAttacks200K",
    desc: "200,000 Melee Attacks",
    m: 13,
    requirement: 2E5,
    h: 2
  }, {
    id: "meleeAttacks400K",
    desc: "400,000 Melee Attacks",
    m: 13,
    requirement: 4E5,
    h: 22
  }, {
    id: "meleeAttacks700K",
    desc: "700,000 Melee Attacks",
    m: 13,
    requirement: 7E5,
    h: 17
  }, {
    id: "meleeAttacks1M",
    desc: "1,000,000 Melee Attacks",
    m: 13,
    requirement: 1E6,
    h: 19
  }, {
    id: "meleeAttacks1.5M",
    desc: "1,500,000 Melee Attacks",
    m: 13,
    requirement: 15E5,
    h: 9
  }, {
    id: "meleeAttacks2M",
    desc: "2,000,000 Melee Attacks",
    m: 13,
    requirement: 2E6,
    h: 11
  }, {
    id: "meleeAttacks3M",
    desc: "3,000,000 Melee Attacks",
    m: 13,
    requirement: 3E6,
    h: 10
  }, {
    id: "rangedAttacks1000",
    desc: "1,000 Ranged Attacks",
    m: 14,
    requirement: 1E3,
    h: Pd
  }, {
    id: "rangedAttacks5K",
    desc: "5,000 Ranged Attacks",
    m: 14,
    requirement: 5E3,
    h: 9
  }, {
    id: "rangedAttacks25K",
    desc: "25,000 Ranged Attacks",
    m: 14,
    requirement: 25E3,
    h: 11
  }, {
    id: "rangedAttacks50K",
    desc: "50,000 Ranged Attacks",
    m: 14,
    requirement: 5E4,
    h: 10
  }, {
    id: "rangedAttacks100K",
    desc: "100,000 Ranged Attacks",
    m: 14,
    requirement: 1E5,
    h: 12
  }, {
    id: "rangedAttacks150K",
    desc: "150,000 Ranged Attacks",
    m: 14,
    requirement: 15E4,
    h: Ld
  }, {
    id: "rangedAttacks200K",
    desc: "200,000 Ranged Attacks",
    m: 14,
    requirement: 2E5,
    h: 22
  }, {
    id: "rangedAttacks300K",
    desc: "300,000 Ranged Attacks",
    m: 14,
    requirement: 3E5,
    h: 17
  }, {
    id: "rangedAttacks400K",
    desc: "400,000 Ranged Attacks",
    m: 14,
    requirement: 4E5,
    h: 19
  }, {
    id: "rangedAttacks500K",
    desc: "500,000 Ranged Attacks",
    m: 14,
    requirement: 5E5,
    h: 10
  }, {
    id: "rangedAttacks700K",
    desc: "700,000 Ranged Attacks",
    m: 14,
    requirement: 7E5,
    h: 11
  }, {
    id: "rangedAttacks900K",
    desc: "900,000 Ranged Attacks",
    m: 14,
    requirement: 9E5,
    h: 9
  }, {
    id: "rangedAttacks1.2M",
    desc: "1,200,000 Ranged Attacks",
    m: 14,
    requirement: 12E5,
    h: 21
  }, {
    id: "minionsSummoned50",
    desc: "50 Minions Summoned",
    m: 15,
    requirement: 50,
    h: Pd
  }, {
    id: "minionsSummoned100",
    desc: "100 Minions Summoned",
    m: 15,
    requirement: 100,
    h: Ld
  }, {
    id: "minionsSummoned250",
    desc: "250 Minions Summoned",
    m: 15,
    requirement: 250,
    h: 19
  }, {
    id: "minionsSummoned500",
    desc: "500 Minions Summoned",
    m: 15,
    requirement: 500,
    h: 7
  }, {
    id: "minionsSummoned750",
    desc: "750 Minions Summoned",
    m: 15,
    requirement: 750,
    h: 8
  }, {
    id: "minionsSummoned1000",
    desc: "1,000 Minions Summoned",
    m: 15,
    requirement: 1E3,
    h: 6
  }, {
    id: "minionsSummoned1500",
    desc: "1,500 Minions Summoned",
    m: 15,
    requirement: 1500,
    h: 22
  }, {
    id: "minionsSummoned2K",
    desc: "2,000 Minions Summoned",
    m: 15,
    requirement: 2E3,
    h: 9
  }, {
    id: "minionsSummoned3K",
    desc: "3,000 Minions Summoned",
    m: 15,
    requirement: 3E3,
    h: 11
  }, {
    id: "minionsSummoned5K",
    desc: "5,000 Minions Summoned",
    m: 15,
    requirement: 5E3,
    h: 10
  }, {
    id: "minionsSummoned30K",
    desc: "30,000 Minions Summoned",
    m: 15,
    requirement: 3E4,
    h: 17
  }, {
    id: "minionsSummoned50K",
    desc: "50,000 Minions Summoned",
    m: 15,
    requirement: 5E4,
    h: 14
  }, {
    id: "minionsSummoned75K",
    desc: "75,000 Minions Summoned",
    m: 15,
    requirement: 75E3,
    h: 15
  }, {
    id: "minionsSummoned100K",
    desc: "100,000 Minions Summoned",
    m: 15,
    requirement: 1E5,
    h: 13
  }, {
    id: "minionsSummoned125K",
    desc: "125,000 Minions Summoned",
    m: 15,
    requirement: 125E3,
    h: 16
  }, {
    id: "minionsSummoned150K",
    desc: "150,000 Minions Summoned",
    m: 15,
    requirement: 15E4,
    h: 21
  }, {
    id: "minionsSummoned200K",
    desc: "200,000 Minions Summoned",
    m: 15,
    requirement: 2E5,
    h: yh
  }, {
    id: "minionKills100",
    desc: "100 Minion Kills",
    m: 28,
    requirement: 100,
    h: 2
  }, {
    id: "minionKills1K",
    desc: "1,000 Minion Kills",
    m: 28,
    requirement: 1E3,
    h: 19
  }, {
    id: "minionKills5K",
    desc: "5,000 Minion Kills",
    m: 28,
    requirement: 5E3,
    h: 17
  }, {
    id: "minionKills10K",
    desc: "10,000 Minion Kills",
    m: 28,
    requirement: 1E4,
    h: 18
  }, {
    id: "minionKills25K",
    desc: "25,000 Minion Kills",
    m: 28,
    requirement: 25E3,
    h: 21
  }, {
    id: "minionKills50K",
    desc: "50,000 Minion Kills",
    m: 28,
    requirement: 5E4,
    h: 22
  }, {
    id: "minionKills100K",
    desc: "100,000 Minion Kills",
    m: 28,
    requirement: 1E5,
    h: yh
  }, {
    id: "minionKills250K",
    desc: "250,000 Minion Kills",
    m: 28,
    requirement: 25E4,
    h: 11
  }, {
    id: "minionKills500K",
    desc: "500,000 Minion Kills",
    m: 28,
    requirement: 5E5,
    h: 18
  }, {
    id: "minionKills750K",
    desc: "750,000 Minion Kills",
    m: 28,
    requirement: 75E4,
    h: 8
  }, {
    id: "minionKills1M",
    desc: "1,000,000 Minion Kills",
    m: 28,
    requirement: 1E6,
    h: 22
  }, {
    id: "characterLevel15",
    desc: "Character Level 15",
    m: 16,
    requirement: 15,
    h: 13
  }, {
    id: "characterLevel30",
    desc: "Character Level 30",
    m: 16,
    requirement: 30,
    h: 14
  }, {
    id: "characterLevel45",
    desc: "Character Level 45",
    m: 16,
    requirement: 45,
    h: 15
  }, {
    id: "characterLevel60",
    desc: "Character Level 60",
    m: 16,
    requirement: 60,
    h: 16
  }, {
    id: "characterLevel75",
    desc: "Character Level 75",
    m: 16,
    requirement: 75,
    h: 17
  }, {
    id: "characterLevel90",
    desc: "Character Level 90",
    m: 16,
    requirement: 90,
    h: 12
  }, {
    id: "characterLevel105",
    desc: "Character Level 105",
    m: 16,
    requirement: 105,
    h: 9
  }, {
    id: "characterLevel120",
    desc: "Character Level 120",
    m: 16,
    requirement: 120,
    h: 10
  }, {
    id: "characterLevel135",
    desc: "Character Level 135",
    m: 16,
    requirement: 135,
    h: 11
  }, {
    id: "doorsOpened500",
    desc: "500 Doors Opened",
    m: 17,
    requirement: 500,
    h: yh
  }, {
    id: "doorsOpened1K",
    desc: "1,000 Doors Opened",
    m: 17,
    requirement: 1E3,
    h: 2
  }, {
    id: "doorsOpened2K",
    desc: "2,000 Doors Opened",
    m: 17,
    requirement: 2E3,
    h: 17
  }, {
    id: "doorsOpened3K",
    desc: "3,000 Doors Opened",
    m: 17,
    requirement: 3E3,
    h: 1
  }, {
    id: "doorsOpened4K",
    desc: "4,000 Doors Opened",
    m: 17,
    requirement: 4E3,
    h: 8
  }, {
    id: "doorsOpened5K",
    desc: "5,000 Doors Opened",
    m: 17,
    requirement: 5E3,
    h: 7
  }, {
    id: "doorsOpened7500",
    desc: "7,500 Doors Opened",
    m: 17,
    requirement: 7500,
    h: 6
  }, {
    id: "doorsOpened10K",
    desc: "10,000 Doors Opened",
    m: 17,
    requirement: 1E4,
    h: 13
  }, {
    id: "doorsOpened15K",
    desc: "15,000 Doors Opened",
    m: 17,
    requirement: 15E3,
    h: 14
  }, {
    id: "doorsOpened20K",
    desc: "20,000 Doors Opened",
    m: 17,
    requirement: 2E4,
    h: 15
  }, {
    id: "doorsOpened30K",
    desc: "30,000 Doors Opened",
    m: 17,
    requirement: 3E4,
    h: 16
  }, {
    id: "doorsOpened40K",
    desc: "40,000 Doors Opened",
    m: 17,
    requirement: 4E4,
    h: 1
  }, {
    id: "doorsOpened50K",
    desc: "50,000 Doors Opened",
    m: 17,
    requirement: 5E4,
    h: 2
  }, {
    id: "doorsOpened75K",
    desc: "75,000 Doors Opened",
    m: 17,
    requirement: 75E3,
    h: 21
  }, {
    id: "doorsOpened100K",
    desc: "100,000 Doors Opened",
    m: 17,
    requirement: 1E5,
    h: 22
  }, {
    id: "doorsOpened125K",
    desc: "125,000 Doors Opened",
    m: 17,
    requirement: 125E3,
    h: 16
  }, {
    id: "doorsOpened150K",
    desc: "150,000 Doors Opened",
    m: 17,
    requirement: 15E4,
    h: 15
  }, {
    id: "doorsOpened175K",
    desc: "175,000 Doors Opened",
    m: 17,
    requirement: 175E3,
    h: 14
  }, {
    id: "itemsFound500",
    desc: "500 Items Found",
    m: 18,
    requirement: 500,
    h: 12
  }, {
    id: "itemsFound1000",
    desc: "1,000 Items Found",
    m: 18,
    requirement: 1E3,
    h: 9
  }, {
    id: "itemsFound5K",
    desc: "5,000 Items Found",
    m: 18,
    requirement: 5E3,
    h: 11
  }, {
    id: "itemsFound10K",
    desc: "10,000 Items Found",
    m: 18,
    requirement: 1E4,
    h: 10
  }, {
    id: "itemsFound25K",
    desc: "25,000 Items Found",
    m: 18,
    requirement: 25E3,
    h: Ld
  }, {
    id: "itemsFound50K",
    desc: "50,000 Items Found",
    m: 18,
    requirement: 5E4,
    h: Pd
  }, {
    id: "itemsFound100K",
    desc: "100,000 Items Found",
    m: 18,
    requirement: 1E5,
    h: 19
  }, {
    id: "itemsFound200K",
    desc: "200,000 Items Found",
    m: 18,
    requirement: 2E5,
    h: 1
  }, {
    id: "itemsFound300K",
    desc: "300,000 Items Found",
    m: 18,
    requirement: 3E5,
    h: 2
  }, {
    id: "itemsFound400K",
    desc: "400,000 Items Found",
    m: 18,
    requirement: 4E5,
    h: 9
  }, {
    id: "itemsFound500K",
    desc: "500,000 Items Found",
    m: 18,
    requirement: 5E5,
    h: 12
  }, {
    id: "itemsFound600K",
    desc: "600,000 Items Found",
    m: 18,
    requirement: 6E5,
    h: 11
  }, {
    id: "itemsFound700K",
    desc: "700,000 Items Found",
    m: 18,
    requirement: 7E5,
    h: 10
  }, {
    id: "itemsFound800K",
    desc: "800,000 Items Found",
    m: 18,
    requirement: 8E5,
    h: 12
  }, {
    id: "itemsFound1M",
    desc: "1,000,000 Items Found",
    m: 18,
    requirement: 1E6,
    h: Ld
  }, {
    id: "itemsFound1.25M",
    desc: "1,250,000 Items Found",
    m: 18,
    requirement: 125E4,
    h: 22
  }, {
    id: "itemsFound1.5M",
    desc: "1,500,000 Items Found",
    m: 18,
    requirement: 15E5,
    h: 21
  }, {
    id: "uncommonItemsFound100",
    desc: "100 Uncommon Items Found",
    m: 19,
    requirement: 100,
    h: Ld
  }, {
    id: "uncommonItemsFound250",
    desc: "250 Uncommon Items Found",
    m: 19,
    requirement: 250,
    h: Pd
  }, {
    id: "uncommonItemsFound500",
    desc: "500 Uncommon Items Found",
    m: 19,
    requirement: 500,
    h: yh
  }, {
    id: "uncommonItemsFound1000",
    desc: "1,000 Uncommon Items Found",
    m: 19,
    requirement: 1E3,
    h: 13
  }, {
    id: "uncommonItemsFound2500",
    desc: "2,500 Uncommon Items Found",
    m: 19,
    requirement: 2500,
    h: 2
  }, {
    id: "uncommonItemsFound5000",
    desc: "5,000 Uncommon Items Found",
    m: 19,
    requirement: 5E3,
    h: 12
  }, {
    id: "uncommonItemsFound10K",
    desc: "10,000 Uncommon Items Found",
    m: 19,
    requirement: 1E4,
    h: 12
  }, {
    id: "uncommonItemsFound25K",
    desc: "25,000 Uncommon Items Found",
    m: 19,
    requirement: 25E3,
    h: 9
  }, {
    id: "uncommonItemsFound50K",
    desc: "50,000 Uncommon Items Found",
    m: 19,
    requirement: 5E4,
    h: 10
  }, {
    id: "uncommonItemsFound75K",
    desc: "75,000 Uncommon Items Found",
    m: 19,
    requirement: 75E3,
    h: 11
  }, {
    id: "uncommonItemsFound100K",
    desc: "100,000 Uncommon Items Found",
    m: 19,
    requirement: 1E5,
    h: 13
  }, {
    id: "uncommonItemsFound125K",
    desc: "125,000 Uncommon Items Found",
    m: 19,
    requirement: 125E3,
    h: 1
  }, {
    id: "uncommonItemsFound150K",
    desc: "150,000 Uncommon Items Found",
    m: 19,
    requirement: 15E4,
    h: 13
  }, {
    id: "uncommonItemsFound200K",
    desc: "200,000 Uncommon Items Found",
    m: 19,
    requirement: 2E5,
    h: Pd
  }, {
    id: "uncommonItemsFound250K",
    desc: "250,000 Uncommon Items Found",
    m: 19,
    requirement: 25E4,
    h: 19
  }, {
    id: "uncommonItemsFound300K",
    desc: "300,000 Uncommon Items Found",
    m: 19,
    requirement: 3E5,
    h: 22
  }, {
    id: "rareItemsFound50",
    desc: "50 Rare Items Found",
    m: 20,
    requirement: 50,
    h: 14
  }, {
    id: "rareItemsFound100",
    desc: "100 Rare Items Found",
    m: 20,
    requirement: 100,
    h: Ld
  }, {
    id: "rareItemsFound250",
    desc: "250 Rare Items Found",
    m: 20,
    requirement: 250,
    h: 14
  }, {
    id: "rareItemsFound500",
    desc: "500 Rare Items Found",
    m: 20,
    requirement: 500,
    h: 1
  }, {
    id: "rareItemsFound1000",
    desc: "1,000 Rare Items Found",
    m: 20,
    requirement: 1E3,
    h: 14
  }, {
    id: "rareItemsFound2500",
    desc: "2,500 Rare Items Found",
    m: 20,
    requirement: 2500,
    h: 2
  }, {
    id: "rareItemsFound5K",
    desc: "5,000 Rare Items Found",
    m: 20,
    requirement: 5E3,
    h: 22
  }, {
    id: "rareItemsFound10K",
    desc: "10,000 Rare Items Found",
    m: 20,
    requirement: 1E4,
    h: 17
  }, {
    id: "rareItemsFound20K",
    desc: "20,000 Rare Items Found",
    m: 20,
    requirement: 2E4,
    h: 14
  }, {
    id: "rareItemsFound30K",
    desc: "30,000 Rare Items Found",
    m: 20,
    requirement: 3E4,
    h: 12
  }, {
    id: "rareItemsFound40K",
    desc: "40,000 Rare Items Found",
    m: 20,
    requirement: 4E4,
    h: 14
  }, {
    id: "rareItemsFound60K",
    desc: "60,000 Rare Items Found",
    m: 20,
    requirement: 6E4,
    h: 16
  }, {
    id: "rareItemsFound80K",
    desc: "80,000 Rare Items Found",
    m: 20,
    requirement: 8E4,
    h: 13
  }, {
    id: "rareItemsFound100K",
    desc: "100,000 Rare Items Found",
    m: 20,
    requirement: 1E5,
    h: 15
  }, {
    id: "historicItemsFound10",
    desc: "10 Historic Items Found",
    m: 21,
    requirement: 10,
    h: 15
  }, {
    id: "historicItemsFound25",
    desc: "25 Historic Items Found",
    m: 21,
    requirement: 25,
    h: 7
  }, {
    id: "historicItemsFound50",
    desc: "50 Historic Items Found",
    m: 21,
    requirement: 50,
    h: 15
  }, {
    id: "historicItemsFound100",
    desc: "100 Historic Items Found",
    m: 21,
    requirement: 100,
    h: 8
  }, {
    id: "historicItemsFound250",
    desc: "250 Historic Items Found",
    m: 21,
    requirement: 250,
    h: 15
  }, {
    id: "historicItemsFound500",
    desc: "500 Historic Items Found",
    m: 21,
    requirement: 500,
    h: 6
  }, {
    id: "historicItemsFound1000",
    desc: "1,000 Historic Items Found",
    m: 21,
    requirement: 1E3,
    h: 15
  }, {
    id: "historicItemsFound1500",
    desc: "1,500 Historic Items Found",
    m: 21,
    requirement: 1500,
    h: 2
  }, {
    id: "historicItemsFound2K",
    desc: "2,000 Historic Items Found",
    m: 21,
    requirement: 2E3,
    h: 15
  }, {
    id: "historicItemsFound3K",
    desc: "3,000 Historic Items Found",
    m: 21,
    requirement: 3E3,
    h: 18
  }, {
    id: "historicItemsFound4K",
    desc: "4,000 Historic Items Found",
    m: 21,
    requirement: 4E3,
    h: 15
  }, {
    id: "historicItemsFound5K",
    desc: "5,000 Historic Items Found",
    m: 21,
    requirement: 5E3,
    h: Ld
  }, {
    id: "historicItemsFound6K",
    desc: "6,000 Historic Items Found",
    m: 21,
    requirement: 6E3,
    h: 21
  }, {
    id: "historicItemsFound7K",
    desc: "7,000 Historic Items Found",
    m: 21,
    requirement: 7E3,
    h: 8
  }, {
    id: "historicItemsFound8K",
    desc: "8,000 Historic Items Found",
    m: 21,
    requirement: 8E3,
    h: 7
  }, {
    id: "ancientItemsFound3",
    desc: "3 Ancient Items Found",
    m: 22,
    requirement: 3,
    h: 16
  }, {
    id: "ancientItemsFound10",
    desc: "10 Ancient Items Found",
    m: 22,
    requirement: 10,
    h: 1
  }, {
    id: "ancientItemsFound25",
    desc: "25 Ancient Items Found",
    m: 22,
    requirement: 25,
    h: 16
  }, {
    id: "ancientItemsFound50",
    desc: "50 Ancient Items Found",
    m: 22,
    requirement: 50,
    h: 2
  }, {
    id: "ancientItemsFound75",
    desc: "75 Ancient Items Found",
    m: 22,
    requirement: 75,
    h: 16
  }, {
    id: "ancientItemsFound100",
    desc: "100 Ancient Items Found",
    m: 22,
    requirement: 100,
    h: 17
  }, {
    id: "ancientItemsFound150",
    desc: "150 Ancient Items Found",
    m: 22,
    requirement: 150,
    h: 16
  }, {
    id: "ancientItemsFound200",
    desc: "200 Ancient Items Found",
    m: 22,
    requirement: 200,
    h: Ld
  }, {
    id: "ancientItemsFound300",
    desc: "300 Ancient Items Found",
    m: 22,
    requirement: 300,
    h: 16
  }, {
    id: "ancientItemsFound400",
    desc: "400 Ancient Items Found",
    m: 22,
    requirement: 400,
    h: 9
  }, {
    id: "ancientItemsFound500",
    desc: "500 Ancient Items Found",
    m: 22,
    requirement: 500,
    h: 12
  }, {
    id: "ancientItemsFound600",
    desc: "600 Ancient Items Found",
    m: 22,
    requirement: 600,
    h: 11
  }, {
    id: "ancientItemsFound700",
    desc: "700 Ancient Items Found",
    m: 22,
    requirement: 700,
    h: 10
  }, {
    id: "ancientItemsFound800",
    desc: "800 Ancient Items Found",
    m: 22,
    requirement: 800,
    h: 9
  }, {
    id: "reducedPartyVictory1",
    desc: "Win With 1 Adventurer",
    m: 23,
    requirement: 1,
    h: Ld,
    ab: !0
  }, {
    id: "reducedPartyVictory2",
    desc: "Win With 2 Adventurers",
    m: 23,
    requirement: 2,
    h: 19,
    ab: !0
  }, {
    id: "reducedPartyVictory3",
    desc: "Win With 3 Adventurers",
    m: 23,
    requirement: 3,
    h: 21,
    ab: !0
  }, {
    id: "singleClassVictory",
    desc: "Win With 4 of Same Class",
    m: 24,
    requirement: 1,
    h: 22,
    ab: !0
  }, {
    id: "barbarianVictory",
    desc: "Win With Class: Barbarian",
    m: 25,
    Hb: 1,
    requirement: 1,
    h: 16,
    ab: !0
  }, {
    id: "fighterVictory",
    desc: "Win With Class: Fighter",
    m: 25,
    Hb: 0,
    requirement: 1,
    h: 15,
    ab: !0
  }, {
    id: "priestVictory",
    desc: "Win With Class: Priest",
    m: 25,
    Hb: 6,
    requirement: 1,
    h: 14,
    ab: !0
  }, {
    id: "rangerVictory",
    desc: "Win With Class: Ranger",
    m: 25,
    Hb: 2,
    requirement: 1,
    h: 13,
    ab: !0
  }, {
    id: "druidVictory",
    desc: "Win With Class: Druid",
    m: 25,
    Hb: 10,
    requirement: 1,
    h: 8,
    ab: !0
  }, {
    id: "rogueVictory",
    desc: "Win With Class: Rogue",
    m: 25,
    Hb: 7,
    requirement: 1,
    h: 6,
    ab: !0
  }, {
    id: "pyromancerVictory",
    desc: "Win With Class: Pyromancer",
    m: 25,
    Hb: 4,
    requirement: 1,
    h: 7,
    ab: !0
  }, {
    id: "electromancerVictory",
    desc: "Win With Class: Electromancer",
    m: 25,
    Hb: 3,
    requirement: 1,
    h: 12,
    ab: !0
  }, {
    id: "necromancerVictory",
    desc: "Win With Class: Necromancer",
    m: 25,
    Hb: 9,
    requirement: 1,
    h: 11,
    ab: !0
  }, {
    id: "chickenKingVictory",
    desc: "Win With Class: Chicken King",
    m: 25,
    Hb: 11,
    requirement: 1,
    h: 9,
    ab: !0
  }, {
    id: "ninjaVictory",
    desc: "Win With Class: Ninja",
    m: 25,
    Hb: 8,
    requirement: 1,
    h: 2,
    ab: !0
  }, {
    id: "continuationVictory1",
    desc: "Continuation Victory",
    m: 26,
    requirement: 1,
    h: 10,
    ab: !0
  }, {
    id: "continuationVictory2",
    desc: "Second Continuation Victory",
    m: 26,
    requirement: 2,
    h: Ld,
    ab: !0
  }, {
    id: "continuationVictory3",
    desc: "Third Continuation Victory",
    m: 26,
    requirement: 3,
    h: 22,
    ab: !0
  }, {
    id: "continuationVictory4",
    desc: "Fourth Continuation Victory",
    m: 26,
    requirement: 4,
    h: 2,
    ab: !0
  }, {
    id: "soloBarbarianVictory",
    desc: "Win With Single Barbarian",
    m: 27,
    Hb: 1,
    requirement: 1,
    h: 22,
    ab: !0
  }, {
    id: "soloFighterVictory",
    desc: "Win With Single Fighter",
    m: 27,
    Hb: 0,
    requirement: 1,
    h: 1,
    ab: !0
  }, {
    id: "soloPriestVictory",
    desc: "Win With Single Priest",
    m: 27,
    Hb: 6,
    requirement: 1,
    h: 13,
    ab: !0
  }, {
    id: "soloRangerVictory",
    desc: "Win With Single Ranger",
    m: 27,
    Hb: 2,
    requirement: 1,
    h: 14,
    ab: !0
  }, {
    id: "soloDruidVictory",
    desc: "Win With Single Druid",
    m: 27,
    Hb: 10,
    requirement: 1,
    h: 15,
    ab: !0
  }, {
    id: "soloRogueVictory",
    desc: "Win With Single Rogue",
    m: 27,
    Hb: 7,
    requirement: 1,
    h: 16,
    ab: !0
  }, {
    id: "soloPyromancerVictory",
    desc: "Win With Single Pyromancer",
    m: 27,
    Hb: 4,
    requirement: 1,
    h: 21,
    ab: !0
  }, {
    id: "soloElectromancerVictory",
    desc: "Win With Single Electromancer",
    m: 27,
    Hb: 3,
    requirement: 1,
    h: Pd,
    ab: !0
  }, {
    id: "soloNecromancerVictory",
    desc: "Win With Single Necromancer",
    m: 27,
    Hb: 9,
    requirement: 1,
    h: 19,
    ab: !0
  }, {
    id: "soloChickenKingVictory",
    desc: "Win With Single Chicken King",
    m: 27,
    Hb: 11,
    requirement: 1,
    h: Ld,
    ab: !0
  }, {
    id: "soloNinjaVictory",
    desc: "Win With Single Ninja",
    m: 27,
    Hb: 8,
    requirement: 1,
    h: 17,
    ab: !0
  }
];

function Wr(a) {
  this.Of = this.We = !1;
  this.id = a.id;
  this.desc = a.desc;
  this.m = a.m;
  this.requirement = a.requirement;
  this.Hb = a.Hb;
  this.h = a.h;
  this.Vt = Pr[a.h].yc;
  this.ab = !!a.ab;
  this.Rt = this.Pt = null
}

function Xr(a) {
  a.Pt || (a.Pt = "+" + a.Vt + " AP per " + Pr[a.h].Fc);
  return a.Pt
}

function Yr(a) {
  a.Rt || (a.Rt = Zr(a));
  return a.Rt
}

function $r(a) {
  if (!a.We || a.Of) console.log("not applying achievement bonus. obtained=" + a.We + " applied=" + a.Of);
  else {
    Tr(a.h, a.Vt);
    a.Of = !0;
    var b = w.i.Ig,
      c = b.Ze.indexOf(a); - 1 < c && b.Ze.splice(c, 1);
    Ta("Achievement", a.desc)
  }
}

function as(a) {
  var b = w.i.Bg;
  switch (a.m) {
    case 23:
      return 1 === a.requirement ? 0 < b.hn : 2 === a.requirement ? 0 < b.jn : 3 === a.requirement ? 0 < b.kn : !1;
    case 24:
      return 0 < b.vn;
    case 25:
      return 0 < bs(b, a.Hb);
    case 26:
      return b.Xm >= a.requirement;
    case 27:
      return 0 < cs(b, a.Hb);
    default:
      return !1
  }
}

function ds(a) {
  var b = w.i.Ua;
  switch (a.m) {
    case 1:
      return b.si;
    case 2:
      return b.Dl;
    case 3:
      return b.El;
    case 4:
      return b.ul;
    case 5:
      return b.Nl;
    case 6:
      return b.Sl;
    case 7:
      return b.tk;
    case 8:
      return b.Ph;
    case 9:
      return b.Rk;
    case 10:
      return b.wi;
    case 11:
      return b.uk;
    case 12:
      return b.Gl;
    case 13:
      return b.hl;
    case 14:
      return b.wl;
    case 15:
      return b.kl;
    case 16:
      return ci(w.i.da);
    case 17:
      return b.Lk;
    case 18:
      return b.Gi;
    case 19:
      return b.Ol;
    case 20:
      return b.xl;
    case 21:
      return b.Zk;
    case 22:
      return b.nk;
    case 28:
      return b.Ff
  }
}

function Zr(a) {
  switch (a.m) {
    case 1:
      return "Kill Things";
    case 2:
      return "Use Scrolls More";
    case 3:
      return "Use Scrolls a Lot";
    case 4:
      return "Drink Potions";
    case 5:
      return "Open Treasure Chests";
    case 6:
      return "Loot Weapon Racks";
    case 7:
      return "Loot Bookcases";
    case 8:
      return "Sell Items";
    case 9:
      return "Buy Farms";
    case 10:
      return "Clear Dungeons";
    case 11:
      return "Conquer Castles";
    case 12:
      return "Cast Spells";
    case 13:
      return "Attack With Sword";
    case 14:
      return "Attack With Bow";
    case 15:
      return "Summon Minions";
    case 16:
      return "Go Up Levels";
    case 17:
      return "Explore Dungeons";
    case 18:
      return "Find Items";
    case 19:
      return "Find Slightly Good Items";
    case 20:
      return "Find Good Items";
    case 21:
      return "Find Really Good Items";
    case 22:
      return "Find Excellent Items";
    case 23:
      return "Play With Smaller Party";
    case 24:
      return "Play With Redundant Party";
    case 25:
      return "Play With Different Classes";
    case 26:
      return "Do Not Prestige";
    case 27:
      return "Single Character Party";
    case 28:
      return "Use Summoners"
  }
};

function es() {
  var a = w.i.Ig,
    b;
  for (b = 0; b < a.jj.length; b++) {
    var c = a.jj[b];
    c.Of = !1;
    c.We = !1
  }
  a.ik.length = 0;
  a.Ze.length = 0
};
var Pi = 5;

function fs() {
  this.FC = -100;
  this.Wp = null;
  this.EC = !1;
  this.Iw = 0
}
e = fs.prototype;
e.sx = function() {};
e.Oc = function() {
  return !0
};
e.qc = function() {
  return !1
};
e.Wo = function() {
  return null
};
e.Pz = function() {
  return null
};
e.ib = function() {
  return "upgrade title"
};
e.og = function() {};
e.He = function() {
  return !1
};
e.Na = function() {
  return null
};
e.uw = function() {
  return null
};
e.Vo = function() {
  return null
};
e.Kr = function() {
  return 1
};
e.Nz = function() {
  return null
};
e.us = function() {};
e.Qc = function() {};
e.lb = function() {};
e.Oz = function() {
  return null
};
e.Bb = function() {
  return 0
};

function gs(a) {
  w.i.Gj != a.FC && (a.FC = w.i.Gj, a.EC = a.Cd());
  return a.EC
}
e.Cd = function() {
  return !1
};

function hs(a) {
  a.Iw = w.i.Gj
};

function is(a, b) {
  this.HC = a;
  var c, d, f, g = [];
  for (c = 0; c < a.length; c++)
    for (f = a[c], d = 0; d < f.length; d++) g.push(f[d]);
  this.Ha = g;
  if (b)
    for (c = [], d = 0; d < this.Ha.length; d++) c.push(null);
  else c = null;
  this.Eq = c;
  this.mj = 0;
  this.JE = b;
  this.cx = 0
}

function js(a) {
  var b;
  for (b = 0; b < a.Ha.length; b++) a.Ha[b].og();
  a.mj = 0;
  a.cx = w.i.Gj - 1
}

function ks(a) {
  var b, c, d;
  for (b = 0; b < a.HC.length; b++)
    for (d = a.HC[b], c = 0; c < d.length; c++) d[c].us();
  a.mj = 0
}

function ls(a) {
  var b, c = !1,
    d;
  for (b = 0; b < a.Ha.length; b++)(d = gs(a.Ha[b])) && (c = !0);
  if (c) {
    if (a.JE) {
      d = 0;
      var f = a.cx;
      for (b = 0; b < a.Ha.length; b++) c = a.Ha[b], c.qc() && c.Iw < f && (a.Eq[d++] = c);
      for (b = 0; b < a.Ha.length; b++) c = a.Ha[b], c.qc() && c.Iw >= f && (a.Eq[d++] = c);
      for (b = 0; b < a.Ha.length; b++) c = a.Ha[b], c.qc() || (a.Eq[d++] = c);
      b = a.Ha;
      a.Ha = a.Eq;
      a.Eq = b;
      a.cx = w.i.Gj
    }
    a.mj++
  }
};

function ms(a) {
  this.Ly = a;
  this.xc = null;
  this.jk = "Schedule Attack";
  this.Up = this.Ub = this.Ea = this.A = !1
}
ms.prototype = new fs;
e = ms.prototype;
e.Oc = function() {
  return this.A || this.Ea
};
e.qc = function() {
  return this.A
};
e.lb = function() {
  return this.jk
};
e.ib = function() {
  return "Attack Castle"
};
e.He = function() {
  return this.xc && (this.xc.ye || this.xc.cb)
};
e.Na = function() {
  return 13
};
e.Qc = function() {
  this.xc && (Ta("Castle", "Attack Scheduled: " + this.xc.mi), this.xc.ye = !0, Lc(), nd(this.xc), Pc(this.xc), this.A = !1, this.xc = null, hs(this))
};
e.Cd = function() {
  var a;
  a = w.kb.Jg;
  (a = this.Ly < a.length ? a[this.Ly] : null) ? (this.A = w.ob.fc >= a.Jf, this.Ea = !this.A) : this.Ea = this.A = !1;
  var b = this.xc != a || this.Ub != this.A || this.Up != this.Ea;
  b && a && (this.jk = this.A ? a.mi : "Required Monster Level: " + a.Jf);
  this.xc = a;
  this.Ub = this.A;
  this.Up = this.Ea;
  return b
};

function ns(a) {
  this.mb = a;
  this.A = this.Ea = !1;
  this.$A = -1;
  this.Zj = this.Ub = this.$j = !1;
  os(this)
}
ns.prototype = new fs;
e = ns.prototype;
e.us = function() {
  0 < this.mb.md && os(this)
};
e.og = function() {
  this.mb.md = 0;
  os(this)
};
e.ib = function() {
  return this.mb.title
};
e.Na = function() {
  return 1
};
e.Oc = function() {
  return this.A || this.Ea
};
e.qc = function() {
  return this.A
};
e.Qc = function() {
  this.mb.rd > w.i.da.Je || (ps(w.i.da, this.mb.rd), this.mb.md++, this.A = !1, os(this), hs(this), Ta("Upgrade", this.mb.title + " value: " + this.mb.t))
};
e.Bb = function() {
  return this.mb.rd
};
e.lb = function() {
  return this.mb.e
};

function os(a) {
  a.mb.rd = Ia(a.mb.ah + a.mb.md * a.mb.Pg, qs, 1);
  a.mb.t = a.mb.xf + a.mb.md * a.mb.$g;
  a.mb.t > a.mb.maxValue && (a.mb.t = a.mb.maxValue)
}
e.Cd = function() {
  this.mb.t >= this.mb.maxValue ? this.Ea = this.A = !1 : (this.A = this.mb.rd <= w.i.da.Je, this.Ea = !this.A && this.hu());
  var a = this.Oc(),
    b = this.$A !== this.mb.md || this.Ub !== this.A || this.Zj !== this.Ea || this.$j !== a;
  this.$A = this.mb.md;
  this.Ub = this.A;
  this.Zj = this.Ea;
  this.$j = a;
  return b
};
e.hu = function() {
  var a = w.i.da.Je;
  if (a >= this.mb.rd) return !1;
  a = this.mb.rd - a;
  return 400 >= a || a <= 0.3 * this.mb.rd
};

function rs(a) {
  this.vh = !1;
  this.Yz = -1;
  this.e = "";
  this.vp = a
}
rs.prototype = new fs;
e = rs.prototype;
e.Wo = function() {
  return null
};
e.Nz = function() {
  return w.Di.Fj
};
e.ib = function() {
  return "Equip All Items"
};
e.Na = function() {
  return 4
};
e.lb = function() {
  return this.e
};
e.Qc = function() {
  var a = w.Di,
    b;
  for (b = 0; b < w.i.D.length; b++) a.Br(w.i.D[b]);
  hs(this)
};
e.Oc = function() {
  return this.vh
};
e.qc = function() {
  return this.vh
};
e.Cd = function() {
  var a, b = 0;
  for (a = 0; a < w.i.D.length; a++) {
    var c;
    c = w.i.D[a];
    var d = c.Ld.items;
    if (d && 0 !== d.length) {
      for (var f = void 0, g = void 0, h = void 0, l = 0, f = 0; f < d.length; f++) g = d[f], (h = c.ef(g.r)) && !ss(g, h) || l++;
      c = l
    } else c = 0;
    b += c
  }
  a = b;
  b = a > this.vp;
  if (c = this.vh !== b || this.Yz !== a) this.e = "Equip All Item Improvements (" + a + ")";
  this.vh = b;
  this.Yz = a;
  return c
};

function ts(a, b) {
  this.vh = !1;
  this.hA = a;
  this.e = this.item = null;
  this.vp = b
}
ts.prototype = new fs;
e = ts.prototype;
e.Wo = function() {
  return null
};
e.og = function() {
  this.e = this.item = null
};
e.Oz = function() {
  return this.item
};
e.Na = function() {
  return 3
};
e.lb = function() {
  return this.e
};
e.Qc = function() {
  var a = this.item.nj;
  a && (a.Qk(this.item), hs(this))
};
e.Oc = function() {
  return this.vh
};
e.qc = function() {
  return this.vh
};
e.Cd = function() {
  var a = w.Di.Fj,
    b = this.vh,
    c = this.item;
  a.length <= this.vp && a.length > this.hA ? (this.item = a[this.hA], c != this.item && (this.e = "Equip " + this.item.Ew), this.vh = !0) : (this.e = this.item = null, this.vh = !1);
  return b != this.vh || c != this.item
};

function us(a) {
  this.ZA = this.Up = this.A = this.Ea = !1;
  this.WA = -1;
  this.e = null;
  this.Lo = 0;
  this.$ = a
}
us.prototype = new fs;
e = us.prototype;
e.og = function() {
  this.e = null
};
e.Vo = function() {
  return this.$ >= w.i.D.length ? null : w.i.D[this.$]
};
e.Na = function() {
  return 2
};
e.lb = function() {
  return this.e
};
e.Qc = function() {
  if (!(this.$ >= w.i.D.length)) {
    this.A = !1;
    var a = w.i.D[this.$],
      b = a.K,
      c = b.Am,
      d = vs();
    if (!(w.i.da.cg < c)) {
      var f = w.i.da;
      f.cg -= c;
      0 > f.cg && (f.cg = 0);
      c = b.Eb + 1;
      ji(b, c, a.Kc.Ma);
      a.de++;
      a.Zi = ws(a);
      b.Eb = c;
      if ((b = a.yg) && 0 < b.length)
        for (f = 0; f < b.length; f++) {
          var g = b[f],
            h = c;
          g.K.Eb = h;
          ji(g.K, h, g.Kc.Ma);
          ii(g, h)
        }
      xs();
      b = vs();
      d !== b && (d = w.i.ce, b = d.K, f = vs(), ii(d, f), ji(b, f, d.Kc.Ma), b.Eb = f);
      Kd(22);
      Ta("Adventurer", "Level up " + a.Kc.Ka + ": " + c)
    }
    hs(this)
  }
};
e.hu = function() {
  var a = w.i.da.cg,
    b = w.i.D[this.$].K.Am;
  if (a >= b) return !1;
  a = b - a;
  return 300 >= a ? !0 : a <= 0.2 * b
};
e.Oc = function() {
  return this.A || this.Ea
};
e.Bb = function() {
  return this.Lo
};
e.qc = function() {
  return this.A
};
e.Cd = function() {
  if (this.$ >= w.i.D.length) this.Ea = this.A = !1;
  else {
    var a = w.i.D[this.$];
    this.e || (this.e = "Level Up " + a.Xt);
    this.Lo = a.K.Am;
    this.A = w.i.da.cg >= this.Lo;
    this.Ea = !this.A && this.hu();
    a = this.ZA !== this.A || this.Up !== this.Ea || this.WA !== this.Lo;
    this.ZA = this.A;
    this.Up = this.Ea;
    this.WA = this.Lo;
    return a
  }
};

function ys() {
  this.qe = -1;
  this.Ds = 1;
  this.Ql = this.A = !1;
  this.Ve = "Unlock Monster Level"
}
ys.prototype = new fs;
e = ys.prototype;
e.us = function() {
  this.Ql || (this.Ql = !0, this.qe = w.ob.fc + 1, this.Ds = Ia(this.qe, zs, 1), this.Ve = "Unlock Monster Level " + this.qe)
};
e.Kr = function() {
  return this.qe
};
e.og = function() {
  this.Ql = !1;
  this.qe = w.ob.fc + 1;
  this.Ds = Ia(this.qe, zs, 1);
  this.Ve = "Unlock Monster Level " + this.qe
};
e.ib = function() {
  return this.Ve
};
e.Na = function() {
  return 11
};
e.lb = function() {
  return ""
};
e.Qc = function() {
  if (this.A) {
    ps(w.i.da, this.Bb());
    var a = w.ob;
    a.fc = Math.max(a.fc, this.qe);
    this.A = !1;
    hs(this);
    Ta("Monster Level", "Unlocked Level " + this.qe)
  }
};
e.Oc = function() {
  return !0
};
e.Bb = function() {
  return m(this.Ds * As.t)
};
e.qc = function() {
  return this.A
};
e.Cd = function() {
  var a = this.A,
    b = this.qe,
    c = w.ob.fc + 1;
  this.qe != c && (this.qe = c, this.Ds = Ia(this.qe, zs, 1), this.Ve = "Unlock Monster Level " + this.qe);
  if (c = w.i.da.Je >= this.Bb())
    if (c = vs() >= this.qe) c = w.ob, c = 1 + c.fc - c.hd < Bs;
  this.A = c;
  return a !== this.A || b !== this.qe
};

function Cs() {
  this.Yd = -1;
  this.Cs = 1;
  this.Ql = this.Ea = this.A = !1;
  this.Ve = "Retire Monster Level"
}
Cs.prototype = new fs;
e = Cs.prototype;
e.us = function() {
  this.Ql || (this.Ql = !0, this.Yd = w.ob.hd, this.Cs = Ia(this.Yd, zs, 1), this.Ve = "Retire Monster Level " + this.Yd)
};
e.Kr = function() {
  return this.Yd
};
e.og = function() {
  this.Ql = !1;
  this.Yd = w.ob.hd;
  this.Cs = Ia(this.Yd, zs, 1);
  this.Ve = "Retire Monster Level " + this.Yd
};
e.ib = function() {
  return this.Ve
};
e.Na = function() {
  return 11
};
e.lb = function() {
  return ""
};
e.Qc = function() {
  if (this.A) {
    ps(w.i.da, this.Bb());
    var a = this.Yd,
      b = w.ob;
    a >= b.fc ? console.log("setMonsterLevelRetired attempt to retire max level") : a < b.hd ? console.log("setMonsterLevelRetired attempt to retire previously retired level") : a > b.hd ? console.log("setMonsterLevelRetired attempt to retire non-min level") : (b.hd++, delete b.en[a + ""]);
    this.A = !1;
    hs(this);
    Ta("Monster Level", "Retired Level " + this.Yd)
  }
};
e.Oc = function() {
  return this.A || this.Ea
};
e.Bb = function() {
  return m(this.Cs * As.t)
};
e.qc = function() {
  return this.A
};
e.Cd = function() {
  var a = this.A,
    b = this.Ea,
    c = this.Yd;
  this.Yd != w.ob.hd && (this.Yd = w.ob.hd, this.Cs = Ia(this.Yd, zs, 1), this.Ve = "Retire Monster Level " + this.Yd);
  this.Yd < vs() && this.Yd < w.ob.fc - 1 ? (this.A = w.i.da.Je >= this.Bb(), this.Ea = !this.A) : this.Ea = this.A = !1;
  return a != this.A || b != this.Ea || c != this.Yd
};

function F(a) {
  this.it = a;
  this.Zb = null;
  this.Hc = this.A = !1
}
F.prototype = new fs;
e = F.prototype;
e.sx = function(a) {
  this.Zb = a
};
e.Jr = function() {
  return this.it
};
e.He = function() {
  return this.Hc
};
e.ft = function(a) {
  this.Hc = a
};
e.og = function() {
  this.Zb = null;
  this.Hc = !1
};
e.Vo = function() {
  return this.Zb
};
e.ib = function() {
  return this.it.title
};
e.Bb = function() {
  return 1
};
e.lb = function() {
  return this.it.e
};
e.Na = function() {
  return Pi
};
e.Oc = function() {
  return !0
};
e.qc = function() {
  return this.A
};
e.Qc = function() {
  if (!this.Hc)
    if (!this.Zb) console.log("error: adventurer not assigned to skill upgrade");
    else if (!(1 > this.Zb.de)) {
    this.Hc = !0;
    var a = this.Zb;
    a.de--;
    0 > a.de && (a.de = 0);
    a.Zi = ws(a);
    Mi(this.Zb);
    hs(this);
    Ta("Skill", this.Zb.Kc.Ka + " " + this.it.title)
  }
};
e.Cd = function() {
  if (this.Zb) {
    var a = this.A;
    this.A = !this.Hc && (!this.Wp || this.Wp.He()) && 0 < this.Zb.de;
    return a !== this.A
  }
  console.log("error: adventurer not assigned to skill upgrade")
};

function Ds(a) {
  this.oq = a;
  this.Zb = null;
  this.Hc = this.A = !1;
  this.zd = null
}
Ds.prototype = new fs;
e = Ds.prototype;
e.sx = function(a) {
  this.Zb = a
};
e.Jr = function() {
  return this.oq
};
e.He = function() {
  return this.Hc
};
e.ft = function(a) {
  this.Hc = a
};
e.og = function() {
  this.Zb = null;
  this.Hc = !1;
  this.zd = null
};
e.uw = function() {
  this.zd || (this.zd = new li(this.oq.xa));
  return this.zd
};
e.Vo = function() {
  return this.Zb
};
e.ib = function() {
  return this.oq.xa.ta
};
e.Bb = function() {
  return 1
};
e.lb = function() {
  return this.oq.xa.description
};
e.Na = function() {
  return 6
};
e.Oc = function() {
  return !0
};
e.qc = function() {
  return this.A
};
e.Qc = function() {
  if (!this.Hc)
    if (this.Zb) {
      var a = this.Zb.Ci;
      1 > this.Zb.de && 1 > a || (this.Hc = !0, a = this.Zb, 0 < a.Ci ? a.Ci = 0 : (a.de--, 0 > a.de && (a.de = 0)), a.Zi = ws(a), ki(this.Zb, this.uw()), hs(this), Ta("Spell", this.Zb.Kc.Ka + " " + this.oq.xa.ta))
    } else console.log("error: adventurer not assigned to spell upgrade")
};
e.Cd = function() {
  if (this.Zb) {
    var a = this.A,
      b = this.Zb.de,
      c = this.Zb.Ci;
    this.A = !this.Hc && (!this.Wp || this.Wp.He()) && (0 < b || c);
    return a !== this.A
  }
  console.log("error: adventurer not assigned to spell upgrade: " + this.ib())
};

function Es(a) {
  this.ua = a;
  this.Zj = this.Ub = this.$j = this.A = this.Ea = !1
}
Es.prototype = new fs;
e = Es.prototype;
e.Wo = function() {
  return this.ua
};
e.ct = function(a) {
  this.ua = a
};
e.Oc = function() {
  return this.A || this.Ea
};
e.qc = function() {
  return this.A
};
e.lb = function() {
  if (this.ua && !Hd(this.ua)) {
    if (this.ua.oe) return "Farming Dungeon";
    if (!this.ua.zj.cb) return "Conquer Castle First"
  }
  return "Buy dungeon farm"
};
e.ib = function() {
  return "Farm Dungeon"
};
e.He = function() {
  return this.ua && this.ua.oe
};
e.Na = function() {
  return 7
};
e.Bb = function() {
  return this.ua ? m(this.ua.Nk * ce.t) : 0
};
e.Qc = function() {
  w.i.da.fd < this.Bb() || (Fs(this.ua, this.Bb()), hs(this))
};
e.Cd = function() {
  var a = Hd(this.ua);
  this.A = a && w.i.da.fd >= this.Bb();
  this.Ea = a && !this.A && 120 > this.Bb() - w.i.da.fd;
  var a = this.Oc(),
    b = this.Ub !== this.A || this.Zj !== this.Ea || this.$j !== a;
  this.Ub = this.A;
  this.Zj = this.Ea;
  this.$j = a;
  return b
};

function Gs(a) {
  this.Ez = a;
  this.ua = null;
  this.Zj = this.Ub = this.$j = this.A = this.Ea = !1
}
Gs.prototype = new fs;
e = Gs.prototype;
e.Wo = function() {
  return this.ua
};
e.Oc = function() {
  return this.A || this.Ea
};
e.qc = function() {
  return this.A
};
e.lb = function() {
  return "Buy dungeon farm"
};
e.ib = function() {
  return "Buy Monster Farm"
};
e.He = function() {
  return this.ua && this.ua.oe
};
e.Na = function() {
  return 8
};
e.Bb = function() {
  return this.ua ? m(this.ua.Nk * ce.t) : 0
};
e.Qc = function() {
  !this.ua || w.i.da.fd < this.Bb() || (this.A = !1, Fs(this.ua, this.Bb()), hs(this))
};
e.Cd = function() {
  var a;
  a = w.Aa.bk;
  (a = this.Ez < a.length ? a[this.Ez] : null) ? a.zj.cb ? (this.A = w.i.da.fd >= this.Bb(), this.Ea = !this.A) : this.Ea = this.A = !1: this.Ea = this.A = !1;
  var b = this.Oc(),
    c = this.ua != a || this.Ub != this.A || this.Zj != this.Ea || this.$j != b;
  this.ua = a;
  this.Ub = this.A;
  this.Zj = this.Ea;
  this.$j = b;
  return c
};

function Hs() {
  this.Ub = this.A = !1
}
Hs.prototype = new fs;
e = Hs.prototype;
e.Oc = function() {
  return this.A
};
e.qc = function() {
  return this.A
};
e.lb = function() {
  return "Collect Farmed Kills"
};
e.ib = function() {
  return "Harvest Rewards"
};
e.Na = function() {
  return 9
};
e.Qc = function() {
  Ta("Dungeon", "Farm Harvested");
  var a = w.Aa.Sd;
  w.i.aa.Wr(a);
  Is(a);
  w.Aa.dt(0);
  this.A = !1;
  hs(this)
};
e.Cd = function() {
  this.A = 0 < w.Aa.Sd;
  var a = this.Ub !== this.A;
  this.Ub = this.A;
  return a
};

function Js(a) {
  this.qg = a;
  this.Ea = this.A = !1;
  this.scroll = null
}
Js.prototype = new fs;
e = Js.prototype;
e.og = function() {
  this.scroll = null;
  this.Ea = this.A = !1
};
e.vf = function() {
  this.scroll || (this.scroll = w.nh.vf(this.qg));
  return this.scroll
};
e.Pz = function() {
  return this.vf()
};
e.ib = function() {
  return this.vf().lx
};
e.Bb = function() {
  return this.vf().rn
};
e.lb = function() {
  return this.vf().Qe ? "Unlock Scroll" : "Upgrade Scroll"
};
e.Na = function() {
  return 12
};
e.Oc = function() {
  return this.A || this.Ea
};
e.qc = function() {
  return this.A
};
e.Qc = function() {
  var a = this.vf(),
    b = a.rn;
  if (!(w.i.da.fd < b)) {
    Ks(b);
    a: {
      if (a.Qe) a.Qe = !1,
      Fq(w.nh, a),
      Ta("Scroll Unlock", a.rg);
      else {
        if (a.tg >= a.Qh) break a;
        a.tg++;
        a.tn && (Qi(w.i.ce, a.tn.f, a.tn.g), Gq());
        Ta("Scroll Upgrade", a.rg + " (count=" + a.tg + ")")
      }
      a.rg = zq(a);a.lx = Aq(a);a.rn = yq(a)
    }
    hs(this);
    this.A = !1
  }
};
e.Cd = function() {
  var a = this.vf(),
    b = this.A,
    c = w.i.ce.K.Eb,
    d = a.Qe ? a.sg : a.sg + (a.tg + 1) * a.Yi;
  a.Qe ? (this.A = c >= d && w.i.da.fd >= a.rn, this.Ea = !this.A && c >= d) : (this.A = a.tg < a.Qh && c >= d && w.i.da.fd >= a.rn, this.Ea = !this.A && a.tg < a.Qh && c >= d);
  return b !== this.A
};

function Ls(a) {
  this.vy = a;
  this.Ic = null;
  this.Ve = "Achievement";
  this.jk = "Reward";
  this.Ub = this.A = !1
}
Ls.prototype = new fs;
e = Ls.prototype;
e.He = function() {
  return this.Ic ? this.Ic.Of : !1
};
e.ib = function() {
  return this.Ve
};
e.lb = function() {
  return this.jk
};
e.Na = function() {
  return 14
};
e.Oc = function() {
  return this.A
};
e.qc = function() {
  return this.A
};
e.Qc = function() {
  this.Ic && ($r(this.Ic), this.Ic = null, this.A = !1, hs(this))
};
e.Cd = function() {
  var a;
  a = w.i.Ig.Ze;
  a = this.vy < a.length ? a[this.vy] : null;
  this.A = null != a;
  var b = this.Ic != a || this.Ub != this.A;
  b && a && (this.Ve = a.desc, this.jk = "Reward: " + Xr(a));
  this.Ic = a;
  this.Ub = this.A;
  return b
};

function Ms(a) {
  this.Ic = a;
  this.Ve = this.Ic.We ? this.Ic.desc : Yr(this.Ic);
  this.jk = Ns(this);
  this.YA = this.VA = this.A = !1
}
Ms.prototype = new fs;
e = Ms.prototype;
e.He = function() {
  return this.Ic.Of
};
e.ib = function() {
  return this.Ve
};
e.lb = function() {
  return this.jk
};
e.Na = function() {
  return 15
};
e.qc = function() {
  return this.A
};
e.Qc = function() {
  $r(this.Ic);
  this.A = !1;
  hs(this)
};
e.Cd = function() {
  var a = this.Ic.Of,
    b = this.Ic.We;
  this.A = b && !a;
  var c = this.VA != a || this.YA != b;
  c && (this.Ve = this.Ic.We ? this.Ic.desc : Yr(this.Ic), this.jk = Ns(this));
  this.VA = a;
  this.YA = b;
  return c
};

function Ns(a) {
  return a.Ic.We ? Xr(a.Ic) : "Unspecified Reward"
};

function Os(a) {
  this.kh = a;
  this.Ub = this.Hc = this.A = !1
}
Os.prototype = new fs;
e = Os.prototype;
e.og = function() {
  this.Hc = this.A = !1;
  this.Ub = !this.A;
  var a = Ps(this);
  a.t = a.defaultValue
};
e.He = function() {
  return this.Hc
};
e.ft = function(a) {
  (this.Hc = a) && Qs(this)
};
e.ib = function() {
  return this.kh.title
};
e.Na = function() {
  return 16
};
e.qc = function() {
  return this.A
};
e.Qc = function() {
  if (!(this.Hc || this.kh.cost > w.i.ae.Dd)) {
    var a = this.kh.cost,
      b = w.i.ae;
    b.An += a;
    b.Dd -= a;
    0 > b.Dd && (b.Dd = 0);
    this.Hc = !0;
    this.A = !1;
    Qs(this);
    hs(this);
    Ta("Points Upgrade", this.kh.title)
  }
};
e.Bb = function() {
  return this.kh.cost
};
e.lb = function() {
  return this.kh.desc
};
e.Cd = function() {
  this.A = !this.Hc && this.kh.cost <= w.i.ae.Dd;
  var a = this.Ub !== this.A;
  this.Ub = this.A;
  return a
};

function Qs(a) {
  a = Ps(a);
  a.t += a.lf
}

function Ps(a) {
  switch (a.kh.Tb) {
    case 5:
      return ce;
    case 4:
      return Rs;
    case 3:
      return tr;
    case 1:
      return Dq;
    case 6:
      return As;
    case 2:
      return Ss;
    case 7:
      return Ts;
    case 8:
      return Us;
    case 9:
      return Vs;
    case 10:
      return Ws;
    case 11:
      return Xs;
    case 12:
      return Ys;
    case 13:
      return Zs
  }
  console.log("Failed to find point upgrade setting: " + a.kh.Tb);
  return null
};

function $s() {
  this.Ub = this.A = !1
}
$s.prototype = new fs;
e = $s.prototype;
e.Oc = function() {
  return this.A
};
e.qc = function() {
  return this.A
};
e.lb = function() {
  return "Gold from sold items"
};
e.ib = function() {
  return "Collect Item Sales"
};
e.Na = function() {
  return 10
};
e.Qc = function() {
  Ta("Shop", "Gold Collected");
  var a = w.ug.ni;
  at(a);
  w.i.aa.Yr(a);
  w.ug.ni = 0;
  this.A = !1;
  hs(this)
};
e.Cd = function() {
  this.A = 0 < w.ug.ni;
  var a = this.Ub !== this.A;
  this.Ub = this.A;
  return a
};
var bt = 0,
  Vh = 2;
var ct = {
    c: "summonDogSpell",
    xa: sq.LB
  },
  dt = {
    c: "summonWolfPackSpell",
    xa: sq.PB
  },
  et = {
    c: "minorHealSpell",
    xa: sq.cE
  },
  ft = {
    c: "sleepSpell",
    xa: sq.DE
  },
  gt = {
    c: "summonChickensSpell",
    xa: uq.KB
  },
  ht = {
    c: "summonGuardChickenSpell",
    xa: uq.MB
  },
  it = {
    c: "swiftStrikeSpell",
    xa: tq.Hx
  },
  jt = {
    c: "hurtSpell",
    xa: rq.CD
  },
  kt = {
    c: "greenDeathSpell",
    xa: rq.xD
  },
  lt = {
    c: "summonSkeletonArmySpell",
    xa: rq.OB
  },
  mt = {
    c: "summonPhantomSkullSpell",
    xa: rq.NB
  },
  nt = {
    c: "tauntSpell",
    xa: oq.ME
  },
  ot = {
    c: "rageSpell",
    xa: qq.rE
  },
  pt = {
    c: "sledgeHammerSpell",
    xa: qq.wB
  },
  qt = {
    c: "stealthSpell",
    xa: pq.IB
  },
  rt = {
    c: "instantLootSpell",
    xa: pq.ID
  },
  st = {
    c: "detectTreasureChestSpell",
    xa: pq.wu
  },
  tt = {
    c: "healSpell",
    xa: nq.yD
  },
  ut = {
    c: "armorSpell",
    xa: nq.Zz
  },
  vt = {
    c: "damageSpell",
    xa: nq.FD
  },
  wt = {
    c: "attackRatingSpell",
    xa: nq.ED
  },
  xt = {
    c: "defenseRatingSpell",
    xa: nq.$z
  },
  yt = {
    c: "reviveSpell",
    xa: nq.xE
  },
  zt = {
    c: "shockSpell",
    xa: kq.sB
  },
  At = {
    c: "spiderWebSpell",
    xa: kq.CB
  },
  Bt = {
    c: "lightningRainSpell",
    xa: kq.XD
  },
  Ct = {
    c: "chainedLightningSpell",
    xa: kq.br
  },
  Dt = {
    c: "fireBlastSpell",
    xa: lq.rD
  },
  Et = {
    c: "fireBallSpell",
    xa: lq.Kz
  },
  Ft = {
    c: "fireRainSpell",
    xa: lq.Lz
  },
  Gt = {
    c: "turnMonsterSpell",
    xa: lq.TE
  };
var Sd = 0,
  Kq = 3,
  Jq = 4;

function Ht(a, b) {
  if (!b) return !1;
  var c = qi(a);
  if (0 === c.length) return !1;
  var d;
  for (d = 0; d < c.length; d++)
    if (a !== c[d] && c[d].p.w === b) return !0;
  return !1
}

function It(a) {
  var b = qi(a);
  if (0 === b.length) return null;
  var c = a.p.w;
  if (!c) return null;
  var d, f, g = a.p.u,
    h = null,
    l, n = -1;
  for (f = 0; f < b.length; f++)(d = b[f], a === d || d.Va || d.p.w != c || (l = d.Ja, l.wg || d.zb === bt && l.Kd || (l = g.Ud(d.p.u), !(0 > n || l < n)))) || (h = d, n = l);
  return h
}

function Jt(a) {
  var b = a.p.w;
  if (!b) return null;
  var c = qi(a);
  if (0 === c.length) return null;
  var d, f, g = a.p.u,
    h = null,
    l, n = -1;
  for (f = 0; f < c.length; f++)(d = c[f], a === d || d.Va || d.p.w != b || (l = d.Ja, l.wg || l.Kd || l.bi || (l = g.Ud(d.p.u), !(0 > n || l < n)))) || (h = d, n = l);
  return h
}

function Iq(a) {
  var b = Jt(a);
  return b ? b : It(a)
}

function Kt(a) {
  var b;
  b = si(a);
  if (0 === b.length) b = null;
  else {
    var c = a.p.w;
    if (c) {
      var d, f, g = a.p.u,
        h = null,
        l, n = -1;
      for (f = 0; f < b.length; f++)(d = b[f], a === d || d.Va || d.p.w != c || (l = d.Ja, l.wg || l.Kd || l.bi || (l = g.Ud(d.p.u), !(0 > n || l < n)))) || (h = d, n = l);
      b = h
    } else b = null
  }
  if (b) return b;
  c = 0;
  d = si(a);
  if (1 >= d.length) return null;
  for (b = d[k(d.length)]; b === a && 6 > c;) b = d[k(d.length)], b.p.w || (b = null), c++;
  return b === a ? null : b
}

function Lt(a) {
  var b = It(a);
  return !b || 100 < a.p.u.ac(b.p.u) ? null : b
}

function Mt(a, b, c) {
  return Math.max(b, (a - b) * (1 - c / 1E3) + b)
}

function Nt(a, b, c) {
  var d = k(w.Nh);
  0.5 > Math.random() && (d = -d);
  var f = k(w.Nh);
  0.5 > Math.random() && (f = -f);
  t(a, b.T + d, b.U + f);
  c && Fg(c, a, 0)
};

function Ot(a, b) {
  var c = w.Cz;
  if (!b) return null;
  var d = a.p.w,
    f = [];
  if (d) {
    var g = d.Nc,
      h;
    for (h = 0; h < g.length; h++)
      if (d = Pt(c, b, g[h], f, !0)) return d
  } else if (g = a.p.cd, (d = Pt(c, b, g.af, f, !1)) || (d = Pt(c, b, g.Be, f, !1))) return d;
  return null
}

function Qt(a, b) {
  var c = w.Cz;
  if (!b) return null;
  var d = a.p.w,
    f = [];
  if (d === b) return null;
  if (d) {
    var g = d.Nc,
      h;
    for (h = 0; h < g.length; h++)
      if (d = Rt(c, b, g[h], f, !0)) return d
  } else if (g = a.p.cd, (d = Rt(c, b, g.af, f, !1)) || (d = Rt(c, b, g.Be, f, !1))) return d;
  return null
}

function Pt(a, b, c, d, f) {
  var g;
  if (c === b) return g = [], g.push(c), g;
  if (!c.Mb) return null;
  if (-1 < d.indexOf(c)) return console.log("reached a door that we already checked."), null;
  d.push(c);
  if (f) {
    if (f = Lg(c.Yk, c), g = Pt(a, b, f, d, !1)) return g.unshift(c), g
  } else {
    var h = c.$d;
    f = h.Nc;
    if (!h.Xi) return null;
    for (h = 0; h < f.length; h++)
      if (g = f[h], g !== c && (g = Pt(a, b, g, d, !0))) return g.unshift(c), g
  }
  return null
}

function Rt(a, b, c, d, f) {
  var g;
  if (c.$d === b) return g = [], g.push(c), g;
  if (!c.Mb) return null;
  if (-1 < d.indexOf(c)) return console.log("reached a door that we already checked [path to room]."), null;
  d.push(c);
  if (f) {
    if (f = Lg(c.Yk, c), g = Rt(a, b, f, d, !1)) return g.unshift(c), g
  } else {
    var h = c.$d;
    f = h.Nc;
    if (!h.Xi) return null;
    for (h = 0; h < f.length; h++)
      if (g = f[h], g !== c && (g = Rt(a, b, g, d, !0))) return g.unshift(c), g
  }
  return null
};

function Xh(a, b) {
  this.Al = a;
  this.bb = b
}
Xh.prototype.Oa = function() {};
Xh.prototype.dr = function(a) {
  if (!St(this, a) && (a.p.dd || a.Y === Sd)) {
    var b = (this.Al.ja + 1) * w.B,
      c = (this.Al.qb - 1) * w.B;
    t(a.p.Qb, (this.Al.ia + 1) * w.B + k((this.Al.rb - 1) * w.B), b + k(c));
    a.Y = 1;
    a.p.dd = !1
  }
};

function St(a, b) {
  if (docileMonstersPotion.t) return !1;
  var c = b.Da;
  c && c.Va && (c = null, b.Cb(null));
  c && c.Ja.Kf && (c = null, b.Cb(null));
  c && c.Ja.wg && (c = null, b.Cb(null));
  if (c && c.Ja.Gn) return Tt(a, b), !0;
  for (var d = qi(b), f, g = b.p.u, h, l = null, n = -1, c = 0; c < d.length; c++)
    if (f = d[c], b !== f && (h = f.Ja, h.Gn && !h.Kd && (h = g.Ud(f.p.u), 0 > n || h < n))) l = f, n = h;
  return (c = l) || (c = Lt(b)) ? (b.Cb(c), Tt(a, b), !0) : !1
}

function Tt(a, b) {
  var c = b.Da.p,
    d = b.p;
  if (c.w === d.w) {
    if (d.u.ac(c.u) <= a.bb) {
      if (!Ut(b)) return;
      Vt(b);
      b.Y = 2
    } else Nt(d.Qb, c.u, b.p.w), b.Y = 1;
    Rd(d)
  }
};

function Wt() {
  this.fo = []
}
Wt.prototype.dr = function(a) {
  w.wb ? this.ou(a) : this.nu(a)
};
Wt.prototype.ou = function(a) {
  var b, c;
  b = w.i.da;
  c = b.Lf;
  var d = b.ge,
    f = b.Wb;
  if (c || f || d)
    if (a === w.i.gg) {
      if (c) {
        if (b = c.iq, c = c.jq, d = w.S.hb(b, c)) {
          b = a.p;
          w.S.hb(w.S.bc(b.dc()), w.S.cc(b.ec())) === d ? a.Y = 10 : (Xt(b, d.bc(), d.cc()), a.Y = 1);
          return
        }
      } else if (d) {
        if (b = d.dm, c = d.em, d = w.S.hb(b, c)) {
          b = a.p;
          w.S.hb(w.S.bc(b.dc()), w.S.cc(b.ec())) === d ? a.Y = 11 : (Xt(b, d.bc(), d.cc()), a.Y = 1);
          return
        }
      } else if (b = f.bc(), c = f.cc(), d = w.S.hb(b, c)) {
        b = a.p;
        w.S.hb(w.S.bc(b.dc()), w.S.cc(b.ec())) === d ? a.Y = 9 : (Xt(b, d.bc(), d.cc()), a.Y = 1);
        return
      }
      d = a.p;
      if (d.dd ||
        a.Y === Sd) Xt(d, b, c), a.Y = 1, d.dd = !1
    } else b = Qd(), c = b.indexOf(a), b = 1 === a.zb ? a.xg : 0 > c ? w.i.gg : b[c - 1], Xt(a.p, w.S.bc(b.p.dc()), w.S.cc(b.p.ec())), a.Y = 1;
  else a.Y = Sd
};
Wt.prototype.nu = function(a) {
  a.Y = Sd;
  a.rh = null;
  a.Da = null;
  a.bj = null;
  a.Ue = null;
  a.ld = null;
  a.Zh = null;
  a.hk = null;
  var b, c = 0,
    d, f = null,
    g;
  for (b = 0; b < this.fo.length && !(d = this.fo[b], d.Ta() > c && (g = d.wd(a), g > c && (c = g, f = d), 100 <= c)); b++);
  f && f.od(a)
};
Wt.prototype.Oa = function(a) {
  var b;
  for (b = 0; b < this.fo.length; b++) this.fo[b].Oa(a)
};

function Yt(a) {
  this.kB = a;
  this.Al = null
}
e = Yt.prototype;
e.Wa = function() {};
e.Oa = function() {};
e.od = function(a) {
  var b = a.p,
    c = b.w;
  if (c) {
    if (b.dd || this.Al != c) {
      this.Al = c;
      var d = wg(c) + w.B,
        f = (c.qb - 1) * w.B;
      t(b.Qb, ug(c) + w.B + k((c.rb - 1) * w.B), d + k(f));
      b.dd = !1
    }
    a.Y = 1
  }
};
e.wd = function(a) {
  return a.p.w ? this.kB : 0
};
e.Ta = function() {
  return this.kB
};

function Zt() {
  this.ka = 10;
  this.Da = null;
  this.SB = 0;
  this.un = null;
  this.bb = 100;
  this.Yt = !1
}
e = Zt.prototype;
e.Wa = function() {
  this.Da = this.un = null
};
e.Oa = function() {};
e.od = function(a) {
  if (this.Da && this.un) {
    a.Cb(this.Da);
    var b = a.p;
    this.SB = a === this.Da ? 0 : b.u.ac(this.Da.p.u);
    if (this.SB <= this.bb) {
      if (!this.Yt && !Ut(a)) return;
      Vt(a);
      this.un.mq = w.i.$a;
      a.ld = this.un;
      a.Y = Jq;
      this.Kp(a)
    } else ab(b.Qb, this.Da.p.u), a.Y = 1;
    Rd(b);
    (b = a.p.w) && $t(a) && au(b)
  }
};
e.Kp = function() {};
e.wd = function(a) {
  var b = a.p.w;
  if (!b || !this.Wd(a)) return 0;
  if (!freeSpellCastingPotion.t) {
    var c = a.K,
      d = c.Yc,
      c = bu(c);
    if (d < c) return 0
  }
  this.Da = this.Td(a);
  return this.Da && this.Da.p.w === b ? (this.un = this.Md()) ? this.Jd(a) : 0 : 0
};
e.Wd = function() {
  return !0
};
e.Jd = function() {
  return 0
};
e.Md = function() {
  return null
};
e.Td = function() {
  return null
};
e.Ta = function() {
  return this.ka
};

function cu() {
  this.ka = 100;
  this.zE = du;
  this.AD = 0.8;
  this.Uq = null
}
e = cu.prototype;
e.Wa = function() {};
e.Oa = function() {};
e.od = function(a) {
  if (this.Uq) {
    var b = a.p.w;
    if (a.p.dd) {
      if (!b) return;
      this.vx(a)
    }
    b && $t(a) && au(b);
    a.Y = 1;
    a.p.dd = !1;
    0 === w.i.$a % 2 && sh(w.pc, a, "Run Away!", "yellow")
  }
};
e.vx = function(a) {
  var b = k(3);
  a = a.p;
  var c = a.w,
    d = ug(c),
    f = wg(c),
    g = vg(c),
    c = xg(c);
  0 === b ? t(a.Qb, d + 1, f + 1) : 1 === b ? t(a.Qb, g - 1, f + 1) : 2 === b ? t(a.Qb, d + 1, c - 1) : t(a.Qb, g - 1, c - 1)
};
e.wd = function(a) {
  var b = a.K.Sa / $h(a.K.Jb);
  if (b > this.AD) return 0;
  var c;
  a: {
    c = qi(a);
    var d, f;
    for (f = 0; f < c.length; f++)
      if (d = c[f], a !== d && d.Da === a) {
        c = d;
        break a
      } c = null
  }
  this.Uq = c;
  return !this.Uq || a.p.u.ac(this.Uq.p.u) > this.zE ? 0 : (1 - b) * this.ka
};
e.Ta = function() {
  return this.ka
};

function eu(a, b, c) {
  this.ka = c;
  this.Fa = null;
  this.CA = a;
  this.bb = b;
  this.fn = new Za;
  this.Jl = new Za;
  this.co = this.ax = 0
}
e = eu.prototype;
e.Wa = function() {
  this.co = this.ax = 0;
  this.Fa = null
};
e.Oa = function() {};
e.od = function(a) {
  this.ax == w.i.$a - 1 ? this.co++ : this.co = 0;
  if (this.Fa && !(this.Fa.Va || this.Fa.Ja.Kd || this.Fa.Ja.bi) && this.vx(a)) {
    this.ax = w.i.$a;
    var b = a.p.w;
    b && $t(a) && au(b);
    a.Y = 1;
    a.p.dd = !1
  }
};
e.vx = function(a) {
  var b = a.p,
    c = b.u,
    d = b.w,
    f = ug(d),
    g = wg(d),
    h = vg(d),
    l = xg(d);
  a = qi(a);
  var n, p, s, u = 0;
  t(this.fn, 0, 0);
  t(this.Jl, 0, 0);
  for (s = 0; s < a.length; s++) n = a[s], n.Va || n.Ja.Kd || n.Ja.bi || n.p.w != d || (p = n.p.u, n = c.ac(p), n > this.CA || (0 === n ? t(this.fn, Math.random(), Math.random()) : (ab(this.fn, c), tb(this.fn, p), Nb(this.fn, 1 / n)), ib(this.Jl, this.fn), u++));
  if (0 === u) return !1;
  Mb(this.Jl);
  Nb(this.Jl, this.bb);
  ib(this.Jl, c);
  c = this.Jl.T;
  d = this.Jl.U;
  c < f ? c = f : c > h && (c = h);
  d < g ? d = g : d > l && (d = l);
  t(b.Qb, c, d);
  return !0
};
e.wd = function(a) {
  this.Fa = Jt(a);
  return this.Fa ? 2 < this.co ? this.co = 0 : a.p.u.ac(this.Fa.p.u) > this.CA ? 0 : this.ka : 0
};
e.Ta = function() {
  return this.ka
};

function fu(a, b, c, d) {
  this.ka = b;
  this.Fa = null;
  this.Ng = 0;
  this.bb = a;
  this.qk = c;
  this.YD = d
}
e = fu.prototype;
e.Wa = function() {};
e.Oa = function() {};
e.od = function(a) {
  if (this.Fa && !this.Fa.Va) {
    a.Cb(this.Fa);
    if (this.Ng <= this.bb) {
      if (!Ut(a)) return;
      Vt(a);
      a.Y = this.qk
    } else Nt(a.p.Qb, this.Fa.p.u, a.p.w), a.Y = 1;
    var b = a.p.w;
    b && $t(a) && au(b);
    Rd(a.p)
  }
};
e.wd = function(a) {
  if (!a.p.w) return 0;
  this.Fa = this.YD ? Lt(a) : Iq(a);
  if (!this.Fa) return 0;
  this.Ng = a.p.u.ac(this.Fa.p.u);
  return this.ka
};
e.Ta = function() {
  return this.ka
};

function gu(a) {
  this.Hn = null;
  this.ka = a;
  this.bb = 10
}
gu.prototype = new Zt;
e = gu.prototype;
e.Wa = function() {
  this.Hn = null
};
e.Oa = function(a) {
  this.Hn || 10 !== a.X || (this.Hn = a)
};
e.Kp = function(a) {
  var b;
  switch (k(8)) {
    case 0:
      b = "Hey Stupid Heads!";
      break;
    case 1:
      b = "Dum Dum Heads!";
      break;
    case 2:
      b = "Yo! Losers!";
      break;
    case 3:
      b = "Stupid Monsters!";
      break;
    case 4:
      b = "You guys suck!";
      break;
    case 5:
      b = "Wimps!";
      break;
    case 6:
      b = "Cowards!";
      break;
    default:
      b = "Hey dummies!"
  }
  sh(w.pc, a, b, "white")
};
e.Wd = function() {
  return this.Hn && wq(this.Hn)
};
e.Jd = function() {
  return this.Ta()
};
e.Md = function() {
  return this.Hn
};
e.Td = function(a) {
  if (a.Ja.Gn || !Ht(a, a.p.w)) return null;
  var b = a.K;
  return 0.8 > b.Sa / $h(b.Jb) ? null : a
};

function hu(a) {
  this.ka = a;
  this.Fa = null;
  this.Ng = 0;
  this.bb = G;
  this.qk = Kq
}
e = hu.prototype;
e.Wa = function() {
  this.Fa = null;
  this.Ng = 0
};
e.Oa = function() {};
e.od = function(a) {
  if (this.Fa && !this.Fa.Va) {
    a.Cb(this.Fa);
    if (this.Ng <= this.bb) {
      if (!Ut(a)) return;
      Vt(a);
      a.Y = this.qk
    } else Nt(a.p.Qb, this.Fa.p.u, a.p.w), a.Y = 1;
    var b = a.p.w;
    b && $t(a) && au(b);
    Rd(a.p)
  }
};
e.wd = function(a) {
  this.Fa = Iq(a);
  if (!this.Fa) return 0;
  a.Ja.wg ? (this.bb = Yh, this.qk = 2) : (this.bb = G, this.qk = Kq);
  this.Ng = a.p.u.ac(this.Fa.p.u);
  return this.ka
};
e.Ta = function() {
  return this.ka
};

function iu(a) {
  this.Dn = null;
  this.ka = a;
  this.bb = 10
}
iu.prototype = new Zt;
e = iu.prototype;
e.Wa = function() {
  this.Dn = null
};
e.Oa = function(a) {
  this.Dn || 11 !== a.X || (this.Dn = a)
};
e.Kp = function() {};
e.Wd = function() {
  return this.Dn && wq(this.Dn)
};
e.Jd = function() {
  return this.Ta()
};
e.Md = function() {
  return this.Dn
};
e.Td = function(a) {
  return a.Ja.wg || !Ht(a, a.p.w) ? null : a
};

function ju(a) {
  this.on = null;
  this.ka = a;
  this.bb = 10
}
ju.prototype = new Zt;
e = ju.prototype;
e.Wa = function() {
  this.on = null
};
e.Oa = function(a) {
  this.on || 12 !== a.X || (this.on = a)
};
e.Kp = function(a) {
  var b;
  switch (k(8)) {
    case 0:
      b = "Kill!";
      break;
    case 1:
      b = "Die!";
      break;
    case 2:
      b = "Must kill everything!";
      break;
    case 3:
      b = "Raaaaaaage!";
      break;
    case 4:
      b = "Murder!";
      break;
    case 5:
      b = "Angry!";
      break;
    case 6:
      b = "I am quite enraged.";
      break;
    default:
      b = "Kill!"
  }
  sh(w.pc, a, b, "white")
};
e.Wd = function() {
  return this.on && wq(this.on)
};
e.Jd = function() {
  return this.Ta()
};
e.Md = function() {
  return this.on
};
e.Td = function(a) {
  return a.Ja.Vs || !Ht(a, a.p.w) ? null : a
};

function ku(a, b, c) {
  this.Vq = new eu(a, b, c)
}
e = ku.prototype;
e.Wa = function() {
  this.Vq.Wa()
};
e.Oa = function() {};
e.od = function(a) {
  this.Vq.od(a)
};
e.wd = function(a) {
  return a.Ja.wg ? 0 : this.Vq.wd(a)
};
e.Ta = function() {
  return this.Vq.Ta()
};

function lu(a, b) {
  this.ka = b;
  this.Fa = this.Vi = null;
  this.Ng = 0;
  this.bb = a
}
e = lu.prototype;
e.Wa = function() {
  this.Vi = null
};
e.Ta = function() {
  return this.ka
};
e.Oa = function(a) {
  this.Vi || 6 !== a.ga || (this.Vi = a)
};
e.od = function(a) {
  if (this.Vi && Ut(a) && wq(this.Vi))
    if (a.Cb(this.Fa), this.Ng <= this.bb) {
      if (Ut(a)) {
        Vt(a);
        this.Vi.mq = w.i.$a;
        a.ld = this.Vi;
        a.Y = Jq;
        Rd(a.p);
        var b = a.p.w;
        b && $t(a) && au(b)
      }
    } else ab(a.p.Qb, this.Fa.p.u), a.Y = 1
};
e.wd = function(a) {
  if (!this.Vi || !wq(this.Vi) || !a.p.w) return 0;
  if (!freeSpellCastingPotion.t) {
    var b = a.K,
      c = b.Yc,
      b = bu(b);
    if (c < b) return 0
  }
  return (this.Fa = Iq(a)) ? this.ka : 0
};

function mu(a, b) {
  this.fm = null;
  this.ka = b;
  this.bb = a
}
mu.prototype = new Zt;
e = mu.prototype;
e.Wa = function() {
  this.fm = null
};
e.Oa = function(a) {
  this.fm || 5 !== a.ga || (this.fm = a)
};
e.Wd = function() {
  return this.fm && wq(this.fm)
};
e.Md = function() {
  return this.fm
};
e.Jd = function(a) {
  a = qi(a);
  return 0 === a.length ? 0 : Math.min(this.Ta(), 5 / a.length * this.Ta())
};
e.Td = function(a) {
  return Iq(a)
};

function nu(a, b, c) {
  this.gm = null;
  this.X = c;
  this.ka = b;
  this.bb = a
}
nu.prototype = new Zt;
e = nu.prototype;
e.Wa = function() {
  this.gm = null
};
e.Oa = function(a) {
  this.gm || a.X !== this.X || (this.gm = a)
};
e.Wd = function() {
  return this.gm && wq(this.gm)
};
e.Md = function() {
  return this.gm
};
e.Jd = function() {
  return this.Ta()
};
e.Td = function(a) {
  return Iq(a)
};

function ou(a, b) {
  this.Zl = null;
  this.ka = b;
  this.bb = a
}
ou.prototype = new Zt;
e = ou.prototype;
e.Wa = function() {
  this.Zl = null
};
e.Oa = function(a) {
  this.Zl || 8 !== a.ga || (this.Zl = a)
};
e.Wd = function() {
  return this.Zl && wq(this.Zl)
};
e.Md = function() {
  return this.Zl
};
e.Jd = function() {
  return this.Ta()
};
e.Td = function(a) {
  return Iq(a)
};

function pu(a, b) {
  this.In = null;
  this.ka = b;
  this.bb = a
}
pu.prototype = new Zt;
e = pu.prototype;
e.Wa = function() {
  this.In = null
};
e.Oa = function(a) {
  this.In || 12 !== a.ga || (this.In = a)
};
e.Wd = function() {
  return this.In && wq(this.In)
};
e.Md = function() {
  return this.In
};
e.Jd = function() {
  return this.Ta()
};
e.Td = function(a) {
  return Iq(a)
};

function qu(a, b, c) {
  this.zd = null;
  this.ga = c;
  this.ka = b;
  this.bb = a
}
qu.prototype = new Zt;
e = qu.prototype;
e.Wa = function() {
  this.zd = null
};
e.Oa = function(a) {
  this.zd || a.ga !== this.ga || (this.zd = a)
};
e.Wd = function() {
  return this.zd && wq(this.zd)
};
e.Md = function() {
  return this.zd
};
e.Jd = function() {
  return this.Ta()
};
e.Td = function(a) {
  return Iq(a)
};

function ru(a, b) {
  this.ka = b;
  this.bb = a;
  this.Lm = null
}
ru.prototype = new Zt;
e = ru.prototype;
e.Wa = function() {
  this.Lm = null
};
e.Oa = function(a) {
  this.Lm || 1 !== a.ga || (this.Lm = a)
};
e.Jd = function() {
  var a = this.Da;
  return Math.max(0, (1 - a.K.Sa / $h(a.K.Jb)) * this.Ta())
};
e.Wd = function() {
  return this.Lm && wq(this.Lm)
};
e.Md = function() {
  return this.Lm
};
e.Td = function(a) {
  var b = null,
    c = 1,
    d = si(a),
    f, g, h;
  for (a = 0; a < d.length; a++)
    if (f = d[a], h = f.K, g = h.Sa, h = $h(h.Jb), g !== h && (g /= h, !b || g < c)) c = g, b = f;
  return 0.9 < c ? null : b
};

function su(a, b) {
  this.ka = b;
  this.bb = a;
  this.pn = null
}
su.prototype = new Zt;
e = su.prototype;
e.Wa = function() {
  this.pn = null
};
e.Oa = function(a) {
  this.pn || 16 !== a.ga || (this.pn = a)
};
e.Jd = function() {
  return this.Ta()
};
e.Wd = function() {
  return this.pn && wq(this.pn)
};
e.Md = function() {
  return this.pn
};
e.Td = function(a) {
  var b, c = w.i.D,
    d;
  for (b = 0; b < c.length; b++)
    if (d = c[b], d !== a && d.Ja.Kf) return d;
  return null
};

function tu(a, b, c) {
  this.ka = c;
  this.bb = a;
  this.X = b;
  this.zd = null
}
tu.prototype = new Zt;
e = tu.prototype;
e.Wa = function() {
  this.zd = null
};
e.Oa = function(a) {
  this.zd || a.X !== this.X || (this.zd = a)
};
e.Wd = function() {
  return this.zd && wq(this.zd)
};
e.Jd = function() {
  return this.Ta()
};
e.Md = function() {
  return this.zd
};
e.Td = function(a) {
  return a
};

function uu() {
  this.eo = 2
}
e = uu.prototype;
e.Wa = function() {};
e.Oa = function() {};
e.od = function(a) {
  if (!vu(w.i.da) || !wu(a)) {
    var b = w.i.da,
      c = b.Cc,
      d = b.Bc,
      b = b.ed,
      f = a.p;
    if (d && d != f.Bc) {
      var g = Ot(a, d);
      f.Ug = g;
      f.dd = !1
    } else b && b != f.ed ? (g = Qt(a, b.$d), f.Ug = g, f.dd = !1) : c && c != f.Cc && (g = Qt(a, c), f.Ug = g, f.dd = !1);
    f.et(d);
    f.Cc = c;
    f.rB(b);
    d ? (t(f.Qb, d.me, d.ne), a.Y = 1) : b ? (t(f.Qb, b.tq, b.uq), a.Y = 1) : c && (a.Y = 1)
  }
};
e.wd = function(a) {
  if (w.wb || vu(w.i.da) && wu(a)) return 0;
  var b = qi(a);
  return 0 < b.length && a.p.w === b[0].p.w ? 0 : this.eo
};

function wu(a) {
  var b;
  return (b = w.i.da.gn) ? a.p.Cc === b ? !1 : !0 : !1
}
e.Ta = function() {
  return this.eo
};

function xu(a) {
  this.Wm = null;
  this.ka = a;
  this.Yt = !0;
  this.bb = 10
}
xu.prototype = new Zt;
e = xu.prototype;
e.Wa = function() {
  this.Wm = null
};
e.Oa = function(a) {
  this.Wm || 14 !== a.ga || (this.Wm = a)
};
e.Wd = function() {
  return this.Wm && wq(this.Wm)
};
e.Jd = function(a) {
  return Ht(a, a.p.w) ? 0 : yu() ? this.Ta() : 0
};
e.Md = function() {
  return this.Wm
};
e.Td = function(a) {
  return yu() ? a : null
};

function yu() {
  return 0 < w.ff.pe.length || 0 < w.dh.yf.length || 0 < w.Uh.kf.length
};

function zu(a) {
  this.pm = null;
  this.ka = a;
  this.Yt = !0;
  this.bb = 10
}
zu.prototype = new Zt;
e = zu.prototype;
e.Wa = function() {
  this.pm = null
};
e.Oa = function(a) {
  this.pm || 15 !== a.ga || (this.pm = a)
};
e.Wd = function() {
  return this.pm && wq(this.pm)
};
e.Jd = function(a) {
  var b = a.p.w;
  if (!b || Ht(a, b)) return 0;
  a = Ji(w.th, b);
  return !a || a.Kg || a.el ? 0 : this.Ta()
};
e.Md = function() {
  return this.pm
};
e.Td = function(a) {
  return a
};

function Au(a, b) {
  this.Mi = w.B + 5;
  this.ka = a;
  this.il = b;
  this.qd = null;
  this.Wy = 0
}
e = Au.prototype;
e.Wa = function() {
  this.qd = null
};
e.Oa = function() {};
e.od = function(a) {
  if (this.qd)
    if (this.qd.gc) this.qd = null;
    else if (this.qd.Zc == a) {
    a.rh = this.qd;
    Jb(a.p.u, this.qd.Xo, this.qd.Yo) < this.Mi ? a.Y = 5 : (t(a.p.Qb, this.qd.Xo, this.qd.Yo), a.Y = 1);
    Rd(a.p);
    var b = a.p.w;
    b && $t(a) && au(b)
  }
};
e.wd = function(a) {
  var b = a.p.w;
  if (!b || Ht(a, b)) return 0;
  this.qd && this.qd.Zc === a && (this.qd.Re(null), this.qd.Se(0));
  var b = w.ff.pe,
    c, d, f = a.p.u,
    g = null,
    h, l = a.p.w,
    n = -1;
  if (l) {
    for (d = 0; d < b.length; d++) c = b[d], c.gc || c.vD !== l || (h = Kb(f, c.Xo, c.Yo), c.Zc && h > c.Ud() || !(0 > n || h < n) || (g = c, n = h));
    if (this.qd = g) this.qd.Re(a), this.qd.Se(n), this.Wy = Math.sqrt(n)
  }
  return this.qd ? Mt(this.ka, this.il, this.Wy) : 0
};
e.Ta = function() {
  return this.ka
};

function Bu(a, b) {
  this.Mi = w.B + 5;
  this.ka = a;
  this.il = b;
  this.bd = null;
  this.Zy = 0
}
e = Bu.prototype;
e.Wa = function() {
  this.bd = null
};
e.Oa = function() {};
e.od = function(a) {
  if (this.bd)
    if (this.bd.gc) this.bd = null;
    else if (this.bd.Zc == a) {
    a.Zh = this.bd;
    Jb(a.p.u, this.bd.bq, this.bd.cq) < this.Mi ? a.Y = 7 : (t(a.p.Qb, this.bd.bq, this.bd.cq), a.Y = 1);
    Rd(a.p);
    var b = a.p.w;
    b && $t(a) && au(b)
  }
};
e.wd = function(a) {
  var b = a.p.w;
  if (!b || Ht(a, b)) return 0;
  this.bd && this.bd.Zc === a && (this.bd.Re(null), this.bd.Se(0));
  var b = w.Uh.kf,
    c, d, f = a.p.u,
    g = null,
    h, l = a.p.w,
    n = -1;
  if (l) {
    for (d = 0; d < b.length; d++) c = b[d], c.gc || c.BE !== l || (h = Kb(f, c.bq, c.cq), c.Zc && h > c.Ud() || !(0 > n || h < n) || (g = c, n = h));
    if (this.bd = g) this.bd.Re(a), this.bd.Se(n), this.Zy = Math.sqrt(n)
  }
  return this.bd ? Mt(this.ka, this.il, this.Zy) : 0
};
e.Ta = function() {
  return this.ka
};

function Cu(a, b) {
  this.Mi = w.B + 5;
  this.ka = a;
  this.il = b;
  this.ad = null;
  this.Yy = 0
}
e = Cu.prototype;
e.Wa = function() {
  this.ad = null
};
e.Oa = function() {};
e.od = function(a) {
  if (this.ad)
    if (this.ad.gc) this.ad = null;
    else if (this.ad.Zc == a) {
    a.hk = this.ad;
    Jb(a.p.u, this.ad.Qp, this.ad.Rp) < this.Mi ? a.Y = 8 : (t(a.p.Qb, this.ad.Qp, this.ad.Rp), a.Y = 1);
    Rd(a.p);
    var b = a.p.w;
    b && $t(a) && au(b)
  }
};
e.wd = function(a) {
  var b = a.p.w;
  if (!b || Ht(a, b)) return 0;
  this.ad && this.ad.Zc === a && (this.ad.Re(null), this.ad.Se(0));
  var b = w.Ti.Hf,
    c, d, f = a.p.u,
    g = null,
    h, l = a.p.w,
    n = -1;
  if (l) {
    for (d = 0; d < b.length; d++) c = b[d], c.gc || c.oE !== l || (h = Kb(f, c.Qp, c.Rp), c.Zc && h > c.Ud() || !(0 > n || h < n) || (g = c, n = h));
    if (this.ad = g) this.ad.Re(a), this.ad.Se(n), this.Yy = Math.sqrt(n)
  }
  return this.ad ? Mt(this.ka, this.il, this.Yy) : 0
};
e.Ta = function() {
  return this.ka
};

function Du(a, b) {
  this.Mi = w.B + 5;
  this.ka = a;
  this.il = b;
  this.$c = null;
  this.Xy = 0
}
e = Du.prototype;
e.Wa = function() {
  this.$c = null
};
e.Oa = function() {};
e.od = function(a) {
  if (this.$c)
    if (this.$c.gc) this.$c = null;
    else if (this.$c.Zc == a) {
    a.bj = this.$c;
    Jb(a.p.u, this.$c.mp, this.$c.np) < this.Mi ? a.Y = 6 : (t(a.p.Qb, this.$c.mp, this.$c.np), a.Y = 1);
    Rd(a.p);
    var b = a.p.w;
    b && $t(a) && au(b)
  }
};
e.wd = function(a) {
  var b = a.p.w;
  if (!b || Ht(a, b)) return 0;
  this.$c && this.$c.Zc === a && (this.$c.Re(null), this.$c.Se(0));
  var b = w.dh.yf,
    c, d, f = a.p.u,
    g = null,
    h, l = a.p.w,
    n = -1;
  if (l) {
    for (d = 0; d < b.length; d++) c = b[d], c.gc || c.PD !== l || (h = Kb(f, c.mp, c.np), c.Zc && h > c.Ud() || !(0 > n || h < n) || (g = c, n = h));
    if (this.$c = g) this.$c.Re(a), this.$c.Se(n), this.Xy = Math.sqrt(n)
  }
  return this.$c ? Mt(this.ka, this.il, this.Xy) : 0
};
e.Ta = function() {
  return this.ka
};

function Eu() {
  this.Mi = w.B + 1;
  this.ka = 90;
  this.lc = null
}
e = Eu.prototype;
e.Wa = function() {
  this.lc = null
};
e.Oa = function() {};
e.od = function(a) {
  if (this.lc && !this.lc.Kg) {
    a.hq(this.lc);
    Jb(a.p.u, this.lc.zq, this.lc.Aq) < this.Mi ? a.Y = 12 : (t(a.p.Qb, this.lc.zq, this.lc.Aq), a.Y = 1);
    Rd(a.p);
    var b = a.p.w;
    b && $t(a) && au(b)
  }
};
e.wd = function(a) {
  var b = a.p.w;
  if (!b) return 0;
  this.lc = Ji(w.th, b);
  return !this.lc || this.lc.Kg || !this.lc.el || Ht(a, b) ? 0 : this.ka
};
e.Ta = function() {
  return this.ka
};

function Fu(a) {
  this.Sc = null;
  this.ka = a;
  this.bb = 10
}
Fu.prototype = new Zt;
e = Fu.prototype;
e.Wa = function() {
  this.Sc = null
};
e.Oa = function(a) {
  this.Sc || 9 !== a.ga || (this.Sc = a)
};
e.Kp = function(a) {
  sh(w.pc, a, "Protect me", "white")
};
e.Wd = function(a) {
  return this.Sc && wq(this.Sc) && !a.En ? !0 : !1
};
e.Jd = function() {
  return this.Ta()
};
e.Md = function() {
  return this.Sc
};
e.Td = function(a) {
  return a
};

function Gu(a, b, c) {
  this.Sc = null;
  this.KE = c;
  this.ka = b;
  this.bb = a
}
Gu.prototype = new Zt;
e = Gu.prototype;
e.Wa = function() {
  this.Sc = null
};
e.Oa = function(a) {
  this.Sc || a.ga !== this.KE || (this.Sc = a)
};
e.Wd = function(a) {
  if (!this.Sc || !wq(this.Sc)) return !1;
  var b = a.K.gl;
  return Hu(a) < b
};
e.Jd = function() {
  return this.Ta()
};
e.Md = function() {
  return this.Sc
};
e.Td = function(a) {
  return a
};

function Iu(a, b) {
  this.Sc = null;
  this.ka = b;
  this.bb = a
}
Iu.prototype = new Zt;
e = Iu.prototype;
e.Wa = function() {
  this.Sc = null
};
e.Oa = function(a) {
  this.Sc || 11 !== a.ga || (this.Sc = a)
};
e.Wd = function(a) {
  if (!this.Sc || !wq(this.Sc)) return !1;
  var b = a.p.w;
  if (!b) return !1;
  var c = w.Gf.Og;
  if (!c || 0 === c.length) return !1;
  var d, f = !1;
  for (d = 0; d < c.length; d++)
    if (c[d].p.w === b) {
      f = !0;
      break
    } if (!f) return !1;
  b = a.K.gl;
  return Hu(a) < b
};
e.Jd = function() {
  return this.Ta()
};
e.Md = function() {
  return this.Sc
};
e.Td = function(a) {
  var b = w.Gf.Og;
  if (0 === b.length) return null;
  var c = a.p.w;
  if (!c) return null;
  var d, f = a.p.u,
    g = null,
    h, l = -1;
  for (d = 0; d < b.length; d++)
    if (a = b[d], a.p.w === c && (h = f.Ud(a.p.u), 0 > l || h < l)) g = a, l = h;
  return g
};

function Ju(a, b) {
  this.ka = b;
  this.Uw = a
}
e = Ju.prototype;
e.Wa = function() {};
e.Oa = function() {};
e.od = function(a) {
  Nt(a.p.Qb, a.xg.p.u, a.p.w);
  a.Y = 1;
  Rd(a.p)
};
e.wd = function(a) {
  if (w.wb) return 0;
  var b = a.p;
  a = a.xg.p;
  return !b.w || !a.w || b.w !== a.w || b.u.ac(a.u) < this.Uw ? 0 : this.ka
};
e.Ta = function() {
  return this.ka
};

function Ku(a, b, c, d) {
  this.ka = c;
  this.Fa = null;
  this.Ng = 0;
  this.bb = a;
  this.Uw = b;
  this.qk = d
}
e = Ku.prototype;
e.Wa = function() {};
e.Oa = function() {};
e.od = function(a) {
  if (this.Fa && !this.Fa.Va) {
    a.Cb(this.Fa);
    if (this.Ng <= this.bb) {
      if (!Ut(a)) return;
      Vt(a);
      a.Y = this.qk
    } else Nt(a.p.Qb, this.Fa.p.u, a.p.w), a.Y = 1;
    var b = a.p.w;
    b && $t(a) && au(b);
    Rd(a.p)
  }
};
e.wd = function(a) {
  if (w.wb) return 0;
  var b = a.xg;
  a = a.p;
  var c = b.p;
  if (!a.w || !c.w || a.w !== c.w) return 0;
  this.Fa = Iq(b);
  if (!this.Fa) return 0;
  b = this.Fa.p.u;
  if (c.u.ac(b) > this.Uw) return 0;
  this.Ng = a.u.ac(b);
  return this.ka
};
e.Ta = function() {
  return this.ka
};

function Lu(a) {
  this.eo = a
}
e = Lu.prototype;
e.Wa = function() {};
e.Oa = function() {};
e.od = function(a) {
  var b = a.p;
  if (b.w) {
    var c = b.w,
      d = b.Qb;
    ab(d, b.u);
    Fg(c, d, w.B + 1);
    b.dd = !1;
    b.dd = !1;
    a.Y = 1
  }
};
e.wd = function(a) {
  if (w.wb) return 0;
  var b = a.p;
  if (b.Ug && 0 < b.Ug.length || b.Bc || b.ed || b.Cc) return 0;
  a = b.w;
  if (!a) return 0;
  b = b.u;
  return Gg(a, b) || a.Za && Jb(b, a.Za.tq, a.Za.uq) < w.B ? this.eo : 0
};
e.Ta = function() {
  return this.eo
};
var Yh = 50,
  G = 140,
  du = 50,
  Mu = {
    Xf: 1.15,
    Qf: 0.9,
    Rf: 1,
    Zf: 0.9,
    Cf: 0.9,
    Ef: 1.15
  },
  Nu = {
    Xf: 1,
    Qf: 1,
    Rf: 1,
    Zf: 1,
    Cf: 1,
    Ef: 1
  },
  Ou = {
    Xf: 1,
    Qf: 0.8,
    Rf: 1,
    Zf: 0.8,
    Cf: 0.5,
    Ef: 1.1
  },
  Pu = {
    pa: 0,
    Ka: "Fighter",
    vg: "Fighter",
    d: "HumanFighter2.PNG",
    za: "Hugo",
    yb: "Tank character. Powerful melee attack.",
    Le: 0,
    fe: !1,
    tb: [{
      r: "20",
      s: 1
    }, {
      r: "80",
      s: 2
    }, {
      r: "40",
      s: 4
    }, {
      r: "120",
      s: 5
    }, {
      r: "101",
      s: 3
    }, {
      r: "185",
      s: 6
    }],
    Ma: {
      Xf: 0.95,
      Qf: 1,
      Rf: 0.95,
      Zf: 1.1,
      Cf: 1.1,
      Ef: 0.9
    },
    kc: oq,
    Qg: function() {
      return [new F(Kj), new F(ck), new F(Lj), new F(dk), new F(gk), new F(Mj), new F(ek), new Ds(nt),
        new F(fk)
      ]
    },
    Rg: function() {
      return [new F(Hj), new F(Zj), new F(Ij), new F(ak), new F(hk), new F(Jj), new F(bk), new F(mk), new F(nk)]
    },
    Sg: function() {
      return [new F(Qj), new F(Wj), new F(Rj), new F(Xj), new F(ik), new F(Sj), new F(Yj), new F(kk), new F(ok)]
    },
    Tg: function() {
      return [new F(Nj), new F(Tj), new F(Oj), new F(Uj), new F(jk), new F(Pj), new F(Vj), new F(lk), new F(pk)]
    },
    nb: function() {
      return [new cu, new Lu(99), new gu(98), new fu(Yh, 90, 2, !1), new Eu, new Du(60, 10), new Bu(60, 10), new Cu(60, 10), new Au(60, 10), new uu]
    }
  },
  Qu = {
    pa: 6,
    Ka: "Priest",
    vg: "Priest",
    d: "HumanPriest4.PNG",
    za: "Chronos",
    yb: "A healer and a killer. Melee combat plus spells to help the party.",
    Le: 0,
    fe: !1,
    tb: [{
      r: "22",
      s: 1
    }, {
      r: "163",
      s: 5
    }, {
      r: "82",
      s: 2
    }, {
      r: "41",
      s: 4
    }, {
      r: "181",
      s: 3
    }, {
      r: "145",
      s: 6
    }],
    Ma: {
      Xf: 0.95,
      Qf: 1,
      Rf: 0.95,
      Zf: 1.05,
      Cf: 1,
      Ef: 1.05
    },
    kc: nq,
    Qg: function() {
      return [new Ds(tt), new F(bl), new Ds(ut), new F(Hl), new F(cl), new F(ll), new F(dl), new F(Jl), new F(El)]
    },
    Rg: function() {
      return [new F(ol), new F(Zk), new Ds(vt), new F(pl), new F($k), new F(Fl), new F(nl), new F(al), new F(Il)]
    },
    Sg: function() {
      return [new F(ql), new F(el), new Ds(wt), new F(Bl), new F(fl), new F(kl), new F(gl), new F(Gl), new F(Kl)]
    },
    Tg: function() {
      return [new F(Cl), new F(hl), new Ds(xt), new F(Dl), new F(jl), new F(ml), new F(il), new F(Ll), new Ds(yt)]
    },
    nb: function() {
      return [new cu, new Lu(99), new su(Yh, 94), new ru(G, 90), new tu(G, 6, 81), new tu(G, 5, 80), new tu(G, 7, 79), new tu(G, 8, 78), new fu(Yh, 60, 2, !1), new Eu, new Du(60, 10), new Bu(60, 10), new Cu(60, 10), new Au(60, 10), new uu]
    }
  },
  Ru = {
    pa: 2,
    Ka: "Ranger",
    vg: "Ranger",
    d: "FemaleRanger01.PNG",
    za: "Elle",
    yb: "Beautiful and deadly. Ranged attack.",
    Le: 0,
    fe: !1,
    tb: [{
      r: "60",
      s: 1
    }, {
      r: "23",
      s: 3
    }, {
      r: "83",
      s: 2
    }, {
      r: "143",
      s: 5
    }, {
      r: "3",
      s: 4
    }],
    Ma: {
      Xf: 1.15,
      Qf: 0.9,
      Rf: 1.15,
      Zf: 0.9,
      Cf: 0.9,
      Ef: 0.9
    },
    kc: null,
    Qg: function() {
      return [new F(Zm), new F(vn), new F($m), new F(zn), new F(hn), new F(mn), new F(an), new F(tn)]
    },
    Rg: function() {
      return [new F(Wm), new F(jn), new F(wn), new F(Xm), new F(An), new F(pn), new F(Ym), new F(on)]
    },
    Sg: function() {
      return [new F(en), new F(nn), new F(fn), new F(xn), new F(kn), new F(Bn), new F(gn), new F(rn)]
    },
    Tg: function() {
      return [new F(bn),
        new F(qn), new F(cn), new F(sn), new F(yn), new F(dn), new F(Cn), new F(un), new F(ln)
      ]
    },
    nb: function() {
      return [new cu, new Lu(99), new eu(du, G, 95), new fu(G, 90, Kq, !1), new Eu, new Du(60, 10), new Bu(60, 10), new Cu(60, 10), new Au(60, 10), new uu]
    }
  },
  Su = {
    pa: 4,
    Ka: "Pyromancer",
    vg: "Pyro",
    d: "FemaleMage01.PNG",
    za: "Natasha",
    yb: "Spell-based ranged attack. Fire Magic.",
    Le: 0,
    fe: !0,
    tb: [{
      r: "27",
      s: 1
    }, {
      r: "86",
      s: 2
    }, {
      r: "122",
      s: 4
    }, {
      r: "161",
      s: 5
    }, {
      r: "141",
      s: 3
    }, {
      r: "183",
      s: 6
    }],
    Ma: Mu,
    kc: lq,
    Qg: function() {
      return [new Ds(Dt), new F(rm), new F(Em),
        new F(sm), new F(Im), new F(tm), new F(Km), new F(Nm), new F(Gm)
      ]
    },
    Rg: function() {
      return [new F(xm), new Ds(Gt), new F(ym), new F(Pm), new F(zm), new F(Qm), new F(Om), new F(Rm), new F(Fm)]
    },
    Sg: function() {
      return [new F(um), new F(Hm), new Ds(Ft), new F(vm), new F(Dm), new F(Sm), new F(wm), new F(Mm), new F(Tm)]
    },
    Tg: function() {
      return [new F(Am), new F(Jm), new Ds(Et), new F(Bm), new F(Um), new F(Cm), new F(Vm), new F(Lm)]
    },
    nb: function() {
      return [new cu, new Lu(99), new eu(du, G, 95), new ou(G, 95), new lu(G, 95), new qu(G, 85, 4), new nu(G, 60,
        4), new Eu, new Du(60, 10), new Bu(60, 10), new Cu(60, 10), new Au(60, 10), new uu]
    }
  },
  Tu = {
    pa: 7,
    Ka: "Rogue",
    vg: "Rogue",
    d: "HumanThief4.PNG",
    za: "Casey",
    yb: "Stealth attack. Ranged/Melee hybrid. Helpful looting abilities.",
    Le: 0,
    fe: !1,
    tb: [{
      r: "24",
      s: 3
    }, {
      r: "25",
      s: 4
    }, {
      r: "61",
      s: 1
    }, {
      r: "84",
      s: 2
    }, {
      r: "100",
      s: 5
    }, {
      r: "88",
      s: 6
    }],
    Ma: Nu,
    kc: pq,
    Qg: function() {
      return [new F(Gn), new F(Hn), new F(Vn), new F(In), new Ds(qt), new F(Wn), new F(fo), new F($n), new F(ho)]
    },
    Rg: function() {
      return [new F(Dn), new F(Xn), new F(ao), new F(En), new F(Yn), new F(bo),
        new F(Fn), new F(Zn), new F(co)
      ]
    },
    Sg: function() {
      return [new F(Mn), new F(Sn), new F(Nn), new F(Tn), new F(io), new F(On), new F(Un), new F(jo), new Ds(rt)]
    },
    Tg: function() {
      return [new F(Jn), new F(Pn), new F(eo), new F(Kn), new F(Qn), new F(go), new F(Ln), new F(Rn), new Ds(st)]
    },
    nb: function() {
      return [new cu, new Lu(99), new iu(98), new ku(du, G, 95), new hu(95), new Eu, new zu(75), new xu(70), new Du(60, 10), new Bu(60, 10), new Cu(60, 10), new Au(60, 10), new uu]
    }
  },
  Uu = {
    pa: 10,
    Ka: "Druid",
    vg: "Druid",
    d: "HumanDruid01.PNG",
    za: "Drago",
    yb: "Powerful Summoner/Priest Hybrid. Summons Wolves and a pet dog.",
    Le: 0,
    fe: !0,
    tb: [{
      r: "31",
      s: 1
    }, {
      r: "91",
      s: 2
    }, {
      r: "202",
      s: 6
    }, {
      r: "203",
      s: 5
    }, {
      r: "164",
      s: 3
    }, {
      r: "7",
      s: 4
    }],
    Ma: Nu,
    kc: sq,
    Qg: function() {
      return [new Ds(dt), new F(Po), new F(mp), new F(Qo), new F(kp), new F(Ro), new F(qp), new F(lp), new Ds(et)]
    },
    Rg: function() {
      return [new F(Vo), new Ds(ft), new F(Wo), new F(rp), new F(Xo), new F(sp), new F(cp), new F(dp), new F(tp)]
    },
    Sg: function() {
      return [new F(So), new F(ep), new F(ap), new F(op), new F(To), new F(fp), new F(bp), new F(np), new F(Uo)]
    },
    Tg: function() {
      return [new F(Yo), new F(gp), new F(Zo),
        new F(ip), new F(hp), new F($o), new F(pp), new F(jp), new Ds(ct)
      ]
    },
    nb: function() {
      return [new cu, new Lu(99), new eu(du, G, 95), new Fu(90), new Gu(G, 85, 10), new ru(G, 75), new nu(G, 60, 0), new Eu, new Du(60, 10), new Bu(60, 10), new Cu(60, 10), new Au(60, 10), new uu]
    }
  },
  Vu = {
    pa: 1,
    Ka: "Barbarian",
    vg: "Barbarian",
    eF: !1,
    d: "BarbarianFighter4.PNG",
    za: "Largo",
    yb: "Tank character. Abilities: Rage, Sledgehammer.",
    Le: 1,
    fe: !1,
    tb: [{
      r: "21",
      s: 1
    }, {
      r: "81",
      s: 2
    }, {
      r: "102",
      s: 3
    }, {
      r: "144",
      s: 5
    }, {
      r: "180",
      s: 4
    }, {
      r: "4",
      s: 6
    }],
    Ma: {
      Xf: 1.05,
      Qf: 0.95,
      Rf: 1.05,
      Zf: 0.95,
      Cf: 1,
      Ef: 1
    },
    kc: qq,
    Qg: function() {
      return [new F(Ui), new F(yj), new Ds(pt), new F(Vi), new F(zj), new F(Fj), new F(Wi), new F(Aj), new F(Gj)]
    },
    Rg: function() {
      return [new F(Ri), new F(tj), new F(Si), new F(Bj), new F(uj), new F(Ti), new F(vj), new F(Cj), new Ds(ot)]
    },
    Sg: function() {
      return [new F($i), new F(oj), new F(aj), new F(wj), new F(pj), new F(bj), new F(qj), new F(xj), new F(Dj)]
    },
    Tg: function() {
      return [new F(Xi), new F(lj), new F(rj), new F(Yi), new F(mj), new F(Zi), new F(sj), new F(nj), new F(Ej)]
    },
    nb: function() {
      return [new cu,
        new Lu(99), new ju(98), new ou(Yh, 100), new fu(Yh, 90, 2, !1), new Eu, new Du(60, 10), new Bu(60, 10), new Cu(60, 10), new Au(60, 10), new uu
      ]
    }
  },
  Wu = {
    pa: 3,
    Ka: "Electromancer",
    vg: "Electro",
    d: "HumanMage15.PNG",
    za: "Kane",
    yb: "Spell-based ranged attack. Electrical Magic.",
    Le: 1,
    fe: !0,
    tb: [{
      r: "26",
      s: 1
    }, {
      r: "85",
      s: 2
    }, {
      r: "121",
      s: 4
    }, {
      r: "160",
      s: 5
    }, {
      r: "140",
      s: 3
    }, {
      r: "182",
      s: 6
    }],
    Ma: Mu,
    kc: kq,
    Qg: function() {
      return [new Ds(zt), new F(Ml), new F(Zl), new F(Nl), new F(cm), new F(Ol), new F(em), new F(hm), new F(am)]
    },
    Rg: function() {
      return [new F(Sl),
        new Ds(At), new F(Tl), new F(jm), new F(Ul), new F(km), new F(im), new F(lm), new F($l)
      ]
    },
    Sg: function() {
      return [new F(Pl), new F(bm), new Ds(Bt), new F(Ql), new F(Yl), new F(pm), new F(Rl), new F(gm), new F(qm)]
    },
    Tg: function() {
      return [new F(Vl), new F(dm), new Ds(Ct), new F(Wl), new F(mm), new F(Xl), new F(nm), new F(fm), new F(om)]
    },
    nb: function() {
      return [new cu, new Lu(99), new eu(du, G, 95), new mu(G, 95), new lu(G, 95), new qu(G, 85, 4), new nu(G, 60, 1), new Eu, new Du(60, 10), new Bu(60, 10), new Cu(60, 10), new Au(60, 10), new uu]
    }
  },
  Xu = {
    pa: 8,
    Ka: "Ninja",
    vg: "Ninja",
    d: "Ninja.PNG",
    za: "Meiji",
    yb: "Enjoys walks on the beach and killing monsters.",
    Le: 2,
    fe: !1,
    tb: [{
      r: "29",
      s: 3
    }, {
      r: "62",
      s: 1
    }, {
      r: "89",
      s: 4
    }, {
      r: "186",
      s: 2
    }, {
      r: "5",
      s: 5
    }, {
      r: "33",
      s: 6
    }],
    Ma: {
      Xf: 1.1,
      Qf: 0.9,
      Rf: 1.1,
      Zf: 1.1,
      Cf: 1,
      Ef: 1
    },
    kc: tq,
    Qg: function() {
      return [new F(tk), new F(Qk), new Ds(it), new F(uk), new F(Ok), new F(Xk), new F(vk), new F(Pk), new F(Yk)]
    },
    Rg: function() {
      return [new F(qk), new F(Ik), new F(Lk), new F(rk), new F(Jk), new F(Mk), new F(sk), new F(Kk), new F(Nk)]
    },
    Sg: function() {
      return [new F(zk),
        new F(Fk), new F(Rk), new F(Ak), new F(Gk), new F(Vk), new F(Bk), new F(Hk), new F(Wk)
      ]
    },
    Tg: function() {
      return [new F(wk), new F(Ck), new F(Sk), new F(xk), new F(Dk), new F(Tk), new F(yk), new F(Ek), new F(Uk)]
    },
    nb: function() {
      return [new cu, new Lu(99), new pu(G, 95), new eu(du, G, 90), new fu(G, 85, Kq, !1), new Eu, new Du(60, 10), new Bu(60, 10), new Cu(60, 10), new Au(60, 10), new uu]
    }
  },
  Yu = {
    pa: 9,
    Ka: "Necromancer",
    vg: "Necro",
    d: "Unique1.PNG",
    za: "Nameless",
    yb: "Summoner: Raises a skeleton army.",
    Le: 2,
    fe: !0,
    tb: [{
        r: "30",
        s: 1
      }, {
        r: "90",
        s: 2
      },
      {
        r: "200",
        s: 6
      }, {
        r: "201",
        s: 5
      }, {
        r: "6",
        s: 3
      }, {
        r: "124",
        s: 4
      }
    ],
    Ma: Mu,
    kc: rq,
    Qg: function() {
      return [new Ds(jt), new F(ko), new F(xo), new F(lo), new F(Bo), new F(mo), new F(Eo), new F(Ho), new F(zo)]
    },
    Rg: function() {
      return [new F(qo), new Ds(lt), new F(yo), new F(ro), new F(Ko), new F(Co), new F(so), new F(Io), new F(Lo)]
    },
    Sg: function() {
      return [new F(no), new F(Ao), new F(oo), new F(Jo), new F(wo), new F(po), new F(Go), new Ds(mt)]
    },
    Tg: function() {
      return [new F(to), new F(Do), new Ds(kt), new F(uo), new F(Mo), new F(Fo), new F(No), new F(vo),
        new F(Oo)
      ]
    },
    nb: function() {
      return [new cu, new Lu(99), new eu(du, G, 95), new Fu(94), new Iu(G, 90), new qu(G, 89, 13), new qu(G, 85, 4), new Eu, new Du(60, 10), new Bu(60, 10), new Cu(60, 10), new Au(60, 10), new uu]
    }
  },
  Zu = {
    pa: 11,
    Ka: "Chicken King",
    vg: "King",
    d: "Unique4.PNG",
    za: "Lord Volaille",
    yb: "Pure Chicken Summoner.",
    Le: 3,
    fe: !0,
    tb: [{
      r: "32",
      s: 1
    }, {
      r: "92",
      s: 2
    }, {
      r: "204",
      s: 6
    }, {
      r: "125",
      s: 5
    }, {
      r: "165",
      s: 3
    }, {
      r: "205",
      s: 4
    }],
    Ma: Mu,
    kc: uq,
    Qg: function() {
      return [new Ds(gt), new F(xp), new F(Hp), new F(Lp), new F(yp), new F(aq), new F(Wp), new F(zp),
        new F(iq)
      ]
    },
    Rg: function() {
      return [new F(up), new F(Ip), new F(vp), new F(Zp), new F(wp), new F(cq), new F(Jp), new Ds(ht)]
    },
    Sg: function() {
      return [new F(Ap), new F(Kp), new F(dq), new F(Bp), new F(Gp), new F(eq), new F(Cp), new F(Yp), new F(hq)]
    },
    Tg: function() {
      return [new F(Dp), new F(Mp), new F(fq), new F(Ep), new F(Xp), new F(bq), new F(Fp), new F($p), new F(gq)]
    },
    nb: function() {
      return [new cu, new Lu(99), new eu(du, G, 95), new Fu(90), new Gu(G, 85, 17), new Eu, new Du(60, 10), new Bu(60, 10), new Cu(60, 10), new Au(60, 10), new uu]
    }
  },
  $u = {};
$u[0] = Pu;
$u[6] = Qu;
$u[2] = Ru;
$u[7] = Tu;
$u[8] = Xu;
$u[1] = Vu;
$u[3] = Wu;
$u[4] = Su;
$u[9] = Yu;
$u[10] = Uu;
$u[11] = Zu;
var av = [Pu, Qu, Ru, Su, Tu, Uu, Vu, Wu, Xu, Yu, Zu],
  Wh = {
    pa: 12,
    Ka: "Monster",
    bF: 50,
    cF: 160,
    kc: null,
    tb: null,
    Ma: null
  },
  bv = {
    pa: 0,
    Ka: "Scroll Character",
    d: "",
    za: "Scroll Character",
    yb: "Scroll Character Description",
    Le: 0,
    fe: !1,
    tb: [{
      r: "230",
      s: 1
    }, {
      r: "231",
      s: 2
    }, {
      r: "232",
      s: 3
    }, {
      r: "233",
      s: 4
    }, {
      r: "234",
      s: 5
    }, {
      r: "235",
      s: 6
    }],
    Ma: {
      Xf: 1.2,
      Qf: 1,
      Rf: 500,
      Zf: 1,
      Cf: 1,
      Ef: 1
    }
  };
var cv = {
    pa: 0,
    oi: !1,
    Ka: "Wolf",
    d: "Wolf.PNG",
    za: "Howler",
    yb: "A cool wolf that fights for a time.",
    Oi: -1,
    tb: [{
      r: "230",
      s: 1
    }, {
      r: "231",
      s: 2
    }, {
      r: "232",
      s: 3
    }, {
      r: "233",
      s: 4
    }, {
      r: "234",
      s: 5
    }, {
      r: "235",
      s: 6
    }],
    Ma: Ou,
    kc: null,
    nb: function() {
      return [new fu(Yh, 90, 2, !1), new Eu, new Du(60, 10), new Bu(60, 10), new Cu(60, 10), new Au(60, 10), new uu]
    }
  },
  dv = {
    pa: 0,
    oi: !1,
    Ka: "Skeleton",
    d: "SkeletonFighter3.PNG",
    za: "Bones",
    yb: "A Skeletal Warrior.",
    Oi: -1,
    tb: [{
      r: "230",
      s: 1
    }, {
      r: "231",
      s: 2
    }, {
      r: "232",
      s: 3
    }, {
      r: "233",
      s: 4
    }, {
      r: "234",
      s: 5
    }, {
      r: "235",
      s: 6
    }],
    Ma: Ou,
    kc: null,
    nb: function() {
      return [new fu(Yh, 90, 2, !1), new Eu, new Du(60, 10), new Bu(60, 10), new Cu(60, 10), new Au(60, 10), new uu]
    }
  },
  ev = {
    pa: 0,
    oi: !1,
    Ka: "Chicken",
    d: "Chicken1.PNG",
    za: "Chicken",
    yb: "A chicken.",
    Oi: -1,
    tb: [{
      r: "230",
      s: 1
    }, {
      r: "231",
      s: 2
    }, {
      r: "232",
      s: 3
    }, {
      r: "233",
      s: 4
    }, {
      r: "234",
      s: 5
    }, {
      r: "235",
      s: 6
    }],
    Ma: Ou,
    kc: null,
    nb: function() {
      return [new fu(Yh, 90, 2, !1), new Eu, new Du(60, 10), new Bu(60, 10), new Cu(60, 10), new Au(60, 10), new uu]
    }
  },
  fv = {
    pa: 1,
    oi: !1,
    Ka: "Chicken",
    d: "Chicken1.PNG",
    za: "Chicken",
    yb: "A chicken.",
    Oi: -1,
    tb: [{
      r: "230",
      s: 1
    }, {
      r: "231",
      s: 2
    }, {
      r: "232",
      s: 3
    }, {
      r: "233",
      s: 4
    }, {
      r: "234",
      s: 5
    }, {
      r: "235",
      s: 6
    }],
    Ma: Ou,
    jl: [qq.wB],
    Bp: [],
    nb: function() {
      return [new ou(Yh, 100), new fu(Yh, 90, 2, !1), new Eu, new Du(60, 10), new Bu(60, 10), new Cu(60, 10), new Au(60, 10), new uu]
    }
  },
  gv = {
    pa: 8,
    oi: !1,
    Ka: "Chicken",
    d: "Chicken1.PNG",
    za: "Chicken",
    yb: "A chicken.",
    Oi: -1,
    tb: [{
      r: "29",
      s: 3
    }, {
      r: "62",
      s: 1
    }, {
      r: "89",
      s: 4
    }, {
      r: "186",
      s: 2
    }, {
      r: "5",
      s: 5
    }, {
      r: "33",
      s: 6
    }],
    Ma: Ou,
    jl: [tq.Hx],
    Bp: [{
      g: 1,
      f: 28
    }],
    nb: function() {
      return [new pu(G, 95), new eu(du, G, 90), new fu(G, 85, Kq,
        !1), new Eu, new Du(60, 10), new Bu(60, 10), new Cu(60, 10), new Au(60, 10), new uu]
    }
  },
  hv = {
    pa: 7,
    oi: !1,
    Ka: "Chicken",
    d: "Chicken1.PNG",
    za: "Chicken",
    yb: "A chicken.",
    Oi: -1,
    tb: [{
      r: "24",
      s: 3
    }, {
      r: "25",
      s: 4
    }, {
      r: "61",
      s: 1
    }, {
      r: "84",
      s: 2
    }, {
      r: "100",
      s: 5
    }, {
      r: "88",
      s: 6
    }],
    Ma: Ou,
    jl: [pq.IB],
    Bp: [],
    nb: function() {
      return [new iu(100), new ku(du, G, 95), new hu(95), new Eu, new Du(60, 10), new Bu(60, 10), new Cu(60, 10), new Au(60, 10), new uu]
    }
  },
  iv = {
    pa: 2,
    oi: !0,
    Ka: "Death Chicken",
    d: "Chicken2.PNG",
    za: "Death Chicken",
    yb: "A death chicken.",
    Oi: -1,
    tb: [{
      r: "60",
      s: 1
    }, {
      r: "23",
      s: 3
    }, {
      r: "83",
      s: 2
    }, {
      r: "143",
      s: 5
    }, {
      r: "3",
      s: 4
    }],
    Ma: Nu,
    kc: null,
    Bp: [{
      g: 2,
      f: 23
    }, {
      g: 40,
      f: 24
    }],
    nb: function() {
      return [new Ju(160, 100), new Ku(G, 160, 95, Kq), new fu(G, 65, Kq, !1), new Eu, new Du(60, 10), new Bu(60, 10), new Cu(60, 10), new Au(60, 10), new uu]
    }
  },
  jv = {
    pa: 3,
    oi: !0,
    Ka: "Phantom Skull",
    d: "PhantomSkull.PNG",
    za: "Kryptax",
    yb: "Floating Skull of Death.",
    Oi: -1,
    tb: [{
      r: "230",
      s: 1
    }, {
      r: "231",
      s: 2
    }, {
      r: "232",
      s: 3
    }, {
      r: "233",
      s: 4
    }, {
      r: "234",
      s: 5
    }, {
      r: "235",
      s: 6
    }],
    Ma: Mu,
    kc: null,
    jl: [kq.br, mq],
    Bp: [{
      g: 3,
      f: 21
    }],
    nb: function() {
      return [new Ju(160,
        100), new mu(G, 95), new qu(G, 85, 4), new Eu, new Du(60, 10), new Bu(60, 10), new Cu(60, 10), new Au(60, 10), new uu]
    }
  },
  kv = {};
kv[sq.LB.ta] = {
  pa: 6,
  oi: !0,
  Ka: "Dog",
  d: "DogWhite.PNG",
  za: "Scruffy",
  yb: "His bite is bigger than his bark.",
  Oi: -1,
  tb: [{
    r: "230",
    s: 1
  }, {
    r: "231",
    s: 2
  }, {
    r: "232",
    s: 3
  }, {
    r: "233",
    s: 4
  }, {
    r: "234",
    s: 5
  }, {
    r: "235",
    s: 6
  }],
  Ma: Nu,
  kc: null,
  jl: [nq.$z, nq.Zz],
  nb: function() {
    return [new Ju(160, 100), new Ku(Yh, 160, 90, 2), new tu(G, 8, 35), new tu(G, 5, 30), new Eu, new Du(60, 10), new Bu(60, 10), new Cu(60, 10), new Au(60, 10), new uu]
  }
};
kv[sq.PB.ta] = cv;
kv[rq.OB.ta] = dv;
kv[rq.NB.ta] = jv;
kv[uq.KB.ta] = ev;
kv[uq.MB.ta] = iv;

function lv() {
  this.eh = []
}

function mv() {
  var a = w.Ni;
  0 < a.eh.length && (a.eh.length = 0)
}
lv.prototype.Lp = function(a) {
  if (a) {
    var b = this.eh.indexOf(a); - 1 < b && this.eh.splice(b, 1);
    b = w.$h;
    a = b.Pf.indexOf(a); - 1 < a && b.Pf.splice(a, 1)
  }
};
lv.prototype.Tt = function(a) {
  this.eh.push(a);
  w.$h.Tt(a)
};
var ni = [{
  pa: 0,
  Ka: "Guardian Fighter",
  Ws: !1,
  d: "HumanFighter33.PNG",
  za: "Zog",
  yb: "",
  fe: !1,
  tb: [{
    r: "230",
    s: 1
  }, {
    r: "231",
    s: 2
  }, {
    r: "232",
    s: 3
  }, {
    r: "233",
    s: 4
  }, {
    r: "234",
    s: 5
  }, {
    r: "235",
    s: 6
  }],
  Ma: Nu,
  kc: null,
  nb: function() {
    return [new fu(Yh, 90, 2, !1), new Yt(1)]
  },
  Jm: [],
  Nr: []
}, {
  pa: 3,
  Ka: "Guardian Mage",
  Ws: !1,
  d: "HumanMage11.PNG",
  za: "Zar",
  yb: "",
  fe: !1,
  tb: [{
    r: "26",
    s: 1
  }, {
    r: "85",
    s: 2
  }, {
    r: "121",
    s: 4
  }, {
    r: "160",
    s: 5
  }, {
    r: "140",
    s: 3
  }, {
    r: "182",
    s: 6
  }],
  Ma: Mu,
  kc: null,
  nb: function() {
    return [new eu(du, G, 95), new mu(G, 90), new qu(G, 85, 4), new Yt(1)]
  },
  Jm: [kq.br, mq],
  Nr: [{
    g: 1,
    f: 21
  }]
}, {
  pa: 2,
  Ka: "Elven Archer",
  Ws: !1,
  d: "HB_Elvenarcher1.PNG",
  za: "Seth",
  yb: "",
  fe: !1,
  tb: [{
    r: "60",
    s: 1
  }, {
    r: "23",
    s: 3
  }, {
    r: "83",
    s: 2
  }, {
    r: "143",
    s: 5
  }, {
    r: "3",
    s: 4
  }],
  Ma: Nu,
  kc: null,
  YE: null,
  nb: function() {
    return [new eu(du, G, 95), new fu(G, 90, Kq, !1), new Yt(1)]
  },
  Jm: [],
  Nr: [{
    g: 1,
    f: 23
  }, {
    g: 40,
    f: 24
  }]
}, {
  pa: 8,
  Ka: "Ninja Warrior",
  Ws: !1,
  d: "Ninja.PNG",
  za: "N",
  yb: "",
  fe: !1,
  tb: [{
    r: "29",
    s: 3
  }, {
    r: "62",
    s: 1
  }, {
    r: "89",
    s: 4
  }, {
    r: "186",
    s: 2
  }, {
    r: "5",
    s: 5
  }, {
    r: "33",
    s: 6
  }],
  Ma: {
    Xf: 1.1,
    Qf: 0.8,
    Rf: 1.1,
    Zf: 1.1,
    Cf: 0.8,
    Ef: 1.1
  },
  kc: null,
  nb: function() {
    return [new pu(G, 95), new eu(du, G, 90), new fu(G, 85, Kq, !1), new Yt(1)]
  },
  Jm: [tq.Hx],
  Nr: [{
    g: 15,
    f: 17
  }, {
    g: 2,
    f: 18
  }, {
    g: 25,
    f: 19
  }, {
    g: 2,
    f: 10
  }, {
    g: 1,
    f: 28
  }]
}];
var ei = [{
    d: "CubeGelatinous.PNG",
    Ia: "Gelatinous Cube"
  }, {
    d: "FrogGiantGreen.PNG",
    Ia: "Green Frog"
  }, {
    d: "OgreBlack.PNG",
    Ia: "Black Ogre"
  }, {
    d: "OrcRedKing.PNG",
    Ia: "Orc King"
  }, {
    d: "XornBlades.PNG",
    Ia: "Xorn"
  }, {
    d: "GolemBrownStick.PNG",
    Ia: "Brown Golem"
  }, {
    d: "GolemDragonRed.PNG",
    Ia: "Red Dragon Golem"
  }, {
    d: "GolemElectric.PNG",
    Ia: "Golem"
  }, {
    d: "GiantTwoHeaded.PNG",
    Ia: ""
  }, {
    d: "GiantCloud.PNG",
    Ia: ""
  }, {
    d: "GiantFire.PNG",
    Ia: ""
  }, {
    d: "GiantFrost.PNG",
    Ia: ""
  }, {
    d: "DrakeGiantWhite.PNG",
    Ia: ""
  }, {
    d: "DrakeGiantRed2.PNG",
    Ia: ""
  }, {
    d: "DrakeGiantGrey.PNG",
    Ia: ""
  }, {
    d: "DrakeGiantBronze.PNG",
    Ia: ""
  }, {
    d: "DragonGiantBoneRed.PNG",
    Ia: ""
  }, {
    d: "DragonGiantBoneGrey.PNG",
    Ia: ""
  }, {
    d: "DragonAncientLordBlack.PNG",
    Ia: ""
  }, {
    d: "DragonAncientLordGreen.PNG",
    Ia: ""
  }, {
    d: "DragonAncientLordRed.PNG",
    Ia: ""
  }, {
    d: "Pheonix.PNG",
    Ia: ""
  }, {
    d: "Race14Grey.PNG",
    Ia: ""
  }, {
    d: "SkeletonKing.PNG",
    Ia: ""
  }, {
    d: "SpiritFire.PNG",
    Ia: ""
  }, {
    d: "SpriteFire.PNG",
    Ia: ""
  }, {
    d: "TrollWater.PNG",
    Ia: ""
  }, {
    d: "TrollKing.PNG",
    Ia: ""
  }, {
    d: "TrollZombie.PNG",
    Ia: ""
  }, {
    d: "Unique7.PNG",
    Ia: ""
  }, {
    d: "WarElephantBrown.PNG",
    Ia: ""
  }, {
    d: "WarElephantGrey.PNG",
    Ia: ""
  }, {
    d: "Xorn4Armed.PNG",
    Ia: ""
  }, {
    d: "AngelRed.PNG",
    Ia: ""
  }, {
    d: "ElementalStone.PNG",
    Ia: ""
  }, {
    d: "GolemBrownCaped.PNG",
    Ia: ""
  }, {
    d: "GryphonRed.PNG",
    Ia: ""
  }, {
    d: "Hydra10HeadRed.PNG",
    Ia: ""
  }],
  gi = {
    pa: 0,
    Ka: "Boss",
    Ws: !1,
    za: "Boss",
    yb: "",
    fe: !1,
    tb: [{
      r: "230",
      s: 1
    }, {
      r: "231",
      s: 2
    }, {
      r: "232",
      s: 3
    }, {
      r: "233",
      s: 4
    }, {
      r: "234",
      s: 5
    }, {
      r: "235",
      s: 6
    }],
    Ma: {
      Xf: 1.7,
      Qf: 1.1,
      Rf: 1.6,
      Zf: 1,
      Cf: 10,
      Ef: 1.5
    },
    kc: null,
    nb: function() {
      return [new fu(Yh, 90, 2, !1), new Yt(1)]
    },
    eu: [],
    WC: [{
      g: 30,
      f: 17
    }, {
      g: 2,
      f: 18
    }, {
      g: 40,
      f: 19
    }, {
      g: 3,
      f: 10
    }]
  };

function nv() {
  this.Ye = "Acceptable;Adequate;Agreeable;Appropriate;All Right;Average;Bearable;Bronze;Basic;Conventional;Common;Copper;Commonplace;Customary;Decent;Diminished;Everyday;Fine;Fair;Good;General;Garden Variety;Intermediate;Imperfect;Iron;Okay;Ordinary;Moderate;Modest;Normal;Nice;Ordinary;Passable;Proper;Pleasant;Plain;Quaint;Respectable;Run of the Mill;Regular;Relevant;Reputable;Requisite;Reasonable;Routine;Satisfactory;Stock;Simple;Standard;Suitable;Seemly;Sufficient;Standard-Issue;Serviceable;Tolerable;Toned;Typical;Unexceptional;Unremarkable;Useful;Usual;Up-To-Snuff;Vanilla;Worthy".split(";");
  this.ih = "Acceptability Adequacy Decency Familiarity Imperfection Normality Value Regularity Routine Suitability Simplicity Serviceability Usefulness".split(" ");
  this.hf = ["Average", "Masses", "Ordinary", "People"]
}
nv.prototype.Uo = function() {
  var a = Math.random();
  return 0.3 > a ? ov : 0.6 > a ? 0.5 > Math.random() ? pv : qv : 0.5 > Math.random() ? rv : sv
};
nv.prototype.Tk = function() {
  return this.Ye[k(this.Ye.length)]
};
nv.prototype.Fm = function() {
  return this.ih[k(this.ih.length)]
};
nv.prototype.Gm = function() {
  return this.hf[k(this.hf.length)]
};

function tv() {
  this.Ye = "Anointed Almighty Angelic Celestial Consecrated Deific Ethereal Exalted Forbidden Heavenly Heroic Incomparable Impossible Immaculate Immortal Kingly Laudable Murderous Miraculous Peerless Righteous Sacred Sanctified Translucent Transcendent Unsurpassed Unearthly Unmerciful Ungodly Virtuous Wondrous".split(" ");
  this.ih = "Awe Armageddon Annihilation Catastrophe Devastation Decimation Faith Freedom Fortune Fantasy Havoc Heaven Immortality Salvation Stardust Vengeance Valor".split(" ");
  this.hf = "Ages;Ancients;Apocalypse;Audacious;Almighty;Blessed Ones;Chosen One;Cataclysm;Forgotten Ones;Forbidden Ones;Gods;Goddess;Holocaust;Mists;Moon;Moonlight;Pale Moon;Pure;Righteous;Sky;Sun;Stars;Sacred Ones;Shadows;Starlight;Undaunted;Undeterred;Unflinching;Virtuous;Wind".split(";")
}
tv.prototype.Uo = function() {
  var a = Math.random();
  return 0.25 > a ? ov : 0.5 > a ? 0.5 > Math.random() ? pv : qv : 0.5 > Math.random() ? rv : sv
};
tv.prototype.Tk = function() {
  return this.Ye[k(this.Ye.length)]
};
tv.prototype.Fm = function() {
  return this.ih[k(this.ih.length)]
};
tv.prototype.Gm = function() {
  return this.hf[k(this.hf.length)]
};

function uv() {
  this.Ye = "Awesome;Amazing;Astonishing;Beautiful;Blessed;Classic;Elegant;Exquisite;Extravagant;Extraordinary;Excellent;Faultless;Fierce;Fearsome;Golden;Glorious;High Grade;Highborn;High Class;Lovely;Luxury;Mystical;Noble;Ornate;Precious;Perfect;Premier;Premium;Preeminent;Quintessential;Rare;Singular;Seminal;Striking;Sensational;Supreme;Superlative;Wonderful".split(";");
  this.ih = "Amazement;Dread;Explosions;Ease;Extra Clicks;Extravagance;Fire;Frost;Flames;Ferocity;Fascination;Fred's Bane;Glory;Glamour;Glitz;Greatness;Happiness;Ice;Joy;Punishment;Purity;Pleasure;Perfection;Terror;Torture;Wonder;Wonderment".split(";");
  this.hf = "Deep Dawn Earth Feared Fearless Forgotten Hardy Intrepid Infirm Valiant".split(" ")
}
uv.prototype.Uo = function() {
  var a = Math.random();
  return 0.25 > a ? ov : 0.5 > a ? 0.5 > Math.random() ? pv : qv : 0.5 > Math.random() ? rv : sv
};
uv.prototype.Tk = function() {
  return this.Ye[k(this.Ye.length)]
};
uv.prototype.Fm = function() {
  return this.ih[k(this.ih.length)]
};
uv.prototype.Gm = function() {
  return this.hf[k(this.hf.length)]
};

function vv() {
  this.Ye = "Admirable;Balanced;Chrome;Choice;Commendable;Desirable;Distinctive;Fine;Fancy;Firm;First Class;First Rate;Ferocious;Formidable;Good;Gallant;Hard;Heavy;Handsome;Honest;Keen;Name Brand;Marvelous;Polished;Prime;Praiseworthy;Quality;Refined;Remarkable;Royal;Shiny;Steel;Severe;Select;Special;Stout;Swank;Stalwart;Superior;Sharp;Tasteful;Top Notch;Uncommon;Wholesome".split(";");
  this.ih = "Adventure Bravery Courage Confidence Determination Demolition Fear Fright Frost Friendship Foreboding Heaviness Intensity Impartiality Keenness Revenge Persistence Perseverance Peace Predictability Piercing Pain Mirth Mettle Malevolence Stardom Spirit Victory Violence Wounding".split(" ");
  this.hf = "Adventurous Bold Blistered Courageous Daring Doomed Dashing Dauntless Darkness Intoxicated Just Rain Tortured Terrorized Vain Vanquished Willing".split(" ")
}
vv.prototype.Uo = function() {
  var a = Math.random();
  return 0.3 > a ? ov : 0.5 > a ? 0.5 > Math.random() ? pv : qv : 0.5 > Math.random() ? rv : sv
};
vv.prototype.Tk = function() {
  return this.Ye[k(this.Ye.length)]
};
vv.prototype.Fm = function() {
  return this.ih[k(this.ih.length)]
};
vv.prototype.Gm = function() {
  return this.hf[k(this.hf.length)]
};

function wv() {
  this.Ye = "Astounding;Atypical;Brilliant;Custom;Cunning;Clever;Courageous;Daring;Distinctive;Exclusive;Genius;Heroic;Hand Crafted;Incomparable;Lone;Murderous;Miraculous;One of a Kind;Peerless;Righteous;Smart;Special;Singular;Ungodly;Valiant;Vain".split(";");
  this.MA = "Absolute Astonishing Courageous Dominating Extraordinary Innate Incredible Intoxicating Impossible Massive Mysterious Perfect Preeminent Quintessential Super Total Unbelievable Unimaginable Unmatched Unrivaled Unending Unconventional Unprecedented Unequaled Unparalleled Unstoppable Unsurpassed".split(" ");
  this.NA = "Attitude Adventure Bravery Confidence Coolness Destruction Devastation Effectiveness Ferocity Glory Glamour Greatness Intensity Power Perfection Persistence Perseverance Quality Smoothness Style Spirit Victory Violence Wonder".split(" ");
  this.hf = ["Savant"]
}
wv.prototype.Uo = function() {
  return rv
};
wv.prototype.Tk = function() {
  return this.Ye[k(this.Ye.length)]
};
wv.prototype.Fm = function() {
  return this.MA[k(this.MA.length)] + " " + this.NA[k(this.NA.length)]
};
wv.prototype.Gm = function() {
  return this.hf[k(this.hf.length)]
};
var ov = 1,
  pv = 2,
  qv = 3,
  rv = 4,
  sv = 5;

function xv() {
  this.$y = new nv;
  this.LE = new vv;
  this.lE = new uv;
  this.BD = new tv;
  this.UE = new wv
}

function yv(a, b) {
  switch (b.Uo()) {
    case 0:
      return a;
    case ov:
      return b.Tk() + " " + a;
    case pv:
      return a + " of " + b.Fm();
    case qv:
      return a + " of the " + b.Gm();
    case rv:
      return b.Tk() + " " + a + " of " + b.Fm();
    case sv:
      return b.Tk() + " " + a + " of the " + b.Gm();
    default:
      return a
  }
};

function zv(a, b, c, d) {
  this.item = a;
  this.mp = b;
  this.np = c;
  this.PD = d;
  this.gc = !1;
  this.Zc = null;
  this.ph = 0
}
e = zv.prototype;
e.getItem = function() {
  return this.item
};
e.oh = function(a) {
  this.gc = a
};
e.Re = function(a) {
  this.Zc = a
};
e.Ud = function() {
  return this.ph
};
e.Se = function(a) {
  this.ph = a
};
var Av = 1,
  Bv = 2,
  Cv = 3,
  Dv = 4,
  Ev = 5;

function Fv(a, b, c, d) {
  this.Dw = a;
  this.LD = b;
  this.MD = c;
  this.ms = d
};

function Gv() {
  this.xm = [];
  this.xm[Av] = {
    description: "Fire Damage",
    ca: "Red Damage"
  };
  this.xm[Bv] = {
    description: "Ice Damage",
    ca: "White Damage"
  };
  this.xm[Cv] = {
    description: "Poison Damage",
    ca: "Green Damage"
  };
  this.xm[Dv] = {
    description: "Shock Damage",
    ca: "Electric Damage"
  };
  this.xm[Ev] = {
    description: "Sonic Damage",
    ca: "Sonic Damage"
  }
};

function Hv(a, b, c, d, f, g, h, l, n) {
  this.RD = a;
  this.fa = b;
  this.Z = c;
  this.Xn = n;
  (this.lA = w.Kj.v(d)) || console.log("error. invalid item sprite: " + d);
  this.na = f;
  this.ma = g;
  this.la = h;
  this.SC = l
}
Hv.prototype.Uk = function() {
  return this.lA
};
Hv.prototype.sw = function() {
  return this.Xn
};
Hv.prototype.Cw = function() {
  return this.SC
};

function Iv(a, b, c, d, f, g, h, l, n, p) {
  this.op = a;
  this.r = b;
  this.pa = c;
  this.Ew = d;
  this.kA = g;
  this.ns = f;
  this.zf = h;
  this.va = l;
  this.s = n;
  this.Rm = p;
  this.nj = null
}
Iv.prototype.Uk = function() {
  return this.op.Uk()
};
Iv.prototype.sw = function() {
  return this.op.sw()
};
Iv.prototype.uf = function() {
  return this.kA
};
Iv.prototype.Cw = function() {
  return this.op.Cw()
};

function ss(a, b) {
  return !b || a.va > b.va
}

function Jv(a) {
  switch (a.s) {
    case 2:
      return "Armor";
    case 3:
      return "Attack Rating";
    case 4:
      return "Defense Rating";
    case 5:
      return "Max Health";
    case 6:
      return "Max Spirit";
    case 1:
      if (a.Rm) switch (a.Rm.Dw) {
        case Av:
          return "Fire Damage";
        case Bv:
          return "Ice Damage";
        case Cv:
          return "Poison Damage";
        case Dv:
          return "Shock Damage";
        case Ev:
          return "Sonic Damage";
        default:
          return "Damage"
      } else return "Damage";
    default:
      return "Error"
  }
}

function Kv(a) {
  switch (a.kA) {
    case 0:
      return "Common";
    case 1:
      return "Uncommon";
    case 2:
      return "Rare";
    case 3:
      return "Historic";
    case 4:
      return "Ancient";
    default:
      return "BUG FOUND: " + a.uf()
  }
}

function Lv(a) {
  var b = a.op.fa;
  a = a.Ew;
  var c = a.indexOf(b);
  return -1 === c ? a : a.substring(0, c) + '<span style="color:#FAF;">' + b + "</span>" + a.substring(c + b.length)
};

function Mv() {
  this.OD = new xv;
  this.ND = new Gv;
  this.ps = {};
  this.os = {}
}

function Nv(a, b, c, d, f) {
  var g;
  (g = a.ps[b]) || console.log("ItemGenerator.getRandomItemType() failed to find item types for slot: " + b);
  0 === g.length ? (console.log("ItemGenerator.getRandomItemType() no item types for slot: " + b), g = null) : g = g[k(g.length)];
  if (!g) return null;
  var h;
  a: {
    var l, n;
    for (l = 0; l < Ov.length; l++)
      if (n = Ov[l], n.Vp === f) {
        h = n;
        break a
      } h = Ov[0]
  }
  var p = null;
  l = c.KD[b];
  var s = Pv(c, l) * h.pp;
  n = Oa(d, Qv, s);
  s = Oa(d, Rv, s) * higherItemValuesPotion.t;
  if (1 === l && Math.random() < h.jp) {
    p = a.ND;
    h = Math.random();
    h = 0.2 > h ? Av : 0.4 > h ? Bv : 0.6 > h ? Dv : 0.7 >
      h ? Ev : Cv;
    var u = m(Math.max(0.1 * n, 0.4 * n * Math.random()));
    1 > u && (u = 1);
    p = p.xm[h];
    p = new Fv(h, u, "+" + r(u) + " " + p.description, p.ca)
  }
  a = a.OD;
  switch (f) {
    case 0:
      a = a.$y;
      break;
    case 1:
      a = a.LE;
      break;
    case 2:
      a = a.lE;
      break;
    case 3:
      a = a.BD;
      break;
    case 4:
      a = a.UE;
      break;
    default:
      a = a.$y
  }
  a = yv(g.fa, a);
  b = new Iv(g, b, c.pa, a, d, f, s, n, l, p);
  b.nj = c;
  return b
}

function Pv(a, b) {
  var c = a.Kc.Ma;
  if (!c) return 1;
  switch (b) {
    case 2:
      return c.Qf;
    case 1:
      return c.Xf;
    case 3:
      return c.Rf;
    case 4:
      return c.Zf;
    case 5:
      return c.Cf;
    case 6:
      return c.Ef
  }
}

function Sv(a, b) {
  if (Math.random() < Tv) return Math.max(1, a - 1);
  var c = Math.min(1, Uv + b);
  return Math.random() < c ? a + 1 : a
}

function L(a, b, c) {
  var d = b.fa + c;
  var f = 0,
    g, h;
  if (0 !== d.length)
    for (g = 0; g < d.length; g++) h = d.charCodeAt(g), f = (f << 5) - f + h, f |= 0;
  g = f + "";
  f = b.Z;
  b = new Hv(g, b.fa, f, c, b.na, b.ma, b.la, b.oa, b.Xn);
  a.os[g] && console.log("item type hash collision: " + d);
  a.os[g] = b;
  for (g = 0; g < f.length; g++) d = f[g], c = a.ps[d], c || (c = [], a.ps[d] = c), c.push(b)
}
Mv.prototype.uf = function(a) {
  var b = 0,
    c = Math.random() * a;
  for (a = Vv.length - 1; 0 <= a; a--) {
    b = Vv[a];
    if (c < b) return a;
    c -= b
  }
  return 0
};

function Wv() {
  this.yf = []
}

function $d() {
  var a = w.dh;
  0 < a.yf.length && (a.yf.length = 0)
}
Wv.prototype.zl = function() {
  var a;
  for (a = 0; a < this.yf.length; a++) this.yf[a].Re(null), this.yf[a].Se(0)
};

function Xv(a, b, c, d, f) {
  var g;
  g = w.Sm;
  var h = w.i.D[k(w.i.D.length)],
    l = h.Z,
    l = l[k(l.length)],
    n = g.uf((100 - E.Yl.t) / 100);
  f = Sv(f, (100 - E.lp.t) / 100);
  (g = Nv(g, l, h, f, n)) && a.yf.push(new zv(g, b, c, d))
}

function Yv(a) {
  var b = w.dh;
  a = b.yf.indexOf(a); - 1 < a && b.yf.splice(a, 1)
};

function Zv() {
  this.items = [];
  this.vp = $v + Math.min(aw, w.i.wh);
  this.Bw = null;
  this.ip = !1
}

function bw(a, b) {
  if (a.items.length < a.vp) b.nj = a.Bw, a.items.push(b), a.ip = !0, cw(w.Di, a.items);
  else {
    var c, d = -1,
      f = 0,
      g;
    for (c = 0; c < a.items.length; c++) g = a.items[c], 0 > d ? (d = 0, f = g.zf) : f > g.zf && (d = c, f = g.zf);
    c = d; - 1 < c && ss(b, a.items[c]) && (dw(a, c), b.nj = a.Bw, a.items.push(b), a.ip = !0, cw(w.Di, a.items))
  }
}
Zv.prototype.removeItem = function(a) {
  dw(this, this.items.indexOf(a))
};

function dw(a, b) {
  -1 !== b && (a.items[b].nj = null, a.items.splice(b, 1), a.ip = !0)
};

function ew() {
  this.Fj = [];
  this.IE = function(a, b) {
    return b.zf - a.zf
  }
}

function cw(a, b) {
  !b || 2 > b.length || b.sort(a.IE)
}
ew.prototype.Br = function(a) {
  var b = a.Ld.items;
  if (b && 0 !== b.length) {
    var c, d, f = [];
    for (c = 0; c < b.length; c++) f.push(b[c]);
    for (c = 0; c < f.length; c++) b = f[c], (d = a.ef(b.r)) && !ss(b, d) || a.Qk(b)
  }
};
ew.prototype.Wt = function(a) {
  var b = a.Ld.items;
  if (!b || 0 === b.length) return !1;
  var c, d, f;
  for (c = 0; c < b.length; c++)
    if (d = b[c], f = a.ef(d.r), !f || ss(d, f)) return !0;
  return !1
};

function fw() {
  this.Jc = 0;
  this.yd = this.Vn = this.Rd = !1;
  this.xb = this.Xb = this.Ca = this.Da = this.Ib = null;
  this.ut = this.Xs = !1;
  this.Df = this.Ys = 0;
  this.pl = null
}
fw.prototype.Cb = function(a) {
  this.Da = a
};
fw.prototype.Ir = function() {
  return this.Ys
};

function gw(a, b, c, d) {
  a = qi(a);
  if (0 === a.length) return null;
  var f = b.p.w;
  if (!f) return null;
  var g, h = b.p.u,
    l, n = [];
  for (b = 0; b < a.length && (g = a[b], g.Va || g.p.w !== f || (l = h.ac(g.p.u), !(l <= d && (n.push(g), n.length >= c)))); b++);
  return n
};

function hw() {
  this.kj = []
}

function iw() {
  var a = w.Xe;
  0 < a.kj.length && (a.kj.length = 0)
}

function jw(a, b) {
  var c = b.xb;
  if (c && !c.Cj) {
    if (b.Rd) return b.Vn = !0;
    pc(w.df, c);
    var d = b.Ib;
    d && d.td && kw(a, b);
    0 < b.Jc && rh(b.Da, b.Jc);
    b.Xs ? (d = lw(b)) && mw(a, d) : b.ut && (d = nw(b)) && mw(a, d)
  }
  if ((d = b.xb) && d.bx !== d.oc) {
    var f = d.To();
    if (b.Ib) {
      var g = b.Da,
        h = b.Ib,
        l = h.ga;
      if (g)
        if (d = g.K, 4 === l || 5 === l || 8 === l || 13 === l || 12 === l) ow(b);
        else if (1 === l && (h = h.Ra, l = $h(d.Jb), d.Sa < l)) {
        var n = b.Ca.K.Ts;
        1 < n && (h = Math.min(100, h * n));
        f = Math.max(1, m(h / 100 * l / f));
        h = w.pc;
        0 < f && sh(h, g, "+" + f, "#00FF00");
        d.Sa += m(f);
        g = $h(d.Jb);
        d.Sa > g && (d.Sa = g)
      }
    } else 0 < b.Jc &&
      ow(b)
  }
  return c && c.bl() ? ((c = b.Ib) && (c.td || kw(a, b)), b.Vn = !0) : !1
}

function kw(a, b) {
  var c = b.Ib,
    d = c.ga;
  if (2 === d || 3 === d) {
    var f = b.Ca,
      d = c.X,
      c = c.Ra,
      g = Li[d];
    if (g) {
      var f = f.K,
        h = 1;
      switch (d) {
        case 5:
          h = f.Ps;
          break;
        case 6:
          h = f.Rs;
          break;
        case 7:
          h = f.Qs;
          break;
        case 8:
          h = f.Ss
      }
      d = new pw(d, w.i.$a, g.Qd, w.Dj.Zg(g.vd), g.Od, g.Pd, 1 > h ? c : c * h)
    } else console.log("Failed to find char effect description: " + d), d = null;
    c = b.Da.Ja;
    d && (c.of.push(d), qw(d) && (c.Kd = !0))
  } else if (10 === d || 9 === d) rw(c, b.Ca, b.xb.xi);
  else if (11 === d) d = b.Ca, g = b.xb.xi, h = b.Da, f = w.Gf, h && (h = f.Og.indexOf(h), -1 < h && f.Og.splice(h, 1)), rw(c, d,
    g);
  else if (17 === d) c = b.Ca, d = b.xb.xi, h = c.K, g = h.ku, f = h.lu, h = h.mu, 0 < g && Math.random() < g / 100 ? (g = fv, sh(w.pc, c, "Barbarian Chicken!", "blue")) : 0 < f && Math.random() < f / 100 ? (g = gv, sh(w.pc, c, "Ninja Chicken!", "blue")) : 0 < h && Math.random() < h / 100 ? (g = hv, sh(w.pc, c, "Rogue Chicken!", "blue")) : g = ev, sw(g, c, d);
  else if (14 === d) {
    d = b.Ca.p.u;
    g = w.ff.pe;
    for (c = g.length - 1; 0 <= c; c--) f = g[c], f.gc || (h = new Za, t(h, f.Xo, f.Yo), h = new Zb("Gold Sparkles", d, h, !1, 1), pc(w.df, h), at(f.Xl), w.i.aa.dp(f.Xl), f.oh(!0), Fi(f), Kd(9));
    d = b.Ca.p.u;
    g = w.dh.yf;
    for (c =
      g.length - 1; 0 <= c; c--)
      if (h = g[c], !h.gc) {
        f = new Za;
        t(f, h.mp, h.np);
        f = new Zb("Blue Sparkles", d, f, !1, 1);
        pc(w.df, f);
        f = h.getItem();
        h.oh(!0);
        Yv(h);
        a: {
          h = void 0;
          for (h = 0; h < w.i.D.length; h++)
            if (w.i.D[h].pa === f.pa) {
              h = w.i.D[h];
              break a
            } console.log("failed to find item character");h = null
        }
        w.i.aa.ep(f);
        bw(h.Ld, f);
        Kd(12);
        f = f.uf();
        if (0 != f) switch (f) {
          case 1:
            Kd(13);
            break;
          case 2:
            Kd(14);
            break;
          case 3:
            Kd(15);
            break;
          case 4:
            Kd(16)
        }
      } d = b.Ca.p.u;
    g = w.Uh.kf;
    for (c = g.length - 1; 0 <= c; c--) f = g[c], f.gc || (h = new Za, t(h, f.bq, f.cq), h = new Zb("Pink Sparkles",
      d, h, !1, 1), pc(w.df, h), f.oh(!0), Oq(f), Cq(f.vf()), Kd(10));
    d = b.Ca.p.u;
    g = w.Ti.Hf;
    for (c = g.length - 1; 0 <= c; c--) f = g[c], f.gc || (h = new Za, t(h, f.Qp, f.Rp), h = new Zb("Green Sparkles", d, h, !1, 1), pc(w.df, h), f.oh(!0), or(f), rr(f.hc), Kd(11))
  } else 15 === d ? a.wu(b) : 16 === d && (c = b.Da) && (c = c.Ja, c.Kf = !1, zh(c))
}

function rw(a, b, c) {
  (a = kv[a.ta]) ? sw(a, b, c): console.log("Failed to find minion for summon spell.")
}
hw.prototype.wu = function(a) {
  if (a = Ji(w.th, a.Ca.p.w)) a.el = !0, w.i.da.hq(a)
};

function ow(a) {
  var b = a.Da,
    c = b.K,
    d = a.Jc;
  if (0 !== d) {
    var f = 1 + k(d - 1);
    0 !== f && (d = Math.max(0, d - f), a.Jc = d, c.Sa -= m(f), 0 > c.Sa && (c.Sa = 0), d = a.Ca, d = 1 === d.zb ? d.xg.K : d.K, d.rj += f, d = b.K, d.sj += f, 0 === c.Sa && tw(a.Ca, b))
  }
}

function tw(a, b) {
  if (b.zb === bt) {
    if (!b.Ja.Kf) {
      w.i.aa.Tr();
      b.Ja.Kf = !0;
      var c = b.p.u,
        d = new pw(13, w.i.$a, Ki.Qd, w.Dj.Zg(Ki.vd), Ki.Od, Ki.Pd, 0),
        c = new Zb(Ki.vd, c, c, !1, 1);
      b.K.vq++;
      var f = b.Ja;
      d && (f.of.push(d), qw(d) && (f.Kd = !0));
      c.uA = !0;
      c.ud = b;
      pc(w.df, c);
      sh(w.pc, b, "STUNNED!", "white")
    }
  } else if (1 === b.zb) w.Qo.Lp(b);
  else if (4 === b.zb) {
    if (!b.Va) {
      var g = b.p,
        d = 1 === a.zb ? a.xg : a;
      $t(d) && (d.K.im++, Is(doubleKillsPotion.t), w.i.aa.cp(), 5 === d.zb && w.i.aa.gp(), 1 === a.zb && w.i.aa.$k(), d = b.Sb, uw(d.No * doubleExperiencePotion.t), ui(d));
      var d = g.w,
        c = ug(d) + w.B,
        f = vg(d) - w.B,
        h =
        wg(d) + w.B,
        l = xg(d) - w.B,
        n = g.Ob(),
        p = g.Pb(),
        s = 10 + k(10),
        u;
      doubleGoldDropsPotion.t && (s *= 2);
      for (g = 0; g < s; g++) u = 1 + Dg(), u = new Eg(u, vw(n, c, f), vw(p, h, l), d), w.ff.pe.push(u);
      s = 7 + k(8);
      doubleItemDropsPotion.t && (s *= 2);
      for (g = 0; g < s; g++) Xv(w.dh, vw(n, c, f), vw(p, h, l), d, b.K.Eb);
      s = 2 + k(5);
      for (g = 0; g < s; g++) u = w.nh.Pl, u = u[k(u.length)], u = new Mq(u, vw(n, c, f), vw(p, h, l), d), w.Uh.kf.push(u);
      s = 0 + k(2);
      for (g = 0; g < s && w.Yj.re.length < sr + tr.t; g++) u = new Tq(potionInfo[k(potionInfo.length)]), u = new mr(u, vw(n, c, f), vw(p, h, l), d), w.Ti.Hf.push(u);
      b.Va = !0;
      d = ww();
      b.ee = d;
      w.Gf.ol(b);
      w.i.Xg.ol();
      Ta("Boss Defeated",
        "Level: " + b.K.Eb);
      sh(w.pc, b, "Boss Killed!", "white")
    }
  } else w.Qo.ol(a, b)
}

function mw(a, b) {
  a.kj.push(b)
};

function xw(a, b) {
  var c = a.K,
    d = c.Wn / 100,
    f = 0,
    g;
  for (g = 0; g < c.Oj; g++)
    if (Math.random() < d) f++;
    else break;
  if ((c = gw(a, a, 1 + f, b ? a === w.i.ce ? 100 * G : G : Yh)) && 0 !== c.length)
    for (d = 0; d < c.length; d++) yw(a, c[d], b)
}

function yw(a, b, c) {
  var d = new fw;
  d.Ca = a;
  d.Cb(b);
  if (12 == a.pa) c = b.p.u, a = zw(a, b), d.Jc = a, d.Rd = 0 === a, d.yd = !1, a = new Zb("Red Splat", c, c, !1, 1);
  else if (c) {
    c = b.p.u;
    var f = a.p.u,
      g = zw(a, b);
    b = a.Yg ? a.Yg.Ey : null;
    var h = a.So(),
      h = h ? h.Rm : null;
    d.Jc = g;
    d.Rd = 0 === g;
    d.yd = !0;
    g = "Red Splat";
    if (h) {
      var l = h.ms;
      l && (g = l);
      f = new Zb(Aw(b, h.Dw), f, c, !0, 1)
    } else f = new Zb(Aw(b, null), f, c, !0, 1);
    f.ud = a;
    d.Xb = f;
    a = a.K.Ir();
    0 < a && (d.Xs = !0, d.Df = a);
    a = new Zb(g, c, c, !1, 1)
  } else c = b.p.u, f = zw(a, b), b = (a = a.So()) ? a.Rm : null, a = null, d.Jc = f, d.Rd = 0 === f, d.yd = !1, b &&
    (f = b.ms) && (a = new Zb(f, c, c, !1, 1)), a || (a = new Zb("Red Splat", c, c, !1, 1));
  d.xb = a;
  mw(w.Xe, d)
}

function Bw(a) {
  var b = a.Da;
  if (!b || b.Va) return null;
  var c = a.ld;
  if (!c) return null;
  var d = new fw;
  d.Ca = a;
  d.Cb(b);
  var f = b.p.u,
    g = a.p.u;
  d.Ib = c;
  d.yd = !0;
  var h = c.ya;
  h && (h = new Zb(h, g, f, !0, 1), h.ud = a, d.Xb = h);
  if (h = c.ca) f = new Zb(h, g, f, !1, 1), d.xb = f;
  c = c.ga;
  4 === c ? (b = zw(a, b), d.Rd = 0 === b, d.Jc = b) : 13 === c && (b = Math.max(1, zw(a, b)), d.Rd = !1, d.Jc = b);
  a = a.K;
  b = bu(a);
  Cw(a, b);
  mw(w.Xe, d);
  return d
}

function Dw(a, b) {
  var c = new Za,
    d = a.T,
    f = a.U,
    g = k(40),
    h = k(40),
    d = 0.5 >= Math.random() ? d + g : d - g,
    f = 0.5 >= Math.random() ? f + h : f - h;
  t(c, d, f);
  b && Fg(b, c, w.Nh);
  return c
}

function Ew(a, b, c, d, f, g, h) {
  a >= c && a <= d && b >= f && b <= g && (a = w.Ba.hb(a, b)) && sg(a, h)
}

function Aw(a, b) {
  if (3 === a.sw()) return "Ninja Star";
  if (b) switch (b) {
    case Av:
      return "Fire Arrow";
    case Bv:
      return "Ice Arrow";
    case Cv:
      return "Small Green Projectiles";
    case Dv:
      return "Lightning Arrow";
    case Ev:
      return "Green Arrow";
    default:
      return "Red Arrow"
  } else return "Red Arrow"
}

function zw(a, b) {
  var c = a.K,
    d = b.K,
    f = $h(c.xe),
    g = $h(c.sd),
    h = $h(d.Ae),
    l = $h(d.je),
    d = d.wo,
    c = c.lm;
  if (!b.Ja.Kd && Math.random() > f / (f + h)) return 0;
  if (0 < c && Math.random() < c / 100) return sh(w.pc, a, "CRITICAL HIT!", "#FFFF00"), g;
  f = m(l / 2);
  g -= f + k(f);
  return 0 >= g ? 0 : 0 < d ? Math.max(0, g - m(d / 100 * g)) : g
}

function Fw(a, b) {
  var c = a.K,
    d = $h(c.sd),
    f = $h(b.K.je),
    c = c.lm;
  if (0 < c && Math.random() < c / 100) return sh(w.pc, a, "CRITICAL HIT!", "#FFFF00"), d;
  f = m(f / 2);
  d -= f + k(f);
  return 0 >= d ? 0 : d
}

function lw(a) {
  var b = a.Ir(),
    c = a.Df;
  if (b >= c) return null;
  var d = Kt(a.Da);
  if (!d) return null;
  var f = a.Xb;
  if (!f) return null;
  var g = a.xb;
  if (!g) return null;
  var h = new fw,
    l = g.xi,
    n = d.p.u;
  h.Ca = a.Ca;
  h.Cb(d);
  g = new Zb(g.ca, l, n, !1, 1);
  h.xb = g;
  f = new Zb(f.ca, l, n, !0, 1);
  h.Xb = f;
  h.yd = !0;
  d = zw(a.Ca, d);
  h.Jc = d;
  h.Rd = 0 === d;
  h.Ib = a.Ib;
  h.Ys = b + 1;
  h.Xs = !0;
  h.Df = c;
  return h
}

function nw(a) {
  var b = a.Ir(),
    c = a.Df,
    d;
  if (b === c) {
    var f = new fw;
    f.Ca = a.Ca;
    f.Cb(a.Ca);
    f.yd = !0;
    f.Ib = a.Ib;
    f.ut = !0;
    f.Ys = 1;
    f.Df = 0;
    c = a.Xb;
    d = a.Ca.p.u;
    var g = a.pl,
      b = a.xb;
    f.Rd = !1;
    c && (c = new Zb(c.ca, d, g, !0, 1), c.Gs = !0, c.ud = a.Ca, f.Xb = c);
    a = new Zb(b.ca, d, g, !1, 1);
    f.xb = a;
    return f
  }
  if (b > c) return null;
  d = a.xb;
  if (!d) return null;
  g = Kt(a.Da);
  if (!g) return null;
  f = new fw;
  f.Ca = a.Ca;
  f.yd = !0;
  f.Ib = a.Ib;
  f.Ys = b + 1;
  f.ut = !0;
  f.Df = c;
  f.pl = a.pl;
  var h = a.Xb,
    b = d.xi,
    c = g.p.u;
  f.Cb(g);
  g = Fw(a.Ca, g);
  f.Jc = g;
  f.Rd = 0 === g;
  h && (g = new Zb(h.ca, b, c, !0, 1), g.Gs = !0, g.ud = a.Ca, f.Xb = g);
  a = new Zb(d.ca, b, c, !1, 1);
  f.xb = a;
  return f
};

function Gw(a) {
  this.no = a;
  this.wc = this.Xh = this.Pc = this.va = 0
}

function Hw(a, b) {
  a.Xh += b
}

function $h(a) {
  var b = a.va + a.Pc;
  return b + m((a.wc + a.Xh) / 100 * b)
};

function Iw(a) {
  this.no = a;
  this.Eb = 0;
  this.Am = 100;
  this.lm = this.mt = this.Yc = this.Sa = 0;
  this.Pr = 1;
  this.ot = 4;
  this.Tq = 12;
  this.vq = this.sj = this.rj = this.Ff = this.im = 0;
  this.gl = Jw;
  this.Df = this.ao = this.pq = this.ap = this.xn = this.wo = 0;
  this.Wi = Kw;
  this.Oj = 0;
  this.Wn = Lw;
  this.mu = this.lu = this.ku = this.Ss = this.Qs = this.Ps = this.Rs = this.Ts = this.nt = this.vt = this.ho = this.Qq = this.Ft = this.mr = this.ar = 0;
  this.sd = new Gw(a);
  this.je = new Gw(a);
  this.xe = new Gw(a);
  this.Ae = new Gw(a);
  this.Jb = new Gw(a);
  this.Ke = new Gw(a)
}

function Mw(a, b) {
  return b ? Math.max(4, a.Tq - a.ao + Xs.t) : Math.max(4, a.Tq - a.ao)
}
Iw.prototype.wx = function(a) {
  this.Ff = a
};
Iw.prototype.$k = function() {
  this.Ff++
};

function Cw(a, b) {
  freeSpellCastingPotion.t || (a.Yc -= b, 0 > a.Yc && (a.Yc = 0))
}

function bu(a) {
  return Math.min(a.mt - (0 < a.xn ? m(a.xn / 100 * a.mt) : 0), $h(a.Ke))
}

function Gq() {
  var a = w.i.ce.K;
  a.Wi = 100;
  100 < a.Wi && (a.Wi = 100)
}
Iw.prototype.Ir = function() {
  var a = this.Wi / 100,
    b = 0,
    c;
  for (c = 0; c < this.Df; c++)
    if (Math.random() < a) b++;
    else break;
  return b
};

function Ni(a) {
  a.wo = 0;
  a.xn = 0;
  a.sd.wc = 0;
  a.je.wc = 0;
  a.xe.wc = 0;
  a.Ae.wc = 0;
  a.Jb.wc = 0;
  a.Ke.wc = 0;
  a.ap = 0;
  a.pq = 0;
  a.ao = 0;
  a.Ts = 0;
  a.Rs = 0;
  a.Ps = 0;
  a.Qs = 0;
  a.Ss = 0;
  a.Oj = 0;
  a.Wn = Lw;
  a.mr = 0;
  a.Ft = 0;
  a.ar = 0;
  a.lm = 0;
  a.ho = 0;
  a.Qq = 0;
  a.vt = 0;
  a.nt = 0;
  a.ku = 0;
  a.lu = 0;
  a.mu = 0;
  a.Df = 0;
  a.Wi = Kw;
  a.gl = Jw
};

function pw(a, b, c, d, f, g, h) {
  this.X = a;
  this.jD = b;
  this.Qd = c;
  this.hD = d;
  this.Od = f;
  this.bg = !1;
  this.Pd = g;
  this.Ok = h
}
pw.prototype.bl = function() {
  return this.bg
};

function qw(a) {
  return 0 === a.X || 1 === a.X || 13 === a.X || 14 === a.X
};

function Nw(a) {
  this.no = a;
  this.Kf = this.wg = this.bi = this.Vs = this.Gn = this.Kd = !1;
  this.of = []
}

function Ow(a, b) {
  var c, d = w.i.$a,
    f, g = !1,
    h, l = a.Kf;
  a.Kd = !1;
  a.Gn = !1;
  a.Vs = !1;
  a.bi = !1;
  a.wg = !1;
  a.Kf = !1;
  var n = a.no.K,
    p = n.sd,
    s = n.je,
    u = n.xe,
    y = n.Ae;
  s.Xh = 0;
  p.Xh = 0;
  u.Xh = 0;
  for (c = y.Xh = 0; c < a.of.length; c++) h = f = a.of[c], h.bg = d - h.jD >= h.Qd, h.bg ? g = !0 : (qw(f) && (a.Kd = !0), h = f.X, 5 === h ? Hw(s, f.Ok) : 6 === h && p ? Hw(p, f.Ok) : 7 === h ? Hw(u, f.Ok) : 8 === h ? Hw(y, f.Ok) : 10 === h ? (a.Gn = !0, Hw(y, f.Ok)) : 11 === h ? (a.wg = !0, Hw(u, f.Ok)) : 12 === h ? (a.Vs = !0, Hw(p, f.Ok)) : 4 === h ? a.bi = !0 : 13 === h ? a.Kf = !0 : 14 === h && (a.Kf = !0));
  if (g)
    for (c = a.of.length - 1; 0 <= c; c--) a.of[c].bl() &&
      a.of.splice(c, 1);
  b && l && !a.Kf && (n.Sa = m($h(n.Jb)), n.Yc = $h(n.Ke))
}

function zh(a) {
  if (0 < a.of.length) {
    var b, c;
    for (b = a.of.length - 1; 0 <= b; b--) c = a.of[b], 13 === c.X && a.of.splice(b, 1)
  }
}

function Pw(a, b) {
  switch (b) {
    case 1:
    case 13:
    case 14:
    case 0:
      return a.Kd;
    case 4:
      return a.bi;
    case 10:
      return a.Gn;
    case 12:
      return a.Vs
  }
  return !1
};

function Qw(a, b) {
  this.pa = b;
  this.hw = {};
  this.Z = a;
  this.Ey = this.fz = null;
  var c;
  for (c = 0; c < a.length; c++) this.hw[a[c]] = null
}
Qw.prototype.ef = function(a) {
  return this.hw[a]
};
Qw.prototype.So = function() {
  return this.fz
};
Qw.prototype.Qk = function(a) {
  this.hw[a.r] = a;
  a.Cw() && (this.Ey = a);
  1 === a.s && (this.fz = a)
};

function Rw(a, b) {
  this.ra = new Za;
  this.Gd = null;
  this.lj = new Za;
  this.Tl = new Za;
  this.Wc = new Za;
  this.Jw = b;
  this.MC = a;
  this.u = new Za;
  this.Db = new Za;
  this.w = this.cd = null;
  this.Ul = new Za;
  this.Sn = this.Rn = 0;
  this.Qb = new Za;
  this.Ug = null;
  this.dd = !1;
  this.ed = this.Cc = this.Bc = null;
  this.fg = -1;
  this.Hh = this.aB = this.qj = null
}

function Rd(a) {
  a.dd = !0;
  a.Bc = null;
  a.Cc = null;
  a.ed = null;
  a.Ug = null;
  a.fg = -1
}

function Sw(a, b, c, d) {
  a.Gd || (a.Gd = new Za);
  a.u === c ? (ab(a.Gd, a.u), tb(a.Gd, b), Mb(a.Gd), Nb(a.Gd, d)) : (ab(a.Gd, a.u), tb(a.Gd, c), b = Lb(a.Gd), 0 !== b && (Mb(a.Gd), Nb(a.Gd, d * (1 - b / d))))
}
e = Rw.prototype;
e.dc = function() {
  return this.Db.T
};
e.ec = function() {
  return this.Db.U
};
e.Ob = function() {
  return this.u.T
};
e.Pb = function() {
  return this.u.U
};

function Xt(a, b, c) {
  a.Rn = b;
  a.Sn = c;
  t(a.Ul, w.S.dc(b), w.S.ec(c))
}
e.et = function(a) {
  this.Bc = a
};
e.rB = function(a) {
  this.ed = a
};

function Tw(a, b) {
  var c = a.bc(),
    d = a.cc(),
    f, g, h = 1E9,
    l = null,
    n, p;
  for (n = -1; 1 >= n; n++)
    for (p = -1; 1 >= p; p++)(0 !== n || 0 !== p) && (f = w.S.hb(c + n, d + p)) && f !== b && (g = f.ln, !l || h > g) && (l = f, h = g);
  l || console.log("failed to find cheapest neighbor");
  return l
}

function Uw(a) {
  t(a.lj, 0, 0);
  var b, c, d = !1,
    f = xh(),
    g = w.Ni.eh,
    h;
  for (c = 0; c < w.i.D.length; c++) {
    b = w.i.D[c];
    b = b.p;
    if (b === a) break;
    h = a.u.ac(b.u);
    40 > h && (0 === h ? t(a.Wc, Math.random(), Math.random()) : ($a(a.Wc, a.u), tb(a.Wc, b.u)), Mb(a.Wc), ib(a.lj, a.Wc), d = !0)
  }
  for (c = 0; c < g.length; c++) b = g[c], b = b.p, b !== a && (h = a.u.ac(b.u), 50 > h && (0 === h ? t(a.Wc, Math.random(), Math.random()) : ($a(a.Wc, a.u), tb(a.Wc, b.u)), Mb(a.Wc), ib(a.lj, a.Wc), d = !0));
  for (c = 0; c < f.length; c++) b = f[c], b = b.p, b !== a && (h = a.u.ac(b.u), 50 > h && (0 === h ? t(a.Wc, Math.random(), Math.random()) :
    ($a(a.Wc, a.u), tb(a.Wc, b.u)), Mb(a.Wc), ib(a.lj, a.Wc), d = !0));
  d && (Mb(a.lj), Nb(a.lj, 0.5));
  return d
}

function Vw(a) {
  t(a.Tl, 0, 0);
  var b, c, d = !1,
    f = Qd(),
    g;
  for (c = 0; c < f.length; c++) b = f[c], b = b.p, b !== a && (g = a.Db.ac(b.Db), 40 > g && (0 === g ? t(a.Wc, Math.random(), Math.random()) : ($a(a.Wc, a.Db), tb(a.Wc, b.Db)), Mb(a.Wc), ib(a.Tl, a.Wc), d = !0));
  d && Mb(a.Tl);
  return d
};

function Uh(a, b, c, d, f) {
  this.Xt = a;
  this.zb = b;
  this.Kc = d;
  this.pa = c;
  if ((a = d.tb) && 0 !== a.length) {
    c = [];
    var g;
    for (g = 0; g < a.length; g++) c.push(a[g].r);
    a = c
  } else a = null;
  this.Z = a;
  if (d = d.tb) {
    a = {};
    for (c = 0; c < d.length; c++) a[d[c].r] = d[c].s;
    d = a
  } else d = null;
  this.KD = d;
  this.Yg = b != Vh ? new Qw(this.Z, this.pa) : null;
  this.Sb = this.ee = null;
  this.p = new Rw(Ww, Xw);
  this.Ja = new Nw(this);
  if (this.Ld = f) this.Ld.Bw = this;
  this.Y = Sd;
  this.Va = !1;
  this.ld = this.Ue = this.bj = this.hk = this.Zh = this.rh = this.Da = this.Fh = null;
  this.K = new Iw(this);
  this.au = -3 *
    Mw(this.K, !0);
  this.xg = null;
  this.QB = this.RB = 0;
  this.En = this.yg = null;
  this.gk = this.zb === bt ? [] : null;
  this.Ci = this.de = 0;
  this.Zi = !1;
  this.hi = this.gi = this.fi = this.ei = null;
  this.zb === bt && (b = this.Kc.Qg(), f = this.Kc.Rg(), d = this.Kc.Sg(), a = this.Kc.Tg(), Yw(this, b), Yw(this, f), Yw(this, d), Yw(this, a), this.ei = new is([b], !1), this.fi = new is([f], !1), this.gi = new is([d], !1), this.hi = new is([a], !1))
}

function Yw(a, b) {
  if (b) {
    var c, d;
    for (c = 0; c < b.length; c++) d = b[c], d.og(), d.sx(a), 0 < c && (d.Wp = b[c - 1])
  }
}

function ki(a, b) {
  a.gk || (a.gk = []);
  vq(b);
  a.gk.push(b);
  a.Fh && a.Fh.Oa(b)
}

function Zw(a) {
  if (a) {
    var b;
    for (b = 0; b < a.length; b++)
      if (!a[b].He()) return !0
  }
  return !1
}

function ws(a) {
  return Zw(a.ei.Ha) || Zw(a.fi.Ha) || Zw(a.gi.Ha) || Zw(a.hi.Ha)
}

function Hu(a) {
  return a.yg && 0 !== a.yg.length ? a.En ? Math.max(0, a.yg.length - 1) : a.yg.length : 0
}

function Vt(a) {
  a.au = w.i.$a
}

function Ut(a) {
  return w.i.$a - a.au >= Mw(a.K, $t(a))
}

function $t(a) {
  return a.zb === bt || 1 === a.zb || 5 === a.zb
}

function ri(a) {
  return a.zb === Vh || 3 === a.zb || 4 === a.zb
}
e = Uh.prototype;
e.ef = function(a) {
  return this.Yg ? this.Yg.ef(a) : null
};
e.So = function() {
  return this.Yg ? this.Yg.So() : null
};
e.Qk = function(a) {
  $w(this, a);
  this.zb === bt && Kd(21)
};

function $w(a, b) {
  if (b.pa !== a.pa) console.log("failed to equip non-equipable item. itemSlot=" + b.r + " charClass=" + a.pa);
  else if (a.Yg) {
    var c = a.Yg.ef(b.r);
    a.Yg.Qk(b);
    a.Ld && (a.Ld.removeItem(b), c && bw(a.Ld, c));
    var c = a.K,
      d, f;
    c.xe.va = 0;
    c.Ae.va = 0;
    c.je.va = 0;
    c.sd.va = 0;
    c.Jb.va = 0;
    c.Ke.va = 0;
    var g = c.no.Z,
      h = c.no.Yg;
    for (d = 0; d < g.length; d++)
      if (f = h.ef(g[d])) {
        var l = c.sd;
        l.va += 1 === f.s ? f.va : 0;
        l = c.je;
        l.va += 2 === f.s ? f.va : 0;
        l = c.xe;
        l.va += 3 === f.s ? f.va : 0;
        l = c.Ae;
        l.va += 4 === f.s ? f.va : 0;
        l = c.Jb;
        l.va += 5 === f.s ? f.va : 0;
        l = c.Ke;
        l.va += 6 === f.s ?
          f.va : 0
      } c.Sa = Math.min(c.Sa, $h(c.Jb));
    c.Yc = Math.min(c.Yc, $h(c.Ke))
  }
}
e.gq = function(a) {
  this.Sb = a
};
e.v = function() {
  return this.ee
};
e.Cb = function(a) {
  this.Da = a
};
e.hq = function(a) {
  this.Ue = a
};
e.dr = function() {
  this.Fh && !this.Va && this.Fh.dr(this)
};

function Lq(a, b) {
  if (!a.Va && a.Y !== Sd)
    if (1 === a.Y)
      if (w.wb) {
        var c = a.p;
        if (a === w.i.gg) a: {
          ab(c.ra, c.Ul);tb(c.ra, c.Db);
          var d = b * c.MC * Ss.t * speedWalkerPotion.t,
            f = w.S.bc(c.Db.T),
            g = w.S.cc(c.Db.U);
          if (Lb(c.ra) <= d) ab(c.Db, c.Ul),
          c.dd = !0;
          else if (f === c.Rn && g === c.Sn) c.dd = !0;
          else {
            if (!c.Hh || !c.qj || c.qj.bc() !== f || c.qj.cc() !== g) {
              c.aB = c.qj;
              c.qj = w.S.hb(f, g);
              if (!c.qj) {
                console.log("no current world tile!");
                break a
              }
              1 >= Math.abs(f - c.Rn) && 1 >= Math.abs(g - c.Sn) ? c.Hh = w.S.hb(c.Rn, c.Sn) : (c.Hh = Tw(c.qj, c.aB), c.Hh && c.Hh.bc() !== c.Rn && c.Hh.cc() !== c.Sn &&
                (c.Hh = Tw(c.Hh, c.qj)))
            }
            t(c.ra, c.Hh.dc() + 1, c.Hh.ec() + 1);
            tb(c.ra, c.Db);
            Vw(c) && (Mb(c.ra), Nb(c.Tl, 0.5), ib(c.ra, c.Tl));
            Mb(c.ra);
            Nb(c.ra, d);
            ib(c.Db, c.ra)
          }
        }
        else {
          ab(c.ra, c.Ul);
          tb(c.ra, c.Db);
          var h = b * c.MC * Ss.t * speedWalkerPotion.t,
            l = w.S.bc(c.Db.T),
            n = w.S.cc(c.Db.U);
          Lb(c.ra) <= h ? (ab(c.Db, c.Ul), c.dd = !0) : l === c.Rn && n === c.Sn ? c.dd = !0 : (t(c.ra, c.Ul.T + 1, c.Ul.U + 1), tb(c.ra, c.Db), Vw(c) && (Mb(c.ra), Nb(c.Tl, 0.5), ib(c.ra, c.Tl)), Mb(c.ra), Nb(c.ra, h), ib(c.Db, c.ra))
        }
      } else {
        var p = a.p,
          s;
        s = $t(a) ? b * p.Jw * Ss.t * speedWalkerPotion.t : p.Jw * b;
        if (null != p.Ug && 0 < p.Ug.length) {
          var u =
            p.Ug[0];
          t(p.ra, u.me, u.ne);
          tb(p.ra, p.u);
          if (Lb(p.ra) <= s) {
            var y;
            if (!(y = u.Mb)) {
              var A;
              a: {
                var C, v = Qd(),
                  D = v[0].p,
                  N = D.w,
                  I = D.cd;
                for (C = 1; C < v.length; C++)
                  if (D = v[C].p, D.cd != I || D.w != N) {
                    A = !1;
                    break a
                  } A = !0
              }
              var x;
              if (x = A) a: {
                var z, O = Qd(),
                  J, la = u.Yk.Km;
                for (z = 0; z < O.length; z++) {
                  if (O[z].Ja.Kd) {
                    x = !1;
                    break a
                  }
                  if (la && (J = O[z].K, O[z].zb === bt && (J.Sa / $h(J.Jb) < ax || J.Yc / $h(J.Ke) < bx))) {
                    x = !1;
                    break a
                  }
                }
                x = !0
              }
              y = x
            }
            if (y) {
              t(p.u, u.me | 0, u.ne | 0);
              var Q = p.Ug.shift();
              if (!Q.Mb) a: {
                var V = w.i.da;
                if (!Q.Mb) {
                  Q.Mb = !0;
                  w.i.aa.Ur();
                  Kd(2);
                  Q.$d.Xi || (mh(Q.$d),
                    Ag(Q.$d), nh(Q.$d));
                  var na = Q.Yk;
                  if (!na.Km) {
                    Mg(na, !0);
                    var K = Lg(na, Q);
                    if (!K.Mb) {
                      V.et(K);
                      V.Cc = K.$d;
                      break a
                    }
                  }
                  Q === V.Bc && (V.Cc = V.Bc.$d, V.Bc = null)
                }
              }
              p.w ? (p.cd = Q.Yk, p.w = null) : (p.cd = null, p.w = Q.$d);
              p.fg = -1;
              0 === p.Ug.length && (p.ed || Rd(p))
            }
          } else if (p.cd) {
            var H = p.cd.Sk,
              S = u === p.cd.Be; - 1 === p.fg && (p.fg = S ? 0 : H.length - 1);
            var da = null,
              W;
            S ? p.fg < H.length - 1 && (W = H[p.fg + 1], da = w.Ba.hb(W.T, W.U)) : 0 < p.fg && (W = H[p.fg - 1], da = w.Ba.hb(W.T, W.U));
            da ? t(p.ra, da.Ob(), da.Pb()) : t(p.ra, u.me, u.ne);
            tb(p.ra, p.u);
            Lb(p.ra) <= s ? (da ? t(p.u, da.Ob() | 0, da.Pb() |
              0) : t(p.u, u.me | 0, u.ne | 0), S ? p.fg++ : p.fg--) : (Mb(p.ra), Nb(p.ra, s), ib(p.u, p.ra))
          } else Uw(p) && (Mb(p.ra), ib(p.ra, p.lj)), Mb(p.ra), Nb(p.ra, s), ib(p.u, p.ra)
        } else ab(p.ra, p.Qb), tb(p.ra, p.u), Lb(p.ra) <= s ? (ab(p.u, p.Qb), p.ed && w.i.da.iw(), Rd(p)) : (Uw(p) && (Mb(p.ra), ib(p.ra, p.lj)), Mb(p.ra), Nb(p.ra, s), ib(p.u, p.ra));
        if (p.w)
          if ($t(a)) {
            if (p.w) {
              var ia = p.w,
                ea = p.u,
                va = w.Nh;
              ea && (Gg(ia, ea) || ia.Za && Jb(ea, ia.Za.tq, ia.Za.uq) < w.B || Fg(ia, ea, va))
            }
          } else p.w && Fg(p.w, p.u, w.Nh)
      }
  else {
    if (2 === a.Y) {
      if (a.Da && !a.Da.Va) {
        if (0 < a.K.Oj) xw(a, !1);
        else {
          var yb =
            a.Da;
          yb && yw(a, yb, !1)
        }
        $t(a) && w.i.aa.as()
      }
    } else if (a.Y === Kq) {
      if (a.Da && !a.Da.Va) {
        if (0 < a.K.Oj) xw(a, !0);
        else {
          var Fb = a.Da;
          Fb && yw(a, Fb, !0)
        }
        $t(a) && w.i.aa.ds()
      }
    } else if (a.Y === Jq) {
      if (a.ld) {
        var pa = a.ld.ga,
          T = a.ld.X;
        if (2 !== pa || 4 !== T && 1 !== T && 0 !== T)
          if (3 === pa) {
            var X = a.ld;
            if (X) {
              var Ca, qa, ta, eb, Gb, Da = X.ya,
                ub = X.ca,
                mb = a.p.u,
                Ea = si(a);
              for (Ca = 0; Ca < Ea.length; Ca++) {
                qa = Ea[Ca];
                ta = new fw;
                ta.Ca = a;
                ta.Cb(qa);
                ta.Ib = X;
                ta.yd = !0;
                eb = qa.p.u;
                Da && (Gb = new Zb(Da, mb, eb, !0, 1), Gb.ud = a, ta.Xb = Gb);
                if (ub) {
                  var La = new Zb(ub, mb, eb, !1, 1);
                  ta.xb = La
                }
                mw(w.Xe,
                  ta)
              }
              var wa = a.K,
                Fa = bu(wa);
              Cw(wa, Fa)
            }
          } else if (5 === pa) {
          var ha = a.ld;
          if (ha) {
            var ja = a.Da;
            if (ja && !ja.Va) {
              var Ga = 1 + (a.K.ar + 1),
                bb = null,
                za = null,
                nb = null,
                fb = null,
                cb = null,
                Ua, Va, mc, vb = ha.ca,
                Sb, Ma, zb = a.p.u;
              for (Ua = 0; Ua < Ga && ja; Ua++) {
                Va = new fw;
                Va.Ca = a;
                Va.Cb(ja);
                Va.Ib = ha;
                Va.yd = !0;
                mc = ja.p.u;
                Sb = new Zb(null, zb, mc, !0, 2);
                Sb.ud = a;
                Va.Xb = Sb;
                var Hb = new Zb(vb, mc, mc, !1, 1);
                Va.xb = Hb;
                zb = mc;
                Ma = Math.max(1, zw(a, ja));
                Va.Rd = 0 === Ma;
                Va.Jc = Ma;
                mw(w.Xe, Va);
                var ac = G,
                  ob = si(ja);
                if (0 === ob.length) bb = null;
                else {
                  var pb = ja.p.w;
                  if (pb) {
                    for (var Ha = void 0,
                        jb = void 0, Ab = ja.p.u, Bb = null, qb = null, wb = void 0, Ib = void 0, Ec = -1, jb = 0; jb < ob.length; jb++) Ha = ob[jb], Ha === ja || Ha === za || Ha === nb || Ha === fb || Ha === cb || Ha.Va || Ha.p.w !== pb || (wb = Ab.ac(Ha.p.u), wb <= ac && (0 > Ec || wb < Ec) && (Ib = Ha.Ja, Ib.wg || Ib.Kd || Ib.bi ? qb = Ha : (Bb = Ha, Ec = wb)));
                    bb = Bb ? Bb : qb
                  } else bb = null
                }
                cb = fb;
                fb = nb;
                nb = za;
                za = ja;
                ja = bb
              }
              var bc = a.K,
                Wa = bu(bc);
              Cw(bc, Wa)
            }
          }
        } else if (6 === pa) {
          var cc = a.ld;
          if (cc) {
            var Qa = a.Da;
            if (Qa && !Qa.Va) {
              var nc = a.K.Qq + 1,
                sa, Tb, qc = cc.ya,
                Fc = cc.ca,
                Cb = a.p.u,
                kb = a.p.w,
                Ra = Qa.p.u,
                Ja, Db;
              if (kb)
                if (Fc) {
                  sa = new fw;
                  sa.Ca =
                    a;
                  sa.Cb(Qa);
                  sa.Ib = cc;
                  sa.yd = !0;
                  qc && (Tb = new Zb(qc, Cb, Ra, !0, 1), Tb.ud = a, sa.Xb = Tb);
                  Ja = $h(a.K.sd);
                  sa.Rd = !1;
                  sa.Jc = Ja;
                  Db = new Zb(Fc, Cb, Ra, !1, Yb);
                  Db.ud = a;
                  Db.ew = kb;
                  Db.li = Ja;
                  sa.xb = Db;
                  var gb = Qa.p,
                    rb = gb.w,
                    dc = w.Ba.Ai(gb.Ob()),
                    Ka = w.Ba.Bi(gb.Pb()),
                    Xa, hb = rb.ia,
                    lb = rb.ja,
                    rc = hb + rb.rb,
                    sc = lb + rb.qb,
                    Aa, db, Mc = Math.max(hb, dc - nc),
                    ec = Math.min(rc, dc + nc),
                    Ub = Math.max(lb, Ka - nc),
                    sb = Math.min(sc, Ka + nc);
                  for (Aa = Mc; Aa <= ec; Aa++)
                    for (db = Ub; db <= sb; db++)(Xa = w.Ba.hb(Aa, db)) && 0.5 > Math.random() && sg(Xa, Db);
                  mw(w.Xe, sa);
                  var ka = a.K,
                    Eb = bu(ka);
                  Cw(ka,
                    Eb)
                } else console.log("no effect name for rain damage spell")
            }
          }
        } else if (8 === pa) {
          var xb = a.Da;
          if (xb && !xb.Va) {
            var Na = a.ld;
            if (Na) {
              var Ya = new fw;
              Ya.Ca = a;
              Ya.Cb(xb);
              var tc = xb.p.u,
                me = a.p.u;
              Ya.Ib = Na;
              Ya.yd = !0;
              var ne = Na.ya;
              if (ne) {
                var Le = new Zb(ne, me, tc, !0, 1);
                Le.ud = a;
                Ya.Xb = Le
              }
              var Td = Na.ca;
              if (Td) {
                var oe = $h(a.K.sd);
                Ya.Rd = !1;
                Ya.Jc = oe;
                var Y = new Zb(Td, me, tc, !1, Yb),
                  nf = xb.p.w;
                Y.ud = a;
                Y.ew = nf;
                Y.li = oe;
                Ya.xb = Y;
                var Nc = a.K.ho + 1,
                  gd = xb.p,
                  uc = gd.w,
                  U = w.Ba.Ai(gd.Ob()),
                  Z = w.Ba.Bi(gd.Pb()),
                  $ = uc.ia,
                  ba = uc.ja,
                  ca = $ + uc.rb,
                  q = ba + uc.qb;
                Ew(U,
                  Z, $, ca, ba, q, Y);
                0 < Nc && (Ew(U, Z - 1, $, ca, ba, q, Y), Ew(U, Z + 1, $, ca, ba, q, Y), Ew(U - 1, Z, $, ca, ba, q, Y), Ew(U + 1, Z, $, ca, ba, q, Y), Ew(U - 1, Z - 1, $, ca, ba, q, Y), Ew(U - 1, Z + 1, $, ca, ba, q, Y), Ew(U + 1, Z - 1, $, ca, ba, q, Y), Ew(U + 1, Z + 1, $, ca, ba, q, Y), 1 < Nc && (Ew(U, Z - 2, $, ca, ba, q, Y), Ew(U, Z + 2, $, ca, ba, q, Y), Ew(U - 2, Z, $, ca, ba, q, Y), Ew(U + 2, Z, $, ca, ba, q, Y), Ew(U - 2, Z - 1, $, ca, ba, q, Y), Ew(U - 2, Z + 1, $, ca, ba, q, Y), Ew(U + 2, Z - 1, $, ca, ba, q, Y), Ew(U + 2, Z + 1, $, ca, ba, q, Y), Ew(U - 1, Z - 2, $, ca, ba, q, Y), Ew(U - 1, Z + 2, $, ca, ba, q, Y), Ew(U + 1, Z - 2, $, ca, ba, q, Y), Ew(U + 1, Z + 2, $, ca, ba, q, Y), 2 < Nc && (Ew(U -
                  2, Z - 2, $, ca, ba, q, Y), Ew(U - 2, Z + 2, $, ca, ba, q, Y), Ew(U + 2, Z - 2, $, ca, ba, q, Y), Ew(U + 2, Z + 2, $, ca, ba, q, Y), Ew(U - 3, Z - 1, $, ca, ba, q, Y), Ew(U - 3, Z, $, ca, ba, q, Y), Ew(U - 3, Z + 1, $, ca, ba, q, Y), Ew(U + 3, Z - 1, $, ca, ba, q, Y), Ew(U + 3, Z, $, ca, ba, q, Y), Ew(U + 3, Z + 1, $, ca, ba, q, Y), Ew(U - 1, Z - 3, $, ca, ba, q, Y), Ew(U, Z - 3, $, ca, ba, q, Y), Ew(U + 1, Z - 3, $, ca, ba, q, Y), Ew(U - 1, Z + 3, $, ca, ba, q, Y), Ew(U, Z + 3, $, ca, ba, q, Y), Ew(U + 1, Z + 3, $, ca, ba, q, Y))));
                var pe = a.K,
                  fc = bu(pe);
                Cw(pe, fc);
                mw(w.Xe, Ya)
              } else console.log("error: blast spell has no effect name!")
            }
          }
        } else if (10 === pa || 17 === pa) {
          if (a.ld) {
            var vd =
              a.K,
              qe = vd.gl,
              gc = Hu(a),
              vc = Math.max(0, qe - gc);
            if (!(1 > vc)) {
              var $c;
              for ($c = 0; $c < vc; $c++) {
                var Gc = a,
                  ad = Gc.ld,
                  Vb = new fw;
                Vb.Ca = Gc;
                Vb.Cb(Gc);
                Vb.Rd = !1;
                Vb.Jc = 0;
                Vb.Ib = ad;
                Vb.yd = !1;
                var Tc = Gc.p.u,
                  hd = Dw(Tc, Gc.p.w),
                  id = ad.ya;
                if (id) {
                  var jd = new Zb(id, Tc, hd, !0, 1);
                  jd.ud = Gc;
                  Vb.Xb = jd
                }
                var kd = ad.ca;
                if (kd) {
                  var eg = new Zb(kd, Tc, hd, !1, 1);
                  Vb.xb = eg;
                  mw(w.Xe, Vb)
                } else console.log("error: summon spell has no effect name!")
              }
              Cw(vd, bu(vd))
            }
          }
        } else if (11 === pa) {
          if (a.ld) {
            var hc = a.K,
              re = hc.gl,
              of = Hu(a),
              wd = w.Gf.Og,
              rl = Math.max(0, re - of),
              cj = Math.min(rl,
                wd.length),
              Ah = 0,
              dj = a.p.w,
              Bh;
            if (!(0 >= cj)) {
              var Me;
              for (Me = 0; Me < wd.length && Ah < cj; Me++)
                if (Bh = wd[Me], Bh.p.w === dj) {
                  var Ne = a,
                    Oe = Bh,
                    fg = Ne.ld,
                    ld = new fw;
                  ld.Ca = Ne;
                  ld.Cb(Oe);
                  ld.Rd = !1;
                  ld.Jc = 0;
                  ld.Ib = fg;
                  ld.yd = !0;
                  var pf = Ne.p.u,
                    qf = Oe.p.u,
                    rf = fg.ya;
                  if (rf) {
                    var sf = new Zb(rf, pf, qf, !0, 1);
                    sf.ud = Ne;
                    ld.Xb = sf
                  }
                  var Ch = fg.ca;
                  if (Ch) {
                    var gg = new Zb(Ch, pf, qf, !1, 1);
                    ld.xb = gg;
                    mw(w.Xe, ld)
                  } else console.log("error: summon spell has no effect name!");
                  Ah++
                } Cw(hc, bu(hc))
            }
          }
        } else if (9 === pa) {
          var se = a.ld;
          if (se) {
            var Md = new fw;
            Md.Ca = a;
            Md.Cb(a);
            Md.Rd = !1;
            Md.Jc = 0;
            Md.Ib = se;
            Md.yd = !1;
            var tf = a.p.u,
              uf = Dw(tf, a.p.w),
              Dh = se.ya;
            if (Dh) {
              var ej = new Zb(Dh, tf, uf, !0, 1);
              ej.ud = a;
              Md.Xb = ej
            }
            var hg = se.ca;
            if (hg) {
              var ig = new Zb(hg, tf, uf, !1, 1);
              Md.xb = ig;
              var Eh = a.K,
                Sa = bu(Eh);
              Cw(Eh, Sa);
              mw(w.Xe, Md)
            } else console.log("error: summon spell has no effect name!")
          }
        } else if (12 === pa) {
          var bd = Bw(a);
          if (bd) {
            bd.ut = !0;
            bd.Df = a.K.vt + 1;
            var Fh = a.p.u;
            Fh ? (bd.pl || (bd.pl = new Za), ab(bd.pl, Fh)) : bd.pl = null;
            var Gh = Fw(a, bd.Da);
            bd.Jc = Gh;
            bd.Rd = 0 === Gh;
            var Hh = bd.Xb;
            Hh && (Hh.Gs = !0)
          }
        } else if (13 === pa) {
          var Ih =
            Bw(a);
          if (Ih) {
            var fj = a.K.nt + 1;
            0 < fj && (Ih.Xs = !0, Ih.Df = fj)
          }
        } else Bw(a);
        else a: {
          var vf = a.ld;
          if (vf) {
            var wf = a.Da;
            if (!wf || wf.Va)
              if (wf = Iq(a), !wf) break a;
            var Jh, te = vf.X;
            if (1 === te || 0 === te) Jh = a.K.mr + 1;
            else if (4 === te) Jh = a.K.Ft + 1;
            else {
              console.log("wrong effect type: " + te);
              break a
            }
            var Ud;
            var xf = wf,
              yf = Jh,
              xd;
            var sl = G,
              Kh = qi(a);
            if (0 === Kh.length) xd = null;
            else {
              var jg = xf.p.w;
              if (jg) {
                var Vd, Nd, tl = xf.p.u,
                  kg, ue = [];
                for (Vd = 0; Vd < Kh.length && (Nd = Kh[Vd], Nd.Va || Nd.p.w !== jg || Pw(Nd.Ja, te) || (Nd === xf ? ue.push(Nd) : (kg = tl.ac(Nd.p.u), kg <=
                    sl && ue.push(Nd)), !(1E3 <= ue.length))); Vd++);
                xd = ue
              } else xd = null
            }
            if (xd)
              if (xd.length < yf) Ud = xd;
              else {
                var Uc = [],
                  ve, zf = 0;
                for (Uc.push(xf); Uc.length < yf && 10 > zf;) ve = xd[k(Uc.length)], 0 > Uc.indexOf(ve) ? Uc.push(ve) : zf++;
                if (Uc.length < yf) {
                  var we;
                  for (we = 0; we < xd.length && !(ve = xd[we], 0 > Uc.indexOf(ve) && (Uc.push(ve), Uc.length >= yf)); we++);
                }
                Ud = Uc
              }
            else Ud = null;
            if (Ud && 0 !== Ud.length) {
              var xe, Wd, yd, lg, mg, Af = vf.ya,
                ng = vf.ca,
                Lh = a.p.u;
              for (xe = 0; xe < Ud.length; xe++)
                if (Wd = Ud[xe], 4 !== Wd.zb || 1 !== te && 0 !== te) {
                  yd = new fw;
                  yd.Ca = a;
                  yd.Cb(Wd);
                  yd.Ib =
                    vf;
                  yd.yd = !0;
                  lg = Wd.p.u;
                  Af && (mg = new Zb(Af, Lh, lg, !0, 1), mg.ud = a, yd.Xb = mg);
                  if (ng) {
                    var ul = new Zb(ng, Lh, lg, !1, 1);
                    yd.xb = ul
                  }
                  mw(w.Xe, yd)
                } else sh(w.pc, Wd, "Immune!", "white");
              var Bf = a.K,
                Mh = bu(Bf);
              Cw(Bf, Mh)
            }
          }
        }
        $t(a) && w.i.aa.gs()
      }
    } else if (5 === a.Y) {
      if (a.rh && !a.rh.gc) {
        var Pe = a.rh.Xl,
          gj = w.pc;
        0 < Pe && sh(gj, a, Pe + " gold", "yellow");
        at(a.rh.Xl);
        w.i.aa.dp(a.rh.Xl);
        a.rh.oh(!0);
        Fi(a.rh);
        a.rh = null;
        Kd(9)
      }
    } else if (7 === a.Y) a.Zh && !a.Zh.gc && (sh(w.pc, a, "Scroll!", "white"), Cq(a.Zh.vf()), a.Zh.oh(!0), Oq(a.Zh), a.Zh = null, Kd(10));
    else if (8 ===
      a.Y) a.hk && !a.hk.gc && (sh(w.pc, a, "Potion!", "white"), a.hk.oh(!0), or(a.hk), rr(a.hk.hc), a.Zh = null, Kd(11));
    else if (6 === a.Y) {
      if (a.bj && !a.bj.gc) {
        a.bj.oh(!0);
        Yv(a.bj);
        var Qe = a.bj.getItem(),
          Cf = Qe.uf();
        bw(Qe.nj.Ld, Qe);
        w.i.aa.ep(Qe);
        Kd(12);
        if (0 != Cf) switch (Cf) {
          case 1:
            Kd(13);
            break;
          case 2:
            Kd(14);
            break;
          case 3:
            Kd(15);
            break;
          case 4:
            Kd(16)
        }
        a.bj = null
      }
    } else if (12 === a.Y) {
      if (a.Ue && !a.Ue.Kg) {
        var Xd = a.Ue,
          Oc, Yd = Xd.Nn,
          Re = ug(Yd) + w.B,
          Zd = vg(Yd) - w.B,
          Vc = wg(Yd) + w.B,
          Od = xg(Yd) - w.B,
          wc = Xd.zq,
          zd = Xd.Aq,
          Ad = Xd.Mf;
        wc < Re ? wc = Re : wc > Zd && (wc = Zd);
        zd < Vc ? zd = Vc : zd > Od && (zd = Od);
        Hi(Xd, !0);
        if (1 === Ad) {
          var Nh = 10 + k(10),
            hj;
          for (Oc = 0; Oc < Nh; Oc++) {
            hj = 1 + Dg();
            var vl = new Eg(hj, vw(wc, Re, Zd), vw(zd, Vc, Od), Yd);
            w.ff.pe.push(vl)
          }
        }
        if (1 === Ad || 2 === Ad) {
          var og = 7 + k(8);
          for (Oc = 0; Oc < og; Oc++) {
            var ij = w.dh,
              Df = vw(wc, Re, Zd),
              Oh = vw(zd, Vc, Od),
              wA = Yd,
              Np, Op = w.Sm,
              wl = w.i.D[k(w.i.D.length)],
              Pp = wl.Z,
              xA = Pp[k(Pp.length)],
              zA = (100 - Math.min(90, E.Yl.t + cx)) / 100,
              AA = Op.uf(zA),
              CA = (100 - Math.min(90, E.lp.t + dx)) / 100,
              DA = Sv(wl.K.Eb, CA);
            (Np = Nv(Op, xA, wl, DA, AA)) && ij.yf.push(new zv(Np, Df, Oh, wA))
          }
        }
        if (1 === Ad ||
          3 === Ad) {
          var EA = 2 + k(5);
          for (Oc = 0; Oc < EA; Oc++) {
            var Qp = w.nh.Pl,
              FA = Qp[k(Qp.length)],
              GA = new Mq(FA, vw(wc, Re, Zd), vw(zd, Vc, Od), Yd);
            w.Uh.kf.push(GA)
          }
        }
        if (1 === Ad) {
          var HA = 0 + k(2);
          for (Oc = 0; Oc < HA && w.Yj.re.length < sr + tr.t; Oc++) {
            var IA = new Tq(potionInfo[k(potionInfo.length)]),
              JA = new mr(IA, vw(wc, Re, Zd), vw(zd, Vc, Od), Yd);
            w.Ti.Hf.push(JA)
          }
        }
        sh(w.pc, a, "Loot!!!", "#FFF");
        switch (Ad) {
          case 1:
            w.i.aa.hs();
            Kd(6);
            break;
          case 2:
            w.i.aa.js();
            Kd(7);
            break;
          case 3:
            w.i.aa.Rr(), Kd(8)
        }
        Ta("Treasure Chest", "Looted");
        a.Ue = null
      }
    } else if (9 === a.Y) {
      if (w.i.da.Wb) {
        var Ef =
          w.i.da;
        if (Ef.Wb && !Ef.Wb.oe) {
          Ef.Cc = null;
          Ef.Bc = null;
          Ef.ed = null;
          Ef.Ue = null;
          var ye = Ef.Wb;
          w.Mc = ye;
          ye.ri = 0;
          Jd(ye.er(), ye.Go, ye.Aj, !0);
          w.wb = !1;
          ye.qf ? Ta("Dungeon", "Entering Dungeon Again") : (ye.qf = !0, ye.Nk = Ia(w.Aa.Mk + 1, ex, 1), ee(ye), Ta("Dungeon", "Discovered Dungeon"))
        }
      }
    } else if (11 === a.Y) {
      if (w.i.da.ge) {
        var Se = w.i.da;
        if (Se.ge)
          if (Se.ge.cb) Se.ge = null;
          else {
            Se.Cc = null;
            Se.Bc = null;
            Se.ed = null;
            Se.Ue = null;
            var xl = Se.ge;
            w.le = xl;
            Jd(xl.er(), 11, !1, !0);
            w.wb = !1;
            Ta("Castle", "Entering Castle: " + xl.mi)
          }
      }
    } else if (10 === a.Y && w.i.da.Lf) {
      var Rp =
        w.i.da;
      if (Rp.Lf) {
        var jj;
        for (jj = 0; jj < w.i.D.length; jj++) {
          var yl = w.i.D[jj],
            Sp = yl.Ld,
            zl = Sp.items;
          if (0 !== zl.length) {
            for (var Ph = void 0, kj = void 0, Tp = 0, Up = void 0, Al = 0, LA = 0.1 + Ws.t, Ph = zl.length - 1; 0 <= Ph; Ph--) kj = zl[Ph], (Up = yl.ef(kj.r)) && !ss(kj, Up) && (Al += kj.zf * LA, Tp++, Kd(17), dw(Sp, Ph));
            w.i.aa.Zr(Tp);
            sh(w.pc, yl, "Gold!", "yellow");
            var Vp = w.ug;
            Vp.ni += m(Al)
          }
        }
        Ta("Shop", "Sell all items");
        Rp.Lf = null
      }
    }
    a.Y = Sd
  }
};

function fx() {
  this.VC = 1E8
}

function gx(a, b, c) {
  a = a.VC;
  var d = w.S.q,
    f, g, h;
  for (h = 0; 3 > h; h++)
    for (f = d[h], g = 0; 3 > g; g++)
      for (var l = f[g], n = a, p = void 0, s = void 0, u = void 0, p = 0; p < l.jo.length; p++)
        for (u = l.jo[p], s = 0; s < u.length; s++) u[s].ln = n;
  if (c = w.S.hb(b, c))
    for (b = [], c.ln = 0, b.push(c), c = [null, null, null, null]; 0 < b.length;)
      for (g = b.shift(), a = g.ln, d = c, f = g.bc(), g = g.cc(), d[0] = w.S.hb(f, g - 1), d[1] = w.S.hb(f - 1, g), d[2] = w.S.hb(f + 1, g), d[3] = w.S.hb(f, g + 1), g = 0; g < c.length; g++) {
        if (d = c[g]) f = a + d.Ln + 1, f < d.ln && (d.ln = f, b.push(d))
      } else console.log("error: destination is not on grid!!!")
};

function hx() {
  this.tk = this.Sl = this.Nl = this.nk = this.Zk = this.xl = this.Ol = this.Gi = this.Ph = this.kl = this.Xj = this.El = this.ul = this.Gl = this.wl = this.hl = this.oj = this.Sd = this.Ff = this.Dl = this.si = this.Wk = this.Xk = this.Rk = this.uk = this.wi = this.Mj = this.qn = this.Lk = this.On = 0
}
e = hx.prototype;
e.jx = function() {
  this.tk = this.Sl = this.Nl = this.nk = this.Zk = this.xl = this.Ol = this.Gi = this.Ph = this.kl = this.Xj = this.El = this.ul = this.Gl = this.wl = this.hl = this.oj = this.Sd = this.Ff = this.Dl = this.si = this.Wk = this.Xk = this.Rk = this.uk = this.wi = this.Mj = this.qn = this.Lk = this.On = 0
};
e.is = function() {
  this.On++
};
e.es = function() {
  this.qn++
};
e.Ur = function() {
  this.Lk++
};
e.$r = function() {
  this.Mj++
};
e.Vr = function() {
  this.wi++
};
e.Sr = function() {
  this.uk++
};
e.Xr = function() {
  this.Rk++
};
e.Yr = function(a) {
  this.Wk += a
};
e.dp = function(a) {
  this.Xk += a
};
e.Wr = function(a) {
  this.Sd += a
};
e.dt = function(a) {
  this.Sd = a
};
e.cp = function() {
  this.si++
};
e.gp = function() {
  this.Dl++
};
e.$k = function() {
  this.Ff++
};
e.wx = function(a) {
  this.Ff = a
};
e.bs = function() {
  this.kl++
};
e.Tr = function() {
  this.oj++
};
e.as = function() {
  this.hl++
};
e.ds = function() {
  this.wl++
};
e.gs = function() {
  this.Gl++
};
e.cs = function() {
  this.ul++
};
e.fs = function() {
  this.El++
};
e.fp = function(a) {
  this.Xj += a
};
e.Zr = function(a) {
  this.Ph += a
};
e.ep = function(a) {
  this.Gi++;
  switch (a.uf()) {
    case 1:
      this.Ol++;
      break;
    case 2:
      this.xl++;
      break;
    case 3:
      this.Zk++;
      break;
    case 4:
      this.nk++
  }
};
e.hs = function() {
  this.Nl++
};
e.js = function() {
  this.Sl++
};
e.Rr = function() {
  this.tk++
};

function ix() {}
ix.prototype = new hx;
ix.prototype.jx = function() {
  console.log("Reset invoked on total statistics. Not resetting anything.")
};

function bs(a, b) {
  var c = a.qo[b];
  return c ? c : 0
}

function cs(a, b) {
  var c = a.lq[b];
  return c ? c : 0
};

function jx() {
  this.Ua = this.aa = null
}

function kx() {
  var a = w.i.aa,
    b = w.i.Ua;
  a.aa = w.i.Ih;
  a.Ua = b
}
e = jx.prototype;
e.is = function() {
  this.aa.is();
  this.Ua.is()
};
e.Ur = function() {
  this.aa.Ur();
  this.Ua.Ur()
};
e.es = function() {
  this.aa.es();
  this.Ua.es()
};
e.$r = function() {
  this.aa.$r();
  this.Ua.$r()
};
e.Vr = function() {
  this.aa.Vr();
  this.Ua.Vr()
};
e.Sr = function() {
  this.aa.Sr();
  this.Ua.Sr()
};
e.Yr = function(a) {
  this.aa.Yr(a);
  this.Ua.Yr(a)
};
e.dp = function(a) {
  this.aa.dp(a);
  this.Ua.dp(a)
};
e.Wr = function(a) {
  this.aa.Wr(a);
  this.Ua.Wr(a)
};
e.cp = function() {
  this.aa.cp();
  this.Ua.cp()
};
e.gp = function() {
  this.aa.gp();
  this.Ua.gp()
};
e.$k = function() {
  this.aa.$k();
  this.Ua.$k()
};
e.bs = function() {
  this.aa.bs();
  this.Ua.bs()
};
e.Tr = function() {
  this.aa.Tr();
  this.Ua.Tr()
};
e.as = function() {
  this.aa.as();
  this.Ua.as()
};
e.ds = function() {
  this.aa.ds();
  this.Ua.ds()
};
e.gs = function() {
  this.aa.gs();
  this.Ua.gs()
};
e.cs = function() {
  this.aa.cs();
  this.Ua.cs()
};
e.fs = function() {
  this.aa.fs();
  this.Ua.fs()
};
e.Xr = function() {
  this.aa.Xr();
  this.Ua.Xr()
};
e.fp = function(a) {
  this.aa.fp(a);
  this.Ua.fp(a)
};
e.Zr = function(a) {
  this.aa.Zr(a);
  this.Ua.Zr(a)
};
e.ep = function(a) {
  this.aa.ep(a);
  this.Ua.ep(a)
};
e.hs = function() {
  this.aa.hs();
  this.Ua.hs()
};
e.js = function() {
  this.aa.js();
  this.Ua.js()
};
e.Rr = function() {
  this.aa.Rr();
  this.Ua.Rr()
};

function lx() {
  this.fd = this.cg = this.Je = 0;
  this.zs = this.xs = -1;
  this.ed = this.Bc = this.Cc = this.Ue = this.Wf = this.Lf = this.ge = this.Wb = null;
  this.Ks = !1;
  this.gn = null;
  this.Mp = !1;
  this.Ht = new fx;
  this.hp = !1;
  this.Om = this.Nm = 0
}

function au(a) {
  var b = w.i.da;
  mx(b, a);
  b.Ks = !0
}

function mx(a, b) {
  a.gn = b;
  a.gn && (a.Cc = a.gn, a.ed = null, a.Bc = null)
}

function vu(a) {
  return a.Mp || a.Ks
}

function Is(a) {
  var b = w.i.da;
  b.Je += a
}

function ps(a, b) {
  a.Je -= b;
  0 > a.Je && (a.Je = 0)
}

function uw(a) {
  var b = w.i.da;
  b.cg += a
}

function at(a) {
  var b = w.i.da;
  b.fd += a
}

function Ks(a) {
  var b = w.i.da;
  b.fd -= a;
  0 > b.fd && (b.fd = 0)
}

function ci(a) {
  0 > a.xs && (a.xs = nx());
  return a.xs
}

function vs() {
  var a = w.i.da;
  0 > a.zs && (a.zs = ox(a));
  return a.zs
}

function xs() {
  var a = w.i.da;
  a.xs = nx();
  a.zs = ox(a)
}

function nx() {
  var a = -1,
    b, c;
  for (c = 0; c < w.i.D.length; c++) b = w.i.D[c].K.Eb, a < b && (a = b);
  return a
}

function ox(a) {
  a = ci(a);
  var b, c;
  for (c = 0; c < w.i.D.length; c++) b = w.i.D[c].K.Eb, a > b && (a = b);
  return a
}
e = lx.prototype;
e.hq = function(a) {
  this.Ue = a
};
e.iw = function() {
  this.Ue = this.ed = this.Bc = this.Cc = null;
  if (w.Mc) w.Mc.iw();
  else if (w.le) {
    var a = w.le;
    w.le = null;
    w.wb = !0;
    var b, c = Qd(),
      d, f;
    for (f = 0; f < c.length; f++) d = c[f], b = d.p, Rd(b), b.cd = null, b.w = null, d.Y = Sd;
    $d();
    a.ye = !1;
    Lc();
    a.cb = !0;
    b = [];
    var g;
    for (d = 0; d < a.ck.length; d++) f = a.ck[d], c = f.Hd, f = f.Id, (g = dd(c - 1 + "_" + f)) && g !== a && g.$b && 0 > b.indexOf(g) && b.push(g), (g = dd(c + 1 + "_" + f)) && g !== a && g.$b && 0 > b.indexOf(g) && b.push(g), (g = dd(c + "_" + (f - 1))) && g !== a && g.$b && 0 > b.indexOf(g) && b.push(g), (g = dd(c + "_" + (f + 1))) && g !== a && g.$b && 0 > b.indexOf(g) &&
      b.push(g);
    for (c = 0; c < b.length; c++) b[c].$b = !1;
    Lc();
    ed(w.S);
    Ta("Castle", "Cleared: " + a.mi);
    w.i.aa.Sr();
    Pc(a);
    nd(a);
    Kd(19);
    if (a = a.Ab)
      for (c = 0; c < a.length; c++) ge(w.Aa, a[c]);
    a = w.kb;
    for (b = c = 0; b < a.pd.length; b++) a.pd[b].cb || c++;
    if (0 === c) {
      w.i.wh++;
      w.Fe = !0;
      w.xu();
      px(w.pg);
      w.Ee.Me();
      a = w.i.Bg;
      b = w.i.D.length;
      4 > b && (1 === b ? (a.hn += 1, c = w.i.D[0].pa, (d = a.lq[c]) || (d = 0), a.lq[c] = d + 1) : 2 === b ? a.jn += 1 : 3 === b && (a.kn += 1));
      for (c = 0; c < b; c++) d = w.i.D[c].pa, (f = a.qo[d]) || (f = 0), a.qo[d] = f + 1;
      c = a.nm;
      0 < c && (c > a.Xm && (a.Xm = c), a.mm = c);
      if (4 <= b) {
        d = !0;
        f = w.i.D[0].pa;
        for (c = 1; c < b; c++)
          if (f != w.i.D[c].pa) {
            d = !1;
            break
          } d && (a.vn += 1)
      }
      c = w.i.Ih.Xj;
      a = m(c / 36E5);
      b = m(c / 6E4 % 60);
      c = m(c / 1E3 % 60);
      b = "Time: " + ((10 > a ? "0" : "") + a + ":" + (10 > b ? "0" : "") + b + ":" + (10 > c ? "0" : "") + c) + ", Victories: " + w.i.wh;
      for (a = 0; a < w.i.D.length; a++) b += ", " + w.i.D[a].Kc.Ka + " (" + w.i.D[a].K.Eb + ")";
      Ta("Victory", b)
    }
  }
};
e.et = function(a) {
  this.Bc = a
};
e.rB = function(a) {
  this.ed = a
};
e.ou = function() {
  this.Wf && this.Wf.cb && (this.Wf = null);
  if (!this.Wf) {
    var a = w.kb,
      b = w.i.gg.p.Db,
      c = null,
      d = 0,
      f, g, h;
    for (h = 0; h < a.pd.length; h++)
      if (f = a.pd[h], !f.$b && !f.cb && (g = Kb(b, w.S.dc(f.dm), w.S.ec(f.em)), !c || g < d)) c = f, d = g;
    this.Wf = c
  }
  if (this.Wf) {
    a = !1;
    for (b = c = 0; b < w.i.D.length; b++) {
      d = w.i.D[b];
      f = d.Ld.items;
      if (0 === f.length) d = 0;
      else {
        var l = h = g = void 0,
          n = 0;
        for (g = 0; g < f.length; g++) h = f[g], (l = d.ef(h.r)) && !ss(h, l) && n++;
        d = n
      }
      c += d
    }
    b = c;
    if (this.Lf) 0 === b && (this.Lf = null);
    else if (0 < b) {
      a = w.ug;
      b = w.i.gg.p.Db;
      c = null;
      for (h = d = 0; h < a.ht.length; h++)
        if (f =
          a.ht[h], g = Kb(b, w.S.dc(f.iq), w.S.ec(f.jq)), !c || g < d) c = f, d = g;
      this.Lf = c;
      a = !0
    }
    if (this.Lf) this.ge = null, b = !1;
    else if (b = !1, this.ge) this.ge.Bj || (this.ge = null);
    else if (this.Wf.ye && !this.Wf.cb) this.ge = this.Wf, b = !0;
    else {
      c = w.kb;
      d = w.i.gg.p.Db;
      f = null;
      for (n = g = 0; n < c.Dh.length; n++)
        if (h = c.Dh[n], l = Kb(d, w.S.dc(h.dm), w.S.ec(h.em)), !f || l < g) f = h, g = l;
      if (c = f) this.Wf = this.ge = c, b = !0
    }
    if (this.Lf || this.ge) this.Wb = null, f = !1;
    else {
      c = !1;
      this.Wb && (this.Wb.oe ? this.Wb = null : this.Wb.Lc && (this.Wb = null));
      if (!this.Wb) {
        d = w.i.gg.p.Db;
        f = null;
        g = 0;
        var n = this.Wf.Ab,
          p;
        for (p = 0; p < n.length; p++)
          if (h = n[p], !h.cb && (l = Kb(d, h.dc(), h.ec()), !f || l < g)) f = h, g = l;
        this.Wb = f;
        if (!this.Wb) {
          f = w.Aa;
          g = null;
          for (p = h = 0; p < f.Ab.length; p++)(l = f.Ab[p], l.oe || l.zj.$b || l.cb || (n = Kb(d, l.dc(), l.ec()), g && !(n < h))) || (g = l, h = n);
          this.Wb = g;
          if (!this.Wb) {
            f = w.Aa;
            g = null;
            for (p = h = 0; p < f.Ab.length; p++)(l = f.Ab[p], l.oe || l.zj.$b || l.qf && (!l.qf || l.Lc) || (n = Kb(d, l.dc(), l.ec()), g && !(n < h))) || (g = l, h = n);
            this.Wb = g;
            if (!this.Wb) {
              f = w.Aa;
              g = null;
              for (p = h = 0; p < f.Ab.length; p++)
                if (l = f.Ab[p], !l.oe && !l.zj.$b && (n =
                    Kb(d, l.dc(), l.ec()), !g || n < h)) g = l, h = n;
              this.Wb = g
            }
          }
        }
        this.Wb && (c = !0)
      }
      f = c
    }
    if (this.Lf) c = this.Lf.iq, d = this.Lf.jq;
    else if (this.ge) c = this.ge.dm, d = this.ge.em;
    else if (this.Wb) c = this.Wb.bc(), d = this.Wb.cc();
    else return;
    if (a || f || b) w.S.hb(c, d) ? (gx(this.Ht, c, d), this.hp = !1) : (this.hp = !0, this.Nm = dg(c), this.Om = pg(d), gx(this.Ht, this.Nm, this.Om));
    else {
      if (a = this.hp) b = w.i.gg.p, a = this.Nm - w.S.bc(b.dc()), b = this.Om - w.S.cc(b.ec()), a = 8 > Math.sqrt(a * a + b * b);
      a && (w.S.hb(c, d) ? (gx(this.Ht, c, d), this.hp = !1) : (this.Nm = dg(c), this.Om = pg(d),
        gx(this.Ht, this.Nm, this.Om)))
    }
  }
};
e.nu = function() {
  a: {
    var a, b = Qd(),
      c;
    for (a = 0; a < b.length; a++)
      if (c = b[a], c.p.w && c.Ja.Kd) {
        this.Mp = !0;
        mx(this, c.p.w);
        break a
      } this.Mp = !1
  }
  if (!vu(this))
    if (this.Ue) this.Cc = this.Ue.Nn, this.Bc = this.ed = null;
    else if (!this.ed && (!this.Bc || this.Bc.Mb)) {
    if (this.Cc) {
      if (a = this.Cc.Xi) a = xh(), a = 0 === a.length ? !0 : this.Cc !== a[0].p.w;
      if (a) this.Cc = null;
      else return
    }
    this.et(qx());
    this.Cc = this.Bc ? this.Bc ? this.Bc.$d : null : (this.ed = w.Ba.tf) ? this.ed.$d : null
  }
};

function qx() {
  var a = w.i.gg,
    b, c, d, f, g = null,
    h = a.p.u,
    l = w.Ba.Pa,
    n = w.Ba.gd,
    p = 1E5;
  if (b = a.p.cd) {
    if (!b.af.Mb) return b.af;
    if (!b.Be.Mb) return b.Be
  }
  if (d = a.p.w) {
    b = d.Nc;
    for (c = 0; c < b.length; c++) d = b[c], d.Mb || (g ? (f = Kb(h, d.me, d.ne), f < p && (g = d, p = f)) : (g = d, p = Kb(h, d.me, d.ne)));
    if (g) return g
  }
  for (a = 0; a < l.length; a++)
    if (d = l[a], d.Xi)
      for (b = d.Nc, c = 0; c < b.length; c++) d = b[c], d.Mb || (g ? (f = Kb(h, d.me, d.ne), f < p && (g = d, p = f)) : (g = d, p = Kb(h, d.me, d.ne)));
  for (a = 0; a < n.length; a++) b = n[a], b.Km && (d = b.af, d.Mb || (g ? (f = Kb(h, d.me, d.ne), f < p && (g = d, p = f)) :
    (g = d, p = Kb(h, d.me, d.ne))), d = b.Be, d.Mb || (g ? (f = Kb(h, d.me, d.ne), f < p && (g = d, p = f)) : (g = d, p = Kb(h, d.me, d.ne))));
  return g
};
var rx = {
    Fd: 2.1,
    Ed: 500,
    Vd: 1.005,
    Xd: 100
  },
  sx = {
    Fd: 1.5,
    Ed: 15,
    Vd: 1.017,
    Xd: 85
  },
  tx = {
    Fd: 1.5,
    Ed: 15,
    Vd: 1.017,
    Xd: 85
  },
  ux = {
    Fd: 1.6,
    Ed: 25,
    Vd: 1.017,
    Xd: 22
  },
  vx = {
    Fd: 1.8,
    Ed: 15,
    Vd: 1.015,
    Xd: 15
  },
  yi = {
    Fd: 1.7,
    Ed: 1,
    Vd: 1.0017,
    Xd: 30
  },
  zi = {
    Fd: 1.7,
    Ed: 1,
    Vd: 1.0017,
    Xd: 25
  },
  Ai = {
    Fd: 1.7,
    Ed: 1,
    Vd: 1.0017,
    Xd: 30
  },
  Bi = {
    Fd: 1.7,
    Ed: 1,
    Vd: 1.0017,
    Xd: 25
  },
  wi = {
    Fd: 1.7,
    Ed: 1,
    Vd: 1.0018,
    Xd: 15
  },
  xi = {
    Fd: 1.24,
    Ed: 1,
    Vd: 1.0002,
    Xd: 4
  },
  Qv = {
    Fd: 1.8,
    Ed: 15,
    Vd: 1.015,
    Xd: 15
  },
  Rv = {
    Fd: 1.8,
    Ed: 15,
    Vd: 1.015,
    Xd: 15
  },
  ex = {
    Fd: 1.7,
    Ed: 120,
    Vd: 1.018,
    Xd: 100
  },
  zs = {
    Fd: 1.02,
    Ed: 100,
    Vd: 1.01,
    Xd: 100
  },
  Eq = {
    Fd: 1.4,
    Ed: 250,
    Vd: 1.018,
    Xd: 100
  },
  qs = {
    Fd: 1.02,
    Ed: 50,
    Vd: 1.01,
    Xd: 100
  },
  vi = 20,
  Xw = 1.3,
  Ww = 1.5,
  Lw = 25,
  Kw = 25,
  Jw = 1,
  $v = 20,
  ax = 0.4,
  bx = 0.3,
  aw = 10,
  Ss = {
    t: 1,
    defaultValue: 1,
    lf: 0.1
  },
  ce = {
    t: 1,
    defaultValue: 1,
    lf: -0.1
  },
  As = {
    t: 1,
    defaultValue: 1,
    lf: -0.1
  },
  Dq = {
    t: 0,
    defaultValue: 0,
    lf: 10
  },
  tr = {
    t: 0,
    defaultValue: 0,
    lf: 1
  },
  Rs = {
    t: 0,
    defaultValue: 0,
    lf: 1
  },
  Ts = {
    t: 0,
    defaultValue: 0,
    lf: 120
  },
  Us = {
    t: 0,
    defaultValue: 0,
    lf: 20
  },
  Vs = {
    t: 0,
    defaultValue: 0,
    lf: 72E5
  },
  Ws = {
    t: 0,
    defaultValue: 0,
    lf: 0.01
  },
  Xs = {
    t: 0,
    defaultValue: 0,
    lf: -1
  },
  Ys = {
    t: 0,
    defaultValue: 0,
    lf: 1
  },
  Zs = {
    t: 0,
    defaultValue: 0,
    lf: 1
  },
  sr = 6,
  doubleKillsPotion = {
    t: 1,
    defaultValue: 1,
    nc: 2
  },
  doubleGoldDropValuePotion = {
    t: 1,
    defaultValue: 1,
    nc: 2
  },
  doubleExperiencePotion = {
    t: 1,
    defaultValue: 1,
    nc: 2
  },
  speedWalkerPotion = {
    t: 1,
    defaultValue: 1,
    nc: 1.25
  },
  fasterFarmingPotion = {
    t: !1,
    defaultValue: !1,
    nc: !0
  },
  fasterInfestationPotion = {
    t: !1,
    defaultValue: !1,
    nc: !0
  },
  infiniteScrollsPotion = {
    t: !1,
    defaultValue: !1,
    nc: !0
  },
  moreMonstersPotion = {
    t: 0,
    defaultValue: 0,
    nc: 10
  },
  guaranteedItemDropsPotion = {
    t: !1,
    defaultValue: !1,
    nc: !0
  },
  potionDurationPotion = {
    t: !1,
    defaultValue: !1,
    nc: !0
  },
  freeSpellCastingPotion = {
    t: !1,
    defaultValue: !1,
    nc: !0
  },
  moreKillsPerFarmPotion = {
    t: 1,
    defaultValue: 1,
    nc: 2
  },
  docileMonstersPotion = {
    t: !1,
    defaultValue: !1,
    nc: !0
  },
  higherItemValuesPotion = {
    t: 1,
    defaultValue: 1,
    nc: 1.2
  },
  frailMonstersPotion = {
    t: !1,
    defaultValue: !1,
    nc: !0
  },
  autoFiringScrollsPotion = {
    t: !1,
    defaultValue: !1,
    nc: !0
  },
  doubleGoldDropsPotion = {
    t: !1,
    defaultValue: !1,
    nc: !0
  },
  doubleItemDropsPotion = {
    t: !1,
    defaultValue: !1,
    nc: !0
  },
  randomTreasureRoomPotion = {
    t: !1,
    defaultValue: !1,
    nc: !0
  },
  randomBossEncounterPotion = {
    t: !1,
    defaultValue: !1,
    nc: !0
  },
  cx = 15,
  dx = 10,
  $g = 5,
  ah = 10,
  Zg = 5,
  E = {
    ls: {
      c: "itemDropChance",
      title: "More Item Drops",
      e: "Item drop per kill +2%",
      t: 40,
      xf: 40,
      $g: 2,
      md: 0,
      maxValue: 100,
      rd: 40,
      ah: 1,
      Pg: 11
    },
    Pj: {
      c: "maxMonstersPerRoom",
      title: "More Monsters",
      e: "Max monsters per room (+2)",
      t: 8,
      xf: 8,
      $g: 2,
      md: 0,
      maxValue: 50,
      rd: 100,
      ah: 2,
      Pg: 11
    },
    Ym: {
      c: "minMonstersPerRoom",
      title: "Average Monster Count",
      e: "Min monsters per room (+1)",
      t: 0,
      xf: 0,
      $g: 1,
      md: 0,
      maxValue: 50,
      rd: 140,
      ah: 2,
      Pg: 11
    },
    Yl: {
      c: "betterItemRarityChance",
      title: "Rare Item Drops",
      e: "Higher rare item drop chance (+2%)",
      t: 0,
      xf: 0,
      $g: 2,
      md: 0,
      maxValue: 30,
      rd: 120,
      ah: 3,
      Pg: 11
    },
    lp: {
      c: "itemLevelBonus",
      title: "Item Level Bonus",
      e: "Higher item level chance (+3%)",
      t: 0,
      xf: 0,
      $g: 3,
      md: 0,
      maxValue: 30,
      rd: 160,
      ah: 4,
      Pg: 11
    },
    ys: {
      c: "maxGoldPerDrop",
      title: "More Good Gold Drops",
      e: "Max Gold Dropped +25",
      t: 15,
      xf: 15,
      $g: 25,
      md: 0,
      maxValue: 2500,
      rd: 200,
      ah: 6,
      Pg: 11
    },
    As: {
      c: "minGoldPerDrop",
      title: "Less Bad Gold Drops",
      e: "Min Gold Dropped +10",
      t: 0,
      xf: 0,
      $g: 10,
      md: 0,
      maxValue: 2E3,
      rd: 300,
      ah: 10,
      Pg: 11
    },
    Lr: {
      c: "goldDropChance",
      title: "More Gold Drops",
      e: "Gold drop per kill +5%",
      t: 25,
      xf: 25,
      $g: 5,
      md: 0,
      maxValue: 100,
      rd: 200,
      ah: 5,
      Pg: 11
    },
    $s: {
      c: "scrollDropChance",
      title: "More Scroll Drops",
      e: "Scroll drop per kill +2%",
      t: 20,
      xf: 20,
      $g: 2,
      md: 0,
      maxValue: 40,
      rd: 200,
      ah: 7,
      Pg: 11
    },
    Ns: {
      c: "potionDropChance",
      title: "More Potion Drops",
      e: "Potion drop per kill +0.5%",
      t: 1,
      xf: 1,
      $g: 0.5,
      md: 0,
      maxValue: 5,
      rd: 300,
      ah: 8,
      Pg: 11
    },
    Et: {
      c: "treasureChestChance",
      title: "More Treasure Chests",
      e: "Chest per room +2%",
      t: 5,
      xf: 5,
      $g: 2,
      md: 0,
      maxValue: 20,
      rd: 340,
      ah: 9,
      Pg: 11
    }
  },
  Bs = 5,
  Uv = 0.1,
  Tv = 0.15,
  Vv = [0.8, 0.16, 0.036, 0.0036, 4E-4],
  Ov = [{
    Vp: 0,
    pp: 1,
    jp: 0.2
  }, {
    Vp: 1,
    pp: 1.2,
    jp: 0.5
  }, {
    Vp: 2,
    pp: 1.35,
    jp: 0.75
  }, {
    Vp: 3,
    pp: 1.5,
    jp: 0.9
  }, {
    Vp: 4,
    pp: 1.65,
    jp: 0.99
  }],
  lc = 170,
  kc = 60,
  wx = {},
  xx = E,
  yx, zx;
for (yx in xx) Object.prototype.hasOwnProperty.call(xx, yx) && (zx = xx[yx], zx.c ? wx[zx.c] ? console.log("setting object duplicate settingId: " + zx.c + " setting: " + yx) : wx[zx.c] = zx : console.log("setting object missing settingId: " + yx));

function Dg() {
  var a = E.As.t,
    b = Math.max(0, E.ys.t - a),
    c = doubleGoldDropValuePotion.t;
  return (a + k(b)) * c
};
var Ax = [new us(0), new us(1), new us(2), new us(3), new us(4)],
  Bx = [new rs(5), new ts(0, 5), new ts(1, 5), new ts(2, 5), new ts(3, 5), new ts(4, 5)],
  Cx = [new ns(E.Lr), new ns(E.ys), new ns(E.As), new ns(E.ls), new ns(E.$s), new ns(E.Ns), new ns(E.Yl), new ns(E.Pj), new ns(E.Ym), new ns(E.lp), new ns(E.Et)],
  Dx, Ex = [];
for (Dx = 0; Dx < Pq.length; Dx++) Ex.push(new Js(Pq[Dx].qg));
var Fx = [new ys, new Cs],
  Gx = [new Gs(0), new Gs(1), new Gs(2), new Gs(3)],
  Hx = [new ms(0), new ms(1), new ms(2), new ms(3)],
  Ix = [new Ls(0), new Ls(1), new Ls(2), new Ls(3)],
  Jx = [new Hs, new $s],
  Kx = new is([Cx, Fx], !0),
  Lx = new is([Ax], !1),
  Mx = new is([Jx, Ax, Bx, Cx, Fx, Gx, Hx, Ix, Ex], !0),
  Nx = [Kx, Lx, Mx];

function M(a) {
  return document.getElementById(a)
}

function P(a, b, c, d) {
  a = document.createElement(a);
  d && (a.className = d);
  c && (a.id = c);
  b && b.appendChild(a);
  return a
}

function Ox(a) {
  if (a = M(a))
    for (; a.firstChild;) a.removeChild(a.firstChild)
}

function Px(a) {
  if (a)
    for (; a.firstChild;) a.removeChild(a.firstChild)
}

function Qx(a) {
  a && (a.style.display = "none")
}

function Rx(a) {
  a && (a.style.display = "block")
}

function Sx(a) {
  Qx(M(a))
}

function Tx(a) {
  Rx(M(a))
}

function Ux(a, b) {
  var c = M(a);
  c && (c.innerHTML = b)
}

function Vx(a) {
  var b = document.createElement("th");
  a.appendChild(b);
  return b
}

function Wx(a, b, c) {
  a = a.insertRow(c);
  c = a.insertCell(0);
  c.className = "characteristicsTableLabel";
  c.innerHTML = b;
  return a.insertCell(1)
};

function Xx() {
  this.F = null;
  this.Vw = !1
}
Xx.prototype.Pm = function() {
  return this.Ya
};
Xx.prototype.J = function() {};
Xx.prototype.Xa = function() {
  if (this.F) {
    var a = this.Pm();
    this.Vw != a && ((this.Vw = a) ? Tx(this.F) : Sx(this.F));
    a && this.ba()
  }
};
Xx.prototype.ba = function() {};

function Yx() {
  this.Lg = null
}
Yx.prototype = new Xx;

function R(a, b) {
  b && (a.Lg || (a.Lg = []), a.Lg.push(b))
}
Yx.prototype.J = function() {
  Zx(this)
};
Yx.prototype.ba = function() {
  $x(this)
};

function Zx(a) {
  if (a.Lg) {
    var b;
    for (b = 0; b < a.Lg.length; b++) a.Lg[b].J()
  }
}

function $x(a) {
  if (a.Lg) {
    var b;
    for (b = 0; b < a.Lg.length; b++) a.Lg[b].Xa()
  }
};

function ay() {
  this.F = "gameContainer";
  this.Ya = !0;
  this.um = [0, 0, 0, 0, 0];
  this.Gh = [];
  this.Tc = [];
  this.Bd = null
}
ay.prototype = new Yx;
e = ay.prototype;
e.Me = function() {
  var a;
  for (a = 0; a < this.Tc.length; a++) this.Tc[a].Me()
};
e.Zd = function() {
  if (!w.Fe && w.lg) {
    var a;
    for (a = 0; a < this.Tc.length; a++) this.Tc[a].Zd()
  }
};
e.Ne = function() {
  if (!w.Fe && w.lg) {
    var a;
    for (a = 0; a < this.Tc.length; a++) this.Tc[a].Ne()
  }
};
e.Js = function() {
  this.Bd.Js();
  var a;
  for (a = 0; a < this.um.length; a++) this.um[a] = 0
};
e.J = function() {
  var a;
  for (a = 0; a < this.um.length; a++) this.um[a] = 0;
  Zx(this)
};
e.ba = function() {
  var a, b, c;
  for (a = 0; a < w.i.D.length; a++) b = w.i.D[a], c = this.tw(b), this.um[a] !== c && (this.um[a] = c, b = b.Kc.vg, 0 < c ? (this.Gh[a].label = b + " " + c, this.Gh[a].qh = !0) : (this.Gh[a].label = b, this.Gh[a].qh = !1));
  $x(this)
};
e.tw = function(a) {
  return a.Zi ? a.de + a.Ci : 0
};

function by() {
  this.Vu = !w.Mh;
  this.sl = null;
  this.F = "pauseButtonContainer";
  this.Ya = !0
}
by.prototype = new Xx;
by.prototype.ba = function() {
  this.sl || cy(this);
  this.Vu != w.Mh && ((this.Vu = w.Mh) ? (this.sl.innerHTML = "Resume", this.sl.className = "ownedUpgradeButton") : (this.sl.innerHTML = "Pause", this.sl.className = "upgradeButton"))
};

function cy(a) {
  a.sl = M("pauseButton");
  a.sl.onmouseup = function() {
    w.Mh = !w.Mh;
    return !1
  }
};

function dy(a, b) {
  this.label = a;
  this.qa = this.IC = b;
  this.qh = this.ha = !1
};

function ey(a) {
  this.C = a;
  this.tt = this.Kl = null;
  this.qa = !a.IC;
  this.ha = !a.ha;
  this.qh = !a.qh;
  this.gv = null
}
ey.prototype.J = function() {
  this.gv = null
};
ey.prototype.Xa = function() {
  var a = this.C.qa;
  this.qa !== a && ((this.qa = a) ? Rx(this.Kl) : Qx(this.Kl));
  if (a) {
    a = this.C.label;
    this.gv !== a && (this.gv = a, this.tt.innerHTML = a);
    var a = this.C.ha,
      b = this.C.qh;
    if (this.ha != a || this.qh != b) this.ha = a, this.qh = b, this.Kl.className = a ? b ? "selectedTab tabHighlighted" : "selectedTab" : b ? "tabHighlighted" : ""
  }
};

function fy(a, b, c) {
  a.Kl = P("li", b, null, null);
  a.qa || Qx(a.Kl);
  a.Kl.className = a.ha ? "selectedTab" : "";
  a.tt = P("a", a.Kl, null, null);
  a.tt.innerHTML = a.C.label;
  a.tt.onclick = function() {
    var b = a.C,
      f;
    for (f = 0; f < c.Fn.length; f++) c.Fn[f].ha = c.Fn[f] === b;
    return !1
  }
};

function gy(a) {
  this.F = a;
  this.Fn = [];
  this.Ll = []
}

function hy(a, b) {
  a.Fn.push(b)
}
gy.prototype.J = function() {
  iy(this)
};
gy.prototype.Xa = function() {
  var a;
  for (a = 0; a < this.Ll.length; a++) this.Ll[a].Xa()
};
gy.prototype.Js = function() {
  var a, b;
  for (a = 0; a < this.Ll.length; a++) b = this.Ll[a].C, b.qa = b.IC, b.qh = !1, b.ha = 0 === a
};

function iy(a) {
  Ox(a.F);
  var b = M(a.F);
  if (b) {
    var b = P("ul", b, null, null),
      c, d;
    0 < a.Ll.length && (a.Ll.length = 0);
    for (d = 0; d < a.Fn.length; d++) c = new ey(a.Fn[d]), fy(c, b, a), a.Ll.push(c)
  }
};

function jy() {
  this.C = null
}
jy.prototype = new Yx;
e = jy.prototype;
e.ba = function() {
  this.C.qa && this.C.ha && $x(this)
};
e.Pm = function() {
  return this.C.qa && this.C.ha
};
e.Me = function() {};
e.Zd = function() {};
e.Ne = function() {};

function ky(a, b, c, d) {
  this.F = a + "_" + c;
  this.Ya = !0;
  this.QA = a;
  this.H = b;
  this.Ag = null;
  this.GC = d;
  this.zo = this.W = null;
  this.ti = ""
}
ky.prototype = new Xx;
e = ky.prototype;
e.Rc = function(a) {
  this.H = a;
  this.Ag && this.Ag.Rc(a);
  this.GC || this.H.Oc() || this.W && Qx(this.W)
};
e.Pm = function() {
  return this.GC ? !0 : this.H && this.H.Oc()
};
e.J = function() {
  M(this.QA) && (this.W = null, ly(this), this.zo = this.Ag = null)
};

function ly(a) {
  var b = M(a.QA);
  a.ti = a.Ro();
  a.W = P("div", b, a.F, a.ti);
  a.W.onmouseup = function() {
    a.Qc();
    return !1
  }
}
e.Qc = function() {
  this.H.qc() && this.H.Qc()
};
e.ba = function() {
  var a = this.H.Na(),
    b = this.Ro();
  this.W || ly(this);
  this.zo !== a && (this.zo = a, this.Ag && this.zo !== this.Ag.Na() && (Px(this.W), this.Ag = null), this.Ag || (this.Ag = my(this, this.zo)), this.Ag && this.Ag.te());
  this.Ag && this.Ag.ba();
  this.ti !== b && (this.ti = b, this.W.className = b)
};
e.Ro = function() {
  return this.H.qc() ? "upgradeButton centeredElement topMargin" : this.H.He() ? "ownedUpgradeButton centeredElement topMargin" : "disabledUpgradeButton centeredElement topMargin"
};

function my(a, b) {
  switch (b) {
    case 1:
      return new ny(a.H, a.W);
    case 2:
      return new oy(a.H, a.W);
    case 3:
      return new py(a.H, a.W);
    case 4:
      return new qy(a.H, a.W);
    case Pi:
      return new ry(a.H, a.W);
    case 6:
      return new sy(a.H, a.W);
    case 7:
      return new ty(a.H, a.W);
    case 8:
      return new uy(a.H, a.W);
    case 9:
      return new vy(a.H, a.W);
    case 10:
      return new wy(a.H, a.W);
    case 11:
      return new xy(a.H, a.W);
    case 12:
      return new yy(a.H, a.W);
    case 13:
      return new zy(a.H, a.W);
    case 14:
      return new Ay(a.H, a.W);
    case 15:
      return new By(a.H, a.W);
    case 16:
      return new Cy(a.H,
        a.W);
    default:
      return null
  }
};

function ny(a, b) {
  this.H = a;
  this.W = b;
  this.Ii = this.Ji = this.Hi = this.rp = this.Lj = null;
  this.sa = !1;
  this.Lb = -1;
  this.gb = this.fb = null
}
e = ny.prototype;
e.Na = function() {
  return 1
};
e.J = function() {
  this.Lb = -1;
  this.gb = this.fb = null
};
e.Rc = function(a) {
  this.H = a
};
e.te = function() {
  this.Lj || this.eb();
  this.sa || (Rx(this.Lj), Rx(this.rp), this.sa = !0)
};
e.ba = function() {
  var a = this.H.Bb(),
    b = this.H.ib(),
    c = this.H.lb();
  this.Lb !== a && (this.Lb = a, this.Hi.innerHTML = r(a));
  this.gb !== b && (this.gb = b, this.Ji.innerHTML = b);
  this.fb !== c && (this.fb = c, this.Ii.innerHTML = c)
};
e.eb = function() {
  this.Lj = P("div", this.W, null, null);
  this.Lj.style.position = "relative";
  this.Lj.style.height = "30px";
  this.rp = P("div", this.W, null, null);
  this.rp.style.position = "relative";
  this.rp.style.height = "30px";
  var a = P("div", this.Lj, null, null);
  a.style.position = "absolute";
  a.style.right = "3px";
  a.style.top = "0";
  a.style.width = "30px";
  a.style.height = "100%";
  a.style.textAlign = "left";
  a.style.background = "url('spritesheet/terrain.png') -1302px -363px";
  a = P("img", a, null, null);
  a.src = "images/Transparent.gif";
  a.style.width =
    "100%";
  a.style.height = "15px";
  this.Hi = P("div", this.Lj, null, null);
  this.Hi.style.position = "absolute";
  this.Hi.style.right = "36px";
  this.Hi.style.top = "0";
  this.Hi.style.width = "40px";
  this.Hi.style.height = "25px";
  this.Hi.style.paddingTop = "5px";
  this.Hi.style.textAlign = "right";
  this.Ji = P("div", this.Lj, null, null);
  this.Ji.style.position = "absolute";
  this.Ji.style.right = "82px";
  this.Ji.style.top = "0";
  this.Ji.style.left = "3px";
  this.Ji.style.height = "25px";
  this.Ji.style.paddingTop = "5px";
  this.Ji.style.textAlign = "left";
  this.Ii =
    P("div", this.rp, null, null);
  this.Ii.style.position = "absolute";
  this.Ii.style.left = "3px";
  this.Ii.style.top = "0";
  this.Ii.style.right = "0";
  this.Ii.style.height = "25px";
  this.Ii.style.paddingTop = "5px";
  this.Ii.style.textAlign = "left"
};

function oy(a, b) {
  this.H = a;
  this.W = b;
  this.Sy = this.Py = this.Ry = this.Ty = this.hm = this.table = null;
  this.sa = !1;
  this.Iu = null;
  this.Ju = -1
}
e = oy.prototype;
e.Na = function() {
  return 2
};
e.J = function() {
  this.Iu = null;
  this.Ju = -1
};
e.Rc = function(a) {
  this.H = a
};
e.te = function() {
  this.table || this.eb();
  this.sa || (Rx(this.table), this.sa = !0)
};
e.ba = function() {
  if (this.H.Vo()) {
    var a = this.H.Vo(),
      b = a.K.Eb;
    if (this.Iu !== a || this.Ju != b) {
      this.Iu = a;
      this.Ju = b;
      var c = a.v(),
        d = a.Kc.Ma;
      this.hm.style.background = "url('spritesheet/monsters.png') -" + (c.ub + 10) + "px -" + (c.vb + 12) + "px";
      this.Ty.innerHTML = this.H.lb();
      this.aD.innerHTML = r(a.K.Am) + " XP";
      this.Ry.innerHTML = "Level " + (b + 1);
      this.Py.innerHTML = ", " + r(Ia(b + 1, sx, d.Cf)) + " HP";
      this.Sy.innerHTML = ", " + r(Ia(b + 1, tx, d.Ef)) + " SP"
    }
  } else console.log("bug in upgrade button")
};
e.eb = function() {
  this.table = P("table", this.W, null, null);
  this.table.style.width = "100%";
  var a = this.table.insertRow(0),
    b = this.table.insertRow(1),
    c = a.insertCell(0);
  c.style.width = "30px";
  c.style.height = "30px";
  c.style.verticalAlign = "top";
  this.hm = P("img", c, null, null);
  this.hm.className = "characterImage";
  this.hm.src = "images/Transparent.gif";
  this.hm.style.height = "30px";
  this.hm.style.width = "30px";
  c = a.insertCell(1);
  c.style.width = "180px";
  c.style.textAlign = "left";
  c.style.paddingLeft = "3px";
  this.Ty = P("span", c, null,
    null);
  a = a.insertCell(2);
  a.style.width = "40px";
  a.style.textAlign = "right";
  this.aD = P("span", a, null, null);
  b = b.insertCell(0);
  b.colSpan = 3;
  b.style.paddingLeft = "2px";
  b.style.textAlign = "left";
  b.style.verticalAlign = "middle";
  this.Ry = P("span", b, null, null);
  this.Py = P("span", b, null, null);
  this.Sy = P("span", b, null, null)
};

function py(a, b) {
  this.H = a;
  this.W = b;
  this.ks = this.iA = this.Fw = this.jA = this.Qm = this.kp = this.Bf = null;
  this.sa = !1;
  this.cv = null
}
e = py.prototype;
e.Na = function() {
  return 3
};
e.J = function() {
  this.cv = null
};
e.Rc = function(a) {
  this.H = a
};
e.te = function() {
  this.Bf || this.eb();
  this.sa || (Rx(this.Bf), this.sa = !0)
};
e.ba = function() {
  var a = this.H.Oz();
  if (this.cv !== a) {
    this.cv = a;
    var b = a.Uk(),
      c = a.nj.v();
    this.kp.style.background = "url('spritesheet/items.png') -" + b.ub + "px -" + b.vb + "px";
    this.jA.innerHTML = Lv(a);
    this.Fw.className = Dy(a.uf());
    this.Fw.innerHTML = " (" + Kv(a) + ")";
    this.Qm.style.background = "url('spritesheet/monsters.png') -" + (c.ub + 10) + "px -" + (c.vb + 12) + "px";
    this.iA.innerHTML = "Lvl " + a.ns;
    b = (b = a.nj.ef(a.r)) ? a.va - b.va : a.va;
    this.ks.innerHTML = 0 < b ? "+" + r(b) + " " + Jv(a) : r(b) + " " + Jv(a)
  }
};
e.eb = function() {
  this.Bf = P("table", this.W, null, null);
  this.Bf.style.width = "100%";
  var a = this.Bf.insertRow(0),
    b = this.Bf.insertRow(1),
    c = a.insertCell(0);
  c.style.width = "30px";
  c.style.height = "30px";
  c.style.textAlign = "center";
  this.kp = P("img", c, null, null);
  this.kp.src = "images/Transparent.gif";
  this.kp.style.width = "30px";
  this.kp.style.height = "30px";
  a = a.insertCell(1);
  a.style.textAlign = "left";
  a.colSpan = 2;
  this.jA = P("span", a, null, null);
  this.Fw = P("span", a, null, null);
  a = b.insertCell(0);
  a.style.width = "30px";
  a.style.height =
    "30px";
  a.style.verticalAlign = "top";
  this.Qm = P("img", a, null, null);
  this.Qm.className = "characterImage";
  this.Qm.src = "images/Transparent.gif";
  this.Qm.style.height = "30px";
  this.Qm.style.width = "30px";
  a = b.insertCell(1);
  a.style.width = "70px";
  a.style.paddingLeft = "2px";
  a.style.textAlign = "left";
  this.iA = P("span", a, null, null);
  b = b.insertCell(2);
  b.style.width = "140px";
  b.style.paddingLeft = "2px";
  b.style.textAlign = "right";
  this.ks = P("span", b, null, null);
  this.ks.style.marginLeft = "10px";
  this.ks.style.color = "#0A0"
};

function zy(a, b) {
  this.H = a;
  this.W = b;
  this.mf = this.we = this.mo = this.$e = null;
  this.sa = !1;
  this.oz = this.fb = ""
}
e = zy.prototype;
e.Na = function() {
  return 13
};
e.J = function() {
  this.gb = this.fb = ""
};
e.Rc = function(a) {
  this.H = a
};
e.te = function() {
  this.$e || this.eb();
  this.sa || (Rx(this.$e), this.sa = !0)
};
e.ba = function() {
  var a = this.H.lb(),
    b = this.H.ib();
  this.oz != b && (this.oz = b, this.we.innerHTML = b);
  this.fb != a && (this.fb = a, this.mf.innerHTML = a)
};
e.eb = function() {
  this.$e = P("table", this.W, null, null);
  this.$e.style.width = "100%";
  var a = this.$e.insertRow(0),
    b = this.$e.insertRow(1),
    c = a.insertCell(0);
  c.rowSpan = 2;
  c.style.width = "50px";
  c.style.height = "50px";
  c.style.textAlign = "center";
  this.mo = P("img", c, null, null);
  this.mo.src = "images/Transparent.gif";
  this.mo.style.width = "50px";
  this.mo.style.height = "50px";
  c = w.I.v(w.kb.Ny);
  this.mo.style.background = "url('spritesheet/terrain.png') -" + c.ub + "px -" + c.vb + "px";
  a = a.insertCell(1);
  a.style.textAlign = "left";
  this.we = P("span",
    a, null, null);
  this.we.innerHTML = this.H.ib();
  this.mf = b.insertCell(0);
  this.mf.colSpan = 2;
  this.mf.style.width = "200px";
  this.mf.style.textAlign = "left"
};

function qy(a, b) {
  this.H = a;
  this.W = b;
  this.IA = [];
  this.JA = [];
  this.Rw = [];
  this.Bf = null;
  this.sa = !1;
  this.sr = []
}
e = qy.prototype;
e.Na = function() {
  return 4
};
e.J = function() {
  this.sr.length = 0
};
e.Rc = function(a) {
  this.H = a
};
e.te = function() {
  this.Bf || this.eb();
  this.sa || (Rx(this.Bf), this.sa = !0)
};
e.ba = function() {
  var a = this.H.Nz(),
    b, c, d, f = Math.min(5, a.length);
  for (b = 0; b < f; b++)
    if (c = a[b], this.sr.length < b || this.sr[b] !== c) this.sr[b] = c, d = c.Uk(), this.IA[b].style.background = "url('spritesheet/items.png') -" + d.ub + "px -" + d.vb + "px", this.JA[b].innerHTML = Lv(c), this.Rw[b].className = Dy(c.uf()), this.Rw[b].innerHTML = " (" + Kv(c) + ")"
};
e.eb = function() {
  this.Bf = P("table", this.W, null, null);
  this.Bf.style.width = "100%";
  var a = this.Bf.insertRow(0).insertCell(0);
  a.colSpan = 2;
  a.style.textAlign = "left";
  a.innerHTML = "Equip All Item Upgrades";
  Ey(this, 1);
  Ey(this, 2);
  Ey(this, 3);
  Ey(this, 4);
  Ey(this, 5)
};

function Ey(a, b) {
  var c = a.Bf.insertRow(b),
    d = c.insertCell(0);
  d.style.width = "30px";
  d.style.height = "30px";
  d.style.textAlign = "center";
  d = P("img", d, null, null);
  d.src = "images/Transparent.gif";
  d.style.width = "30px";
  d.style.height = "30px";
  a.IA.push(d);
  c = c.insertCell(1);
  c.style.textAlign = "left";
  a.JA.push(P("span", c, null, null));
  a.Rw.push(P("span", c, null, null))
};

function ry(a, b) {
  this.H = a;
  this.W = b;
  this.sb = this.jb = this.kq = this.wn = null;
  this.sa = !1;
  this.gb = this.fb = null
}
e = ry.prototype;
e.Na = function() {
  return Pi
};
e.J = function() {
  this.gb = this.fb = null
};
e.Rc = function(a) {
  this.H = a
};
e.te = function() {
  this.wn || this.eb();
  this.sa || (Rx(this.wn), Rx(this.kq), this.sa = !0)
};
e.ba = function() {
  var a = this.H.ib(),
    b = this.H.lb();
  this.gb !== a && (this.gb = a, this.jb.innerHTML = a);
  this.fb !== b && (this.fb = b, this.sb.innerHTML = b)
};
e.eb = function() {
  this.wn = P("div", this.W, null, null);
  this.wn.style.position = "relative";
  this.wn.style.height = "30px";
  this.kq = P("div", this.W, null, null);
  this.kq.style.position = "relative";
  this.kq.style.height = "30px";
  this.jb = P("div", this.wn, null, null);
  this.jb.style.position = "absolute";
  this.jb.style.top = "0";
  this.jb.style.left = "3px";
  this.jb.style.right = "3px";
  this.jb.style.height = "25px";
  this.jb.style.paddingTop = "5px";
  this.jb.style.textAlign = "left";
  this.sb = P("div", this.kq, null, null);
  this.sb.style.position = "absolute";
  this.sb.style.left = "3px";
  this.sb.style.top = "0";
  this.sb.style.right = "0";
  this.sb.style.height = "25px";
  this.sb.style.paddingTop = "5px";
  this.sb.style.textAlign = "left"
};

function sy(a, b) {
  this.H = a;
  this.W = b;
  this.vu = this.Ml = this.yn = this.table = null;
  this.sa = !1;
  this.zn = this.Dx = this.Lv = null;
  this.nd = !0;
  this.De = this.oc = 0;
  this.qw = 8
}
e = sy.prototype;
e.Na = function() {
  return 6
};
e.J = function() {
  this.Lv = null
};
e.Rc = function(a) {
  this.H = a
};
e.te = function() {
  this.table || this.eb();
  this.sa || (Rx(this.table), this.sa = !0)
};
e.ba = function() {
  var a = this.H.uw();
  if (this.Lv !== a) {
    this.Lv = a;
    var b = a.ga;
    10 === b || 9 === b || 17 === b || 11 === b ? (a = kv[a.ta].d, this.Dx = w.fh, this.zn = w.fh.v(a), this.nd = !1, this.yn.style.background = "url('spritesheet/monsters.png') -" + (this.zn.ub + 10) + "px -" + (this.zn.vb + 12) + "px") : (a = a.ca, this.Dx = w.Dj.Yh[a], this.zn = w.Dj.Zg(a), this.De = this.oc = 0, this.nd = !0);
    this.Ml.innerHTML = this.H.ib();
    this.vu.innerHTML = this.H.lb()
  }
  this.nd && (this.De++, this.De >= this.qw && (this.De = 0, this.oc++, this.oc >= this.zn.To() && (this.oc = 0), a = this.zn.qq[this.oc],
    this.yn.style.background = "url('" + this.Dx.fileName + "') -" + a.qt + "px -" + a.rt + "px"))
};
e.eb = function() {
  this.table = P("table", this.W, null, null);
  this.table.style.width = "100%";
  this.table.style.height = "60px";
  var a = this.table.insertRow(0),
    b = this.table.insertRow(1),
    c = a.insertCell(0),
    a = a.insertCell(1);
  c.style.width = "29px";
  c.style.height = "29px";
  c.style.textAlign = "center";
  a.style.width = "180px";
  a.style.textAlign = "left";
  this.yn = P("img", c, null, null);
  this.yn.src = "images/Transparent.gif";
  this.yn.style.width = "29px";
  this.yn.style.height = "29px";
  this.Ml = P("span", a, null, null);
  this.Ml.style.paddingTop =
    "5px";
  this.Ml.style.textAlign = "left";
  b = b.insertCell(0);
  b.colSpan = 2;
  b.style.textAlign = "left";
  this.vu = P("span", b, null, null);
  this.vu.style.paddingTop = "5px"
};

function ty(a, b) {
  this.H = a;
  this.W = b;
  this.ej = this.fj = this.dj = this.Dq = this.kk = null;
  this.sa = !1;
  this.Lb = -1;
  this.gb = this.fb = null
}
e = ty.prototype;
e.Na = function() {
  return 7
};
e.J = function() {
  this.Lb = -1;
  this.gb = this.fb = null
};
e.Rc = function(a) {
  this.H = a
};
e.te = function() {
  this.kk || this.eb();
  this.sa || (Rx(this.kk), Rx(this.Dq), this.sa = !0)
};
e.ba = function() {
  var a = this.H.Bb(),
    b = this.H.ib(),
    c = this.H.lb();
  this.Lb !== a && (this.Lb = a, this.dj.innerHTML = r(a));
  this.gb !== b && (this.gb = b, this.fj.innerHTML = b);
  this.fb !== c && (this.fb = c, this.ej.innerHTML = c)
};
e.eb = function() {
  this.kk = P("div", this.W, null, null);
  this.kk.style.position = "relative";
  this.kk.style.height = "30px";
  this.Dq = P("div", this.W, null, null);
  this.Dq.style.position = "relative";
  this.Dq.style.height = "30px";
  var a = P("div", this.kk, null, null);
  a.style.position = "absolute";
  a.style.right = "3px";
  a.style.top = "0";
  a.style.width = "30px";
  a.style.height = "100%";
  a.style.textAlign = "left";
  a.style.background = "url('spritesheet/items.png') -1464px -73px";
  a = P("img", a, null, null);
  a.src = "images/Transparent.gif";
  a.style.width =
    "100%";
  a.style.height = "15px";
  this.dj = P("div", this.kk, null, null);
  this.dj.style.position = "absolute";
  this.dj.style.right = "36px";
  this.dj.style.top = "0";
  this.dj.style.width = "40px";
  this.dj.style.height = "25px";
  this.dj.style.paddingTop = "5px";
  this.dj.style.textAlign = "right";
  this.fj = P("div", this.kk, null, null);
  this.fj.style.position = "absolute";
  this.fj.style.right = "82px";
  this.fj.style.top = "0";
  this.fj.style.left = "3px";
  this.fj.style.height = "25px";
  this.fj.style.paddingTop = "5px";
  this.fj.style.textAlign = "left";
  this.ej =
    P("div", this.Dq, null, null);
  this.ej.style.position = "absolute";
  this.ej.style.left = "3px";
  this.ej.style.top = "0";
  this.ej.style.right = "0";
  this.ej.style.height = "25px";
  this.ej.style.paddingTop = "5px";
  this.ej.style.textAlign = "left"
};

function uy(a, b) {
  this.H = a;
  this.W = b;
  this.ui = this.Vg = this.we = this.Nd = this.bf = this.Cq = null;
  this.sa = !1;
  this.Lb = -1
}
e = uy.prototype;
e.Na = function() {
  return 8
};
e.J = function() {
  this.Lb = -1;
  this.ui = null
};
e.Rc = function(a) {
  this.H = a
};
e.te = function() {
  this.bf || this.eb();
  this.sa || (Rx(this.bf), this.sa = !0)
};
e.ba = function() {
  var a = this.H.Bb(),
    b = this.H.Wo();
  this.Lb !== a && (this.Lb = a, this.Cq.innerHTML = r(a));
  this.ui !== b && (this.ui = b) && (a = w.I.v(b.Fo), this.Nd.style.background = "url('spritesheet/terrain.png') -" + a.ub + "px -" + a.vb + "px", this.Vg.innerHTML = b.Eo)
};
e.eb = function() {
  this.bf = P("table", this.W, null, null);
  this.bf.style.width = "100%";
  var a = this.bf.insertRow(0),
    b = this.bf.insertRow(1),
    c = a.insertCell(0);
  c.rowSpan = 2;
  c.style.width = "50px";
  c.style.height = "50px";
  c.style.textAlign = "center";
  this.Nd = P("img", c, null, null);
  this.Nd.src = "images/Transparent.gif";
  this.Nd.style.width = "50px";
  this.Nd.style.height = "50px";
  c = a.insertCell(1);
  c.style.textAlign = "left";
  this.we = P("span", c, null, null);
  this.we.innerHTML = this.H.ib();
  c = a.insertCell(2);
  this.Cq = P("span", c, null, null);
  a = a.insertCell(3);
  a.style.width = "30px";
  a = P("div", a, null, null);
  a.style.width = "30px";
  a.style.height = "100%";
  a.style.textAlign = "left";
  a.style.background = "url('spritesheet/items.png') -1464px -73px";
  a = P("img", a, null, null);
  a.src = "images/Transparent.gif";
  a.style.width = "100%";
  a.style.height = "15px";
  this.Vg = b.insertCell(0);
  this.Vg.colSpan = 3;
  this.Vg.style.width = "200px";
  this.Vg.style.textAlign = "left"
};

function yy(a, b) {
  this.H = a;
  this.W = b;
  this.tm = this.dq = this.we = this.Vh = this.sn = this.Cq = null;
  this.sa = !1;
  this.Az = null;
  this.Lb = -1
}
e = yy.prototype;
e.Na = function() {
  return 12
};
e.J = function() {
  this.Lb = -1;
  this.tm = null
};
e.Rc = function(a) {
  this.H = a
};
e.te = function() {
  this.sn || this.eb();
  this.sa || (Rx(this.sn), this.sa = !0)
};
e.ba = function() {
  var a = this.H.Bb(),
    b = this.H.Pz(),
    c = this.H.ib(),
    d = this.H.lb();
  this.Lb !== a && (this.Lb = a, this.Cq.innerHTML = r(a));
  this.tm !== b && (this.tm = b) && (a = b.Wh, this.Vh.style.background = "url('spritesheet/items.png') -" + a.ub + "px -" + a.vb + "px");
  this.gb !== c && (this.gb = c, this.dq.innerHTML = c);
  this.Az !== d && (this.Az = d, this.we.innerHTML = this.H.lb())
};
e.eb = function() {
  this.sn = P("table", this.W, null, null);
  this.sn.style.width = "100%";
  var a = this.sn.insertRow(0),
    b = this.sn.insertRow(1),
    c = a.insertCell(0);
  c.rowSpan = 2;
  c.style.width = "30px";
  c.style.height = "30px";
  c.style.textAlign = "center";
  this.Vh = P("img", c, null, null);
  this.Vh.src = "images/Transparent.gif";
  this.Vh.style.width = "30px";
  this.Vh.style.height = "30px";
  c = a.insertCell(1);
  c.style.textAlign = "left";
  this.we = P("span", c, null, null);
  this.we.innerHTML = this.H.ib();
  c = a.insertCell(2);
  this.Cq = P("span", c, null, null);
  a = a.insertCell(3);
  a.style.width = "30px";
  a = P("div", a, null, null);
  a.style.width = "30px";
  a.style.height = "100%";
  a.style.textAlign = "left";
  a.style.background = "url('spritesheet/items.png') -1464px -73px";
  a = P("img", a, null, null);
  a.src = "images/Transparent.gif";
  a.style.width = "100%";
  a.style.height = "15px";
  this.dq = b.insertCell(0);
  this.dq.colSpan = 3;
  this.dq.style.width = "200px";
  this.dq.style.textAlign = "left"
};

function vy(a, b) {
  this.H = a;
  this.W = b;
  this.ui = this.Vg = this.we = this.Nd = this.Cm = this.Uz = null;
  this.sa = !1;
  this.Gk = -1
}
e = vy.prototype;
e.Na = function() {
  return 9
};
e.J = function() {
  this.Gk = -1
};
e.Rc = function(a) {
  this.H = a
};
e.te = function() {
  this.Cm || this.eb();
  this.sa || (Rx(this.Cm), this.sa = !0)
};
e.ba = function() {
  var a = w.Aa.Sd;
  this.Gk !== a && (this.Gk = a, this.Uz.innerHTML = "+" + r(a))
};
e.eb = function() {
  this.Cm = P("table", this.W, null, null);
  this.Cm.style.width = "100%";
  var a = this.Cm.insertRow(0),
    b = this.Cm.insertRow(1),
    c = a.insertCell(0);
  c.rowSpan = 2;
  c.style.width = "50px";
  c.style.height = "50px";
  c.style.textAlign = "center";
  this.Nd = P("img", c, null, null);
  this.Nd.src = "images/Transparent.gif";
  this.Nd.style.width = "50px";
  this.Nd.style.height = "50px";
  c = w.I.v("L2_DungeonE.PNG");
  this.Nd.style.background = "url('spritesheet/terrain.png') -" + c.ub + "px -" + c.vb + "px";
  c = a.insertCell(1);
  c.style.textAlign = "left";
  c.style.width = "150px";
  this.we = P("span", c, null, null);
  this.we.innerHTML = this.H ? this.H.ib() : "Harvest Dungeon";
  c = a.insertCell(2);
  this.Uz = P("span", c, null, null);
  a = a.insertCell(3);
  a.style.width = "30px";
  a = P("div", a, null, null);
  a.style.width = "30px";
  a.style.height = "100%";
  a.style.textAlign = "left";
  a.style.background = "url('spritesheet/terrain.png') -1302px -363px";
  a = P("img", a, null, null);
  a.src = "images/Transparent.gif";
  a.style.width = "100%";
  a.style.height = "15px";
  b = b.insertCell(0);
  b.colSpan = 3;
  b.style.textAlign = "left";
  b.innerHTML = this.H ? this.H.lb() : "Collect Farmed Kills"
};

function wy(a, b) {
  this.H = a;
  this.W = b;
  this.ui = this.Vg = this.we = this.Nd = this.Hm = this.Tz = null;
  this.sa = !1;
  this.Dk = -1
}
e = wy.prototype;
e.Na = function() {
  return 10
};
e.J = function() {
  this.Dk = -1
};
e.Rc = function(a) {
  this.H = a
};
e.te = function() {
  this.Hm || this.eb();
  this.sa || (Rx(this.Hm), this.sa = !0)
};
e.ba = function() {
  var a = w.ug.ni;
  this.Dk !== a && (this.Dk = a, this.Tz.innerHTML = "+" + r(a))
};
e.eb = function() {
  this.Hm = P("table", this.W, null, null);
  this.Hm.style.width = "100%";
  var a = this.Hm.insertRow(0),
    b = this.Hm.insertRow(1),
    c = a.insertCell(0);
  c.rowSpan = 2;
  c.style.width = "50px";
  c.style.height = "50px";
  c.style.textAlign = "center";
  this.Nd = P("img", c, null, null);
  this.Nd.src = "images/Transparent.gif";
  this.Nd.style.width = "50px";
  this.Nd.style.height = "50px";
  c = w.I.v("L2_Terrain077.PNG");
  this.Nd.style.background = "url('spritesheet/terrain.png') -" + c.ub + "px -" + c.vb + "px";
  c = a.insertCell(1);
  c.style.textAlign = "left";
  c.style.width = "150px";
  this.we = P("span", c, null, null);
  this.we.innerHTML = this.H ? this.H.ib() : "Collect Item Gold";
  c = a.insertCell(2);
  this.Tz = P("span", c, null, null);
  a = a.insertCell(3);
  a.style.width = "30px";
  a = P("div", a, null, null);
  a.style.width = "30px";
  a.style.height = "100%";
  a.style.textAlign = "left";
  a.style.background = "url('spritesheet/items.png') -1464px -73px";
  a = P("img", a, null, null);
  a.src = "images/Transparent.gif";
  a.style.width = "100%";
  a.style.height = "15px";
  b = b.insertCell(0);
  b.colSpan = 3;
  b.style.textAlign = "left";
  b.innerHTML = this.H ? this.H.lb() : "Gold from sold items"
};

function xy(a, b) {
  this.H = a;
  this.W = b;
  this.jr = this.hr = this.gr = this.ir = this.cn = this.an = this.$m = this.bn = 0;
  this.lr = this.Sq = this.Rq = this.kr = this.sb = this.jb = this.pi = this.Zm = this.table = null;
  this.sa = !1;
  this.Lb = -1;
  this.gb = this.Bs = null;
  this.vi = -1
}
e = xy.prototype;
e.Na = function() {
  return 11
};
e.J = function() {
  this.Lb = -1;
  this.gb = this.Bs = null;
  this.vi = -1;
  this.cn = this.an = this.$m = this.bn = this.jr = this.hr = this.ir = this.gr = 0
};
e.Rc = function(a) {
  this.H = a;
  this.Lb = -1;
  this.gb = this.Bs = null;
  this.vi = -1;
  this.cn = this.an = this.$m = this.bn = this.jr = this.hr = this.ir = this.gr = 0
};
e.te = function() {
  this.table || this.eb();
  this.sa || (Rx(this.table), this.sa = !0)
};
e.ba = function() {
  var a = this.H.Bb(),
    b = this.H.ib(),
    c = this.H.Kr();
  this.Lb != a && (this.Lb = a, this.pi.innerHTML = r(a));
  this.gb != b && (this.gb = b, this.jb.innerHTML = b);
  this.vi != c && (this.vi = c, a = Math.max(1, 10 * (this.vi - 1)) + 1, this.bn = Ia(a, yi, 1), this.$m = Ia(a, zi, 1), this.an = Ia(a, Ai, 1), this.cn = Ia(a, Bi, 1), this.kr.innerHTML = r(this.bn) + " DMG", this.Rq.innerHTML = r(this.$m) + " ARM", this.Sq.innerHTML = r(this.an) + " ATK", this.lr.innerHTML = r(this.cn) + " DEF", c = Th(w.ob, c), c = c[k(c.length)].ll, this.Zm.style.background = "url('spritesheet/monsters.png') -" +
    (c.ub + 10) + "px -" + (c.vb + 12) + "px");
  for (var d, f = 0, g = 0, h = 0, l = 0, c = vs(), a = this.H.Kr(), b = 0; b < w.i.D.length; b++) d = w.i.D[b].K, f += $h(d.sd), g += $h(d.je), h += $h(d.xe), l += $h(d.Ae);
  f = m(f / w.i.D.length);
  g = m(g / w.i.D.length);
  h = m(h / w.i.D.length);
  l = m(l / w.i.D.length);
  this.ir !== f && (this.Rq.style.color = this.$m >= f ? "#F00" : "#0A0", this.ir = f);
  this.gr !== g && (this.kr.style.color = this.bn >= g ? "#F00" : "#0A0", this.gr = g);
  this.hr !== h && (this.lr.style.color = this.cn >= h ? "#F00" : "#0A0", this.hr = h);
  this.jr !== l && (this.Sq.style.color = this.an >= l ? "#F00" :
    "#0A0", this.jr = l);
  b = (f > this.$m ? 1 : 0) + (g > this.bn ? 1 : 0) + (h > this.cn ? 1 : 0) + (l > this.an ? 1 : 0);
  c = c < a ? "Min Character Level Required: " + a : 4 === b ? "Assessment: Easy Monsters" : 3 === b ? "Assessment: Challenging" : 2 === b ? "Assessment: Very Tough!" : "Assessment: TOO HARD!";
  this.Bs !== c && (this.Bs = c, this.sb.innerHTML = c)
};
e.eb = function() {
  this.table = P("table", this.W, null, null);
  this.table.style.width = "100%";
  var a = this.table.insertRow(0),
    b = this.table.insertRow(1),
    c = this.table.insertRow(2),
    d = a.insertCell(0),
    f = a.insertCell(1),
    a = a.insertCell(2),
    b = b.insertCell(0);
  d.style.width = "190px";
  f.style.width = "40px";
  f.style.textAlign = "right";
  f.style.paddingTop = "0";
  a.style.width = "30px";
  a.style.height = "30px";
  b.style.height = "20px";
  b.colSpan = 4;
  a = P("div", a, null, null);
  a.style.width = "30px";
  a.style.height = "100%";
  a.style.textAlign = "left";
  a.style.background =
    "url('spritesheet/terrain.png') -1302px -363px";
  a = P("img", a, null, null);
  a.src = "images/Transparent.gif";
  a.style.width = "100%";
  a.style.height = "15px";
  this.pi = P("span", f, null, null);
  this.pi.style.width = "40px";
  this.pi.style.height = "25px";
  this.jb = P("div", d, null, null);
  this.jb.style.textAlign = "left";
  this.sb = P("div", b, null, null);
  this.sb.style.textAlign = "left";
  c = c.insertCell(0);
  c.colSpan = 3;
  c = P("table", c, null, null);
  c.style.width = "100%";
  d = c.insertRow(0);
  c = c.insertRow(1);
  f = d.insertCell(0);
  b = d.insertCell(1);
  d = d.insertCell(2);
  f.rowSpan = 2;
  f.style.width = "30px";
  f.style.height = "30px";
  b.style.width = "100px";
  b.style.textAlign = "right";
  d.style.width = "100px";
  d.style.textAlign = "right";
  this.Zm = P("img", f, null, null);
  this.Zm.className = "characterImage";
  this.Zm.src = "images/Transparent.gif";
  this.Zm.style.height = "30px";
  this.Zm.style.width = "30px";
  this.kr = P("span", b, null, null);
  this.kr.style.marginLeft = "3px";
  this.Sq = P("span", d, null, null);
  this.Sq.style.marginLeft = "15px";
  d = c.insertCell(0);
  c = c.insertCell(1);
  d.style.width = "100px";
  d.style.textAlign =
    "right";
  c.style.width = "100px";
  c.style.textAlign = "right";
  this.Rq = P("span", d, null, null);
  this.Rq.style.marginLeft = "3px";
  this.lr = P("span", c, null, null);
  this.lr.style.marginLeft = "15px"
};

function Ay(a, b) {
  this.H = a;
  this.W = b;
  this.sb = this.jb = null;
  this.sa = !1;
  this.gb = this.fb = null
}
e = Ay.prototype;
e.Na = function() {
  return 14
};
e.J = function() {
  this.gb = this.fb = null
};
e.Rc = function(a) {
  this.H = a
};
e.te = function() {
  this.jb || this.eb();
  this.sa || (Rx(this.jb), Rx(this.sb), this.sa = !0)
};
e.ba = function() {
  var a = this.H.ib(),
    b = this.H.lb();
  this.gb !== a && (this.gb = a, this.jb.innerHTML = a);
  this.fb !== b && (this.fb = b, this.sb.innerHTML = b)
};
e.eb = function() {
  var a = P("div", this.W, null, null);
  a.style.padding = "5px";
  a.style.color = "#FA0";
  a.style.fontWeight = "bold";
  a.innerHTML = "Achievement!";
  this.jb = P("div", this.W, null, null);
  this.jb.style.padding = "5px";
  this.sb = P("div", this.W, null, null);
  this.sb.style.padding = "5px"
};

function By(a, b) {
  this.H = a;
  this.W = b;
  this.sb = this.jb = null;
  this.sa = !1;
  this.gb = this.fb = null
}
e = By.prototype;
e.Na = function() {
  return 15
};
e.J = function() {
  this.gb = this.fb = null
};
e.Rc = function(a) {
  this.H = a
};
e.te = function() {
  this.jb || this.eb();
  this.sa || (Rx(this.jb), Rx(this.sb), this.sa = !0)
};
e.ba = function() {
  var a = this.H.ib(),
    b = this.H.lb();
  this.gb !== a && (this.gb = a, this.jb.innerHTML = a);
  this.fb !== b && (this.fb = b, this.sb.innerHTML = b)
};
e.eb = function() {
  this.jb = P("div", this.W, null, null);
  this.jb.style.padding = "5px";
  this.sb = P("div", this.W, null, null);
  this.sb.style.padding = "5px"
};

function Cy(a, b) {
  this.H = a;
  this.W = b;
  this.pi = this.sb = this.jb = null;
  this.sa = !1;
  this.gb = this.fb = null;
  this.Lb = -1
}
e = Cy.prototype;
e.Na = function() {
  return 16
};
e.J = function() {
  this.gb = this.fb = null;
  this.Lb = -1
};
e.Rc = function(a) {
  this.H = a
};
e.te = function() {
  this.jb || this.eb();
  this.sa || (Rx(this.jb), Rx(this.sb), Rx(this.pi), this.sa = !0)
};
e.ba = function() {
  var a = this.H.ib(),
    b = this.H.lb(),
    c = this.H.Bb();
  this.gb != a && (this.gb = a, this.jb.innerHTML = a);
  this.fb != b && (this.fb = b, this.sb.innerHTML = b);
  this.Lb != c && (this.Lb = c, this.pi.innerHTML = xa(c) + " AP")
};
e.eb = function() {
  this.jb = P("div", this.W, null, null);
  this.jb.style.padding = "5px";
  this.sb = P("div", this.W, null, null);
  this.sb.style.padding = "5px";
  this.pi = P("div", this.W, null, null);
  this.pi.style.padding = "5px"
};

function Fy(a, b, c) {
  this.F = a;
  this.Ya = !0;
  this.py = b;
  this.mj = -100;
  this.gj = [];
  var d = b.Ha;
  for (b = 0; b < d.length; b++) this.gj.push(new ky(a, d[b], b, c))
}
Fy.prototype = new Xx;
Fy.prototype.J = function() {
  Ox(this.F);
  var a;
  for (a = 0; a < this.gj.length; a++) this.gj[a].J();
  var b = this.py.Ha;
  for (a = 0; a < this.gj.length; a++) this.gj[a].Rc(b[a]);
  this.mj = -100
};
Fy.prototype.ba = function() {
  var a;
  a = this.py.mj;
  if (this.mj !== a) {
    this.mj = a;
    var b = this.py.Ha;
    for (a = 0; a < this.gj.length; a++) this.gj[a].Rc(b[a])
  }
  for (a = 0; a < this.gj.length; a++) this.gj[a].Xa()
};

function Dy(a) {
  switch (a) {
    case 1:
      return "itemRarityUncommon";
    case 2:
      return "itemRarityRare";
    case 3:
      return "itemRarityHistoric";
    case 4:
      return "itemRarityAncient"
  }
  return "itemRarityCommon"
};

function Gy() {
  this.nd = this.ee = null;
  this.vr = this.ur = this.oc = 0;
  this.pt = !1;
  this.alpha = this.am = this.$q = this.Zq = 0
}

function Hy(a) {
  a.pt = !1;
  a.ee = null;
  a.nd = null;
  a.ur = 1E5;
  a.vr = 0
}
Gy.prototype.ac = function() {
  return this.ur - this.vr
};

function Iy(a, b, c, d, f, g, h) {
  a.ee = b;
  a.ur = c;
  a.Zq = d;
  a.$q = f;
  a.am = g;
  a.alpha = h;
  a.pt = !0
}

function Jy(a, b, c, d, f, g, h, l) {
  a.nd = b;
  a.oc = c;
  a.ur = d;
  a.Zq = f;
  a.$q = g;
  a.am = h;
  a.alpha = l;
  a.pt = !0
}
Gy.prototype.If = function(a) {
  if (this.pt) {
    0 < this.alpha && (a.save(), a.globalAlpha = 0.4);
    var b;
    if (this.ee) b = this.ee.Ad.ue, a.drawImage(this.ee.Hj(), this.ee.ub, this.ee.vb, b, b, this.Zq, this.$q, this.am, this.am);
    else if (this.nd) {
      var c = this.nd.qq[this.oc];
      b = this.nd.Ad.ue;
      a.drawImage(this.nd.Hj(), c.qt, c.rt, b, b, this.Zq, this.$q, this.am, this.am)
    }
    0 < this.alpha && a.restore()
  }
};

function Ky() {
  this.FE = function(a, b) {
    return a.ac() - b.ac()
  };
  this.ko = new Za;
  this.Hl = [];
  this.Bn = 0;
  this.context = null
}
e = Ky.prototype;
e.hB = function(a) {
  this.context = a;
  for (a = this.Bn = 0; a < this.Hl.length; a++) Hy(this.Hl[a]);
  var b = w.iu / 2,
    c = 2 * w.Yq;
  w.wb ? (a = w.S.he + (0.5 * (b - w.Sf) + (c - w.Tf)) | 0, b = w.S.ie + (c - w.Tf - 0.5 * (b - w.Sf)) | 0) : (a = w.Ba.Ki + (0.5 * (b - w.Sf) + (c - w.Tf)) | 0, b = w.Ba.Li + (c - w.Tf - 0.5 * (b - w.Sf)) | 0);
  t(this.ko, a, b)
};

function Ly(a) {
  var b;
  a.Bn >= a.Hl.length ? (b = new Gy, a.Hl.push(b)) : b = a.Hl[a.Bn];
  a.Bn++;
  return b
}
e.dk = function(a, b, c, d, f, g, h) {
  a && (b = Jb(this.ko, b, c), Iy(Ly(this), a, b, d, f, g, h))
};
e.gx = function(a, b, c, d, f, g, h) {
  a && (b = Jb(this.ko, b, c), c = Ly(this), Iy(c, a, b, d, f, g, h), c.vr = 0.1)
};
e.fB = function(a, b, c, d, f, g, h, l) {
  a && (c = Jb(this.ko, c, d), Jy(Ly(this), a, b, c, f, g, h, l))
};
e.fx = function(a, b, c, d, f, g, h, l) {
  a && (c = Jb(this.ko, c, d), d = Ly(this), Jy(d, a, b, c, f, g, h, l), d.vr = 0.1)
};
e.hx = function() {
  2 > this.Bn || this.Hl.sort(this.FE);
  var a;
  for (a = this.Bn - 1; 0 <= a; a--) this.Hl[a].If(this.context)
};

function My() {
  this.context = null;
  this.uB = new Gy
}
e = My.prototype;
e.hB = function(a) {
  this.context = a
};

function Ny(a) {
  Hy(a.uB);
  return a.uB
}
e.dk = function(a, b, c, d, f, g, h) {
  a && (b = Ny(this), Iy(b, a, 0, d, f, g, h), b.If(this.context))
};
e.gx = function(a, b, c, d, f, g, h) {
  a && (b = Ny(this), Iy(b, a, 0, d, f, g, h), b.If(this.context))
};
e.fB = function(a, b, c, d, f, g, h, l) {
  a && (c = Ny(this), Jy(c, a, b, 0, f, g, h, l), c.If(this.context))
};
e.fx = function(a, b, c, d, f, g, h, l) {
  a && (c = Ny(this), Jy(c, a, b, 0, f, g, h, l), c.If(this.context))
};
e.hx = function() {};

function Oy(a) {
  this.context = a;
  this.se = null;
  this.uE = new Ky;
  this.DD = new My
}
Oy.prototype.If = function(a, b, c) {
  if (a) {
    var d = a.Ad.ue;
    this.context.drawImage(a.Hj(), a.ub, a.vb, d, d, b, c, d, d)
  }
};

function Py(a, b, c, d) {
  for (; c < d; c++) {
    var f = a,
      g = w.S.hb(c, b);
    if (g) {
      var h;
      h = w.vl;
      h = w.Sf + (c - h.vk - (b - h.wk)) * w.B - h.zt;
      var l;
      l = w.vl;
      l = w.Tf + (c - l.vk + (b - l.wk)) * w.Nh - l.At;
      f.If(g.Jn, h, l);
      var n = g.Yf;
      n && f.se.dk(n, g.dc(), g.ec(), h, l, n.Ad.ue, 0)
    }
  }
}

function Qy(a, b, c, d) {
  for (; c < d; c++) {
    var f = a,
      g = w.Ba.hb(c, b);
    if (g && g.Rb !== rg) {
      var h;
      h = w.vl;
      h = w.Sf + (c - h.vk - (b - h.wk)) * w.B - h.zt;
      var l;
      l = w.vl;
      l = w.Tf + (c - l.vk + (b - l.wk)) * w.Nh - l.At;
      f.If(g.Jn, h, l);
      var n = g.Yf;
      n && f.se.dk(n, g.Ob(), g.Pb(), h, l, n.Ad.ue, 0);
      (n = g.bt) && f.se.gx(n, g.Ob(), g.Pb(), h, l, n.Ad.ue, 0)
    }
  }
}

function Ry(a, b) {
  var c, d, f, g;
  for (g = b.length - 1; 0 <= g; g--) c = b[g], d = c.p.dc(), f = c.p.ec(), c = c.v(), a.se.dk(c, d, f, w.Sf + (d - w.S.he - (f - w.S.ie)), w.Tf + 0.5 * (d - w.S.he + (f - w.S.ie)), c.Ad.ue, 0)
}

function Sy(a, b) {
  var c, d, f, g, h, l = !1,
    n;
  for (n = b.length - 1; 0 <= n; n--) c = b[n], d = c.p.Ob(), f = c.p.Pb(), g = th(d, f), h = uh(d, f), l = c.Ja.wg, c = c.v(), a.se.dk(c, d, f, g, h, c.Ad.ue, l ? 0.4 : 0)
}

function Ty(a, b) {
  var c, d, f, g, h, l, n, p, s, u, y;
  for (c = 0; c < b.length; c++)
    if (f = b[c], !f.Va)
      for (y = !1, p = f.Ja.of, d = 0; d < p.length; d++)
        if (s = p[d], s.Pd && (s = s.hD)) u = p[d].Od, y || (g = f.p.Ob(), h = f.p.Pb(), l = th(g, h) + 10, n = uh(g, h) + 10, y = !0), a.se.fx(s, u, g, h, l, n, s.Ad.ue, 0)
}

function Uy(a) {
  var b, c, d;
  d = w.pc.al;
  if (0 !== d.length)
    for (a.context.font = "12px Georgia", b = 0; b < d.length; b++) c = d[b], a.context.fillStyle = c.SE, a.context.fillText(c.text, c.xt, c.yt)
}

function Vy(a, b, c, d) {
  b = b.ck;
  var f, g;
  g = w.Pe;
  var h = g.Rh,
    l = g.Sh,
    n;
  for (g = 0; g < b.length; g++) f = b[g], n = c * (f.Hd - h), f = d * (f.Id - l), a.context.fillRect(n, f, c, d)
}

function Wy(a, b, c) {
  var d, f, g, h, l;
  for (d = 0; d < b.length; d++) l = b[d], l.Va || (f = l.p.Ob(), g = l.p.Pb(), h = th(f, g), f = uh(f, g), g = l.K, l = g.Sa, g = $h(g.Jb), l === g ? (a.context.fillStyle = c, a.context.fillRect(h + 10, f + 0, 30, 4)) : (a.context.fillStyle = "white", a.context.fillRect(h + 10, f + 0, 30, 4), a.context.fillStyle = c, a.context.fillRect(h + 10, f + 0, l / g * 30 | 0, 4)))
}

function Xy() {
  var a = Math.max(2, k(5));
  return 0.5 > Math.random() ? -a : a
};

function Yy() {
  this.kE = "gameTabContent";
  this.F = "gameCanvas";
  this.gB = null
}
Yy.prototype = new Xx;
Yy.prototype.J = function() {
  this.pf()
};
Yy.prototype.ba = function() {
  var a = this.gB;
  a.se = w.Nb.rq ? a.uE : a.DD;
  a.se.hB(a.context);
  if (w.S.ty)
    if (a.context.fillStyle = "#000000", a.context.fillRect(0, 0, w.iu, w.Yq), w.wb) {
      var b = w.S.bc(w.S.he),
        c = w.S.cc(w.S.ie) - 18;
      Py(a, c++, b - 5, b - 3);
      Py(a, c++, b - 6, b - 2);
      Py(a, c++, b - 7, b - 1);
      Py(a, c++, b - 8, b);
      Py(a, c++, b - 9, b + 1);
      Py(a, c++, b - 10, b + 2);
      Py(a, c++, b - 11, b + 3);
      Py(a, c++, b - 12, b + 4);
      Py(a, c++, b - 13, b + 5);
      Py(a, c++, b - 14, b + 6);
      Py(a, c++, b - 15, b + 7);
      Py(a, c++, b - 16, b + 8);
      Py(a, c++, b - 17, b + 9);
      Py(a, c++, b - 18, b + 10);
      Py(a, c++, b - 19, b + 11);
      Py(a, c++, b - 20,
        b + 12);
      Py(a, c++, b - 19, b + 13);
      Py(a, c++, b - 18, b + 14);
      Py(a, c++, b - 17, b + 15);
      Py(a, c++, b - 16, b + 16);
      Py(a, c++, b - 14, b + 16);
      Py(a, c++, b - 13, b + 16);
      Py(a, c++, b - 12, b + 15);
      Py(a, c++, b - 11, b + 14);
      Py(a, c++, b - 10, b + 13);
      Py(a, c++, b - 9, b + 12);
      Py(a, c++, b - 8, b + 11);
      Py(a, c++, b - 7, b + 10);
      Py(a, c++, b - 6, b + 9);
      Py(a, c++, b - 5, b + 8);
      Py(a, c++, b - 4, b + 7);
      Py(a, c++, b - 3, b + 6);
      Py(a, c++, b - 2, b + 5);
      Py(a, c++, b - 1, b + 4);
      Py(a, c, b, b + 3);
      Ry(a, w.Ni.eh);
      Ry(a, w.i.D);
      w.Nb.Mm && Uy(a);
      a.se.hx();
      if (w.Nb.up) {
        var d = w.Pe,
          f = d.Rh,
          g = d.Sh,
          h = 120 / (d.Rh + d.Eh - f) | 0,
          l = 120 / (d.Sh + d.Eh - g) | 0;
        a.context.save();
        a.context.translate(650, 280);
        a.context.rotate(Math.PI / 4);
        var n = w.ob.fc,
          p = w.kb.pd,
          s, u;
        a.context.fillStyle = "gray";
        for (u = 0; u < p.length; u++) s = p[u], s.$b && Vy(a, s, h, l);
        a.context.fillStyle = "green";
        for (u = 0; u < p.length; u++) s = p[u], s.cb && Vy(a, s, h, l);
        a.context.fillStyle = "#AA8800";
        for (u = 0; u < p.length; u++) s = p[u], s.ye && Vy(a, s, h, l);
        a.context.fillStyle = "#885500";
        for (u = 0; u < p.length; u++) s = p[u], Jc(s) && n >= s.Jf && Vy(a, s, h, l);
        a.context.fillStyle = "#AA3300";
        for (u = 0; u < p.length; u++) s = p[u], Jc(s) && n < s.Jf && Vy(a, s, h, l);
        a.context.fillStyle =
          "white";
        for (u = 0; u < p.length; u++) s = p[u], Jc(s) || s.$b || s.ye || s.cb || Vy(a, s, h, l);
        var y = w.S.q[1][1],
          A = h * (y.Hd - f),
          C = l * (y.Id - g);
        a.context.fillStyle = "blue";
        a.context.fillRect(A + 2, C + 2, 4, 4);
        a.context.restore()
      }
    } else {
      var v = w.Ba.Ai(w.Ba.Ki),
        D = w.Ba.Bi(w.Ba.Li) - 18;
      Qy(a, D++, v - 5, v - 3);
      Qy(a, D++, v - 6, v - 2);
      Qy(a, D++, v - 7, v - 1);
      Qy(a, D++, v - 8, v);
      Qy(a, D++, v - 9, v + 1);
      Qy(a, D++, v - 10, v + 2);
      Qy(a, D++, v - 11, v + 3);
      Qy(a, D++, v - 12, v + 4);
      Qy(a, D++, v - 13, v + 5);
      Qy(a, D++, v - 14, v + 6);
      Qy(a, D++, v - 15, v + 7);
      Qy(a, D++, v - 16, v + 8);
      Qy(a, D++, v - 17, v + 9);
      Qy(a, D++, v - 18,
        v + 10);
      Qy(a, D++, v - 19, v + 11);
      Qy(a, D++, v - 20, v + 12);
      Qy(a, D++, v - 19, v + 13);
      Qy(a, D++, v - 18, v + 14);
      Qy(a, D++, v - 17, v + 15);
      Qy(a, D++, v - 16, v + 16);
      Qy(a, D++, v - 14, v + 16);
      Qy(a, D++, v - 13, v + 16);
      Qy(a, D++, v - 12, v + 15);
      Qy(a, D++, v - 11, v + 14);
      Qy(a, D++, v - 10, v + 13);
      Qy(a, D++, v - 9, v + 12);
      Qy(a, D++, v - 8, v + 11);
      Qy(a, D++, v - 7, v + 10);
      Qy(a, D++, v - 6, v + 9);
      Qy(a, D++, v - 5, v + 8);
      Qy(a, D++, v - 4, v + 7);
      Qy(a, D++, v - 3, v + 6);
      Qy(a, D++, v - 2, v + 5);
      Qy(a, D++, v - 1, v + 4);
      Qy(a, D, v, v + 3);
      var N = w.ff.pe,
        I, x, z, O, J, la;
      for (la = 0; la < N.length; la++) {
        I = N[la];
        x = I.Xo;
        z = I.Yo;
        O = Zy(x, z);
        J = $y(x, z);
        var Q = I.Xl,
          V = w.ff;
        a.If(100 > Q ? V.Sz : 1E3 > Q ? V.xw : V.wD, O, J)
      }
      var na = w.Uh.kf,
        K, H, S, da, W, ia;
      for (ia = 0; ia < na.length; ia++) K = na[ia], H = K.bq, S = K.cq, da = Zy(H, S), W = $y(H, S), a.If(Bq(K.vf()), da, W);
      var ea = w.Ti.Hf,
        va, yb, Fb, pa, T, X;
      for (X = 0; X < ea.length; X++) va = ea[X], yb = va.Qp, Fb = va.Rp, pa = Zy(yb, Fb), T = $y(yb, Fb), a.If(va.hc.jc, pa, T);
      var Ca = w.dh.yf,
        qa, ta, eb, Gb, Da, ub;
      for (ub = 0; ub < Ca.length; ub++) qa = Ca[ub], ta = qa.mp, eb = qa.np, Gb = Zy(ta, eb), Da = $y(ta, eb), a.If(qa.getItem().Uk(), Gb, Da);
      var mb = w.th.Mn,
        Ea, La, wa, Fa, ha, ja, Ga;
      for (ja = 0; ja < mb.length; ja++) Ea =
        mb[ja], Ea.Nn.Xi && (La = Ea.zq, wa = Ea.Aq, Fa = Zy(La, wa), ha = $y(La, wa), Ga = Ea.Kg ? Ea.PA : Ea.Vy, Ea.BC.jh ? a.se.gx(Ga, La, wa, Fa, ha, Ga.Ad.ue, 0) : a.se.dk(Ga, La, wa, Fa, ha, Ga.Ad.ue, 0));
      var bb = w.Gf.Og,
        za, nb, fb, cb, Ua, Va;
      for (Va = 0; Va < bb.length; Va++) za = bb[Va], nb = za.p.Ob(), fb = za.p.Pb(), cb = Zy(nb, fb), Ua = $y(nb, fb), a.If(za.v(), cb, Ua);
      var mc = xh(),
        vb, Sb, Ma, zb, Hb, ac = w.B / 2 | 0,
        ob, pb;
      for (ob = 0; ob < mc.length; ob++) vb = mc[ob], Sb = vb.p.Ob(), Ma = vb.p.Pb(), zb = th(Sb, Ma), Hb = uh(Sb, Ma), pb = vb.v(), 4 === vb.zb ? a.se.dk(pb, Sb, Ma, zb - ac, Hb - ac, 3 * w.B, 0) : a.se.dk(pb,
        Sb, Ma, zb, Hb, pb.Ad.ue, 0);
      Sy(a, w.Ni.eh);
      Sy(a, w.i.D);
      Ty(a, xh());
      Ty(a, w.Ni.eh);
      Ty(a, w.i.D);
      if (w.Nb.nq) {
        var Ha = w.df.Wg;
        if (Ha && 0 !== Ha.length) {
          var jb, Ab, Bb, qb, wb, Ib, Ec, bc, Wa, cc, Qa = null,
            nc = !1;
          for (jb = 0; jb < Ha.length; jb++)
            if (Wa = Ha[jb], cc = Wa.Io, 1 === cc) Ab = Wa.Zg(), Bb = Wa.wm, bc = Wa.oc, qb = Bb.T, wb = Bb.U, Ib = th(qb, wb) + 10, Ec = uh(qb, wb) + 10, a.se.fx(Ab, bc, qb, wb, Ib, Ec, Ab.Ad.ue, 0);
            else if (2 === cc) {
            var sa = a,
              Tb = Wa,
              qc = void 0,
              Fc = void 0,
              Cb = void 0,
              kb = void 0,
              Ra = void 0,
              Ja = void 0,
              Db = void 0,
              gb = void 0,
              rb = void 0,
              dc = void 0;
            sa.context.lineWidth =
              1;
            sa.context.strokeStyle = "#FFD700";
            Ja = Tb.iD;
            Db = Ja.T;
            gb = Ja.U;
            rb = th(Db, gb) + w.B;
            dc = uh(Db, gb) + w.B;
            qc = Tb.xi;
            Fc = qc.T;
            Cb = qc.U;
            kb = th(Fc, Cb) + w.B;
            Ra = uh(Fc, Cb) + w.B;
            sa.context.beginPath();
            sa.context.moveTo(rb, dc);
            var Ka = void 0,
              Xa = void 0,
              Ka = rb + (kb - rb) / 3 | 0,
              Xa = dc + (Ra - dc) / 3 | 0,
              Ka = Ka + Xy(),
              Xa = Xa + Xy();
            sa.context.lineTo(Ka, Xa);
            Ka = Ka + (kb - Ka) / 2 | 0;
            Xa = Xa + (Ra - Xa) / 2 | 0;
            Ka += Xy();
            Xa += Xy();
            sa.context.lineTo(Ka, Xa);
            sa.context.lineTo(kb, Ra);
            sa.context.stroke()
          } else cc === Yb && (Qa = Wa.ew, nc = !0);
          if (nc && Qa) {
            var hb, lb, rc, sc = Qa.ia,
              Aa = Qa.ja,
              db = sc + Qa.rb,
              Mc = Aa + Qa.qb,
              ec, Ub, sb, ka, Eb, xb, Na;
            for (xb = sc; xb <= db; xb++)
              for (Na = Aa; Na <= Mc; Na++)(ec = w.Ba.hb(xb, Na)) && (hb = ec.Pq) && hb.Cj && !hb.bl() && (lb = hb.Zg(), rc = hb.oc, Ub = ec.Ob(), sb = ec.Pb(), ka = th(Ub, sb) + 10, Eb = uh(Ub, sb) + 10, a.se.fB(lb, rc, Ub, sb, ka, Eb, lb.Ad.ue, 0))
          }
        }
      }
      a.se.hx();
      Wy(a, xh(), "red");
      w.i.Xg.ym || (Wy(a, w.Ni.eh, "#007FFF"), Wy(a, w.i.D, "#8B008B"));
      w.Nb.Mm && Uy(a)
    } w.Nb.Po && (a.context.font = "12px Georgia", a.context.fillStyle = "white", a.context.fillText("fps: " + w.i.dz, 10, 20))
};
Yy.prototype.pf = function() {
  var a = M(this.kE);
  if (a) {
    var b = this.F,
      c = M(b);
    c || (c = P("canvas", a, b, "gameTabTopLeftPanel"), c.width = w.iu, c.height = w.Yq, c.innerHTML = "Your browser does not support the HTML5 canvas. This game requires a relatively up-to-date browser.");
    this.gB = new Oy(c.getContext("2d"));
    this.Ya = !0
  }
};

function az(a) {
  this.F = "gameTabAdventurerInfo" + a;
  this.Ya = !0;
  this.$ = a;
  this.Nq = null;
  this.Wl = ["adventurerEffectIconA" + a, "adventurerEffectIconB" + a, "adventurerEffectIconC" + a, "adventurerEffectIconD" + a, "adventurerEffectIconE" + a, "adventurerEffectIconF" + a];
  this.Ay = "adventurerHealthSlider" + a;
  this.zy = "adventurerHealth" + a;
  this.Lq = "adventurerDamage" + a;
  this.Jq = "adventurerArmor" + a;
  this.Kq = "adventurerAR" + a;
  this.Mq = "adventurerDR" + a;
  this.By = "adventurerLevelClass" + a;
  this.Dy = "adventurerSpiritPowerSlider" + a;
  this.Cy = "adventurerSpiritPower" +
    a;
  this.nn = this.Ak = this.pk = this.ok = this.zk = null;
  this.uv = this.sv = this.rv = this.tv = this.$f = this.rr = this.pr = this.or = this.qr = this.mv = this.Jk = this.kv = this.av = -1;
  this.qm = [null, null, null, null, null, null];
  this.lk = [null, null, null, null, null, null];
  this.Dm = [0, 0, 0, 0, 0, 0];
  this.qw = 8;
  this.De = 0;
  this.vj = -1;
  this.Oq = !1
}
az.prototype = new Xx;
az.prototype.J = function() {
  Ox(this.F);
  this.Nq = null;
  this.Oq = !1;
  this.nn = null;
  if (0 > this.$ || this.$ >= w.i.D.length) this.$ >= 4 + Rs.t ? (this.nn = P("div", M(this.F), null, "gameTabLockedAdventurerInfo"), P("span", this.nn, null, "lockedSpanText").innerHTML = "Locked", this.Oq = !0) : this.nn = P("div", M(this.F), null, "gameTabBlankAdventurerInfo");
  else {
    this.vj = this.rr = this.pr = this.or = this.qr = this.mv = this.Jk = this.kv = this.av = this.$f = -1;
    var a;
    for (a = 0; a < this.qm.length; a++) this.qm[a] = null, this.lk[a] = null, this.Dm[a] = 0;
    this.Nq = P("table",
      M(this.F), null, "adventurerInfoTable");
    a = this.Nq.insertRow(0);
    var b = a.insertCell(0);
    b.className = "gameTabAdventurerIconCell";
    b.rowSpan = 2;
    var c = w.i.D[this.$],
      d = c.v(),
      b = P("img", b, null, "characterImage");
    b.src = "images/Transparent.gif";
    b.style.height = "35px";
    b.style.background = "url('spritesheet/monsters.png') -" + d.ub + "px -" + (d.vb + 8) + "px";
    d = a.insertCell(1);
    d.style.width = "123px";
    d.innerHTML = c.Xt;
    c = a.insertCell(2);
    c.className = "gameTabAdventurerSliderCell";
    c.title = "Health";
    d = P("div", c, null, null);
    d.className =
      "gameTabAdventurerSliderDiv";
    P("div", d, this.Ay, "gameTabAdventurerHealthSlider");
    P("div", c, this.zy, "gameTabAdventurerSliderOverlay");
    c = a.insertCell(3);
    c.style.width = "30px";
    c.style.textAlign = "left";
    c.style.paddingLeft = "4px";
    c.title = "Health";
    c.innerHTML = "HP";
    c = a.insertCell(4);
    c.id = this.Lq;
    c.title = "Damage: Increases damage of successful attack";
    c.className = "gameTabAdventurerInfoHpAc";
    this.zk = a.insertCell(5);
    this.zk.style.width = "30px";
    this.zk.style.textAlign = "left";
    this.zk.title = "Damage: Increases damage of successful attack";
    this.zk.innerHTML = "DMG";
    c = a.insertCell(6);
    c.id = this.Kq;
    c.className = "gameTabAdventurerInfoHpAc";
    c.title = "Attack Rating: Increases chance of successful attack";
    this.pk = a.insertCell(7);
    this.pk.style.width = "30px";
    this.pk.style.textAlign = "left";
    this.pk.title = "Attack Rating: Increases chance of successful attack";
    this.pk.innerHTML = "ATK";
    d = 8;
    for (c = 0; c < this.Wl.length; c++) b = a.insertCell(d++), b.rowSpan = 2, b = P("div", b, null, "gameTabAdventurerInfoEffect"), b = P("img", b, this.Wl[c], "itemImage"), b.src = "images/Transparent.gif",
      b.style.width = "30px", b.style.height = "30px", b.style.display = "none";
    a = this.Nq.insertRow(1);
    c = a.insertCell(0);
    c.id = this.By;
    c.style.width = "120px";
    c = a.insertCell(1);
    c.className = "gameTabAdventurerSliderCell";
    c.title = "Spirit Power";
    d = P("div", c, null, "gameTabAdventurerSliderDiv");
    P("div", d, this.Dy, "gameTabAdventurerSpiritPointsSlider");
    P("div", c, this.Cy, "gameTabAdventurerSliderOverlay");
    c = a.insertCell(2);
    c.style.width = "30px";
    c.style.textAlign = "left";
    c.style.paddingLeft = "4px";
    c.title = "Spirit Power";
    c.innerHTML =
      "SP";
    c = a.insertCell(3);
    c.id = this.Jq;
    c.className = "gameTabAdventurerInfoHpAc";
    c.title = "Armor: Reduces damage from enemy attacks";
    this.ok = a.insertCell(4);
    this.ok.style.width = "30px";
    this.ok.style.textAlign = "left";
    this.ok.title = "Armor: Reduces damage from enemy attacks";
    this.ok.innerHTML = "ARM";
    c = a.insertCell(5);
    c.id = this.Mq;
    c.className = "gameTabAdventurerInfoHpAc";
    c.title = "Defense Rating: Prevents successful attacks by enemies";
    this.Ak = a.insertCell(6);
    this.Ak.style.width = "30px";
    this.Ak.style.textAlign =
      "left";
    this.Ak.title = "Defense Rating: Prevents successful attacks by enemies";
    this.Ak.innerHTML = "DEF"
  }
};
az.prototype.ba = function() {
  if (!(0 > this.$))
    if (this.$ >= w.i.D.length) this.Oq && this.$ < 4 + Rs.t && (this.Oq = !1, this.nn.className = "gameTabBlankAdventurerInfo", Px(this.nn));
    else {
      var a = w.i.D[this.$],
        b = a.K,
        c = b.Sa,
        d = $h(b.Jb),
        f = b.Yc,
        g = $h(b.Ke),
        h = $h(b.sd),
        l = $h(b.je),
        n = $h(b.xe),
        p = $h(b.Ae),
        b = b.Eb;
      if (this.av !== c || this.kv !== d) {
        Ux(this.zy, r(c) + "/" + r(d));
        var s = Math.min(100, m(100 * c / d));
        M(this.Ay).style.width = s + "%";
        this.av = c;
        this.kv = d
      }
      if (this.Jk !== f || this.mv !== g) Ux(this.Cy, r(f) + "/" + r(g)), c = Math.min(100, m(100 * f / g)), M(this.Dy).style.width =
        c + "%", this.Jk = f, this.mv = g;
      this.$f !== b && (this.$f = b, Ux(this.By, "Lvl " + b + " " + w.i.D[this.$].Kc.Ka));
      this.qr !== h && Ux(this.Lq, r(h));
      this.or !== l && Ux(this.Jq, r(l));
      this.pr !== n && Ux(this.Kq, r(n));
      this.rr !== p && Ux(this.Mq, r(p));
      c = a.Ja.of;
      f = !1;
      this.De++;
      this.De >= this.qw && (this.De = 0, f = !0);
      for (a = 0; a < this.lk.length; a++) this.lk[a] = null;
      for (a = d = 0; a < c.length; a++) g = c[a].X, b = this.lk.indexOf(g), 0 > b && d < this.lk.length && (this.lk[d] = g, d++);
      for (a = 0; a < this.qm.length; a++)(g = a < this.lk.length ? this.lk[a] : null, c = this.qm[a], g) ? c &&
        c === g ? f && (g = Li[c], c = g.Te, d = w.Dj.Zg(g.vd), this.Dm[a]++, this.Dm[a] >= d.To() && (this.Dm[a] = 0), d = d.qq[this.Dm[a]], b = M(this.Wl[a]), b.style.background = "url('" + c + "') -" + d.qt + "px -" + d.rt + "px") : (c = g, this.qm[a] = c, g = Li[c], c = g.Te, d = w.Dj.Zg(g.vd), this.Dm[a] = 0, d = d.qq[0], b = M(this.Wl[a]), b.style.background = "url('" + c + "') -" + d.qt + "px -" + d.rt + "px", b.title = g.cf, Tx(this.Wl[a])) : c && (Sx(this.Wl[a]), this.qm[a] = null);
      a = xh();
      0 === a.length ? -1 < this.vj && (M(this.Lq).style.color = "#FFF", M(this.Jq).style.color = "#FFF", M(this.Kq).style.color =
        "#FFF", M(this.Mq).style.color = "#FFF", this.zk.style.color = "#FFF", this.ok.style.color = "#FFF", this.pk.style.color = "#FFF", this.Ak.style.color = "#FFF", this.uv = this.sv = this.tv = this.rv = this.vj = -1) : (c = a[0].K, a = $h(c.sd), f = $h(c.je), g = $h(c.xe), c = $h(c.Ae), this.vj = w.i.Xg.Ar, bz(this.Lq, h, f, this.qr, this.rv, this.zk), bz(this.Jq, l, a, this.or, this.tv, this.ok), bz(this.Kq, n, c, this.pr, this.uv, this.pk), bz(this.Mq, p, g, this.rr, this.sv, this.Ak), this.rv = f, this.tv = a, this.sv = g, this.uv = c);
      this.qr = h;
      this.or = l;
      this.pr = n;
      this.rr = p
    }
};

function bz(a, b, c, d, f, g) {
  if (b != d || c != f) b < c ? (M(a).style.color = "#F00", g.style.color = "#F00") : b > c ? (M(a).style.color = "#0A0", g.style.color = "#0A0") : (M(a).style.color = "#FFF", g.style.color = "#FFF")
};

function cz() {
  this.F = "dungeonNotificationPanel";
  this.Ya = !1;
  this.Eo = "";
  this.nl = null;
  this.Su = this.Bk = ""
}
cz.prototype = new Xx;
cz.prototype.J = function() {
  Ox(this.F);
  this.Su = this.Bk = "";
  var a = M(this.F);
  this.nl = P("div", a, null, "dungeonNotificationDiv");
  Qx(a);
  this.Vw = !1
};
cz.prototype.Pm = function() {
  return !w.wb
};
cz.prototype.ba = function() {
  var a, b;
  w.Mc ? (a = w.Mc.Eo, b = w.Mc.ri + 1) : (a = w.le.mi, b = 0);
  if (b !== this.Su || a !== this.Bk) this.Su = b, this.Bk = a, this.nl.innerHTML = 0 < b ? a + " (Lvl. " + b + ")" : a
};

function dz() {
  this.F = "encounterNotificationPanel";
  this.Ya = !1;
  this.nl = null;
  this.bA = this.xz = this.vj = -1;
  this.Bz = !1
}
dz.prototype = new Xx;
dz.prototype.J = function() {
  this.nl || (this.nl = P("div", M(this.F), null, "encounterNotificationDiv"))
};
dz.prototype.Pm = function() {
  return !w.i.Xg.ym
};
dz.prototype.ba = function() {
  var a = w.i.Xg.Ar,
    b = xh().length;
  if (this.vj !== a || this.xz != b) {
    this.vj !== a && (this.bA = b);
    this.vj = a;
    this.xz = b;
    var c;
    c = w.i.Xg.fw;
    a = w.i.Xg.du;
    this.nl.innerHTML = a ? "BOSS ENCOUNTER!<br/> " + c : "An Encounter!<br/>" + b + "/" + this.bA + " " + c;
    this.Bz != a && (this.Bz = a, this.nl.className = a ? "bossEncounterNotificationDiv" : "encounterNotificationDiv")
  }
};

function ez() {
  this.F = "currencyPanel";
  this.Ya = !0;
  this.pD = "expCell";
  this.tD = "goldAmountCell";
  this.Hw = "killsCountCell";
  this.rm = this.vz = this.uz = -1
}
ez.prototype = new Xx;
ez.prototype.J = function() {};
ez.prototype.ba = function() {
  var a = w.i.da.cg,
    b = w.i.da.fd,
    c = w.i.da.Je;
  a !== this.uz && (this.uz = a, Ux(this.pD, "" + r(a)));
  b !== this.vz && (this.vz = b, Ux(this.tD, "" + r(b)));
  c !== this.rm && (this.rm = c, Ux(this.Hw, "" + r(c)))
};

function fz(a) {
  this.F = a;
  this.Ya = !0;
  this.Np = null;
  this.qz = -1
}
fz.prototype = new Xx;
fz.prototype.J = function() {
  Ox(this.F);
  gz(this)
};
fz.prototype.ba = function() {
  this.Np || gz(this);
  var a = w.i.ae.Dd;
  a !== this.qz && (this.qz = a, this.Np.innerHTML = xa(a))
};

function gz(a) {
  var b = P("table", M(a.F), null, null);
  b.style.width = "100%";
  b = b.insertRow(0);
  a.Np = b.insertCell(0);
  b = b.insertCell(1);
  a.Np.style.textAlign = "right";
  a.Np.style.paddingTop = "5px";
  b.style.width = "30px";
  b.style.paddingTop = "5px";
  b.style.textAlign = "left";
  b.title = "Adventure Points";
  b.innerHTML = "AP"
};

function hz(a) {
  this.Gw = {};
  this.qp = [];
  var b, c, d;
  for (b = 0; b < a.length; b++)
    for (d = a[b], c = 0; c < d.length; c++) this.qp.push(d[c]);
  iz(this);
  jz(this)
}

function jz(a) {
  document.onkeyup = function(b) {
    a.Gw[b.keyCode] = !0
  }
}

function iz(a) {
  var b;
  for (b = 0; b < a.qp.length; b++) a.Gw[a.qp[b]] = !1
};

function kz(a, b, c, d) {
  this.F = a;
  this.Ya = !0;
  this.Vh = this.Cx = this.mx = this.$p = this.tm = this.scroll = null;
  this.aq = !1;
  this.Gv = !this.aq;
  this.rz = -1;
  this.yz = null;
  this.wz = !0;
  this.YC = b;
  this.Qr = c;
  this.qp = d
}
kz.prototype = new Xx;
kz.prototype.J = function() {};
kz.prototype.ba = function() {
  this.$p || lz(this);
  var a = !1;
  if (this.scroll != this.tm && (this.tm = this.scroll, a = !0, this.scroll)) {
    var b = this.scroll.Wh;
    this.Vh.style.background = "url('spritesheet/items.png') -" + b.ub + "px -" + b.vb + "px"
  }
  b = this.scroll.rg;
  this.yz !== b && (this.yz = b, this.mx.innerHTML = b);
  b = this.scroll ? this.scroll.mh : -1;
  infiniteScrollsPotion.t && (b = -2);
  var c = 0 < b || infiniteScrollsPotion.t;
  this.aq = !this.scroll.Qe && c && !w.wb && 0 < xh().length;
  if (a || this.Gv != this.aq) this.Gv = this.aq, this.$p.className = this.aq ? "scrollButton" : "scrollButtonDisabled";
  a = this.scroll.Qe;
  if (this.rz !== b || this.wz != a) this.rz = b, this.wz = a, this.Cx.innerHTML = a ? "" : infiniteScrollsPotion.t ? "Infinite" : "x" + b;
  a: {
    a = this.qp;
    for (b = 0; b < a.length; b++)
      if (this.Qr.Gw[a[b]]) {
        a = !0;
        break a
      } a = !1
  }
  a && mz(this)
};

function mz(a) {
  a.scroll && (0 < a.scroll.mh || infiniteScrollsPotion.t) && (nz(a.YC), Hq(a.scroll, infiniteScrollsPotion.t))
}

function lz(a) {
  a.$p = P("div", M(a.F), null, "scrollButtonDisabled");
  a.Gv = !1;
  var b = P("table", a.$p, null, null),
    c = b.insertRow(0),
    b = b.insertRow(1),
    d = c.insertCell(0);
  d.rowSpan = 2;
  a.mx = c.insertCell(1);
  a.Cx = b.insertCell(0);
  a.mx.style.textAlign = "left";
  a.Cx.style.textAlign = "left";
  a.Vh = P("img", d, null, "itemImage");
  a.Vh.style.height = "30px";
  a.Vh.src = "images/Transparent.gif";
  a.$p.onmouseup = function() {
    mz(a);
    return !1
  }
};

function oz() {
  this.F = "scrollButtonContainer";
  this.Ya = !0;
  this.fu = null;
  this.Zs = [];
  this.oA = [
    [49, 35, 97],
    [50, 40, 98],
    [51, 34, 99],
    [52, 37, 100],
    [53, 12, 101],
    [54, 39, 102]
  ];
  this.Qr = new hz(this.oA)
}
oz.prototype = new Xx;
oz.prototype.J = function() {
  Ox(this.F);
  this.Zs.length = 0;
  this.so()
};
oz.prototype.ba = function() {
  this.fu || this.so();
  var a, b = w.nh.at,
    c, d;
  for (a = 0; a < this.Zs.length; a++) d = b.length > a ? b[a] : null, c = this.Zs[a], c.scroll = d, c.Xa();
  iz(this.Qr)
};
oz.prototype.so = function() {
  this.fu = P("table", M(this.F), null, null);
  var a = this.fu.insertRow(0),
    b, c, d;
  for (d = 0; 6 > d; d++) c = a.insertCell(d), b = "scrollButtonCell" + d, P("div", c, b, null), this.Zs.push(new kz(b, d, this.Qr, this.oA[d]))
};

function pz(a, b) {
  this.F = a;
  this.Ya = !0;
  this.hc = null;
  this.TA = b;
  this.yo = this.sm = null;
  this.gu = 192;
  this.Pp = this.Op = this.Tp = this.yj = this.Si = this.pb = this.km = null;
  this.ak = !1;
  this.Jh = -1;
  this.Sp = this.Bo = !1
}
pz.prototype = new Xx;
pz.prototype.J = function() {
  Ox(this.F);
  this.Pp = this.Op = this.Tp = this.yj = this.Si = this.pb = this.km = this.yo = this.sm = this.hc = null;
  this.ak = this.Sp = !1
};
pz.prototype.ba = function() {
  this.Si || qz(this);
  this.Sp && this.TA < sr + tr.t && (this.Sp = !1, this.Si.className = "potionButtonDisabled");
  if (this.hc) {
    this.sm || Rx(this.Si);
    var a;
    a = (a = this.hc) ?
      !a.Oe && Wq(a) ?
        "potionButtonDisabled"
      : a.Oe ?
        "potionButtonActive"
      : "potionButton"
    : "potionButtonDisabled";
    this.yo != a && (this.yo = a, this.Si.className = a);
    this.hc != this.sm && (this.Tp.innerHTML = this.hc.title, this.Op.innerHTML = this.hc.desc, a = this.hc.img, this.Pp.style.background = "url('spritesheet/items.png') -" + a.ub + "px -" + a.vb + "px");
    this.sm =
      this.hc;
    this.hc.Oe ? (this.ak || (Rx(this.pb), this.ak = !0), a = Math.min(1, (w.i.$a - this.hc.Vl) / (800 + Ts.t)), a *= this.gu, this.Jh !== a && (this.Jh = a, this.pb.style.width = a + "px")) : this.ak && (Qx(this.pb), this.ak = !1);
    this.Bo || (this.Bo = !0, this.yj.style.display = "block")
  } else this.sm && (this.sm = null, this.Tp.innerHTML = "", this.Op.innerHTML = "", this.Pp.style.background = "", this.Bo && (this.Bo = !1, this.yj.style.display = "none"), this.ak && (Qx(this.pb), this.ak = !1), this.yo = "potionButtonDisabled", this.Si.className = this.yo)
};
pz.prototype.aw = function() {
  this.hc && (this.hc.Oe || !this.hc.Oe && Wq(this.hc) || this.hc.aw())
};
pz.prototype.bw = function() {
  this.hc && (w.Yj.bw(this.hc), this.hc = null)
};

function qz(a) {
  a.km = P("div", M(a.F), null, "potionContentContainer");
  a.Sp = a.TA >= sr + tr.t;
  a.Si = P("table", a.km, null, a.Sp ? "potionButtonLocked" : "potionButtonDisabled");
  var b = a.Si.insertRow(0),
    c = a.Si.insertRow(1),
    d = b.insertCell(0);
  d.rowSpan = 2;
  a.Tp = b.insertCell(1);
  a.Op = c.insertCell(0);
  a.Tp.style.textAlign = "left";
  a.Op.style.textAlign = "left";
  a.Pp = P("img", d, null, "itemImage");
  a.Pp.src = "images/Transparent.gif";
  a.km.onmouseup = function() {
    a.aw();
    return !1
  };
  a.pb = P("div", a.km, null, "potionButtonProgressSlider");
  a.ak = !1;
  a.yj = P("div", a.km, null, "dropPotionButton");
  a.yj.title = "Drop Potion";
  a.yj.innerHTML = "X";
  a.yj.style.display = "none";
  a.Bo = !1;
  a.yj.onmouseup = function() {
    a.bw();
    return !1
  }
};

function rz() {
  this.F = "potionButtonContainer";
  this.Ya = !0;
  this.su = !1;
  this.Ms = []
}
rz.prototype = new Xx;
rz.prototype.J = function() {
  Ox(this.F);
  this.Ms.length = 0;
  this.su = !1;
  this.so()
};
rz.prototype.ba = function() {
  this.su || this.so();
  var a, b = w.Yj.re,
    c, d;
  for (a = 0; a < this.Ms.length; a++) d = a < b.length ? b[a] : null, c = this.Ms[a], c.hc = d, c.Xa()
};
rz.prototype.so = function() {
  var a = M(this.F);
  this.su = !0;
  var b, c, d = 0;
  for (b = 0; 4 > b; b++)
    for (c = 0; 2 > c; c++) {
      var f = c,
        g = b,
        h = d++,
        l = "potionButton_Row" + g + "_Col" + f,
        n = P("div", a, null, "potionCellDiv");
      n.id = l;
      n.style.left = 196 * f + "px";
      n.style.top = 47 * g + "px";
      this.Ms.push(new pz(l, h))
    }
};

function sz(a) {
  this.F = "gameTabContent";
  this.C = a;
  R(this, new Yy);
  R(this, new cz);
  R(this, new dz);
  R(this, new ez);
  R(this, new fz("adventurePointsPanel"));
  R(this, new Fy("upgradeButtonContainer", Mx, !1));
  R(this, new tz);
  R(this, new oz);
  R(this, new rz);
  R(this, new az(0));
  R(this, new az(1));
  R(this, new az(2));
  R(this, new az(3));
  R(this, new az(4))
}
sz.prototype = new jy;
sz.prototype.Me = function() {
  this.C.qa = !1;
  this.C.ha = !1
};
sz.prototype.Ne = function() {
  this.C.qa = !0;
  this.C.ha = !0
};
sz.prototype.Zd = function() {
  this.C.qa = !1;
  this.C.ha = !1
};
sz.prototype.J = function() {
  this.C.qa = !0;
  this.C.ha = !0;
  Zx(this)
};

function uz() {
  this.F = "infoTabSaveLoadContainer";
  this.Ya = !0;
  this.SD = "lastSaveDiv";
  this.tr = -1;
  M("saveButton").onclick = function() {
    w.iE();
    return !1
  };
  M("firstResetButton").onclick = function() {
    Tx("resetConfirmContainer");
    Sx("firstResetButtonContainer");
    return !1
  };
  M("realResetButton").onclick = function() {
    w.OA();
    Sx("resetConfirmContainer");
    Tx("firstResetButtonContainer");
    return !1
  };
  M("cancelResetButton").onclick = function() {
    Sx("resetConfirmContainer");
    Tx("firstResetButtonContainer");
    return !1
  };
  M("firstDeleteButton").onclick =
    function() {
      Tx("deleteSaveConfirmContainer");
      Sx("firstDeleteSaveButtonContainer");
      return !1
    };
  M("realDeleteButton").onclick = function() {
    w.gE();
    Sx("deleteSaveConfirmContainer");
    Tx("firstDeleteSaveButtonContainer");
    return !1
  };
  M("cancelDeleteButton").onclick = function() {
    Sx("deleteSaveConfirmContainer");
    Tx("firstDeleteSaveButtonContainer");
    return !1
  };
  M("exportSaveButton").onclick = function() {
    var a = M("exportSaveInput");
    a.value = vz(w.pg);
    Tx("exportSaveContainer");
    Sx("exportSaveButton");
    a.select();
    return !1
  };
  M("cancelExportButton").onclick =
    function() {
      Sx("exportSaveContainer");
      Tx("exportSaveButton");
      M("exportSaveInput").value = "";
      return !1
    };
  M("importSaveButton").onclick = function() {
    Sx("importErrorMessage");
    Sx("importSuccessMessage");
    M("importSaveInput").value = "";
    Tx("importSaveContainer");
    Sx("importSaveButton");
    return !1
  };
  M("importOkButton").onclick = function() {
    w.hE(M("importSaveInput").value) ? (Sx("importErrorMessage"), Tx("importSuccessMessage")) : (Tx("importErrorMessage"), Sx("importSuccessMessage"));
    return !1
  };
  M("importCloseButton").onclick =
    function() {
      Sx("importErrorMessage");
      Sx("importSuccessMessage");
      M("importSaveInput").value = "";
      Sx("importSaveContainer");
      Tx("importSaveButton");
      return !1
    }
}
uz.prototype = new Xx;
uz.prototype.J = function() {
  this.tr = -1
};
uz.prototype.ba = function() {
  var a;
  a = w.pg.qs;
  this.tr !== a && 0 < a && (this.tr = a, Ux(this.SD, "Last Saved at: " + (new Date(this.tr)).toLocaleTimeString()))
};

function wz(a) {
  this.F = "infoTabContent";
  this.C = a;
  R(this, new uz);
  R(this, new xz);
  R(this, new yz)
}
wz.prototype = new jy;
wz.prototype.Me = function() {
  this.C.ha = !1;
  this.C.qa = !0
};
wz.prototype.Ne = function() {
  this.C.qa = !0;
  this.C.ha = !1
};
wz.prototype.Zd = function() {
  this.C.qa = !1;
  this.C.ha = !1
};
wz.prototype.J = function() {
  this.C.qa = !0;
  this.C.ha = !1;
  Zx(this)
};

function xz() {
  this.F = "statisticsContainer";
  this.Ya = !0;
  this.st = null;
  this.Jx = this.Au = this.Ux = this.bv = this.fy = this.Cv = this.my = this.Yv = this.Vx = this.Ek = this.Wx = this.Fk = this.iy = this.Iv = this.dy = this.Av = this.jy = this.Nv = this.ey = this.Bv = this.Yx = this.nv = this.Mx = this.Ku = this.Qx = this.Tu = this.Zx = this.Ik = this.hy = this.Hv = this.Nx = this.Qu = this.Sx = this.Xu = this.Tx = this.Yu = this.Kx = this.Eu = this.ny = this.$v = this.ky = this.Wv = this.$x = this.qv = this.Rx = this.Uu = this.Lx = this.Hu = this.Px = this.Ck = this.Xx = this.Hk = this.gy = this.Ev = this.Ox =
    this.Ru = this.ly = this.Xv = this.cy = this.by = this.ay = this.yv = this.xv = this.wv = this.Zv = -1;
  this.UB = this.Fy = this.eC = this.Vz = this.oC = this.eB = this.wC = this.DC = this.fC = this.Tm = this.gC = this.Um = this.rC = this.nB = this.mC = this.UA = this.sC = this.BB = this.nC = this.dB = this.iC = this.zA = this.tC = this.aj = this.aC = this.Iz = this.jC = this.Ap = this.qC = this.lB = this.YB = this.mz = this.cC = this.Qz = this.dC = this.Rz = this.VB = this.Ky = this.yC = this.LC = this.uC = this.AC = this.kC = this.GA = this.bC = this.Jz = this.WB = this.Oy = this.$B = this.vm = this.hC = this.Vm = this.ZB =
    this.Dz = this.pC = this.jB = this.vC = this.CC = this.SA = this.lC = this.xC = null;
  this.AA = 36E5
}
xz.prototype = new Xx;
e = xz.prototype;
e.J = function() {
  this.Jx = this.Au = this.Ux = this.bv = this.fy = this.Cv = this.my = this.Yv = this.Vx = this.Ek = this.Wx = this.Fk = this.iy = this.Iv = this.dy = this.Av = this.jy = this.Nv = this.ey = this.Bv = this.Yx = this.nv = this.Mx = this.Ku = this.Qx = this.Tu = this.Zx = this.Ik = this.hy = this.Hv = this.Nx = this.Qu = this.Sx = this.Xu = this.Tx = this.Yu = this.Kx = this.Eu = this.ny = this.$v = this.ky = this.Wv = this.$x = this.qv = this.Rx = this.Uu = this.Lx = this.Hu = this.Px = this.Ck = this.Xx = this.Hk = this.Ox = this.Ru = this.gy = this.Ev = this.ly = this.Xv = this.cy = this.by = this.ay =
    this.yv = this.xv = this.wv = this.Zv = -1;
  this.fr()
};
e.ba = function() {
  this.st || this.fr();
  var a = w.i.Ih,
    b = w.i.Ua,
    c = w.i.wh,
    d = b.Xj,
    f = a.Xj,
    g = b.On,
    h = a.On,
    l = b.qn,
    n = a.qn,
    p = b.Lk,
    s = a.Lk,
    u = b.Mj,
    y = a.Mj,
    A = b.wi,
    C = a.wi,
    v = b.uk,
    D = a.uk,
    N = b.Rk,
    I = a.Rk,
    x = b.kl,
    z = a.kl,
    O = b.Nl,
    J = a.Nl,
    la = b.Sl,
    Q = a.Sl,
    V = b.tk,
    na = a.tk,
    K = b.Xk,
    H = a.Xk,
    S = b.Wk,
    da = a.Wk,
    W = b.si,
    ia = a.si,
    ea = b.Dl,
    va = a.Dl,
    yb = b.Ff,
    Fb = a.Ff,
    pa = b.Sd,
    T = a.Sd,
    X = b.oj,
    Ca = a.oj,
    qa = b.hl,
    ta = a.hl,
    eb = b.wl,
    Gb = a.wl,
    Da = b.Gl,
    ub = a.Gl,
    mb = b.ul,
    Ea = a.ul,
    La = b.El,
    wa = a.El,
    Fa = b.Ph,
    ha = a.Ph,
    ja = b.Gi,
    Ga = a.Gi,
    bb = b.Ol,
    za = a.Ol,
    nb = b.xl,
    fb = a.xl,
    cb = b.Zk,
    Ua = a.Zk,
    b = b.nk,
    a = a.nk;
  this.Zv != c && (this.Zv = c, this.xC.innerHTML = r(c));
  this.Xv != h && (this.Xv = h, this.CC.innerHTML = r(h));
  this.ly != g && (this.ly = g, this.vC.innerHTML = r(g));
  this.Ev != n && (this.Ev = n, this.jB.innerHTML = r(n));
  this.gy != l && (this.gy = l, this.pC.innerHTML = r(l));
  this.Ru != s && (this.Ru = s, this.Dz.innerHTML = r(s));
  this.Ox != p && (this.Ox = p, this.ZB.innerHTML = r(p));
  this.Hk != y && (this.Hk = y, this.Vm.innerHTML = r(y));
  this.Xx != u && (this.Xx = u, this.hC.innerHTML = r(u));
  this.Ck != C && (this.Ck = C, this.vm.innerHTML = r(C));
  this.Px != A && (this.Px =
    A, this.$B.innerHTML = r(A));
  this.Hu != D && (this.Hu = D, this.Oy.innerHTML = r(D) + "/" + w.kb.pd.length);
  this.Lx != v && (this.Lx = v, this.WB.innerHTML = r(v));
  this.Uu != I && (this.Uu = I, this.Jz.innerHTML = r(I));
  this.Rx != N && (this.Rx = N, this.bC.innerHTML = r(N));
  this.qv != z && (this.qv = z, this.GA.innerHTML = r(z));
  this.$x != x && (this.$x = x, this.kC.innerHTML = r(x));
  this.Wv != J && (this.Wv = J, this.AC.innerHTML = r(J));
  this.ky != O && (this.ky = O, this.uC.innerHTML = r(O));
  this.$v != Q && (this.$v = Q, this.LC.innerHTML = r(Q));
  this.ny != la && (this.ny = la, this.yC.innerHTML =
    r(la));
  this.Eu != na && (this.Eu = na, this.Ky.innerHTML = r(na));
  this.Kx != V && (this.Kx = V, this.VB.innerHTML = r(V));
  this.Yu != H && (this.Yu = H, this.Rz.innerHTML = r(H));
  this.Tx != K && (this.Tx = K, this.dC.innerHTML = r(K));
  this.Xu != da && (this.Xu = da, this.Qz.innerHTML = r(da));
  this.Sx != S && (this.Sx = S, this.cC.innerHTML = r(S));
  this.Qu != ia && (this.Qu = ia, this.mz.innerHTML = r(ia));
  this.Nx != W && (this.Nx = W, this.YB.innerHTML = r(W));
  this.Hv != va && (this.Hv = va, this.lB.innerHTML = r(va));
  this.hy != ea && (this.hy = ea, this.qC.innerHTML = r(ea));
  this.Ik !=
    Fb && (this.Ik = Fb, this.Ap.innerHTML = r(Fb));
  this.Zx != yb && (this.Zx = yb, this.jC.innerHTML = r(yb));
  this.Tu != T && (this.Tu = T, this.Iz.innerHTML = r(T));
  this.Qx != pa && (this.Qx = pa, this.aC.innerHTML = r(pa));
  this.Ku != Ca && (this.Ku = Ca, this.aj.innerHTML = r(Ca));
  this.Mx != X && (this.Mx = X, this.tC.innerHTML = r(X));
  this.nv != ta && (this.nv = ta, this.zA.innerHTML = r(ta));
  this.Yx != qa && (this.Yx = qa, this.iC.innerHTML = r(qa));
  this.Bv != Gb && (this.Bv = Gb, this.dB.innerHTML = r(Gb));
  this.ey != eb && (this.ey = eb, this.nC.innerHTML = r(eb));
  this.Nv != ub && (this.Nv =
    ub, this.BB.innerHTML = r(ub));
  this.jy != Da && (this.jy = Da, this.sC.innerHTML = r(Da));
  this.Av != Ea && (this.Av = Ea, this.UA.innerHTML = r(Ea));
  this.dy != mb && (this.dy = mb, this.mC.innerHTML = r(mb));
  this.Iv != wa && (this.Iv = wa, this.nB.innerHTML = r(wa));
  this.iy != La && (this.iy = La, this.rC.innerHTML = r(La));
  this.Fk != ha && (this.Fk = ha, this.Um.innerHTML = r(ha));
  this.Wx != Fa && (this.Wx = Fa, this.gC.innerHTML = r(Fa));
  this.Ek != Ga && (this.Ek = Ga, this.Tm.innerHTML = r(Ga));
  this.Vx != ja && (this.Vx = ja, this.fC.innerHTML = r(ja));
  this.Yv != za && (this.Yv = za,
    this.DC.innerHTML = r(za));
  this.my != bb && (this.my = bb, this.wC.innerHTML = r(bb));
  this.Cv != fb && (this.Cv = fb, this.eB.innerHTML = r(fb));
  this.fy != nb && (this.fy = nb, this.oC.innerHTML = r(nb));
  this.bv != Ua && (this.bv = Ua, this.Vz.innerHTML = r(Ua));
  this.Ux != cb && (this.Ux = cb, this.eC.innerHTML = r(cb));
  this.Au != a && (this.Au = a, this.Fy.innerHTML = r(a));
  this.Jx != b && (this.Jx = b, this.UB.innerHTML = r(b));
  c = m(d / this.AA);
  g = m(d / 6E4 % 60);
  d = m(d / 1E3 % 60);
  h = m(f / this.AA);
  l = m(f / 6E4 % 60);
  f = m(f / 1E3 % 60);
  if (this.ay != c || this.by != g || this.cy != d) this.ay =
    c, this.by = g, this.cy = d, this.lC.innerHTML = this.Er(c, g, d);
  if (this.wv != h || this.xv != l || this.yv != f) this.wv = h, this.xv = l, this.yv = f, this.SA.innerHTML = this.Er(h, l, f)
};
e.Er = function(a, b, c) {
  return (10 > a ? "0" : "") + a + ":" + (10 > b ? "0" : "") + b + ":" + (10 > c ? "0" : "") + c
};
e.fr = function() {
  Ox(this.F);
  var a = M(this.F);
  P("div", a, null, "sectionTitle").innerHTML = "Statistics";
  this.st = P("table", a, null, "statisticsTable");
  a = 0;
  this.St(a++);
  var b = a++,
    b = zz(this, "Game Victories:", b);
  this.V(b, 1).innerHTML = "n/a";
  this.xC = this.V(b, 2);
  b = a++;
  b = zz(this, "Time Played:", b);
  this.SA = this.V(b, 1);
  this.lC = this.V(b, 2);
  b = a++;
  b = zz(this, "Turns Played:", b);
  this.CC = this.V(b, 1);
  this.vC = this.V(b, 2);
  b = a++;
  b = zz(this, "Doors Opened:", b);
  this.Dz = this.V(b, 1);
  this.ZB = this.V(b, 2);
  b = a++;
  b = zz(this, "Rooms Cleared:",
    b);
  this.jB = this.V(b, 1);
  this.pC = this.V(b, 2);
  b = a++;
  b = zz(this, "Levels Cleared:", b);
  this.Vm = this.V(b, 1);
  this.hC = this.V(b, 2);
  b = a++;
  b = zz(this, "Dungeons Cleared:", b);
  this.vm = this.V(b, 1);
  this.$B = this.V(b, 2);
  b = a++;
  b = zz(this, "Castles Conquered:", b);
  this.Oy = this.V(b, 1);
  this.WB = this.V(b, 2);
  b = a++;
  b = zz(this, "Farms Purchased:", b);
  this.Jz = this.V(b, 1);
  this.bC = this.V(b, 2);
  b = a++;
  b = zz(this, "Minions Summoned:", b);
  this.GA = this.V(b, 1);
  this.kC = this.V(b, 2);
  b = a++;
  b = zz(this, "Treasure Chests:", b);
  this.AC = this.V(b, 1);
  this.uC =
    this.V(b, 2);
  b = a++;
  b = zz(this, "Weapon Racks:", b);
  this.LC = this.V(b, 1);
  this.yC = this.V(b, 2);
  b = a++;
  b = zz(this, "Bookcases:", b);
  this.Ky = this.V(b, 1);
  this.VB = this.V(b, 2);
  b = a++;
  b = zz(this, "Monster Gold:", b);
  this.Rz = this.V(b, 1);
  this.dC = this.V(b, 2);
  b = a++;
  b = zz(this, "Item Gold:", b);
  this.Qz = this.V(b, 1);
  this.cC = this.V(b, 2);
  b = a++;
  b = zz(this, "Direct Kills:", b);
  this.mz = this.V(b, 1);
  this.YB = this.V(b, 2);
  b = a++;
  b = zz(this, "Scroll Kills:", b);
  this.lB = this.V(b, 1);
  this.qC = this.V(b, 2);
  b = a++;
  b = zz(this, "Minion Kills:", b);
  this.Ap = this.V(b,
    1);
  this.jC = this.V(b, 2);
  b = a++;
  b = zz(this, "Farmed Kills:", b);
  this.Iz = this.V(b, 1);
  this.aC = this.V(b, 2);
  b = a++;
  b = zz(this, "Times Stunned:", b);
  this.aj = this.V(b, 1);
  this.tC = this.V(b, 2);
  b = a++;
  b = zz(this, "Melee Attacks:", b);
  this.zA = this.V(b, 1);
  this.iC = this.V(b, 2);
  b = a++;
  b = zz(this, "Ranged Attacks:", b);
  this.dB = this.V(b, 1);
  this.nC = this.V(b, 2);
  b = a++;
  b = zz(this, "Spells Cast:", b);
  this.BB = this.V(b, 1);
  this.sC = this.V(b, 2);
  b = a++;
  b = zz(this, "Potions Used:", b);
  this.UA = this.V(b, 1);
  this.mC = this.V(b, 2);
  b = a++;
  b = zz(this, "Scrolls Used:",
    b);
  this.nB = this.V(b, 1);
  this.rC = this.V(b, 2);
  b = a++;
  b = zz(this, "Items Sold:", b);
  this.Um = this.V(b, 1);
  this.gC = this.V(b, 2);
  b = a++;
  b = zz(this, "Items Found:", b);
  this.Tm = this.V(b, 1);
  this.fC = this.V(b, 2);
  b = a++;
  b = zz(this, "Uncommon Items:", b);
  this.DC = this.V(b, 1);
  this.wC = this.V(b, 2);
  b = a++;
  b = zz(this, "Rare Items:", b);
  this.eB = this.V(b, 1);
  this.oC = this.V(b, 2);
  b = a++;
  b = zz(this, "Historic Items:", b);
  this.Vz = this.V(b, 1);
  this.eC = this.V(b, 2);
  a = zz(this, "Ancient Items:", a);
  this.Fy = this.V(a, 1);
  this.UB = this.V(a, 2)
};
e.St = function(a) {
  a = this.st.insertRow(a);
  Vx(a).innerHTML = "";
  var b = Vx(a);
  b.style.textAlign = "right";
  b.innerHTML = "Current";
  a = Vx(a);
  a.style.textAlign = "right";
  a.innerHTML = "Total"
};

function zz(a, b, c) {
  a = a.st.insertRow(c);
  c = a.insertCell(0);
  c.className = "statisticsTableLabel";
  c.innerHTML = b;
  return a
}
e.V = function(a, b) {
  var c = a.insertCell(b);
  c.style.textAlign = "right";
  c.style.width = "70px";
  return c
};

function yz() {
  this.F = "gameOptionsContainer";
  this.Ya = !0;
  this.tA = !1
}
yz.prototype = new Xx;
yz.prototype.J = function() {
  var a = M("infoTextEnabledCheckbox"),
    b = M("spellEffectsEnabledCheckbox"),
    c = M("mapOverlayEnabledCheckbox"),
    d = M("offlineProcessingEnabledCheckbox"),
    f = M("inactiveTabProcessingEnabledCheckbox"),
    g = M("spriteRenderOrderEnabledCheckbox"),
    h = M("fpsVisibleCheckbox");
  a.checked = w.Nb.Mm;
  b.checked = w.Nb.nq;
  c.checked = w.Nb.up;
  d.checked = w.Nb.Jp;
  f.checked = w.Nb.bp;
  g.checked = w.Nb.rq;
  h.checked = w.Nb.Po;
  this.tA || (a.addEventListener("change", function() {
    w.Nb.Mm = a.checked
  }), b.addEventListener("change",
    function() {
      w.Nb.nq = b.checked
    }), c.addEventListener("change", function() {
    w.Nb.up = c.checked
  }), d.addEventListener("change", function() {
    w.Nb.Jp = d.checked
  }), f.addEventListener("change", function() {
    w.Nb.bp = f.checked
  }), g.addEventListener("change", function() {
    w.Nb.rq = g.checked
  }), h.addEventListener("change", function() {
    w.Nb.Po = h.checked
  }), this.tA = !0)
};

function Az(a) {
  this.F = "partyCreationTabContent";
  this.C = a;
  this.Vb = [];
  this.cr = [];
  this.Ww = !1;
  this.rx = null;
  this.tz = this.zr = this.jm = !1;
  this.$i = this.oo = null;
  this.ql = !1
}
Az.prototype = new jy;
e = Az.prototype;
e.Me = function() {
  this.C.qa = !1;
  this.C.ha = !1
};
e.Ne = function() {
  this.C.qa = !1;
  this.C.ha = !1
};
e.Zd = function() {
  this.C.qa = !1;
  this.C.ha = !1
};
e.J = function() {
  this.C.qa = !1;
  Ox(this.F);
  this.ql = !1;
  this.Vb.length = 0;
  this.cr.length = 0;
  this.Ww = !1;
  this.$i = null
};
e.ba = function() {
  if (!(0 < w.i.D.length)) {
    this.ql || (Bz(this), this.ql = !0);
    if (this.jm) {
      this.jm = !1;
      var a = this.rx;
      if (a)
        for (; 0 < a.rows.length;) a.deleteRow(0);
      var b = null,
        a = 0,
        c;
      for (c = 0; c < this.Vb.length; c++) b = this.rx.insertRow(a), a++, b = b.insertCell(0), Cz(this, b, this.Vb[c], c)
    }
    this.tz != this.zr && ((this.tz = this.zr) ? Rx(this.oo) : Qx(this.oo))
  }
};

function Bz(a) {
  var b = M(a.F);
  Px(b);
  Dz(b);
  Ez(a, b);
  Fz(a, b);
  b = P("div", b, null, "partyConfirmationPanel");
  a.$i = P("div", b, "startQuestButton", "disabledUpgradeButton");
  a.$i.style.padding = "15px";
  a.$i.style.textAlign = "center";
  a.$i.innerHTML = Gz();
  a.$i.onclick = function() {
    if (!(1 > a.Vb.length) && a.Ww) {
      var b = a.Vb,
        d, f, g, h = "";
      for (d = 0; d < b.length; d++) {
        f = b[d].Qy;
        f = av[f];
        g = b[d].za;
        var l = f.d;
        g = new Uh(g, bt, f.pa, f, new Zv);
        var n = g.K;
        g.ee = w.fh.v(l);
        l = hi(f.nb());
        g.Fh = l;
        n.Tq = 12;
        n.Pr = 2;
        n.ot = 3;
        n.Eb = 1;
        l = Math.min(40, w.i.wh);
        if (0 < l) {
          var p =
            g;
          p.de = l;
          p.Zi = ws(p)
        }
        f.fe && (g.Ci = 1);
        xs();
        for (var l = g.Z, s = p = void 0, s = 0; s < l.length; s++)(p = Nv(w.Sm, l[s], g, 1, 0)) && g.Qk(p);
        ji(n, 1, f.Ma);
        f = g;
        w.i.D.push(f);
        0 < d && (h += ", ");
        h += f.Kc.Ka
      }
      w.i.gg = w.i.D[0];
      w.i.ce = Hz();
      w.lg = !0;
      cg();
      cd();
      Iz();
      w.$h.J();
      w.Ee.J();
      Ta("Party Creation", h)
    }
  }
}

function Dz(a) {
  a = P("div", a, "partyCreationHeader", "partyCreationIntroductionPanel");
  var b = P("div", a, null, "sectionTitle");
  b.style.fontSize = "14px";
  b.innerHTML = "The land of CLICKPOCALYPSE needs you!";
  b = P("p", a, null, null);
  b.style.fontSize = "13px";
  b.innerHTML = "All the dungeons, forgotten temples, forbidden towers, dark mines, torture chambers, and claustrophobic caverns, which used to be such nice, family friendly environments, have been overrun with cruel monsters that just plain need killing.";
  a = P("p",
    a, null, null);
  a.style.fontSize = "13px";
  a.innerHTML = "Only you can set things right, by selecting your brave champions, and murdering every single monster in the land."
}

function Gz() {
  var a = 4 + Rs.t;
  if (4 === a) return "Select Up to Four Party Members";
  if (5 === a) return "Select Up to Five Party Members"
}

function Ez(a, b) {
  var c = P("div", b, null, "partySelectionHeaderContainer");
  P("span", c, null, "partySelectionHeaderSpan").innerHTML = Gz();
  var c = P("div", b, null, "partySelectionPanel"),
    c = P("table", c, null, "partySelectionTable"),
    d = null,
    f = 0,
    g, h;
  for (h = 0; h < av.length; h++)
    if (d = c.insertRow(f), f++, g = d.insertCell(0), d = w.i.wh < av[h].Le) {
      var d = a,
        l = h;
      g = P("table", g, null, "lockedCharacterSelectionTable").insertRow(0).insertCell(0);
      var n = w.fh.v(av[l].d),
        p = P("img", g, null, "characterImage");
      p.src = "images/Transparent.gif";
      p.style.height =
        "35px";
      p.style.width = "35px";
      p.style.background = "url('spritesheet/monsters.png') -" + (n.ub + 10) + "px -" + (n.vb + 12) + "px";
      g = P("div", g, null, null);
      n = void 0;
      switch (av[l].Le) {
        case 0:
          n = "Character Unlocked Already (bug?)";
          break;
        case 1:
          n = "Character Unlocked After First Prestige";
          break;
        case 2:
          n = "Character Unlocked After Second Prestige";
          break;
        case 3:
          n = "Character Unlocked After Third Prestige";
          break;
        case 4:
          n = "Character Unlocked After Fourth Prestige";
          break;
        case 5:
          n = "Character Unlocked After Fifth Prestige";
          break;
        case 6:
          n = "Character Unlocked After Sixth Prestige";
          break;
        default:
          n = "Character Unlocked Later"
      }
      g.innerHTML = n;
      d.cr.push(null)
    } else Jz(a, g, h)
}

function Fz(a, b) {
  var c = P("div", b, null, "selectedCharactersHeaderContainer");
  P("span", c, null, "partySelectionHeaderSpan").innerHTML = "Selected Characters";
  c = P("div", b, null, "selectedCharactersPanel");
  a.rx = P("table", c, null, "partySelectionTable");
  a.oo = P("div", c, null, "partySelectionNameWarning");
  a.oo.innerHTML = "Give your characters unique names.";
  a.oo.style.display = "none"
}

function Jz(a, b, c) {
  var d = av[c],
    f, g, h;
  b = P("table", b, null, "characterSelectionButton");
  a.cr.push(b);
  b.onclick = function() {
    a.Vb.length >= 4 + Rs.t || (a.Vb.push({
      Qy: c,
      za: av[c].za
    }), a.jm = !0, Kz(a))
  };
  f = b.insertRow(0);
  b = b.insertRow(1);
  g = f.insertCell(0);
  g.style.width = "35px";
  g.style.textAlign = "center";
  h = w.fh.v(d.d);
  g = P("img", g, null, "characterImage");
  g.src = "images/Transparent.gif";
  g.style.height = "35px";
  g.style.width = "35px";
  g.style.background = "url('spritesheet/monsters.png') -" + (h.ub + 10) + "px -" + (h.vb + 12) + "px";
  f = f.insertCell(1);
  f.style.width = "410px";
  f.style.textAlign = "left";
  f = P("span", f, null, null);
  f.style.fontWeight = "bold";
  f.style.fontSize = "13px";
  f.innerHTML = d.Ka;
  b = b.insertCell(0);
  b.colSpan = 2;
  b.innerHTML = d.yb
}

function Cz(a, b, c, d) {
  var f = av[c.Qy],
    g, h, l, n, p, s;
  b = P("div", b, null, "selectedCharacterContainer");
  g = P("table", b, null, "selectedCharacterSelectionTable");
  c.za && "" !== c.za || (g.className = "errorSelectedCharacterSelectionTable");
  h = g.insertRow(0);
  l = g.insertRow(1);
  n = h.insertCell(0);
  n.style.width = "35px";
  n.style.textAlign = "center";
  p = w.fh.v(f.d);
  n = P("img", n, null, "characterImage");
  n.src = "images/Transparent.gif";
  n.style.height = "35px";
  n.style.width = "35px";
  n.style.background = "url('spritesheet/monsters.png') -" + (p.ub +
    10) + "px -" + (p.vb + 12) + "px";
  h = h.insertCell(1);
  h.style.width = "400px";
  h.style.textAlign = "left";
  s = P("input", h, null, null);
  s.type = "text";
  s.size = 15;
  s.maxLength = 15;
  s.value = c.za;
  s.onkeyup = function() {
    Lz(a, c, s.value, g)
  };
  s.onchange = function() {
    Lz(a, c, s.value, g)
  };
  h = P("span", h, null, null);
  h.style.fontWeight = "bold";
  h.style.fontSize = "13px";
  h.style.marginLeft = "5px";
  h.innerHTML = "the " + f.Ka;
  l = l.insertCell(0);
  l.colSpan = 2;
  l.innerHTML = f.yb;
  f = P("div", b, null, "deselectCharacterButton");
  f.title = "Remove Character";
  f.innerHTML =
    "X";
  f.onmouseup = function() {
    0 > d || d >= a.Vb.length || (a.Vb.splice(d, 1), a.jm = !0, Kz(a));
    return !1
  };
  f = 0 < d;
  l = P("div", b, null, f ? "moveUpButton" : "disabledMoveUpButton");
  l.title = "Move Up";
  l.innerHTML = "&#9650";
  f && (l.onmouseup = function() {
    if (0 !== d) {
      var b = a.Vb[d - 1];
      a.Vb[d - 1] = a.Vb[d];
      a.Vb[d] = b;
      a.jm = !0;
      Kz(a)
    }
    return !1
  });
  f = d < a.Vb.length - 1;
  b = P("div", b, null, f ? "moveDownButton" : "disabledMoveDownButton");
  b.title = "Move Down";
  b.innerHTML = "&#9660;";
  f && (b.onmouseup = function() {
    if (!(d >= a.Vb.length - 1)) {
      var b = a.Vb[d + 1];
      a.Vb[d + 1] = a.Vb[d];
      a.Vb[d] = b;
      a.jm = !0;
      Kz(a)
    }
    return !1
  })
}

function Lz(a, b, c, d) {
  var f = null != b.za && "" != b.za;
  c ? (c = c.replace("&", "&amp;"), c = c.replace("<", "&lt;"), c = c.replace(">", "&gt;"), c = c.replace('"', "&quot;"), c = c.replace("'", "&#x27;"), c = c.replace("/", "&#x2F;")) : c = "";
  b.za = c;
  b = null != b.za && "" != b.za;
  f && !b ? d.className = "errorSelectedCharacterSelectionTable" : !f && b && (d.className = "selectedCharacterSelectionTable");
  Kz(a)
}

function Kz(a) {
  var b = !0,
    c, d, f = 4 + Rs.t,
    g = [],
    h = !1;
  for (d = 0; d < a.Vb.length; d++)(c = a.Vb[d].za) && "" !== c || (b = !1), -1 < g.indexOf(c) && (h = !0, b = !1), g.push(c);
  for (d = 0; d < av.length; d++) c = w.i.wh < av[d].Le, c || (a.cr[d].className = a.Vb.length === f ? "disabledCharacterSelectionButton" : "characterSelectionButton");
  0 === a.Vb.length && (b = !1);
  d = f - a.Vb.length;
  f = Gz();
  if (b) switch (a.$i.className = "upgradeButton", d) {
    case 1:
      f = "You can add one more character, or click to play with a smaller party.";
      break;
    case 2:
      f = "You can add two more characters, or click to play with a smaller party.";
      break;
    case 3:
      f = "You can add three more characters, or click to play with a smaller party.";
      break;
    case 4:
      f = "You can add four more characters, or click to play with a smaller party.";
      break;
    default:
      f = "Start The Adventure!"
  } else a.$i.className = "disabledUpgradeButton";
  a.$i.innerHTML = f;
  a.zr = h;
  a.Ww = b
};

function Mz() {}
Mz.prototype.J = function() {};

function Nz(a, b) {
  this.lh = a;
  this.$ = b;
  this.Ej = this.Cr = this.gf = this.Oh = this.Af = this.Ie = this.Fi = this.Ei = this.item = null;
  this.qi()
}
Nz.prototype = new Mz;
e = Nz.prototype;
e.Xa = function() {};
e.Ne = function() {};
e.Zd = function() {};
e.ux = function(a) {
  if (this.item = a) {
    var b = this.item.Uk();
    this.Ei.style.background = "url('spritesheet/items.png') -" + b.ub + "px -" + b.vb + "px";
    this.Fi.innerHTML = Lv(this.item);
    this.Ie.innerHTML = Kv(this.item);
    this.Af.innerHTML = this.item.ns + "";
    this.gf.innerHTML = r(this.item.zf);
    this.Oh.innerHTML = r(this.item.va) + " " + Jv(this.item);
    var c = w.i.D[this.$],
      b = c.ef(a.r);
    this.Oh.className = b ? this.item.va > b.va ? "itemValueBetter" : this.item.va < b.va ? "itemValueWorse" : "" : "itemValueBetter";
    this.gf.className = b ? a.zf > b.zf ? "itemValueBetter" :
      a.zf < b.zf ? "itemValueWorse" : "" : "itemValueBetter";
    this.Ie.className = Dy(this.item.uf());
    !b || this.item.va > b.va ? (this.Ej.style.display = "block", this.Ej.onclick = function() {
      c.Qk(a);
      return !1
    }) : this.Ej.style.display = "none"
  } else this.Ei.style.background = "", this.Fi.innerHTML = "", this.Ie.innerHTML = "", this.Af.innerHTML = "", this.Oh.innerHTML = "", this.gf.className = "", this.Ej.style.display = "none", this.Ej.onclick = null, this.Ie.className = ""
};
e.qi = function() {
  var a = this.lh,
    b = a.insertCell(0);
  b.style.width = "50px";
  b.style.padding = "0";
  b.style.textAlign = "center";
  this.Ei = P("img", b, null, "itemImage");
  this.Ei.src = "images/Transparent.gif";
  this.Fi = a.insertCell(1);
  this.Fi.style.width = "250px";
  this.Ie = a.insertCell(2);
  this.Ie.style.width = "110px";
  this.Ie.style.textAlign = "center";
  this.Af = a.insertCell(3);
  this.Af.style.textAlign = "right";
  this.Af.style.paddingRight = "5px";
  this.Af.style.width = "60px";
  this.Oh = a.insertCell(4);
  this.Oh.style.width = "120px";
  this.gf =
    a.insertCell(5);
  this.gf.style.textAlign = "right";
  this.gf.style.paddingRight = "5px";
  this.gf.style.width = "70px";
  this.Cr = a.insertCell(6);
  this.Cr.style.width = "100px";
  this.Ej = P("div", this.Cr, null, "equipButtonDiv");
  this.Ej.innerHTML = "Equip";
  this.Ej.style.display = "none"
};

function Oz(a, b) {
  this.F = a;
  this.Ya = !0;
  this.$ = b;
  this.Jj = null;
  this.bh = []
}
Oz.prototype = new Xx;
e = Oz.prototype;
e.J = function() {
  this.bh.length = 0;
  Ox(this.F);
  this.Jj = null
};
e.ba = function() {
  if (!(0 > this.$ || this.$ >= w.i.D.length)) {
    this.Jj || this.pf();
    var a = w.i.D[this.$].Ld.items;
    a.length !== this.bh.length && this.mk(a.length);
    var b;
    for (b = 0; b < this.bh.length; b++) a[b] !== this.bh[b].item && this.bh[b].ux(a[b])
  }
};
e.mk = function(a) {
  for (; this.bh.length > a;) this.Jj.deleteRow(-1), this.bh.splice(this.bh.length - 1, 1);
  for (; this.bh.length < a;) this.bh.push(new Nz(this.Jj.insertRow(this.bh.length + 1), this.$))
};
e.pf = function() {
  var a = this.F;
  Ox(a);
  this.Jj = P("table", M(a), null, "monsterTable");
  this.Ri(this.Jj.insertRow(0))
};
e.Ri = function(a) {
  var b = Vx(a);
  b.style.textAlign = "center";
  b.style.padding = "0";
  b.innerHTML = "Icon";
  Vx(a).innerHTML = "Item Name";
  b = Vx(a);
  b.style.textAlign = "center";
  b.innerHTML = "Rarity";
  b = Vx(a);
  b.style.textAlign = "right";
  b.style.paddingRight = "5px";
  b.innerHTML = "Level";
  b = Vx(a);
  b.style.textAlign = "left";
  b.style.paddingRight = "5px";
  b.innerHTML = "Effect";
  b = Vx(a);
  b.style.textAlign = "right";
  b.style.paddingRight = "5px";
  b.innerHTML = "Gold";
  a = Vx(a);
  a.style.textAlign = "center";
  a.innerHTML = "Equip"
};

function Pz(a, b) {
  this.lh = a;
  this.$ = b;
  this.Cr = this.gf = this.Oh = this.Af = this.Ie = this.Fi = this.Ei = this.item = null;
  this.qi()
}
Pz.prototype = new Mz;
e = Pz.prototype;
e.Xa = function() {};
e.Ne = function() {};
e.Zd = function() {};
e.ux = function(a) {
  (this.item = a) ? (a = this.item.Uk(), this.Ei.style.background = "url('spritesheet/items.png') -" + a.ub + "px -" + a.vb + "px", this.Fi.innerHTML = Lv(this.item), this.Ie.innerHTML = Kv(this.item), this.Af.innerHTML = this.item.ns + "", this.Oh.innerHTML = r(this.item.va) + " " + Jv(this.item), this.gf.innerHTML = r(this.item.zf), this.Ie.className = Dy(this.item.uf())) : (this.Ei.style.background = "", this.Fi.innerHTML = "", this.Ie.innerHTML = "", this.Af.innerHTML = "", this.Oh.innerHTML = "", this.gf.innerHTML = "", this.Ie.className =
    "")
};
e.qi = function() {
  var a = this.lh,
    b = a.insertCell(0);
  b.style.width = "50px";
  b.style.padding = "0";
  b.style.textAlign = "center";
  this.Ei = P("img", b, null, "itemImage");
  this.Ei.src = "images/Transparent.gif";
  this.Fi = a.insertCell(1);
  this.Fi.style.width = "280px";
  this.Ie = a.insertCell(2);
  this.Ie.style.width = "110px";
  this.Ie.style.textAlign = "center";
  this.Af = a.insertCell(3);
  this.Af.style.textAlign = "right";
  this.Af.style.paddingRight = "5px";
  this.Af.style.width = "70px";
  this.Oh = a.insertCell(4);
  this.Oh.style.width = "120px";
  this.gf = a.insertCell(5);
  this.gf.style.textAlign = "right";
  this.gf.style.paddingRight = "5px";
  this.gf.style.width = "80px"
};

function Qz(a, b) {
  this.F = a;
  this.Ya = !0;
  this.$ = b;
  this.zm = null;
  this.sf = []
}
Qz.prototype = new Xx;
e = Qz.prototype;
e.J = function() {
  var a;
  for (a = 0; a < this.sf.length; a++) this.sf[a].J();
  this.sf.length = 0;
  Ox(this.F);
  this.zm = null
};
e.ba = function() {
  if (!(0 > this.$ || this.$ >= w.i.D.length)) {
    this.zm || this.pf();
    var a = w.i.D[this.$],
      b = a.Z;
    b.length !== this.sf.length && this.mk(b.length);
    var c, d;
    for (c = 0; c < this.sf.length; c++) d = a.ef(b[c]), d !== this.sf[c].item && this.sf[c].ux(d)
  }
};
e.mk = function(a) {
  for (; this.sf.length > a;) this.zm.deleteRow(-1), this.sf.splice(this.sf.length - 1, 1);
  for (; this.sf.length < a;) this.sf.push(new Pz(this.zm.insertRow(this.sf.length + 1), this.$))
};
e.pf = function() {
  var a = this.F;
  Ox(a);
  this.zm = P("table", M(a), null, "monsterTable");
  this.Ri(this.zm.insertRow(0))
};
e.Ri = function(a) {
  var b = Vx(a);
  b.style.textAlign = "center";
  b.style.padding = "0";
  b.innerHTML = "Icon";
  Vx(a).innerHTML = "Item Name";
  b = Vx(a);
  b.style.textAlign = "center";
  b.innerHTML = "Rarity";
  b = Vx(a);
  b.style.textAlign = "right";
  b.style.paddingRight = "5px";
  b.innerHTML = "Level";
  b = Vx(a);
  b.style.textAlign = "left";
  b.style.paddingRight = "5px";
  b.innerHTML = "Effect";
  a = Vx(a);
  a.style.textAlign = "right";
  a.style.paddingRight = "5px";
  a.innerHTML = "Gold"
};

function Rz(a) {
  this.F = "equipAllButtonContainer" + a;
  this.Ya = !0;
  this.$ = a;
  this.Xq = !1;
  this.gw = M("equipImprovements" + a);
  var b = this;
  this.gw.onclick = function() {
    b.Br();
    return !1
  }
}
Rz.prototype = new Xx;
Rz.prototype.J = function() {};
Rz.prototype.ba = function() {
  0 > this.$ || this.$ >= w.i.D.length || (this.Wt() ? this.Xq || (this.Xq = !0, this.gw.className = "upgradeButton") : this.Xq && (this.Xq = !1, this.gw.className = "disabledUpgradeButton"))
};
Rz.prototype.Br = function() {
  w.Di.Br(w.i.D[this.$])
};
Rz.prototype.Wt = function() {
  return w.Di.Wt(w.i.D[this.$])
};

function Sz(a, b, c) {
  this.F = b;
  this.C = a;
  this.$ = c;
  this.QD = "itemTableAdventurer" + c;
  this.mD = "adventurerEquippedItems" + c;
  this.nD = new Qz(this.mD, c);
  this.Jj = new Oz(this.QD, c);
  R(this, this.nD);
  R(this, new Rz(c));
  R(this, this.Jj)
}
Sz.prototype = new jy;

function Tz(a, b) {
  this.F = a;
  this.Ya = !0;
  this.$ = b;
  this.jt = new dy("Skills", !0);
  this.fA = new dy("Inventory", !0);
  this.jt.ha = !0;
  this.zz = !1;
  var c = new gy("characterTabMenu" + this.$),
    d = new Uz(this.jt, "characterSkillsContainer" + this.$, this.$),
    f = new Sz(this.fA, "characterInventoryContainer" + this.$, this.$);
  hy(c, this.jt);
  hy(c, this.fA);
  R(this, c);
  R(this, d);
  R(this, f)
}
Tz.prototype = new Yx;
Tz.prototype.ba = function() {
  var a = w.i.D[this.$],
    a = 0 < a.de && a.Zi;
  this.zz !== a && (this.zz = a, this.jt.qh = a ? !0 : !1);
  $x(this)
};

function Vz(a, b) {
  this.F = a;
  this.Ya = !0;
  this.$ = b;
  this.xy = this.Jy = this.AB = this.hz = this.gz = this.ez = this.aj = this.Ap = this.pA = this.EB = this.Wz = this.bz = this.DB = this.Ij = this.rA = this.be = null;
  this.zu = this.iv = this.Mu = this.Ov = this.Pu = this.Ou = this.Nu = this.Kk = this.Ik = this.Gk = this.Pv = this.$u = this.Lu = this.Jk = this.Zu = this.$f = -1
}
Vz.prototype = new Xx;
Vz.prototype.J = function() {
  this.zu = this.iv = this.Mu = this.Ov = this.Pu = this.Ou = this.Nu = this.Kk = this.Ik = this.Gk = this.Pv = this.$u = this.Lu = this.Jk = this.Zu = this.$f = -1;
  var a = 0;
  this.be = P("table", M(this.F), null, "characteristicsTable");
  this.rA = Wx(this.be, "Level:", a++);
  this.Ij = Wx(this.be, "Health:", a++);
  this.DB = Wx(this.be, "Spirit:", a++);
  this.Wz = Wx(this.be, "HP Regen:", a++);
  this.EB = Wx(this.be, "Spirit Regen:", a++);
  this.pA = Wx(this.be, "Kills:", a++);
  this.Ap = Wx(this.be, "Minion Kills:", a++);
  this.aj = Wx(this.be, "Stun Count:",
    a++);
  this.ez = Wx(this.be, "Damage Given:", a++);
  this.gz = Wx(this.be, "Damage Received:", a++);
  this.hz = Wx(this.be, "Damage Resist:", a++);
  this.AB = Wx(this.be, "Spell Discount:", a++);
  this.dD = Wx(this.be, "Critical Chance:", a++);
  this.bz = Wx(this.be, "Cool-down Turns:", a++);
  this.Jy = Wx(this.be, "Max Attack/Turn:", a++);
  this.xy = Wx(this.be, "Extra Attack:", a)
};
Vz.prototype.ba = function() {
  var a = w.i.D[this.$].K,
    b = a.Eb,
    c = a.Sa,
    d = a.Yc,
    f = Mw(a, !0),
    g = a.Pr + a.ap + Ys.t,
    h = a.ot + a.pq + Zs.t,
    l = a.im,
    n = a.Ff,
    p = a.vq,
    s = a.rj,
    u = a.sj,
    y = a.wo,
    A = a.xn,
    C = a.lm,
    v = 1 + a.Oj,
    a = 0 < a.Oj ? a.Wn : 0;
  this.$f !== b && (this.$f = b, this.rA.innerHTML = b + "");
  this.Zu !== c && (this.Zu = c, this.Ij.innerHTML = r(c));
  this.Jk !== d && (this.Jk = d, this.DB.innerHTML = r(d));
  this.Lu !== f && (this.Lu = f, this.bz.innerHTML = f + "");
  this.$u !== g && (this.$u = g, this.Wz.innerHTML = g + "%");
  this.Pv !== h && (this.Pv = h, this.EB.innerHTML = h + "%");
  this.Gk !== l && (this.Gk =
    l, this.pA.innerHTML = r(l));
  this.Ik !== n && (this.Ik = n, this.Ap.innerHTML = r(n));
  this.Kk !== p && (this.Kk = p, this.aj.innerHTML = r(p));
  this.Nu !== s && (this.Nu = s, this.ez.innerHTML = r(s));
  this.Ou !== u && (this.Ou = u, this.gz.innerHTML = r(u));
  this.Pu !== y && (this.Pu = y, this.hz.innerHTML = y + "%");
  this.Ov !== A && (this.Ov = A, this.AB.innerHTML = A + "%");
  this.Mu !== C && (this.Mu = C, this.dD.innerHTML = C + "%");
  this.iv != v && (this.iv = v, this.Jy.innerHTML = v + "");
  this.zu != a && (this.zu = a, this.xy.innerHTML = a + "%")
};

function Wz(a, b, c, d) {
  this.F = a;
  this.Ya = !0;
  this.qE = c;
  this.bD = d;
  this.$ = b;
  this.zB = this.vB = this.qA = this.gA = this.XB = this.Cn = null;
  this.Mv = this.Jv = this.hv = this.dv = this.Tv = -1
}
Wz.prototype = new Xx;
Wz.prototype.J = function() {
  this.Mv = this.Jv = this.hv = this.dv = this.Tv = -1;
  this.Cn = P("table", M(this.F), null, "characteristicsTable");
  var a = this.qE + ":",
    b = this.Cn.insertRow(0),
    c = document.createElement("th");
  c.className = "characteristicsTableLabel";
  b.appendChild(c);
  c.innerHTML = a;
  a = document.createElement("th");
  a.style.textAlign = "left";
  b.appendChild(a);
  this.XB = a;
  this.gA = Wx(this.Cn, "Item Bonus:", 1);
  this.qA = Wx(this.Cn, "Level Bonus:", 2);
  this.vB = Wx(this.Cn, "Skill Bonus:", 3);
  this.zB = Wx(this.Cn, "Spell Bonus:", 4)
};
Wz.prototype.ba = function() {
  var a = Xz(w.i.D[this.$].K, this.bD),
    b = $h(a),
    c = a.va,
    d = a.Pc,
    f = a.Xh,
    a = a.wc;
  this.Tv !== b && (this.Tv = b, this.XB.innerHTML = r(b));
  this.dv !== c && (this.dv = c, this.gA.innerHTML = r(c));
  this.hv !== d && (this.hv = d, this.qA.innerHTML = r(d));
  this.Mv !== f && (this.Mv = f, this.zB.innerHTML = r(f) + "%");
  this.Jv !== a && (this.Jv = a, this.vB.innerHTML = r(a) + "%")
};

function Xz(a, b) {
  switch (b) {
    case 0:
      return a.sd;
    case 1:
      return a.je;
    case 2:
      return a.xe;
    case 3:
      return a.Ae;
    case 4:
      return a.Jb;
    case 5:
      return a.Ke
  }
  return null
};

function Yz(a, b) {
  this.F = a;
  this.Ya = !0;
  this.$ = b;
  this.bB = new Vz(a, b);
  this.iz = new Wz(a, b, "Damage", 0);
  this.Gy = new Wz(a, b, "Armor", 1);
  this.Hy = new Wz(a, b, "Attack Rating", 2);
  this.lz = new Wz(a, b, "Defense Rating", 3);
  this.vA = new Wz(a, b, "Max Health", 4);
  this.yA = new Wz(a, b, "Max Spirit", 5)
}
Yz.prototype = new Xx;
Yz.prototype.J = function() {
  Ox(this.F);
  0 > this.$ || this.$ >= w.i.D.length || (this.bB.J(), this.iz.J(), this.Gy.J(), this.Hy.J(), this.lz.J(), this.vA.J(), this.yA.J())
};
Yz.prototype.ba = function() {
  0 > this.$ || this.$ >= w.i.D.length || (this.bB.Xa(), this.iz.Xa(), this.Gy.Xa(), this.Hy.Xa(), this.lz.Xa(), this.vA.Xa(), this.yA.Xa())
};

function Zz(a, b, c) {
  this.F = b;
  this.C = a;
  this.$ = c;
  a = new is([
    [Ax[c]]
  ], !1);
  R(this, new Yz("characterPropertiesContainer" + c, c));
  R(this, new Fy("characterLevelUpButtonContainer" + c, a, !0));
  R(this, new Tz("characterTabContainer" + c, c))
}
Zz.prototype = new jy;
e = Zz.prototype;
e.Me = function() {
  this.C.qa = !1;
  this.C.ha = !1
};
e.Zd = function() {
  this.C.qa = !1;
  this.C.ha = !1
};
e.Ne = function() {
  $z(this)
};
e.J = function() {
  Zx(this);
  $z(this)
};

function $z(a) {
  var b = a.$ < w.i.D.length,
    c = a.C;
  c.qa = b;
  c.ha = !1;
  b && (b = w.i.D[a.$], a = a.tw(b), b = b.Kc.vg, 0 < a ? (c.label = b + " " + a, c.qh = !0) : (c.label = b, c.qh = !1))
}
e.tw = function(a) {
  return a.Zi ? a.de + a.Ci : 0
};

function Uz(a, b, c) {
  this.F = b;
  this.C = a;
  this.$ = c;
  this.ry = this.qy = this.Rl = this.hj = this.Ax = null;
  this.Uc = [];
  this.Vc = [];
  this.Nf = [];
  this.Pn = []
}
Uz.prototype = new jy;
Uz.prototype.J = function() {
  Ox(this.F);
  this.Ax = null;
  this.Uc.length = 0;
  this.Vc.length = 0;
  this.Nf.length = 0;
  this.Pn.length = 0;
  this.Zn();
  var a = this.F,
    b = M(a);
  if (b && !(0 > this.$ || this.$ >= w.i.D.length))
    if (this.hj) {
      this.Ax = P("table", b, null, "adventurerSkillTreeTable");
      var b = this.hj.Ha,
        c = this.Rl.Ha,
        d = this.qy.Ha,
        f = this.ry.Ha,
        g = Math.max(b.length, Math.max(c.length, Math.max(d.length, f.length))),
        h, l, n, p, s;
      for (h = 0; h < g; h++) l = this.Ax.insertRow(h), n = l.insertCell(0), p = l.insertCell(1), s = l.insertCell(2), l = l.insertCell(3), n.id =
        a + "_" + h + "_0", p.id = a + "_" + h + "_1", s.id = a + "_" + h + "_2", l.id = a + "_" + h + "_3", n.width = 150, p.width = 150, s.width = 150, l.width = 150, h < b.length && this.Uc.push(new ky(n.id, b[h], h, !0)), h < c.length && this.Vc.push(new ky(p.id, c[h], h, !0)), h < d.length && this.Nf.push(new ky(s.id, d[h], h, !0)), h < f.length && this.Pn.push(new ky(l.id, f[h], h, !0))
    } else console.log("no upgrades configured for character");
  for (a = 0; a < this.Uc.length; a++) this.Uc[a].J();
  for (a = 0; a < this.Vc.length; a++) this.Vc[a].J();
  for (a = 0; a < this.Nf.length; a++) this.Nf[a].J();
  for (a =
    0; a < this.Pn.length; a++) this.Pn[a].J()
};
Uz.prototype.Zn = function() {
  if (0 > this.$ || this.$ >= w.i.D.length) this.ry = this.qy = this.Rl = this.hj = null;
  else {
    var a = w.i.D[this.$];
    this.hj = a.ei;
    this.Rl = a.fi;
    this.qy = a.gi;
    this.ry = a.hi
  }
};
Uz.prototype.ba = function() {
  var a;
  for (a = 0; a < this.Uc.length; a++) this.Uc[a].Xa();
  for (a = 0; a < this.Vc.length; a++) this.Vc[a].Xa();
  for (a = 0; a < this.Nf.length; a++) this.Nf[a].Xa();
  for (a = 0; a < this.Pn.length; a++) this.Pn[a].Xa()
};

function aA() {
  this.F = "monsterKillCountContainer";
  this.Ya = !0;
  this.Hw = "killCountPanel";
  this.rm = -1
}
aA.prototype = new Xx;
aA.prototype.J = function() {
  this.rm = -1
};
aA.prototype.ba = function() {
  var a = w.i.da.Je;
  a !== this.rm && (this.rm = a, Ux(this.Hw, "" + xa(a)))
};

function bA() {
  this.F = "monsterUpgradeValuesContainer";
  this.Ya = !0;
  this.ov = this.jv = this.Vv = this.zv = this.Fv = this.Wu = this.fv = this.Du = this.pv = this.lv = this.ev = -1
}
bA.prototype = new Xx;
bA.prototype.J = function() {};
bA.prototype.ba = function() {
  this.Wu !== E.Lr.t && (this.Wu = E.Lr.t, Ux("goldDropChance", this.Wu + "%"));
  this.jv !== E.ys.t && (this.jv = E.ys.t, Ux("maxGoldPerDrop", this.jv + ""));
  this.ov !== E.As.t && (this.ov = E.As.t, Ux("minGoldPerDrop", this.ov + ""));
  this.ev !== E.ls.t && (this.ev = E.ls.t, Ux("itemDropChance", this.ev + "%"));
  this.Fv !== E.$s.t && (this.Fv = E.$s.t, Ux("scrollDropChance", this.Fv + "%"));
  this.zv !== E.Ns.t && (this.zv = E.Ns.t, Ux("potionDropChance", this.zv + "%"));
  this.fv !== E.lp.t && (this.fv = E.lp.t, Ux("itemLevelBonus", this.fv + "%"));
  this.Du !== E.Yl.t && (this.Du = E.Yl.t, Ux("itemRarityChance", this.Du + "%"));
  this.Vv !== E.Et.t && (this.Vv = E.Et.t, Ux("treasureChestChance", this.Vv + "%"));
  this.lv !== E.Pj.t && (this.lv = E.Pj.t, Ux("maxMonstersPerRoom", this.lv + ""));
  this.pv !== E.Ym.t && (this.pv = E.Ym.t, Ux("minMonstersPerRoom", this.pv + ""))
};

function cA(a, b) {
  this.lh = a;
  this.Sb = b;
  this.kd = this.pb = this.ng = this.xo = this.$n = this.Yn = this.vo = this.Ij = this.Mo = this.wq = this.yq = this.Es = null;
  this.Sv = this.$f = this.Jh = this.Uv = -1;
  this.dx = 80;
  this.Cp = null;
  this.qi()
}
cA.prototype.gq = function(a) {
  this.Sb = a
};
cA.prototype.qi = function() {
  var a = this.lh,
    b = this.Sb.ll,
    c = a.insertCell(0);
  c.style.width = "50px";
  c.style.padding = "0";
  c.style.textAlign = "center";
  this.Cp = P("img", c, null, "characterImage");
  this.Cp.src = "images/Transparent.gif";
  this.Cp.style.background = "url('spritesheet/monsters.png') -" + b.ub + "px -" + (b.vb + 10) + "px";
  this.Cp.style.height = "30px";
  this.Es = a.insertCell(1);
  this.Es.style.width = "200px";
  this.Es.innerHTML = this.Sb.Vk();
  this.Mo = a.insertCell(2);
  this.Mo.style.width = "80px";
  this.Mo.style.textAlign = "right";
  this.Mo.style.paddingRight =
    "5px";
  this.Ij = a.insertCell(3);
  this.Ij.style.width = "80px";
  this.Ij.style.textAlign = "right";
  this.Ij.style.paddingRight = "5px";
  this.vo = a.insertCell(4);
  this.vo.style.width = "80px";
  this.vo.style.textAlign = "right";
  this.vo.style.paddingRight = "5px";
  this.Yn = a.insertCell(5);
  this.Yn.style.width = "80px";
  this.Yn.style.textAlign = "right";
  this.Yn.style.paddingRight = "5px";
  this.$n = a.insertCell(6);
  this.$n.style.width = "80px";
  this.$n.style.textAlign = "right";
  this.$n.style.paddingRight = "5px";
  this.xo = a.insertCell(7);
  this.xo.style.width =
    "80px";
  this.xo.style.textAlign = "right";
  this.xo.style.paddingRight = "5px";
  this.yq = a.insertCell(8);
  this.yq.style.width = "80px";
  this.yq.style.textAlign = "right";
  this.yq.style.paddingRight = "5px";
  this.wq = a.insertCell(9);
  this.wq.style.width = "80px";
  this.wq.style.textAlign = "right";
  this.wq.style.paddingRight = "5px";
  this.ng = a.insertCell(10);
  this.ng.style.width = this.dx + "px";
  this.ng.style.paddingLeft = "5px";
  this.ng.style.paddingRight = "5px";
  a = P("div", this.ng, null, null);
  a.style.position = "relative";
  a.style.border = "1px solid #2c2c50";
  a.style.height = "15px";
  a.style.width = this.dx + "px";
  this.pb = P("div", a, null, null);
  this.pb.style.position = "absolute";
  this.pb.style.top = "0";
  this.pb.style.left = "0";
  this.pb.style.backgroundColor = "#F00";
  this.pb.style.height = "15px";
  this.pb.style.width = "0px";
  this.kd = P("div", a, null, null);
  this.kd.style.position = "absolute";
  this.kd.style.textAlign = "center";
  this.kd.style.top = "0";
  this.kd.style.left = "0";
  this.kd.style.height = "15px";
  this.kd.style.width = "100%";
  this.kd.style.zIndex = "10"
};
cA.prototype.J = function() {
  this.Jh = this.Uv = this.$f = this.Sv = -1
};
cA.prototype.Xa = function() {
  var a = this.Sb.ml,
    b = this.Sb.ek,
    c = this.Sb.xq,
    d = Math.min(1, a / b),
    d = this.dx * d | 0;
  if (this.$f != this.Sb.xd || this.Sv != this.Sb.Sj) {
    this.Mo.innerHTML = r(this.Sb.No);
    this.Ij.innerHTML = r(this.Sb.$o);
    this.vo.innerHTML = r(this.Sb.Gp);
    this.Yn.innerHTML = r(this.Sb.Ep);
    this.$n.innerHTML = r(this.Sb.Fp);
    this.xo.innerHTML = r(this.Sb.Hp);
    this.wq.innerHTML = r(this.Sb.Sj);
    if (this.$f != this.Sb.xd) {
      this.Es.innerHTML = this.Sb.Vk();
      var f = this.Sb.ll;
      this.Cp.style.background = "url('spritesheet/monsters.png') -" +
        f.ub + "px -" + (f.vb + 10) + "px"
    }
    this.$f = this.Sb.xd;
    this.Sv = this.Sb.Sj
  }
  this.Uv !== c && (this.Uv = c, this.yq.innerHTML = r(c));
  this.Jh !== d && (this.Jh = d, this.pb.style.width = d + "px", this.kd.innerHTML = a > b ? "Max" : r(a) + " / " + r(b))
};

function dA(a, b) {
  this.F = b;
  this.C = a;
  this.Dp = null;
  this.vi = this.xd = -1;
  this.Tj = []
}
dA.prototype = new jy;
dA.prototype.J = function() {
  if (this.Dp) {
    var a;
    for (a = 0; a < this.Tj.length; a++) this.Tj[a].J()
  }
  this.xd = -1;
  this.vi = -2
};
dA.prototype.ba = function() {
  if (1 > this.xd) console.log("MonsterTableView.updateViewContents  monsterLevel=" + this.xd);
  else {
    if (this.Dp) {
      if (this.vi !== this.xd) {
        var a = Th(w.ob, this.xd),
          b;
        if (a.length !== this.Tj.length) console.log("MonsterTableView.updateMonsterLevelRows length mismatch");
        else
          for (b = 0; b < this.Tj.length; b++) this.Tj[b].gq(a[b])
      }
    } else this.pf();
    this.vi = this.xd;
    for (a = 0; a < this.Tj.length; a++) this.Tj[a].Xa()
  }
};
dA.prototype.pf = function() {
  var a = this.F;
  Ox(a);
  var b = M(a),
    a = Th(w.ob, this.xd);
  this.Dp = P("table", b, null, "monsterTable");
  this.Ri(this.Dp.insertRow(0));
  for (b = 0; b < a.length; b++) this.Tj.push(new cA(this.Dp.insertRow(b + 1), a[b]))
};
dA.prototype.Ri = function(a) {
  var b = Vx(a);
  b.style.textAlign = "center";
  b.style.padding = "0";
  b.innerHTML = "Icon";
  Vx(a).innerHTML = "Monster Type";
  b = Vx(a);
  b.style.textAlign = "right";
  b.style.paddingRight = "5px";
  b.innerHTML = "XP / Kill";
  b = Vx(a);
  b.style.textAlign = "right";
  b.style.paddingRight = "5px";
  b.innerHTML = "Health";
  b = Vx(a);
  b.style.textAlign = "right";
  b.style.paddingRight = "5px";
  b.innerHTML = "Damage";
  b = Vx(a);
  b.style.textAlign = "right";
  b.style.paddingRight = "5px";
  b.innerHTML = "Armor";
  b = Vx(a);
  b.style.textAlign = "right";
  b.style.paddingRight = "5px";
  b.innerHTML = "Attack";
  b = Vx(a);
  b.style.textAlign = "right";
  b.style.paddingRight = "5px";
  b.innerHTML = "Defense";
  b = Vx(a);
  b.style.textAlign = "right";
  b.style.paddingRight = "5px";
  b.innerHTML = "Total Kills";
  b = Vx(a);
  b.style.textAlign = "right";
  b.style.paddingRight = "5px";
  b.innerHTML = "Sub Level";
  Vx(a).innerHTML = "Progress"
};

function eA(a) {
  this.F = "monstersTabContent";
  this.C = a;
  this.zg = [];
  for (a = 0; a < Bs; a++) this.zg.push(fA(a, a + 1));
  var b = new gy("monsterTabMenu");
  for (a = 0; a < this.zg.length; a++) hy(b, this.zg[a].C);
  R(this, new aA);
  R(this, new bA);
  R(this, new Fy("monsterUpgradeButtonsContainer", Kx, !1));
  R(this, b);
  for (a = 0; a < this.zg.length; a++) R(this, this.zg[a].view)
}
eA.prototype = new jy;
e = eA.prototype;
e.Me = function() {
  this.C.qa = !1;
  this.C.ha = !1
};
e.Ne = function() {
  this.C.qa = !0;
  this.C.ha = !1
};
e.Zd = function() {
  this.C.qa = !1;
  this.C.ha = !1
};
e.J = function() {
  this.C.qa = !0;
  this.C.ha = !1;
  gA(this);
  hA(this);
  Zx(this)
};

function fA(a, b) {
  var c = {},
    d = 1 === b;
  c.C = new dy("Level " + b, d);
  d && (c.C.ha = !0);
  var f = "monstersTabContainer" + a,
    g = M(f);
  g ? Px(g) : (g = P("div", M("monsterTabContainerParent"), f, "tabContainer scrollingContainer"), d || Qx(g));
  c.view = new dA(c.C, f);
  c.view.xd = b;
  return c
}
e.ba = function() {
  gA(this);
  hA(this);
  $x(this)
};

function gA(a) {
  var b, c = w.ob.hd,
    d, f;
  for (f = 0; f < a.zg.length; f++) d = a.zg[f], b = d.view.xd, b !== c && (d.C.label = "Level " + c, d.view.xd = c), c++
}

function hA(a) {
  var b = w.ob,
    c, d, f, g = !1;
  for (c = 0; c < a.zg.length; c++) f = a.zg[c], d = f.view.xd, d = b.hd <= d && d <= b.fc, f.C.qa = d, !d && f.C.ha && (f.C.ha = !1, g = !0);
  if (g)
    for (c = 0; c < a.zg.length; c++)
      if (a.zg[c].C.qa) {
        a.zg[c].C.ha = !0;
        break
      }
};

function iA(a) {
  return a.$b ? "#222" : a.cb ? "#080" : Jc(a) ? w.ob.fc >= a.Jf ? "#850" : "#A30" : a.ye ? "#A80" : "#AAA"
};

function jA() {
  this.F = "castleMapContainer";
  this.Ya = !0;
  this.ws = null;
  this.vs = [];
  this.Fu = -1
}
jA.prototype = new Xx;
jA.prototype.J = function() {
  this.Fu = -1;
  Ox(this.F);
  this.ws = null;
  this.vs.length = 0
};
jA.prototype.ba = function() {
  this.ws || this.pf();
  var a;
  a = w.kb.cm;
  if (this.Fu != a) {
    this.Fu = a;
    a = w.Pe;
    var b, c, d = a.Rh + a.Eh - a.Rh,
      f = a.Sh + a.Eh - a.Sh,
      g, h;
    for (c = 0; c < f; c++)
      for (b = 0; b < d; b++)
        if (g = this.vs[b][c], h = a.Mr[b][c]) h = h.cu, h = iA(h), g.style.backgroundColor != h && (g.style.backgroundColor = h)
  }
};
jA.prototype.pf = function() {
  var a = this.F;
  Ox(a);
  var b = w.Pe,
    c = b.Rh,
    d = b.Sh,
    f = b.Rh + b.Eh,
    g = b.Sh + b.Eh,
    h;
  this.ws = P("table", M(a), null, null);
  for (var a = f - c, d = g - d, l, g = 0; g < a; g++) this.vs.push([]);
  for (c = 0; c < d; c++)
    for (f = this.ws.insertRow(c), g = 0; g < a; g++) {
      l = f.insertCell(g);
      l = P("div", l, null, null);
      l.style.width = "39px";
      l.style.height = "39px";
      if (h = b.Mr[g][c])
        if (h = fd(h.io)) {
          h = P("img", l, null, null);
          h.src = "images/Transparent.gif";
          h.style.width = "35px";
          h.style.height = "35px";
          var n = w.Kj.v("CrownGolden.PNG");
          h.style.background =
            "url('spritesheet/items.png') -" + n.ub + "px -" + n.vb + "px"
        } this.vs[g].push(l)
    }
};

function kA() {
  this.F = "castleTableContainer";
  this.Ya = !0;
  this.$e = null;
  this.nf = []
}
kA.prototype = new Xx;
e = kA.prototype;
e.J = function() {
  this.nf.length = 0;
  Ox(this.F);
  this.$e = null
};
e.ba = function() {
  this.$e || this.pf();
  var a = w.kb.pd;
  a.length !== this.nf.length && this.mk(a.length);
  var b;
  for (b = 0; b < this.nf.length; b++) this.nf[b].xc !== a[b] && lA(this.nf[b], a[b]), this.nf[b].Xa()
};
e.mk = function(a) {
  for (; this.nf.length > a;) this.$e.deleteRow(-1), this.nf.splice(this.nf.length - 1, 1);
  for (; this.nf.length < a;) this.nf.push(new mA(this.$e.insertRow(this.nf.length + 1)))
};
e.pf = function() {
  var a = this.F;
  Ox(a);
  var b = w.kb.pd,
    c;
  this.$e = P("table", M(a), null, "monsterTable");
  this.Ri(this.$e.insertRow(0));
  for (c = 0; c < b.length; c++) a = new mA(this.$e.insertRow(c + 1)), lA(a, b[c]), this.nf.push(a)
};
e.Ri = function(a) {
  Vx(a).innerHTML = "Name";
  Vx(a).innerHTML = "Status"
};

function mA(a) {
  this.lh = a;
  this.kd = this.pb = this.ng = this.mf = this.xc = null;
  this.Us = 120;
  this.Rv = this.Cu = this.fb = "";
  this.Kv = 0;
  this.qi()
}
mA.prototype.J = function() {};

function lA(a, b) {
  a.xc = b;
  a.Cu = "";
  a.Rv = "";
  a.Kv = 0;
  a.fb = ""
}
mA.prototype.qi = function() {
  var a = this.lh;
  this.mf = a.insertCell(0);
  this.mf.style.width = "240px";
  this.ng = a.insertCell(1);
  this.ng.style.width = this.Us + "px";
  this.ng.style.paddingLeft = "5px";
  this.ng.style.paddingRight = "5px";
  a = P("div", this.ng, null, null);
  a.style.position = "relative";
  a.style.border = "1px solid #2c2c50";
  a.style.height = "15px";
  a.style.width = this.Us + "px";
  this.pb = P("div", a, null, null);
  this.pb.style.position = "absolute";
  this.pb.style.top = "0";
  this.pb.style.left = "0";
  this.pb.style.backgroundColor = "#F00";
  this.pb.style.height = "15px";
  this.pb.style.width = "0px";
  this.kd = P("div", a, null, null);
  this.kd.style.position = "absolute";
  this.kd.style.textAlign = "center";
  this.kd.style.top = "0";
  this.kd.style.left = "0";
  this.kd.style.height = "15px";
  this.kd.style.width = "100%";
  this.kd.style.zIndex = "10"
};
mA.prototype.Xa = function() {
  if (this.xc) {
    var a = this.xc.mi;
    this.fb !== a && (this.fb = a, this.mf.innerHTML = a);
    a = iA(this.xc);
    this.Cu != a && (this.Cu = a, this.pb.style.backgroundColor = a);
    a = this.xc;
    a = a.$b ? "Locked" : a.cb ? "Conquered" : Jc(a) ? w.ob.fc >= a.Jf ? "Ready for Attack" : "Monster Level " + a.Jf : a.ye ? "Attack Scheduled" : "Dungeons " + a.yk + " / " + a.Ab.length;
    this.Rv != a && (this.Rv = a, this.kd.innerHTML = a);
    a = this.xc;
    if (a.$b) a = 0;
    else if (a.cb || Jc(a) || a.ye || a.Bj) a = this.Us;
    else var a = this.xc.yk,
      b = this.xc.Ab,
      a = 0 === b.length ? 1 : Math.min(1,
        a / b.length),
      a = this.Us * a | 0;
    this.Kv != a && (this.Kv = a, this.pb.style.width = a + "px")
  }
};

function nA(a) {
  this.F = "castlesTabContent";
  this.C = a;
  R(this, new kA);
  R(this, new jA)
}
nA.prototype = new jy;
nA.prototype.Me = function() {
  this.C.qa = !1;
  this.C.ha = !1
};
nA.prototype.Ne = function() {
  this.C.qa = !0;
  this.C.ha = !1
};
nA.prototype.Zd = function() {
  this.C.qa = !1;
  this.C.ha = !1
};
nA.prototype.J = function() {
  this.C.qa = !0;
  this.C.ha = !1;
  Zx(this)
};

function oA() {
  this.F = "goldContainer";
  this.Ya = !0;
  this.uD = "partyGoldPanel";
  this.Dk = -1
}
oA.prototype = new Xx;
oA.prototype.J = function() {
  this.Dk = -1
};
oA.prototype.ba = function() {
  var a = w.i.da.fd;
  a !== this.Dk && (this.Dk = a, Ux(this.uD, "" + xa(a)))
};

function tz() {
  this.F = "treasureChestLootButtonPanel";
  this.Ya = !1;
  this.ti = "";
  this.om = this.Ml = this.po = this.lc = this.button = null
}
tz.prototype = new Xx;
tz.prototype.Pm = function() {
  var a = pA();
  return a && !a.Kg
};
tz.prototype.J = function() {
  this.lc = null;
  qA(this)
};
tz.prototype.ba = function() {
  this.button || qA(this);
  var a = pA();
  if (a != this.lc && (this.lc = a)) {
    var b = this.lc.Mf;
    this.Ml.innerHTML = 1 === b ? "Loot Treasure Chest!" : 2 === b ? "Loot Weapon Rack!" : 3 === b ? "Loot Book Case!" : "Loot Thing!";
    this.om.innerHTML = "Click while in room.";
    a && (b = a.Kg ? a.PA : a.Vy, this.po.style.background = "url('spritesheet/terrain.png') -" + b.ub + "px -" + b.vb + "px")
  }
  b = this.Ro();
  this.ti !== b && (this.ti = b, this.button.className = b, a && a.el && (this.om.innerHTML = "Loot pending..."))
};

function qA(a) {
  var b = M(a.F);
  if (b) {
    Px(b);
    a.ti = a.Ro();
    a.button = P("div", b, a.F, a.ti);
    a.button.onmouseup = function() {
      if (a.lc && !a.lc.Kg) {
        var b = a.lc;
        b.el = !0;
        w.i.da.hq(b)
      }
      return !1
    };
    var c = P("table", a.button, null, null);
    c.style.width = "100%";
    var b = c.insertRow(0),
      c = c.insertRow(1),
      d = b.insertCell(0);
    d.rowSpan = 2;
    d.style.width = "50px";
    d.style.height = "50px";
    d.style.textAlign = "center";
    a.po = P("img", d, null, null);
    a.po.src = "images/Transparent.gif";
    a.po.style.width = "50px";
    a.po.style.height = "50px";
    b = b.insertCell(1);
    b.style.textAlign =
      "left";
    a.Ml = P("span", b, null, null);
    a.om = c.insertCell(0);
    a.om.colSpan = 2;
    a.om.style.width = "200px";
    a.om.style.textAlign = "left"
  }
}
tz.prototype.Ro = function() {
  return !this.lc || this.lc.Kg || this.lc.el ? "lootButtonDisabled centeredElement" : "lootButton centeredElement"
};

function pA() {
  if (!w.wb) {
    var a, b;
    for (a = 0; a < w.i.D.length; a++)
      if (b = Ji(w.th, w.i.D[a].p.w)) return b
  }
  return null
};

function rA(a, b) {
  this.lh = a;
  this.ui = this.ua = null;
  this.yr = new Es(this.ua);
  this.px = this.Gx = this.mf = this.Vg = this.wr = this.Co = null;
  this.pB = "secureCell_" + b + "_" + this.lh.rowIndex;
  this.W = this.cj = this.ai = this.sh = this.ng = this.Ix = null;
  this.Gu = this.Bk = this.Qv = "";
  this.mw = this.pu = -1;
  this.Bt = !1;
  this.Ct = 260;
  this.qi()
}
rA.prototype.J = function() {
  this.ui = null;
  this.ua && this.W.J()
};
rA.prototype.ct = function(a) {
  var b = !this.ua;
  this.ua = a;
  this.yr.ct(this.ua);
  this.W.Rc(this.yr);
  this.mw = this.pu = -1;
  this.Gu = this.Bk = this.Qv = "";
  b && this.W.J()
};
rA.prototype.qi = function() {
  var a = this.lh;
  this.Co = a.insertCell(0);
  this.Co.style.width = "50px";
  this.Co.style.padding = "0";
  this.Co.style.textAlign = "center";
  this.wr = P("img", this.Co, null, "terrainImage");
  this.wr.src = "images/Transparent.gif";
  if (this.ua) {
    var b = w.I.v(this.ua.Fo);
    this.wr.style.background = "url('spritesheet/terrain.png') -" + b.ub + "px -" + b.vb + "px"
  }
  this.Vg = a.insertCell(1);
  this.Vg.style.width = "200px";
  this.mf = a.insertCell(2);
  this.mf.style.width = "200px";
  this.Gx = a.insertCell(3);
  this.Gx.style.width = "90px";
  this.px = a.insertCell(4);
  this.px.style.width = "200px";
  this.px.id = this.pB;
  this.Ix = a.insertCell(5);
  this.Ix.style.width = this.Ct + "px";
  this.W = new ky(this.pB, this.yr, this.lh.rowIndex, !0);
  this.cj = P("div", this.Ix, null, null);
  this.cj.style.position = "relative";
  this.cj.style.border = "1px solid #2c2c50";
  this.cj.style.height = "15px";
  this.cj.style.width = this.Ct + "px";
  this.sh = P("div", this.cj, null, null);
  this.sh.style.position = "absolute";
  this.sh.style.top = "0";
  this.sh.style.left = "0";
  this.sh.style.backgroundColor = "#F00";
  this.sh.style.height = "15px";
  this.sh.style.width = "0px";
  this.ai = P("div", this.cj, null, null);
  this.ai.style.position = "absolute";
  this.ai.style.textAlign = "center";
  this.ai.style.top = "0";
  this.ai.style.left = "0";
  this.ai.style.height = "15px";
  this.ai.style.width = "100%";
  this.ai.style.zIndex = "10";
  this.Bt = !0
};
rA.prototype.Xa = function() {
  if (this.ua) {
    var a = this.ua.qf,
      b = this.ua.Lc,
      c = this.ua.Eo,
      d = this.ua.zj.mi,
      f = this.ua.oe,
      g;
    g = this.ua;
    g = g.oe ? g.Lc ? "Waiting" : g.qf && !g.Lc ? "Farming" : "Farm" : g.Lc ? "Cleared" : g.qf && !g.Lc ? "Infested" : "Infested?";
    var h;
    h = this.ua;
    h = h.Lc ? Math.max(0, Math.min(100, 100 * (w.i.$a - h.Mg) / 1500 | 0)) : 0;
    var l;
    l = this.ua;
    l = l.Lc ? 0 : Math.max(0, Math.min(100, 100 * (w.i.$a - l.zi) / 1200 | 0));
    a = a && (f || b);
    this.ui !== this.ua && (this.ui = this.ua, f = w.I.v(this.ua.Fo), this.wr.style.background = "url('spritesheet/terrain.png') -" +
      f.ub + "px -" + f.vb + "px");
    this.Bk !== c && (this.Bk = c, this.Vg.innerHTML = c);
    this.Gu !== d && (this.Gu = d, this.mf.innerHTML = d);
    this.Qv !== g && (this.Qv = g, this.Gx.innerHTML = g);
    this.Bt !== a && ((this.Bt = a) ? Rx(this.cj) : Qx(this.cj));
    a && (b ? this.pu !== h && (this.pu = h, b = h / 100 * this.Ct | 0, this.sh.style.width = b + "px", this.sh.style.backgroundColor = "#F00", this.ai.innerHTML = "Dungeon Re-Infestation " + h + "%") : this.mw !== l && (this.mw = l, b = l / 100 * this.Ct | 0, this.sh.style.width = b + "px", this.sh.style.backgroundColor = "#080", this.ai.innerHTML = "Farming Dungeon " +
      l + "%"));
    this.ua && (gs(this.yr), this.W.Xa())
  }
};

function sA(a, b, c) {
  this.F = c;
  this.C = a;
  this.dw = b;
  this.bf = null;
  this.rf = []
}
sA.prototype = new jy;
e = sA.prototype;
e.J = function() {
  this.rf.length = 0;
  Ox(this.F);
  this.bf = null
};
e.ba = function() {
  this.bf || this.pf();
  var a = tA(this);
  a.length !== this.rf.length && this.mk(a.length);
  var b;
  for (b = 0; b < this.rf.length; b++) this.rf[b].ua !== a[b] && this.rf[b].ct(a[b]), this.rf[b].Xa()
};
e.mk = function(a) {
  for (; this.rf.length > a;) this.bf.deleteRow(-1), this.rf.splice(this.rf.length - 1, 1);
  for (; this.rf.length < a;) this.rf.push(new rA(this.bf.insertRow(this.rf.length + 1), this.dw))
};
e.pf = function() {
  var a = this.F;
  Ox(a);
  var b = tA(this),
    c;
  this.bf = P("table", M(a), null, "monsterTable");
  this.Ri(this.bf.insertRow(0));
  for (c = 0; c < b.length; c++) a = new rA(this.bf.insertRow(c + 1), this.dw), a.ct(b[c]), this.rf.push(a)
};

function tA(a) {
  switch (a.dw) {
    case 0:
      return w.Aa.uj;
    case 1:
      return w.Aa.Ge;
    case 2:
      return w.Aa.ze;
    case 3:
      return w.Aa.dg;
    default:
      return w.Aa.uj
  }
}
e.Ri = function(a) {
  Vx(a).innerHTML = "Icon";
  Vx(a).innerHTML = "Dungeon";
  Vx(a).innerHTML = "Castle";
  Vx(a).innerHTML = "Status";
  Vx(a).innerHTML = "Farm";
  Vx(a).innerHTML = "Count Down Timer"
};

function uA(a) {
  this.F = "dungeonsTabContent";
  this.C = a;
  this.nr = new dy(vA(0, 0), !0);
  this.zw = new dy(vA(1, 0), !0);
  this.qu = new dy(vA(2, 0), !0);
  this.qx = new dy(vA(3, 0), !0);
  a = new gy("dungeonTabMenu");
  var b = new sA(this.nr, 0, "discoveredDungeonsTableContainer"),
    c = new sA(this.zw, 1, "infestedDungeonsTableContainer"),
    d = new sA(this.qu, 2, "clearedDungeonsTableContainer"),
    f = new sA(this.qx, 3, "farmedDungeonsTableContainer");
  this.nr.ha = !0;
  hy(a, this.nr);
  hy(a, this.zw);
  hy(a, this.qu);
  hy(a, this.qx);
  this.Hz = this.Uy = this.aA = this.nz = -1;
  R(this, new oA);
  R(this, a);
  R(this, b);
  R(this, c);
  R(this, d);
  R(this, f)
}
uA.prototype = new jy;
e = uA.prototype;
e.Me = function() {
  this.C.qa = !1;
  this.C.ha = !1
};
e.Ne = function() {
  this.C.qa = !0;
  this.C.ha = !1
};
e.Zd = function() {
  this.C.qa = !1;
  this.C.ha = !1
};
e.J = function() {
  this.C.qa = !0;
  this.C.ha = !1;
  Zx(this)
};
e.ba = function() {
  var a = w.Aa.uj.length,
    b = w.Aa.Ge.length,
    c = w.Aa.ze.length,
    d = w.Aa.dg.length;
  this.nz !== a && (this.nz = a, this.nr.label = vA(0, a));
  this.aA !== b && (this.aA = b, this.zw.label = vA(1, b));
  this.Uy !== c && (this.Uy = c, this.qu.label = vA(2, c));
  this.Hz !== d && (this.Hz = d, this.qx.label = vA(3, d));
  $x(this)
};

function vA(a, b) {
  return yA(a) + " (" + b + ")"
}

function yA(a) {
  switch (a) {
    case 0:
      return "Discovered Dungeons";
    case 1:
      return "Infested Dungeons";
    case 2:
      return "Cleared Dungeons";
    case 3:
      return "Farmed Dungeons";
    default:
      return "Error"
  }
};

function BA(a) {
  this.F = "gameOverTabContent";
  this.C = a;
  this.ql = !1
}
BA.prototype = new jy;
e = BA.prototype;
e.Me = function() {
  this.C.qa = !0;
  this.C.ha = !0
};
e.Ne = function() {
  this.C.qa = !1;
  this.C.ha = !1
};
e.Zd = function() {
  this.C.qa = !1;
  this.C.ha = !1
};
e.J = function() {
  this.C.qa = !1;
  this.C.qa = !1;
  Ox(this.F);
  this.ql = !1
};
e.ba = function() {
  this.ql || (KA(this), this.ql = !0)
};

function KA(a) {
  Ox(a.F);
  a = M(a.F);
  MA(a);
  a = P("div", a, null, "gameOverContentsDiv");
  P("div", a, null, "gameOverHeading").innerHTML = "CLICKPOCALYPSE II VICTORY!";
  var b = P("div", a, null, "gameOverBlurb");
  P("p", b, null, null).innerHTML = "You have conquered every castle, and transformed the frozen wasteland into a nice, green world.";
  P("p", b, null, null).innerHTML = "No longer will the land of CLICKPOCALYPSE be subjected to the horrible fate of monsters minding their own business in the privacy of their homes!";
  P("p", b,
    null, null).innerHTML = "You can either start over with a new party, or you can keep your current party and conquer a new set of castles.";
  P("p", b, null, null).innerHTML = "Staring over will give you the following bonuses:";
  var c = w.i.wh,
    d = NA(c),
    f = Math.min(40, c),
    g = Math.min(aw, c),
    h;
  for (h = 0; h < d.length; h++) P("p", b, null, "gameOverBonus").innerHTML = "Unlocked character class: " + d[h];
  c <= aw && (P("p", b, null, "gameOverBonus").innerHTML = "Inventory pack size bonus: " + g);
  P("p", b, null, "gameOverBonus").innerHTML = "Skill point bonus: " +
    f;
  b = P("div", a, null, "gameOverBlurb");
  b = P("div", b, null, "upgradeButton");
  b.style.padding = "15px";
  b.style.textAlign = "center";
  b.innerHTML = "PRESTIGE - Start over with a new, level 1 party.";
  b.onclick = function() {
    w.Fe = !1;
    Ta("Victory", "Decision: Prestige");
    w.OA()
  };
  a = P("div", a, null, "gameOverBlurb");
  a = P("div", a, null, "upgradeButton");
  a.style.padding = "15px";
  a.style.textAlign = "center";
  a.innerHTML = "CONTINUE - Conquer a new set of castles with your current party.";
  a.onclick = function() {
    w.Fe = !1;
    Ta("Victory", "Decision: Continue");
    w.wE();
    w.i.Bg.nm++;
    cg();
    cd();
    w.$h.J();
    w.Ee.J();
    px(w.pg)
  }
}

function NA(a) {
  var b = [],
    c;
  for (c = 0; c < av.length; c++) av[c].Le === a && b.push(av[c].Ka);
  return b
}

function MA(a) {
  var b = P("table", a, null, "gameOverTableTopRow").insertRow(0),
    c;
  for (c = 0; 19 > c; c++) OA(b.insertCell(c));
  c = P("table", a, null, "gameOverTableTopRow");
  c.style.top = "41px";
  b = c.insertRow(0);
  for (c = 0; 19 > c; c++) OA(b.insertCell(c));
  c = P("table", a, null, "gameOverTableBottomRow");
  c.style.bottom = "41px";
  b = c.insertRow(0);
  for (c = 0; 19 > c; c++) OA(b.insertCell(c));
  a = P("table", a, null, "gameOverTableBottomRow").insertRow(0);
  for (c = 0; 19 > c; c++) OA(a.insertCell(c))
}

function OA(a) {
  var b = aa[k(aa.length)],
    b = w.fh.v(b.a);
  a = P("img", a, null, "characterImage");
  a.src = "images/Transparent.gif";
  a.style.background = "url('spritesheet/monsters.png') -" + b.ub + "px -" + (b.vb + 10) + "px";
  a.style.height = "30px";
  a.style.width = "52px"
};

function PA(a) {
  this.F = "offlineTabContent";
  this.C = a;
  this.$l = this.pb = null;
  this.gu = 500;
  this.Jh = -1;
  this.Mt = this.aj = this.$t = this.vm = this.Vm = this.Um = this.Tm = this.Qw = null;
  this.yu = this.Kk = this.Bu = this.Ck = this.Hk = this.Fk = this.Ek = this.vv = this.wy = this.JB = this.Iy = this.Fz = this.sA = this.nA = this.mA = this.HA = -1
}
PA.prototype = new jy;
e = PA.prototype;
e.Me = function() {
  this.C.qa = !1;
  this.C.ha = !1
};
e.Zd = function() {
  var a = this.C;
  a.qa = !0;
  a.ha = !0;
  this.Jh = -1;
  a = w.i.Ih;
  this.HA = a.si;
  this.mA = a.Gi;
  this.nA = a.Ph;
  this.sA = a.Mj;
  this.Fz = a.wi;
  this.Iy = w.kb.Jg.length;
  this.JB = a.oj;
  this.wy = w.i.Ig.Ze.length;
  this.yu = this.Kk = this.Bu = this.Ck = this.Hk = this.Fk = this.Ek = this.vv = -1
};
e.Ne = function() {
  var a = this.C;
  a.qa = !1;
  a.ha = !1;
  this.$l && (Ox(this.F), this.Mt = this.aj = this.$t = this.vm = this.Vm = this.Um = this.Tm = this.Qw = this.pb = this.$l = null)
};
e.J = function() {
  this.C.qa = !1
};
e.ba = function() {
  this.$l || QA(this);
  var a = Math.min(1, w.Vj / w.jf),
    a = this.gu * a;
  this.Jh != a && (this.Jh = a, this.pb.style.width = a + "px");
  var b = w.i.Ih,
    a = b.si - this.HA,
    c = b.Gi - this.mA,
    d = b.Ph - this.nA,
    f = b.Mj - this.sA,
    g = b.wi - this.Fz,
    h = w.kb.Jg.length - this.Iy,
    b = b.oj - this.JB,
    l = w.i.Ig.Ze.length - this.wy;
  this.vv != a && (this.vv = a, this.Qw.innerHTML = r(a));
  this.Ek != c && (this.Ek = c, this.Tm.innerHTML = r(c));
  this.Fk != d && (this.Fk = d, this.Um.innerHTML = r(d));
  this.Hk != f && (this.Hk = f, this.Vm.innerHTML = r(f));
  this.Ck != g && (this.Ck = g, this.vm.innerHTML =
    r(g));
  this.Bu != h && (this.Bu = h, this.$t.innerHTML = r(h));
  this.Kk != b && (this.Kk = b, this.aj.innerHTML = r(b));
  this.yu != l && (this.yu = l, this.Mt.innerHTML = r(l))
};

function QA(a) {
  var b = M(a.F);
  Px(b);
  var c = P("div", b, null, "offlineHeader"),
    d = a.Er(m(w.jf / 36E5), m(w.jf / 6E4 % 60), m(w.jf / 1E3 % 60));
  P("div", c, null, "offlineTitleText").innerHTML = "CLICKPOCALYPSE II";
  P("div", c, null, "offlineSubHeader").innerHTML = "Offline for: " + d;
  P("div", c, null, "offlineSubHeader").innerHTML = "Figuring out what happened while you were away...";
  c = P("div", b, null, "offlineProgressBarContainer");
  c = P("div", c, null, "offlineProgressBar");
  a.pb = P("div", c, null, "offlineProgressSlider");
  c = P("div", b, null, "offlineProgressStatsContainer");
  a.fr(c);
  b = P("div", b, null, "offlineCancelButtonContainer");
  a.$l = P("div", b, null, "offlineCancelButton");
  a.$l.innerHTML = "Skip This. I just want to kill monsters.";
  a.$l.onclick = function() {
    w.xu()
  }
}
e.fr = function(a) {
  a = P("table", a, null, "centeredElement");
  var b = 0;
  this.Qw = this.V(a, "Monster Kills", b++);
  this.Tm = this.V(a, "Items Found", b++);
  this.Um = this.V(a, "Items Sold", b++);
  this.Vm = this.V(a, "Levels Cleared", b++);
  this.vm = this.V(a, "Dungeons Cleared", b++);
  this.$t = this.V(a, "Castles To Attack", b++);
  this.aj = this.V(a, "Stun Count", b++);
  this.Mt = this.V(a, "Achievements", b)
};
e.V = function(a, b, c) {
  a = a.insertRow(c);
  c = a.insertCell(0);
  c.className = "statisticsTableLabel";
  c.innerHTML = b;
  b = a.insertCell(1);
  b.style.textAlign = "right";
  b.style.width = "70px";
  return b
};
e.Er = function(a, b, c) {
  return (10 > a ? "0" : "") + a + ":" + (10 > b ? "0" : "") + b + ":" + (10 > c ? "0" : "") + c
};

function RA(a) {
  this.F = a;
  this.Ya = !0;
  this.Ot = this.Nt = this.Hq = this.Iq = null;
  this.Uc = [];
  this.Vc = [];
  this.Nf = [];
  this.QC = "achievementsHeaderSpan";
  this.pz = -1
}
RA.prototype = new Xx;
RA.prototype.J = function() {
  this.uo()
};
RA.prototype.uo = function() {
  Ox(this.F);
  this.Iq = null;
  this.Uc.length = 0;
  this.Vc.length = 0;
  this.Nf.length = 0;
  this.Zn();
  var a = this.F,
    b = M(a);
  if (b) {
    this.Iq = P("table", b, null, "adventurerSkillTreeTable");
    var b = this.Hq.Ha,
      c = this.Nt.Ha,
      d = this.Ot.Ha,
      f = Math.max(b.length, Math.max(c.length, d.length)),
      g, h, l, n;
    for (g = 0; g < f; g++) h = this.Iq.insertRow(g), l = h.insertCell(0), n = h.insertCell(1), h = h.insertCell(2), l.id = a + "_" + g + "_0", n.id = a + "_" + g + "_1", h.id = a + "_" + g + "_2", l.width = 150, n.width = 150, h.width = 150, g < b.length && this.Uc.push(new ky(l.id,
      b[g], g, !0)), g < c.length && this.Vc.push(new ky(n.id, c[g], g, !0)), g < d.length && this.Nf.push(new ky(h.id, d[g], g, !0))
  }
  for (a = 0; a < this.Uc.length; a++) this.Uc[a].J();
  for (a = 0; a < this.Vc.length; a++) this.Vc[a].J();
  for (a = 0; a < this.Nf.length; a++) this.Nf[a].J()
};
RA.prototype.Zn = function() {
  var a = w.i.Ig.jj,
    b = [],
    c = [],
    d = [],
    f;
  for (f = 0; f < a.length; f += 3) b.push(new Ms(a[f])), f + 1 < a.length && (c.push(new Ms(a[f + 1])), f + 2 < a.length && d.push(new Ms(a[f + 2])));
  this.Hq = new is([b], !1);
  this.Nt = new is([c], !1);
  this.Ot = new is([d], !1)
};
RA.prototype.ba = function() {
  this.Hq && this.Iq || this.uo();
  ls(this.Hq);
  ls(this.Nt);
  ls(this.Ot);
  var a;
  for (a = 0; a < this.Uc.length; a++) this.Uc[a].Xa();
  for (a = 0; a < this.Vc.length; a++) this.Vc[a].Xa();
  for (a = 0; a < this.Nf.length; a++) this.Nf[a].Xa();
  var b = w.i.Ig;
  a = b.jj.length;
  b = b.Ze.length + (a - b.ik.length);
  this.pz != b && (this.pz = b, Ux(this.QC, "Achievements (" + b + "/" + a + ")"))
};

function SA() {
  this.F = "pointsBreakdownContainer";
  this.Ya = !0;
  this.Ls = null;
  this.Ao = {};
  this.sz = {};
  this.Dv = {};
  this.sy = {};
  this.tu = {};
  this.ex = {}
}
SA.prototype = new Xx;
SA.prototype.J = function() {
  this.Ao = {};
  this.sy = {};
  this.tu = {};
  this.ex = {};
  var a, b;
  for (a = 0; a < Qr.length; a++) b = Qr[a].h, this.Ao[b] = -1, this.sz[b] = -1, this.Dv[b] = -1;
  TA(this)
};
SA.prototype.ba = function() {
  this.Ls || TA(this);
  var a, b, c, d, f, g, h, l, n = w.i.ae;
  for (a = 0; a < Qr.length; a++) b = Qr[a].h, c = this.Ao[b], d = n.Qi[b], f = this.Ao[b], g = n.pj[b], h = this.Dv[b], l = Qr[a].Fb, c != d && (this.Ao[b] = d, c = this.sy[b], c.innerHTML = xa(d)), f != g && (this.sz[b] = g, d = this.tu[b], d.innerHTML = r(g)), h != l && (this.Dv[b] = l, b = this.ex[b], b.innerHTML = r(l))
};

function TA(a) {
  Ox(a.F);
  a.Ls = P("table", M(a.F), null, "pointsTable");
  var b = 0;
  a.St(b++);
  var c;
  for (c = 0; c < Qr.length; c++) {
    var d = a,
      f = Qr[c].h,
      g = b++,
      g = d.Ls.insertRow(g),
      h = g.insertCell(0);
    h.style.textAlign = "right";
    h.style.width = "120px";
    h.innerHTML = Pr[f].Gc;
    h = g.insertCell(1);
    h.style.textAlign = "right";
    h.style.width = "60px";
    d.tu[f] = h;
    h = g.insertCell(2);
    h.style.textAlign = "right";
    h.style.width = "60px";
    d.ex[f] = h;
    g = g.insertCell(3);
    g.style.textAlign = "right";
    d.sy[f] = g
  }
}
SA.prototype.St = function(a) {
  a = this.Ls.insertRow(a);
  var b = Vx(a);
  b.style.textAlign = "right";
  b.innerHTML = "Adventurous Deed";
  b = Vx(a);
  b.style.textAlign = "right";
  b.innerHTML = "Count";
  b = Vx(a);
  b.style.textAlign = "right";
  b.innerHTML = "AP/Deed";
  a = Vx(a);
  a.style.textAlign = "right";
  a.innerHTML = "Adventure Points"
};

function UA(a) {
  this.F = a;
  this.Ya = !0;
  this.Rl = this.hj = this.Gt = null;
  this.Uc = [];
  this.Vc = []
}
UA.prototype = new Xx;
UA.prototype.J = function() {
  this.uo()
};
UA.prototype.uo = function() {
  Ox(this.F);
  this.Gt = null;
  this.Uc.length = 0;
  this.Vc.length = 0;
  this.Zn();
  var a = this.F,
    b = M(a);
  if (b) {
    this.Gt = P("table", b, null, "adventurerSkillTreeTable");
    var b = this.hj.Ha,
      c = this.Rl.Ha,
      d = Math.max(b.length, c.length),
      f, g, h;
    for (f = 0; f < d; f++) g = this.Gt.insertRow(f), h = g.insertCell(0), g = g.insertCell(1), h.id = a + "_" + f + "_0", g.id = a + "_" + f + "_1", h.width = 150, g.width = 150, f < b.length && this.Uc.push(new ky(h.id, b[f], f, !0)), f < c.length && this.Vc.push(new ky(g.id, c[f], f, !0))
  }
  for (a = 0; a < this.Uc.length; a++) this.Uc[a].J();
  for (a = 0; a < this.Vc.length; a++) this.Vc[a].J()
};
UA.prototype.Zn = function() {
  var a = w.i.ae.tl,
    b = [],
    c = [],
    d;
  for (d = 0; d < a.length; d += 2) b.push(a[d]), d + 1 < a.length && c.push(a[d + 1]);
  this.hj = new is([b], !1);
  this.Rl = new is([c], !1)
};
UA.prototype.ba = function() {
  this.hj && this.Gt || this.uo();
  ls(this.hj);
  ls(this.Rl);
  var a;
  for (a = 0; a < this.Uc.length; a++) this.Uc[a].Xa();
  for (a = 0; a < this.Vc.length; a++) this.Vc[a].Xa()
};

function VA(a) {
  this.F = "pointsTabContent";
  this.C = a;
  R(this, new fz("achievementsTabAdventurePointsPanel"));
  R(this, new SA);
  R(this, new UA("pointUpgradesContainer"));
  R(this, new RA("achievementsContainer"))
}
VA.prototype = new jy;
VA.prototype.Me = function() {
  this.C.qa = !0;
  this.C.ha = !1
};
VA.prototype.Ne = function() {
  this.C.qa = !0;
  this.C.ha = !1
};
VA.prototype.Zd = function() {
  this.C.qa = !1;
  this.C.ha = !1
};
VA.prototype.J = function() {
  this.C.qa = !0;
  this.C.ha = !1;
  Zx(this)
};

function WA(a) {
  var b = a.op.RD,
    c = a.r,
    d = a.pa,
    f = a.Ew,
    g = a.uf(),
    h = a.Rm;
  return {
    itemTypeId: b,
    itemSlot: c,
    characterClass: d,
    itemName: f,
    itemRarity: g,
    itemLevel: a.ns,
    itemGold: a.zf,
    itemValue: a.va,
    itemCharacteristic: a.s,
    itemEffect: h ? {
      itemEffectType: h.Dw,
      itemEffectAmount: h.LD,
      itemEffectDescription: h.MD,
      itemEffectName: h.ms
    } : null
  }
}

function XA(a) {
  var b = a.itemSlot,
    c = a.characterClass,
    d = a.itemName,
    f = a.itemRarity,
    g = a.itemLevel,
    h = a.itemGold,
    l = a.itemValue,
    n = a.itemCharacteristic,
    p;
  if (p = a.itemEffect) {
    var s = p.itemEffectType,
      u = p.itemEffectDescription;
    p = s && u ? new Fv(s, p.itemEffectAmount, u, p.itemEffectName) : null
  } else p = null;
  a = w.Sm.os[a.itemTypeId];
  return a ? new Iv(a, b, c, d ? d : "Error", g ? g : 1, f ? f : 0, h ? h : 0, l ? l : 0, n ? n : 1, p) : (console.log("failed to lookup item type"), null)
};

function YA(a) {
  var b = a.Xt,
    c = a.pa,
    d = a.zb,
    f = a.v().getName(),
    g;
  g = a.K;
  g = {
    characterLevel: g.Eb,
    characterHealth: g.Sa,
    characterSpirit: g.Yc,
    kills: g.im,
    damageComponent: ZA(g.sd),
    armorComponent: ZA(g.je),
    attackRatingComponent: ZA(g.xe),
    defenceRatingComponent: ZA(g.Ae),
    maxHealthComponent: ZA(g.Jb),
    maxSpiritComponent: ZA(g.Ke),
    stunCount: g.vq,
    minionKills: g.Ff,
    damageGiven: g.rj,
    damageReceived: g.sj
  };
  var h;
  h = a.p;
  var l = h.w,
    n = h.cd;
  h = {
    levelX: h.Ob(),
    levelY: h.Pb(),
    worldX: h.dc(),
    worldY: h.ec(),
    roomId: l ? l.fk : -1,
    floorPositionIndex: h.fg,
    hallwayId: n ? n.Or : -1
  };
  var n = a.gk,
    l = [],
    p;
  if (n)
    for (p = 0; p < n.length; p++) l.push({
      spellName: n[p].ta
    });
  p = a.Ld;
  n = [];
  if (p) {
    p = p.items;
    var s;
    for (s = 0; s < p.length; s++) n.push(WA(p[s]))
  }
  p = a.Z;
  s = a.Yg;
  var u = [];
  if (s && p) {
    var y, A;
    for (A = 0; A < p.length; A++)(y = s.ef(p[A])) && u.push(WA(y))
  } else console.log("failed to generate equipped item state array");
  return {
    adventurerName: b,
    characterClass: c,
    characterType: d,
    spriteName: f,
    characteristicsComponent: g,
    positionComponent: h,
    spells: l,
    inventory: n,
    equippedItemCollection: u,
    skillPoints: a.de,
    initialSpellSkillPoint: a.Ci,
    upgrades1: $A(a.ei.Ha),
    upgrades2: $A(a.fi.Ha),
    upgrades3: $A(a.gi.Ha),
    upgrades4: $A(a.hi.Ha)
  }
}

function $A(a) {
  var b = {},
    c, d;
  for (d = 0; d < a.length; d++) c = a[d], b[c.Jr().c] = c.He();
  return b
}

function aB(a, b) {
  var c, d, f;
  for (c = 0; c < a.length; c++) f = a[c], d = a[c].Jr(), d = b[d.c], f.ft(d)
}

function ZA(a) {
  return a ? {
    itemValue: a.va,
    levelValue: a.Pc,
    spellBonusPercent: a.Xh,
    skillBonusPercent: a.wc
  } : null
}

function bB(a, b) {
  if (a && b) {
    var c = b.itemValue,
      d = b.levelValue,
      f = b.spellBonusPercent,
      g = b.skillBonusPercent;
    a.va = c ? c : 0;
    a.Pc = d ? d : 0;
    a.Xh = f ? f : 0;
    a.wc = g ? g : 0
  }
};

function cB() {}
cB.prototype.Kw = function(a) {
  var b = w.ob;
  b.hd = a.minUnlockedLevel;
  b.fc = a.maxUnlockedLevel;
  a = a.monsterLevelStates;
  for (b = 0; b < a.length; b++) {
    for (var c = a[b], d = c.level, c = c.monsterTypes, f = [], g = void 0, g = 0; g < c.length; g++) f.push(dB(c[g], d));
    w.ob.en[d + ""] = f
  }
};

function eB(a, b) {
  var c = [],
    d;
  for (d = 0; d < b.length; d++) c.push(fB(b[d]));
  return {
    level: a,
    monsterTypes: c
  }
}

function fB(a) {
  return {
    name: a.Vk(),
    sprite: a.ll.getName(),
    kills: a.xq
  }
}

function dB(a, b) {
  var c = a.kills,
    d = new fi(a.name, a.sprite, b),
    c = c ? c : 0;
  d.xq = 0;
  d.ml = 0;
  d.Sj = 0;
  d.Ep = 0;
  d.Gp = 0;
  d.Fp = 0;
  d.Hp = 0;
  d.No = 0;
  d.$o = 0;
  d.ek = 0;
  ti(d);
  for (d.xq = c; c > d.ek;) c -= d.ek, ti(d);
  d.ml = c;
  return d
};

function gB() {}
gB.prototype.ts = function(a) {
  var b = a.count,
    c = a.locked,
    d = a.upgradeCount;
  if (a = w.nh.vf(a.scrollId)) a.mh = b, a.ts(c, d)
};

function hB(a) {
  return {
    playedMillis: a.Xj,
    turnCount: a.On,
    doorsOpened: a.Lk,
    roomsCleared: a.qn,
    levelsCleared: a.Mj,
    dungeonsCleared: a.wi,
    castlesConquered: a.uk,
    farmsPurchased: a.Rk,
    totalGoldFromMonsters: a.Xk,
    totalGoldFromItems: a.Wk,
    directKills: a.si,
    scrollKills: a.Dl,
    minionKills: a.Ff,
    farmedKills: a.Sd,
    characterStunnedCount: a.oj,
    meleeAttackCount: a.hl,
    rangedAttackCount: a.wl,
    spellCastCount: a.Gl,
    potionsUsed: a.ul,
    scrollsUsed: a.El,
    minionsSummoned: a.kl,
    itemsSold: a.Ph,
    itemsFound: a.Gi,
    uncommonItemsFound: a.Ol,
    rareItemsFound: a.xl,
    historicItemsFound: a.Zk,
    ancientItemsFound: a.nk,
    treasureChestsLooted: a.Nl,
    weaponRacksLooted: a.Sl,
    bookcasesLooted: a.tk
  }
}

function iB(a, b, c) {
  var d = a.totalPlayedMillis,
    f = a.playedMillis,
    g = a.turnCount,
    h = a.doorsOpened,
    l = a.roomsCleared,
    n = a.levelsCleared,
    p = a.dungeonsCleared,
    s = a.castlesConquered,
    u = a.farmsPurchased,
    y = a.totalGoldFromMonsters,
    A = a.totalGoldFromItems,
    C = a.directKills,
    v = a.scrollKills,
    D = a.minionKills,
    N = a.farmedKills,
    I = a.characterStunnedCount,
    x = a.meleeAttackCount,
    z = a.rangedAttackCount,
    O = a.spellCastCount,
    J = a.potionsUsed,
    la = a.scrollsUsed,
    Q = a.minionsSummoned,
    V = a.itemsSold,
    na = a.itemsFound,
    K = a.uncommonItemsFound,
    H = a.rareItemsFound,
    S = a.historicItemsFound,
    da = a.ancientItemsFound,
    W = a.treasureChestsLooted,
    ia = a.weaponRacksLooted,
    ea = a.weaponsRacksLooted;
  a = a.bookcasesLooted;
  u || (u = w.Aa.dg.length);
  b.Xj = c ? Math.max(0, d ? d : f) : Math.max(0, f ? f : 0);
  b.On = g ? g : 0;
  b.Lk = h ? h : 0;
  b.qn = l ? l : 0;
  b.Mj = n ? n : 0;
  b.wi = p ? p : 0;
  b.uk = s ? s : 0;
  b.Rk = u;
  b.Xk = y ? y : 0;
  b.Wk = A ? A : 0;
  b.si = C ? C : 0;
  b.Dl = v ? v : 0;
  b.wx(D ? D : 0);
  b.dt(N ? N : 0);
  b.oj = I ? I : 0;
  b.hl = x ? x : 0;
  b.wl = z ? z : 0;
  b.Gl = O ? O : 0;
  b.ul = J ? J : 0;
  b.El = la ? la : 0;
  b.kl = Q ? Q : 0;
  b.Ph = V ? V : 0;
  b.Gi = na ? na : 0;
  b.Ol = K ? K : 0;
  b.xl = H ? H : 0;
  b.Zk = S ? S : 0;
  b.nk = da ? da : 0;
  b.Nl = W ? W :
    0;
  b.tk = a ? a : 0;
  c = Math.max(ia ? ia : 0, ea ? ea : 0);
  b.Sl = c
};

function jB() {
  var a = w.pg;
  "undefined" != typeof localStorage && localStorage.removeItem(a.Zp);
  a.qs = Ba();
  Ta("SaveManager", "Delete")
}

function px(a) {
  var b = vz(a);
  b && ("undefined" != typeof localStorage && localStorage.setItem(a.Zp, b), a.qs = Ba())
}

function kB(a, b) {
  if (b) {
    var c = fa.eD(b);
    if (c) {
      var d = JSON.parse(c);
      if (d) {
        w.ix(!0);
        w.Em = d.gameInitialized;
        if (w.Em) {
          w.wb = d.worldActive;
          w.lg = d.partyCreated;
          w.Fe = d.gameWon;
          var f = d.gameTimestamp;
          w.Tw = f ? f : Date.now();
          var g = d.turnNumber,
            h = d.frameNumber,
            l = d.victoryCount;
          w.i.$a = g ? g : 0;
          w.i.Gj = h ? h : 0;
          w.i.wh = l ? l : 0;
          var n = d.statistics,
            p = d.totalStatistics,
            s = d.world,
            u = s.worldCenterX,
            y = s.worldCenterY,
            A = s.blockShiftRow,
            C = w.S;
          C.R = s.blockShiftCol;
          C.L = A;
          C.q = bg(C);
          ed(C);
          C.he = u;
          C.ie = y;
          C.ty = !0;
          var v = d.dungeonManagerState,
            D = v.farmedKills,
            N = v.dungeonCostLevel,
            I = v.dungeonStates;
          if (I) {
            w.Aa.lt = !1;
            var x;
            for (x = 0; x < I.length; x++) {
              var z = I[x];
              if (z) {
                var O = z.dungeonId,
                  J = z.discovered,
                  la = z.cleared,
                  Q = z.conquered,
                  V = z.clearedTurn,
                  na = z.dungeonFarm,
                  K = z.farmStartTurn,
                  H = z.dungeonFarmCost,
                  S = z.dungeonType,
                  da = z.levelCount;
                if (O) {
                  var W = w.Aa.Do[O];
                  if (W) {
                    W.Lc = la ? !0 : !1;
                    W.Mg = V ? V : 0;
                    W.qf = J ? !0 : !1;
                    W.oe = na ? !0 : !1;
                    W.tx(Q ? !0 : !1);
                    W.zi = K ? K : 0;
                    W.Nk = H;
                    var ia = S ? S : 0;
                    W.Go = ia;
                    W.Aj = !(4 === ia || 5 === ia || 7 === ia || 8 === ia);
                    W.Fo = Fd(ia);
                    W.rs = da;
                    J && (ee(W), na ? he(W) : la && w.Aa.Is(W))
                  } else console.log("Failed to load dungeon state for: " +
                    O)
                }
              }
            }
            w.Aa.lt = !0;
            var ea = w.Aa;
            ea.lt && (fe(ea, ea.uj), fe(ea, ea.Ge), fe(ea, ea.ze), fe(ea, ea.dg), fe(ea, ea.bk))
          }
          w.Aa.dt(D ? D : 0);
          w.Aa.Mk = N ? N : 0;
          var va = d.currentDungeon;
          if (va) {
            var yb = va.dungeonId,
              Fb = va.currentLevelIndex,
              pa = w.Aa.Do[yb];
            pa ? (pa.ri = Fb, w.Mc = pa) : (console.log("Failed to lookup dungeon by id: " + yb), w.Mc = null)
          } else w.Mc = null;
          var T = d.castleManager;
          if (T) {
            var X = T.castleStates;
            w.kb.Uj = T.nextRequiredMonsterLevel;
            var Ca;
            for (Ca = 0; Ca < X.length; Ca++) {
              var qa = X[Ca];
              if (qa) {
                var ta = qa.castleId,
                  eb = qa.conquered,
                  Gb = qa.dungeonsConquered,
                  Da = qa.castleRegionLocked,
                  ub = qa.attackScheduled,
                  mb = qa.requiredMonsterLevel;
                if (ta) {
                  var Ea = w.kb.bm[ta];
                  Ea ? (Ea.tx(eb ? !0 : !1), Ea.Bj = Gb ? !0 : !1, Ea.$b = Da ? !0 : !1, Ea.ye = ub ? !0 : !1, Lc(), Ea.Jf = mb ? mb : 0) : console.log("Failed to load castle state for: " + ta)
                }
              }
            }
            var La = w.kb,
              wa, Fa;
            for (wa = 0; wa < La.pd.length; wa++) Fa = La.pd[wa], Jc(Fa) && La.Jg.push(Fa), Fa.ye && !Fa.cb && La.Dh.push(Fa), Kc(Fa);
            md(La, La.Dh);
            md(La, La.Jg);
            var ha = w.Aa,
              ja;
            for (ja = 0; ja < ha.Ab.length; ja++) ge(ha, ha.Ab[ja])
          }
          var Ga = d.currentCastle;
          if (Ga) {
            var bb = Ga.castleId,
              za = w.kb.bm[bb];
            za ? w.le = za : (console.log("Failed to lookup castle by id: " + bb), w.le = null)
          } else w.le = null;
          var nb = d.shopManager,
            fb = 0;
          nb && (fb = nb.collectedGold);
          w.ug.ni = fb ? fb : 0;
          var cb = d.farms;
          if (cb) {
            var Ua;
            for (Ua = 0; Ua < cb.length; Ua++) {
              var Va = cb[Ua];
              if (Va) {
                var mc = Va.dungeonId,
                  vb = Va.farmCol,
                  Sb = Va.farmRow;
                mc && le(w.Bm, new ie(mc, vb, Sb))
              }
            }
          }
          var Ma = d.level;
          if (Ma && !w.wb) {
            var zb, Hb;
            w.Mc ? (zb = w.Mc.Go, Hb = w.Mc.Aj) : (zb = 11, Hb = !1);
            var ac = Ma.levelCenterX,
              ob = Ma.levelCenterY,
              pb = Ma.roomVisibility,
              Ha = Ma.hallways;
            Jd(Ma.levelSeed, zb, Hb, !1);
            var jb =
              w.Ba;
            jb.Ki = ac;
            jb.Li = ob;
            var Ab, Bb = w.Ba.gd;
            if (Bb.length !== Ha.length) console.log("hallway array length mismatch. state=" + Ha.length + " hallways=" + Bb.length);
            else
              for (Ab = 0; Ab < Ha.length; Ab++) {
                var qb = Bb[Ab],
                  wb = Ha[Ab],
                  Ib = wb.doorAOpen,
                  Ec = wb.doorBOpen;
                Mg(qb, wb.visible);
                qb.af.Mb = Ib;
                qb.Be.Mb = Ec
              }
            var bc, Wa = w.Ba.Pa;
            if (Wa.length !== pb.length) console.log("room array length mismatch");
            else
              for (bc = 0; bc < pb.length; bc++) pb[bc] && Ag(Wa[bc])
          }
          var cc = d.treasureChestManager;
          if (cc) {
            var Qa, nc;
            for (Qa = 0; Qa < cc.length; Qa++) {
              var sa =
                cc[Qa],
                Tb = sa.levelX,
                qc = sa.levelY,
                Fc = sa.opened,
                Cb = sa.westWall,
                kb = sa.roomId,
                Ra;
              b: {
                for (var Ja = sa.settingsId, Db = w.th, gb = void 0, gb = 0; gb < Db.ve.length; gb++)
                  if (Db.ve[gb].uh === Ja) {
                    Ra = Db.ve[gb];
                    break b
                  } console.log("failed to find treasure chest settings: " + Ja);Ra = Db.ve[0]
              }
              var rb = new Gi(Tb, qc, oh(kb), Ra, Cb);
              Hi(rb, Fc);
              if (nc = rb) {
                var dc = w.th,
                  Ka = nc;
                dc.Mn.push(Ka);
                dc.Dt[Ka.Nn.fk] = Ka
              }
            }
          }
          var Xa = d.party;
          if (Xa) {
            var hb = w.i.da,
              lb = Xa.gold,
              rc = Xa.kills,
              sc = Xa.experiencePoints;
            hb.fd = lb ? lb : 0;
            hb.Je = rc ? rc : 0;
            hb.cg = sc ? sc : 0
          }
          var Aa =
            d.gameOptions;
          if (Aa) {
            var db = w.Nb,
              Mc = Aa.infoTextVisible,
              ec = Aa.spellEffectsVisible,
              Ub = Aa.mapOverlayVisible,
              sb = Aa.offlineProcessingEnabled,
              ka = Aa.fpsVisible,
              Eb;
            Eb = void 0 === Aa.inactiveTabProcessingEnabled ? !0 : Aa.inactiveTabProcessingEnabled;
            var xb;
            xb = void 0 === Aa.spriteRenderOrderEnabled ? !0 : Aa.spriteRenderOrderEnabled;
            db.Mm = !!Mc;
            db.nq = !!ec;
            db.up = !!Ub;
            db.Jp = !!sb;
            db.bp = !!Eb;
            db.rq = !!xb;
            db.Po = !!ka
          }
          n && iB(n, w.i.Ih, !1);
          p ? iB(p, w.i.Ua, !1) : n && iB(n, w.i.Ua, !0);
          var Na = d.victoryStatistics;
          if (Na) {
            var Ya = w.i.Bg,
              tc = Na.partySize1Victories,
              me = Na.partySize2Victories,
              ne = Na.partySize3Victories,
              Le = Na.maxContinuationVictories,
              Td = Na.currentContinuationVictories,
              oe = Na.singleClassVictories,
              Y = Na.classVictories,
              nf = Na.soloClassVictories,
              Nc = Na.currentContinueCount;
            Ya.hn = tc ? tc : 0;
            Ya.jn = me ? me : 0;
            Ya.kn = ne ? ne : 0;
            Ya.Xm = Le ? Le : 0;
            Ya.mm = Td ? Td : 0;
            Ya.vn = oe ? oe : 0;
            void 0 === Nc && (Nc = Ya.mm);
            Ya.nm = Nc;
            if (Y) {
              var gd, uc, U;
              for (U = 0; U < av.length; U++) gd = av[U].pa, (uc = Y[gd]) && (w.i.Bg.qo[gd] = uc)
            }
            if (nf) {
              var Z, $, ba;
              for (ba = 0; ba < av.length; ba++) Z = av[ba].pa, ($ = nf[Z]) && (w.i.Bg.lq[Z] =
                $)
            }
          }
          var ca = d.adventurers;
          if (ca) {
            var q, pe;
            for (q = 0; q < ca.length; q++) {
              var fc = ca[q],
                vd = fc.characterClass,
                qe = fc.spriteName,
                gc = fc.characteristicsComponent,
                vc = fc.positionComponent,
                $c = fc.spells,
                Gc = fc.inventory,
                ad = fc.equippedItemCollection,
                Vb = fc.skillPoints,
                Tc = fc.initialSpellSkillPoint,
                hd = fc.upgrades1,
                id = fc.upgrades2,
                jd = fc.upgrades3,
                kd = fc.upgrades4,
                eg = $u[vd],
                hc = new Uh(fc.adventurerName, fc.characterType, vd, eg, new Zv),
                re = hi(eg.nb());
              hc.Fh = re;
              hc.ee = w.fh.v(qe);
              var of = hc;
              of.de = Vb ? Vb : 0;
              of.Zi = ws(of);
              hc.Ci = Tc ? Tc : 0;
              var wd = hc.p,
                rl = vc.worldX,
                cj = vc.worldY,
                Ah = vc.roomId,
                dj = vc.hallwayId,
                Bh = vc.floorPositionIndex;
              t(wd.u, vc.levelX, vc.levelY);
              t(wd.Db, rl, cj); - 1 < Ah && (wd.w = oh(Ah));
              if (-1 < dj) {
                var Me;
                b: {
                  for (var Ne = w.Ba, Oe = void 0, Oe = 0; Oe < Ne.gd.length; Oe++)
                    if (Ne.gd[Oe].Or === dj) {
                      Me = Ne.gd[Oe];
                      break b
                    } Me = null
                }
                wd.cd = Me;
                wd.fg = Bh
              }
              var fg = hc,
                ld = $c;
              if (ld)
                for (var pf = void 0, qf = void 0, pf = 0; pf < ld.length; pf++) {
                  var rf = fg.Kc.kc,
                    sf = void 0;
                  if (rf) {
                    c: {
                      var Ch = ld[pf].spellName,
                        gg = void 0,
                        se = void 0;
                      for (se in rf)
                        if (Object.prototype.hasOwnProperty.call(rf,
                            se))
                          if (gg = rf[se], !gg) console.log("spell lookup failure for key: " + se);
                          else if (gg.ta === Ch) {
                        sf = gg;
                        break c
                      }
                      console.log("failed to lookup spell: " + Ch);sf = null
                    }
                    qf = sf ? new li(sf) : null
                  }
                  else qf = null;
                  qf && ki(fg, qf)
                }
              var Md = hc.Ld,
                tf = Gc;
              if (tf)
                for (var uf = void 0, Dh = void 0, uf = 0; uf < tf.length; uf++)(Dh = XA(tf[uf])) && bw(Md, Dh);
              var ej = hc,
                hg = ad;
              if (hg)
                for (var ig = void 0, Eh = void 0, ig = 0; ig < hg.length; ig++)(Eh = XA(hg[ig])) && $w(ej, Eh);
              var Sa = hc.K,
                bd = gc.characterLevel,
                Fh = gc.characterHealth,
                Gh = gc.characterSpirit,
                Hh = gc.kills,
                Ih = gc.damageComponent,
                fj = gc.armorComponent,
                vf = gc.attackRatingComponent,
                wf = gc.defenceRatingComponent,
                Jh = gc.maxHealthComponent,
                te = gc.maxSpiritComponent,
                Ud = gc.stunCount,
                xf = gc.minionKills,
                yf = gc.damageGiven,
                xd = gc.damageReceived;
              Sa.Eb = bd ? bd : 1;
              var sl = Ia(Sa.Eb, rx, 1);
              Sa.Am = sl;
              var Kh = Ia(Sa.Eb, ux, 1);
              Sa.mt = Kh;
              Sa.Sa = m(Fh ? Fh : Sa.Sa);
              Sa.Yc = Gh ? Gh : Sa.Yc;
              Sa.im = Hh ? Hh : Sa.im;
              Sa.wx(xf ? xf : Sa.Ff);
              Sa.vq = Ud ? Ud : Sa.vq;
              Sa.rj = yf ? yf : Sa.rj;
              Sa.sj = xd ? xd : Sa.sj;
              bB(Sa.sd, Ih);
              bB(Sa.je, fj);
              bB(Sa.xe, vf);
              bB(Sa.Ae, wf);
              bB(Sa.Jb, Jh);
              bB(Sa.Ke, te);
              Sa.Tq = 12;
              Sa.Pr = 2;
              Sa.ot = 3;
              aB(hc.ei.Ha, hd);
              aB(hc.fi.Ha, id);
              aB(hc.gi.Ha, jd);
              aB(hc.hi.Ha, kd);
              (pe = hc) && w.i.D.push(pe)
            }
            w.i.gg = w.i.D[0];
            w.i.ce = Hz()
          }
          a.eE.Kw(d.monsterTypes);
          var jg = d.settings.upgrades,
            Vd, Nd;
          for (Vd in jg) Object.prototype.hasOwnProperty.call(jg, Vd) && ((Nd = wx[Vd]) ? Nd.md = jg[Vd] : console.log("failed to lookup settingsId: " + Vd));
          var tl = a.AE,
            kg = d.scrollInventory;
          if (kg) {
            var ue;
            for (ue = 0; ue < kg.length; ue++) tl.ts(kg[ue])
          }
          var Uc = d.pointManagerState;
          if (Uc) {
            var ve = Uc.spentAdventurePoints,
              zf = Uc.pointsByType,
              we = Uc.pointUpgrades;
            w.i.ae.An = ve ? ve : 0;
            if (zf && 0 !== zf.length) {
              var xe;
              for (xe = 0; xe < zf.length; xe++) {
                var Wd = zf[xe];
                if (Wd) {
                  var yd = Wd.pointEventType,
                    lg = Wd.points,
                    mg = Wd.count;
                  yd && (w.i.ae.Qi[yd] = lg ? lg : 0, w.i.ae.pj[yd] = mg ? mg : 0)
                }
              }
            }
            if (we && 0 !== we.length) {
              var Af;
              for (Af = 0; Af < we.length; Af++) {
                var ng = we[Af];
                if (ng) {
                  var Lh = ng.upgradeId;
                  if (Lh) {
                    var ul = !!ng.upgradePurchased,
                      Bf = void 0;
                    b: {
                      for (var Mh = w.i.ae, Pe = void 0, Pe = 0; Pe < Mh.tl.length; Pe++)
                        if (Mh.tl[Pe].kh.id === Lh) {
                          Bf = Mh.tl[Pe];
                          break b
                        } Bf = null
                    }
                    Bf && Bf.ft(ul)
                  }
                }
              }
            }
            Ur(w.i.ae)
          }
          var gj = d.achievementManager;
          if (gj) {
            var Qe = gj.achievements;
            if (Qe) {
              var Cf;
              for (Cf = 0; Cf < Qe.length; Cf++) {
                var Xd = Qe[Cf];
                if (Xd) {
                  var Oc = Xd.achievementId,
                    Yd = Xd.obtained,
                    Re = Xd.applied;
                  if (Oc) {
                    var Zd = w.i.Ig.Lt[Oc];
                    Zd ? (Zd.We = Yd ? !0 : !1, Zd.Of = Re ? !0 : !1) : console.log("Failed to find achievement: " + Oc)
                  }
                }
              }
            }
          }
          var Vc = w.i.Ig;
          0 != Vc.ik.length && (Vc.ik.length = 0);
          0 != Vc.Ze.length && (Vc.Ze.length = 0);
          var Od, wc;
          for (Od = 0; Od < Vc.jj.length; Od++) wc = Vc.jj[Od], wc.We ? wc.Of ? wc.We && wc.Of && Tr(wc.h, wc.Vt) : Vc.Ze.push(wc) : Vc.ik.push(wc);
          var zd = d.potionInventory;
          if (zd) {
            var Ad;
            for (Ad = 0; Ad < zd.length; Ad++) {
              var Nh = zd[Ad],
                hj = Nh.active,
                vl = Nh.activeStartTurn,
                og;
              b: {
                for (var ij = Nh.potionId, Df = void 0, Df = 0; Df < potionInfo.length; Df++)
                  if (ij === potionInfo[Df].name) {
                    og = potionInfo[Df];
                    break b
                  } console.log("failed to find potion by id: " + ij);og = null
              }
              if (og) {
                var Oh = new Tq(og);
                Vq(Oh, hj);
                Oh.Vl = vl;
                rr(Oh)
              }
            }
          }
          ed(w.S);
          xs();
          Iz();
          w.$h.J()
        } else w.eA();
        w.Kw();
        return !0
      }
    }
  }
  return !1
}

function vz(a) {
  return (a = JSON.stringify(lB(a))) ? fa.cD(a) : null
}

function lB(a) {
  var b;
  if (w.Em) {
    var c = a.Zp,
      d = Date.now(),
      f = w.Em,
      g = w.i.$a,
      h = w.i.Gj,
      l = w.wb,
      n = w.lg,
      p = w.Fe,
      s = w.i.wh,
      u, y = w.S;
    u = {
      worldCenterX: y.he,
      worldCenterY: y.ie,
      blockShiftCol: y.R,
      blockShiftRow: y.L
    };
    var A, C = w.Nb;
    A = {
      infoTextVisible: C.Mm,
      spellEffectsVisible: C.nq,
      mapOverlayVisible: C.up,
      offlineProcessingEnabled: C.Jp,
      inactiveTabProcessingEnabled: C.bp,
      spriteRenderOrderEnabled: C.rq,
      fpsVisible: C.Po
    };
    var v = w.Aa.Sd,
      D = w.Aa.Mk,
      N = [],
      I = w.Aa.Ab,
      x, z;
    for (z = 0; z < I.length; z++) {
      var O = I[z];
      x = {
        dungeonId: O.ag,
        discovered: O.qf,
        conquered: O.cb,
        cleared: O.Lc,
        clearedTurn: O.Mg,
        dungeonFarm: O.oe,
        farmStartTurn: O.zi,
        dungeonFarmCost: O.Nk,
        dungeonType: O.Go,
        levelCount: O.rs
      };
      N.push(x)
    }
    var J = {
        farmedKills: v,
        dungeonCostLevel: D,
        dungeonStates: N
      },
      la = {
        collectedGold: w.ug.ni
      },
      Q = w.kb.Uj,
      V = [],
      na = w.kb.pd,
      K, H;
    for (H = 0; H < na.length; H++) {
      var S = na[H];
      K = {
        castleId: S.lo,
        conquered: S.cb,
        dungeonsConquered: S.Bj,
        castleRegionLocked: S.$b,
        attackScheduled: S.ye,
        requiredMonsterLevel: S.Jf
      };
      V.push(K)
    }
    var da = {
        nextRequiredMonsterLevel: Q,
        castleStates: V
      },
      W = [],
      ia = w.Bm.nw,
      ea, va;
    for (va = 0; va < ia.length; va++) {
      var yb = ia[va];
      ea = {
        dungeonId: yb.ag,
        farmCol: yb.kw,
        farmRow: yb.lw
      };
      W.push(ea)
    }
    var Fb, pa = w.Mc;
    Fb = pa ? {
      dungeonId: pa.ag,
      currentLevelIndex: pa.ri
    } : null;
    var T, X = w.le;
    T = X ? {
      castleId: X.lo
    } : null;
    var Ca;
    if (w.wb) Ca = null;
    else {
      var qa = w.Ba,
        ta = qa.Ki,
        eb = qa.Li,
        Gb = qa.sp,
        Da = qa.Pa,
        ub = [],
        mb;
      for (mb = 0; mb < Da.length; mb++) ub.push(Da[mb].Xi);
      var Ea = qa.gd,
        La = [],
        wa;
      for (wa = 0; wa < Ea.length; wa++) {
        var Fa = Ea[wa];
        La.push({
          visible: Fa.Km,
          doorAOpen: Fa.af.Mb,
          doorBOpen: Fa.Be.Mb
        })
      }
      Ca = {
        levelCenterX: ta,
        levelCenterY: eb,
        levelSeed: Gb,
        roomVisibility: ub,
        hallways: La
      }
    }
    var ha;
    if (w.wb) ha = null;
    else {
      var ja = w.th.Mn,
        Ga = [],
        bb;
      for (bb = 0; bb < ja.length; bb++) {
        var za = ja[bb];
        Ga.push({
          levelX: za.zq,
          levelY: za.Aq,
          opened: za.Kg,
          settingsId: za.BC.uh,
          westWall: za.VE,
          roomId: za.Nn.fk
        })
      }
      ha = Ga
    }
    var nb = w.nh.at,
      fb = [],
      cb;
    for (cb = 0; cb < nb.length; cb++) {
      var Ua = nb[cb];
      fb.push({
        scrollId: Ua.qg,
        count: Ua.mh,
        locked: Ua.Qe,
        upgradeCount: Ua.tg
      })
    }
    var Va = w.Yj.re,
      mc = [],
      vb;
    for (vb = 0; vb < Va.length; vb++) {
      var Sb = Va[vb];
      mc.push({
        potionId: Sb.name,
        active: Sb.Oe,
        activeStartTurn: Sb.Vl
      })
    }
    var Ma,
      zb = w.i.da;
    Ma = {
      gold: zb.fd,
      kills: zb.Je,
      experiencePoints: zb.cg
    };
    var Hb = hB(w.i.Ih),
      ac = hB(w.i.Ua),
      ob, pb = w.i.Bg,
      Ha = w.i.Bg,
      jb = {},
      Ab, Bb, qb;
    for (qb = 0; qb < av.length; qb++) Ab = av[qb].pa, Bb = cs(Ha, Ab), 0 < Bb && (jb[Ab] = Bb);
    var wb = w.i.Bg,
      Ib = {},
      Ec, bc, Wa;
    for (Wa = 0; Wa < av.length; Wa++) Ec = av[Wa].pa, bc = bs(wb, Ec), 0 < bc && (Ib[Ec] = bc);
    ob = {
      partySize1Victories: pb.hn,
      partySize2Victories: pb.jn,
      partySize3Victories: pb.kn,
      maxContinuationVictories: pb.Xm,
      currentContinuationVictories: pb.mm,
      singleClassVictories: pb.vn,
      classVictories: Ib,
      soloClassVictories: jb,
      currentContinueCount: pb.nm
    };
    var cc = [],
      Qa;
    for (Qa = 0; Qa < w.i.D.length; Qa++) cc.push(YA(w.i.D[Qa]));
    var nc, sa = w.ob,
      Tb = [],
      qc = w.ob,
      Fc = qc.fc,
      Cb;
    for (Cb = qc.hd; Cb <= Fc; Cb++) Tb.push(eB(Cb, Th(qc, Cb)));
    nc = {
      monsterLevelStates: Tb,
      minUnlockedLevel: sa.hd,
      maxUnlockedLevel: sa.fc
    };
    var kb, Ra, Ja = {};
    for (kb in E) Object.prototype.hasOwnProperty.call(E, kb) && (Ra = E[kb], Ja[Ra.c] = Ra.md);
    var Db = {
        upgrades: Ja
      },
      gb = w.i.ae.An,
      rb = w.i.ae,
      dc = [],
      Ka, Xa, hb, lb;
    for (lb = 0; lb < Qr.length; lb++) Ka = Qr[lb].h, Xa = rb.Qi[Ka], hb = rb.pj[Ka], dc.push({
      pointEventType: Ka,
      points: Xa,
      count: hb
    });
    var rc = [],
      sc = w.i.ae.tl,
      Aa;
    for (Aa = 0; Aa < sc.length; Aa++) {
      var db = sc[Aa];
      rc.push({
        upgradeId: db.kh.id,
        upgradePurchased: db.He()
      })
    }
    var Mc = Ca,
      ec = ha,
      Ub = {
        spentAdventurePoints: gb,
        pointsByType: dc,
        pointUpgrades: rc
      },
      sb = [],
      ka = w.i.Ig.jj,
      Eb, xb;
    for (xb = 0; xb < ka.length; xb++) {
      var Na = ka[xb];
      Eb = {
        achievementId: Na.id,
        obtained: Na.We,
        applied: Na.Of
      };
      sb.push(Eb)
    }
    b = {
      saveKey: c,
      gameTimestamp: d,
      gameInitialized: f,
      turnNumber: g,
      frameNumber: h,
      worldActive: l,
      partyCreated: n,
      gameWon: p,
      victoryCount: s,
      world: u,
      gameOptions: A,
      dungeonManagerState: J,
      shopManager: la,
      castleManager: da,
      farms: W,
      currentDungeon: Fb,
      currentCastle: T,
      level: Mc,
      treasureChestManager: ec,
      scrollInventory: fb,
      potionInventory: mc,
      party: Ma,
      statistics: Hb,
      totalStatistics: ac,
      victoryStatistics: ob,
      adventurers: cc,
      monsterTypes: nc,
      settings: Db,
      pointManagerState: Ub,
      achievementManager: {
        achievements: sb
      }
    }
  } else b = {
    saveKey: a.Zp,
    gameInitialized: !1,
    partyCreated: !1,
    gameWon: !1
  };
  return b
};

function th(a, b) {
  return Math.round(w.Sf + (a - w.Ba.Ki - (b - w.Ba.Li)))
}

function uh(a, b) {
  return Math.round(w.Tf + 0.5 * (a - w.Ba.Ki + (b - w.Ba.Li)))
}

function Zy(a, b) {
  var c = w.vl;
  return w.Sf + ((a / w.B | 0) - c.vk - ((b / w.B | 0) - c.wk)) * w.B + ((a % w.B | 0) - (b % w.B | 0)) - c.zt
}

function $y(a, b) {
  var c = w.vl;
  return w.Tf + ((a / w.B | 0) - c.vk + ((b / w.B | 0) - c.wk)) * w.Nh + (((a % w.B | 0) + (b % w.B | 0)) / 2 | 0) - c.At
};

function mB() {
  this.yw = this.Jo = 0;
  this.zD = 3;
  this.gD = 2;
  this.cw = 0;
  this.PC = 4;
  this.Qt = 0;
  this.TC = 2;
  this.rk = this.bu = 0
}

function Iz() {
  var a, b;
  for (a = 0; a < w.i.D.length; a++) b = w.i.D[a], b.Zi = ws(b)
}

function sw(a, b, c) {
  var d = new Uh(a.za, 1, a.pa, a, null),
    f = d.K;
  d.ee = w.fh.v(a.d);
  var g = hi(a.nb());
  d.Fh = g;
  g = d.p;
  g.w = b.p.w;
  g.cd = b.p.cd;
  t(g.u, c.T, c.U);
  var h = b.p.Db;
  c = h.T + m(-10 + 20 * Math.random());
  h = h.U + m(-10 + 20 * Math.random());
  t(g.Db, c, h);
  g = b.K.Eb;
  d.xg = b;
  b.yg || (b.yg = []);
  b.yg.push(d);
  1 === d.zb && d.Kc.oi && (b.En = d);
  d.QB = w.i.$a;
  d.RB = a.Oi;
  ii(d, g);
  f.Eb = g;
  ji(f, g, a.Ma);
  if (a.jl)
    for (b = 0; b < a.jl.length; b++) ki(d, new li(a.jl[b]));
  b = d.xg;
  a = d.Kc.Bp;
  Ni(d.K);
  Oi(d, b.ei);
  Oi(d, b.fi);
  Oi(d, b.gi);
  Oi(d, b.hi);
  if (a)
    for (b = 0; b < a.length; b++) f =
      a[b], Qi(d, f.f, f.g);
  w.Ni.Tt(d);
  w.i.aa.bs();
  Kd(18)
}

function oi(a, b, c) {
  var d = new fi(a.Ka, a.d, b),
    f = new Uh(a.za, 3, a.pa, a, null),
    g = f.K;
  f.gq(d);
  f.ee = d.ll;
  d = hi(a.nb());
  f.Fh = d;
  ii(f, b);
  g.Eb = b;
  ji(g, b, a.Ma);
  if (a.Jm)
    for (b = 0; b < a.Jm.length; b++) ki(f, new li(a.Jm[b]));
  b = f.p;
  b.w = c;
  b.cd = null;
  var h = ug(c) + w.B,
    g = wg(c) + w.B,
    d = xg(c) - w.B;
  c = h + k(vg(c) - w.B - h);
  g += k(d - g);
  t(b.u, c, g);
  mi(f, a.Nr);
  return f
}

function ii(a, b) {
  var c = a.Z;
  if (c && 0 < c.length) {
    var d, f;
    for (f = 0; f < c.length; f++) {
      d = c[f];
      var g = a,
        h = b,
        l = w.Sm,
        n = l.uf((100 - E.Yl.t) / 100);
      (d = Nv(l, d, g, h, n)) && a.Qk(d)
    }
  }
}

function Hz() {
  var a = new Uh(bv.za, 5, 0, bv, null),
    b = a.K,
    c = vs();
  ii(a, c);
  b.Eb = c;
  ji(b, c, bv.Ma);
  return a
}

function hi(a) {
  var b = new Wt,
    c, d;
  for (d = 0; d < a.length; d++) c = a[d], c.Wa(), b.fo.push(c);
  return b
}

function ji(a, b, c) {
  var d = Ia(b, rx, 1);
  a.Am = d;
  d = Ia(b, vx, c.Qf);
  a.je.Pc = d;
  d = Ia(b, vx, c.Rf);
  a.xe.Pc = d;
  d = Ia(b, vx, c.Zf);
  a.Ae.Pc = d;
  d = Ia(b, vx, c.Xf);
  a.sd.Pc = d;
  d = Ia(b, sx, c.Cf);
  a.Jb.Pc = d;
  c = Ia(b, tx, c.Ef);
  a.Ke.Pc = c;
  a.Sa = m($h(a.Jb));
  a.Yc = $h(a.Ke);
  b = Ia(b, ux, 1);
  a.mt = b
}
mB.prototype.Lp = function(a) {
  if (!a.Va) {
    var b = a.xg;
    if (b && b.yg) {
      var c = b.yg.indexOf(a); - 1 < c && b.yg.splice(c, 1);
      b.En === a && (b.En = null)
    }
    a.Va = !0;
    w.Ni.Lp(a)
  }
};
mB.prototype.ol = function(a, b) {
  if (!b.Va) {
    var c = b.p,
      d = b.K.Eb,
      f = 1 === a.zb ? a.xg : a;
    $t(f) && (f.K.im++, Is(doubleKillsPotion.t), w.i.aa.cp(), 5 === f.zb && w.i.aa.gp(), 1 === a.zb && (w.i.aa.$k(), f.K.$k()), f = b.Sb, uw(f.No * doubleExperiencePotion.t), ui(f));
    var f = c.w,
      g = ug(f) + w.B,
      h = vg(f) - w.B,
      l = wg(f) + w.B,
      n = xg(f) - w.B;
    if (k(100) <= E.Lr.t) {
      var p = Dg();
      if (0 < p) {
        var s = new Eg(p, nB(c.Ob(), g, h), nB(c.Pb(), l, n), f);
        w.ff.pe.push(s);
        doubleGoldDropsPotion.t && (p = new Eg(p, nB(c.Ob(), g, h), nB(c.Pb(), l, n), f), w.ff.pe.push(p))
      }
    }
    k(100) <= E.$s.t && (p = w.nh.Pl, p = p[k(p.length)], p = new Mq(p, nB(c.Ob(), g, h), nB(c.Pb(),
      l, n), f), w.Uh.kf.push(p));
    100 * Math.random() <= E.Ns.t && (p = new Tq(potionInfo[k(potionInfo.length)]), p = new mr(p, nB(c.Ob(), g, h), nB(c.Pb(), l, n), f), w.Ti.Hf.push(p));
    if (k(100) <= E.ls.t || guaranteedItemDropsPotion.t) Xv(w.dh, nB(c.Ob(), g, h), nB(c.Pb(), l, n), f, d), doubleItemDropsPotion.t && Xv(w.dh, nB(c.Ob(), g, h), nB(c.Pb(), l, n), f, d);
    b.Va = !0;
    c = ww();
    b.ee = c;
    w.Gf.ol(b);
    w.i.Xg.ol();
    Kd(1);
    0.15 > Math.random() && (c = oB(), sh(w.pc, b, c, "white"))
  }
};

function ww() {
  switch (k(3)) {
    case 0:
      return w.I.v("L2_SkeletonHumanLarge.PNG");
    case 1:
      return w.I.v("L2_SkeletonHumanMedium.PNG");
    case 2:
      return w.I.v("L2_SkeletonDog.PNG");
    case 3:
      return w.I.v("L2_SkeletonHumanSmall.PNG");
    default:
      return w.I.v("L2_SkeletonHumanMedium2.PNG")
  }
}

function oB() {
  switch (k(16)) {
    case 0:
      return "Death!";
    case 1:
      return "No!";
    case 2:
      return "Aaaargh!";
    case 3:
      return "Ooof";
    case 4:
      return "Blargh";
    case 5:
      return "Ack!";
    case 6:
      return "Blah!";
    case 7:
      return "Ouch!";
    case 8:
      return "My leg!";
    case 9:
      return "Ug!";
    case 10:
      return "Hey!";
    case 11:
      return "Uncool!";
    case 12:
      return "Unfair!";
    case 13:
      return "Golly!";
    case 14:
      return "Oh dear.";
    default:
      return "I have died."
  }
}

function vw(a, b, c) {
  var d = 3 * w.B,
    f = Math.max(b, a - d),
    d = Math.min(a + d, c);
  if (f >= d) return a < b ? b : a > c ? c : a;
  a = f + k(d - f);
  return a < b ? b : a > c ? c : a
}

function nB(a, b, c) {
  var d = w.Nh,
    f = Math.max(b, a - d),
    d = Math.min(a + d, c);
  if (f >= d) return a < b ? b : a > c ? c : a;
  a = f + k(d - f);
  return a < b ? b : a > c ? c : a
}

function pB(a) {
  var b = w.Qo;
  b.Jo += a;
  if (15 <= b.Jo) {
    w.i.$a++;
    b.Jo -= 15;
    b.yw++;
    if (b.yw >= b.zD) {
      b.yw = 0;
      var c, d = Qd();
      for (c = 0; c < d.length; c++) {
        var f = d[c].K,
          g = $h(f.Jb);
        if (f.Sa < g) {
          var h = Math.max(1, m(g * (f.Pr + f.ap + Ys.t) / 100));
          f.Sa = Math.min(g, f.Sa + h)
        }
        var l = $h(f.Ke);
        if (f.Yc < l) {
          var n = Math.max(1, m(l * (f.ot + f.pq + Zs.t) / 100));
          f.Yc = Math.min(l, f.Yc + n)
        }
      }
    }
    var p = w.Ni.eh,
      s, u, y, A, C;
    for (C = p.length - 1; 0 <= C; C--) s = p[C], u = s.xg, u.Va ? (qB(s), w.Qo.Lp(s)) : (y = s.QB, A = s.RB, 0 > A || (y > w.i.$a ? console.log("minion bug: start turn in future.") : w.i.$a -
      y > A && (qB(s), w.Qo.Lp(s))));
    var v = xh(),
      D = Qd(),
      N;
    for (N = 0; N < D.length; N++) Ow(D[N].Ja, !0);
    for (N = 0; N < v.length; N++) Ow(v[N].Ja, !1);
    w.i.aa.is();
    var I = w.i.da;
    w.wb ? I.ou() : (I.Ks = !1, I.gn = null, I.Mp = !1, I.nu());
    w.wb || (w.ff.zl(), w.Uh.zl(), w.Ti.zl(), w.dh.zl());
    rB(Qd());
    rB(xh());
    var x = w.Yj,
      z = 0 === w.i.$a % 3,
      O, J, la, Q, V = 800 + Ts.t;
    for (O = x.re.length - 1; 0 <= O; O--) J = x.re[O], J.Oe && (Q = J.Vl, z && potionDurationPotion.t && Q < w.i.$a && (Q++, J.Vl = Q), w.i.$a - Q >= V && (Vq(J, !1), la = x.re.indexOf(J), -1 < la && x.re.splice(la, 1)));
    if (autoFiringScrollsPotion.t && 0 < xh().length && (b.bu++, b.bu >= b.TC)) {
      b.bu =
        0;
      var na = w.nh.Pl;
      b.rk >= na.length && (b.rk = 0);
      nz(b.rk);
      Hq(na[b.rk], !0);
      b.rk++;
      b.rk >= na.length && (b.rk = 0)
    }
    b.cw++;
    if (b.cw >= b.gD) {
      b.cw = 0;
      var K = w.Aa,
        H, S, da = !1,
        W, ia = w.i.$a;
      for (H = 0; H < K.ze.length; H++) S = K.ze[H], 1500 <= ia - S.Mg && (da = !0, S.Lc = !1, S.Mg = 0);
      if (da) {
        for (H = K.ze.length - 1; 0 <= H; H--) S = K.ze[H], S.Lc || (K.ze.splice(H, 1), S.qf && !S.Lc && (W = K.Ge.indexOf(S), 0 > W && K.Ge.push(S)));
        fe(K, K.Ge)
      }
      var ea, va, yb = fasterFarmingPotion.t,
        Fb = fasterInfestationPotion.t,
        pa = (100 + Us.t) * moreKillsPerFarmPotion.t;
      for (H = 0; H < K.dg.length; H++) S = K.dg[H], ea = S.Mg, va = S.zi, ea > ia && (ea = 0, S.Mg = ea), va > ia && (va = 0,
        S.zi = va), S.Lc ? (Fb && (ea -= 2, S.Mg = ea), 1500 <= ia - ea && (S.Lc = !1, S.zi = ia)) : (yb && (va -= 2, S.zi = va), 1200 <= ia - va && (K.Sd += pa, S.Lc = !0, S.Mg = ia))
    }
    b.Qt++;
    if (b.Qt >= b.PC) {
      b.Qt = 0;
      var T = w.i.Ig,
        X, Ca;
      for (X = T.ik.length - 1; 0 <= X; X--) {
        var qa = Ca = T.ik[X];
        qa.We || (qa.We = qa.ab ? as(qa) : ds(qa) >= qa.requirement);
        qa.We && (T.ik.splice(X, 1), T.Ze.push(Ca))
      }
      for (X = T.Ze.length - 1; 0 <= X; X--) Ca = T.Ze[X], Ca.Of && T.Ze.splice(X, 1)
    }
  }
  w.i.Gj++;
  var ta = xh(),
    eb, Gb;
  for (Gb = 0; Gb < ta.length; Gb++)
    if (eb = ta[Gb].p, null != eb.Gd) {
      var Da = eb;
      if (Da.Gd) {
        var ub = Da.Jw * a * 3;
        ab(Da.ra, Da.Gd);
        Mb(Da.ra);
        Nb(Da.ra, ub);
        var mb = Lb(Da.Gd);
        ub >= mb ? Da.Gd = null : Nb(Da.Gd, (mb - ub) / mb);
        ib(Da.u, Da.ra);
        Da.w && Fg(Da.w, Da.u, w.Nh)
      }
    } var Ea = xh(),
    La = Qd(),
    wa;
  for (wa = 0; wa < La.length; wa++) Lq(La[wa], a);
  for (wa = 0; wa < Ea.length; wa++) Lq(Ea[wa], a);
  var Fa = w.Xe,
    ha, ja, Ga, bb = !1,
    za, nb = !1;
  for (ha = 0; ha < Fa.kj.length; ha++)
    if (ja = Fa.kj[ha], Ga = ja.Ca, (za = ja.xb) && za.Io === Yb) {
      var fb;
      a: {
        var cb = ja,
          Ua = cb.Xb;Ua && !Ua.Cj && pc(w.df, cb.Xb);
        if (!Ua || Ua.Pk || Ua.bg) {
          var Va = cb.xb;
          if (!Va.Cj) {
            var mc = cb.Ib;
            if (mc && 8 == mc.ga) {
              var vb = cb,
                Sb = w.RC,
                Ma = vb.Da,
                zb = vb.Ca,
                Hb = m((zb.K.ho + 1) * w.B),
                ac = gw(zb, Ma, 200, Hb);
              if (ac && 0 !== ac.length) {
                var ob = void 0,
                  pb = void 0,
                  Ha = zb.p.u,
                  jb = Ma.p.u,
                  Ab = void 0,
                  Bb = void 0,
                  qb = void 0,
                  wb = void 0,
                  Ib = vb.Ib;
                if (Ib) wb = Ib.ca;
                else var Ec = zb.So(),
                  bc = Ec ? Ec.Rm : null,
                  wb = bc ? bc.ms : null;
                wb || (wb = "Red Splat");
                for (var Wa = void 0, ob = 0; ob < ac.length; ob++) {
                  qb = ac[ob];
                  Ab = qb.p;
                  Bb = Ab.u;
                  if (qb === Ma) Sw(Ab, Ha, jb, Hb);
                  else {
                    Wa = new fw;
                    Wa.Ca = zb;
                    Wa.Cb(qb);
                    Wa.yd = !1;
                    Wa.Ib = Ib;
                    Sw(Ab, Ha, jb, Hb);
                    var cc = new Zb(wb, jb, Bb, !1, 1);
                    Wa.xb = cc;
                    pb = Math.max(1, zw(zb, Ma));
                    Wa.Rd = !1;
                    Wa.Jc = pb;
                    mw(w.Xe, Wa)
                  }
                  var Qa =
                    Sb,
                    nc = qb,
                    sa = nc.p.u,
                    Tb = new fw;
                  Tb.Ca = vb.Ca;
                  Tb.Cb(nc);
                  Tb.yd = !1;
                  Tb.Ib = Qa.Wq;
                  Qa.Wq || (Qa.Wq = new li(jq));
                  var qc = Qa.Wq.ca;
                  if (qc) {
                    var Fc = new Zb(qc, sa, sa, !1, 1);
                    Tb.xb = Fc
                  }
                  mw(w.Xe, Tb)
                }
              }
            }
            pc(w.df, Va)
          } else if (Va.bl()) {
            fb = cb.Vn = !0;
            break a
          }
        }
        fb = !1
      }
      fb ? bb = !0 : za.Cj && (nb = !0)
    } else if (Ga.Va) bb = ja.Vn = !0;
  else if (ja.yd) {
    var Cb = Fa,
      kb = ja,
      Ra = kb.Xb;
    Ra && !Ra.Cj && pc(w.df, Ra);
    if (Ra) {
      var Ja = kb.Ib;
      if (Ja && 12 === Ja.ga) {
        var Db = Ra.wm;
        t(kb.Ca.p.u, Db.T, Db.U)
      }
    }(!Ra || Ra.Pk || Ra.bg) && jw(Cb, kb) && (bb = !0)
  } else jw(Fa, ja) && (bb = !0);
  if (nb) {
    var gb = qi(Ga),
      rb, dc, Ka, Xa, hb, lb, rc, sc, Aa, db, Mc = 1 === Ga.zb ? Ga.xg.K : Ga.K;
    for (db = 0; db < gb.length; db++)
      if (rb = gb[db], !rb.Va && (dc = rb.p.u, Ka = w.Ba.Ai(dc.T), Xa = w.Ba.Bi(dc.U), (hb = w.Ba.hb(Ka, Xa)) && (lb = hb.Pq) && lb.Cj))
        if (lb.bl()) sg(hb, null);
        else if (lb.bx !== lb.oc && (sc = hb.li, 0 !== sc && (Aa = k(sc + 1), 0 !== Aa))) {
      hb.qB(Math.max(0, sc - Aa));
      var ec = rc = rb.K;
      ec.Sa -= m(Aa);
      0 > ec.Sa && (ec.Sa = 0);
      Mc.rj += Aa;
      rc.sj += Aa;
      rh(rb, Aa);
      0 === rc.Sa && tw(lb.ud, rb)
    }
  }
  if (bb)
    for (ha = Fa.kj.length - 1; 0 <= ha; ha--) Fa.kj[ha].Vn && Fa.kj.splice(ha, 1);
  var Ub = w.df,
    sb;
  for (sb = 0; sb <
    Ub.Wg.length; sb++) {
    var ka = Ub.Wg[sb],
      Eb = a;
    ka.Cj = !0;
    if (1 === ka.Io) {
      if (ka.Xb && !ka.Pk) {
        ab(ic, ka.xi);
        tb(ic, ka.wm);
        var xb = Lb(ic),
          Na = void 0,
          Na = ka.ud === w.i.ce ? 11 * Eb : ka.Gs ? 5 * Eb : 7 * Eb;
        xb <= Na ? (ab(ka.wm, ka.xi), ka.Pk = !0, ka.bg = !0) : (Mb(ic), Nb(ic, Na), ib(ka.wm, ic))
      }
      ka.nd.zc ? ka.oc = $b(ka) : jc(ka, Eb)
    } else ka.Io === Yb ? jc(ka, Eb) : 2 === ka.Io && (ka.yi += Eb * ya, 400 <= ka.yi && (ka.bg = !0, ka.Pk = !0))
  }
  for (sb = Ub.Wg.length - 1; 0 <= sb; sb--) Ub.Wg[sb].bl() && Ub.Wg.splice(sb, 1);
  var Ya = w.Di,
    tc, me, ne, Le = !1;
  for (tc = 0; tc < w.i.D.length; tc++) me = w.i.D[tc].Ld,
    me.ip && (Le = !0, me.ip = !1);
  if (Le) {
    Ya.Fj.length = 0;
    var Td, oe, Y, nf;
    for (tc = 0; tc < w.i.D.length; tc++)
      for (oe = w.i.D[tc], ne = oe.Ld.items, Td = 0; Td < ne.length; Td++) Y = ne[Td], (nf = oe.ef(Y.r)) && !ss(Y, nf) || Ya.Fj.push(Y);
    1 < Ya.Fj.length && cw(Ya, Ya.Fj)
  }
  w.pc.oy();
  if (!w.ig) {
    var Nc;
    for (Nc = 0; Nc < Nx.length; Nc++) ls(Nx[Nc]);
    var gd;
    for (Nc = 0; Nc < w.i.D.length; Nc++) gd = w.i.D[Nc], ls(gd.ei), ls(gd.fi), ls(gd.gi), ls(gd.hi)
  }
  var uc, U = w.i.D,
    Z = 0,
    $ = 0;
  if (w.wb) {
    for (uc = 0; uc < U.length; uc++) Z += U[uc].p.dc(), $ += U[uc].p.ec();
    var ba = Z / U.length,
      ca = $ / U.length,
      q = w.S;
    if (null == ba || null == ca) console.log("Setting world center x/y to null. worldCenterX=" + ba + " y=" + ca);
    else if (q.he = ba, q.ie = ca, !$f(q.q[1][1], q.he, q.ie)) {
      var pe;
      var fc = !1,
        vd, qe, gc, vc;
      for (vd = 0; 3 > vd; vd++)
        for (qe = 0; 3 > qe; qe++)
          if ($f(q.q[vd][qe], q.he, q.ie)) {
            fc = !0;
            gc = vd;
            vc = qe;
            break
          } if (fc) {
        var $c = q.q[0][0],
          Gc = q.q[0][1],
          ad = q.q[0][2],
          Vb = q.q[1][0],
          Tc = q.q[1][1],
          hd = q.q[1][2],
          id = q.q[2][0],
          jd = q.q[2][1],
          kd = q.q[2][2];
        0 === gc ? (q.R--, 0 === vc ? (q.L--, q.q[0][0] = kd, q.q[0][1] = id, q.q[0][2] = jd, q.q[1][0] = ad, q.q[1][1] = $c, q.q[1][2] =
          Gc, q.q[2][0] = hd, q.q[2][1] = Vb, q.q[2][2] = Tc, B(q.q[0][0], q.R, q.L, !0), B(q.q[0][1], q.R, q.L + 1, !0), B(q.q[0][2], q.R, q.L + 2, !0), B(q.q[1][0], q.R + 1, q.L, !0), B(q.q[1][1], q.R + 1, q.L + 1, !1), B(q.q[1][2], q.R + 1, q.L + 2, !1), B(q.q[2][0], q.R + 2, q.L, !0), B(q.q[2][1], q.R + 2, q.L + 1, !1), B(q.q[2][2], q.R + 2, q.L + 2, !1)) : 1 === vc ? (q.q[0][0] = id, q.q[0][1] = jd, q.q[0][2] = kd, q.q[1][0] = $c, q.q[1][1] = Gc, q.q[1][2] = ad, q.q[2][0] = Vb, q.q[2][1] = Tc, q.q[2][2] = hd, B(q.q[0][0], q.R, q.L, !0), B(q.q[0][1], q.R, q.L + 1, !0), B(q.q[0][2], q.R, q.L + 2, !0), B(q.q[1][0], q.R + 1,
          q.L, !1), B(q.q[1][1], q.R + 1, q.L + 1, !1), B(q.q[1][2], q.R + 1, q.L + 2, !1), B(q.q[2][0], q.R + 2, q.L, !1), B(q.q[2][1], q.R + 2, q.L + 1, !1), B(q.q[2][2], q.R + 2, q.L + 2, !1)) : (q.L++, q.q[0][0] = jd, q.q[0][1] = kd, q.q[0][2] = id, q.q[1][0] = Gc, q.q[1][1] = ad, q.q[1][2] = $c, q.q[2][0] = Tc, q.q[2][1] = hd, q.q[2][2] = Vb, B(q.q[0][0], q.R, q.L, !0), B(q.q[0][1], q.R, q.L + 1, !0), B(q.q[0][2], q.R, q.L + 2, !0), B(q.q[1][0], q.R + 1, q.L, !1), B(q.q[1][1], q.R + 1, q.L + 1, !1), B(q.q[1][2], q.R + 1, q.L + 2, !0), B(q.q[2][0], q.R + 2, q.L, !1), B(q.q[2][1], q.R + 2, q.L + 1, !1), B(q.q[2][2], q.R + 2,
          q.L + 2, !0))) : 1 === gc ? 0 === vc ? (q.L--, q.q[0][0] = ad, q.q[0][1] = $c, q.q[0][2] = Gc, q.q[1][0] = hd, q.q[1][1] = Vb, q.q[1][2] = Tc, q.q[2][0] = kd, q.q[2][1] = id, q.q[2][2] = jd, B(q.q[0][0], q.R, q.L, !0), B(q.q[0][1], q.R, q.L + 1, !1), B(q.q[0][2], q.R, q.L + 2, !1), B(q.q[1][0], q.R + 1, q.L, !0), B(q.q[1][1], q.R + 1, q.L + 1, !1), B(q.q[1][2], q.R + 1, q.L + 2, !1), B(q.q[2][0], q.R + 2, q.L, !0), B(q.q[2][1], q.R + 2, q.L + 1, !1), B(q.q[2][2], q.R + 2, q.L + 2, !1)) : 1 === vc ? console.log("error? new center block already in the center of the grid.") : (q.L++, q.q[0][0] = Gc, q.q[0][1] =
          ad, q.q[0][2] = $c, q.q[1][0] = Tc, q.q[1][1] = hd, q.q[1][2] = Vb, q.q[2][0] = jd, q.q[2][1] = kd, q.q[2][2] = id, B(q.q[0][0], q.R, q.L, !1), B(q.q[0][1], q.R, q.L + 1, !1), B(q.q[0][2], q.R, q.L + 2, !0), B(q.q[1][0], q.R + 1, q.L, !1), B(q.q[1][1], q.R + 1, q.L + 1, !1), B(q.q[1][2], q.R + 1, q.L + 2, !0), B(q.q[2][0], q.R + 2, q.L, !1), B(q.q[2][1], q.R + 2, q.L + 1, !1), B(q.q[2][2], q.R + 2, q.L + 2, !0)) : (q.R++, 0 === vc ? (q.L--, q.q[0][0] = hd, q.q[0][1] = Vb, q.q[0][2] = Tc, q.q[1][0] = kd, q.q[1][1] = id, q.q[1][2] = jd, q.q[2][0] = ad, q.q[2][1] = $c, q.q[2][2] = Gc, B(q.q[0][0], q.R, q.L, !0), B(q.q[0][1],
          q.R, q.L + 1, !1), B(q.q[0][2], q.R, q.L + 2, !1), B(q.q[1][0], q.R + 1, q.L, !0), B(q.q[1][1], q.R + 1, q.L + 1, !1), B(q.q[1][2], q.R + 1, q.L + 2, !1)) : 1 === vc ? (q.q[0][0] = Vb, q.q[0][1] = Tc, q.q[0][2] = hd, q.q[1][0] = id, q.q[1][1] = jd, q.q[1][2] = kd, q.q[2][0] = $c, q.q[2][1] = Gc, q.q[2][2] = ad, B(q.q[0][0], q.R, q.L, !1), B(q.q[0][1], q.R, q.L + 1, !1), B(q.q[0][2], q.R, q.L + 2, !1), B(q.q[1][0], q.R + 1, q.L, !1), B(q.q[1][1], q.R + 1, q.L + 1, !1), B(q.q[1][2], q.R + 1, q.L + 2, !1)) : (q.L++, q.q[0][0] = Tc, q.q[0][1] = hd, q.q[0][2] = Vb, q.q[1][0] = jd, q.q[1][1] = kd, q.q[1][2] = id, q.q[2][0] =
          Gc, q.q[2][1] = ad, q.q[2][2] = $c, B(q.q[0][0], q.R, q.L, !1), B(q.q[0][1], q.R, q.L + 1, !1), B(q.q[0][2], q.R, q.L + 2, !0), B(q.q[1][0], q.R + 1, q.L, !1), B(q.q[1][1], q.R + 1, q.L + 1, !1), B(q.q[1][2], q.R + 1, q.L + 2, !0)), B(q.q[2][0], q.R + 2, q.L, !0), B(q.q[2][1], q.R + 2, q.L + 1, !0), B(q.q[2][2], q.R + 2, q.L + 2, !0));
        pe = !0
      } else console.log("Failed to find new center block!"), pe = !1;
      if (!pe) {
        console.log("Bug: party not contained by block grid. fixing.");
        var eg = q.vw(q.he),
          hc = q.ww(q.ie);
        console.log("old: blockShiftCol=" + q.R + " blockShiftRow=" + q.L);
        q.R =
          eg - 1;
        q.L = hc - 1;
        console.log("new: blockShiftCol=" + q.R + " blockShiftRow=" + q.L);
        B(q.q[0][0], q.R, q.L, !0);
        B(q.q[0][1], q.R, q.L + 1, !0);
        B(q.q[0][2], q.R, q.L + 2, !0);
        B(q.q[1][0], q.R + 1, q.L, !0);
        B(q.q[1][1], q.R + 1, q.L + 1, !0);
        B(q.q[1][2], q.R + 1, q.L + 2, !0);
        B(q.q[2][0], q.R + 2, q.L, !0);
        B(q.q[2][1], q.R + 2, q.L + 1, !0);
        B(q.q[2][2], q.R + 2, q.L + 2, !0);
        var re = q.q[1][1];
        $f(re, q.he, q.ie) || (console.log("Failed to fix world block grid issue."), console.log("posX: " + q.he + " posY: " + q.ie), console.log("minX: " + re.yp + " maxX: " + re.Mw), console.log("minY: " +
          re.zp + " maxY: " + re.Nw))
      }
    }
  } else {
    for (uc = 0; uc < U.length; uc++) Z += U[uc].p.Ob(), $ += U[uc].p.Pb();
    var of = $ / U.length, wd = w.Ba;
    wd.Ki = Z / U.length;
    wd.Li = of
  }
}

function nz(a) {
  a = 30 + 126 * a;
  var b = w.Yq - 80;
  t(w.i.ce.p.u, w.Ba.Ki + (0.5 * (a - w.Sf) + (b - w.Tf)) | 0, w.Ba.Li + (b - w.Tf - 0.5 * (a - w.Sf)) | 0)
}

function rB(a) {
  var b, c;
  for (b = 0; b < a.length; b++) c = a[b], c.Va || (c.Ja.Kd ? c.Y = Sd : c.dr())
}

function qB(a) {
  a = w.wb ? a.p.Db : a.p.u;
  pc(w.df, new Zb("Red Splat", a, a, !1, 1))
}

function Fs(a, b) {
  if (!(w.i.da.fd < b)) {
    Ta("Dungeon", "Farm Purchased");
    Ks(b);
    a.oe = !0;
    a.zi = w.i.$a;
    he(a);
    var c = w.Bm,
      d = c.Yw(a.bc()),
      f = c.Yw(a.cc());
    le(c, new ie(a.ag, d, f));
    w.i.aa.Xr()
  }
};

function sB() {
  this.GB = !1;
  this.Os = Ba();
  this.XA = Ba();
  this.fD = 1E3 / 60;
  this.kz = 250;
  window.vE = function() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
      window.setTimeout(a, 1E3 / 60)
    }
  }();
  var a = this;
  this.sD = function() {
    a.Hr()
  };
  this.Gr = this.Fr = 0
}
sB.prototype.Hr = function() {
  if (this.GB)
    if (w.Em) {
      var a = Ba(),
        b = a - this.XA,
        a = Math.max(0, a - this.Os),
        c;
      this.XA = Ba();
      if (w.lg && !w.Fe && !w.Mh)
        if (1E3 < a && w.Nb.bp && (w.ig || (w.ig = !0, w.Vj = 0, w.jf = 0, w.Ee.Zd()), w.jf += a), w.ig) {
          for (c = 0; 200 > c && w.Vj < w.jf && !w.Fe && w.ig;) pB(15), w.Vj += this.kz, w.i.aa.fp(this.kz), c++;
          w.Vj >= w.jf && w.xu()
        } else {
          c = a / this.fD;
          0 < c && pB(c);
          c = w.vl;
          var d, f, g, h;
          w.wb ? (d = w.S.he, f = w.S.ie) : (d = w.Ba.Ki, f = w.Ba.Li);
          g = Math.round(d % w.B);
          h = Math.round(f % w.B);
          c.zt = g - h;
          c.At = Math.round((g + h) / 2);
          c.vk = d / w.B | 0;
          c.wk = f / w.B | 0
        } if (w.Mz) try {
        w.Ee.Xa()
      } catch (l) {
        console.log("Caught error. name: " +
          l.name + " message: " + l.message + " exception: " + l)
      }
      this.Fr++;
      this.Gr += b;
      60 <= this.Fr && (w.i.dz = this.Fr / (this.Gr / 1E3) | 0, this.Gr = this.Fr = 0);
      w.ig || (b = w.pg, Ba() - b.qs > b.UC && px(b));
      w.Mh || w.ig || w.i.aa.fp(a);
      this.Os = Ba()
    } else {
      w.eA();
      b = w.pg;
      "undefined" != typeof localStorage && kB(b, localStorage.getItem(b.Zp));
      Ta("SaveManager", "Load");
      this.Os = Ba();
      b = w.Ee;
      a = new dy("Party Creation", !0);
      c = new dy("Game Over", !1);
      d = new dy("Game", !1);
      f = new dy("Char0", !1);
      g = new dy("Char1", !1);
      h = new dy("Char2", !1);
      var n = new dy("Char3", !1),
        p = new dy("Char4", !1),
        s = new dy("Monsters", !1),
        u = new dy("Dungeons", !1),
        y = new dy("Castles", !1),
        A = new dy("Points", !0),
        C = new dy("Offline", !1),
        v = new dy("Info", !0);
      b.Gh.length = 0;
      b.Gh.push(f);
      b.Gh.push(g);
      b.Gh.push(h);
      b.Gh.push(n);
      b.Gh.push(p);
      w.lg ? w.Fe ? c.ha = !0 : d.ha = !0 : a.ha = !0;
      b.Bd = new gy("gameTabMenu");
      var D = new Az(a),
        N = new sz(d),
        I = new Zz(f, "characterTabContent0", 0),
        x = new Zz(g, "characterTabContent1", 1),
        z = new Zz(h, "characterTabContent2", 2),
        O = new Zz(n, "characterTabContent3", 3),
        J = new Zz(p, "characterTabContent4",
          4),
        la = new eA(s),
        Q = new uA(u),
        V = new nA(y),
        na = new BA(c),
        K = new VA(A),
        H = new PA(C),
        S = new wz(v),
        da = new by;
      hy(b.Bd, a);
      hy(b.Bd, c);
      hy(b.Bd, d);
      hy(b.Bd, f);
      hy(b.Bd, g);
      hy(b.Bd, h);
      hy(b.Bd, n);
      hy(b.Bd, p);
      hy(b.Bd, s);
      hy(b.Bd, u);
      hy(b.Bd, y);
      hy(b.Bd, A);
      hy(b.Bd, C);
      hy(b.Bd, v);
      b.Lg && (b.Lg.length = 0);
      R(b, b.Bd);
      R(b, D);
      R(b, I);
      R(b, x);
      R(b, z);
      R(b, O);
      R(b, J);
      R(b, la);
      R(b, Q);
      R(b, V);
      R(b, N);
      R(b, na);
      R(b, K);
      R(b, H);
      R(b, S);
      R(b, da);
      b.Tc.push(D);
      b.Tc.push(I);
      b.Tc.push(x);
      b.Tc.push(z);
      b.Tc.push(O);
      b.Tc.push(J);
      b.Tc.push(la);
      b.Tc.push(Q);
      b.Tc.push(V);
      b.Tc.push(N);
      b.Tc.push(na);
      b.Tc.push(K);
      b.Tc.push(H);
      b.Tc.push(S);
      w.lg || iy(b.Bd);
      w.lg && w.Ee.J();
      w.ig && w.Ee.Zd();
      w.Fe && w.Ee.Me()
    }
  else this.GB = w.fh.cl() && w.I.cl() && w.Kj.cl() && w.Dj.cl(), this.Os = Ba();
  window.vE(this.sD)
};
var w = {
  B: 27,
  Nh: 13,
  iu: 740,
  Yq: 450,
  Sf: 370,
  Tf: 225,
  fh: new Pb("spritesheet/monsters.png", 54, aa),
  I: new Pb("spritesheet/terrain.png", 54, [{
      a: "AttackDummy1.PNG",
      b: {
        x: 1850,
        y: 1794
      }
    }, {
      a: "AttackDummy2.PNG",
      b: {
        x: 1850,
        y: 1738
      }
    }, {
      a: "Border_E.PNG",
      b: {
        x: 1906,
        y: 1682
      }
    }, {
      a: "Border_ES.PNG",
      b: {
        x: 1850,
        y: 1682
      }
    }, {
      a: "Border_ESW.PNG",
      b: {
        x: 1794,
        y: 1794
      }
    }, {
      a: "Border_EW.PNG",
      b: {
        x: 1794,
        y: 1738
      }
    }, {
      a: "Border_N.PNG",
      b: {
        x: 1794,
        y: 1682
      }
    }, {
      a: "Border_NE.PNG",
      b: {
        x: 1906,
        y: 1626
      }
    }, {
      a: "Border_NES.PNG",
      b: {
        x: 1850,
        y: 1626
      }
    }, {
      a: "Border_NEW.PNG",
      b: {
        x: 1794,
        y: 1626
      }
    }, {
      a: "Border_NS.PNG",
      b: {
        x: 1738,
        y: 1794
      }
    }, {
      a: "Border_NSEW.PNG",
      b: {
        x: 1738,
        y: 1738
      }
    }, {
      a: "Border_NSW.PNG",
      b: {
        x: 1738,
        y: 1682
      }
    }, {
      a: "Border_NW.PNG",
      b: {
        x: 1738,
        y: 1626
      }
    }, {
      a: "Border_S.PNG",
      b: {
        x: 1906,
        y: 1570
      }
    }, {
      a: "Border_SW.PNG",
      b: {
        x: 1850,
        y: 1570
      }
    }, {
      a: "Border_W.PNG",
      b: {
        x: 1794,
        y: 1570
      }
    }, {
      a: "L1_Blood001.PNG",
      b: {
        x: 1738,
        y: 1570
      }
    }, {
      a: "L1_Blood002.PNG",
      b: {
        x: 1682,
        y: 1794
      }
    }, {
      a: "L1_Blood003.PNG",
      b: {
        x: 1682,
        y: 1738
      }
    }, {
      a: "L1_Blood004.PNG",
      b: {
        x: 1682,
        y: 1682
      }
    }, {
      a: "L1_Blood005.PNG",
      b: {
        x: 1682,
        y: 1626
      }
    }, {
      a: "L1_Blood006.PNG",
      b: {
        x: 1682,
        y: 1570
      }
    }, {
      a: "L1_Blood007.PNG",
      b: {
        x: 1906,
        y: 1514
      }
    }, {
      a: "L1_Bridge.PNG",
      b: {
        x: 1850,
        y: 1514
      }
    }, {
      a: "L1_BridgeStoneNSin.PNG",
      b: {
        x: 1794,
        y: 1514
      }
    }, {
      a: "L1_BridgeStoneWEin.PNG",
      b: {
        x: 1738,
        y: 1514
      }
    }, {
      a: "L1_BridgeWoodNSin.PNG",
      b: {
        x: 1682,
        y: 1514
      }
    }, {
      a: "L1_BridgeWoodWEin.PNG",
      b: {
        x: 1626,
        y: 1794
      }
    }, {
      a: "L1_Ceiling.PNG",
      b: {
        x: 1626,
        y: 1738
      }
    }, {
      a: "L1_CliffGrassDirt.PNG",
      b: {
        x: 1626,
        y: 1682
      }
    }, {
      a: "L1_CliffGrassLow.PNG",
      b: {
        x: 1626,
        y: 1626
      }
    }, {
      a: "L1_CliffGrassMid.PNG",
      b: {
        x: 1626,
        y: 1570
      }
    }, {
      a: "L1_CliffGrassSnow.PNG",
      b: {
        x: 1626,
        y: 1514
      }
    }, {
      a: "L1_CliffGrassUp.PNG",
      b: {
        x: 1906,
        y: 1458
      }
    }, {
      a: "L1_CliffLowSlopeE.PNG",
      b: {
        x: 1850,
        y: 1458
      }
    }, {
      a: "L1_CliffLowSlopeN.PNG",
      b: {
        x: 1794,
        y: 1458
      }
    }, {
      a: "L1_CliffLowSlopeS.PNG",
      b: {
        x: 1738,
        y: 1458
      }
    }, {
      a: "L1_CliffLowSlopeW.PNG",
      b: {
        x: 1682,
        y: 1458
      }
    }, {
      a: "L1_CliffMidSlopeE.PNG",
      b: {
        x: 1626,
        y: 1458
      }
    }, {
      a: "L1_CliffMidSlopeN.PNG",
      b: {
        x: 1570,
        y: 1794
      }
    }, {
      a: "L1_CliffMidSlopeS.PNG",
      b: {
        x: 1570,
        y: 1738
      }
    }, {
      a: "L1_CliffMidSlopeW.PNG",
      b: {
        x: 1570,
        y: 1682
      }
    }, {
      a: "L1_CliffSnowSlopeE.PNG",
      b: {
        x: 1570,
        y: 1626
      }
    }, {
      a: "L1_CliffSnowSlopeN.PNG",
      b: {
        x: 1570,
        y: 1570
      }
    }, {
      a: "L1_CliffSnowSlopeS.PNG",
      b: {
        x: 1570,
        y: 1514
      }
    }, {
      a: "L1_CliffSnowSlopeW.PNG",
      b: {
        x: 1570,
        y: 1458
      }
    }, {
      a: "L1_CliffUpSlopeE.PNG",
      b: {
        x: 1906,
        y: 1402
      }
    }, {
      a: "L1_CliffUpSlopeN.PNG",
      b: {
        x: 1850,
        y: 1402
      }
    }, {
      a: "L1_CliffUpSlopeS.PNG",
      b: {
        x: 1794,
        y: 1402
      }
    }, {
      a: "L1_CliffUpSlopeW.PNG",
      b: {
        x: 1738,
        y: 1402
      }
    }, {
      a: "L1_DesertShoreE.PNG",
      b: {
        x: 1682,
        y: 1402
      }
    }, {
      a: "L1_DesertShoreN.PNG",
      b: {
        x: 1626,
        y: 1402
      }
    }, {
      a: "L1_DesertShoreNE.PNG",
      b: {
        x: 1570,
        y: 1402
      }
    }, {
      a: "L1_DesertShoreNEin.PNG",
      b: {
        x: 1514,
        y: 1794
      }
    }, {
      a: "L1_DesertShoreNW.PNG",
      b: {
        x: 1514,
        y: 1738
      }
    }, {
      a: "L1_DesertShoreNWin.PNG",
      b: {
        x: 1514,
        y: 1682
      }
    }, {
      a: "L1_DesertShoreS.PNG",
      b: {
        x: 1514,
        y: 1626
      }
    }, {
      a: "L1_DesertShoreSE.PNG",
      b: {
        x: 1514,
        y: 1570
      }
    }, {
      a: "L1_DesertShoreSEin.PNG",
      b: {
        x: 1514,
        y: 1514
      }
    }, {
      a: "L1_DesertShoreSW.PNG",
      b: {
        x: 1514,
        y: 1458
      }
    }, {
      a: "L1_DesertShoreSWin.PNG",
      b: {
        x: 1514,
        y: 1402
      }
    }, {
      a: "L1_DesertShoreW.PNG",
      b: {
        x: 1906,
        y: 1346
      }
    }, {
      a: "L1_FloorGrass_E.PNG",
      b: {
        x: 1850,
        y: 1346
      }
    }, {
      a: "L1_FloorGrass_ES.PNG",
      b: {
        x: 1794,
        y: 1346
      }
    }, {
      a: "L1_FloorGrass_N.PNG",
      b: {
        x: 1738,
        y: 1346
      }
    }, {
      a: "L1_FloorGrass_NE.PNG",
      b: {
        x: 1682,
        y: 1346
      }
    }, {
      a: "L1_FloorGrass_NW.PNG",
      b: {
        x: 1626,
        y: 1346
      }
    },
    {
      a: "L1_FloorGravel.PNG",
      b: {
        x: 1570,
        y: 1346
      }
    }, {
      a: "L1_FloorPattern.PNG",
      b: {
        x: 1514,
        y: 1346
      }
    }, {
      a: "L1_Grass.PNG",
      b: {
        x: 1626,
        y: 1570
      }
    }, {
      a: "L1_GrassDesertEdgeE.PNG",
      b: {
        x: 1458,
        y: 1794
      }
    }, {
      a: "L1_GrassDesertEdgeN.PNG",
      b: {
        x: 1458,
        y: 1738
      }
    }, {
      a: "L1_GrassDesertEdgeNE.PNG",
      b: {
        x: 1458,
        y: 1682
      }
    }, {
      a: "L1_GrassDesertEdgeNEin.PNG",
      b: {
        x: 1458,
        y: 1626
      }
    }, {
      a: "L1_GrassDesertEdgeNW.PNG",
      b: {
        x: 1458,
        y: 1570
      }
    }, {
      a: "L1_GrassDesertEdgeNWin.PNG",
      b: {
        x: 1458,
        y: 1514
      }
    }, {
      a: "L1_GrassDesertEdgeS.PNG",
      b: {
        x: 1458,
        y: 1458
      }
    }, {
      a: "L1_GrassDesertEdgeSE.PNG",
      b: {
        x: 1458,
        y: 1402
      }
    }, {
      a: "L1_GrassDesertEdgeSEin.PNG",
      b: {
        x: 1458,
        y: 1346
      }
    }, {
      a: "L1_GrassDesertEdgeSW.PNG",
      b: {
        x: 1906,
        y: 1290
      }
    }, {
      a: "L1_GrassDesertEdgeSWin.PNG",
      b: {
        x: 1850,
        y: 1290
      }
    }, {
      a: "L1_GrassDesertEdgeW.PNG",
      b: {
        x: 1794,
        y: 1290
      }
    }, {
      a: "L1_Hills.PNG",
      b: {
        x: 1738,
        y: 1290
      }
    }, {
      a: "L1_IceShore01.PNG",
      b: {
        x: 1682,
        y: 1290
      }
    }, {
      a: "L1_IceShore02.PNG",
      b: {
        x: 1626,
        y: 1290
      }
    }, {
      a: "L1_IceShore03.PNG",
      b: {
        x: 1570,
        y: 1290
      }
    }, {
      a: "L1_IceShore04.PNG",
      b: {
        x: 1514,
        y: 1290
      }
    }, {
      a: "L1_IceShore05.PNG",
      b: {
        x: 1458,
        y: 1290
      }
    }, {
      a: "L1_IceShore06.PNG",
      b: {
        x: 1402,
        y: 1794
      }
    }, {
      a: "L1_IceShore07.PNG",
      b: {
        x: 1402,
        y: 1738
      }
    }, {
      a: "L1_IceShore08.PNG",
      b: {
        x: 1402,
        y: 1682
      }
    }, {
      a: "L1_IceShore09.PNG",
      b: {
        x: 1402,
        y: 1626
      }
    }, {
      a: "L1_IceShore10.PNG",
      b: {
        x: 1402,
        y: 1570
      }
    }, {
      a: "L1_IceShore11.PNG",
      b: {
        x: 1402,
        y: 1514
      }
    }, {
      a: "L1_IceShore12.PNG",
      b: {
        x: 1402,
        y: 1458
      }
    }, {
      a: "L1_IceShore13.PNG",
      b: {
        x: 1402,
        y: 1402
      }
    }, {
      a: "L1_IceShore14.PNG",
      b: {
        x: 1402,
        y: 1346
      }
    }, {
      a: "L1_IceShore15.PNG",
      b: {
        x: 1402,
        y: 1290
      }
    }, {
      a: "L1_IceShore16.PNG",
      b: {
        x: 1906,
        y: 1234
      }
    }, {
      a: "L1_Icefloor.PNG",
      b: {
        x: 1850,
        y: 1234
      }
    }, {
      a: "L1_Lake.PNG",
      b: {
        x: 1794,
        y: 1234
      }
    }, {
      a: "L1_LakeShore01.PNG",
      b: {
        x: 1738,
        y: 1234
      }
    }, {
      a: "L1_LakeShore02.PNG",
      b: {
        x: 1682,
        y: 1234
      }
    }, {
      a: "L1_LakeShore03.PNG",
      b: {
        x: 1626,
        y: 1234
      }
    }, {
      a: "L1_LakeShore04.PNG",
      b: {
        x: 1570,
        y: 1234
      }
    }, {
      a: "L1_LakeShore05.PNG",
      b: {
        x: 1514,
        y: 1234
      }
    }, {
      a: "L1_LakeShore06.PNG",
      b: {
        x: 1458,
        y: 1234
      }
    }, {
      a: "L1_LakeShore07.PNG",
      b: {
        x: 1402,
        y: 1234
      }
    }, {
      a: "L1_LakeShore08.PNG",
      b: {
        x: 1346,
        y: 1794
      }
    }, {
      a: "L1_LakeShore09.PNG",
      b: {
        x: 1346,
        y: 1738
      }
    }, {
      a: "L1_LakeShore10.PNG",
      b: {
        x: 1346,
        y: 1682
      }
    }, {
      a: "L1_LakeShore11.PNG",
      b: {
        x: 1346,
        y: 1626
      }
    }, {
      a: "L1_LakeShore12.PNG",
      b: {
        x: 1346,
        y: 1570
      }
    }, {
      a: "L1_LakeShore13.PNG",
      b: {
        x: 1346,
        y: 1514
      }
    }, {
      a: "L1_LakeShore14.PNG",
      b: {
        x: 1346,
        y: 1458
      }
    }, {
      a: "L1_LakeShore15.PNG",
      b: {
        x: 1346,
        y: 1402
      }
    }, {
      a: "L1_LakeShore16.PNG",
      b: {
        x: 1346,
        y: 1346
      }
    }, {
      a: "L1_Lava.PNG",
      b: {
        x: 1346,
        y: 1290
      }
    }, {
      a: "L1_LavaRiverEW.PNG",
      b: {
        x: 1346,
        y: 1234
      }
    }, {
      a: "L1_LavaRiverEndE.PNG",
      b: {
        x: 1906,
        y: 1178
      }
    }, {
      a: "L1_LavaRiverEndN.PNG",
      b: {
        x: 1850,
        y: 1178
      }
    }, {
      a: "L1_LavaRiverEndS.PNG",
      b: {
        x: 1794,
        y: 1178
      }
    }, {
      a: "L1_LavaRiverEndW.PNG",
      b: {
        x: 1738,
        y: 1178
      }
    }, {
      a: "L1_LavaRiverExitE.PNG",
      b: {
        x: 1682,
        y: 1178
      }
    }, {
      a: "L1_LavaRiverExitN.PNG",
      b: {
        x: 1626,
        y: 1178
      }
    }, {
      a: "L1_LavaRiverExitS.PNG",
      b: {
        x: 1570,
        y: 1178
      }
    }, {
      a: "L1_LavaRiverExitW.PNG",
      b: {
        x: 1514,
        y: 1178
      }
    }, {
      a: "L1_LavaRiverNE.PNG",
      b: {
        x: 1458,
        y: 1178
      }
    }, {
      a: "L1_LavaRiverNEW.PNG",
      b: {
        x: 1402,
        y: 1178
      }
    }, {
      a: "L1_LavaRiverNS.PNG",
      b: {
        x: 1346,
        y: 1178
      }
    }, {
      a: "L1_LavaRiverNSE.PNG",
      b: {
        x: 1290,
        y: 1794
      }
    }, {
      a: "L1_LavaRiverNSEW.PNG",
      b: {
        x: 1290,
        y: 1738
      }
    }, {
      a: "L1_LavaRiverNSW.PNG",
      b: {
        x: 1290,
        y: 1682
      }
    }, {
      a: "L1_LavaRiverNW.PNG",
      b: {
        x: 1290,
        y: 1626
      }
    }, {
      a: "L1_LavaRiverSE.PNG",
      b: {
        x: 1290,
        y: 1570
      }
    }, {
      a: "L1_LavaRiverSEW.PNG",
      b: {
        x: 1290,
        y: 1514
      }
    }, {
      a: "L1_LavaRiverSW.PNG",
      b: {
        x: 1290,
        y: 1458
      }
    },
    {
      a: "L1_LavaShoreE.PNG",
      b: {
        x: 1290,
        y: 1402
      }
    }, {
      a: "L1_LavaShoreN.PNG",
      b: {
        x: 1290,
        y: 1346
      }
    }, {
      a: "L1_LavaShoreNE.PNG",
      b: {
        x: 1290,
        y: 1290
      }
    }, {
      a: "L1_LavaShoreNEin.PNG",
      b: {
        x: 1290,
        y: 1234
      }
    }, {
      a: "L1_LavaShoreNW.PNG",
      b: {
        x: 1290,
        y: 1178
      }
    }, {
      a: "L1_LavaShoreNWin.PNG",
      b: {
        x: 1906,
        y: 1122
      }
    }, {
      a: "L1_LavaShoreS.PNG",
      b: {
        x: 1850,
        y: 1122
      }
    }, {
      a: "L1_LavaShoreSE.PNG",
      b: {
        x: 1794,
        y: 1122
      }
    }, {
      a: "L1_LavaShoreSEin.PNG",
      b: {
        x: 1738,
        y: 1122
      }
    }, {
      a: "L1_LavaShoreSW.PNG",
      b: {
        x: 1682,
        y: 1122
      }
    }, {
      a: "L1_LavaShoreSWin.PNG",
      b: {
        x: 1626,
        y: 1122
      }
    }, {
      a: "L1_LavaShoreW.PNG",
      b: {
        x: 1570,
        y: 1122
      }
    }, {
      a: "L1_RiverMouthE.PNG",
      b: {
        x: 1514,
        y: 1122
      }
    }, {
      a: "L1_RiverMouthN.PNG",
      b: {
        x: 1458,
        y: 1122
      }
    }, {
      a: "L1_RiverMouthS.PNG",
      b: {
        x: 1402,
        y: 1122
      }
    }, {
      a: "L1_RiverMouthW.PNG",
      b: {
        x: 1346,
        y: 1122
      }
    }, {
      a: "L1_Road.PNG",
      b: {
        x: 1290,
        y: 1122
      }
    }, {
      a: "L1_Rug.PNG",
      b: {
        x: 1234,
        y: 1794
      }
    }, {
      a: "L1_RugEast.PNG",
      b: {
        x: 1234,
        y: 1738
      }
    }, {
      a: "L1_RugNorth.PNG",
      b: {
        x: 1234,
        y: 1682
      }
    }, {
      a: "L1_RugNorthEast.PNG",
      b: {
        x: 1234,
        y: 1626
      }
    }, {
      a: "L1_RugNorthWest.PNG",
      b: {
        x: 1234,
        y: 1570
      }
    }, {
      a: "L1_RugSouth.PNG",
      b: {
        x: 1234,
        y: 1514
      }
    }, {
      a: "L1_RugSouthEast.PNG",
      b: {
        x: 1234,
        y: 1458
      }
    }, {
      a: "L1_RugSouthWest.PNG",
      b: {
        x: 1234,
        y: 1402
      }
    }, {
      a: "L1_RugWest.PNG",
      b: {
        x: 1234,
        y: 1346
      }
    }, {
      a: "L1_RunEast.PNG",
      b: {
        x: 1234,
        y: 1290
      }
    }, {
      a: "L1_RunEastWest.PNG",
      b: {
        x: 1234,
        y: 1234
      }
    }, {
      a: "L1_RunNorth.PNG",
      b: {
        x: 1234,
        y: 1178
      }
    }, {
      a: "L1_RunNorthEast.PNG",
      b: {
        x: 1234,
        y: 1122
      }
    }, {
      a: "L1_RunNorthEastWest.PNG",
      b: {
        x: 1906,
        y: 1066
      }
    }, {
      a: "L1_RunNorthSouth.PNG",
      b: {
        x: 1850,
        y: 1066
      }
    }, {
      a: "L1_RunNorthSouthEast.PNG",
      b: {
        x: 1794,
        y: 1066
      }
    }, {
      a: "L1_RunNorthSouthWest.PNG",
      b: {
        x: 1738,
        y: 1066
      }
    }, {
      a: "L1_RunNorthWest.PNG",
      b: {
        x: 1682,
        y: 1066
      }
    }, {
      a: "L1_RunSouth.PNG",
      b: {
        x: 1626,
        y: 1066
      }
    }, {
      a: "L1_RunSouthEast.PNG",
      b: {
        x: 1570,
        y: 1066
      }
    }, {
      a: "L1_RunWest.PNG",
      b: {
        x: 1514,
        y: 1066
      }
    }, {
      a: "L1_RunWestSouth.PNG",
      b: {
        x: 1458,
        y: 1066
      }
    }, {
      a: "L1_RunWestSouthEast.PNG",
      b: {
        x: 1402,
        y: 1066
      }
    }, {
      a: "L1_RunnSouthEastWest.PNG",
      b: {
        x: 1346,
        y: 1066
      }
    }, {
      a: "L1_Runtile.PNG",
      b: {
        x: 1290,
        y: 1066
      }
    }, {
      a: "L1_ShoreEout.PNG",
      b: {
        x: 1234,
        y: 1066
      }
    }, {
      a: "L1_ShoreNEin.PNG",
      b: {
        x: 1178,
        y: 1794
      }
    }, {
      a: "L1_ShoreNEout.PNG",
      b: {
        x: 1178,
        y: 1738
      }
    }, {
      a: "L1_ShoreNout.PNG",
      b: {
        x: 1178,
        y: 1682
      }
    }, {
      a: "L1_ShoreSEin.PNG",
      b: {
        x: 1178,
        y: 1626
      }
    }, {
      a: "L1_ShoreSEout.PNG",
      b: {
        x: 1178,
        y: 1570
      }
    }, {
      a: "L1_ShoreSout.PNG",
      b: {
        x: 1178,
        y: 1514
      }
    }, {
      a: "L1_ShoreWN-SE.PNG",
      b: {
        x: 1178,
        y: 1458
      }
    }, {
      a: "L1_ShoreWNin.PNG",
      b: {
        x: 1178,
        y: 1402
      }
    }, {
      a: "L1_ShoreWNout.PNG",
      b: {
        x: 1178,
        y: 1346
      }
    }, {
      a: "L1_ShoreWS-NE.PNG",
      b: {
        x: 1178,
        y: 1290
      }
    }, {
      a: "L1_ShoreWSin.PNG",
      b: {
        x: 1178,
        y: 1234
      }
    }, {
      a: "L1_ShoreWSout.PNG",
      b: {
        x: 1178,
        y: 1178
      }
    }, {
      a: "L1_ShoreWout.PNG",
      b: {
        x: 1178,
        y: 1122
      }
    }, {
      a: "L1_SnowEdge01.PNG",
      b: {
        x: 1178,
        y: 1066
      }
    }, {
      a: "L1_SnowEdge02.PNG",
      b: {
        x: 1906,
        y: 1010
      }
    }, {
      a: "L1_SnowEdge03.PNG",
      b: {
        x: 1850,
        y: 1010
      }
    }, {
      a: "L1_SnowEdge04.PNG",
      b: {
        x: 1794,
        y: 1010
      }
    }, {
      a: "L1_SnowEdge05.PNG",
      b: {
        x: 1738,
        y: 1010
      }
    }, {
      a: "L1_SnowEdge06.PNG",
      b: {
        x: 1682,
        y: 1010
      }
    }, {
      a: "L1_SnowEdge07.PNG",
      b: {
        x: 1626,
        y: 1010
      }
    }, {
      a: "L1_SnowEdge08.PNG",
      b: {
        x: 1570,
        y: 1010
      }
    }, {
      a: "L1_SnowEdge09.PNG",
      b: {
        x: 1514,
        y: 1010
      }
    }, {
      a: "L1_SnowEdge10.PNG",
      b: {
        x: 1458,
        y: 1010
      }
    }, {
      a: "L1_SnowEdge11.PNG",
      b: {
        x: 1402,
        y: 1010
      }
    }, {
      a: "L1_SnowEdge12.PNG",
      b: {
        x: 1346,
        y: 1010
      }
    }, {
      a: "L1_Terrain001.PNG",
      b: {
        x: 1626,
        y: 1570
      }
    }, {
      a: "L1_Terrain002.PNG",
      b: {
        x: 1290,
        y: 1010
      }
    }, {
      a: "L1_Terrain003.PNG",
      b: {
        x: 1234,
        y: 1010
      }
    }, {
      a: "L1_Terrain004.PNG",
      b: {
        x: 1178,
        y: 1010
      }
    }, {
      a: "L1_Terrain005.PNG",
      b: {
        x: 1122,
        y: 1794
      }
    }, {
      a: "L1_Terrain006.PNG",
      b: {
        x: 1794,
        y: 1234
      }
    }, {
      a: "L1_Terrain007.PNG",
      b: {
        x: 1122,
        y: 1738
      }
    }, {
      a: "L1_Terrain008.PNG",
      b: {
        x: 1122,
        y: 1682
      }
    }, {
      a: "L1_Terrain009.PNG",
      b: {
        x: 1122,
        y: 1626
      }
    }, {
      a: "L1_Terrain010.PNG",
      b: {
        x: 1122,
        y: 1570
      }
    }, {
      a: "L1_Terrain011.PNG",
      b: {
        x: 1122,
        y: 1514
      }
    }, {
      a: "L1_Terrain012.PNG",
      b: {
        x: 1570,
        y: 1346
      }
    }, {
      a: "L1_Terrain013.PNG",
      b: {
        x: 1290,
        y: 1122
      }
    }, {
      a: "L1_Terrain014.PNG",
      b: {
        x: 1122,
        y: 1458
      }
    }, {
      a: "L1_Terrain015.PNG",
      b: {
        x: 1122,
        y: 1402
      }
    }, {
      a: "L1_Terrain016.PNG",
      b: {
        x: 1850,
        y: 1514
      }
    }, {
      a: "L1_Terrain017.PNG",
      b: {
        x: 1122,
        y: 1346
      }
    }, {
      a: "L1_Terrain018.PNG",
      b: {
        x: 1122,
        y: 1290
      }
    }, {
      a: "L1_Terrain019.PNG",
      b: {
        x: 1122,
        y: 1234
      }
    }, {
      a: "L1_Terrain020.PNG",
      b: {
        x: 1122,
        y: 1178
      }
    }, {
      a: "L1_Terrain021.PNG",
      b: {
        x: 1122,
        y: 1122
      }
    }, {
      a: "L1_Terrain022.PNG",
      b: {
        x: 1122,
        y: 1066
      }
    }, {
      a: "L1_Terrain023.PNG",
      b: {
        x: 1122,
        y: 1010
      }
    }, {
      a: "L1_Terrain024.PNG",
      b: {
        x: 1906,
        y: 954
      }
    }, {
      a: "L1_Terrain025.PNG",
      b: {
        x: 1850,
        y: 954
      }
    }, {
      a: "L1_Terrain026.PNG",
      b: {
        x: 1794,
        y: 954
      }
    }, {
      a: "L1_Terrain027.PNG",
      b: {
        x: 1738,
        y: 954
      }
    }, {
      a: "L1_Terrain028.PNG",
      b: {
        x: 1682,
        y: 954
      }
    },
    {
      a: "L1_Terrain029.PNG",
      b: {
        x: 1626,
        y: 954
      }
    }, {
      a: "L1_Terrain030.PNG",
      b: {
        x: 1570,
        y: 954
      }
    }, {
      a: "L1_Terrain031.PNG",
      b: {
        x: 1514,
        y: 954
      }
    }, {
      a: "L1_Terrain032.PNG",
      b: {
        x: 1458,
        y: 954
      }
    }, {
      a: "L1_Terrain033.PNG",
      b: {
        x: 1402,
        y: 954
      }
    }, {
      a: "L1_Terrain034.PNG",
      b: {
        x: 1738,
        y: 1290
      }
    }, {
      a: "L1_Terrain035.PNG",
      b: {
        x: 1626,
        y: 1514
      }
    }, {
      a: "L1_Terrain036.PNG",
      b: {
        x: 1346,
        y: 954
      }
    }, {
      a: "L1_Terrain037.PNG",
      b: {
        x: 1290,
        y: 954
      }
    }, {
      a: "L1_Terrain038.PNG",
      b: {
        x: 1234,
        y: 954
      }
    }, {
      a: "L1_Terrain039.PNG",
      b: {
        x: 1178,
        y: 954
      }
    }, {
      a: "L1_Terrain046.PNG",
      b: {
        x: 1626,
        y: 1682
      }
    }, {
      a: "L1_Terrain047.PNG",
      b: {
        x: 1122,
        y: 954
      }
    }, {
      a: "L1_Terrain048.PNG",
      b: {
        x: 1066,
        y: 1794
      }
    }, {
      a: "L1_Terrain049.PNG",
      b: {
        x: 1066,
        y: 1738
      }
    }, {
      a: "L1_Terrain050.PNG",
      b: {
        x: 1066,
        y: 1682
      }
    }, {
      a: "L1_Terrain051.PNG",
      b: {
        x: 1066,
        y: 1626
      }
    }, {
      a: "L1_Terrain052.PNG",
      b: {
        x: 1066,
        y: 1570
      }
    }, {
      a: "L1_Terrain053.PNG",
      b: {
        x: 1066,
        y: 1514
      }
    }, {
      a: "L1_Terrain054.PNG",
      b: {
        x: 1066,
        y: 1458
      }
    }, {
      a: "L2_Altar04.PNG",
      b: {
        x: 1066,
        y: 1402
      }
    }, {
      a: "L2_Altar05.PNG",
      b: {
        x: 1066,
        y: 1346
      }
    }, {
      a: "L2_Altar06.PNG",
      b: {
        x: 1066,
        y: 1290
      }
    }, {
      a: "L2_AltarEvil.PNG",
      b: {
        x: 1066,
        y: 1234
      }
    }, {
      a: "L2_AltarGood.PNG",
      b: {
        x: 1066,
        y: 1178
      }
    }, {
      a: "L2_AltarNeutral.PNG",
      b: {
        x: 1066,
        y: 1122
      }
    }, {
      a: "L2_AppleTree.PNG",
      b: {
        x: 1066,
        y: 1066
      }
    }, {
      a: "L2_BarNS1.PNG",
      b: {
        x: 1066,
        y: 1010
      }
    }, {
      a: "L2_BarNS2.PNG",
      b: {
        x: 1066,
        y: 954
      }
    }, {
      a: "L2_BarNS3.PNG",
      b: {
        x: 1906,
        y: 898
      }
    }, {
      a: "L2_BarNS4.PNG",
      b: {
        x: 1850,
        y: 898
      }
    }, {
      a: "L2_BarWE1.PNG",
      b: {
        x: 1794,
        y: 898
      }
    }, {
      a: "L2_BarWE2.PNG",
      b: {
        x: 1738,
        y: 898
      }
    }, {
      a: "L2_BarWE3.PNG",
      b: {
        x: 1682,
        y: 898
      }
    }, {
      a: "L2_BarWE4.PNG",
      b: {
        x: 1626,
        y: 898
      }
    }, {
      a: "L2_Bed01ea.PNG",
      b: {
        x: 1570,
        y: 898
      }
    }, {
      a: "L2_Bed01eb.PNG",
      b: {
        x: 1514,
        y: 898
      }
    }, {
      a: "L2_Bed01na.PNG",
      b: {
        x: 1458,
        y: 898
      }
    },
    {
      a: "L2_Bed01nb.PNG",
      b: {
        x: 1402,
        y: 898
      }
    }, {
      a: "L2_Bed02ea.PNG",
      b: {
        x: 1346,
        y: 898
      }
    }, {
      a: "L2_Bed02eb.PNG",
      b: {
        x: 1290,
        y: 898
      }
    }, {
      a: "L2_Bed02na.PNG",
      b: {
        x: 1234,
        y: 898
      }
    }, {
      a: "L2_Bed02nb.PNG",
      b: {
        x: 1178,
        y: 898
      }
    }, {
      a: "L2_Bed03ea.PNG",
      b: {
        x: 1122,
        y: 898
      }
    }, {
      a: "L2_Bed03eb.PNG",
      b: {
        x: 1066,
        y: 898
      }
    }, {
      a: "L2_Bed03na.PNG",
      b: {
        x: 1010,
        y: 1794
      }
    }, {
      a: "L2_Bed03nb.PNG",
      b: {
        x: 1010,
        y: 1738
      }
    }, {
      a: "L2_Bed04ea.PNG",
      b: {
        x: 1010,
        y: 1682
      }
    }, {
      a: "L2_Bed04eb.PNG",
      b: {
        x: 1010,
        y: 1626
      }
    }, {
      a: "L2_Bed04na.PNG",
      b: {
        x: 1010,
        y: 1570
      }
    }, {
      a: "L2_Bed04nb.PNG",
      b: {
        x: 1010,
        y: 1514
      }
    }, {
      a: "L2_Berrybush.PNG",
      b: {
        x: 1010,
        y: 1458
      }
    }, {
      a: "L2_Boat01.PNG",
      b: {
        x: 1010,
        y: 1402
      }
    }, {
      a: "L2_Boat02.PNG",
      b: {
        x: 1010,
        y: 1346
      }
    }, {
      a: "L2_BridgeSnowNSin.PNG",
      b: {
        x: 1010,
        y: 1290
      }
    }, {
      a: "L2_BridgeSnowNSinEndN.PNG",
      b: {
        x: 1010,
        y: 1234
      }
    }, {
      a: "L2_BridgeSnowNSinEndS.PNG",
      b: {
        x: 1010,
        y: 1178
      }
    }, {
      a: "L2_BridgeSnowNSout.PNG",
      b: {
        x: 1010,
        y: 1122
      }
    }, {
      a: "L2_BridgeSnowNSoutEndN.PNG",
      b: {
        x: 1010,
        y: 1066
      }
    }, {
      a: "L2_BridgeSnowNSoutEndS.PNG",
      b: {
        x: 1010,
        y: 1010
      }
    }, {
      a: "L2_BridgeSnowWEin.PNG",
      b: {
        x: 1010,
        y: 954
      }
    }, {
      a: "L2_BridgeSnowWEinEndE.PNG",
      b: {
        x: 1010,
        y: 898
      }
    }, {
      a: "L2_BridgeSnowWEinEndW.PNG",
      b: {
        x: 1906,
        y: 842
      }
    }, {
      a: "L2_BridgeSnowWEout.PNG",
      b: {
        x: 1850,
        y: 842
      }
    }, {
      a: "L2_BridgeSnowWEoutEndE.PNG",
      b: {
        x: 1794,
        y: 842
      }
    }, {
      a: "L2_BridgeSnowWEoutEndW.PNG",
      b: {
        x: 1738,
        y: 842
      }
    }, {
      a: "L2_BridgeStoneNSinEndN.PNG",
      b: {
        x: 1682,
        y: 842
      }
    }, {
      a: "L2_BridgeStoneNSinEndS.PNG",
      b: {
        x: 1626,
        y: 842
      }
    }, {
      a: "L2_BridgeStoneNSout.PNG",
      b: {
        x: 1570,
        y: 842
      }
    }, {
      a: "L2_BridgeStoneNSoutEndN.PNG",
      b: {
        x: 1514,
        y: 842
      }
    }, {
      a: "L2_BridgeStoneNSoutEndS.PNG",
      b: {
        x: 1458,
        y: 842
      }
    }, {
      a: "L2_BridgeStoneWEinEndE.PNG",
      b: {
        x: 1402,
        y: 842
      }
    }, {
      a: "L2_BridgeStoneWEinEndW.PNG",
      b: {
        x: 1346,
        y: 842
      }
    }, {
      a: "L2_BridgeStoneWEout.PNG",
      b: {
        x: 1290,
        y: 842
      }
    }, {
      a: "L2_BridgeStoneWEoutEndE.PNG",
      b: {
        x: 1234,
        y: 842
      }
    }, {
      a: "L2_BridgeStoneWEoutEndW.PNG",
      b: {
        x: 1178,
        y: 842
      }
    }, {
      a: "L2_BridgeWoodNSinEndN.PNG",
      b: {
        x: 1122,
        y: 842
      }
    }, {
      a: "L2_BridgeWoodNSinEndS.PNG",
      b: {
        x: 1066,
        y: 842
      }
    }, {
      a: "L2_BridgeWoodNSout.PNG",
      b: {
        x: 1010,
        y: 842
      }
    }, {
      a: "L2_BridgeWoodNSoutEndN.PNG",
      b: {
        x: 954,
        y: 1794
      }
    }, {
      a: "L2_BridgeWoodNSoutEndS.PNG",
      b: {
        x: 954,
        y: 1738
      }
    }, {
      a: "L2_BridgeWoodWEinEndE.PNG",
      b: {
        x: 954,
        y: 1682
      }
    }, {
      a: "L2_BridgeWoodWEinEndW.PNG",
      b: {
        x: 954,
        y: 1626
      }
    }, {
      a: "L2_BridgeWoodWEout.PNG",
      b: {
        x: 954,
        y: 1570
      }
    }, {
      a: "L2_BridgeWoodWEoutEndE.PNG",
      b: {
        x: 954,
        y: 1514
      }
    }, {
      a: "L2_BridgeWoodWEoutEndW.PNG",
      b: {
        x: 954,
        y: 1458
      }
    }, {
      a: "L2_CabinetE.PNG",
      b: {
        x: 954,
        y: 1402
      }
    }, {
      a: "L2_CabinetN.PNG",
      b: {
        x: 954,
        y: 1346
      }
    }, {
      a: "L2_CarpetNS1.PNG",
      b: {
        x: 954,
        y: 1290
      }
    }, {
      a: "L2_CarpetWE1.PNG",
      b: {
        x: 954,
        y: 1234
      }
    }, {
      a: "L2_Chest01.PNG",
      b: {
        x: 954,
        y: 1178
      }
    }, {
      a: "L2_Chest02.PNG",
      b: {
        x: 954,
        y: 1122
      }
    }, {
      a: "L2_Chest03.PNG",
      b: {
        x: 954,
        y: 1066
      }
    }, {
      a: "L2_Chest04.PNG",
      b: {
        x: 954,
        y: 1010
      }
    }, {
      a: "L2_Chest05.PNG",
      b: {
        x: 954,
        y: 954
      }
    }, {
      a: "L2_Chest06.PNG",
      b: {
        x: 954,
        y: 898
      }
    },
    {
      a: "L2_Chest07.PNG",
      b: {
        x: 954,
        y: 842
      }
    }, {
      a: "L2_Chest08.PNG",
      b: {
        x: 1906,
        y: 786
      }
    }, {
      a: "L2_Chest09.PNG",
      b: {
        x: 1850,
        y: 786
      }
    }, {
      a: "L2_Chest10.PNG",
      b: {
        x: 1794,
        y: 786
      }
    }, {
      a: "L2_Chest11.PNG",
      b: {
        x: 1738,
        y: 786
      }
    }, {
      a: "L2_Chest12.PNG",
      b: {
        x: 1682,
        y: 786
      }
    }, {
      a: "L2_Chest13.PNG",
      b: {
        x: 1626,
        y: 786
      }
    }, {
      a: "L2_Chest14.PNG",
      b: {
        x: 1570,
        y: 786
      }
    }, {
      a: "L2_Chest15.PNG",
      b: {
        x: 1514,
        y: 786
      }
    }, {
      a: "L2_Chest16.PNG",
      b: {
        x: 1458,
        y: 786
      }
    }, {
      a: "L2_ChestLargeSteel.PNG",
      b: {
        x: 1402,
        y: 786
      }
    }, {
      a: "L2_ChestLargeWooden.PNG",
      b: {
        x: 1346,
        y: 786
      }
    }, {
      a: "L2_ChestSmallSteel.PNG",
      b: {
        x: 1290,
        y: 786
      }
    }, {
      a: "L2_ChestSmallWooden.PNG",
      b: {
        x: 1234,
        y: 786
      }
    }, {
      a: "L2_ChestSquareLargeSteel.PNG",
      b: {
        x: 1178,
        y: 786
      }
    }, {
      a: "L2_ChestSquareSmallSteel.PNG",
      b: {
        x: 1122,
        y: 786
      }
    }, {
      a: "L2_ChestTinyc1.PNG",
      b: {
        x: 1066,
        y: 786
      }
    }, {
      a: "L2_ChestTinyc2.PNG",
      b: {
        x: 1010,
        y: 786
      }
    }, {
      a: "L2_ChestTinyc3.PNG",
      b: {
        x: 954,
        y: 786
      }
    }, {
      a: "L2_ChestTinyc4.PNG",
      b: {
        x: 898,
        y: 1794
      }
    }, {
      a: "L2_ChestTinyc5.PNG",
      b: {
        x: 898,
        y: 1738
      }
    }, {
      a: "L2_ChestTinyc6.PNG",
      b: {
        x: 898,
        y: 1682
      }
    }, {
      a: "L2_ChestTinyc7.PNG",
      b: {
        x: 898,
        y: 1626
      }
    }, {
      a: "L2_ChestTinyc8.PNG",
      b: {
        x: 898,
        y: 1570
      }
    }, {
      a: "L2_ChestWoodenDestroyed.PNG",
      b: {
        x: 898,
        y: 1514
      }
    }, {
      a: "L2_Church01.PNG",
      b: {
        x: 898,
        y: 1458
      }
    }, {
      a: "L2_Church02.PNG",
      b: {
        x: 898,
        y: 1402
      }
    }, {
      a: "L2_Church03.PNG",
      b: {
        x: 898,
        y: 1346
      }
    }, {
      a: "L2_Church04.PNG",
      b: {
        x: 898,
        y: 1290
      }
    }, {
      a: "L2_Church05.PNG",
      b: {
        x: 898,
        y: 1234
      }
    }, {
      a: "L2_Church06.PNG",
      b: {
        x: 898,
        y: 1178
      }
    }, {
      a: "L2_CliffLowP01.PNG",
      b: {
        x: 898,
        y: 1122
      }
    }, {
      a: "L2_CliffLowP02.PNG",
      b: {
        x: 898,
        y: 1066
      }
    }, {
      a: "L2_CliffLowP03.PNG",
      b: {
        x: 898,
        y: 1010
      }
    }, {
      a: "L2_CliffLowP04.PNG",
      b: {
        x: 898,
        y: 954
      }
    }, {
      a: "L2_CliffLowP05.PNG",
      b: {
        x: 898,
        y: 898
      }
    }, {
      a: "L2_CliffLowP06.PNG",
      b: {
        x: 898,
        y: 842
      }
    },
    {
      a: "L2_CliffLowP07.PNG",
      b: {
        x: 898,
        y: 786
      }
    }, {
      a: "L2_CliffLowP09.PNG",
      b: {
        x: 1906,
        y: 730
      }
    }, {
      a: "L2_CliffLowP10.PNG",
      b: {
        x: 1850,
        y: 730
      }
    }, {
      a: "L2_CliffLowP11.PNG",
      b: {
        x: 1794,
        y: 730
      }
    }, {
      a: "L2_CliffLowP12.PNG",
      b: {
        x: 1738,
        y: 730
      }
    }, {
      a: "L2_CliffLowSlopeE1.PNG",
      b: {
        x: 1682,
        y: 730
      }
    }, {
      a: "L2_CliffLowSlopeE2.PNG",
      b: {
        x: 1626,
        y: 730
      }
    }, {
      a: "L2_CliffLowSlopeN1.PNG",
      b: {
        x: 1570,
        y: 730
      }
    }, {
      a: "L2_CliffLowSlopeN2.PNG",
      b: {
        x: 1514,
        y: 730
      }
    }, {
      a: "L2_CliffLowSlopeS1.PNG",
      b: {
        x: 1458,
        y: 730
      }
    }, {
      a: "L2_CliffLowSlopeS2.PNG",
      b: {
        x: 1402,
        y: 730
      }
    }, {
      a: "L2_CliffLowSlopeW1.PNG",
      b: {
        x: 1346,
        y: 730
      }
    }, {
      a: "L2_CliffLowSlopeW2.PNG",
      b: {
        x: 1290,
        y: 730
      }
    }, {
      a: "L2_CliffLowrP08.PNG",
      b: {
        x: 1234,
        y: 730
      }
    }, {
      a: "L2_CliffMidP01.PNG",
      b: {
        x: 1178,
        y: 730
      }
    }, {
      a: "L2_CliffMidP02.PNG",
      b: {
        x: 1122,
        y: 730
      }
    }, {
      a: "L2_CliffMidP03.PNG",
      b: {
        x: 1066,
        y: 730
      }
    }, {
      a: "L2_CliffMidP04.PNG",
      b: {
        x: 1010,
        y: 730
      }
    }, {
      a: "L2_CliffMidP05.PNG",
      b: {
        x: 954,
        y: 730
      }
    }, {
      a: "L2_CliffMidP06.PNG",
      b: {
        x: 898,
        y: 730
      }
    }, {
      a: "L2_CliffMidP07.PNG",
      b: {
        x: 842,
        y: 1794
      }
    }, {
      a: "L2_CliffMidP08.PNG",
      b: {
        x: 842,
        y: 1738
      }
    }, {
      a: "L2_CliffMidP09.PNG",
      b: {
        x: 842,
        y: 1682
      }
    }, {
      a: "L2_CliffMidP10.PNG",
      b: {
        x: 842,
        y: 1626
      }
    }, {
      a: "L2_CliffMidP11.PNG",
      b: {
        x: 842,
        y: 1570
      }
    }, {
      a: "L2_CliffMidP12.PNG",
      b: {
        x: 842,
        y: 1514
      }
    }, {
      a: "L2_CliffMidSlopeE1.PNG",
      b: {
        x: 842,
        y: 1458
      }
    }, {
      a: "L2_CliffMidSlopeE2.PNG",
      b: {
        x: 842,
        y: 1402
      }
    }, {
      a: "L2_CliffMidSlopeN1.PNG",
      b: {
        x: 842,
        y: 1346
      }
    }, {
      a: "L2_CliffMidSlopeN2.PNG",
      b: {
        x: 842,
        y: 1290
      }
    }, {
      a: "L2_CliffMidSlopeS1.PNG",
      b: {
        x: 842,
        y: 1234
      }
    }, {
      a: "L2_CliffMidSlopeS2.PNG",
      b: {
        x: 842,
        y: 1178
      }
    }, {
      a: "L2_CliffMidSlopeW1.PNG",
      b: {
        x: 842,
        y: 1122
      }
    }, {
      a: "L2_CliffMidSlopeW2.PNG",
      b: {
        x: 842,
        y: 1066
      }
    }, {
      a: "L2_CliffSnowP01.PNG",
      b: {
        x: 842,
        y: 1010
      }
    }, {
      a: "L2_CliffSnowP02.PNG",
      b: {
        x: 842,
        y: 954
      }
    }, {
      a: "L2_CliffSnowP03.PNG",
      b: {
        x: 842,
        y: 898
      }
    }, {
      a: "L2_CliffSnowP04.PNG",
      b: {
        x: 842,
        y: 842
      }
    }, {
      a: "L2_CliffSnowP05.PNG",
      b: {
        x: 842,
        y: 786
      }
    }, {
      a: "L2_CliffSnowP06.PNG",
      b: {
        x: 842,
        y: 730
      }
    }, {
      a: "L2_CliffSnowP07.PNG",
      b: {
        x: 1906,
        y: 674
      }
    }, {
      a: "L2_CliffSnowP08.PNG",
      b: {
        x: 1850,
        y: 674
      }
    }, {
      a: "L2_CliffSnowP09.PNG",
      b: {
        x: 1794,
        y: 674
      }
    }, {
      a: "L2_CliffSnowP10.PNG",
      b: {
        x: 1738,
        y: 674
      }
    }, {
      a: "L2_CliffSnowP11.PNG",
      b: {
        x: 1682,
        y: 674
      }
    }, {
      a: "L2_CliffSnowP12.PNG",
      b: {
        x: 1626,
        y: 674
      }
    }, {
      a: "L2_CliffSnowSlopeE1.PNG",
      b: {
        x: 1570,
        y: 674
      }
    }, {
      a: "L2_CliffSnowSlopeE2.PNG",
      b: {
        x: 1514,
        y: 674
      }
    }, {
      a: "L2_CliffSnowSlopeN1.PNG",
      b: {
        x: 1458,
        y: 674
      }
    }, {
      a: "L2_CliffSnowSlopeN2.PNG",
      b: {
        x: 1402,
        y: 674
      }
    }, {
      a: "L2_CliffSnowSlopeS1.PNG",
      b: {
        x: 1346,
        y: 674
      }
    }, {
      a: "L2_CliffSnowSlopeS2.PNG",
      b: {
        x: 1290,
        y: 674
      }
    }, {
      a: "L2_CliffSnowSlopeW1.PNG",
      b: {
        x: 1234,
        y: 674
      }
    }, {
      a: "L2_CliffSnowSlopeW2.PNG",
      b: {
        x: 1178,
        y: 674
      }
    }, {
      a: "L2_CliffUpP01.PNG",
      b: {
        x: 1122,
        y: 674
      }
    }, {
      a: "L2_CliffUpP02.PNG",
      b: {
        x: 1066,
        y: 674
      }
    }, {
      a: "L2_CliffUpP03.PNG",
      b: {
        x: 1010,
        y: 674
      }
    }, {
      a: "L2_CliffUpP04.PNG",
      b: {
        x: 954,
        y: 674
      }
    }, {
      a: "L2_CliffUpP05.PNG",
      b: {
        x: 898,
        y: 674
      }
    }, {
      a: "L2_CliffUpP06.PNG",
      b: {
        x: 842,
        y: 674
      }
    }, {
      a: "L2_CliffUpP07.PNG",
      b: {
        x: 786,
        y: 1794
      }
    }, {
      a: "L2_CliffUpP08.PNG",
      b: {
        x: 786,
        y: 1738
      }
    }, {
      a: "L2_CliffUpP09.PNG",
      b: {
        x: 786,
        y: 1682
      }
    }, {
      a: "L2_CliffUpP10.PNG",
      b: {
        x: 786,
        y: 1626
      }
    }, {
      a: "L2_CliffUpP11.PNG",
      b: {
        x: 786,
        y: 1570
      }
    }, {
      a: "L2_CliffUpP12.PNG",
      b: {
        x: 786,
        y: 1514
      }
    }, {
      a: "L2_CliffUpSlopeE1.PNG",
      b: {
        x: 786,
        y: 1458
      }
    }, {
      a: "L2_CliffUpSlopeE2.PNG",
      b: {
        x: 786,
        y: 1402
      }
    }, {
      a: "L2_CliffUpSlopeN1.PNG",
      b: {
        x: 786,
        y: 1346
      }
    }, {
      a: "L2_CliffUpSlopeN2.PNG",
      b: {
        x: 786,
        y: 1290
      }
    }, {
      a: "L2_CliffUpSlopeS1.PNG",
      b: {
        x: 786,
        y: 1234
      }
    }, {
      a: "L2_CliffUpSlopeS2.PNG",
      b: {
        x: 786,
        y: 1178
      }
    }, {
      a: "L2_CliffUpSlopeW1.PNG",
      b: {
        x: 786,
        y: 1122
      }
    }, {
      a: "L2_CliffUpSlopeW2.PNG",
      b: {
        x: 786,
        y: 1066
      }
    }, {
      a: "L2_CoffinStone.PNG",
      b: {
        x: 786,
        y: 1010
      }
    }, {
      a: "L2_CoffinWood.PNG",
      b: {
        x: 786,
        y: 954
      }
    }, {
      a: "L2_Column01.PNG",
      b: {
        x: 786,
        y: 898
      }
    }, {
      a: "L2_Column02.PNG",
      b: {
        x: 786,
        y: 842
      }
    }, {
      a: "L2_Column03.PNG",
      b: {
        x: 786,
        y: 786
      }
    }, {
      a: "L2_CoralFenceES.PNG",
      b: {
        x: 786,
        y: 730
      }
    }, {
      a: "L2_CoralFenceEW.PNG",
      b: {
        x: 786,
        y: 674
      }
    }, {
      a: "L2_CoralFenceEWDoorClosed.PNG",
      b: {
        x: 1906,
        y: 618
      }
    }, {
      a: "L2_CoralFenceEWDoorOpen.PNG",
      b: {
        x: 1850,
        y: 618
      }
    }, {
      a: "L2_CoralFenceNE.PNG",
      b: {
        x: 1794,
        y: 618
      }
    }, {
      a: "L2_CoralFenceNS.PNG",
      b: {
        x: 1738,
        y: 618
      }
    }, {
      a: "L2_CoralFenceNSDoorClosed.PNG",
      b: {
        x: 1682,
        y: 618
      }
    }, {
      a: "L2_CoralFenceNSDoorOpen.PNG",
      b: {
        x: 1626,
        y: 618
      }
    }, {
      a: "L2_CoralFenceNW.PNG",
      b: {
        x: 1570,
        y: 618
      }
    }, {
      a: "L2_CoralFenceSW.PNG",
      b: {
        x: 1514,
        y: 618
      }
    }, {
      a: "L2_Crypt.PNG",
      b: {
        x: 1458,
        y: 618
      }
    }, {
      a: "L2_DarkStoneDamagedStairsDownNS.PNG",
      b: {
        x: 1402,
        y: 618
      }
    }, {
      a: "L2_DarkStoneDamagedStairsUpNS.PNG",
      b: {
        x: 1346,
        y: 618
      }
    }, {
      a: "L2_DarkStoneStairsDownEW.PNG",
      b: {
        x: 1290,
        y: 618
      }
    }, {
      a: "L2_DarkStoneStairsDownNS.PNG",
      b: {
        x: 1234,
        y: 618
      }
    }, {
      a: "L2_DarkStoneStairsUpEW.PNG",
      b: {
        x: 1178,
        y: 618
      }
    }, {
      a: "L2_DarkStoneStairsUpNS.PNG",
      b: {
        x: 1122,
        y: 618
      }
    }, {
      a: "L2_Door001.PNG",
      b: {
        x: 1066,
        y: 618
      }
    }, {
      a: "L2_Door002.PNG",
      b: {
        x: 1010,
        y: 618
      }
    }, {
      a: "L2_Door003.PNG",
      b: {
        x: 954,
        y: 618
      }
    }, {
      a: "L2_Door004.PNG",
      b: {
        x: 898,
        y: 618
      }
    }, {
      a: "L2_Door005.PNG",
      b: {
        x: 842,
        y: 618
      }
    }, {
      a: "L2_Door006.PNG",
      b: {
        x: 786,
        y: 618
      }
    }, {
      a: "L2_Door007.PNG",
      b: {
        x: 730,
        y: 1794
      }
    }, {
      a: "L2_Door008.PNG",
      b: {
        x: 730,
        y: 1738
      }
    }, {
      a: "L2_Door021.PNG",
      b: {
        x: 730,
        y: 1682
      }
    },
    {
      a: "L2_Door022.PNG",
      b: {
        x: 730,
        y: 1626
      }
    }, {
      a: "L2_Door023.PNG",
      b: {
        x: 730,
        y: 1570
      }
    }, {
      a: "L2_Door024.PNG",
      b: {
        x: 730,
        y: 1514
      }
    }, {
      a: "L2_Door025.PNG",
      b: {
        x: 730,
        y: 1458
      }
    }, {
      a: "L2_Door026.PNG",
      b: {
        x: 730,
        y: 1402
      }
    }, {
      a: "L2_Door027.PNG",
      b: {
        x: 730,
        y: 1346
      }
    }, {
      a: "L2_Door028.PNG",
      b: {
        x: 730,
        y: 1290
      }
    }, {
      a: "L2_Door029.PNG",
      b: {
        x: 730,
        y: 1234
      }
    }, {
      a: "L2_Door030.PNG",
      b: {
        x: 730,
        y: 1178
      }
    }, {
      a: "L2_Door031.PNG",
      b: {
        x: 730,
        y: 1122
      }
    }, {
      a: "L2_Door032.PNG",
      b: {
        x: 730,
        y: 1066
      }
    }, {
      a: "L2_DoorBoneClosedEW.PNG",
      b: {
        x: 730,
        y: 1010
      }
    }, {
      a: "L2_DoorBoneClosedNS.PNG",
      b: {
        x: 730,
        y: 954
      }
    }, {
      a: "L2_DoorBoneDamagedEW.PNG",
      b: {
        x: 730,
        y: 898
      }
    }, {
      a: "L2_DoorBoneDamagedNS.PNG",
      b: {
        x: 730,
        y: 842
      }
    }, {
      a: "L2_DoorBoneOpenEW.PNG",
      b: {
        x: 730,
        y: 786
      }
    }, {
      a: "L2_DoorBoneOpenNS.PNG",
      b: {
        x: 730,
        y: 730
      }
    }, {
      a: "L2_DoorClosedEW.PNG",
      b: {
        x: 730,
        y: 674
      }
    }, {
      a: "L2_DoorClosedNS.PNG",
      b: {
        x: 730,
        y: 618
      }
    }, {
      a: "L2_DoorDarkStoneClosedEW.PNG",
      b: {
        x: 1906,
        y: 562
      }
    }, {
      a: "L2_DoorDarkStoneClosedNS.PNG",
      b: {
        x: 1850,
        y: 562
      }
    }, {
      a: "L2_DoorDarkStoneDamagedEW.PNG",
      b: {
        x: 1794,
        y: 562
      }
    }, {
      a: "L2_DoorDarkStoneDamagedNS.PNG",
      b: {
        x: 1738,
        y: 562
      }
    }, {
      a: "L2_DoorDarkStoneOpenEW.PNG",
      b: {
        x: 1682,
        y: 562
      }
    }, {
      a: "L2_DoorDarkStoneOpenNS.PNG",
      b: {
        x: 1626,
        y: 562
      }
    }, {
      a: "L2_DoorHutBrokenEW.PNG",
      b: {
        x: 1570,
        y: 562
      }
    }, {
      a: "L2_DoorHutBrokenNS.PNG",
      b: {
        x: 1514,
        y: 562
      }
    }, {
      a: "L2_DoorHutClosedEW.PNG",
      b: {
        x: 1458,
        y: 562
      }
    }, {
      a: "L2_DoorHutClosedNS.PNG",
      b: {
        x: 1402,
        y: 562
      }
    }, {
      a: "L2_DoorHutOpenEW.PNG",
      b: {
        x: 1346,
        y: 562
      }
    }, {
      a: "L2_DoorHutOpenNS.PNG",
      b: {
        x: 1290,
        y: 562
      }
    }, {
      a: "L2_DoorIceBrokenEW.PNG",
      b: {
        x: 1234,
        y: 562
      }
    }, {
      a: "L2_DoorIceBrokenNS.PNG",
      b: {
        x: 1178,
        y: 562
      }
    }, {
      a: "L2_DoorIceClosedEW.PNG",
      b: {
        x: 1122,
        y: 562
      }
    }, {
      a: "L2_DoorIceClosedNS.PNG",
      b: {
        x: 1066,
        y: 562
      }
    }, {
      a: "L2_DoorIceOpenEW.PNG",
      b: {
        x: 1010,
        y: 562
      }
    }, {
      a: "L2_DoorIceOpenNS.PNG",
      b: {
        x: 954,
        y: 562
      }
    }, {
      a: "L2_DoorIronClosedEW.PNG",
      b: {
        x: 898,
        y: 562
      }
    }, {
      a: "L2_DoorIronClosedNS.PNG",
      b: {
        x: 842,
        y: 562
      }
    }, {
      a: "L2_DoorIronOpenEW.PNG",
      b: {
        x: 786,
        y: 562
      }
    }, {
      a: "L2_DoorIronOpenNS.PNG",
      b: {
        x: 730,
        y: 562
      }
    }, {
      a: "L2_DoorOpen.PNG",
      b: {
        x: 674,
        y: 1794
      }
    }, {
      a: "L2_DoorOpenEW.PNG",
      b: {
        x: 674,
        y: 1738
      }
    }, {
      a: "L2_DoorOpenNS.PNG",
      b: {
        x: 674,
        y: 1794
      }
    }, {
      a: "L2_DoorSecretDarkStoneOpenEW.PNG",
      b: {
        x: 674,
        y: 1682
      }
    }, {
      a: "L2_DoorSecretDarkStoneOpenNS.PNG",
      b: {
        x: 674,
        y: 1626
      }
    }, {
      a: "L2_DoorSecretOpenEW.PNG",
      b: {
        x: 674,
        y: 1570
      }
    }, {
      a: "L2_DoorSecretOpenNS.PNG",
      b: {
        x: 674,
        y: 1514
      }
    }, {
      a: "L2_DresserE.PNG",
      b: {
        x: 674,
        y: 1458
      }
    }, {
      a: "L2_DresserN.PNG",
      b: {
        x: 674,
        y: 1402
      }
    }, {
      a: "L2_DungeonE.PNG",
      b: {
        x: 674,
        y: 1346
      }
    }, {
      a: "L2_DungeonN.PNG",
      b: {
        x: 674,
        y: 1290
      }
    }, {
      a: "L2_Entrance.PNG",
      b: {
        x: 1122,
        y: 618
      }
    }, {
      a: "L2_Floor_Deco01.PNG",
      b: {
        x: 674,
        y: 1234
      }
    }, {
      a: "L2_Floor_Deco02.PNG",
      b: {
        x: 674,
        y: 1178
      }
    }, {
      a: "L2_Floor_Deco03.PNG",
      b: {
        x: 674,
        y: 1122
      }
    }, {
      a: "L2_ForestCanopy01.PNG",
      b: {
        x: 674,
        y: 1066
      }
    }, {
      a: "L2_ForestCanopy02.PNG",
      b: {
        x: 674,
        y: 1066
      }
    }, {
      a: "L2_ForestCanopy03.PNG",
      b: {
        x: 674,
        y: 1010
      }
    }, {
      a: "L2_ForestJungle01.PNG",
      b: {
        x: 674,
        y: 954
      }
    }, {
      a: "L2_ForestJungle02.PNG",
      b: {
        x: 674,
        y: 898
      }
    }, {
      a: "L2_ForestMaple01.PNG",
      b: {
        x: 674,
        y: 842
      }
    }, {
      a: "L2_ForestMaple02.PNG",
      b: {
        x: 674,
        y: 786
      }
    }, {
      a: "L2_ForestMaple03.PNG",
      b: {
        x: 674,
        y: 730
      }
    }, {
      a: "L2_ForestMaple04.PNG",
      b: {
        x: 674,
        y: 674
      }
    }, {
      a: "L2_ForestMaple05.PNG",
      b: {
        x: 674,
        y: 618
      }
    }, {
      a: "L2_ForestMaple06.PNG",
      b: {
        x: 674,
        y: 562
      }
    }, {
      a: "L2_ForestMaple07.PNG",
      b: {
        x: 1906,
        y: 506
      }
    }, {
      a: "L2_ForestMixed01.PNG",
      b: {
        x: 1850,
        y: 506
      }
    }, {
      a: "L2_ForestMixed02.PNG",
      b: {
        x: 1794,
        y: 506
      }
    }, {
      a: "L2_ForestMixed03.PNG",
      b: {
        x: 1738,
        y: 506
      }
    }, {
      a: "L2_ForestMixed04.PNG",
      b: {
        x: 1682,
        y: 506
      }
    }, {
      a: "L2_ForestMixed05.PNG",
      b: {
        x: 1626,
        y: 506
      }
    }, {
      a: "L2_ForestPine01.PNG",
      b: {
        x: 1570,
        y: 506
      }
    }, {
      a: "L2_ForestPine02.PNG",
      b: {
        x: 1514,
        y: 506
      }
    }, {
      a: "L2_ForestPine03.PNG",
      b: {
        x: 1458,
        y: 506
      }
    }, {
      a: "L2_ForestPine04.PNG",
      b: {
        x: 1402,
        y: 506
      }
    }, {
      a: "L2_ForestPine05.PNG",
      b: {
        x: 1346,
        y: 506
      }
    }, {
      a: "L2_ForestPine06.PNG",
      b: {
        x: 1290,
        y: 506
      }
    }, {
      a: "L2_ForestPine07.PNG",
      b: {
        x: 1234,
        y: 506
      }
    }, {
      a: "L2_ForestPine08.PNG",
      b: {
        x: 1178,
        y: 506
      }
    }, {
      a: "L2_ForestPine09.PNG",
      b: {
        x: 1122,
        y: 506
      }
    }, {
      a: "L2_ForestWillow01.PNG",
      b: {
        x: 1066,
        y: 506
      }
    }, {
      a: "L2_ForestWillow02.PNG",
      b: {
        x: 1010,
        y: 506
      }
    }, {
      a: "L2_ForestWillow03.PNG",
      b: {
        x: 954,
        y: 506
      }
    }, {
      a: "L2_ForestWillow04.PNG",
      b: {
        x: 1066,
        y: 506
      }
    }, {
      a: "L2_ForestWillow05.PNG",
      b: {
        x: 1010,
        y: 506
      }
    }, {
      a: "L2_ForestWillow06.PNG",
      b: {
        x: 954,
        y: 506
      }
    }, {
      a: "L2_Fountain01.PNG",
      b: {
        x: 898,
        y: 506
      }
    }, {
      a: "L2_Grainery.PNG",
      b: {
        x: 842,
        y: 506
      }
    }, {
      a: "L2_GrassJungle.PNG",
      b: {
        x: 1626,
        y: 1626
      }
    }, {
      a: "L2_IceFloorDeco1.PNG",
      b: {
        x: 786,
        y: 506
      }
    }, {
      a: "L2_IceFloorDeco2.PNG",
      b: {
        x: 730,
        y: 506
      }
    }, {
      a: "L2_IceFloorDeco3.PNG",
      b: {
        x: 674,
        y: 506
      }
    }, {
      a: "L2_IronFenceEW.PNG",
      b: {
        x: 618,
        y: 1794
      }
    }, {
      a: "L2_IronFenceEWDoorClosed.PNG",
      b: {
        x: 618,
        y: 1738
      }
    }, {
      a: "L2_IronFenceEWDoorOpen.PNG",
      b: {
        x: 618,
        y: 1682
      }
    }, {
      a: "L2_IronFenceEWDoorway.PNG",
      b: {
        x: 618,
        y: 1626
      }
    }, {
      a: "L2_IronFenceNE.PNG",
      b: {
        x: 618,
        y: 1570
      }
    }, {
      a: "L2_IronFenceNS.PNG",
      b: {
        x: 618,
        y: 1514
      }
    }, {
      a: "L2_IronFenceNSDoorClosed.PNG",
      b: {
        x: 618,
        y: 1458
      }
    }, {
      a: "L2_IronFenceNSDoorOpen.PNG",
      b: {
        x: 618,
        y: 1402
      }
    }, {
      a: "L2_IronFenceNSDoorway.PNG",
      b: {
        x: 618,
        y: 1346
      }
    }, {
      a: "L2_IronFenceNW.PNG",
      b: {
        x: 618,
        y: 1290
      }
    }, {
      a: "L2_IronFenceSE.PNG",
      b: {
        x: 618,
        y: 1234
      }
    }, {
      a: "L2_IronFenceSW.PNG",
      b: {
        x: 618,
        y: 1178
      }
    }, {
      a: "L2_JungleBig.PNG",
      b: {
        x: 618,
        y: 1122
      }
    }, {
      a: "L2_JungleDense.PNG",
      b: {
        x: 674,
        y: 898
      }
    }, {
      a: "L2_JungleSparse.PNG",
      b: {
        x: 674,
        y: 954
      }
    }, {
      a: "L2_Keg.PNG",
      b: {
        x: 618,
        y: 1066
      }
    }, {
      a: "L2_Labcaul1.PNG",
      b: {
        x: 618,
        y: 1010
      }
    }, {
      a: "L2_Labcaul2.PNG",
      b: {
        x: 618,
        y: 954
      }
    }, {
      a: "L2_Labcaul3.PNG",
      b: {
        x: 618,
        y: 898
      }
    }, {
      a: "L2_Labtab01.PNG",
      b: {
        x: 618,
        y: 842
      }
    }, {
      a: "L2_Labtab02.PNG",
      b: {
        x: 618,
        y: 786
      }
    }, {
      a: "L2_Labtab03.PNG",
      b: {
        x: 618,
        y: 730
      }
    }, {
      a: "L2_Labtab04.PNG",
      b: {
        x: 618,
        y: 674
      }
    }, {
      a: "L2_Labtab05.PNG",
      b: {
        x: 618,
        y: 618
      }
    }, {
      a: "L2_Labtab06.PNG",
      b: {
        x: 618,
        y: 562
      }
    }, {
      a: "L2_Labtab07.PNG",
      b: {
        x: 618,
        y: 506
      }
    }, {
      a: "L2_Labtab08.PNG",
      b: {
        x: 1906,
        y: 450
      }
    }, {
      a: "L2_Labwal01.PNG",
      b: {
        x: 1850,
        y: 450
      }
    }, {
      a: "L2_Labwal02.PNG",
      b: {
        x: 1794,
        y: 450
      }
    }, {
      a: "L2_LadderDown.PNG",
      b: {
        x: 1738,
        y: 450
      }
    }, {
      a: "L2_LampPost.PNG",
      b: {
        x: 1682,
        y: 450
      }
    }, {
      a: "L2_LampPostSign.PNG",
      b: {
        x: 1626,
        y: 450
      }
    }, {
      a: "L2_Mountain.PNG",
      b: {
        x: 1570,
        y: 450
      }
    }, {
      a: "L2_MountainBigEarth01.PNG",
      b: {
        x: 1514,
        y: 450
      }
    }, {
      a: "L2_MountainBigEarth02.PNG",
      b: {
        x: 1458,
        y: 450
      }
    }, {
      a: "L2_MountainBigEarth03.PNG",
      b: {
        x: 1402,
        y: 450
      }
    }, {
      a: "L2_MountainBigEarth04.PNG",
      b: {
        x: 1346,
        y: 450
      }
    }, {
      a: "L2_MountainBigRock01.PNG",
      b: {
        x: 1290,
        y: 450
      }
    }, {
      a: "L2_MountainBigRock02.PNG",
      b: {
        x: 1234,
        y: 450
      }
    }, {
      a: "L2_MountainBigRock03.PNG",
      b: {
        x: 1178,
        y: 450
      }
    }, {
      a: "L2_MountainBigRock04.PNG",
      b: {
        x: 1122,
        y: 450
      }
    }, {
      a: "L2_MountainBigSnow01.PNG",
      b: {
        x: 1066,
        y: 450
      }
    }, {
      a: "L2_MountainBigSnow02.PNG",
      b: {
        x: 1010,
        y: 450
      }
    }, {
      a: "L2_MountainBigSnow03.PNG",
      b: {
        x: 954,
        y: 450
      }
    }, {
      a: "L2_MountainBigSnow04.PNG",
      b: {
        x: 898,
        y: 450
      }
    }, {
      a: "L2_MountainBigVolcano01.PNG",
      b: {
        x: 842,
        y: 450
      }
    }, {
      a: "L2_MountainBigVolcano02.PNG",
      b: {
        x: 786,
        y: 450
      }
    }, {
      a: "L2_MountainBigVolcano03.PNG",
      b: {
        x: 730,
        y: 450
      }
    }, {
      a: "L2_MountainBigVolcano04.PNG",
      b: {
        x: 674,
        y: 450
      }
    }, {
      a: "L2_MountainBigVolcanoActive01.PNG",
      b: {
        x: 618,
        y: 450
      }
    }, {
      a: "L2_MountainBigVolcanoActive02.PNG",
      b: {
        x: 562,
        y: 1794
      }
    }, {
      a: "L2_MountainBigVolcanoActive03.PNG",
      b: {
        x: 562,
        y: 1738
      }
    }, {
      a: "L2_MountainBigVolcanoActive04.PNG",
      b: {
        x: 674,
        y: 450
      }
    }, {
      a: "L2_MountainBigVolcanoErupt01.PNG",
      b: {
        x: 562,
        y: 1682
      }
    }, {
      a: "L2_MountainBigVolcanoErupt02.PNG",
      b: {
        x: 562,
        y: 1794
      }
    }, {
      a: "L2_MountainBigVolcanoErupt03.PNG",
      b: {
        x: 562,
        y: 1626
      }
    }, {
      a: "L2_MountainBigVolcanoErupt04.PNG",
      b: {
        x: 562,
        y: 1570
      }
    }, {
      a: "L2_MountainDesert01.PNG",
      b: {
        x: 562,
        y: 1514
      }
    }, {
      a: "L2_MountainDesert02.PNG",
      b: {
        x: 562,
        y: 1458
      }
    }, {
      a: "L2_MountainDesert03.PNG",
      b: {
        x: 562,
        y: 1402
      }
    }, {
      a: "L2_MountainDesert04.PNG",
      b: {
        x: 562,
        y: 1346
      }
    }, {
      a: "L2_MountainDesert05.PNG",
      b: {
        x: 562,
        y: 1290
      }
    }, {
      a: "L2_MountainDesert06.PNG",
      b: {
        x: 562,
        y: 1234
      }
    }, {
      a: "L2_MountainRocky01.PNG",
      b: {
        x: 562,
        y: 1178
      }
    }, {
      a: "L2_MountainRocky02.PNG",
      b: {
        x: 562,
        y: 1122
      }
    }, {
      a: "L2_MountainRocky03.PNG",
      b: {
        x: 562,
        y: 1066
      }
    }, {
      a: "L2_MountainRocky04.PNG",
      b: {
        x: 562,
        y: 1010
      }
    }, {
      a: "L2_MountainRocky05.PNG",
      b: {
        x: 562,
        y: 954
      }
    }, {
      a: "L2_MountainSnowy01.PNG",
      b: {
        x: 562,
        y: 898
      }
    }, {
      a: "L2_MountainSnowy02.PNG",
      b: {
        x: 562,
        y: 842
      }
    }, {
      a: "L2_MountainSnowy03.PNG",
      b: {
        x: 562,
        y: 786
      }
    }, {
      a: "L2_MountainSnowy04.PNG",
      b: {
        x: 562,
        y: 730
      }
    }, {
      a: "L2_Newdec01WE.PNG",
      b: {
        x: 562,
        y: 674
      }
    }, {
      a: "L2_Newdec02NS.PNG",
      b: {
        x: 562,
        y: 618
      }
    }, {
      a: "L2_Newdec03WE.PNG",
      b: {
        x: 562,
        y: 562
      }
    }, {
      a: "L2_Newdec04NS.PNG",
      b: {
        x: 562,
        y: 506
      }
    }, {
      a: "L2_Newdec05NS.PNG",
      b: {
        x: 562,
        y: 450
      }
    }, {
      a: "L2_Newdec06WE.PNG",
      b: {
        x: 1906,
        y: 394
      }
    }, {
      a: "L2_Newdec07WE.PNG",
      b: {
        x: 1850,
        y: 394
      }
    }, {
      a: "L2_Newdec08NS.PNG",
      b: {
        x: 1794,
        y: 394
      }
    }, {
      a: "L2_Newdec09.PNG",
      b: {
        x: 1738,
        y: 394
      }
    }, {
      a: "L2_Newdec10.PNG",
      b: {
        x: 1682,
        y: 394
      }
    }, {
      a: "L2_Newdec11.PNG",
      b: {
        x: 1626,
        y: 394
      }
    }, {
      a: "L2_PitFilledBlue.PNG",
      b: {
        x: 1570,
        y: 394
      }
    }, {
      a: "L2_PitFilledGreen.PNG",
      b: {
        x: 1514,
        y: 394
      }
    }, {
      a: "L2_PitFilledRed.PNG",
      b: {
        x: 1458,
        y: 394
      }
    }, {
      a: "L2_PitFlaming.PNG",
      b: {
        x: 1402,
        y: 394
      }
    }, {
      a: "L2_PitOpen.PNG",
      b: {
        x: 1346,
        y: 394
      }
    }, {
      a: "L2_PitSpikesGolden.PNG",
      b: {
        x: 1290,
        y: 394
      }
    }, {
      a: "L2_PitSpikesGreen.PNG",
      b: {
        x: 1234,
        y: 394
      }
    }, {
      a: "L2_PitSpikesRed.PNG",
      b: {
        x: 1178,
        y: 394
      }
    }, {
      a: "L2_PitSpikesSilver.PNG",
      b: {
        x: 1122,
        y: 394
      }
    }, {
      a: "L2_PitSpikesSilverFlaming.PNG",
      b: {
        x: 1066,
        y: 394
      }
    }, {
      a: "L2_PoolAcid.PNG",
      b: {
        x: 1010,
        y: 394
      }
    }, {
      a: "L2_PoolBlood.PNG",
      b: {
        x: 954,
        y: 394
      }
    }, {
      a: "L2_PoolEmbers.PNG",
      b: {
        x: 898,
        y: 394
      }
    }, {
      a: "L2_PoolFire.PNG",
      b: {
        x: 842,
        y: 394
      }
    }, {
      a: "L2_PoolMirky.PNG",
      b: {
        x: 786,
        y: 394
      }
    }, {
      a: "L2_PoolPoison.PNG",
      b: {
        x: 730,
        y: 394
      }
    }, {
      a: "L2_PoolWater.PNG",
      b: {
        x: 674,
        y: 394
      }
    }, {
      a: "L2_RiverEndE.PNG",
      b: {
        x: 618,
        y: 394
      }
    }, {
      a: "L2_RiverEndN.PNG",
      b: {
        x: 562,
        y: 394
      }
    }, {
      a: "L2_RiverEndS.PNG",
      b: {
        x: 506,
        y: 1794
      }
    },
    {
      a: "L2_RiverEndW.PNG",
      b: {
        x: 506,
        y: 1738
      }
    }, {
      a: "L2_RiverNE.PNG",
      b: {
        x: 506,
        y: 1682
      }
    }, {
      a: "L2_RiverNS.PNG",
      b: {
        x: 506,
        y: 1626
      }
    }, {
      a: "L2_RiverNSE.PNG",
      b: {
        x: 506,
        y: 1570
      }
    }, {
      a: "L2_RiverSE.PNG",
      b: {
        x: 506,
        y: 1514
      }
    }, {
      a: "L2_RiverWE.PNG",
      b: {
        x: 506,
        y: 1458
      }
    }, {
      a: "L2_RiverWN.PNG",
      b: {
        x: 506,
        y: 1402
      }
    }, {
      a: "L2_RiverWNE.PNG",
      b: {
        x: 506,
        y: 1346
      }
    }, {
      a: "L2_RiverWNS.PNG",
      b: {
        x: 506,
        y: 1290
      }
    }, {
      a: "L2_RiverWNSE.PNG",
      b: {
        x: 506,
        y: 1234
      }
    }, {
      a: "L2_RiverWS.PNG",
      b: {
        x: 506,
        y: 1178
      }
    }, {
      a: "L2_RiverWSE.PNG",
      b: {
        x: 506,
        y: 1122
      }
    }, {
      a: "L2_RoadDirtEndE.PNG",
      b: {
        x: 506,
        y: 1066
      }
    },
    {
      a: "L2_RoadDirtEndN.PNG",
      b: {
        x: 506,
        y: 1010
      }
    }, {
      a: "L2_RoadDirtEndS.PNG",
      b: {
        x: 506,
        y: 954
      }
    }, {
      a: "L2_RoadDirtEndW.PNG",
      b: {
        x: 506,
        y: 898
      }
    }, {
      a: "L2_RoadDirtNE.PNG",
      b: {
        x: 506,
        y: 842
      }
    }, {
      a: "L2_RoadDirtNS.PNG",
      b: {
        x: 506,
        y: 786
      }
    }, {
      a: "L2_RoadDirtNSE.PNG",
      b: {
        x: 506,
        y: 730
      }
    }, {
      a: "L2_RoadDirtSE.PNG",
      b: {
        x: 506,
        y: 674
      }
    }, {
      a: "L2_RoadDirtWE.PNG",
      b: {
        x: 506,
        y: 618
      }
    }, {
      a: "L2_RoadDirtWN.PNG",
      b: {
        x: 506,
        y: 562
      }
    }, {
      a: "L2_RoadDirtWNE.PNG",
      b: {
        x: 506,
        y: 506
      }
    }, {
      a: "L2_RoadDirtWNS.PNG",
      b: {
        x: 506,
        y: 450
      }
    }, {
      a: "L2_RoadDirtWNSE.PNG",
      b: {
        x: 506,
        y: 394
      }
    }, {
      a: "L2_RoadDirtWS.PNG",
      b: {
        x: 1906,
        y: 338
      }
    }, {
      a: "L2_RoadDirtWSE.PNG",
      b: {
        x: 1850,
        y: 338
      }
    }, {
      a: "L2_Ruins01.PNG",
      b: {
        x: 1794,
        y: 338
      }
    }, {
      a: "L2_SignPost1.PNG",
      b: {
        x: 1738,
        y: 338
      }
    }, {
      a: "L2_SignPost2.PNG",
      b: {
        x: 1682,
        y: 338
      }
    }, {
      a: "L2_SignPost3.PNG",
      b: {
        x: 1626,
        y: 338
      }
    }, {
      a: "L2_SignRoadHang01.PNG",
      b: {
        x: 1570,
        y: 338
      }
    }, {
      a: "L2_SkeletonBrokenBone.PNG",
      b: {
        x: 1514,
        y: 338
      }
    }, {
      a: "L2_SkeletonDog.PNG",
      b: {
        x: 1458,
        y: 338
      }
    }, {
      a: "L2_SkeletonHumanLarge.PNG",
      b: {
        x: 1402,
        y: 338
      }
    }, {
      a: "L2_SkeletonHumanMedium.PNG",
      b: {
        x: 1346,
        y: 338
      }
    }, {
      a: "L2_SkeletonHumanMedium2.PNG",
      b: {
        x: 1290,
        y: 338
      }
    },
    {
      a: "L2_SkeletonHumanSmall.PNG",
      b: {
        x: 1234,
        y: 338
      }
    }, {
      a: "L2_SkeletonRat.PNG",
      b: {
        x: 1178,
        y: 338
      }
    }, {
      a: "L2_SkeletonSkull.PNG",
      b: {
        x: 1122,
        y: 338
      }
    }, {
      a: "L2_SkullFloorDeco1.PNG",
      b: {
        x: 1066,
        y: 338
      }
    }, {
      a: "L2_SkullFloorDeco2.PNG",
      b: {
        x: 1010,
        y: 338
      }
    }, {
      a: "L2_SkullFloorDeco3.PNG",
      b: {
        x: 954,
        y: 338
      }
    }, {
      a: "L2_StairsBoneDownEW.PNG",
      b: {
        x: 898,
        y: 338
      }
    }, {
      a: "L2_StairsBoneDownNS.PNG",
      b: {
        x: 842,
        y: 338
      }
    }, {
      a: "L2_StairsBoneUpEW.PNG",
      b: {
        x: 786,
        y: 338
      }
    }, {
      a: "L2_StairsBoneUpNS.PNG",
      b: {
        x: 730,
        y: 338
      }
    }, {
      a: "L2_StairsDownEW.PNG",
      b: {
        x: 674,
        y: 338
      }
    }, {
      a: "L2_StairsDownNS.PNG",
      b: {
        x: 618,
        y: 338
      }
    }, {
      a: "L2_StairsHutDownEW.PNG",
      b: {
        x: 562,
        y: 338
      }
    }, {
      a: "L2_StairsHutDownNS.PNG",
      b: {
        x: 506,
        y: 338
      }
    }, {
      a: "L2_StairsHutUpEW.PNG",
      b: {
        x: 450,
        y: 1794
      }
    }, {
      a: "L2_StairsHutUpNS.PNG",
      b: {
        x: 450,
        y: 1738
      }
    }, {
      a: "L2_StairsIceDownEW.PNG",
      b: {
        x: 450,
        y: 1682
      }
    }, {
      a: "L2_StairsIceDownNS.PNG",
      b: {
        x: 450,
        y: 1626
      }
    }, {
      a: "L2_StairsIceUpEW.PNG",
      b: {
        x: 450,
        y: 1570
      }
    }, {
      a: "L2_StairsIceUpNS.PNG",
      b: {
        x: 450,
        y: 1514
      }
    }, {
      a: "L2_StairsIronDownEW.PNG",
      b: {
        x: 450,
        y: 1458
      }
    }, {
      a: "L2_StairsIronDownNS.PNG",
      b: {
        x: 450,
        y: 1402
      }
    }, {
      a: "L2_StairsIronUpEW.PNG",
      b: {
        x: 450,
        y: 1346
      }
    }, {
      a: "L2_StairsIronUpNS.PNG",
      b: {
        x: 450,
        y: 1290
      }
    }, {
      a: "L2_StairsUpEW.PNG",
      b: {
        x: 730,
        y: 1514
      }
    }, {
      a: "L2_StairsUpNS.PNG",
      b: {
        x: 730,
        y: 1570
      }
    }, {
      a: "L2_StalagtiteDirt.PNG",
      b: {
        x: 450,
        y: 1234
      }
    }, {
      a: "L2_StalagtiteStone.PNG",
      b: {
        x: 450,
        y: 1178
      }
    }, {
      a: "L2_Table1.PNG",
      b: {
        x: 450,
        y: 1122
      }
    }, {
      a: "L2_Table2.PNG",
      b: {
        x: 450,
        y: 1066
      }
    }, {
      a: "L2_TableNS1.PNG",
      b: {
        x: 450,
        y: 1010
      }
    }, {
      a: "L2_TableNS2.PNG",
      b: {
        x: 450,
        y: 954
      }
    }, {
      a: "L2_TableNS3.PNG",
      b: {
        x: 450,
        y: 898
      }
    }, {
      a: "L2_TableWE1.PNG",
      b: {
        x: 450,
        y: 842
      }
    }, {
      a: "L2_TableWE2.PNG",
      b: {
        x: 450,
        y: 786
      }
    }, {
      a: "L2_TableWE3.PNG",
      b: {
        x: 450,
        y: 730
      }
    }, {
      a: "L2_Terrain040.PNG",
      b: {
        x: 450,
        y: 674
      }
    }, {
      a: "L2_Terrain041.PNG",
      b: {
        x: 450,
        y: 618
      }
    }, {
      a: "L2_Terrain042.PNG",
      b: {
        x: 1570,
        y: 450
      }
    }, {
      a: "L2_Terrain043.PNG",
      b: {
        x: 450,
        y: 562
      }
    }, {
      a: "L2_Terrain044.PNG",
      b: {
        x: 450,
        y: 506
      }
    }, {
      a: "L2_Terrain045.PNG",
      b: {
        x: 450,
        y: 450
      }
    }, {
      a: "L2_Terrain055.PNG",
      b: {
        x: 450,
        y: 394
      }
    }, {
      a: "L2_Terrain056.PNG",
      b: {
        x: 450,
        y: 338
      }
    }, {
      a: "L2_Terrain057.PNG",
      b: {
        x: 1906,
        y: 282
      }
    }, {
      a: "L2_Terrain058.PNG",
      b: {
        x: 1850,
        y: 282
      }
    }, {
      a: "L2_Terrain059.PNG",
      b: {
        x: 1794,
        y: 282
      }
    }, {
      a: "L2_Terrain060.PNG",
      b: {
        x: 1738,
        y: 282
      }
    },
    {
      a: "L2_Terrain061.PNG",
      b: {
        x: 1682,
        y: 282
      }
    }, {
      a: "L2_Terrain062.PNG",
      b: {
        x: 1626,
        y: 282
      }
    }, {
      a: "L2_Terrain063.PNG",
      b: {
        x: 1570,
        y: 282
      }
    }, {
      a: "L2_Terrain064.PNG",
      b: {
        x: 1514,
        y: 282
      }
    }, {
      a: "L2_Terrain065.PNG",
      b: {
        x: 1458,
        y: 282
      }
    }, {
      a: "L2_Terrain066.PNG",
      b: {
        x: 1402,
        y: 282
      }
    }, {
      a: "L2_Terrain067.PNG",
      b: {
        x: 1346,
        y: 282
      }
    }, {
      a: "L2_Terrain068.PNG",
      b: {
        x: 1290,
        y: 282
      }
    }, {
      a: "L2_Terrain069.PNG",
      b: {
        x: 1234,
        y: 282
      }
    }, {
      a: "L2_Terrain070.PNG",
      b: {
        x: 1178,
        y: 282
      }
    }, {
      a: "L2_Terrain071.PNG",
      b: {
        x: 1122,
        y: 282
      }
    }, {
      a: "L2_Terrain072.PNG",
      b: {
        x: 1066,
        y: 282
      }
    }, {
      a: "L2_Terrain073.PNG",
      b: {
        x: 1010,
        y: 282
      }
    }, {
      a: "L2_Terrain074.PNG",
      b: {
        x: 954,
        y: 282
      }
    }, {
      a: "L2_Terrain075.PNG",
      b: {
        x: 898,
        y: 282
      }
    }, {
      a: "L2_Terrain076.PNG",
      b: {
        x: 842,
        y: 282
      }
    }, {
      a: "L2_Terrain077.PNG",
      b: {
        x: 786,
        y: 282
      }
    }, {
      a: "L2_Terrain078.PNG",
      b: {
        x: 730,
        y: 282
      }
    }, {
      a: "L2_Terrain079.PNG",
      b: {
        x: 674,
        y: 282
      }
    }, {
      a: "L2_Terrain080.PNG",
      b: {
        x: 618,
        y: 282
      }
    }, {
      a: "L2_Terrain081.PNG",
      b: {
        x: 562,
        y: 282
      }
    }, {
      a: "L2_Terrain082.PNG",
      b: {
        x: 506,
        y: 282
      }
    }, {
      a: "L2_Terrain083.PNG",
      b: {
        x: 450,
        y: 282
      }
    }, {
      a: "L2_Terrain084.PNG",
      b: {
        x: 394,
        y: 1794
      }
    }, {
      a: "L2_Terrain085.PNG",
      b: {
        x: 394,
        y: 1738
      }
    }, {
      a: "L2_Terrain086.PNG",
      b: {
        x: 394,
        y: 1682
      }
    }, {
      a: "L2_Terrain087.PNG",
      b: {
        x: 394,
        y: 1626
      }
    }, {
      a: "L2_Terrain088.PNG",
      b: {
        x: 394,
        y: 1570
      }
    }, {
      a: "L2_Terrain089.PNG",
      b: {
        x: 394,
        y: 1514
      }
    }, {
      a: "L2_Terrain090.PNG",
      b: {
        x: 394,
        y: 1458
      }
    }, {
      a: "L2_Terrain091.PNG",
      b: {
        x: 394,
        y: 1402
      }
    }, {
      a: "L2_Terrain092.PNG",
      b: {
        x: 394,
        y: 1346
      }
    }, {
      a: "L2_Terrain093.PNG",
      b: {
        x: 394,
        y: 1290
      }
    }, {
      a: "L2_Terrain094.PNG",
      b: {
        x: 394,
        y: 1234
      }
    }, {
      a: "L2_Terrain095.PNG",
      b: {
        x: 394,
        y: 1178
      }
    }, {
      a: "L2_Terrain096.PNG",
      b: {
        x: 394,
        y: 1122
      }
    }, {
      a: "L2_Terrain097.PNG",
      b: {
        x: 1458,
        y: 618
      }
    }, {
      a: "L2_Terrain098.PNG",
      b: {
        x: 394,
        y: 1066
      }
    }, {
      a: "L2_Terrain099.PNG",
      b: {
        x: 394,
        y: 1010
      }
    }, {
      a: "L2_Terrain100.PNG",
      b: {
        x: 394,
        y: 954
      }
    }, {
      a: "L2_Terrain101.PNG",
      b: {
        x: 394,
        y: 898
      }
    }, {
      a: "L2_ThroneS.PNG",
      b: {
        x: 394,
        y: 842
      }
    }, {
      a: "L2_ThroneW.PNG",
      b: {
        x: 394,
        y: 786
      }
    }, {
      a: "L2_TombStone.PNG",
      b: {
        x: 394,
        y: 730
      }
    }, {
      a: "L2_TorchStanding.PNG",
      b: {
        x: 394,
        y: 674
      }
    }, {
      a: "L2_TorchStanding02.PNG",
      b: {
        x: 394,
        y: 618
      }
    }, {
      a: "L2_Town.PNG",
      b: {
        x: 842,
        y: 282
      }
    }, {
      a: "L2_Town01.PNG",
      b: {
        x: 394,
        y: 562
      }
    }, {
      a: "L2_Town02.PNG",
      b: {
        x: 394,
        y: 506
      }
    }, {
      a: "L2_Town03.PNG",
      b: {
        x: 394,
        y: 450
      }
    }, {
      a: "L2_Town04.PNG",
      b: {
        x: 394,
        y: 394
      }
    }, {
      a: "L2_TrapDoor.PNG",
      b: {
        x: 394,
        y: 338
      }
    }, {
      a: "L2_Tree01.PNG",
      b: {
        x: 1794,
        y: 282
      }
    }, {
      a: "L2_Tree02.PNG",
      b: {
        x: 394,
        y: 282
      }
    }, {
      a: "L2_TreeJungle01.PNG",
      b: {
        x: 618,
        y: 1122
      }
    }, {
      a: "L2_TreeMaple01.PNG",
      b: {
        x: 394,
        y: 954
      }
    }, {
      a: "L2_TreeMaple02.PNG",
      b: {
        x: 1906,
        y: 226
      }
    }, {
      a: "L2_TreeMixed01.PNG",
      b: {
        x: 1850,
        y: 226
      }
    }, {
      a: "L2_TreePine01.PNG",
      b: {
        x: 394,
        y: 282
      }
    }, {
      a: "L2_TreePine02.PNG",
      b: {
        x: 394,
        y: 898
      }
    }, {
      a: "L2_TreePine03.PNG",
      b: {
        x: 1794,
        y: 226
      }
    }, {
      a: "L2_TreePine04.PNG",
      b: {
        x: 1738,
        y: 226
      }
    }, {
      a: "L2_TreePine05.PNG",
      b: {
        x: 1682,
        y: 226
      }
    }, {
      a: "L2_TreePine06.PNG",
      b: {
        x: 1626,
        y: 226
      }
    }, {
      a: "L2_TreePine07.PNG",
      b: {
        x: 1570,
        y: 226
      }
    }, {
      a: "L2_TreePine08.PNG",
      b: {
        x: 1514,
        y: 226
      }
    }, {
      a: "L2_TreePine09.PNG",
      b: {
        x: 1458,
        y: 226
      }
    }, {
      a: "L2_TreePine10.PNG",
      b: {
        x: 1402,
        y: 226
      }
    }, {
      a: "L2_TreePine11.PNG",
      b: {
        x: 1346,
        y: 226
      }
    }, {
      a: "L2_TreePine12.PNG",
      b: {
        x: 1290,
        y: 226
      }
    }, {
      a: "L2_Wagon2.PNG",
      b: {
        x: 1234,
        y: 226
      }
    }, {
      a: "L2_WallAdobeE.PNG",
      b: {
        x: 1178,
        y: 226
      }
    }, {
      a: "L2_WallAdobeES.PNG",
      b: {
        x: 1122,
        y: 226
      }
    }, {
      a: "L2_WallAdobeESW.PNG",
      b: {
        x: 1066,
        y: 226
      }
    }, {
      a: "L2_WallAdobeEW.PNG",
      b: {
        x: 1010,
        y: 226
      }
    }, {
      a: "L2_WallAdobeN.PNG",
      b: {
        x: 954,
        y: 226
      }
    }, {
      a: "L2_WallAdobeNE.PNG",
      b: {
        x: 898,
        y: 226
      }
    }, {
      a: "L2_WallAdobeNES.PNG",
      b: {
        x: 842,
        y: 226
      }
    }, {
      a: "L2_WallAdobeNESW.PNG",
      b: {
        x: 786,
        y: 226
      }
    }, {
      a: "L2_WallAdobeNEW.PNG",
      b: {
        x: 730,
        y: 226
      }
    }, {
      a: "L2_WallAdobeNS.PNG",
      b: {
        x: 674,
        y: 226
      }
    }, {
      a: "L2_WallAdobeNSW.PNG",
      b: {
        x: 618,
        y: 226
      }
    }, {
      a: "L2_WallAdobeNW.PNG",
      b: {
        x: 562,
        y: 226
      }
    }, {
      a: "L2_WallAdobeS.PNG",
      b: {
        x: 506,
        y: 226
      }
    }, {
      a: "L2_WallAdobeSW.PNG",
      b: {
        x: 450,
        y: 226
      }
    }, {
      a: "L2_WallAdobeW.PNG",
      b: {
        x: 394,
        y: 226
      }
    }, {
      a: "L2_WallBoneE.PNG",
      b: {
        x: 338,
        y: 1794
      }
    }, {
      a: "L2_WallBoneES.PNG",
      b: {
        x: 338,
        y: 1738
      }
    },
    {
      a: "L2_WallBoneESW.PNG",
      b: {
        x: 338,
        y: 1682
      }
    }, {
      a: "L2_WallBoneEW.PNG",
      b: {
        x: 338,
        y: 1626
      }
    }, {
      a: "L2_WallBoneN.PNG",
      b: {
        x: 338,
        y: 1570
      }
    }, {
      a: "L2_WallBoneNE.PNG",
      b: {
        x: 338,
        y: 1514
      }
    }, {
      a: "L2_WallBoneNES.PNG",
      b: {
        x: 338,
        y: 1458
      }
    }, {
      a: "L2_WallBoneNESW.PNG",
      b: {
        x: 338,
        y: 1402
      }
    }, {
      a: "L2_WallBoneNEW.PNG",
      b: {
        x: 338,
        y: 1346
      }
    }, {
      a: "L2_WallBoneNS.PNG",
      b: {
        x: 338,
        y: 1290
      }
    }, {
      a: "L2_WallBoneNSW.PNG",
      b: {
        x: 338,
        y: 1234
      }
    }, {
      a: "L2_WallBoneNW.PNG",
      b: {
        x: 338,
        y: 1178
      }
    }, {
      a: "L2_WallBoneS.PNG",
      b: {
        x: 338,
        y: 1122
      }
    }, {
      a: "L2_WallBoneSW.PNG",
      b: {
        x: 338,
        y: 1066
      }
    }, {
      a: "L2_WallBoneW.PNG",
      b: {
        x: 338,
        y: 1010
      }
    }, {
      a: "L2_WallBrickE.PNG",
      b: {
        x: 338,
        y: 954
      }
    }, {
      a: "L2_WallBrickES.PNG",
      b: {
        x: 338,
        y: 898
      }
    }, {
      a: "L2_WallBrickESW.PNG",
      b: {
        x: 338,
        y: 842
      }
    }, {
      a: "L2_WallBrickEW.PNG",
      b: {
        x: 338,
        y: 786
      }
    }, {
      a: "L2_WallBrickN.PNG",
      b: {
        x: 338,
        y: 730
      }
    }, {
      a: "L2_WallBrickNE.PNG",
      b: {
        x: 338,
        y: 674
      }
    }, {
      a: "L2_WallBrickNES.PNG",
      b: {
        x: 338,
        y: 618
      }
    }, {
      a: "L2_WallBrickNESW.PNG",
      b: {
        x: 338,
        y: 562
      }
    }, {
      a: "L2_WallBrickNEW.PNG",
      b: {
        x: 338,
        y: 506
      }
    }, {
      a: "L2_WallBrickNS.PNG",
      b: {
        x: 338,
        y: 450
      }
    }, {
      a: "L2_WallBrickNSW.PNG",
      b: {
        x: 338,
        y: 394
      }
    }, {
      a: "L2_WallBrickNW.PNG",
      b: {
        x: 338,
        y: 338
      }
    }, {
      a: "L2_WallBrickS.PNG",
      b: {
        x: 338,
        y: 282
      }
    }, {
      a: "L2_WallBrickSW.PNG",
      b: {
        x: 338,
        y: 226
      }
    }, {
      a: "L2_WallBrickW.PNG",
      b: {
        x: 1906,
        y: 170
      }
    }, {
      a: "L2_WallCaveE.PNG",
      b: {
        x: 1850,
        y: 170
      }
    }, {
      a: "L2_WallCaveES.PNG",
      b: {
        x: 1794,
        y: 170
      }
    }, {
      a: "L2_WallCaveESW.PNG",
      b: {
        x: 1738,
        y: 170
      }
    }, {
      a: "L2_WallCaveEW.PNG",
      b: {
        x: 1682,
        y: 170
      }
    }, {
      a: "L2_WallCaveN.PNG",
      b: {
        x: 1626,
        y: 170
      }
    }, {
      a: "L2_WallCaveNE.PNG",
      b: {
        x: 1570,
        y: 170
      }
    }, {
      a: "L2_WallCaveNES.PNG",
      b: {
        x: 1514,
        y: 170
      }
    }, {
      a: "L2_WallCaveNESW.PNG",
      b: {
        x: 1458,
        y: 170
      }
    }, {
      a: "L2_WallCaveNEW.PNG",
      b: {
        x: 1402,
        y: 170
      }
    },
    {
      a: "L2_WallCaveNS.PNG",
      b: {
        x: 1346,
        y: 170
      }
    }, {
      a: "L2_WallCaveNSW.PNG",
      b: {
        x: 1290,
        y: 170
      }
    }, {
      a: "L2_WallCaveNW.PNG",
      b: {
        x: 1234,
        y: 170
      }
    }, {
      a: "L2_WallCaveS.PNG",
      b: {
        x: 1178,
        y: 170
      }
    }, {
      a: "L2_WallCaveSW.PNG",
      b: {
        x: 1122,
        y: 170
      }
    }, {
      a: "L2_WallCaveW.PNG",
      b: {
        x: 1066,
        y: 170
      }
    }, {
      a: "L2_WallDarkBrickE.PNG",
      b: {
        x: 1010,
        y: 170
      }
    }, {
      a: "L2_WallDarkBrickES.PNG",
      b: {
        x: 954,
        y: 170
      }
    }, {
      a: "L2_WallDarkBrickESW.PNG",
      b: {
        x: 898,
        y: 170
      }
    }, {
      a: "L2_WallDarkBrickEW.PNG",
      b: {
        x: 842,
        y: 170
      }
    }, {
      a: "L2_WallDarkBrickN.PNG",
      b: {
        x: 786,
        y: 170
      }
    }, {
      a: "L2_WallDarkBrickNE.PNG",
      b: {
        x: 730,
        y: 170
      }
    }, {
      a: "L2_WallDarkBrickNES.PNG",
      b: {
        x: 674,
        y: 170
      }
    }, {
      a: "L2_WallDarkBrickNESW.PNG",
      b: {
        x: 618,
        y: 170
      }
    }, {
      a: "L2_WallDarkBrickNEW.PNG",
      b: {
        x: 562,
        y: 170
      }
    }, {
      a: "L2_WallDarkBrickNS.PNG",
      b: {
        x: 506,
        y: 170
      }
    }, {
      a: "L2_WallDarkBrickNSW.PNG",
      b: {
        x: 450,
        y: 170
      }
    }, {
      a: "L2_WallDarkBrickNW.PNG",
      b: {
        x: 394,
        y: 170
      }
    }, {
      a: "L2_WallDarkBrickS.PNG",
      b: {
        x: 338,
        y: 170
      }
    }, {
      a: "L2_WallDarkBrickSW.PNG",
      b: {
        x: 282,
        y: 1794
      }
    }, {
      a: "L2_WallDarkBrickW.PNG",
      b: {
        x: 282,
        y: 1738
      }
    }, {
      a: "L2_WallDarkStoneE.PNG",
      b: {
        x: 282,
        y: 1682
      }
    }, {
      a: "L2_WallDarkStoneES.PNG",
      b: {
        x: 282,
        y: 1626
      }
    },
    {
      a: "L2_WallDarkStoneESW.PNG",
      b: {
        x: 282,
        y: 1570
      }
    }, {
      a: "L2_WallDarkStoneEW.PNG",
      b: {
        x: 282,
        y: 1514
      }
    }, {
      a: "L2_WallDarkStoneN.PNG",
      b: {
        x: 282,
        y: 1458
      }
    }, {
      a: "L2_WallDarkStoneNE.PNG",
      b: {
        x: 282,
        y: 1402
      }
    }, {
      a: "L2_WallDarkStoneNES.PNG",
      b: {
        x: 282,
        y: 1346
      }
    }, {
      a: "L2_WallDarkStoneNESW.PNG",
      b: {
        x: 282,
        y: 1290
      }
    }, {
      a: "L2_WallDarkStoneNEW.PNG",
      b: {
        x: 282,
        y: 1234
      }
    }, {
      a: "L2_WallDarkStoneNS.PNG",
      b: {
        x: 282,
        y: 1178
      }
    }, {
      a: "L2_WallDarkStoneNSW.PNG",
      b: {
        x: 282,
        y: 1122
      }
    }, {
      a: "L2_WallDarkStoneNW.PNG",
      b: {
        x: 282,
        y: 1066
      }
    }, {
      a: "L2_WallDarkStoneS.PNG",
      b: {
        x: 282,
        y: 1010
      }
    }, {
      a: "L2_WallDarkStoneSW.PNG",
      b: {
        x: 282,
        y: 954
      }
    }, {
      a: "L2_WallDarkStoneW.PNG",
      b: {
        x: 282,
        y: 898
      }
    }, {
      a: "L2_WallDestroyed.PNG",
      b: {
        x: 282,
        y: 842
      }
    }, {
      a: "L2_WallFortE.PNG",
      b: {
        x: 282,
        y: 786
      }
    }, {
      a: "L2_WallFortES.PNG",
      b: {
        x: 282,
        y: 730
      }
    }, {
      a: "L2_WallFortESW.PNG",
      b: {
        x: 282,
        y: 674
      }
    }, {
      a: "L2_WallFortEW.PNG",
      b: {
        x: 282,
        y: 618
      }
    }, {
      a: "L2_WallFortN.PNG",
      b: {
        x: 282,
        y: 562
      }
    }, {
      a: "L2_WallFortNE.PNG",
      b: {
        x: 282,
        y: 506
      }
    }, {
      a: "L2_WallFortNES.PNG",
      b: {
        x: 282,
        y: 450
      }
    }, {
      a: "L2_WallFortNESW.PNG",
      b: {
        x: 282,
        y: 394
      }
    }, {
      a: "L2_WallFortNEW.PNG",
      b: {
        x: 282,
        y: 338
      }
    },
    {
      a: "L2_WallFortNS.PNG",
      b: {
        x: 282,
        y: 282
      }
    }, {
      a: "L2_WallFortNSW.PNG",
      b: {
        x: 282,
        y: 226
      }
    }, {
      a: "L2_WallFortNW.PNG",
      b: {
        x: 282,
        y: 170
      }
    }, {
      a: "L2_WallFortS.PNG",
      b: {
        x: 1906,
        y: 114
      }
    }, {
      a: "L2_WallFortSW.PNG",
      b: {
        x: 1850,
        y: 114
      }
    }, {
      a: "L2_WallFortW.PNG",
      b: {
        x: 1794,
        y: 114
      }
    }, {
      a: "L2_WallHutE.PNG",
      b: {
        x: 1738,
        y: 114
      }
    }, {
      a: "L2_WallHutES.PNG",
      b: {
        x: 1682,
        y: 114
      }
    }, {
      a: "L2_WallHutESW.PNG",
      b: {
        x: 1626,
        y: 114
      }
    }, {
      a: "L2_WallHutEW.PNG",
      b: {
        x: 1570,
        y: 114
      }
    }, {
      a: "L2_WallHutN.PNG",
      b: {
        x: 1514,
        y: 114
      }
    }, {
      a: "L2_WallHutNE.PNG",
      b: {
        x: 1458,
        y: 114
      }
    }, {
      a: "L2_WallHutNES.PNG",
      b: {
        x: 1402,
        y: 114
      }
    }, {
      a: "L2_WallHutNESW.PNG",
      b: {
        x: 1346,
        y: 114
      }
    }, {
      a: "L2_WallHutNEW.PNG",
      b: {
        x: 1290,
        y: 114
      }
    }, {
      a: "L2_WallHutNS.PNG",
      b: {
        x: 1234,
        y: 114
      }
    }, {
      a: "L2_WallHutNSW.PNG",
      b: {
        x: 1178,
        y: 114
      }
    }, {
      a: "L2_WallHutNW.PNG",
      b: {
        x: 1122,
        y: 114
      }
    }, {
      a: "L2_WallHutS.PNG",
      b: {
        x: 1066,
        y: 114
      }
    }, {
      a: "L2_WallHutSW.PNG",
      b: {
        x: 1010,
        y: 114
      }
    }, {
      a: "L2_WallHutW.PNG",
      b: {
        x: 954,
        y: 114
      }
    }, {
      a: "L2_WallIceE.PNG",
      b: {
        x: 898,
        y: 114
      }
    }, {
      a: "L2_WallIceES.PNG",
      b: {
        x: 842,
        y: 114
      }
    }, {
      a: "L2_WallIceESW.PNG",
      b: {
        x: 786,
        y: 114
      }
    }, {
      a: "L2_WallIceEW.PNG",
      b: {
        x: 730,
        y: 114
      }
    }, {
      a: "L2_WallIceN.PNG",
      b: {
        x: 674,
        y: 114
      }
    }, {
      a: "L2_WallIceNE.PNG",
      b: {
        x: 618,
        y: 114
      }
    }, {
      a: "L2_WallIceNES.PNG",
      b: {
        x: 562,
        y: 114
      }
    }, {
      a: "L2_WallIceNESW.PNG",
      b: {
        x: 506,
        y: 114
      }
    }, {
      a: "L2_WallIceNEW.PNG",
      b: {
        x: 450,
        y: 114
      }
    }, {
      a: "L2_WallIceNS.PNG",
      b: {
        x: 394,
        y: 114
      }
    }, {
      a: "L2_WallIceNSW.PNG",
      b: {
        x: 338,
        y: 114
      }
    }, {
      a: "L2_WallIceNW.PNG",
      b: {
        x: 282,
        y: 114
      }
    }, {
      a: "L2_WallIceS.PNG",
      b: {
        x: 226,
        y: 1794
      }
    }, {
      a: "L2_WallIceSW.PNG",
      b: {
        x: 226,
        y: 1738
      }
    }, {
      a: "L2_WallIceW.PNG",
      b: {
        x: 226,
        y: 1682
      }
    }, {
      a: "L2_WallIronE.PNG",
      b: {
        x: 226,
        y: 1626
      }
    }, {
      a: "L2_WallIronES.PNG",
      b: {
        x: 226,
        y: 1570
      }
    }, {
      a: "L2_WallIronESW.PNG",
      b: {
        x: 226,
        y: 1514
      }
    }, {
      a: "L2_WallIronEW.PNG",
      b: {
        x: 226,
        y: 1458
      }
    }, {
      a: "L2_WallIronN.PNG",
      b: {
        x: 226,
        y: 1402
      }
    }, {
      a: "L2_WallIronNE.PNG",
      b: {
        x: 226,
        y: 1346
      }
    }, {
      a: "L2_WallIronNES.PNG",
      b: {
        x: 226,
        y: 1290
      }
    }, {
      a: "L2_WallIronNESW.PNG",
      b: {
        x: 226,
        y: 1234
      }
    }, {
      a: "L2_WallIronNEW.PNG",
      b: {
        x: 226,
        y: 1178
      }
    }, {
      a: "L2_WallIronNS.PNG",
      b: {
        x: 226,
        y: 1122
      }
    }, {
      a: "L2_WallIronNSW.PNG",
      b: {
        x: 226,
        y: 1066
      }
    }, {
      a: "L2_WallIronNW.PNG",
      b: {
        x: 226,
        y: 1010
      }
    }, {
      a: "L2_WallIronS.PNG",
      b: {
        x: 226,
        y: 954
      }
    }, {
      a: "L2_WallIronSW.PNG",
      b: {
        x: 226,
        y: 898
      }
    }, {
      a: "L2_WallIronW.PNG",
      b: {
        x: 226,
        y: 842
      }
    }, {
      a: "L2_WallLogE.PNG",
      b: {
        x: 226,
        y: 786
      }
    }, {
      a: "L2_WallLogES.PNG",
      b: {
        x: 226,
        y: 730
      }
    }, {
      a: "L2_WallLogESW.PNG",
      b: {
        x: 226,
        y: 674
      }
    }, {
      a: "L2_WallLogEW.PNG",
      b: {
        x: 226,
        y: 618
      }
    }, {
      a: "L2_WallLogN.PNG",
      b: {
        x: 226,
        y: 562
      }
    }, {
      a: "L2_WallLogNE.PNG",
      b: {
        x: 226,
        y: 506
      }
    }, {
      a: "L2_WallLogNES.PNG",
      b: {
        x: 226,
        y: 450
      }
    }, {
      a: "L2_WallLogNESW.PNG",
      b: {
        x: 226,
        y: 394
      }
    }, {
      a: "L2_WallLogNEW.PNG",
      b: {
        x: 226,
        y: 338
      }
    }, {
      a: "L2_WallLogNS.PNG",
      b: {
        x: 226,
        y: 282
      }
    }, {
      a: "L2_WallLogNSW.PNG",
      b: {
        x: 226,
        y: 226
      }
    }, {
      a: "L2_WallLogNW.PNG",
      b: {
        x: 226,
        y: 170
      }
    }, {
      a: "L2_WallLogS.PNG",
      b: {
        x: 226,
        y: 114
      }
    }, {
      a: "L2_WallLogSW.PNG",
      b: {
        x: 1906,
        y: 58
      }
    }, {
      a: "L2_WallLogW.PNG",
      b: {
        x: 1850,
        y: 58
      }
    }, {
      a: "L2_WallMineE.PNG",
      b: {
        x: 1794,
        y: 58
      }
    }, {
      a: "L2_WallMineES.PNG",
      b: {
        x: 1738,
        y: 58
      }
    }, {
      a: "L2_WallMineESW.PNG",
      b: {
        x: 1682,
        y: 58
      }
    }, {
      a: "L2_WallMineEW.PNG",
      b: {
        x: 1626,
        y: 58
      }
    }, {
      a: "L2_WallMineN.PNG",
      b: {
        x: 1570,
        y: 58
      }
    }, {
      a: "L2_WallMineNE.PNG",
      b: {
        x: 1514,
        y: 58
      }
    }, {
      a: "L2_WallMineNES.PNG",
      b: {
        x: 1458,
        y: 58
      }
    }, {
      a: "L2_WallMineNESW.PNG",
      b: {
        x: 1402,
        y: 58
      }
    }, {
      a: "L2_WallMineNEW.PNG",
      b: {
        x: 1346,
        y: 58
      }
    }, {
      a: "L2_WallMineNS.PNG",
      b: {
        x: 1290,
        y: 58
      }
    }, {
      a: "L2_WallMineNSW.PNG",
      b: {
        x: 1234,
        y: 58
      }
    }, {
      a: "L2_WallMineNW.PNG",
      b: {
        x: 1178,
        y: 58
      }
    }, {
      a: "L2_WallMineS.PNG",
      b: {
        x: 1122,
        y: 58
      }
    }, {
      a: "L2_WallMineSW.PNG",
      b: {
        x: 1066,
        y: 58
      }
    }, {
      a: "L2_WallMineW.PNG",
      b: {
        x: 1010,
        y: 58
      }
    }, {
      a: "L2_WallPillarE.PNG",
      b: {
        x: 954,
        y: 58
      }
    }, {
      a: "L2_WallPillarES.PNG",
      b: {
        x: 898,
        y: 58
      }
    }, {
      a: "L2_WallPillarESW.PNG",
      b: {
        x: 842,
        y: 58
      }
    }, {
      a: "L2_WallPillarEW.PNG",
      b: {
        x: 786,
        y: 58
      }
    }, {
      a: "L2_WallPillarN.PNG",
      b: {
        x: 730,
        y: 58
      }
    }, {
      a: "L2_WallPillarNE.PNG",
      b: {
        x: 674,
        y: 58
      }
    }, {
      a: "L2_WallPillarNES.PNG",
      b: {
        x: 618,
        y: 58
      }
    }, {
      a: "L2_WallPillarNESW.PNG",
      b: {
        x: 562,
        y: 58
      }
    },
    {
      a: "L2_WallPillarNEW.PNG",
      b: {
        x: 506,
        y: 58
      }
    }, {
      a: "L2_WallPillarNS.PNG",
      b: {
        x: 450,
        y: 58
      }
    }, {
      a: "L2_WallPillarNSW.PNG",
      b: {
        x: 394,
        y: 58
      }
    }, {
      a: "L2_WallPillarNW.PNG",
      b: {
        x: 338,
        y: 58
      }
    }, {
      a: "L2_WallPillarS.PNG",
      b: {
        x: 282,
        y: 58
      }
    }, {
      a: "L2_WallPillarSW.PNG",
      b: {
        x: 226,
        y: 58
      }
    }, {
      a: "L2_WallPillarW.PNG",
      b: {
        x: 170,
        y: 1794
      }
    }, {
      a: "L2_WallStoneE.PNG",
      b: {
        x: 170,
        y: 1738
      }
    }, {
      a: "L2_WallStoneES.PNG",
      b: {
        x: 170,
        y: 1682
      }
    }, {
      a: "L2_WallStoneESW.PNG",
      b: {
        x: 170,
        y: 1626
      }
    }, {
      a: "L2_WallStoneEW.PNG",
      b: {
        x: 170,
        y: 1570
      }
    }, {
      a: "L2_WallStoneN.PNG",
      b: {
        x: 170,
        y: 1514
      }
    }, {
      a: "L2_WallStoneNE.PNG",
      b: {
        x: 170,
        y: 1458
      }
    }, {
      a: "L2_WallStoneNES.PNG",
      b: {
        x: 170,
        y: 1402
      }
    }, {
      a: "L2_WallStoneNESW.PNG",
      b: {
        x: 170,
        y: 1346
      }
    }, {
      a: "L2_WallStoneNEW.PNG",
      b: {
        x: 170,
        y: 1290
      }
    }, {
      a: "L2_WallStoneNS.PNG",
      b: {
        x: 170,
        y: 1234
      }
    }, {
      a: "L2_WallStoneNSW.PNG",
      b: {
        x: 170,
        y: 1178
      }
    }, {
      a: "L2_WallStoneNW.PNG",
      b: {
        x: 170,
        y: 1122
      }
    }, {
      a: "L2_WallStoneS.PNG",
      b: {
        x: 170,
        y: 1066
      }
    }, {
      a: "L2_WallStoneSW.PNG",
      b: {
        x: 170,
        y: 1010
      }
    }, {
      a: "L2_WallStoneW.PNG",
      b: {
        x: 170,
        y: 954
      }
    }, {
      a: "L2_WallWoodE.PNG",
      b: {
        x: 170,
        y: 898
      }
    }, {
      a: "L2_WallWoodES.PNG",
      b: {
        x: 170,
        y: 842
      }
    }, {
      a: "L2_WallWoodESW.PNG",
      b: {
        x: 170,
        y: 786
      }
    }, {
      a: "L2_WallWoodEW.PNG",
      b: {
        x: 170,
        y: 730
      }
    }, {
      a: "L2_WallWoodN.PNG",
      b: {
        x: 170,
        y: 674
      }
    }, {
      a: "L2_WallWoodNE.PNG",
      b: {
        x: 170,
        y: 618
      }
    }, {
      a: "L2_WallWoodNES.PNG",
      b: {
        x: 170,
        y: 562
      }
    }, {
      a: "L2_WallWoodNESW.PNG",
      b: {
        x: 170,
        y: 506
      }
    }, {
      a: "L2_WallWoodNEW.PNG",
      b: {
        x: 170,
        y: 450
      }
    }, {
      a: "L2_WallWoodNS.PNG",
      b: {
        x: 170,
        y: 394
      }
    }, {
      a: "L2_WallWoodNSW.PNG",
      b: {
        x: 170,
        y: 338
      }
    }, {
      a: "L2_WallWoodNW.PNG",
      b: {
        x: 170,
        y: 282
      }
    }, {
      a: "L2_WallWoodS.PNG",
      b: {
        x: 170,
        y: 226
      }
    }, {
      a: "L2_WallWoodSW.PNG",
      b: {
        x: 170,
        y: 170
      }
    }, {
      a: "L2_WallWoodW.PNG",
      b: {
        x: 170,
        y: 114
      }
    }, {
      a: "L2_Wall_Deco100_NS.PNG",
      b: {
        x: 170,
        y: 58
      }
    }, {
      a: "L2_Wall_Deco101_EW.PNG",
      b: {
        x: 1906,
        y: 2
      }
    }, {
      a: "L2_Wall_Deco70.PNG",
      b: {
        x: 1850,
        y: 2
      }
    }, {
      a: "L2_Wall_Deco72.PNG",
      b: {
        x: 1794,
        y: 2
      }
    }, {
      a: "L2_Wall_Deco73.PNG",
      b: {
        x: 1738,
        y: 2
      }
    }, {
      a: "L2_Wall_Deco76.PNG",
      b: {
        x: 1682,
        y: 2
      }
    }, {
      a: "L2_Wall_Deco77.PNG",
      b: {
        x: 1626,
        y: 2
      }
    }, {
      a: "L2_Well01.PNG",
      b: {
        x: 1570,
        y: 2
      }
    }, {
      a: "L3_FireplaceEast.PNG",
      b: {
        x: 1514,
        y: 2
      }
    }, {
      a: "L3_FireplaceNorth.PNG",
      b: {
        x: 1458,
        y: 2
      }
    }, {
      a: "L3_IronFenceEWEndE.PNG",
      b: {
        x: 1402,
        y: 2
      }
    }, {
      a: "L3_IronFenceEWEndW.PNG",
      b: {
        x: 1346,
        y: 2
      }
    }, {
      a: "L3_IronFenceNSEndN.PNG",
      b: {
        x: 1290,
        y: 2
      }
    }, {
      a: "L3_IronFenceNSEndS.PNG",
      b: {
        x: 1234,
        y: 2
      }
    }, {
      a: "L3_SwitchEDown.PNG",
      b: {
        x: 1178,
        y: 2
      }
    }, {
      a: "L3_SwitchEUp.PNG",
      b: {
        x: 1122,
        y: 2
      }
    }, {
      a: "L3_SwitchNDown.PNG",
      b: {
        x: 1066,
        y: 2
      }
    }, {
      a: "L3_SwitchNUp.PNG",
      b: {
        x: 1010,
        y: 2
      }
    }, {
      a: "L3_WallDeco01.PNG",
      b: {
        x: 954,
        y: 2
      }
    }, {
      a: "L3_WallDeco02.PNG",
      b: {
        x: 898,
        y: 2
      }
    }, {
      a: "L3_WallDeco03.PNG",
      b: {
        x: 842,
        y: 2
      }
    }, {
      a: "L3_WallDeco04.PNG",
      b: {
        x: 786,
        y: 2
      }
    }, {
      a: "L3_WallDeco05.PNG",
      b: {
        x: 730,
        y: 2
      }
    }, {
      a: "L3_WallDeco06.PNG",
      b: {
        x: 674,
        y: 2
      }
    }, {
      a: "L3_WallDeco07.PNG",
      b: {
        x: 618,
        y: 2
      }
    }, {
      a: "L3_WallDeco08.PNG",
      b: {
        x: 562,
        y: 2
      }
    }, {
      a: "L3_WallDeco09.PNG",
      b: {
        x: 506,
        y: 2
      }
    }, {
      a: "L3_WallDeco10.PNG",
      b: {
        x: 450,
        y: 2
      }
    }, {
      a: "L3_WallDeco11.PNG",
      b: {
        x: 394,
        y: 2
      }
    }, {
      a: "L3_WallDeco12.PNG",
      b: {
        x: 338,
        y: 2
      }
    }, {
      a: "L3_WallDeco13.PNG",
      b: {
        x: 282,
        y: 2
      }
    }, {
      a: "L3_WallDeco14.PNG",
      b: {
        x: 226,
        y: 2
      }
    }, {
      a: "L3_WallDeco15.PNG",
      b: {
        x: 170,
        y: 2
      }
    }, {
      a: "L3_WallDeco16.PNG",
      b: {
        x: 114,
        y: 1794
      }
    }, {
      a: "L3_WallDeco17.PNG",
      b: {
        x: 114,
        y: 1738
      }
    }, {
      a: "L3_WallDeco18.PNG",
      b: {
        x: 114,
        y: 1682
      }
    }, {
      a: "L3_WallDeco19.PNG",
      b: {
        x: 114,
        y: 1626
      }
    }, {
      a: "L3_WallDeco20.PNG",
      b: {
        x: 114,
        y: 1570
      }
    }, {
      a: "L3_WallDeco21.PNG",
      b: {
        x: 114,
        y: 1514
      }
    }, {
      a: "L3_WallDeco22.PNG",
      b: {
        x: 114,
        y: 1458
      }
    }, {
      a: "L3_WallDeco23.PNG",
      b: {
        x: 114,
        y: 1402
      }
    }, {
      a: "L3_WallDeco24.PNG",
      b: {
        x: 114,
        y: 1346
      }
    }, {
      a: "L3_WallDeco25.PNG",
      b: {
        x: 114,
        y: 1290
      }
    }, {
      a: "L3_WallDeco26.PNG",
      b: {
        x: 114,
        y: 1234
      }
    }, {
      a: "L3_WallDeco27.PNG",
      b: {
        x: 114,
        y: 1178
      }
    }, {
      a: "L3_WallDeco28.PNG",
      b: {
        x: 114,
        y: 1122
      }
    }, {
      a: "L3_WallDeco29.PNG",
      b: {
        x: 114,
        y: 1066
      }
    }, {
      a: "L3_WallDeco30.PNG",
      b: {
        x: 114,
        y: 1010
      }
    }, {
      a: "L3_WallDeco31.PNG",
      b: {
        x: 114,
        y: 954
      }
    }, {
      a: "L3_WallDeco32.PNG",
      b: {
        x: 114,
        y: 898
      }
    }, {
      a: "L3_WallDeco33.PNG",
      b: {
        x: 114,
        y: 842
      }
    }, {
      a: "L3_WallDeco34.PNG",
      b: {
        x: 114,
        y: 786
      }
    }, {
      a: "L3_WallDeco35.PNG",
      b: {
        x: 114,
        y: 730
      }
    }, {
      a: "L3_WallDeco36.PNG",
      b: {
        x: 114,
        y: 674
      }
    }, {
      a: "L3_WallDeco37.PNG",
      b: {
        x: 114,
        y: 618
      }
    }, {
      a: "L3_WallDeco38.PNG",
      b: {
        x: 114,
        y: 562
      }
    }, {
      a: "L3_WallDeco39.PNG",
      b: {
        x: 114,
        y: 506
      }
    }, {
      a: "L3_WallDeco40.PNG",
      b: {
        x: 114,
        y: 450
      }
    }, {
      a: "L3_WallDeco41.PNG",
      b: {
        x: 114,
        y: 394
      }
    }, {
      a: "L3_WallDeco42.PNG",
      b: {
        x: 114,
        y: 338
      }
    }, {
      a: "L3_WallDeco43.PNG",
      b: {
        x: 114,
        y: 282
      }
    }, {
      a: "L3_WallDeco44.PNG",
      b: {
        x: 114,
        y: 226
      }
    }, {
      a: "L3_WallDeco45.PNG",
      b: {
        x: 114,
        y: 170
      }
    }, {
      a: "L3_WallDeco46.PNG",
      b: {
        x: 114,
        y: 114
      }
    }, {
      a: "L3_WallDeco47.PNG",
      b: {
        x: 114,
        y: 58
      }
    }, {
      a: "L3_WallDeco48.PNG",
      b: {
        x: 114,
        y: 2
      }
    }, {
      a: "L3_WallDeco49.PNG",
      b: {
        x: 58,
        y: 1794
      }
    }, {
      a: "L3_WallDeco50.PNG",
      b: {
        x: 58,
        y: 1738
      }
    }, {
      a: "L3_WallDeco51.PNG",
      b: {
        x: 58,
        y: 1682
      }
    }, {
      a: "L3_WallDeco52.PNG",
      b: {
        x: 58,
        y: 1626
      }
    }, {
      a: "L3_Wall_Blood10_EW.PNG",
      b: {
        x: 58,
        y: 1570
      }
    }, {
      a: "L3_Wall_Blood11_NS.PNG",
      b: {
        x: 58,
        y: 1514
      }
    }, {
      a: "L3_Wall_Blood12_EW.PNG",
      b: {
        x: 58,
        y: 1458
      }
    }, {
      a: "L3_Wall_Blood13_NS.PNG",
      b: {
        x: 58,
        y: 1402
      }
    }, {
      a: "L3_Wall_Blood14_EW.PNG",
      b: {
        x: 58,
        y: 1346
      }
    }, {
      a: "L3_Wall_Blood2_EW.PNG",
      b: {
        x: 58,
        y: 1290
      }
    }, {
      a: "L3_Wall_Blood3_NS.PNG",
      b: {
        x: 58,
        y: 1234
      }
    }, {
      a: "L3_Wall_Blood4_EW.PNG",
      b: {
        x: 58,
        y: 1178
      }
    }, {
      a: "L3_Wall_Blood5_NS.PNG",
      b: {
        x: 58,
        y: 1122
      }
    }, {
      a: "L3_Wall_Blood6_EW.PNG",
      b: {
        x: 58,
        y: 1066
      }
    }, {
      a: "L3_Wall_Blood7_NS.PNG",
      b: {
        x: 58,
        y: 1010
      }
    }, {
      a: "L3_Wall_Blood8_EW.PNG",
      b: {
        x: 58,
        y: 954
      }
    }, {
      a: "L3_Wall_Blood9_NS.PNG",
      b: {
        x: 58,
        y: 898
      }
    }, {
      a: "L3_Wall_Blood_NS.PNG",
      b: {
        x: 58,
        y: 842
      }
    }, {
      a: "L3_Wall_Crate_EW.PNG",
      b: {
        x: 58,
        y: 786
      }
    }, {
      a: "L3_Wall_Crate_NS.PNG",
      b: {
        x: 58,
        y: 730
      }
    }, {
      a: "L3_Wall_Deco104_NS.PNG",
      b: {
        x: 58,
        y: 674
      }
    }, {
      a: "L3_Wall_Deco105_EW.PNG",
      b: {
        x: 58,
        y: 618
      }
    }, {
      a: "L3_Wall_Deco74_EW.PNG",
      b: {
        x: 58,
        y: 562
      }
    }, {
      a: "L3_Wall_Deco75_NS.PNG",
      b: {
        x: 58,
        y: 506
      }
    }, {
      a: "L3_Wall_Deco78.PNG",
      b: {
        x: 58,
        y: 450
      }
    }, {
      a: "L3_Wall_Deco79.PNG",
      b: {
        x: 58,
        y: 394
      }
    }, {
      a: "L3_Wall_Deco80.PNG",
      b: {
        x: 58,
        y: 338
      }
    }, {
      a: "L3_Wall_Deco81.PNG",
      b: {
        x: 58,
        y: 282
      }
    }, {
      a: "L3_Wall_Deco82_EW.PNG",
      b: {
        x: 58,
        y: 226
      }
    }, {
      a: "L3_Wall_Deco83_NS.PNG",
      b: {
        x: 58,
        y: 170
      }
    }, {
      a: "L3_Wall_Drain1.PNG",
      b: {
        x: 58,
        y: 114
      }
    }, {
      a: "L3_Wall_Drain2.PNG",
      b: {
        x: 58,
        y: 58
      }
    }, {
      a: "L3_Wall_Drain3.PNG",
      b: {
        x: 58,
        y: 2
      }
    }, {
      a: "L3_Wall_Drain4.PNG",
      b: {
        x: 2,
        y: 1794
      }
    }, {
      a: "L3_Wall_Drain5.PNG",
      b: {
        x: 2,
        y: 1738
      }
    },
    {
      a: "L3_Wall_Drain6.PNG",
      b: {
        x: 2,
        y: 1682
      }
    }, {
      a: "L3_Wall_Drain7_NS.PNG",
      b: {
        x: 2,
        y: 1626
      }
    }, {
      a: "L3_Wall_Drain8_EW.PNG",
      b: {
        x: 2,
        y: 1570
      }
    }, {
      a: "L3_Wall_Sign_EW.PNG",
      b: {
        x: 2,
        y: 1514
      }
    }, {
      a: "L3_Wall_Sign_NS.PNG",
      b: {
        x: 2,
        y: 1458
      }
    }, {
      a: "L3_Wall_WeapRack1_EW.PNG",
      b: {
        x: 2,
        y: 1402
      }
    }, {
      a: "L3_Wall_WeapRack1_NS.PNG",
      b: {
        x: 2,
        y: 1346
      }
    }, {
      a: "L3_Wall_WeapRack2_EW.PNG",
      b: {
        x: 2,
        y: 1290
      }
    }, {
      a: "L3_Wall_WeapRack2_NS.PNG",
      b: {
        x: 2,
        y: 1234
      }
    }, {
      a: "L3_Wall_WeapRack3_EW.PNG",
      b: {
        x: 2,
        y: 1178
      }
    }, {
      a: "L3_Wall_WeapRack3_NS.PNG",
      b: {
        x: 2,
        y: 1122
      }
    }, {
      a: "L3_Wall_WeapRack4_EW.PNG",
      b: {
        x: 2,
        y: 1066
      }
    }, {
      a: "L3_Wall_WeapRack4_NS.PNG",
      b: {
        x: 2,
        y: 1010
      }
    }, {
      a: "L3_Wall_WeapRack5_EW.PNG",
      b: {
        x: 2,
        y: 954
      }
    }, {
      a: "L3_Wall_WeapRack5_NS.PNG",
      b: {
        x: 2,
        y: 898
      }
    }, {
      a: "L3_Wall_WeapRack6_EW.PNG",
      b: {
        x: 2,
        y: 842
      }
    }, {
      a: "L3_Wall_WeapRack6_NS.PNG",
      b: {
        x: 2,
        y: 786
      }
    }, {
      a: "L3_Wall_WeapRack7_EW.PNG",
      b: {
        x: 2,
        y: 730
      }
    }, {
      a: "L3_Wall_WeapRack7_NS.PNG",
      b: {
        x: 2,
        y: 674
      }
    }, {
      a: "L3_Wall_WeapRack8_EW.PNG",
      b: {
        x: 2,
        y: 618
      }
    }, {
      a: "L3_Wall_WeapRack8_NS.PNG",
      b: {
        x: 2,
        y: 562
      }
    }, {
      a: "L3_WebEast.PNG",
      b: {
        x: 2,
        y: 506
      }
    }, {
      a: "L3_WebNorth.PNG",
      b: {
        x: 2,
        y: 450
      }
    }, {
      a: "L3_Window1.PNG",
      b: {
        x: 2,
        y: 394
      }
    }, {
      a: "L3_Window2.PNG",
      b: {
        x: 2,
        y: 338
      }
    }, {
      a: "L3_Window3.PNG",
      b: {
        x: 2,
        y: 282
      }
    }, {
      a: "L3_Window4.PNG",
      b: {
        x: 2,
        y: 226
      }
    }, {
      a: "L3_Window5.PNG",
      b: {
        x: 2,
        y: 170
      }
    }, {
      a: "L3_Window6.PNG",
      b: {
        x: 2,
        y: 114
      }
    }, {
      a: "L3_Window7.PNG",
      b: {
        x: 2,
        y: 58
      }
    }, {
      a: "L3_Window8.PNG",
      b: {
        x: 2,
        y: 2
      }
    }
  ]),
  Kj: new Pb("spritesheet/items.png", 32, [{
      a: "Ahammer1.PNG",
      b: {
        x: 1532,
        y: 444
      }
    }, {
      a: "ArmorChainMail.PNG",
      b: {
        x: 1532,
        y: 410
      }
    }, {
      a: "ArmorChainMailAugmented.PNG",
      b: {
        x: 1600,
        y: 376
      }
    }, {
      a: "ArmorChainMailBar.PNG",
      b: {
        x: 1566,
        y: 376
      }
    }, {
      a: "ArmorChainMailDouble.PNG",
      b: {
        x: 1532,
        y: 376
      }
    }, {
      a: "ArmorChainMailRusty.PNG",
      b: {
        x: 1498,
        y: 478
      }
    }, {
      a: "ArmorChainmailGolden.PNG",
      b: {
        x: 1498,
        y: 444
      }
    }, {
      a: "ArmorChainmailGreen.PNG",
      b: {
        x: 1498,
        y: 410
      }
    }, {
      a: "ArmorChainmailMithril.PNG",
      b: {
        x: 1498,
        y: 376
      }
    }, {
      a: "ArmorLeatherHard.PNG",
      b: {
        x: 1600,
        y: 342
      }
    }, {
      a: "ArmorLeatherHardStudded.PNG",
      b: {
        x: 1566,
        y: 342
      }
    }, {
      a: "ArmorLeatherScaleMail.PNG",
      b: {
        x: 1532,
        y: 342
      }
    }, {
      a: "ArmorLeatherSoft.PNG",
      b: {
        x: 1498,
        y: 342
      }
    }, {
      a: "ArmorLeatherSoftStudded.PNG",
      b: {
        x: 1464,
        y: 478
      }
    }, {
      a: "ArmorMetalBrigandine.PNG",
      b: {
        x: 1464,
        y: 444
      }
    }, {
      a: "ArmorMetalLamellar.PNG",
      b: {
        x: 1464,
        y: 410
      }
    }, {
      a: "ArmorMetalScaleMail.PNG",
      b: {
        x: 1464,
        y: 376
      }
    }, {
      a: "ArmorPlatemailAdamantite.PNG",
      b: {
        x: 1464,
        y: 342
      }
    }, {
      a: "ArmorPlatemailEnhancedBlue.PNG",
      b: {
        x: 1600,
        y: 308
      }
    }, {
      a: "ArmorPlatemailEnhancedBrown.PNG",
      b: {
        x: 1566,
        y: 308
      }
    }, {
      a: "ArmorPlatemailEnhancedGreen.PNG",
      b: {
        x: 1532,
        y: 308
      }
    }, {
      a: "ArmorPlatemailEnhancedPurple.PNG",
      b: {
        x: 1498,
        y: 308
      }
    }, {
      a: "ArmorPlatemailEnhancedSteel.PNG",
      b: {
        x: 1464,
        y: 308
      }
    }, {
      a: "ArmorPlatemailEnhancedYellow.PNG",
      b: {
        x: 1430,
        y: 478
      }
    }, {
      a: "ArmorPlatemailFull.PNG",
      b: {
        x: 1430,
        y: 444
      }
    }, {
      a: "ArmorPlatemailMithril.PNG",
      b: {
        x: 1430,
        y: 410
      }
    }, {
      a: "ArmorPlatemailPartial.PNG",
      b: {
        x: 1430,
        y: 376
      }
    }, {
      a: "ArmorPlatemailRibbed.PNG",
      b: {
        x: 1430,
        y: 342
      }
    }, {
      a: "ArmorPlatemailStuddedGolden.PNG",
      b: {
        x: 1430,
        y: 308
      }
    }, {
      a: "ArmorPlatemailStuddedGreen.PNG",
      b: {
        x: 1600,
        y: 274
      }
    }, {
      a: "ArmorScalemailDragonBlue.PNG",
      b: {
        x: 1566,
        y: 274
      }
    }, {
      a: "ArmorScalemailDragonBronze.PNG",
      b: {
        x: 1532,
        y: 274
      }
    }, {
      a: "ArmorScalemailDragonDarkGrey.PNG",
      b: {
        x: 1498,
        y: 274
      }
    }, {
      a: "ArmorScalemailDragonGolden.PNG",
      b: {
        x: 1464,
        y: 274
      }
    }, {
      a: "ArmorScalemailDragonGreen.PNG",
      b: {
        x: 1430,
        y: 274
      }
    }, {
      a: "ArmorScalemailDragonGrey.PNG",
      b: {
        x: 1396,
        y: 478
      }
    }, {
      a: "ArmorScalemailDragonHellfire.PNG",
      b: {
        x: 1396,
        y: 444
      }
    }, {
      a: "ArmorScalemailDragonLightBlue.PNG",
      b: {
        x: 1396,
        y: 410
      }
    }, {
      a: "ArmorScalemailDragonPurple.PNG",
      b: {
        x: 1396,
        y: 376
      }
    }, {
      a: "ArmorScalemailDragonRainbow.PNG",
      b: {
        x: 1396,
        y: 342
      }
    }, {
      a: "ArmorScalemailDragonRed.PNG",
      b: {
        x: 1396,
        y: 308
      }
    }, {
      a: "ArmorScalemailDragonWhite.PNG",
      b: {
        x: 1396,
        y: 274
      }
    }, {
      a: "ArmorScalemailDragonYellow.PNG",
      b: {
        x: 1600,
        y: 240
      }
    }, {
      a: "ArrowFlaming.PNG",
      b: {
        x: 1566,
        y: 240
      }
    }, {
      a: "ArrowFlaming2.PNG",
      b: {
        x: 1532,
        y: 240
      }
    }, {
      a: "ArrowGolden.PNG",
      b: {
        x: 1498,
        y: 240
      }
    }, {
      a: "ArrowMagicBlue.PNG",
      b: {
        x: 1464,
        y: 240
      }
    }, {
      a: "ArrowMagicPurple.PNG",
      b: {
        x: 1430,
        y: 240
      }
    }, {
      a: "ArrowPoisoned1.PNG",
      b: {
        x: 1396,
        y: 240
      }
    }, {
      a: "ArrowPoisoned2.PNG",
      b: {
        x: 1362,
        y: 478
      }
    }, {
      a: "ArrowPoisoned3.PNG",
      b: {
        x: 1362,
        y: 444
      }
    }, {
      a: "ArrowPoisoned4.PNG",
      b: {
        x: 1362,
        y: 410
      }
    }, {
      a: "ArrowSilver.PNG",
      b: {
        x: 1362,
        y: 376
      }
    }, {
      a: "ArrowSteel.PNG",
      b: {
        x: 1362,
        y: 342
      }
    }, {
      a: "ArrowWood.PNG",
      b: {
        x: 1362,
        y: 308
      }
    }, {
      a: "Axe01.PNG",
      b: {
        x: 1362,
        y: 274
      }
    }, {
      a: "Axe02.PNG",
      b: {
        x: 1362,
        y: 240
      }
    }, {
      a: "Axe03.PNG",
      b: {
        x: 1600,
        y: 206
      }
    }, {
      a: "Axe04.PNG",
      b: {
        x: 1566,
        y: 206
      }
    },
    {
      a: "Axe05.PNG",
      b: {
        x: 1532,
        y: 206
      }
    }, {
      a: "Axe06.PNG",
      b: {
        x: 1498,
        y: 206
      }
    }, {
      a: "Axe07.PNG",
      b: {
        x: 1464,
        y: 206
      }
    }, {
      a: "Axe08.PNG",
      b: {
        x: 1430,
        y: 206
      }
    }, {
      a: "Axe09.PNG",
      b: {
        x: 1396,
        y: 206
      }
    }, {
      a: "Axe10.PNG",
      b: {
        x: 1362,
        y: 206
      }
    }, {
      a: "Axe11.PNG",
      b: {
        x: 1328,
        y: 478
      }
    }, {
      a: "Axe12.PNG",
      b: {
        x: 1328,
        y: 444
      }
    }, {
      a: "Axe13.PNG",
      b: {
        x: 1328,
        y: 410
      }
    }, {
      a: "Axe14.PNG",
      b: {
        x: 1328,
        y: 376
      }
    }, {
      a: "AxeBattle.PNG",
      b: {
        x: 1328,
        y: 342
      }
    }, {
      a: "AxeBeaked.PNG",
      b: {
        x: 1328,
        y: 308
      }
    }, {
      a: "AxeBroad.PNG",
      b: {
        x: 1328,
        y: 274
      }
    }, {
      a: "AxeGlaive.PNG",
      b: {
        x: 1328,
        y: 240
      }
    }, {
      a: "AxeGolden.PNG",
      b: {
        x: 1328,
        y: 206
      }
    }, {
      a: "AxeGreat.PNG",
      b: {
        x: 1600,
        y: 172
      }
    }, {
      a: "AxeHalberd.PNG",
      b: {
        x: 1566,
        y: 172
      }
    }, {
      a: "AxeLochaber.PNG",
      b: {
        x: 1532,
        y: 172
      }
    }, {
      a: "BallAndChain.PNG",
      b: {
        x: 1498,
        y: 172
      }
    }, {
      a: "BallAndChainGolden.PNG",
      b: {
        x: 1464,
        y: 172
      }
    }, {
      a: "Belt1.PNG",
      b: {
        x: 1430,
        y: 172
      }
    }, {
      a: "Belt2.PNG",
      b: {
        x: 1396,
        y: 172
      }
    }, {
      a: "Belt3.PNG",
      b: {
        x: 1362,
        y: 172
      }
    }, {
      a: "Belt4.PNG",
      b: {
        x: 1328,
        y: 172
      }
    }, {
      a: "BoltFlaming.PNG",
      b: {
        x: 1294,
        y: 478
      }
    }, {
      a: "BoltFlaming2.PNG",
      b: {
        x: 1294,
        y: 444
      }
    }, {
      a: "BoltGolden.PNG",
      b: {
        x: 1294,
        y: 410
      }
    }, {
      a: "BoltMagicGreen.PNG",
      b: {
        x: 1294,
        y: 376
      }
    }, {
      a: "BoltMagicRed.PNG",
      b: {
        x: 1294,
        y: 342
      }
    }, {
      a: "BoltPoisoned.PNG",
      b: {
        x: 1294,
        y: 308
      }
    }, {
      a: "BoltPoisoned2.PNG",
      b: {
        x: 1294,
        y: 274
      }
    }, {
      a: "BoltPoisoned3.PNG",
      b: {
        x: 1294,
        y: 240
      }
    }, {
      a: "BoltPoisoned4.PNG",
      b: {
        x: 1294,
        y: 206
      }
    }, {
      a: "BoltSilver.PNG",
      b: {
        x: 1294,
        y: 172
      }
    }, {
      a: "BoltSteel.PNG",
      b: {
        x: 1600,
        y: 138
      }
    }, {
      a: "BoltWood.PNG",
      b: {
        x: 1566,
        y: 138
      }
    }, {
      a: "BootsGolden.PNG",
      b: {
        x: 1532,
        y: 138
      }
    }, {
      a: "BootsGreen.PNG",
      b: {
        x: 1498,
        y: 138
      }
    }, {
      a: "BootsLeatherHard.PNG",
      b: {
        x: 1464,
        y: 138
      }
    }, {
      a: "BootsLeatherSoft.PNG",
      b: {
        x: 1430,
        y: 138
      }
    }, {
      a: "BootsMetal.PNG",
      b: {
        x: 1396,
        y: 138
      }
    }, {
      a: "Bow.PNG",
      b: {
        x: 1362,
        y: 138
      }
    }, {
      a: "Bow01.PNG",
      b: {
        x: 1328,
        y: 138
      }
    }, {
      a: "Bow02.PNG",
      b: {
        x: 1294,
        y: 138
      }
    }, {
      a: "Bow03.PNG",
      b: {
        x: 1260,
        y: 478
      }
    }, {
      a: "Bow04.PNG",
      b: {
        x: 1260,
        y: 444
      }
    }, {
      a: "Bow05.PNG",
      b: {
        x: 1260,
        y: 410
      }
    }, {
      a: "Bow06.PNG",
      b: {
        x: 1260,
        y: 376
      }
    }, {
      a: "Bow07.PNG",
      b: {
        x: 1260,
        y: 342
      }
    }, {
      a: "Bow08.PNG",
      b: {
        x: 1260,
        y: 308
      }
    }, {
      a: "Bow09.PNG",
      b: {
        x: 1260,
        y: 274
      }
    }, {
      a: "Bow10.PNG",
      b: {
        x: 1260,
        y: 240
      }
    }, {
      a: "BowLong.PNG",
      b: {
        x: 1260,
        y: 206
      }
    }, {
      a: "BowShort.PNG",
      b: {
        x: 1260,
        y: 172
      }
    }, {
      a: "BrokenDagger.PNG",
      b: {
        x: 1260,
        y: 138
      }
    }, {
      a: "BrokenShortSword.PNG",
      b: {
        x: 1600,
        y: 104
      }
    },
    {
      a: "BrokenStick.PNG",
      b: {
        x: 1566,
        y: 104
      }
    }, {
      a: "BrokenSword.PNG",
      b: {
        x: 1532,
        y: 104
      }
    }, {
      a: "CandleStand1.PNG",
      b: {
        x: 1498,
        y: 104
      }
    }, {
      a: "CandleStand2.PNG",
      b: {
        x: 1464,
        y: 104
      }
    }, {
      a: "CapGolden.PNG",
      b: {
        x: 1430,
        y: 104
      }
    }, {
      a: "CapIron.PNG",
      b: {
        x: 1396,
        y: 104
      }
    }, {
      a: "CapLeather.PNG",
      b: {
        x: 1362,
        y: 104
      }
    }, {
      a: "CapLeatherHard.PNG",
      b: {
        x: 1328,
        y: 104
      }
    }, {
      a: "CapMetal.PNG",
      b: {
        x: 1294,
        y: 104
      }
    }, {
      a: "CapSteel.PNG",
      b: {
        x: 1260,
        y: 104
      }
    }, {
      a: "CloakBlue.PNG",
      b: {
        x: 1226,
        y: 478
      }
    }, {
      a: "CloakBrown.PNG",
      b: {
        x: 1226,
        y: 444
      }
    }, {
      a: "CloakDarkGrey.PNG",
      b: {
        x: 1226,
        y: 410
      }
    }, {
      a: "CloakGreen.PNG",
      b: {
        x: 1226,
        y: 376
      }
    }, {
      a: "CloakLightBlue.PNG",
      b: {
        x: 1226,
        y: 342
      }
    }, {
      a: "CloakPurple.PNG",
      b: {
        x: 1226,
        y: 308
      }
    }, {
      a: "CloakRed.PNG",
      b: {
        x: 1226,
        y: 274
      }
    }, {
      a: "CloakSilver.PNG",
      b: {
        x: 1226,
        y: 240
      }
    }, {
      a: "CloakTorn.PNG",
      b: {
        x: 1226,
        y: 206
      }
    }, {
      a: "CloakWhite.PNG",
      b: {
        x: 1226,
        y: 172
      }
    }, {
      a: "Club01.PNG",
      b: {
        x: 1226,
        y: 138
      }
    }, {
      a: "Club02.PNG",
      b: {
        x: 1226,
        y: 104
      }
    }, {
      a: "Club03.PNG",
      b: {
        x: 1600,
        y: 70
      }
    }, {
      a: "Club04.PNG",
      b: {
        x: 1566,
        y: 70
      }
    }, {
      a: "CoinsBronze.PNG",
      b: {
        x: 1532,
        y: 70
      }
    }, {
      a: "CoinsGold.PNG",
      b: {
        x: 1498,
        y: 70
      }
    }, {
      a: "CoinsGoldLarge.PNG",
      b: {
        x: 1464,
        y: 70
      }
    }, {
      a: "CoinsGoldMedium.PNG",
      b: {
        x: 1498,
        y: 70
      }
    }, {
      a: "CoinsGoldSmall.PNG",
      b: {
        x: 1430,
        y: 70
      }
    }, {
      a: "CoinsGreen.PNG",
      b: {
        x: 1396,
        y: 70
      }
    }, {
      a: "CoinsSilver.PNG",
      b: {
        x: 1362,
        y: 70
      }
    }, {
      a: "CoinsTeal.PNG",
      b: {
        x: 1328,
        y: 70
      }
    }, {
      a: "Crossbow2.PNG",
      b: {
        x: 1294,
        y: 70
      }
    }, {
      a: "CrossbowHeavy.PNG",
      b: {
        x: 1260,
        y: 70
      }
    }, {
      a: "CrossbowLight.PNG",
      b: {
        x: 1226,
        y: 70
      }
    }, {
      a: "CrownGolden.PNG",
      b: {
        x: 1192,
        y: 478
      }
    }, {
      a: "CrownIron.PNG",
      b: {
        x: 1192,
        y: 444
      }
    }, {
      a: "CrownIronJeweled.PNG",
      b: {
        x: 1192,
        y: 410
      }
    }, {
      a: "CrownJeweled.PNG",
      b: {
        x: 1192,
        y: 376
      }
    }, {
      a: "CrownOfTheMagi.PNG",
      b: {
        x: 1192,
        y: 342
      }
    }, {
      a: "CrystalsBlue.PNG",
      b: {
        x: 1192,
        y: 308
      }
    }, {
      a: "CrystalsGreen.PNG",
      b: {
        x: 1192,
        y: 274
      }
    }, {
      a: "CrystalsPurple.PNG",
      b: {
        x: 1192,
        y: 240
      }
    }, {
      a: "Dagger.PNG",
      b: {
        x: 1192,
        y: 206
      }
    }, {
      a: "Dagger01.PNG",
      b: {
        x: 1192,
        y: 172
      }
    }, {
      a: "Dagger02.PNG",
      b: {
        x: 1192,
        y: 138
      }
    }, {
      a: "Dagger03.PNG",
      b: {
        x: 1192,
        y: 104
      }
    }, {
      a: "Dagger04.PNG",
      b: {
        x: 1192,
        y: 70
      }
    }, {
      a: "Dagger05.PNG",
      b: {
        x: 1600,
        y: 36
      }
    }, {
      a: "Dagger06.PNG",
      b: {
        x: 1566,
        y: 36
      }
    }, {
      a: "Dagger07.PNG",
      b: {
        x: 1532,
        y: 36
      }
    }, {
      a: "Dagger08.PNG",
      b: {
        x: 1498,
        y: 36
      }
    }, {
      a: "Dagger09.PNG",
      b: {
        x: 1464,
        y: 36
      }
    }, {
      a: "Dagger10.PNG",
      b: {
        x: 1430,
        y: 36
      }
    }, {
      a: "DaggerGauche.PNG",
      b: {
        x: 1396,
        y: 36
      }
    }, {
      a: "DarkLord_Armor.PNG",
      b: {
        x: 1362,
        y: 36
      }
    }, {
      a: "DarkLord_Belt.PNG",
      b: {
        x: 1328,
        y: 36
      }
    }, {
      a: "DarkLord_Boots.PNG",
      b: {
        x: 1294,
        y: 36
      }
    }, {
      a: "DarkLord_Gauntlets.PNG",
      b: {
        x: 1260,
        y: 36
      }
    }, {
      a: "DarkLord_Helm.PNG",
      b: {
        x: 1226,
        y: 36
      }
    }, {
      a: "DarkLord_Shield.PNG",
      b: {
        x: 1192,
        y: 36
      }
    }, {
      a: "DarkLord_Sword.PNG",
      b: {
        x: 1158,
        y: 478
      }
    }, {
      a: "Dart.PNG",
      b: {
        x: 1158,
        y: 444
      }
    }, {
      a: "DartPoisonBlue.PNG",
      b: {
        x: 1158,
        y: 410
      }
    }, {
      a: "DartPoisonGreen.PNG",
      b: {
        x: 1158,
        y: 376
      }
    }, {
      a: "DefenderShield01.PNG",
      b: {
        x: 1158,
        y: 342
      }
    }, {
      a: "DiscoloredSpot.PNG",
      b: {
        x: 1158,
        y: 308
      }
    }, {
      a: "DoubleFlail01.PNG",
      b: {
        x: 1158,
        y: 274
      }
    }, {
      a: "DoubleFlail02.PNG",
      b: {
        x: 1158,
        y: 240
      }
    }, {
      a: "DoubleFlail03.PNG",
      b: {
        x: 1158,
        y: 206
      }
    }, {
      a: "Flail01.PNG",
      b: {
        x: 1158,
        y: 172
      }
    }, {
      a: "Flail02.PNG",
      b: {
        x: 1158,
        y: 138
      }
    }, {
      a: "Flail03.PNG",
      b: {
        x: 1158,
        y: 104
      }
    }, {
      a: "Flail04.PNG",
      b: {
        x: 1158,
        y: 70
      }
    }, {
      a: "Flail05.PNG",
      b: {
        x: 1158,
        y: 36
      }
    }, {
      a: "Flail06.PNG",
      b: {
        x: 1600,
        y: 2
      }
    }, {
      a: "Flail07.PNG",
      b: {
        x: 1566,
        y: 2
      }
    }, {
      a: "FlailSteel.PNG",
      b: {
        x: 1532,
        y: 2
      }
    }, {
      a: "FlailTwoHanded.PNG",
      b: {
        x: 1498,
        y: 2
      }
    }, {
      a: "FlailWood.PNG",
      b: {
        x: 1464,
        y: 2
      }
    }, {
      a: "FoodAle.PNG",
      b: {
        x: 1430,
        y: 2
      }
    }, {
      a: "FoodBiscuit.PNG",
      b: {
        x: 1396,
        y: 2
      }
    }, {
      a: "FoodBread.PNG",
      b: {
        x: 1362,
        y: 2
      }
    }, {
      a: "FoodDrumstick.PNG",
      b: {
        x: 1328,
        y: 2
      }
    }, {
      a: "FoodJerky.PNG",
      b: {
        x: 1294,
        y: 2
      }
    }, {
      a: "FoodMead.PNG",
      b: {
        x: 1260,
        y: 2
      }
    }, {
      a: "FoodMushroomBlack.PNG",
      b: {
        x: 1226,
        y: 2
      }
    }, {
      a: "FoodMushroomBlue.PNG",
      b: {
        x: 1192,
        y: 2
      }
    }, {
      a: "FoodMushroomBrown.PNG",
      b: {
        x: 1158,
        y: 2
      }
    }, {
      a: "FoodMushroomGreen.PNG",
      b: {
        x: 1124,
        y: 478
      }
    }, {
      a: "FoodMushroomGreen2.PNG",
      b: {
        x: 1124,
        y: 444
      }
    }, {
      a: "FoodMushroomGrey.PNG",
      b: {
        x: 1124,
        y: 410
      }
    }, {
      a: "FoodMushroomGrey2.PNG",
      b: {
        x: 1124,
        y: 376
      }
    }, {
      a: "FoodMushroomOrange.PNG",
      b: {
        x: 1124,
        y: 342
      }
    }, {
      a: "FoodMushroomPurple.PNG",
      b: {
        x: 1124,
        y: 308
      }
    }, {
      a: "FoodMushroomRed.PNG",
      b: {
        x: 1124,
        y: 274
      }
    }, {
      a: "FoodMushroomRed2.PNG",
      b: {
        x: 1124,
        y: 240
      }
    }, {
      a: "FoodMushroomSilver.PNG",
      b: {
        x: 1124,
        y: 206
      }
    }, {
      a: "FoodMushroomTan.PNG",
      b: {
        x: 1124,
        y: 172
      }
    }, {
      a: "FoodMushroomTeal.PNG",
      b: {
        x: 1124,
        y: 138
      }
    }, {
      a: "FoodMushroomWhite.PNG",
      b: {
        x: 1124,
        y: 104
      }
    }, {
      a: "FoodMushroomYellow.PNG",
      b: {
        x: 1124,
        y: 70
      }
    }, {
      a: "FoodShank.PNG",
      b: {
        x: 1124,
        y: 36
      }
    }, {
      a: "FoodSlimeMold.PNG",
      b: {
        x: 1124,
        y: 2
      }
    }, {
      a: "GeneralItems.PNG",
      b: {
        x: 1090,
        y: 478
      }
    }, {
      a: "GlovesGolden.PNG",
      b: {
        x: 1090,
        y: 444
      }
    }, {
      a: "GlovesGreen.PNG",
      b: {
        x: 1090,
        y: 410
      }
    }, {
      a: "GlovesLeatherHard.PNG",
      b: {
        x: 1090,
        y: 376
      }
    }, {
      a: "GlovesLeatherSoft.PNG",
      b: {
        x: 1090,
        y: 342
      }
    }, {
      a: "GlovesSteel.PNG",
      b: {
        x: 1090,
        y: 308
      }
    }, {
      a: "GlovesSteelBlue.PNG",
      b: {
        x: 1090,
        y: 274
      }
    }, {
      a: "GlyphGreen.PNG",
      b: {
        x: 1090,
        y: 240
      }
    }, {
      a: "GlyphRed.PNG",
      b: {
        x: 1090,
        y: 206
      }
    }, {
      a: "GlyphYellow.PNG",
      b: {
        x: 1090,
        y: 172
      }
    }, {
      a: "GuardHelm01.PNG",
      b: {
        x: 1090,
        y: 138
      }
    }, {
      a: "Hammer01.PNG",
      b: {
        x: 1090,
        y: 104
      }
    }, {
      a: "Hammer02.PNG",
      b: {
        x: 1090,
        y: 70
      }
    }, {
      a: "Hammer03.PNG",
      b: {
        x: 1090,
        y: 36
      }
    }, {
      a: "Hammer04.PNG",
      b: {
        x: 1090,
        y: 2
      }
    }, {
      a: "Hammer05.PNG",
      b: {
        x: 1056,
        y: 478
      }
    }, {
      a: "HammerGiant.PNG",
      b: {
        x: 1056,
        y: 444
      }
    }, {
      a: "HammerGolden.PNG",
      b: {
        x: 1056,
        y: 410
      }
    }, {
      a: "HammerLucerne.PNG",
      b: {
        x: 1056,
        y: 376
      }
    }, {
      a: "HammerWar.PNG",
      b: {
        x: 1056,
        y: 342
      }
    }, {
      a: "HatGreen.PNG",
      b: {
        x: 1056,
        y: 308
      }
    }, {
      a: "HelmHorned.PNG",
      b: {
        x: 1056,
        y: 274
      }
    }, {
      a: "IronShot.PNG",
      b: {
        x: 1056,
        y: 240
      }
    }, {
      a: "Jewels.PNG",
      b: {
        x: 1056,
        y: 206
      }
    }, {
      a: "JewelsBlue.PNG",
      b: {
        x: 1056,
        y: 172
      }
    }, {
      a: "JewelsRed.PNG",
      b: {
        x: 1056,
        y: 138
      }
    }, {
      a: "KeyAnkh.PNG",
      b: {
        x: 1056,
        y: 104
      }
    }, {
      a: "KeyBone.PNG",
      b: {
        x: 1056,
        y: 70
      }
    }, {
      a: "KeyBrass.PNG",
      b: {
        x: 1056,
        y: 36
      }
    }, {
      a: "KeyCopper.PNG",
      b: {
        x: 1056,
        y: 2
      }
    }, {
      a: "KeyDagger.PNG",
      b: {
        x: 1022,
        y: 478
      }
    }, {
      a: "KeyDruid.PNG",
      b: {
        x: 1022,
        y: 444
      }
    }, {
      a: "KeyFire.PNG",
      b: {
        x: 1022,
        y: 410
      }
    }, {
      a: "KeyIce.PNG",
      b: {
        x: 1022,
        y: 376
      }
    }, {
      a: "KeyIron.PNG",
      b: {
        x: 1022,
        y: 342
      }
    }, {
      a: "KeyMetal.PNG",
      b: {
        x: 1022,
        y: 308
      }
    }, {
      a: "KeyMoon.PNG",
      b: {
        x: 1022,
        y: 274
      }
    }, {
      a: "KeyRoyal.PNG",
      b: {
        x: 1022,
        y: 240
      }
    }, {
      a: "KeySkull.PNG",
      b: {
        x: 1022,
        y: 206
      }
    }, {
      a: "KeySun.PNG",
      b: {
        x: 1022,
        y: 172
      }
    }, {
      a: "KeyTap.PNG",
      b: {
        x: 1022,
        y: 138
      }
    }, {
      a: "KeyTroll.PNG",
      b: {
        x: 1022,
        y: 104
      }
    }, {
      a: "Knight_Armor.PNG",
      b: {
        x: 1022,
        y: 70
      }
    }, {
      a: "Knight_Belt.PNG",
      b: {
        x: 1022,
        y: 36
      }
    }, {
      a: "Knight_Boots.PNG",
      b: {
        x: 1022,
        y: 2
      }
    }, {
      a: "Knight_Gauntlets.PNG",
      b: {
        x: 988,
        y: 478
      }
    }, {
      a: "Knight_Helm.PNG",
      b: {
        x: 988,
        y: 444
      }
    }, {
      a: "Knight_Shield.PNG",
      b: {
        x: 988,
        y: 410
      }
    }, {
      a: "Knight_Sword.PNG",
      b: {
        x: 988,
        y: 376
      }
    }, {
      a: "Lance.PNG",
      b: {
        x: 988,
        y: 342
      }
    }, {
      a: "Lantern.PNG",
      b: {
        x: 988,
        y: 308
      }
    }, {
      a: "LanternBronze.PNG",
      b: {
        x: 988,
        y: 274
      }
    }, {
      a: "LightChalice.PNG",
      b: {
        x: 988,
        y: 240
      }
    }, {
      a: "LightOrb.PNG",
      b: {
        x: 988,
        y: 206
      }
    }, {
      a: "LightStar.PNG",
      b: {
        x: 988,
        y: 172
      }
    }, {
      a: "LongMail01.PNG",
      b: {
        x: 988,
        y: 138
      }
    }, {
      a: "Mace.PNG",
      b: {
        x: 988,
        y: 104
      }
    }, {
      a: "Mace01.PNG",
      b: {
        x: 988,
        y: 70
      }
    }, {
      a: "Mace02.PNG",
      b: {
        x: 988,
        y: 36
      }
    }, {
      a: "Mace03.PNG",
      b: {
        x: 988,
        y: 2
      }
    }, {
      a: "Mace04.PNG",
      b: {
        x: 954,
        y: 478
      }
    }, {
      a: "Mace05.PNG",
      b: {
        x: 954,
        y: 444
      }
    }, {
      a: "Mace06.PNG",
      b: {
        x: 954,
        y: 410
      }
    }, {
      a: "Mace07.PNG",
      b: {
        x: 954,
        y: 376
      }
    }, {
      a: "Mace08.PNG",
      b: {
        x: 954,
        y: 342
      }
    }, {
      a: "MaceGolden.PNG",
      b: {
        x: 954,
        y: 308
      }
    }, {
      a: "MaceMagic.PNG",
      b: {
        x: 954,
        y: 274
      }
    }, {
      a: "MaceWar.PNG",
      b: {
        x: 954,
        y: 240
      }
    }, {
      a: "MaceWood.PNG",
      b: {
        x: 954,
        y: 206
      }
    }, {
      a: "NecklaceBronzeJewelRed.PNG",
      b: {
        x: 954,
        y: 172
      }
    }, {
      a: "NecklaceGoldJewelBlue.PNG",
      b: {
        x: 954,
        y: 138
      }
    }, {
      a: "NecklaceGoldJewelGreen.PNG",
      b: {
        x: 954,
        y: 104
      }
    }, {
      a: "NecklaceGoldJewelSilver.PNG",
      b: {
        x: 954,
        y: 70
      }
    }, {
      a: "NecklaceGoldJewelSilver2.PNG",
      b: {
        x: 954,
        y: 36
      }
    }, {
      a: "NecklaceJewelBlue.PNG",
      b: {
        x: 954,
        y: 2
      }
    }, {
      a: "NecklaceJewelRed.PNG",
      b: {
        x: 920,
        y: 478
      }
    }, {
      a: "NecklaceJewelRed2.PNG",
      b: {
        x: 920,
        y: 444
      }
    }, {
      a: "NecklaceJewelRed3.PNG",
      b: {
        x: 920,
        y: 410
      }
    }, {
      a: "NecklaceJewelSilver.PNG",
      b: {
        x: 920,
        y: 376
      }
    }, {
      a: "NecklaceJewelSilver2.PNG",
      b: {
        x: 920,
        y: 342
      }
    }, {
      a: "NecklaceJewelSilver3.PNG",
      b: {
        x: 920,
        y: 308
      }
    }, {
      a: "NecklaceJewelSilver4.PNG",
      b: {
        x: 920,
        y: 274
      }
    }, {
      a: "NecklaceJewelSilver5.PNG",
      b: {
        x: 920,
        y: 240
      }
    }, {
      a: "NecklaceSilverJewelGreen.PNG",
      b: {
        x: 920,
        y: 206
      }
    }, {
      a: "NecklaceSilverJewelOrange.PNG",
      b: {
        x: 920,
        y: 172
      }
    }, {
      a: "NewBoots01.PNG",
      b: {
        x: 920,
        y: 138
      }
    }, {
      a: "NewBoots02.PNG",
      b: {
        x: 920,
        y: 104
      }
    }, {
      a: "NewBoots03.PNG",
      b: {
        x: 920,
        y: 70
      }
    }, {
      a: "NewBoots04.PNG",
      b: {
        x: 920,
        y: 36
      }
    }, {
      a: "NewBoots05.PNG",
      b: {
        x: 920,
        y: 2
      }
    }, {
      a: "NewBoots06.PNG",
      b: {
        x: 886,
        y: 478
      }
    }, {
      a: "Nunchaku.PNG",
      b: {
        x: 886,
        y: 444
      }
    }, {
      a: "NunchakuGolden.PNG",
      b: {
        x: 886,
        y: 410
      }
    }, {
      a: "Pebbles.PNG",
      b: {
        x: 886,
        y: 376
      }
    }, {
      a: "Pick.PNG",
      b: {
        x: 886,
        y: 342
      }
    }, {
      a: "Pick2.PNG",
      b: {
        x: 886,
        y: 308
      }
    }, {
      a: "PickGolden.PNG",
      b: {
        x: 886,
        y: 274
      }
    }, {
      a: "PickSteel.PNG",
      b: {
        x: 886,
        y: 240
      }
    }, {
      a: "Pike.PNG",
      b: {
        x: 886,
        y: 206
      }
    }, {
      a: "PotionAquamarine.PNG",
      b: {
        x: 886,
        y: 172
      }
    }, {
      a: "PotionEmerald.PNG",
      b: {
        x: 886,
        y: 138
      }
    }, {
      a: "PotionEmerald2.PNG",
      b: {
        x: 886,
        y: 104
      }
    }, {
      a: "PotionLargeGreen.PNG",
      b: {
        x: 886,
        y: 70
      }
    }, {
      a: "PotionLargeGrey.PNG",
      b: {
        x: 886,
        y: 36
      }
    }, {
      a: "PotionLargeRose.PNG",
      b: {
        x: 886,
        y: 2
      }
    }, {
      a: "PotionLargeTan.PNG",
      b: {
        x: 852,
        y: 478
      }
    }, {
      a: "PotionLargeTan2.PNG",
      b: {
        x: 852,
        y: 444
      }
    }, {
      a: "PotionLargeViolet.PNG",
      b: {
        x: 852,
        y: 410
      }
    }, {
      a: "PotionLargeViolet2.PNG",
      b: {
        x: 852,
        y: 376
      }
    }, {
      a: "PotionLargeYellow.PNG",
      b: {
        x: 852,
        y: 342
      }
    }, {
      a: "PotionPurple.PNG",
      b: {
        x: 852,
        y: 308
      }
    }, {
      a: "PotionRed.PNG",
      b: {
        x: 852,
        y: 274
      }
    }, {
      a: "PotionRoundedDarkGreen.PNG",
      b: {
        x: 852,
        y: 240
      }
    }, {
      a: "PotionRoundedTopaz.PNG",
      b: {
        x: 852,
        y: 206
      }
    }, {
      a: "PotionShortBlue.PNG",
      b: {
        x: 852,
        y: 172
      }
    }, {
      a: "PotionShortBrown.PNG",
      b: {
        x: 852,
        y: 138
      }
    }, {
      a: "PotionShortGreen.PNG",
      b: {
        x: 852,
        y: 104
      }
    }, {
      a: "PotionShortOrange.PNG",
      b: {
        x: 852,
        y: 70
      }
    }, {
      a: "PotionShortPink.PNG",
      b: {
        x: 852,
        y: 36
      }
    }, {
      a: "PotionShortPurple.PNG",
      b: {
        x: 852,
        y: 2
      }
    }, {
      a: "PotionShortPurple2.PNG",
      b: {
        x: 818,
        y: 478
      }
    }, {
      a: "PotionShortRed.PNG",
      b: {
        x: 818,
        y: 444
      }
    }, {
      a: "PotionShortRose.PNG",
      b: {
        x: 818,
        y: 410
      }
    }, {
      a: "PotionShortRuby.PNG",
      b: {
        x: 818,
        y: 376
      }
    }, {
      a: "PotionShortSilver.PNG",
      b: {
        x: 818,
        y: 342
      }
    }, {
      a: "PotionShortTan.PNG",
      b: {
        x: 818,
        y: 308
      }
    }, {
      a: "PotionShortTan2.PNG",
      b: {
        x: 818,
        y: 274
      }
    }, {
      a: "PotionShortViolet.PNG",
      b: {
        x: 818,
        y: 240
      }
    }, {
      a: "PotionShortYellow.PNG",
      b: {
        x: 818,
        y: 206
      }
    }, {
      a: "PotionSmallGrey.PNG",
      b: {
        x: 818,
        y: 172
      }
    }, {
      a: "PotionSmallPurple.PNG",
      b: {
        x: 818,
        y: 138
      }
    }, {
      a: "PotionSmallRounededBrown.PNG",
      b: {
        x: 818,
        y: 104
      }
    }, {
      a: "PotionSmallTriangularTeal.PNG",
      b: {
        x: 818,
        y: 70
      }
    }, {
      a: "PotionSquareBlue.PNG",
      b: {
        x: 818,
        y: 36
      }
    }, {
      a: "PotionTallBlue.PNG",
      b: {
        x: 818,
        y: 2
      }
    }, {
      a: "PotionTallBlue2.PNG",
      b: {
        x: 784,
        y: 478
      }
    }, {
      a: "PotionTallBrown.PNG",
      b: {
        x: 784,
        y: 444
      }
    }, {
      a: "PotionTallGreen.PNG",
      b: {
        x: 784,
        y: 410
      }
    }, {
      a: "PotionTallGreen2.PNG",
      b: {
        x: 784,
        y: 376
      }
    }, {
      a: "PotionTallGrey.PNG",
      b: {
        x: 784,
        y: 342
      }
    }, {
      a: "PotionTallMagenta.PNG",
      b: {
        x: 784,
        y: 308
      }
    }, {
      a: "PotionTallPurple.PNG",
      b: {
        x: 784,
        y: 274
      }
    }, {
      a: "PotionTallRed.PNG",
      b: {
        x: 784,
        y: 240
      }
    }, {
      a: "PotionTallRed2.PNG",
      b: {
        x: 784,
        y: 206
      }
    }, {
      a: "PotionTallRose.PNG",
      b: {
        x: 784,
        y: 172
      }
    }, {
      a: "PotionTallRuby.PNG",
      b: {
        x: 784,
        y: 138
      }
    }, {
      a: "PotionTallSilver.PNG",
      b: {
        x: 784,
        y: 104
      }
    }, {
      a: "PotionTallSilver2.PNG",
      b: {
        x: 784,
        y: 70
      }
    }, {
      a: "PotionTallSilver3.PNG",
      b: {
        x: 784,
        y: 36
      }
    }, {
      a: "PotionTallSilver4.PNG",
      b: {
        x: 784,
        y: 2
      }
    }, {
      a: "PotionTallTan.PNG",
      b: {
        x: 750,
        y: 478
      }
    }, {
      a: "PotionTallWhite.PNG",
      b: {
        x: 750,
        y: 444
      }
    }, {
      a: "PotionTallYellow.PNG",
      b: {
        x: 750,
        y: 410
      }
    }, {
      a: "PotionTallYellow2.PNG",
      b: {
        x: 750,
        y: 376
      }
    }, {
      a: "PotionTallYellow3.PNG",
      b: {
        x: 750,
        y: 342
      }
    }, {
      a: "PotionTinyBrown.PNG",
      b: {
        x: 750,
        y: 308
      }
    }, {
      a: "PotionTinyGrey.PNG",
      b: {
        x: 750,
        y: 274
      }
    }, {
      a: "PotionTriangleGrey.PNG",
      b: {
        x: 750,
        y: 240
      }
    }, {
      a: "PotionTriangularGrey.PNG",
      b: {
        x: 750,
        y: 206
      }
    }, {
      a: "PotionTriangularRuby.PNG",
      b: {
        x: 750,
        y: 172
      }
    }, {
      a: "PotionTriangularYellow.PNG",
      b: {
        x: 750,
        y: 138
      }
    }, {
      a: "PotteryBroken.PNG",
      b: {
        x: 750,
        y: 104
      }
    }, {
      a: "Quarterstaff.PNG",
      b: {
        x: 750,
        y: 70
      }
    }, {
      a: "QuarterstaffLight.PNG",
      b: {
        x: 750,
        y: 36
      }
    }, {
      a: "RingBronze.PNG",
      b: {
        x: 750,
        y: 2
      }
    }, {
      a: "RingGold.PNG",
      b: {
        x: 716,
        y: 478
      }
    }, {
      a: "RingGoldJeweledBlue.PNG",
      b: {
        x: 716,
        y: 444
      }
    }, {
      a: "RingGoldJeweledRed.PNG",
      b: {
        x: 716,
        y: 410
      }
    }, {
      a: "RingGoldJeweledYellowMagic.PNG",
      b: {
        x: 716,
        y: 376
      }
    }, {
      a: "RingGoldMagic.PNG",
      b: {
        x: 716,
        y: 342
      }
    }, {
      a: "RingJewelBlack.PNG",
      b: {
        x: 716,
        y: 308
      }
    }, {
      a: "RingJewelBlue.PNG",
      b: {
        x: 716,
        y: 274
      }
    }, {
      a: "RingJewelGreen.PNG",
      b: {
        x: 716,
        y: 240
      }
    }, {
      a: "RingJewelOrange.PNG",
      b: {
        x: 716,
        y: 206
      }
    }, {
      a: "RingJewelPurple.PNG",
      b: {
        x: 716,
        y: 172
      }
    }, {
      a: "RingJewelRed.PNG",
      b: {
        x: 716,
        y: 138
      }
    }, {
      a: "RingJeweledRed2.PNG",
      b: {
        x: 716,
        y: 104
      }
    }, {
      a: "RingPlainGrey.PNG",
      b: {
        x: 716,
        y: 70
      }
    }, {
      a: "RingPlainSilver.PNG",
      b: {
        x: 716,
        y: 36
      }
    }, {
      a: "RingPurple.PNG",
      b: {
        x: 716,
        y: 2
      }
    }, {
      a: "RingSilverJeweledBlueMagic.PNG",
      b: {
        x: 682,
        y: 478
      }
    }, {
      a: "RingSilverJeweledGreen.PNG",
      b: {
        x: 682,
        y: 444
      }
    }, {
      a: "RingSilverJeweledGreenMagic.PNG",
      b: {
        x: 682,
        y: 410
      }
    }, {
      a: "RingSilverJeweledMagenta.PNG",
      b: {
        x: 682,
        y: 376
      }
    }, {
      a: "RingSilverJeweledPurple.PNG",
      b: {
        x: 682,
        y: 342
      }
    }, {
      a: "RingSilverJeweledRedMagic.PNG",
      b: {
        x: 682,
        y: 308
      }
    }, {
      a: "RingSilverJeweledSilver.PNG",
      b: {
        x: 682,
        y: 274
      }
    }, {
      a: "RingSilverJeweledSilver2.PNG",
      b: {
        x: 682,
        y: 240
      }
    }, {
      a: "RobeBlue.PNG",
      b: {
        x: 682,
        y: 206
      }
    }, {
      a: "RobeGreen.PNG",
      b: {
        x: 682,
        y: 172
      }
    }, {
      a: "RobePurple.PNG",
      b: {
        x: 682,
        y: 138
      }
    }, {
      a: "RobeRed.PNG",
      b: {
        x: 682,
        y: 104
      }
    }, {
      a: "RodBlack.PNG",
      b: {
        x: 682,
        y: 70
      }
    }, {
      a: "RodBlackGrey.PNG",
      b: {
        x: 682,
        y: 36
      }
    }, {
      a: "RodBronze.PNG",
      b: {
        x: 682,
        y: 2
      }
    }, {
      a: "RodBronzeGold.PNG",
      b: {
        x: 648,
        y: 478
      }
    }, {
      a: "RodBronzeGrey.PNG",
      b: {
        x: 648,
        y: 444
      }
    }, {
      a: "RodDarkGrey.PNG",
      b: {
        x: 648,
        y: 410
      }
    }, {
      a: "RodGoldBronze.PNG",
      b: {
        x: 648,
        y: 376
      }
    }, {
      a: "RodSteel.PNG",
      b: {
        x: 648,
        y: 342
      }
    }, {
      a: "RodTeal.PNG",
      b: {
        x: 648,
        y: 308
      }
    }, {
      a: "Saber.PNG",
      b: {
        x: 648,
        y: 274
      }
    }, {
      a: "SabreSteel.PNG",
      b: {
        x: 648,
        y: 240
      }
    }, {
      a: "Scepter01.PNG",
      b: {
        x: 648,
        y: 206
      }
    }, {
      a: "Scepter02.PNG",
      b: {
        x: 648,
        y: 172
      }
    }, {
      a: "Scepter03.PNG",
      b: {
        x: 648,
        y: 138
      }
    }, {
      a: "Scepter04.PNG",
      b: {
        x: 648,
        y: 104
      }
    }, {
      a: "Scepter05.PNG",
      b: {
        x: 648,
        y: 70
      }
    }, {
      a: "Scepter06.PNG",
      b: {
        x: 648,
        y: 36
      }
    }, {
      a: "Scepter07.PNG",
      b: {
        x: 648,
        y: 2
      }
    }, {
      a: "Scepter08.PNG",
      b: {
        x: 614,
        y: 478
      }
    }, {
      a: "Scepter09.PNG",
      b: {
        x: 614,
        y: 444
      }
    }, {
      a: "Scepter10.PNG",
      b: {
        x: 614,
        y: 410
      }
    }, {
      a: "Scepter11.PNG",
      b: {
        x: 614,
        y: 376
      }
    }, {
      a: "Scepter12.PNG",
      b: {
        x: 614,
        y: 342
      }
    }, {
      a: "Scepter13.PNG",
      b: {
        x: 614,
        y: 308
      }
    }, {
      a: "Scepter14.PNG",
      b: {
        x: 614,
        y: 274
      }
    }, {
      a: "Scepter15.PNG",
      b: {
        x: 614,
        y: 240
      }
    }, {
      a: "Scepter16.PNG",
      b: {
        x: 614,
        y: 206
      }
    }, {
      a: "Scepter17.PNG",
      b: {
        x: 614,
        y: 172
      }
    }, {
      a: "Scepter18.PNG",
      b: {
        x: 614,
        y: 138
      }
    }, {
      a: "Scroll0001.PNG",
      b: {
        x: 614,
        y: 104
      }
    }, {
      a: "Scroll0002.PNG",
      b: {
        x: 614,
        y: 70
      }
    }, {
      a: "Scroll0003.PNG",
      b: {
        x: 614,
        y: 36
      }
    }, {
      a: "Scroll0004.PNG",
      b: {
        x: 614,
        y: 2
      }
    }, {
      a: "Scroll0005.PNG",
      b: {
        x: 580,
        y: 478
      }
    }, {
      a: "Scroll0006.PNG",
      b: {
        x: 580,
        y: 444
      }
    }, {
      a: "Scroll0007.PNG",
      b: {
        x: 580,
        y: 410
      }
    }, {
      a: "Scroll0008.PNG",
      b: {
        x: 580,
        y: 376
      }
    }, {
      a: "Scroll0009.PNG",
      b: {
        x: 580,
        y: 342
      }
    }, {
      a: "Scroll0010.PNG",
      b: {
        x: 580,
        y: 308
      }
    }, {
      a: "Scroll0011.PNG",
      b: {
        x: 580,
        y: 274
      }
    }, {
      a: "Scroll0012.PNG",
      b: {
        x: 580,
        y: 240
      }
    }, {
      a: "Scroll0013.PNG",
      b: {
        x: 580,
        y: 206
      }
    }, {
      a: "Scroll0014.PNG",
      b: {
        x: 580,
        y: 172
      }
    }, {
      a: "Scroll0015.PNG",
      b: {
        x: 580,
        y: 138
      }
    }, {
      a: "Scroll0016.PNG",
      b: {
        x: 580,
        y: 104
      }
    }, {
      a: "Scroll0017.PNG",
      b: {
        x: 580,
        y: 70
      }
    }, {
      a: "Scroll0018.PNG",
      b: {
        x: 580,
        y: 36
      }
    }, {
      a: "Scroll0019.PNG",
      b: {
        x: 580,
        y: 2
      }
    }, {
      a: "Scroll0020.PNG",
      b: {
        x: 546,
        y: 478
      }
    }, {
      a: "Scroll0021.PNG",
      b: {
        x: 546,
        y: 444
      }
    }, {
      a: "Scroll0022.PNG",
      b: {
        x: 546,
        y: 410
      }
    }, {
      a: "Scroll0023.PNG",
      b: {
        x: 546,
        y: 376
      }
    }, {
      a: "Scroll0024.PNG",
      b: {
        x: 546,
        y: 342
      }
    }, {
      a: "Scroll0025.PNG",
      b: {
        x: 546,
        y: 308
      }
    }, {
      a: "Scroll0026.PNG",
      b: {
        x: 546,
        y: 274
      }
    }, {
      a: "Scroll0027.PNG",
      b: {
        x: 546,
        y: 240
      }
    }, {
      a: "Scroll0028.PNG",
      b: {
        x: 546,
        y: 206
      }
    }, {
      a: "Scroll0029.PNG",
      b: {
        x: 546,
        y: 172
      }
    }, {
      a: "Scroll0030.PNG",
      b: {
        x: 546,
        y: 138
      }
    }, {
      a: "Scroll0031.PNG",
      b: {
        x: 546,
        y: 104
      }
    }, {
      a: "Scroll0032.PNG",
      b: {
        x: 546,
        y: 70
      }
    }, {
      a: "Scroll0033.PNG",
      b: {
        x: 546,
        y: 36
      }
    }, {
      a: "Scroll0034.PNG",
      b: {
        x: 546,
        y: 2
      }
    }, {
      a: "Scroll0035.PNG",
      b: {
        x: 512,
        y: 478
      }
    }, {
      a: "Scroll0036.PNG",
      b: {
        x: 512,
        y: 444
      }
    }, {
      a: "Scroll0037.PNG",
      b: {
        x: 512,
        y: 410
      }
    }, {
      a: "Scroll0038.PNG",
      b: {
        x: 512,
        y: 376
      }
    }, {
      a: "Scroll0039.PNG",
      b: {
        x: 512,
        y: 342
      }
    }, {
      a: "Scroll0040.PNG",
      b: {
        x: 512,
        y: 308
      }
    }, {
      a: "Scroll0041.PNG",
      b: {
        x: 512,
        y: 274
      }
    }, {
      a: "Scroll0042.PNG",
      b: {
        x: 512,
        y: 240
      }
    }, {
      a: "Scroll0043.PNG",
      b: {
        x: 512,
        y: 206
      }
    }, {
      a: "Scroll0044.PNG",
      b: {
        x: 512,
        y: 172
      }
    }, {
      a: "Scroll0045.PNG",
      b: {
        x: 512,
        y: 138
      }
    }, {
      a: "Scroll0046.PNG",
      b: {
        x: 512,
        y: 104
      }
    }, {
      a: "Scroll0047.PNG",
      b: {
        x: 512,
        y: 70
      }
    }, {
      a: "Scroll0048.PNG",
      b: {
        x: 512,
        y: 36
      }
    }, {
      a: "Scroll0049.PNG",
      b: {
        x: 512,
        y: 2
      }
    }, {
      a: "Scroll0050.PNG",
      b: {
        x: 478,
        y: 478
      }
    }, {
      a: "Scroll0051.PNG",
      b: {
        x: 478,
        y: 444
      }
    }, {
      a: "Scroll0052.PNG",
      b: {
        x: 478,
        y: 410
      }
    }, {
      a: "Scroll0053.PNG",
      b: {
        x: 478,
        y: 376
      }
    }, {
      a: "Scroll0054.PNG",
      b: {
        x: 478,
        y: 342
      }
    }, {
      a: "Scroll0072.PNG",
      b: {
        x: 478,
        y: 308
      }
    }, {
      a: "Scroll0091.PNG",
      b: {
        x: 478,
        y: 274
      }
    }, {
      a: "Scroll0092.PNG",
      b: {
        x: 478,
        y: 240
      }
    }, {
      a: "Scroll0093.PNG",
      b: {
        x: 478,
        y: 206
      }
    }, {
      a: "Scroll0094.PNG",
      b: {
        x: 478,
        y: 172
      }
    }, {
      a: "Scroll0095.PNG",
      b: {
        x: 478,
        y: 138
      }
    }, {
      a: "Scroll0096.PNG",
      b: {
        x: 478,
        y: 104
      }
    }, {
      a: "Scroll0097.PNG",
      b: {
        x: 478,
        y: 70
      }
    }, {
      a: "Scroll0098.PNG",
      b: {
        x: 478,
        y: 36
      }
    }, {
      a: "Scroll0099.PNG",
      b: {
        x: 478,
        y: 2
      }
    }, {
      a: "Scroll0100.PNG",
      b: {
        x: 444,
        y: 478
      }
    }, {
      a: "Scroll0101.PNG",
      b: {
        x: 444,
        y: 444
      }
    }, {
      a: "Scroll0102.PNG",
      b: {
        x: 444,
        y: 410
      }
    }, {
      a: "Scroll0103.PNG",
      b: {
        x: 444,
        y: 376
      }
    }, {
      a: "Scroll0104.PNG",
      b: {
        x: 444,
        y: 342
      }
    }, {
      a: "Scroll0105.PNG",
      b: {
        x: 444,
        y: 308
      }
    }, {
      a: "Scroll0106.PNG",
      b: {
        x: 444,
        y: 274
      }
    }, {
      a: "Scroll0107.PNG",
      b: {
        x: 444,
        y: 240
      }
    }, {
      a: "Scroll0108.PNG",
      b: {
        x: 444,
        y: 206
      }
    }, {
      a: "Scroll0109.PNG",
      b: {
        x: 444,
        y: 172
      }
    }, {
      a: "Scroll0110.PNG",
      b: {
        x: 444,
        y: 138
      }
    }, {
      a: "Scroll0111.PNG",
      b: {
        x: 444,
        y: 104
      }
    }, {
      a: "Scroll0112.PNG",
      b: {
        x: 444,
        y: 70
      }
    }, {
      a: "Scroll0113.PNG",
      b: {
        x: 444,
        y: 36
      }
    }, {
      a: "Scroll0114.PNG",
      b: {
        x: 444,
        y: 2
      }
    }, {
      a: "Scroll0115.PNG",
      b: {
        x: 410,
        y: 478
      }
    }, {
      a: "Scroll0116.PNG",
      b: {
        x: 410,
        y: 444
      }
    }, {
      a: "Scroll0117.PNG",
      b: {
        x: 410,
        y: 410
      }
    }, {
      a: "Scroll0118.PNG",
      b: {
        x: 410,
        y: 376
      }
    }, {
      a: "Scroll0119.PNG",
      b: {
        x: 410,
        y: 342
      }
    }, {
      a: "Scroll0120.PNG",
      b: {
        x: 410,
        y: 308
      }
    }, {
      a: "Scroll0121.PNG",
      b: {
        x: 410,
        y: 274
      }
    }, {
      a: "Scroll0122.PNG",
      b: {
        x: 410,
        y: 240
      }
    }, {
      a: "Scroll0123.PNG",
      b: {
        x: 410,
        y: 206
      }
    }, {
      a: "Scythe01.PNG",
      b: {
        x: 410,
        y: 172
      }
    }, {
      a: "Scythe02.PNG",
      b: {
        x: 410,
        y: 138
      }
    }, {
      a: "ScytheSteel.PNG",
      b: {
        x: 410,
        y: 104
      }
    }, {
      a: "ScytheWood.PNG",
      b: {
        x: 410,
        y: 70
      }
    }, {
      a: "ShieldColored1.PNG",
      b: {
        x: 410,
        y: 36
      }
    }, {
      a: "ShieldCrestedCrown.PNG",
      b: {
        x: 410,
        y: 2
      }
    }, {
      a: "ShieldCrestedGolden.PNG",
      b: {
        x: 376,
        y: 478
      }
    }, {
      a: "ShieldCrestedLion.PNG",
      b: {
        x: 376,
        y: 444
      }
    }, {
      a: "ShieldCrestedLion2.PNG",
      b: {
        x: 376,
        y: 410
      }
    }, {
      a: "ShieldCrestedSkull.PNG",
      b: {
        x: 376,
        y: 376
      }
    }, {
      a: "ShieldCrestedUnicorn.PNG",
      b: {
        x: 376,
        y: 342
      }
    }, {
      a: "ShieldCrestedUnicorn2.PNG",
      b: {
        x: 376,
        y: 308
      }
    }, {
      a: "ShieldCrossRed.PNG",
      b: {
        x: 376,
        y: 274
      }
    }, {
      a: "ShieldCrossed.PNG",
      b: {
        x: 376,
        y: 240
      }
    }, {
      a: "ShieldFourColoredBlueYellow.PNG",
      b: {
        x: 376,
        y: 206
      }
    }, {
      a: "ShieldFourColoredRedYellow.PNG",
      b: {
        x: 376,
        y: 172
      }
    }, {
      a: "ShieldFourColoredSilverYellow.PNG",
      b: {
        x: 376,
        y: 138
      }
    }, {
      a: "ShieldKiteRed.PNG",
      b: {
        x: 376,
        y: 104
      }
    }, {
      a: "ShieldSmallSteel.PNG",
      b: {
        x: 376,
        y: 70
      }
    }, {
      a: "ShieldSteelRoundLarge.PNG",
      b: {
        x: 376,
        y: 36
      }
    }, {
      a: "ShieldStripeRed.PNG",
      b: {
        x: 376,
        y: 2
      }
    }, {
      a: "ShieldTriangular.PNG",
      b: {
        x: 342,
        y: 478
      }
    }, {
      a: "ShieldWoodLarge.PNG",
      b: {
        x: 342,
        y: 444
      }
    }, {
      a: "ShieldWoodSmall.PNG",
      b: {
        x: 342,
        y: 410
      }
    }, {
      a: "ShieldWoodenRound.PNG",
      b: {
        x: 342,
        y: 376
      }
    }, {
      a: "ShovelGolden.PNG",
      b: {
        x: 342,
        y: 342
      }
    }, {
      a: "ShovelGolden2.PNG",
      b: {
        x: 342,
        y: 308
      }
    }, {
      a: "ShovelSteel.PNG",
      b: {
        x: 342,
        y: 274
      }
    }, {
      a: "ShovelWooden.PNG",
      b: {
        x: 342,
        y: 240
      }
    }, {
      a: "SkeletonBrokenBone.PNG",
      b: {
        x: 342,
        y: 206
      }
    }, {
      a: "SkeletonDog.PNG",
      b: {
        x: 342,
        y: 172
      }
    }, {
      a: "SkeletonHumanLarge.PNG",
      b: {
        x: 342,
        y: 138
      }
    }, {
      a: "SkeletonHumanMedium.PNG",
      b: {
        x: 342,
        y: 104
      }
    }, {
      a: "SkeletonHumanMedium2.PNG",
      b: {
        x: 342,
        y: 70
      }
    }, {
      a: "SkeletonHumanSmall.PNG",
      b: {
        x: 342,
        y: 36
      }
    }, {
      a: "SkeletonRat.PNG",
      b: {
        x: 342,
        y: 2
      }
    }, {
      a: "SkeletonSkull.PNG",
      b: {
        x: 308,
        y: 478
      }
    }, {
      a: "Sling.PNG",
      b: {
        x: 308,
        y: 444
      }
    }, {
      a: "Sling01.PNG",
      b: {
        x: 308,
        y: 410
      }
    }, {
      a: "Sling02.PNG",
      b: {
        x: 308,
        y: 376
      }
    }, {
      a: "Sling03.PNG",
      b: {
        x: 308,
        y: 342
      }
    }, {
      a: "Sling04.PNG",
      b: {
        x: 308,
        y: 308
      }
    }, {
      a: "Spear.PNG",
      b: {
        x: 308,
        y: 274
      }
    }, {
      a: "SpearAwlPike.PNG",
      b: {
        x: 308,
        y: 240
      }
    }, {
      a: "SpikeSteel.PNG",
      b: {
        x: 308,
        y: 206
      }
    }, {
      a: "Staff01.PNG",
      b: {
        x: 308,
        y: 172
      }
    }, {
      a: "Staff02.PNG",
      b: {
        x: 308,
        y: 138
      }
    }, {
      a: "Staff03.PNG",
      b: {
        x: 308,
        y: 104
      }
    }, {
      a: "Staff04.PNG",
      b: {
        x: 308,
        y: 70
      }
    }, {
      a: "Staff05.PNG",
      b: {
        x: 308,
        y: 36
      }
    }, {
      a: "Staff06.PNG",
      b: {
        x: 308,
        y: 2
      }
    }, {
      a: "Staff07.PNG",
      b: {
        x: 274,
        y: 478
      }
    }, {
      a: "Staff08.PNG",
      b: {
        x: 274,
        y: 444
      }
    }, {
      a: "Staff09.PNG",
      b: {
        x: 274,
        y: 410
      }
    }, {
      a: "Staff10.PNG",
      b: {
        x: 274,
        y: 376
      }
    }, {
      a: "Staff11.PNG",
      b: {
        x: 274,
        y: 342
      }
    }, {
      a: "Staff12.PNG",
      b: {
        x: 274,
        y: 308
      }
    }, {
      a: "Staff13.PNG",
      b: {
        x: 274,
        y: 274
      }
    }, {
      a: "Staff14.PNG",
      b: {
        x: 274,
        y: 240
      }
    }, {
      a: "Staff15.PNG",
      b: {
        x: 274,
        y: 206
      }
    }, {
      a: "Staff16.PNG",
      b: {
        x: 274,
        y: 172
      }
    }, {
      a: "Staff17.PNG",
      b: {
        x: 274,
        y: 138
      }
    }, {
      a: "Staff18.PNG",
      b: {
        x: 274,
        y: 104
      }
    }, {
      a: "Staff19.PNG",
      b: {
        x: 274,
        y: 70
      }
    }, {
      a: "Staff20.PNG",
      b: {
        x: 274,
        y: 36
      }
    }, {
      a: "Staff21.PNG",
      b: {
        x: 274,
        y: 2
      }
    }, {
      a: "Staff22.PNG",
      b: {
        x: 240,
        y: 478
      }
    }, {
      a: "Staff23.PNG",
      b: {
        x: 240,
        y: 444
      }
    }, {
      a: "StaffBronze.PNG",
      b: {
        x: 240,
        y: 410
      }
    }, {
      a: "StaffDarkYellow.PNG",
      b: {
        x: 240,
        y: 376
      }
    }, {
      a: "StaffGold.PNG",
      b: {
        x: 240,
        y: 342
      }
    }, {
      a: "StaffGoldScales.PNG",
      b: {
        x: 240,
        y: 308
      }
    }, {
      a: "StaffGoldStriped.PNG",
      b: {
        x: 240,
        y: 274
      }
    }, {
      a: "StaffRedStriped.PNG",
      b: {
        x: 240,
        y: 240
      }
    }, {
      a: "StaffSilver.PNG",
      b: {
        x: 240,
        y: 206
      }
    }, {
      a: "Sword01.PNG",
      b: {
        x: 240,
        y: 172
      }
    }, {
      a: "Sword02.PNG",
      b: {
        x: 240,
        y: 138
      }
    }, {
      a: "Sword03.PNG",
      b: {
        x: 240,
        y: 104
      }
    }, {
      a: "Sword04.PNG",
      b: {
        x: 240,
        y: 70
      }
    }, {
      a: "Sword05.PNG",
      b: {
        x: 240,
        y: 36
      }
    }, {
      a: "Sword06.PNG",
      b: {
        x: 240,
        y: 2
      }
    }, {
      a: "Sword07.PNG",
      b: {
        x: 206,
        y: 478
      }
    }, {
      a: "Sword08.PNG",
      b: {
        x: 206,
        y: 444
      }
    }, {
      a: "Sword09.PNG",
      b: {
        x: 206,
        y: 410
      }
    }, {
      a: "Sword10.PNG",
      b: {
        x: 206,
        y: 376
      }
    }, {
      a: "Sword11.PNG",
      b: {
        x: 206,
        y: 342
      }
    },
    {
      a: "Sword12.PNG",
      b: {
        x: 206,
        y: 308
      }
    }, {
      a: "Sword13.PNG",
      b: {
        x: 206,
        y: 274
      }
    }, {
      a: "Sword14.PNG",
      b: {
        x: 206,
        y: 240
      }
    }, {
      a: "Sword15.PNG",
      b: {
        x: 206,
        y: 206
      }
    }, {
      a: "Sword16.PNG",
      b: {
        x: 206,
        y: 172
      }
    }, {
      a: "Sword17.PNG",
      b: {
        x: 206,
        y: 138
      }
    }, {
      a: "Sword18.PNG",
      b: {
        x: 206,
        y: 104
      }
    }, {
      a: "Sword19.PNG",
      b: {
        x: 206,
        y: 70
      }
    }, {
      a: "Sword20.PNG",
      b: {
        x: 206,
        y: 36
      }
    }, {
      a: "Sword21.PNG",
      b: {
        x: 206,
        y: 2
      }
    }, {
      a: "Sword22.PNG",
      b: {
        x: 172,
        y: 478
      }
    }, {
      a: "Sword23.PNG",
      b: {
        x: 172,
        y: 444
      }
    }, {
      a: "Sword24.PNG",
      b: {
        x: 172,
        y: 410
      }
    }, {
      a: "Sword25.PNG",
      b: {
        x: 172,
        y: 376
      }
    }, {
      a: "Sword26.PNG",
      b: {
        x: 172,
        y: 342
      }
    },
    {
      a: "Sword27.PNG",
      b: {
        x: 172,
        y: 308
      }
    }, {
      a: "Sword28.PNG",
      b: {
        x: 172,
        y: 274
      }
    }, {
      a: "SwordAssasin.PNG",
      b: {
        x: 172,
        y: 240
      }
    }, {
      a: "SwordBroad.PNG",
      b: {
        x: 172,
        y: 206
      }
    }, {
      a: "SwordBrokenJeweled.PNG",
      b: {
        x: 172,
        y: 172
      }
    }, {
      a: "SwordCutlass.PNG",
      b: {
        x: 172,
        y: 138
      }
    }, {
      a: "SwordFalchion.PNG",
      b: {
        x: 172,
        y: 104
      }
    }, {
      a: "SwordFlaming.PNG",
      b: {
        x: 172,
        y: 70
      }
    }, {
      a: "SwordKatana.PNG",
      b: {
        x: 172,
        y: 36
      }
    }, {
      a: "SwordLong.PNG",
      b: {
        x: 172,
        y: 2
      }
    }, {
      a: "SwordLong2.PNG",
      b: {
        x: 138,
        y: 478
      }
    }, {
      a: "SwordMagical.PNG",
      b: {
        x: 138,
        y: 444
      }
    }, {
      a: "SwordMedieval.PNG",
      b: {
        x: 138,
        y: 410
      }
    }, {
      a: "SwordMedievalMagical.PNG",
      b: {
        x: 138,
        y: 376
      }
    }, {
      a: "SwordRapier.PNG",
      b: {
        x: 138,
        y: 342
      }
    }, {
      a: "SwordSabre.PNG",
      b: {
        x: 138,
        y: 308
      }
    }, {
      a: "SwordScimitar.PNG",
      b: {
        x: 138,
        y: 274
      }
    }, {
      a: "SwordShort.PNG",
      b: {
        x: 138,
        y: 240
      }
    }, {
      a: "SwordShort2.PNG",
      b: {
        x: 138,
        y: 206
      }
    }, {
      a: "SwordShortRounded.PNG",
      b: {
        x: 138,
        y: 172
      }
    }, {
      a: "SwordTulwar.PNG",
      b: {
        x: 138,
        y: 138
      }
    }, {
      a: "SwordTwoHanded.PNG",
      b: {
        x: 138,
        y: 104
      }
    }, {
      a: "ThrowingStar.PNG",
      b: {
        x: 138,
        y: 70
      }
    }, {
      a: "Torch.PNG",
      b: {
        x: 138,
        y: 36
      }
    }, {
      a: "TridenGolden.PNG",
      b: {
        x: 138,
        y: 2
      }
    }, {
      a: "Trident.PNG",
      b: {
        x: 104,
        y: 478
      }
    }, {
      a: "TridentGreen.PNG",
      b: {
        x: 104,
        y: 444
      }
    }, {
      a: "Valors_Armor.PNG",
      b: {
        x: 104,
        y: 410
      }
    }, {
      a: "Valors_Belt.PNG",
      b: {
        x: 104,
        y: 376
      }
    }, {
      a: "Valors_Boots.PNG",
      b: {
        x: 104,
        y: 342
      }
    }, {
      a: "Valors_Gauntlets.PNG",
      b: {
        x: 104,
        y: 308
      }
    }, {
      a: "Valors_Helm.PNG",
      b: {
        x: 104,
        y: 274
      }
    }, {
      a: "Valors_Shield.PNG",
      b: {
        x: 104,
        y: 240
      }
    }, {
      a: "Valors_Sword.PNG",
      b: {
        x: 104,
        y: 206
      }
    }, {
      a: "VialBlue.PNG",
      b: {
        x: 104,
        y: 172
      }
    }, {
      a: "VialGreen.PNG",
      b: {
        x: 104,
        y: 138
      }
    }, {
      a: "VialOrange.PNG",
      b: {
        x: 104,
        y: 104
      }
    }, {
      a: "VialPurple.PNG",
      b: {
        x: 104,
        y: 70
      }
    }, {
      a: "VialRed.PNG",
      b: {
        x: 104,
        y: 36
      }
    }, {
      a: "VialYellow.PNG",
      b: {
        x: 104,
        y: 2
      }
    }, {
      a: "Wand01.PNG",
      b: {
        x: 70,
        y: 478
      }
    }, {
      a: "Wand02.PNG",
      b: {
        x: 70,
        y: 444
      }
    }, {
      a: "Wand03.PNG",
      b: {
        x: 70,
        y: 410
      }
    }, {
      a: "Wand04.PNG",
      b: {
        x: 70,
        y: 376
      }
    }, {
      a: "Wand05.PNG",
      b: {
        x: 70,
        y: 342
      }
    }, {
      a: "Wand06.PNG",
      b: {
        x: 70,
        y: 308
      }
    }, {
      a: "Wand07.PNG",
      b: {
        x: 70,
        y: 274
      }
    }, {
      a: "Wand08.PNG",
      b: {
        x: 70,
        y: 240
      }
    }, {
      a: "Wand09.PNG",
      b: {
        x: 70,
        y: 206
      }
    }, {
      a: "Wand10.PNG",
      b: {
        x: 70,
        y: 172
      }
    }, {
      a: "Wand11.PNG",
      b: {
        x: 70,
        y: 138
      }
    }, {
      a: "Wand12.PNG",
      b: {
        x: 70,
        y: 104
      }
    }, {
      a: "Wand13.PNG",
      b: {
        x: 70,
        y: 70
      }
    }, {
      a: "Wand14.PNG",
      b: {
        x: 70,
        y: 36
      }
    }, {
      a: "Wand15.PNG",
      b: {
        x: 70,
        y: 2
      }
    }, {
      a: "Wand16.PNG",
      b: {
        x: 36,
        y: 478
      }
    }, {
      a: "Wand17.PNG",
      b: {
        x: 36,
        y: 444
      }
    }, {
      a: "Wand18.PNG",
      b: {
        x: 36,
        y: 410
      }
    }, {
      a: "Wand19.PNG",
      b: {
        x: 36,
        y: 376
      }
    }, {
      a: "WandBronzeGold.PNG",
      b: {
        x: 36,
        y: 342
      }
    }, {
      a: "WandBronzeRed.PNG",
      b: {
        x: 36,
        y: 308
      }
    }, {
      a: "WandBronzeSilver.PNG",
      b: {
        x: 36,
        y: 274
      }
    }, {
      a: "WandGold.PNG",
      b: {
        x: 36,
        y: 240
      }
    }, {
      a: "WandSilver.PNG",
      b: {
        x: 36,
        y: 206
      }
    }, {
      a: "WandSilverBronze.PNG",
      b: {
        x: 36,
        y: 172
      }
    }, {
      a: "WandSilverGold.PNG",
      b: {
        x: 36,
        y: 138
      }
    }, {
      a: "WandSilverTeal.PNG",
      b: {
        x: 36,
        y: 104
      }
    }, {
      a: "WandTeal.PNG",
      b: {
        x: 36,
        y: 70
      }
    }, {
      a: "Warmboots01.PNG",
      b: {
        x: 36,
        y: 36
      }
    }, {
      a: "Warmboots02.PNG",
      b: {
        x: 36,
        y: 2
      }
    }, {
      a: "Warmboots03.PNG",
      b: {
        x: 2,
        y: 478
      }
    }, {
      a: "Warmboots04.PNG",
      b: {
        x: 2,
        y: 444
      }
    }, {
      a: "Warmboots05.PNG",
      b: {
        x: 2,
        y: 410
      }
    }, {
      a: "Whip.PNG",
      b: {
        x: 2,
        y: 376
      }
    }, {
      a: "WizardHat01.PNG",
      b: {
        x: 2,
        y: 342
      }
    }, {
      a: "WizardHat02.PNG",
      b: {
        x: 2,
        y: 308
      }
    }, {
      a: "WizardHat03.PNG",
      b: {
        x: 2,
        y: 274
      }
    }, {
      a: "WizardHat04.PNG",
      b: {
        x: 2,
        y: 240
      }
    }, {
      a: "WizardHat05.PNG",
      b: {
        x: 2,
        y: 206
      }
    }, {
      a: "Xbow01.PNG",
      b: {
        x: 2,
        y: 172
      }
    }, {
      a: "Xbow02.PNG",
      b: {
        x: 2,
        y: 138
      }
    }, {
      a: "Xbow03.PNG",
      b: {
        x: 2,
        y: 104
      }
    }, {
      a: "Xbow04.PNG",
      b: {
        x: 2,
        y: 70
      }
    }, {
      a: "Xbow05.PNG",
      b: {
        x: 2,
        y: 36
      }
    }, {
      a: "Xbow06.PNG",
      b: {
        x: 2,
        y: 2
      }
    }
  ]),
  Dj: new Xb([new Wb("spritesheet/SpellFXAnim1.png",
      31, [{
        animationName: "Gold Sparkles",
        O: 0,
        P: 0,
        M: 7,
        N: 0
      }, {
        animationName: "Green Sparkles",
        O: 0,
        P: 1,
        M: 7,
        N: 1
      }, {
        animationName: "Blue Sparkles",
        O: 0,
        P: 2,
        M: 7,
        N: 2
      }, {
        animationName: "Orange Sparkles",
        O: 0,
        P: 3,
        M: 7,
        N: 3
      }, {
        animationName: "Pink Sparkles",
        O: 0,
        P: 4,
        M: 7,
        N: 4
      }, {
        animationName: "Red Sparkles",
        O: 0,
        P: 5,
        M: 7,
        N: 5
      }, {
        animationName: "Green Skull",
        O: 0,
        P: 6,
        M: 7,
        N: 6
      }, {
        animationName: "Yellow Key",
        O: 0,
        P: 7,
        M: 7,
        N: 7
      }, {
        animationName: "Skull Cross",
        O: 0,
        P: 8,
        M: 7,
        N: 8
      }, {
        animationName: "Shields",
        O: 0,
        P: 9,
        M: 7,
        N: 9
      }, {
        animationName: "Red Crosses",
        O: 0,
        P: 10,
        M: 7,
        N: 10
      }, {
        animationName: "Fire Ring",
        O: 0,
        P: 11,
        M: 7,
        N: 11
      }, {
        animationName: "Ice Ring",
        O: 0,
        P: 12,
        M: 7,
        N: 12
      }, {
        animationName: "Green Ring",
        O: 0,
        P: 13,
        M: 7,
        N: 13
      }, {
        animationName: "Pink Ring",
        O: 0,
        P: 14,
        M: 7,
        N: 14
      }, {
        animationName: "Yellow Star",
        O: 0,
        P: 15,
        M: 7,
        N: 15
      }, {
        animationName: "Blue Star",
        O: 0,
        P: 16,
        M: 7,
        N: 16
      }, {
        animationName: "Green Star",
        O: 0,
        P: 17,
        M: 7,
        N: 17
      }, {
        animationName: "White Crosses",
        O: 0,
        P: 18,
        M: 7,
        N: 18
      }, {
        animationName: "Spider Web",
        O: 0,
        P: 19,
        M: 7,
        N: 19
      }, {
        animationName: "Torch",
        O: 0,
        P: 20,
        M: 7,
        N: 20
      }], 7), new Wb("spritesheet/SpellFXAnim2.png",
      31, [{
        animationName: "Frost",
        O: 0,
        P: 0,
        M: 7,
        N: 1
      }, {
        animationName: "Yellow Star Circle",
        O: 0,
        P: 2,
        M: 6,
        N: 3
      }, {
        animationName: "Circles",
        O: 0,
        P: 4,
        M: 4,
        N: 5
      }, {
        animationName: "Gold Shield Spiral",
        O: 0,
        P: 6,
        M: 7,
        N: 7
      }, {
        animationName: "Green Shield Spiral",
        O: 0,
        P: 8,
        M: 7,
        N: 9
      }, {
        animationName: "Blue Shield Spiral",
        O: 0,
        P: 10,
        M: 7,
        N: 11
      }, {
        animationName: "Pink Shield Spiral",
        O: 0,
        P: 12,
        M: 7,
        N: 13
      }, {
        animationName: "Blue Firework",
        O: 0,
        P: 14,
        M: 7,
        N: 15
      }, {
        animationName: "Red Firework",
        O: 0,
        P: 16,
        M: 7,
        N: 17
      }, {
        animationName: "Bubbles",
        O: 0,
        P: 18,
        M: 2,
        N: 20
      }], 7),
    new Wb("spritesheet/SpellFXAnim3.png", 31, [{
      animationName: "Shield",
      O: 0,
      P: 0,
      M: 7,
      N: 1
    }, {
      animationName: "Color Spiral",
      O: 0,
      P: 2,
      M: 7,
      N: 3
    }, {
      animationName: "Arm Flex",
      O: 0,
      P: 4,
      M: 4,
      N: 5
    }, {
      animationName: "Super Speed",
      O: 0,
      P: 6,
      M: 7,
      N: 7
    }, {
      animationName: "Target",
      O: 0,
      P: 8,
      M: 7,
      N: 9
    }, {
      animationName: "Yellow Shield Spiral",
      O: 0,
      P: 10,
      M: 6,
      N: 11
    }, {
      animationName: "Pink Star Circle",
      O: 0,
      P: 12,
      M: 6,
      N: 13
    }, {
      animationName: "Blue Star Circle",
      O: 0,
      P: 14,
      M: 6,
      N: 15
    }, {
      animationName: "Green Star Circle",
      O: 0,
      P: 16,
      M: 6,
      N: 17
    }, {
      animationName: "Gold Star Circle",
      O: 0,
      P: 18,
      M: 6,
      N: 19
    }, {
      animationName: "Bread",
      O: 0,
      P: 20,
      M: 7,
      N: 20
    }], 7), new Wb("spritesheet/SpellFXAnim4.png", 31, [{
        animationName: "Yellow Fire Ring",
        O: 0,
        P: 0,
        M: 7,
        N: 0
      }, {
        animationName: "Totems",
        O: 0,
        P: 1,
        M: 7,
        N: 1
      }, {
        animationName: "Eye Blink",
        O: 0,
        P: 2,
        M: 7,
        N: 2
      }, {
        animationName: "Pink Star",
        O: 0,
        P: 3,
        M: 7,
        N: 3
      }, {
        animationName: "Orange Star",
        O: 0,
        P: 4,
        M: 7,
        N: 4
      }, {
        animationName: "Red Eye Blink",
        O: 0,
        P: 5,
        M: 6,
        N: 6
      }, {
        animationName: "Eagle",
        O: 0,
        P: 7,
        M: 7,
        N: 7
      }, {
        animationName: "Sleep",
        O: 0,
        P: 8,
        M: 6,
        N: 9
      }, {
        animationName: "Armor",
        O: 0,
        P: 10,
        M: 7,
        N: 10
      },
      {
        animationName: "Blind Eye Blink",
        O: 0,
        P: 11,
        M: 7,
        N: 11
      }, {
        animationName: "Fire Rain",
        O: 0,
        P: 12,
        M: 7,
        N: 14
      }, {
        animationName: "Blue Rain",
        O: 0,
        P: 15,
        M: 7,
        N: 17
      }, {
        animationName: "Green Rain",
        O: 0,
        P: 18,
        M: 7,
        N: 20
      }
    ], 7), new Wb("spritesheet/SpellFXAnim5.png", 31, [{
      animationName: "Lightning Rain",
      O: 0,
      P: 0,
      M: 7,
      N: 2
    }, {
      animationName: "Pink Rain",
      O: 0,
      P: 3,
      M: 7,
      N: 5
    }, {
      animationName: "Rainbow Rain",
      O: 0,
      P: 6,
      M: 7,
      N: 8
    }], 7), new Wb("spritesheet/DamageFX.png", 32, [{
      animationName: "Red Damage",
      O: 0,
      P: 0,
      M: 2,
      N: 0
    }, {
      animationName: "White Damage",
      O: 0,
      P: 1,
      M: 2,
      N: 1
    }, {
      animationName: "Blue Damage",
      O: 0,
      P: 2,
      M: 2,
      N: 2
    }, {
      animationName: "Green Damage",
      O: 0,
      P: 3,
      M: 2,
      N: 3
    }, {
      animationName: "Red Splat",
      O: 0,
      P: 4,
      M: 2,
      N: 4
    }, {
      animationName: "Electric Damage",
      O: 0,
      P: 5,
      M: 2,
      N: 5
    }, {
      animationName: "Fire Damage",
      O: 0,
      P: 6,
      M: 2,
      N: 6
    }, {
      animationName: "Poison Damage",
      O: 0,
      P: 7,
      M: 2,
      N: 7
    }, {
      animationName: "Sonic Damage",
      O: 0,
      P: 8,
      M: 2,
      N: 8
    }, {
      animationName: "Pink Damage",
      O: 0,
      P: 9,
      M: 2,
      N: 9
    }], 2), new Wb("spritesheet/SpellFXMissiles.png", 31, [{
      animationName: "Red Arrow",
      O: 0,
      P: 0,
      M: 7,
      N: 0,
      zc: !0
    }, {
      animationName: "Green Arrow",
      O: 0,
      P: 1,
      M: 7,
      N: 1,
      zc: !0
    }, {
      animationName: "Pink Arrow",
      O: 0,
      P: 2,
      M: 7,
      N: 2,
      zc: !0
    }, {
      animationName: "Pink Lightning",
      O: 0,
      P: 3,
      M: 7,
      N: 3,
      zc: !0
    }, {
      animationName: "Green Projectile",
      O: 0,
      P: 4,
      M: 7,
      N: 4,
      zc: !0
    }, {
      animationName: "Small Green Projectiles",
      O: 0,
      P: 5,
      M: 7,
      N: 5,
      zc: !0
    }, {
      animationName: "Fire Projectile",
      O: 0,
      P: 6,
      M: 7,
      N: 6,
      zc: !0
    }, {
      animationName: "Fire Arrow",
      O: 0,
      P: 7,
      M: 7,
      N: 7,
      zc: !0
    }, {
      animationName: "Ice Projectile",
      O: 0,
      P: 8,
      M: 7,
      N: 8,
      zc: !0
    }, {
      animationName: "Ice Arrow",
      O: 0,
      P: 9,
      M: 7,
      N: 9,
      zc: !0
    }, {
      animationName: "Lightning",
      O: 0,
      P: 10,
      M: 7,
      N: 10,
      zc: !0
    }, {
      animationName: "Lightning Arrow",
      O: 0,
      P: 11,
      M: 7,
      N: 11,
      zc: !0
    }, {
      animationName: "Grey Bullet",
      O: 0,
      P: 12,
      M: 7,
      N: 12,
      zc: !0
    }, {
      animationName: "Yellow Bullet",
      O: 0,
      P: 13,
      M: 7,
      N: 13,
      zc: !0
    }, {
      animationName: "Ninja Star",
      O: 0,
      P: 14,
      M: 7,
      N: 14,
      zc: !0
    }, {
      animationName: "Pink Star Projectile",
      O: 0,
      P: 15,
      M: 7,
      N: 15,
      zc: !0
    }, {
      animationName: "Web",
      O: 0,
      P: 16,
      M: 7,
      N: 16,
      zc: !0
    }, {
      animationName: "Pink Ball Projectile",
      O: 0,
      P: 17,
      M: 7,
      N: 17,
      zc: !0
    }], 7)
  ]),
  vl: new function() {
    this.At = this.zt = this.wk = this.vk = 0
  },
  Qo: new mB,
  S: new ag,
  Gf: new Di,
  Ni: new lv,
  $h: new pi,
  Aa: new be,
  Pe: new function() {
    var a = zc,
      b = Ac;
    this.Eh = 16;
    this.Rh = a;
    this.Sh = b;
    this.sk = {};
    this.Mr = []
  },
  kb: new function() {
    this.pd = [];
    this.Jg = [];
    this.Dh = [];
    this.bm = {};
    this.Ny = "L2_Terrain087.PNG";
    this.ju = {};
    this.Uj = 1;
    this.cm = 0;
    this.GE = function(a, b) {
      return a.Jf < b.Jf ? -1 : 1
    }
  },
  Bm: new je,
  ug: new Ae,
  Ba: new ih,
  Mc: null,
  le: null,
  Hr: new sB,
  Ee: new ay,
  Nb: new function() {
    this.Po = this.bp = this.Jp = this.rq = this.up = this.nq = this.Mm = !0
  },
  Cz: new function() {},
  yE: new hh,
  ob: new function() {
    this.n = [];
    this.fc = this.hd = 1;
    this.en = {};
    this.HE = function(a, b) {
      var c = a.Vk(),
        d = b.Vk();
      return c < d ? -1 : c > d ? 1 : 0
    }
  },
  ff: new Ei,
  Uh: new Nq,
  Ti: new nr,
  th: new Ii,
  Sm: new Mv,
  dh: new Wv,
  Di: new ew,
  nh: new Qq,
  Yj: new pr,
  eq: new function() {
    this.yl = []
  },
  lD: new function() {
    this.dn = new Ci
  },
  df: new function() {
    this.Wg = []
  },
  Xe: new hw,
  RC: new function() {
    this.Wq = null
  },
  pc: new qh,
  dF: new function() {},
  pg: new function() {
    this.Zp = "C2_V1_001";
    this.qs = Ba();
    this.UC = 3E5;
    this.AE = new gB;
    this.eE = new cB
  },
  Em: !1,
  lg: !1,
  Fe: !1,
  Mh: !1,
  wb: !0,
  ig: !1,
  Tw: Date.now(),
  jf: 0,
  Vj: 0,
  Mz: !0,
  i: {
    $a: 0,
    Gj: 0,
    dz: 0,
    Xg: new vh,
    da: new lx,
    D: [],
    gg: null,
    ce: null,
    ae: new function() {
      this.An = this.Dd = 0;
      this.Qi = {};
      this.pj = {};
      var a, b = [];
      for (a = 0; a < apUpgrades.length; a++) b.push(new Os(apUpgrades[a]));
      this.tl = b
    },
    Ig: new function() {
      this.jj = [];
      this.Lt = {};
      this.ik = [];
      this.Ze = [];
      var a, b;
      for (a = 0; a < achievments.length; a++) b = new Wr(achievments[a]), this.jj.push(b), this.Lt[b.id] && console.log("Error. Duplicate achievement id: " + b.id), this.Lt[b.id] = b
    },
    Ih: new hx,
    Ua: new ix,
    aa: new jx,
    Bg: new function() {
      this.vn = this.mm = this.Xm = this.kn = this.jn = this.hn = 0;
      this.qo = {};
      this.lq = {};
      this.nm =
        0
    },
    wh: 0
  },
  jE: function() {
    "undefined" !== typeof document.hidden && (w.Mz = !document.hidden)
  },
  CE: function() {
    document.addEventListener("visibilitychange", w.jE, !1)
  },
  onLoad: function() {
    w.CE();
    w.Hr.Hr()
  },
  eA: function() {
    var a = w.ob;
    a.en = {};
    a.hd = 1;
    a.fc = 1;
    a.n.length = 0;
    a.n.push({
      o: "Brown Rat",
      d: "RatBrownDark.PNG"
    });
    a.n.push({
      o: "Grey Rat",
      d: "RatGrey.PNG"
    });
    a.n.push({
      o: "Lab Rat",
      d: "RatWhite.PNG"
    });
    a.n.push({
      o: "Green Dragonfly",
      d: "DragonFlyGreen.PNG"
    });
    a.n.push({
      o: "Pink Dragonfly",
      d: "DragonFlyPink.PNG"
    });
    a.n.push({
      o: "Orange Dragonfly",
      d: "DragonFlyOrange.PNG"
    });
    a.n.push({
      o: "Black Dragonfly",
      d: "DragonFlyBlack.PNG"
    });
    a.n.push({
      o: "White Dragonfly",
      d: "DragonFlyWhite.PNG"
    });
    a.n.push({
      o: "Brown Bat",
      d: "BatBrown.PNG"
    });
    a.n.push({
      o: "Blue Bat",
      d: "BatBlueTail.PNG"
    });
    a.n.push({
      o: "Grey Bat",
      d: "BatGrey.PNG"
    });
    a.n.push({
      o: "Red Bat",
      d: "BatRedTail.PNG"
    });
    a.n.push({
      o: "Silver Bat",
      d: "BatSilver.PNG"
    });
    a.n.push({
      o: "Blue Centipede",
      d: "CentipedeBlue.PNG"
    });
    a.n.push({
      o: "Pink Centipede",
      d: "CentipedePink.PNG"
    });
    a.n.push({
      o: "Brown Centipede",
      d: "CentipedeBrown.PNG"
    });
    a.n.push({
      o: "Grey Centipede",
      d: "CentipedeGrey.PNG"
    });
    a.n.push({
      o: "Silver Centipede",
      d: "CentipedeSilver.PNG"
    });
    a.n.push({
      o: "Scarlet Centipede",
      d: "CentipedeRed.PNG"
    });
    a.n.push({
      o: "Brown Lizard",
      d: "LizardBrown.PNG"
    });
    a.n.push({
      o: "Green Lizard",
      d: "LizardGreen.PNG"
    });
    a.n.push({
      o: "Grey Lizard",
      d: "LizardGrey.PNG"
    });
    a.n.push({
      o: "Red Lizard",
      d: "LizardRed.PNG"
    });
    a.n.push({
      o: "Striped Lizard",
      d: "LizardStriped.PNG"
    });
    a.n.push({
      o: "Pale Crawler",
      d: "CrawlerWhite.PNG"
    });
    a.n.push({
      o: "Aqua Crawler",
      d: "CrawlerBlueLight.PNG"
    });
    a.n.push({
      o: "Blue Crawler",
      d: "CrawlerBlue.PNG"
    });
    a.n.push({
      o: "Green Crawler",
      d: "CrawlerGreen.PNG"
    });
    a.n.push({
      o: "Grey Crawler",
      d: "CrawlerGrey.PNG"
    });
    a.n.push({
      o: "Orange Crawler",
      d: "CrawlerOrange.PNG"
    });
    a.n.push({
      o: "Silver Crawler",
      d: "CrawlerSilver.PNG"
    });
    a.n.push({
      o: "Red Crawler",
      d: "CrawlerRed.PNG"
    });
    a.n.push({
      o: "Brown Dog",
      d: "DogBrown.PNG"
    });
    a.n.push({
      o: "Orange Dog",
      d: "DogOrange.PNG"
    });
    a.n.push({
      o: "Grey Dog",
      d: "DogGrey.PNG"
    });
    a.n.push({
      o: "Pale Dog",
      d: "DogWhite.PNG"
    });
    a.n.push({
      o: "Shadow Dog",
      d: "DogDarkGrey.PNG"
    });
    a.n.push({
      o: "Pink Dog",
      d: "DogPink.PNG"
    });
    a.n.push({
      o: "Blue Spider",
      d: "SpiderBlue.PNG"
    });
    a.n.push({
      o: "Gold Spider",
      d: "SpiderGold.PNG"
    });
    a.n.push({
      o: "Green Spider",
      d: "SpiderGreen.PNG"
    });
    a.n.push({
      o: "Purple Spider",
      d: "SpiderPurple.PNG"
    });
    a.n.push({
      o: "Red Spider",
      d: "SpiderRed.PNG"
    });
    a.n.push({
      o: "Black Spider",
      d: "SpiderBlack.PNG"
    });
    a.n.push({
      o: "Giant Pink Frog",
      d: "FrogGiantPink.PNG"
    });
    a.n.push({
      o: "Giant Green Frog",
      d: "FrogGiantGreen.PNG"
    });
    a.n.push({
      o: "Brown Snake",
      d: "SnakeBrown.PNG"
    });
    a.n.push({
      o: "Blue Snake",
      d: "SnakeBlue.PNG"
    });
    a.n.push({
      o: "Green Snake",
      d: "SnakeGreen.PNG"
    });
    a.n.push({
      o: "Grey Snake",
      d: "SnakeGrey.PNG"
    });
    a.n.push({
      o: "Pink Snake",
      d: "SnakePink.PNG"
    });
    a.n.push({
      o: "Silver Snake",
      d: "SnakeSilver.PNG"
    });
    a.n.push({
      o: "White Snake",
      d: "SnakeWhite2.PNG"
    });
    a.n.push({
      o: "Brown Living Mound",
      d: "LivingMoundBrown.PNG"
    });
    a.n.push({
      o: "Spotted Living Mound",
      d: "LivingMoundBrownGreen.PNG"
    });
    a.n.push({
      o: "Flesh-like Living Mound",
      d: "LivingMoundFlesh.PNG"
    });
    a.n.push({
      o: "Green Living Mound",
      d: "LivingMoundGreen.PNG"
    });
    a.n.push({
      o: "Magenta Living Mound",
      d: "LivingMoundMagenta.PNG"
    });
    a.n.push({
      o: "Orange Living Mound",
      d: "LivingMoundOrange.PNG"
    });
    a.n.push({
      o: "Red Living Mound",
      d: "LivingMoundRed.PNG"
    });
    a.n.push({
      o: "Brown Turtle",
      d: "TurtleBrown.PNG"
    });
    a.n.push({
      o: "Blue Turtle",
      d: "TurtleBlue.PNG"
    });
    a.n.push({
      o: "Green Turtle",
      d: "TurtleGreen.PNG"
    });
    a.n.push({
      o: "Pink Turtle",
      d: "TurtlePink.PNG"
    });
    a.n.push({
      o: "Yellow Turtle",
      d: "TurtleYellow.PNG"
    });
    a.n.push({
      o: "Grey Turtle",
      d: "TurtleGrey.PNG"
    });
    a.n.push({
      o: "Grey Ghost",
      d: "Ghost3Grey.PNG"
    });
    a.n.push({
      o: "Pink Ghost",
      d: "Ghost3Pink.PNG"
    });
    a.n.push({
      o: "Blue Ghost",
      d: "Ghost3Blue.PNG"
    });
    a.n.push({
      o: "Green Ghost",
      d: "GhostGreen.PNG"
    });
    a.n.push({
      o: "Red Ghost",
      d: "GhostRed.PNG"
    });
    a.n.push({
      o: "Black Ghost",
      d: "GhostBlack.PNG"
    });
    a.n.push({
      o: "Blue Floating Eye",
      d: "FloatingEyeBlue.PNG"
    });
    a.n.push({
      o: "Green Floating Eye",
      d: "FloatingEyeGreen.PNG"
    });
    a.n.push({
      o: "Grey Floating Eye",
      d: "FloatingEyeGrey.PNG"
    });
    a.n.push({
      o: "Red Floating Eye",
      d: "FloatingEyeRed.PNG"
    });
    a.n.push({
      o: "Tentacled Floating Eye",
      d: "FloatingEyeTentacled3Eyes.PNG"
    });
    a.n.push({
      o: "Mature Floating Eye",
      d: "FloatingEyeTentacled6Eyes.PNG"
    });
    a.n.push({
      o: "Teal Jellyfish",
      d: "JellyfishTeal.PNG"
    });
    a.n.push({
      o: "Blue Jellyfish",
      d: "JellyfishBlue.PNG"
    });
    a.n.push({
      o: "Brown Jellyfish",
      d: "JellyfishBrown.PNG"
    });
    a.n.push({
      o: "Green Jellyfish",
      d: "JellyfishGreen.PNG"
    });
    a.n.push({
      o: "Grey Jellyfish",
      d: "JellyfishGrey.PNG"
    });
    a.n.push({
      o: "Orange Jellyfish",
      d: "JellyfishOrange.PNG"
    });
    a.n.push({
      o: "Pink Jellyfish",
      d: "JellyfishPink.PNG"
    });
    a.n.push({
      o: "Red Jellyfish",
      d: "JellyfishRed.PNG"
    });
    a.n.push({
      o: "White Jellyfish",
      d: "JellyfishWhite2.PNG"
    });
    a.n.push({
      o: "Yellow Jellyfish",
      d: "JellyfishYellow.PNG"
    });
    a.n.push({
      o: "Brown Mold",
      d: "MoldBrown.PNG"
    });
    a.n.push({
      o: "Blue Mold",
      d: "MoldBlue.PNG"
    });
    a.n.push({
      o: "Grey Mold",
      d: "MoldBlueGrey.PNG"
    });
    a.n.push({
      o: "Green Mold",
      d: "MoldGreen.PNG"
    });
    a.n.push({
      o: "Purple Mold",
      d: "MoldPurple.PNG"
    });
    a.n.push({
      o: "Red Mold",
      d: "MoldRed.PNG"
    });
    a.n.push({
      o: "Brown Cobra",
      d: "SnakeCobraBrown.PNG"
    });
    a.n.push({
      o: "Green Cobra",
      d: "SnakeCobraGreen.PNG"
    });
    a.n.push({
      o: "Grey Cobra",
      d: "SnakeCobraGrey.PNG"
    });
    a.n.push({
      o: "Red Cobra",
      d: "SnakeCobraRed.PNG"
    });
    a.n.push({
      o: "Blue Yeti",
      d: "YetiBlue.PNG"
    });
    a.n.push({
      o: "Brown Yeti",
      d: "YetiBrown.PNG"
    });
    a.n.push({
      o: "Green Yeti",
      d: "YetiGreen.PNG"
    });
    a.n.push({
      o: "Aqua Yeti",
      d: "YetiGreenBlue.PNG"
    });
    a.n.push({
      o: "Grey Yeti",
      d: "YetiGreyDark.PNG"
    });
    a.n.push({
      o: "Orange Yeti",
      d: "YetiOrange.PNG"
    });
    a.n.push({
      o: "Pink Yeti",
      d: "YetiPink.PNG"
    });
    a.n.push({
      o: "Black Yeti",
      d: "YetiBlack.PNG"
    });
    a.n.push({
      o: "Baby Blue Dragon",
      d: "DragonBabyBlue.PNG"
    });
    a.n.push({
      o: "Baby Bronze Dragon",
      d: "DragonBabyBronze.PNG"
    });
    a.n.push({
      o: "Baby Gold Dragon",
      d: "DragonBabyGold.PNG"
    });
    a.n.push({
      o: "Baby Green Dragon",
      d: "DragonBabyGreen.PNG"
    });
    a.n.push({
      o: "Baby Rainbow Dragon",
      d: "DragonBabyRainbow.PNG"
    });
    a.n.push({
      o: "Baby Silver Dragon",
      d: "DragonBabySilver.PNG"
    });
    a.n.push({
      o: "Baby Red Dragon",
      d: "DragonBabyRed.PNG"
    });
    a.n.push({
      o: "Baby Black Dragon",
      d: "DragonBabyBlack.PNG"
    });
    a.n.push({
      o: "Blue Dragon Man",
      d: "DragonManBlue.PNG"
    });
    a.n.push({
      o: "Bronze Dragon Man",
      d: "DragonManBronze.PNG"
    });
    a.n.push({
      o: "Gold Dragon Man",
      d: "DragonManGold.PNG"
    });
    a.n.push({
      o: "Green Dragon Man",
      d: "DragonManGreen.PNG"
    });
    a.n.push({
      o: "Rainbow Dragon Man",
      d: "DragonManRainbow.PNG"
    });
    a.n.push({
      o: "Silver Dragon Man",
      d: "DragonManSilver.PNG"
    });
    a.n.push({
      o: "Red Dragon Man",
      d: "DragonManRed.PNG"
    });
    a.n.push({
      o: "Black Dragon Man",
      d: "DragonManBlack.PNG"
    });
    a.n.push({
      o: "Pink Mummy",
      d: "MummyPink.PNG"
    });
    a.n.push({
      o: "Green Mummy",
      d: "MummyGreen.PNG"
    });
    a.n.push({
      o: "Grey Mummy",
      d: "MummyGrey.PNG"
    });
    a.n.push({
      o: "Purple Mummy",
      d: "MummyPurple.PNG"
    });
    a.n.push({
      o: "Red Mummy",
      d: "MummyRed.PNG"
    });
    a.n.push({
      o: "Teal Mummy",
      d: "MummyTeal.PNG"
    });
    a.n.push({
      o: "White Mummy",
      d: "MummyWhite.PNG"
    });
    a.n.push({
      o: "Black Mummy",
      d: "MummyYellow.PNG"
    });
    a.n.push({
      o: "Brown Scorpion",
      d: "ScorpionBrown.PNG"
    });
    a.n.push({
      o: "Blue Scorpion",
      d: "ScorpionBlue.PNG"
    });
    a.n.push({
      o: "Grey Scorpion",
      d: "ScorpionGrey.PNG"
    });
    a.n.push({
      o: "Pink Scorpion",
      d: "ScorpionPink.PNG"
    });
    a.n.push({
      o: "Green Scorpion",
      d: "ScorpionGreenYellow.PNG"
    });
    a.n.push({
      o: "Black Scorpion",
      d: "ScorpionBlack.PNG"
    });
    a.n.push({
      o: "Pink Dinosaur",
      d: "DinosaurBeastGiantPink.PNG"
    });
    a.n.push({
      o: "Brown Dinosaur",
      d: "DinosaurBeastGiantBrown.PNG"
    });
    a.n.push({
      o: "Yellow Dinosaur",
      d: "DinosaurBeastGiantYellow.PNG"
    });
    a.n.push({
      o: "Green Dinosaur",
      d: "DinosaurBeastGiantGreen.PNG"
    });
    a.n.push({
      o: "Grey Dinosaur",
      d: "DinosaurBeastGiantGrey.PNG"
    });
    a.n.push({
      o: "Red Dinosaur",
      d: "DinosaurBeastGiantRed.PNG"
    });
    a.n.push({
      o: "Young Blue Dragon",
      d: "DragonYoungBlue.PNG"
    });
    a.n.push({
      o: "Young Bronze Dragon",
      d: "DragonYoungBronze.PNG"
    });
    a.n.push({
      o: "Young Gold Dragon",
      d: "DragonYoungGold.PNG"
    });
    a.n.push({
      o: "Young Green Dragon",
      d: "DragonYoungGreen.PNG"
    });
    a.n.push({
      o: "Young Rainbow Dragon",
      d: "DragonYoungRainbow.PNG"
    });
    a.n.push({
      o: "Young Silver Dragon",
      d: "DragonYoungSilver.PNG"
    });
    a.n.push({
      o: "Young Red Dragon",
      d: "DragonYoungRed.PNG"
    });
    a.n.push({
      o: "Young Black Dragon",
      d: "DragonYoungBlack.PNG"
    });
    a.n.push({
      o: "Black Bear",
      d: "BlackBear.PNG"
    });
    a.n.push({
      o: "Brown Bear",
      d: "BrownBear.PNG"
    });
    a.n.push({
      o: "Grizzly Bear",
      d: "GrizzlyBear.PNG"
    });
    a.n.push({
      o: "Air Elemental",
      d: "ElementalAir.PNG"
    });
    a.n.push({
      o: "Water Elemental",
      d: "ElementalWater.PNG"
    });
    a.n.push({
      o: "Earth Elemental",
      d: "ElementalEarth.PNG"
    });
    a.n.push({
      o: "Stone Elemental",
      d: "ElementalStone.PNG"
    });
    a.n.push({
      o: "Fire Elemental",
      d: "ElementalFire.PNG"
    });
    a.n.push({
      o: "Void Elemental",
      d: "ElementalVoid.PNG"
    });
    a.n.push({
      o: "Zombie",
      d: "Zombie.PNG"
    });
    a.n.push({
      o: "Blue Zombie",
      d: "ZombieBlue.PNG"
    });
    a.n.push({
      o: "Red Zombie",
      d: "ZombieRed.PNG"
    });
    a.n.push({
      o: "Water Sprite",
      d: "SpriteWater.PNG"
    });
    a.n.push({
      o: "Fire Sprite",
      d: "SpriteFire.PNG"
    });
    a.n.push({
      o: "Brown Angel",
      d: "AngelBrown.PNG"
    });
    a.n.push({
      o: "Purple Angel",
      d: "AngelPurple.PNG"
    });
    a.n.push({
      o: "Blue Angel",
      d: "AngelBlue.PNG"
    });
    a.n.push({
      o: "Orange Angel",
      d: "AngelOrange.PNG"
    });
    a.n.push({
      o: "Grey Angel",
      d: "AngelGrey.PNG"
    });
    a.n.push({
      o: "Silver Angel",
      d: "AngelSilver.PNG"
    });
    a.n.push({
      o: "Scarlet Angel",
      d: "AngelRed.PNG"
    });
    a.n.push({
      o: "Dark Angel",
      d: "AngelGrey2.PNG"
    });
    a.n.push({
      o: "Brown Eagle Hound",
      d: "EagleHoundBrown.PNG"
    });
    a.n.push({
      o: "Blue Eagle Hound",
      d: "EagleHoundBlue.PNG"
    });
    a.n.push({
      o: "Gold Eagle Hound",
      d: "EagleHoundGold.PNG"
    });
    a.n.push({
      o: "Green Eagle Hound",
      d: "EagleHoundGreenDark.PNG"
    });
    a.n.push({
      o: "Grey Eagle Hound",
      d: "EagleHoundGrey.PNG"
    });
    a.n.push({
      o: "Dark Eagle Hound",
      d: "EagleHoundGrey2.PNG"
    });
    a.n.push({
      o: "Black Eagle Hound",
      d: "EagleHoundBlack.PNG"
    });
    a.n.push({
      o: "Brown Two-Headed Hydra",
      d: "Hydra2HeadBrown.PNG"
    });
    a.n.push({
      o: "Red Three-Headed Hydra",
      d: "Hydra3HeadRed.PNG"
    });
    a.n.push({
      o: "Grey Four-Headed Hydra",
      d: "Hydra4HeadGrey.PNG"
    });
    a.n.push({
      o: "White Five-Eyed Hydra",
      d: "Hydra5EyedWhite.PNG"
    });
    a.n.push({
      o: "Yellow Six-Headed Hydra",
      d: "Hydra6HeadYellow.PNG"
    });
    a.n.push({
      o: "Grey Seven-Headed Hydra",
      d: "Hydra7HeadGrey.PNG"
    });
    a.n.push({
      o: "Purple Eight-Headed Hydra",
      d: "Hydra8HeadPurple.PNG"
    });
    a.n.push({
      o: "Green Nine-Headed Hydra",
      d: "Hydra9HeadedGreen.PNG"
    });
    a.n.push({
      o: "Red Ten-Headed Hydra",
      d: "Hydra10HeadRed.PNG"
    });
    a.n.push({
      o: "Suburbanite",
      d: "People01.PNG"
    });
    a.n.push({
      o: "Octogenarian",
      d: "People02.PNG"
    });
    a.n.push({
      o: "Centenarian",
      d: "People03.PNG"
    });
    a.n.push({
      o: "Farmer",
      d: "PeopleFarmer.PNG"
    });
    a.n.push({
      o: "Hunchback",
      d: "PeopleHunchback.PNG"
    });
    a.n.push({
      o: "Pink Death Worm",
      d: "WormMassPinkGrey.PNG"
    });
    a.n.push({
      o: "Blue Death Worm",
      d: "WormMassBlue.PNG"
    });
    a.n.push({
      o: "Green Death Worm",
      d: "WormMassGreen.PNG"
    });
    a.n.push({
      o: "Grey Death Worm",
      d: "WormMassGrey.PNG"
    });
    a.n.push({
      o: "Red Death Worm",
      d: "WormMassRedPink.PNG"
    });
    a.n.push({
      o: "Teal Death Worm",
      d: "WormMassTeal.PNG"
    });
    a.n.push({
      o: "Yellow Death Worm",
      d: "WormMassYellow.PNG"
    });
    a.n.push({
      o: "Blue Wraith",
      d: "WraithBlue.PNG"
    });
    a.n.push({
      o: "Green Wraith",
      d: "WraithGreen.PNG"
    });
    a.n.push({
      o: "Grey Wraith",
      d: "WraithGrey.PNG"
    });
    a.n.push({
      o: "Orange Wraith",
      d: "WraithOrange.PNG"
    });
    a.n.push({
      o: "Purple Wraith",
      d: "WraithPurple.PNG"
    });
    a.n.push({
      o: "Red Wraith",
      d: "WraithRed.PNG"
    });
    a.n.push({
      o: "Wraith Lord",
      d: "WraithLord.PNG"
    });
    a.n.push({
      o: "King Wraith",
      d: "WraithKing.PNG"
    });
    a.n.push({
      o: "Brown Ooze",
      d: "OozeBrown.PNG"
    });
    a.n.push({
      o: "Blue Ooze",
      d: "OozeBlue.PNG"
    });
    a.n.push({
      o: "Green Ooze",
      d: "OozeGreen.PNG"
    });
    a.n.push({
      o: "Grey Ooze",
      d: "OozeGrey.PNG"
    });
    a.n.push({
      o: "Black Ooze",
      d: "OozeBlack.PNG"
    });
    a.n.push({
      o: "Brown Basilisk",
      d: "BasiliskBrown.PNG"
    });
    a.n.push({
      o: "Green Basilisk",
      d: "BasiliskGreen.PNG"
    });
    a.n.push({
      o: "Silver Basilisk",
      d: "BasiliskSilver.PNG"
    });
    a.n.push({
      o: "Scarlet Basilisk",
      d: "BasiliskRed.PNG"
    });
    a.n.push({
      o: "Blue Dragon",
      d: "DragonAdultBlue.PNG"
    });
    a.n.push({
      o: "Bronze Dragon",
      d: "DragonAdultBronze.PNG"
    });
    a.n.push({
      o: "Gold Dragon",
      d: "DragonAdultGold.PNG"
    });
    a.n.push({
      o: "Green Dragon",
      d: "DragonAdultGreen.PNG"
    });
    a.n.push({
      o: "Rainbow Dragon",
      d: "DragonAdultRainbow.PNG"
    });
    a.n.push({
      o: "Silver Dragon",
      d: "DragonAdultSilver.PNG"
    });
    a.n.push({
      o: "Red Dragon",
      d: "DragonAdultRed.PNG"
    });
    a.n.push({
      o: "Black Dragon",
      d: "DragonAdultBlack.PNG"
    });
    a.n.push({
      o: "Skeleton",
      d: "Skeleton.PNG"
    });
    a.n.push({
      o: "Rogue Skeleton",
      d: "SkeletonFighter.PNG"
    });
    a.n.push({
      o: "Demon Skeleton",
      d: "SkeletonDemon.PNG"
    });
    a.n.push({
      o: "Warrior Skeleton",
      d: "SkeletonFighter3.PNG"
    });
    a.n.push({
      o: "Barbarian Skeleton",
      d: "SkeletonFighter13.PNG"
    });
    a.n.push({
      o: "Blade Warrior Skeleton",
      d: "SkeletonFighter6.PNG"
    });
    a.n.push({
      o: "Demon Warrior Skeleton",
      d: "SkeletonDemonFighter.PNG"
    });
    a.n.push({
      o: "Green Spirit",
      d: "SpiritGreen.PNG"
    });
    a.n.push({
      o: "Brown Spirit",
      d: "SpiritBrown.PNG"
    });
    a.n.push({
      o: "Earth Spirit",
      d: "SpiritEarth.PNG"
    });
    a.n.push({
      o: "Air Spirit",
      d: "SpiritAir.PNG"
    });
    a.n.push({
      o: "Dark Spirit",
      d: "SpiritGreyDark.PNG"
    });
    a.n.push({
      o: "Fire Spirit",
      d: "SpiritFire.PNG"
    });
    a.n.push({
      o: "Fledgeling Vampire",
      d: "Vampire2.PNG"
    });
    a.n.push({
      o: "Vampire",
      d: "Vampire3.PNG"
    });
    a.n.push({
      o: "Elder Vampire",
      d: "Vampire4.PNG"
    });
    a.n.push({
      o: "Ancient Vampire",
      d: "VampireMage1.PNG"
    });
    a.n.push({
      o: "Ancient Blue Dragon",
      d: "DragonAncientBlue.PNG"
    });
    a.n.push({
      o: "Ancient Bronze Dragon",
      d: "DragonAncientBronze.PNG"
    });
    a.n.push({
      o: "Ancient Gold Dragon",
      d: "DragonAncientGold.PNG"
    });
    a.n.push({
      o: "Ancient White Dragon",
      d: "DragonAncientGoldWhite.PNG"
    });
    a.n.push({
      o: "Ancient Green Dragon",
      d: "DragonAncientGreen.PNG"
    });
    a.n.push({
      o: "Ancient Rainbow Dragon",
      d: "DragonAncientRainbow.PNG"
    });
    a.n.push({
      o: "Ancient Silver Dragon",
      d: "DragonAncientSilver.PNG"
    });
    a.n.push({
      o: "Ancient Red Dragon",
      d: "DragonAncientRed.PNG"
    });
    a.n.push({
      o: "Ancient Black Dragon",
      d: "DragonAncientBlack.PNG"
    });
    a.n.push({
      o: "Teal Golem",
      d: "GolemTeal.PNG"
    });
    a.n.push({
      o: "Brown Golem",
      d: "GolemBrown.PNG"
    });
    a.n.push({
      o: "Blue Golem",
      d: "GolemBlue.PNG"
    });
    a.n.push({
      o: "Grey Golem",
      d: "GolemGrey.PNG"
    });
    a.n.push({
      o: "Armed Golem",
      d: "GolemBrownStick.PNG"
    });
    a.n.push({
      o: "Golem Lord",
      d: "GolemBrownCaped.PNG"
    });
    a.n.push({
      o: "Electric Golem",
      d: "GolemElectric.PNG"
    });
    a.n.push({
      o: "Phantom Eye",
      d: "PhantomEye.PNG"
    });
    a.n.push({
      o: "Phantom Hand",
      d: "PhantomHand.PNG"
    });
    a.n.push({
      o: "Phantom Skull",
      d: "PhantomSkull.PNG"
    });
    a.n.push({
      o: "Blue Spectre",
      d: "SpectreBlue.PNG"
    });
    a.n.push({
      o: "Green Spectre",
      d: "SpectreGreen.PNG"
    });
    a.n.push({
      o: "Orange Spectre",
      d: "SpectreOrange.PNG"
    });
    a.n.push({
      o: "Purple Spectre",
      d: "SpectrePurple.PNG"
    });
    a.n.push({
      o: "Silver Spectre",
      d: "SpectreSilver.PNG"
    });
    a.n.push({
      o: "Red Spectre",
      d: "SpectreRed.PNG"
    });
    a.n.push({
      o: "Black Spectre",
      d: "SpectreBlack.PNG"
    });
    a.n.push({
      o: "Brown Trickster",
      d: "TricksterBrown.PNG"
    });
    a.n.push({
      o: "Blue Trickster",
      d: "TricksterBlue.PNG"
    });
    a.n.push({
      o: "Green Trickster",
      d: "TricksterGreen.PNG"
    });
    a.n.push({
      o: "Black Trickster",
      d: "TricksterBlack.PNG"
    });
    a.n.push({
      o: "Red Trickster",
      d: "TricksterRed.PNG"
    });
    a.n.push({
      o: "Magical Trickster",
      d: "TricksterPurpleMage.PNG"
    });
    a.n.push({
      o: "Dark Troll",
      d: "TrollDark.PNG"
    });
    a.n.push({
      o: "Warrior Troll",
      d: "TrollFighter2.PNG"
    });
    a.n.push({
      o: "Fire Troll",
      d: "TrollFire.PNG"
    });
    a.n.push({
      o: "Stone Troll",
      d: "TrollGrey.PNG"
    });
    a.n.push({
      o: "Water Troll",
      d: "TrollWater.PNG"
    });
    a.n.push({
      o: "Zombie Troll",
      d: "TrollZombie.PNG"
    });
    a.n.push({
      o: "King Troll",
      d: "TrollKing.PNG"
    });
    a.n.push({
      o: "Blue Dragon Lord",
      d: "DragonAncientLordBlue.PNG"
    });
    a.n.push({
      o: "Bronze Dragon Lord",
      d: "DragonAncientLordBronze.PNG"
    });
    a.n.push({
      o: "Green Dragon Lord",
      d: "DragonAncientLordGreen.PNG"
    });
    a.n.push({
      o: "Silver Dragon Lord",
      d: "DragonAncientLordSilver.PNG"
    });
    a.n.push({
      o: "Red Dragon Lord",
      d: "DragonAncientLordRed.PNG"
    });
    a.n.push({
      o: "Black Dragon Lord",
      d: "DragonAncientLordBlack.PNG"
    });
    a.n.push({
      o: "Evil Dragon Lord",
      d: "DragonAncientLordSilverRed.PNG"
    });
    a.n.push({
      o: "Giant Blue Drake",
      d: "DrakeGiantBlue.PNG"
    });
    a.n.push({
      o: "Giant Bronze Drake",
      d: "DrakeGiantBronze.PNG"
    });
    a.n.push({
      o: "Giant Grey Drake",
      d: "DrakeGiantGrey.PNG"
    });
    a.n.push({
      o: "Giant White Drake",
      d: "DrakeGiantWhite.PNG"
    });
    a.n.push({
      o: "Giant Red Drake",
      d: "DrakeGiantRed.PNG"
    });
    a.n.push({
      o: "Giant Blood Drake",
      d: "DrakeGiantRed2.PNG"
    });
    a.n.push({
      o: "Giant Black Drake",
      d: "DrakeGiantBlack.PNG"
    });
    a.n.push({
      o: "Bone Dragon",
      d: "DragonGiantBone.PNG"
    });
    a.n.push({
      o: "Blue Bone Dragon",
      d: "DragonGiantBoneBlue.PNG"
    });
    a.n.push({
      o: "Green Bone Dragon",
      d: "DragonGiantBoneGreen.PNG"
    });
    a.n.push({
      o: "Grey Bone Dragon",
      d: "DragonGiantBoneGrey.PNG"
    });
    a.n.push({
      o: "Red Bone Dragon",
      d: "DragonGiantBoneRed.PNG"
    });
    a.n.push({
      o: "Frost Giant",
      d: "GiantFrost.PNG"
    });
    a.n.push({
      o: "Hill Giant",
      d: "GiantHill.PNG"
    });
    a.n.push({
      o: "Storm Giant",
      d: "GiantStorm.PNG"
    });
    a.n.push({
      o: "Two-Headed Giant",
      d: "GiantTwoHeaded.PNG"
    });
    a.n.push({
      o: "Cloud Giant",
      d: "GiantCloud.PNG"
    });
    a.n.push({
      o: "Fire Giant",
      d: "GiantFire.PNG"
    });
    a.n.push({
      o: "Murder Cow",
      d: "CowLeft.PNG"
    });
    a.n.push({
      o: "Nightmare Chicken",
      d: "Chicken1.PNG"
    });
    a.n.push({
      o: "Death Chicken",
      d: "Chicken2.PNG"
    });
    a.n.push({
      o: "Grey Skeleton Lord",
      d: "SkeletonFighterLord1.PNG"
    });
    a.n.push({
      o: "Purple Skeleton Lord",
      d: "SkeletonFighterLord2.PNG"
    });
    a.n.push({
      o: "Blue Skeleton Lord",
      d: "SkeletonFighterLord3.PNG"
    });
    a.n.push({
      o: "Orange Skeleton Lord",
      d: "SkeletonFighterLord4.PNG"
    });
    a.n.push({
      o: "Skeleton King",
      d: "SkeletonKing.PNG"
    });
    var b = w.Sm;
    b.os = {};
    b.ps = {};
    var c = {
        fa: "Sword",
        na: !0,
        oa: !1,
        ma: !1,
        la: !1,
        Z: ["20"]
      },
      d = {
        fa: "Axe",
        na: !0,
        oa: !1,
        ma: !1,
        la: !1,
        Z: ["21"]
      },
      f = {
        fa: "Hammer",
        na: !0,
        oa: !1,
        ma: !1,
        la: !1,
        Z: ["21"]
      },
      g = {
        fa: "Dagger",
        na: !0,
        oa: !1,
        ma: !1,
        la: !1,
        Z: ["24", "33"]
      },
      h = {
        fa: "Flail",
        na: !0,
        oa: !1,
        ma: !1,
        la: !1,
        Z: ["22", "20", "21"]
      },
      l = {
        fa: "Mace",
        na: !0,
        oa: !1,
        ma: !1,
        la: !1,
        Z: ["22", "20"]
      },
      n = {
        fa: "Scepter",
        na: !0,
        oa: !1,
        ma: !1,
        la: !1,
        Z: ["32"]
      },
      p = {
        fa: "Nunchaku",
        na: !0,
        oa: !1,
        ma: !1,
        la: !1,
        Z: ["29"]
      },
      s = {
        fa: "Staff",
        na: !1,
        oa: !1,
        ma: !1,
        la: !0,
        Z: ["26", "27", "28", "31"]
      },
      u = {
        fa: "Scythe",
        na: !0,
        oa: !1,
        ma: !1,
        la: !1,
        Z: ["30"]
      },
      y = {
        fa: "Bones",
        na: !1,
        oa: !1,
        ma: !1,
        la: !0,
        Z: ["201"]
      },
      A = {
        fa: "Candle",
        na: !1,
        oa: !1,
        ma: !1,
        la: !0,
        Z: ["203"]
      },
      C = {
        fa: "Lantern",
        na: !1,
        oa: !1,
        ma: !1,
        la: !0,
        Z: ["203"]
      },
      v = {
        fa: "Light",
        na: !1,
        oa: !1,
        ma: !1,
        la: !0,
        Z: ["203"]
      },
      D = {
        fa: "Coins",
        na: !1,
        oa: !1,
        ma: !1,
        la: !0,
        Z: ["205"]
      },
      N = {
        fa: "Jewels",
        na: !1,
        oa: !1,
        ma: !1,
        la: !0,
        Z: ["205"]
      },
      I = {
        fa: "Bow",
        na: !1,
        oa: !1,
        ma: !1,
        la: !0,
        Z: ["23"]
      },
      x = {
        fa: "Crossbow",
        na: !1,
        oa: !1,
        ma: !1,
        la: !0,
        Z: ["25"]
      },
      z = {
        fa: "Arrows",
        na: !1,
        oa: !0,
        ma: !1,
        la: !1,
        Xn: 1,
        Z: ["60"]
      },
      O = {
        fa: "Bolts",
        na: !1,
        oa: !0,
        ma: !1,
        la: !1,
        Xn: 2,
        Z: ["61"]
      },
      J = {
        fa: "Shield",
        na: !1,
        oa: !1,
        ma: !0,
        la: !1,
        Z: ["40", "41"]
      },
      la = {
        fa: "Chainmail",
        na: !1,
        oa: !1,
        ma: !0,
        la: !1,
        Z: ["80", "82", "81"]
      },
      Q = {
        fa: "Plate Armor",
        na: !1,
        oa: !1,
        ma: !0,
        la: !1,
        Z: ["80", "81"]
      },
      V = {
        fa: "Plate Armor",
        na: !1,
        oa: !1,
        ma: !0,
        la: !1,
        Z: ["80", "82", "81"]
      },
      na = {
        fa: "Leather Armor",
        na: !1,
        oa: !1,
        ma: !0,
        la: !1,
        Z: ["84", "83"]
      },
      K = {
        fa: "Necklace",
        na: !1,
        oa: !1,
        ma: !1,
        la: !0,
        Z: "140 141 142 143 145 144".split(" ")
      },
      H = {
        fa: "Ring",
        na: !1,
        oa: !1,
        ma: !1,
        la: !0,
        Z: "160 161 162 163 164 165".split(" ")
      },
      S = {
        fa: "Glyph",
        na: !1,
        oa: !1,
        ma: !1,
        la: !0,
        Z: ["200"]
      },
      da = {
        fa: "Mushroom",
        na: !1,
        oa: !1,
        ma: !1,
        la: !0,
        Z: ["202", "204"]
      },
      W = {
        fa: "Helmet",
        na: !1,
        oa: !1,
        ma: !0,
        la: !1,
        Z: ["120"]
      },
      ia = {
        fa: "Crown",
        na: !1,
        oa: !1,
        ma: !0,
        la: !1,
        Z: ["125"]
      },
      ea = {
        fa: "Wizard Hat",
        na: !1,
        oa: !1,
        ma: !0,
        la: !1,
        Z: ["121", "122", "123", "124"]
      },
      va = {
        fa: "Gloves",
        na: !1,
        oa: !1,
        ma: !0,
        la: !1,
        Z: ["100", "101", "102"]
      },
      yb = {
        fa: "Gauntlets",
        na: !1,
        oa: !1,
        ma: !0,
        la: !1,
        Z: ["101", "102"]
      },
      Fb = {
        fa: "Robes",
        na: !1,
        oa: !1,
        ma: !0,
        la: !1,
        Z: ["85", "86", "87", "89", "91"]
      },
      pa = {
        fa: "Cloak",
        na: !1,
        oa: !1,
        ma: !0,
        la: !1,
        Z: "85 86 87 88 90 92".split(" ")
      },
      T = {
        fa: "Wand",
        na: !1,
        oa: !1,
        ma: !1,
        la: !0,
        Z: ["26"]
      },
      X = {
        fa: "Boots",
        na: !1,
        oa: !1,
        ma: !0,
        la: !1,
        Z: "181 185 182 183 184 180 186".split(" ")
      },
      Ca = {
        fa: "Belt",
        na: !1,
        oa: !1,
        ma: !0,
        la: !1,
        Z: ["3", "4", "5", "6", "7"]
      };
    L(b,
      la, "ArmorChainMailRusty.PNG");
    L(b, la, "ArmorChainMail.PNG");
    L(b, la, "ArmorChainMailAugmented.PNG");
    L(b, la, "ArmorChainMailBar.PNG");
    L(b, la, "ArmorChainmailGolden.PNG");
    L(b, la, "ArmorChainmailGreen.PNG");
    L(b, la, "ArmorChainmailMithril.PNG");
    L(b, V, "ArmorLeatherScaleMail.PNG");
    L(b, V, "ArmorMetalScaleMail.PNG");
    L(b, V, "ArmorScalemailDragonGrey.PNG");
    L(b, V, "ArmorScalemailDragonDarkGrey.PNG");
    L(b, V, "ArmorScalemailDragonWhite.PNG");
    L(b, V, "ArmorScalemailDragonBlue.PNG");
    L(b, V, "ArmorScalemailDragonBronze.PNG");
    L(b,
      V, "ArmorScalemailDragonGolden.PNG");
    L(b, V, "ArmorScalemailDragonGreen.PNG");
    L(b, V, "ArmorScalemailDragonLightBlue.PNG");
    L(b, V, "ArmorScalemailDragonPurple.PNG");
    L(b, V, "ArmorScalemailDragonRed.PNG");
    L(b, V, "ArmorScalemailDragonYellow.PNG");
    L(b, V, "ArmorScalemailDragonRainbow.PNG");
    L(b, V, "ArmorScalemailDragonHellfire.PNG");
    L(b, Q, "ArmorPlatemailPartial.PNG");
    L(b, Q, "ArmorPlatemailFull.PNG");
    L(b, Q, "ArmorPlatemailRibbed.PNG");
    L(b, Q, "ArmorPlatemailEnhancedSteel.PNG");
    L(b, Q, "ArmorPlatemailEnhancedBrown.PNG");
    L(b, Q, "ArmorPlatemailEnhancedPurple.PNG");
    L(b, Q, "ArmorPlatemailEnhancedBlue.PNG");
    L(b, Q, "ArmorPlatemailEnhancedGreen.PNG");
    L(b, Q, "ArmorPlatemailEnhancedYellow.PNG");
    L(b, Q, "ArmorPlatemailStuddedGolden.PNG");
    L(b, Q, "ArmorPlatemailStuddedGreen.PNG");
    L(b, Q, "ArmorPlatemailMithril.PNG");
    L(b, Q, "ArmorPlatemailAdamantite.PNG");
    L(b, na, "ArmorLeatherSoft.PNG");
    L(b, na, "ArmorLeatherHard.PNG");
    L(b, na, "ArmorLeatherScaleMail.PNG");
    L(b, na, "ArmorLeatherHardStudded.PNG");
    L(b, na, "ArmorLeatherSoftStudded.PNG");
    L(b, c, "Sword01.PNG");
    L(b, c, "Sword02.PNG");
    L(b, c, "Sword03.PNG");
    L(b, c, "Sword04.PNG");
    L(b, c, "Sword05.PNG");
    L(b, c, "Sword06.PNG");
    L(b, c, "Sword07.PNG");
    L(b, c, "Sword08.PNG");
    L(b, c, "Sword09.PNG");
    L(b, c, "Sword10.PNG");
    L(b, c, "Sword11.PNG");
    L(b, c, "Sword12.PNG");
    L(b, c, "Sword13.PNG");
    L(b, c, "Sword14.PNG");
    L(b, c, "Sword15.PNG");
    L(b, c, "Sword16.PNG");
    L(b, c, "Sword17.PNG");
    L(b, c, "Sword18.PNG");
    L(b, c, "Sword19.PNG");
    L(b, c, "Sword20.PNG");
    L(b, c, "Sword21.PNG");
    L(b, c, "Sword22.PNG");
    L(b, c, "Sword23.PNG");
    L(b, c, "Sword24.PNG");
    L(b, c, "Sword25.PNG");
    L(b, c, "Sword26.PNG");
    L(b, c, "Sword27.PNG");
    L(b, c, "Sword28.PNG");
    L(b, c, "SwordFlaming.PNG");
    L(b, c, "SwordMagical.PNG");
    L(b, c, "SwordMedievalMagical.PNG");
    L(b, J, "ShieldWoodLarge.PNG");
    L(b, J, "ShieldWoodSmall.PNG");
    L(b, J, "ShieldWoodenRound.PNG");
    L(b, J, "ShieldSmallSteel.PNG");
    L(b, J, "ShieldSteelRoundLarge.PNG");
    L(b, J, "ShieldTriangular.PNG");
    L(b, J, "ShieldKiteRed.PNG");
    L(b, J, "Knight_Shield.PNG");
    L(b, J, "ShieldCrossed.PNG");
    L(b, J, "ShieldCrossRed.PNG");
    L(b, J, "DarkLord_Shield.PNG");
    L(b, J, "ShieldFourColoredBlueYellow.PNG");
    L(b, J, "ShieldFourColoredRedYellow.PNG");
    L(b, J, "ShieldFourColoredSilverYellow.PNG");
    L(b, J, "ShieldStripeRed.PNG");
    L(b, J, "ShieldColored1.PNG");
    L(b, J, "Valors_Shield.PNG");
    L(b, J, "DefenderShield01.PNG");
    L(b, J, "ShieldCrestedCrown.PNG");
    L(b, J, "ShieldCrestedGolden.PNG");
    L(b, J, "ShieldCrestedLion.PNG");
    L(b, J, "ShieldCrestedLion2.PNG");
    L(b, J, "ShieldCrestedSkull.PNG");
    L(b, J, "ShieldCrestedUnicorn.PNG");
    L(b, J, "ShieldCrestedUnicorn2.PNG");
    L(b, l, "Mace.PNG");
    L(b, l, "MaceWood.PNG");
    L(b, l, "Mace01.PNG");
    L(b, l, "Mace02.PNG");
    L(b, l, "Mace03.PNG");
    L(b, l, "Mace04.PNG");
    L(b, l, "Mace05.PNG");
    L(b, l, "Mace06.PNG");
    L(b, l, "Mace07.PNG");
    L(b, l, "Mace08.PNG");
    L(b, l, "MaceWar.PNG");
    L(b, l, "MaceGolden.PNG");
    L(b, l, "MaceMagic.PNG");
    L(b, h, "Flail01.PNG");
    L(b, h, "Flail02.PNG");
    L(b, h, "Flail03.PNG");
    L(b, h, "Flail04.PNG");
    L(b, h, "FlailSteel.PNG");
    L(b, h, "FlailTwoHanded.PNG");
    L(b, h, "FlailWood.PNG");
    L(b, h, "Flail05.PNG");
    L(b, h, "Flail06.PNG");
    L(b, h, "Flail07.PNG");
    L(b, h, "DoubleFlail01.PNG");
    L(b, h, "DoubleFlail02.PNG");
    L(b, h, "DoubleFlail03.PNG");
    L(b, d, "AxeBeaked.PNG");
    L(b, d, "AxeGlaive.PNG");
    L(b, d, "Axe01.PNG");
    L(b, d, "Axe02.PNG");
    L(b, d, "Axe03.PNG");
    L(b, d, "Axe04.PNG");
    L(b, d, "Axe05.PNG");
    L(b, d, "Axe06.PNG");
    L(b, d, "Axe07.PNG");
    L(b, d, "Axe08.PNG");
    L(b, d, "Axe09.PNG");
    L(b, d, "Axe10.PNG");
    L(b, d, "Axe11.PNG");
    L(b, d, "Axe12.PNG");
    L(b, d, "Axe13.PNG");
    L(b, d, "Axe14.PNG");
    L(b, d, "AxeBattle.PNG");
    L(b, d, "AxeBroad.PNG");
    L(b, d, "AxeGolden.PNG");
    L(b, d, "AxeGreat.PNG");
    L(b, d, "AxeLochaber.PNG");
    L(b, f, "Ahammer1.PNG");
    L(b, f, "Hammer01.PNG");
    L(b, f, "Hammer02.PNG");
    L(b, f, "Hammer03.PNG");
    L(b, f, "Hammer04.PNG");
    L(b, f, "Hammer05.PNG");
    L(b, f, "HammerGiant.PNG");
    L(b, f, "HammerGolden.PNG");
    L(b, f, "HammerLucerne.PNG");
    L(b, f, "HammerWar.PNG");
    L(b, g, "Dagger.PNG");
    L(b, g, "Dagger01.PNG");
    L(b, g, "Dagger02.PNG");
    L(b, g, "Dagger03.PNG");
    L(b, g, "Dagger04.PNG");
    L(b, g, "Dagger05.PNG");
    L(b, g, "Dagger06.PNG");
    L(b, g, "Dagger07.PNG");
    L(b, g, "Dagger08.PNG");
    L(b, g, "Dagger09.PNG");
    L(b, g, "Dagger10.PNG");
    L(b, g, "DaggerGauche.PNG");
    L(b, p, "Nunchaku.PNG");
    L(b, p, "NunchakuGolden.PNG");
    L(b, n, "Scepter01.PNG");
    L(b, n, "Scepter02.PNG");
    L(b, n, "Scepter03.PNG");
    L(b, n, "Scepter04.PNG");
    L(b, n, "Scepter05.PNG");
    L(b, n, "Scepter06.PNG");
    L(b, n, "Scepter07.PNG");
    L(b, n, "Scepter08.PNG");
    L(b, n, "Scepter09.PNG");
    L(b, n, "Scepter10.PNG");
    L(b, n, "Scepter11.PNG");
    L(b, n, "Scepter12.PNG");
    L(b, n, "Scepter13.PNG");
    L(b, n, "Scepter14.PNG");
    L(b, n, "Scepter15.PNG");
    L(b, n, "Scepter16.PNG");
    L(b, n, "Scepter17.PNG");
    L(b, n, "Scepter18.PNG");
    L(b, u, "Scythe01.PNG");
    L(b, u, "Scythe02.PNG");
    L(b, u, "ScytheSteel.PNG");
    L(b, u, "ScytheWood.PNG");
    L(b, s, "Staff01.PNG");
    L(b, s, "Staff02.PNG");
    L(b, s, "Staff03.PNG");
    L(b, s, "Staff04.PNG");
    L(b, s, "Staff05.PNG");
    L(b, s, "Staff06.PNG");
    L(b, s, "Staff07.PNG");
    L(b, s, "Staff08.PNG");
    L(b, s, "Staff09.PNG");
    L(b, s, "Staff10.PNG");
    L(b, s, "Staff11.PNG");
    L(b, s, "Staff12.PNG");
    L(b, s, "Staff13.PNG");
    L(b, s, "Staff14.PNG");
    L(b, s, "Staff15.PNG");
    L(b, s, "Staff16.PNG");
    L(b, s, "Staff17.PNG");
    L(b, s, "Staff18.PNG");
    L(b, s, "Staff19.PNG");
    L(b, s, "Staff20.PNG");
    L(b, s, "Staff21.PNG");
    L(b, s, "Staff22.PNG");
    L(b, s, "Staff23.PNG");
    L(b, s, "StaffBronze.PNG");
    L(b, s, "StaffDarkYellow.PNG");
    L(b, s, "StaffGold.PNG");
    L(b,
      s, "StaffGoldScales.PNG");
    L(b, s, "StaffGoldStriped.PNG");
    L(b, s, "StaffRedStriped.PNG");
    L(b, s, "StaffSilver.PNG");
    L(b, y, "SkeletonBrokenBone.PNG");
    L(b, y, "SkeletonDog.PNG");
    L(b, y, "SkeletonHumanSmall.PNG");
    L(b, y, "SkeletonRat.PNG");
    L(b, y, "SkeletonSkull.PNG");
    L(b, A, "CandleStand1.PNG");
    L(b, A, "CandleStand2.PNG");
    L(b, C, "Lantern.PNG");
    L(b, C, "LanternBronze.PNG");
    L(b, {
      fa: "Torch",
      na: !1,
      oa: !1,
      ma: !1,
      la: !0,
      Z: ["203"]
    }, "Torch.PNG");
    L(b, v, "LightChalice.PNG");
    L(b, v, "LightOrb.PNG");
    L(b, v, "LightStar.PNG");
    L(b, D, "CoinsBronze.PNG");
    L(b, D, "CoinsGold.PNG");
    L(b, D, "CoinsGoldLarge.PNG");
    L(b, D, "CoinsGoldMedium.PNG");
    L(b, D, "CoinsGoldSmall.PNG");
    L(b, D, "CoinsGreen.PNG");
    L(b, D, "CoinsSilver.PNG");
    L(b, D, "CoinsTeal.PNG");
    L(b, N, "Jewels.PNG");
    L(b, N, "JewelsBlue.PNG");
    L(b, N, "JewelsRed.PNG");
    L(b, I, "BowShort.PNG");
    L(b, I, "Bow01.PNG");
    L(b, I, "Bow02.PNG");
    L(b, I, "Bow03.PNG");
    L(b, I, "Bow04.PNG");
    L(b, I, "Bow05.PNG");
    L(b, I, "Bow06.PNG");
    L(b, I, "Bow07.PNG");
    L(b, I, "Bow08.PNG");
    L(b, I, "Bow09.PNG");
    L(b, I, "Bow10.PNG");
    L(b, I, "BowLong.PNG");
    L(b, x, "Xbow01.PNG");
    L(b,
      x, "Xbow02.PNG");
    L(b, x, "Xbow03.PNG");
    L(b, x, "Xbow04.PNG");
    L(b, x, "Xbow05.PNG");
    L(b, x, "Xbow06.PNG");
    L(b, x, "Crossbow2.PNG");
    L(b, x, "CrossbowHeavy.PNG");
    L(b, x, "CrossbowLight.PNG");
    L(b, z, "ArrowWood.PNG");
    L(b, z, "ArrowSteel.PNG");
    L(b, z, "ArrowGolden.PNG");
    L(b, z, "ArrowSilver.PNG");
    L(b, z, "ArrowFlaming.PNG");
    L(b, z, "ArrowFlaming2.PNG");
    L(b, z, "ArrowMagicBlue.PNG");
    L(b, z, "ArrowMagicPurple.PNG");
    L(b, z, "ArrowPoisoned1.PNG");
    L(b, z, "ArrowPoisoned2.PNG");
    L(b, z, "ArrowPoisoned3.PNG");
    L(b, z, "ArrowPoisoned4.PNG");
    L(b, O, "BoltSteel.PNG");
    L(b, O, "BoltSilver.PNG");
    L(b, O, "BoltFlaming.PNG");
    L(b, O, "BoltFlaming2.PNG");
    L(b, O, "BoltGolden.PNG");
    L(b, O, "BoltMagicGreen.PNG");
    L(b, O, "BoltMagicRed.PNG");
    L(b, O, "BoltPoisoned.PNG");
    L(b, O, "BoltPoisoned2.PNG");
    L(b, O, "BoltPoisoned3.PNG");
    L(b, O, "BoltPoisoned4.PNG");
    L(b, O, "BoltWood.PNG");
    L(b, {
      fa: "Star",
      na: !1,
      oa: !0,
      ma: !1,
      la: !1,
      Xn: 3,
      Z: ["62"]
    }, "ThrowingStar.PNG");
    L(b, K, "NecklaceJewelSilver5.PNG");
    L(b, K, "NecklaceSilverJewelGreen.PNG");
    L(b, K, "NecklaceSilverJewelOrange.PNG");
    L(b, K, "NecklaceBronzeJewelRed.PNG");
    L(b, K, "NecklaceGoldJewelBlue.PNG");
    L(b, K, "NecklaceGoldJewelGreen.PNG");
    L(b, K, "NecklaceGoldJewelSilver.PNG");
    L(b, K, "NecklaceGoldJewelSilver2.PNG");
    L(b, K, "NecklaceJewelBlue.PNG");
    L(b, K, "NecklaceJewelRed.PNG");
    L(b, K, "NecklaceJewelRed2.PNG");
    L(b, K, "NecklaceJewelRed3.PNG");
    L(b, K, "NecklaceJewelSilver.PNG");
    L(b, K, "NecklaceJewelSilver2.PNG");
    L(b, K, "NecklaceJewelSilver3.PNG");
    L(b, K, "NecklaceJewelSilver4.PNG");
    L(b, H, "RingBronze.PNG");
    L(b, H, "RingGold.PNG");
    L(b, H, "RingGoldJeweledBlue.PNG");
    L(b, H, "RingGoldJeweledRed.PNG");
    L(b, H, "RingGoldJeweledYellowMagic.PNG");
    L(b, H, "RingGoldMagic.PNG");
    L(b, H, "RingJewelBlack.PNG");
    L(b, H, "RingJewelBlue.PNG");
    L(b, H, "RingJeweledRed2.PNG");
    L(b, H, "RingJewelGreen.PNG");
    L(b, H, "RingJewelOrange.PNG");
    L(b, H, "RingJewelPurple.PNG");
    L(b, H, "RingJewelRed.PNG");
    L(b, H, "RingPlainGrey.PNG");
    L(b, H, "RingPlainSilver.PNG");
    L(b, H, "RingPurple.PNG");
    L(b, H, "RingSilverJeweledBlueMagic.PNG");
    L(b, H, "RingSilverJeweledGreen.PNG");
    L(b, H, "RingSilverJeweledGreenMagic.PNG");
    L(b, H, "RingSilverJeweledMagenta.PNG");
    L(b,
      H, "RingSilverJeweledPurple.PNG");
    L(b, H, "RingSilverJeweledRedMagic.PNG");
    L(b, H, "RingSilverJeweledSilver.PNG");
    L(b, H, "RingSilverJeweledSilver2.PNG");
    L(b, S, "GlyphGreen.PNG");
    L(b, S, "GlyphRed.PNG");
    L(b, S, "GlyphYellow.PNG");
    L(b, {
      fa: "Bread",
      na: !1,
      oa: !1,
      ma: !1,
      la: !0,
      Z: ["204"]
    }, "FoodBread.PNG");
    L(b, {
      fa: "Beer",
      na: !1,
      oa: !1,
      ma: !1,
      la: !0,
      Z: ["204"]
    }, "FoodAle.PNG");
    L(b, {
      fa: "Drumstick",
      na: !1,
      oa: !1,
      ma: !1,
      la: !0,
      Z: ["204"]
    }, "FoodDrumstick.PNG");
    L(b, {
      fa: "Ham",
      na: !1,
      oa: !1,
      ma: !1,
      la: !0,
      Z: ["204"]
    }, "FoodShank.PNG");
    L(b, da, "FoodMushroomBlack.PNG");
    L(b, da, "FoodMushroomBlue.PNG");
    L(b, da, "FoodMushroomBrown.PNG");
    L(b, da, "FoodMushroomGreen.PNG");
    L(b, da, "FoodMushroomGreen2.PNG");
    L(b, da, "FoodMushroomGrey.PNG");
    L(b, da, "FoodMushroomGrey2.PNG");
    L(b, da, "FoodMushroomOrange.PNG");
    L(b, da, "FoodMushroomPurple.PNG");
    L(b, da, "FoodMushroomRed.PNG");
    L(b, da, "FoodMushroomRed2.PNG");
    L(b, da, "FoodMushroomSilver.PNG");
    L(b, da, "FoodMushroomTan.PNG");
    L(b, da, "FoodMushroomTeal.PNG");
    L(b, da, "FoodMushroomWhite.PNG");
    L(b, da, "FoodMushroomYellow.PNG");
    L(b, W, "CapIron.PNG");
    L(b,
      W, "CapLeather.PNG");
    L(b, W, "CapLeatherHard.PNG");
    L(b, W, "CapMetal.PNG");
    L(b, W, "CapSteel.PNG");
    L(b, W, "Valors_Helm.PNG");
    L(b, W, "Knight_Helm.PNG");
    L(b, W, "DarkLord_Helm.PNG");
    L(b, W, "GuardHelm01.PNG");
    L(b, W, "HelmHorned.PNG");
    L(b, W, "CapGolden.PNG");
    L(b, ia, "CrownGolden.PNG");
    L(b, ia, "CrownIron.PNG");
    L(b, ia, "CrownIronJeweled.PNG");
    L(b, ia, "CrownJeweled.PNG");
    L(b, ia, "CrownOfTheMagi.PNG");
    L(b, ia, "CapGolden.PNG");
    L(b, ea, "WizardHat01.PNG");
    L(b, ea, "WizardHat02.PNG");
    L(b, ea, "WizardHat03.PNG");
    L(b, ea, "WizardHat04.PNG");
    L(b, ea, "WizardHat05.PNG");
    L(b, va, "GlovesLeatherHard.PNG");
    L(b, va, "GlovesLeatherSoft.PNG");
    L(b, va, "GlovesSteel.PNG");
    L(b, va, "GlovesGolden.PNG");
    L(b, va, "GlovesGreen.PNG");
    L(b, va, "GlovesSteelBlue.PNG");
    L(b, yb, "Valors_Gauntlets.PNG");
    L(b, yb, "Knight_Gauntlets.PNG");
    L(b, yb, "DarkLord_Gauntlets.PNG");
    L(b, Fb, "RobeBlue.PNG");
    L(b, Fb, "RobeGreen.PNG");
    L(b, Fb, "RobePurple.PNG");
    L(b, Fb, "RobeRed.PNG");
    L(b, pa, "CloakBlue.PNG");
    L(b, pa, "CloakBrown.PNG");
    L(b, pa, "CloakDarkGrey.PNG");
    L(b, pa, "CloakGreen.PNG");
    L(b, pa, "CloakLightBlue.PNG");
    L(b, pa, "CloakPurple.PNG");
    L(b, pa, "CloakRed.PNG");
    L(b, pa, "CloakSilver.PNG");
    L(b, pa, "CloakWhite.PNG");
    L(b, T, "Wand01.PNG");
    L(b, T, "Wand02.PNG");
    L(b, T, "Wand03.PNG");
    L(b, T, "Wand04.PNG");
    L(b, T, "Wand05.PNG");
    L(b, T, "Wand06.PNG");
    L(b, T, "Wand07.PNG");
    L(b, T, "Wand08.PNG");
    L(b, T, "Wand09.PNG");
    L(b, T, "Wand10.PNG");
    L(b, T, "Wand11.PNG");
    L(b, T, "Wand12.PNG");
    L(b, T, "Wand13.PNG");
    L(b, T, "Wand14.PNG");
    L(b, T, "Wand15.PNG");
    L(b, T, "Wand16.PNG");
    L(b, T, "Wand17.PNG");
    L(b, T, "Wand18.PNG");
    L(b, T, "Wand19.PNG");
    L(b, T, "WandBronzeGold.PNG");
    L(b, T, "WandBronzeRed.PNG");
    L(b, T, "WandBronzeSilver.PNG");
    L(b, T, "WandGold.PNG");
    L(b, T, "WandSilver.PNG");
    L(b, T, "WandSilverBronze.PNG");
    L(b, T, "WandSilverGold.PNG");
    L(b, T, "WandSilverTeal.PNG");
    L(b, T, "WandTeal.PNG");
    L(b, X, "BootsLeatherHard.PNG");
    L(b, X, "BootsLeatherSoft.PNG");
    L(b, X, "Warmboots01.PNG");
    L(b, X, "Warmboots02.PNG");
    L(b, X, "Warmboots03.PNG");
    L(b, X, "Warmboots04.PNG");
    L(b, X, "Warmboots05.PNG");
    L(b, X, "NewBoots01.PNG");
    L(b, X, "NewBoots02.PNG");
    L(b, X, "NewBoots03.PNG");
    L(b, X, "NewBoots04.PNG");
    L(b, X, "NewBoots05.PNG");
    L(b, X, "NewBoots06.PNG");
    L(b, X, "BootsGreen.PNG");
    L(b, X, "BootsMetal.PNG");
    L(b, X, "Knight_Boots.PNG");
    L(b, X, "DarkLord_Boots.PNG");
    L(b, X, "BootsGolden.PNG");
    L(b, X, "Valors_Boots.PNG");
    L(b, Ca, "Belt1.PNG");
    L(b, Ca, "DarkLord_Belt.PNG");
    L(b, Ca, "Belt2.PNG");
    L(b, Ca, "Belt3.PNG");
    L(b, Ca, "Belt4.PNG");
    L(b, Ca, "Valors_Belt.PNG");
    L(b, Ca, "Knight_Belt.PNG");
    L(b, {
      fa: "Virtual Damage",
      na: !1,
      oa: !0,
      ma: !1,
      la: !1,
      Z: ["230"]
    }, "Spear.PNG");
    L(b, {
      fa: "Virtual Armor",
      na: !1,
      oa: !1,
      ma: !1,
      la: !0,
      Z: ["231"]
    }, "Spear.PNG");
    L(b, {
      fa: "Virtual Attack Rating",
      na: !1,
      oa: !1,
      ma: !1,
      la: !0,
      Z: ["232"]
    }, "Spear.PNG");
    L(b, {
      fa: "Virtual Defense Rating",
      na: !1,
      oa: !1,
      ma: !1,
      la: !0,
      Z: ["233"]
    }, "Spear.PNG");
    L(b, {
      fa: "Virtual Max Health",
      na: !1,
      oa: !1,
      ma: !1,
      la: !0,
      Z: ["234"]
    }, "Spear.PNG");
    L(b, {
      fa: "Virtual Max Spirit",
      na: !1,
      oa: !1,
      ma: !1,
      la: !0,
      Z: ["235"]
    }, "Spear.PNG");
    var qa = w.ff;
    qa.Sz = w.Kj.v("CoinsGoldSmall.PNG");
    qa.xw = w.Kj.v("CoinsGoldMedium.PNG");
    qa.wD = w.Kj.v("CoinsGoldLarge.PNG");
    Rq();
    qr();
    var ta = w.th;
    ta.ve.push({
      uh: "chest1",
      Mf: 1,
      jh: !1,
      xh: {
        Ec: w.I.v("L2_Chest02.PNG"),
        closed: w.I.v("L2_Chest01.PNG")
      },
      hh: {
        Ec: w.I.v("L2_Chest04.PNG"),
        closed: w.I.v("L2_Chest03.PNG")
      }
    });
    ta.ve.push({
      uh: "chest2",
      Mf: 1,
      jh: !1,
      xh: {
        Ec: w.I.v("L2_Chest06.PNG"),
        closed: w.I.v("L2_Chest05.PNG")
      },
      hh: {
        Ec: w.I.v("L2_Chest08.PNG"),
        closed: w.I.v("L2_Chest07.PNG")
      }
    });
    ta.ve.push({
      uh: "chest3",
      Mf: 1,
      jh: !1,
      xh: {
        Ec: w.I.v("L2_Chest10.PNG"),
        closed: w.I.v("L2_Chest09.PNG")
      },
      hh: {
        Ec: w.I.v("L2_Chest12.PNG"),
        closed: w.I.v("L2_Chest11.PNG")
      }
    });
    ta.ve.push({
      uh: "chest4",
      Mf: 1,
      jh: !1,
      xh: {
        Ec: w.I.v("L2_Chest14.PNG"),
        closed: w.I.v("L2_Chest13.PNG")
      },
      hh: {
        Ec: w.I.v("L2_Chest16.PNG"),
        closed: w.I.v("L2_Chest15.PNG")
      }
    });
    ta.ve.push({
      uh: "rack1",
      Mf: 2,
      jh: !0,
      xh: {
        Ec: w.I.v("L3_Wall_WeapRack1_EW.PNG"),
        closed: w.I.v("L3_Wall_WeapRack2_EW.PNG")
      },
      hh: {
        Ec: w.I.v("L3_Wall_WeapRack1_NS.PNG"),
        closed: w.I.v("L3_Wall_WeapRack2_NS.PNG")
      }
    });
    ta.ve.push({
      uh: "rack2",
      Mf: 2,
      jh: !0,
      xh: {
        Ec: w.I.v("L3_Wall_WeapRack1_EW.PNG"),
        closed: w.I.v("L3_Wall_WeapRack3_EW.PNG")
      },
      hh: {
        Ec: w.I.v("L3_Wall_WeapRack1_NS.PNG"),
        closed: w.I.v("L3_Wall_WeapRack3_NS.PNG")
      }
    });
    ta.ve.push({
      uh: "rack3",
      Mf: 2,
      jh: !0,
      xh: {
        Ec: w.I.v("L3_Wall_WeapRack1_EW.PNG"),
        closed: w.I.v("L3_Wall_WeapRack4_EW.PNG")
      },
      hh: {
        Ec: w.I.v("L3_Wall_WeapRack1_NS.PNG"),
        closed: w.I.v("L3_Wall_WeapRack4_NS.PNG")
      }
    });
    ta.ve.push({
      uh: "rack4",
      Mf: 2,
      jh: !0,
      xh: {
        Ec: w.I.v("L3_Wall_WeapRack5_EW.PNG"),
        closed: w.I.v("L3_Wall_WeapRack6_EW.PNG")
      },
      hh: {
        Ec: w.I.v("L3_Wall_WeapRack5_NS.PNG"),
        closed: w.I.v("L3_Wall_WeapRack6_NS.PNG")
      }
    });
    ta.ve.push({
      uh: "case1",
      Mf: 3,
      jh: !0,
      xh: {
        Ec: w.I.v("L3_WallDeco04.PNG"),
        closed: w.I.v("L3_WallDeco04.PNG")
      },
      hh: {
        Ec: w.I.v("L3_WallDeco03.PNG"),
        closed: w.I.v("L3_WallDeco03.PNG")
      }
    });
    ta.ve.push({
      uh: "case2",
      Mf: 3,
      jh: !0,
      xh: {
        Ec: w.I.v("L3_WallDeco14.PNG"),
        closed: w.I.v("L3_WallDeco14.PNG")
      },
      hh: {
        Ec: w.I.v("L3_WallDeco13.PNG"),
        closed: w.I.v("L3_WallDeco13.PNG")
      }
    });
    var eb = w.Pe;
    eb.sk = {};
    eb.Mr.length = 0;
    var Gb = eb.Eh,
      Da, ub, mb, Ea, La, wa, Fa;
    Ea = eb.Rh;
    for (Da = 0; Da < Gb; Da++, Ea++) {
      mb = [];
      La = eb.Sh;
      for (ub = 0; ub < Gb; ub++, La++) wa = Ea + "_" + La, Fa = new Hc(wa, Ea, La), mb.push(Fa), eb.sk[wa] = Fa;
      eb.Mr.push(mb)
    }
    var ha = w.kb;
    ha.pd.length = 0;
    ha.Jg.length = 0;
    ha.Dh.length = 0;
    ha.bm = {};
    ha.cm = 0;
    ha.Uj = 1;
    var ja = new Qc,
      Ga = new ga(11),
      bb = new Bc(Ga),
      za, nb, fb, cb = ja.BA,
      Ua = ja.EA,
      Va = xc / 2 | 0,
      mc = yc / 2 | 0,
      vb = {},
      Sb = 0,
      Ma = w.Pe.Eh,
      zb = Ma * Ma,
      Hb, ac, ob, pb, Ha, jb, Ab = {},
      Bb = [];
    for (za = 0; 35 > za; za++) {
      pb = 1;
      Hb = cb + ma(Ga, Ma);
      ac = Ua + ma(Ga, Ma);
      for (ob = Hb + "_" + ac; vb[ob];) pb++, Hb = cb + ma(Ga, Ma), ac = Ua + ma(Ga, Ma), ob = Hb + "_" + ac;
      vb[ob] = !0;
      for (Ha = Cc(bb, 11); Ab[Ha];) Ha = Cc(bb, 11);
      Ab[Ha] = !0;
      nb = Hb * xc + Va;
      fb = ac * yc + mc;
      nb += ma(Ga, 6) - 3;
      fb += ma(Ga, 6) - 3;
      jb = new Ic(ob, Ha, Hb, ac, nb, fb);
      Bb.push(jb);
      var qb = jb,
        wb = w.Pe.sk[ob];
      qb.ck.push(wb);
      wb.cu = qb;
      Sb++
    }
    for (var Ib, Ec = 0; Sb < zb;) {
      for (za = 0; za < Bb.length; za++) {
        jb =
          Bb[za];
        a: {
          for (var bc = ja, Wa = vb, cc = Ga, Qa = jb.ck, nc = void 0, sa = void 0, sa = 0; sa < Qa.length; sa++)
            if (nc = Yc(bc, Qa[sa], Wa, cc)) {
              Ib = nc;
              break a
            } Ib = null
        }
        if (Ib) {
          var Tb = jb,
            qc = Ib;
          Tb.ck.push(qc);
          qc.cu = Tb;
          vb[Ib.io] = !0;
          Sb++
        }
      }
      Ec++
    }
    ha.pd = Bb;
    var Fc, Cb, kb, Ra;
    for (Fc = 0; Fc < ha.pd.length; Fc++)
      for (kb = ha.pd[Fc], ha.bm[kb.lo] && console.log("duplicate castle id: " + kb.lo), ha.bm[kb.lo] = kb, Ra = kb.ck, Cb = 0; Cb < Ra.length; Cb++) ha.ju[Ra[Cb].io] && console.log("duplicate castle owner: " + Ra[Cb].io), ha.ju[Ra[Cb].io] = kb;
    var Ja = w.Aa;
    Ja.Ab.length = 0;
    Ja.uj.length =
      0;
    Ja.Ge.length = 0;
    Ja.ze.length = 0;
    Ja.dg.length = 0;
    Ja.Mk = 0;
    Ja.bk.length = 0;
    Ja.Sd = 0;
    Ja.Do = {};
    var Db, gb = new ga(1),
      rb = new Bc(gb),
      dc = w.kb.pd,
      Ka, Xa, hb, lb, rc, sc, Aa, db, Mc, ec, Ub, sb, ka, Eb, xb = {},
      Na = [];
    for (ka = 0; ka < dc.length; ka++)
      for (Ka = dc[ka], Xa = Ka.ck, sc = Ka.dm, Aa = Ka.em, Eb = 0; Eb < Xa.length; Eb++)
        if (db = Xa[Eb].Hd, Mc = Xa[Eb].Id, !(0.7 < gb.random())) {
          ec = 1 + db * xc + ma(gb, xc - 1);
          for (Ub = 1 + Mc * yc + ma(gb, yc - 1); ec === sc && Ub === Aa;) ec = 1 + db * xc + ma(gb, xc - 1), Ub = 1 + Mc * yc + ma(gb, yc - 1);
          lb = ae(gb);
          for (hb = Cc(rb, lb); xb[hb];) hb = Cc(rb, lb);
          xb[hb] = !0;
          Db =
            db + "_" + Mc;
          rc = 3 + ma(gb, 4);
          sb = new Gd(Db, hb, lb, ec, Ub, db, Mc, rc, Ka);
          Na.push(sb);
          Ka.Ab.push(sb)
        } Ja.Ab = Na;
    var Ya, tc;
    for (Ya = 0; Ya < Ja.Ab.length; Ya++) tc = Ja.Ab[Ya], Ja.Do[tc.ag] = tc;
    fe(Ja, Ja.Ab);
    ke();
    Be();
    Sr();
    es();
    w.Mh = !1;
    w.Em = !0;
    kx()
  },
  ix: function(a) {
    w.i.$a = 0;
    Id();
    w.i.da = new lx;
    w.i.D.length = 0;
    w.i.gg = null;
    w.i.ce = null;
    w.lg = !1;
    w.Fe = !1;
    if (a) {
      w.i.Ih = new hx;
      w.i.Ua = new ix;
      kx();
      var b = w.i.Bg;
      b.hn = 0;
      b.jn = 0;
      b.kn = 0;
      b.Xm = 0;
      b.mm = 0;
      b.vn = 0;
      b.qo = {};
      b.lq = {};
      b.nm = 0;
      Sr();
      es()
    }
    w.i.Ih.jx();
    w.Mh = !1;
    w.wb = !0;
    w.S = new ag;
    w.Ba = new ih;
    w.Mc =
      null;
    w.le = null;
    $d();
    b = w.Di;
    0 < b.Fj.length && (b.Fj.length = 0);
    Rq();
    qr();
    kh();
    de();
    Zc();
    ke();
    Be();
    iw();
    oc();
    for (b = 0; b < Nx.length; b++) js(Nx[b]);
    for (var c, b = 0; b < w.i.D.length; b++) c = w.i.D[b], js(c.ei), js(c.fi), js(c.gi), js(c.hi);
    w.$h.Pf.length = 0;
    lh();
    mv();
    b = w.ob;
    b.hd = 1;
    b.fc = 1;
    b.en = {};
    a && (w.i.wh = 0)
  },
  wE: function() {
    w.i.$a = 0;
    Id();
    var a = w.i.da;
    a.Wb = null;
    a.ge = null;
    a.Lf = null;
    a.Wf = null;
    a.Ue = null;
    a.Cc = null;
    a.Bc = null;
    a.ed = null;
    a.Ks = !1;
    a.gn = null;
    a.Mp = !1;
    a.hp = !1;
    a.Nm = 0;
    a.Om = 0;
    w.Fe = !1;
    w.i.Ih.jx();
    w.Mh = !1;
    w.wb = !0;
    w.S = new ag;
    w.Ba = new ih;
    w.Mc = null;
    w.le = null;
    qr();
    $d();
    kh();
    a = w.Aa.dg.length;
    de();
    w.Aa.Mk = a;
    a = w.kb.Uj;
    Zc();
    w.kb.Uj = a;
    ke();
    Be();
    iw();
    oc();
    w.$h.Pf.length = 0;
    lh();
    mv();
    for (var b, a = 0; a < w.i.D.length; a++)
      if (b = w.i.D[a], b.yg = null, b.En = null, b.Da = null, b.rh = null, b.Zh = null, b.hk = null, b.bj = null, b.Ue = null, b.ld = null, b.au = -3 * Mw(b.K, !0), b.gk && 0 < b.gk.length)
        for (var c = void 0, c = 0; c < b.gk.length; c++) vq(b.gk[c])
  },
  kD: function() {
    !w.Fe && w.lg && (w.jf = Math.min(w.jf, 432E5 + Vs.t), w.ig = !0, w.Vj = 0)
  },
  xu: function() {
    w.ig = !1;
    w.Vj = 0;
    w.jf = 0;
    w.Ee.Ne()
  },
  Kw: function() {
    var a;
    for (a = 0; a < Nx.length; a++) ks(Nx[a]);
    var b;
    for (a = 0; a < w.i.D.length; a++) b = w.i.D[a], ks(b.ei), ks(b.fi), ks(b.gi), ks(b.hi);
    for (a = 0; a < w.i.D.length; a++) Mi(w.i.D[a]);
    w.Nb.Jp && w.Tw && (w.jf = Date.now() - w.Tw, 12E4 < w.jf && w.kD())
  },
  hE: function(a) {
    var b = w.pg;
    Ta("SaveManager", "Import");
    return kB(b, a) ? (w.lg && w.Ee.J(), w.ig && w.Ee.Zd(), w.Fe && w.Ee.Me(), px(w.pg), !0) : !1
  },
  iE: function() {
    px(w.pg)
  },
  OA: function() {
    w.i.Bg.nm = 0;
    w.i.Bg.mm = 0;
    w.ix(!1);
    jB();
    px(w.pg);
    w.Ee.Js()
  },
  gE: function() {
    w.ix(!0);
    jB();
    px(w.pg);
    w.Ee.Js()
  }
};
window.Game = w;
