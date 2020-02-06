import { nogizaka, keyakizaka, hinatazaka } from "./Color";

const groupList = [
  {
    id: 1,
    name: "乃木坂46",
    color: nogizaka.color,
    memberList: [
      {
        id: 1,
        name: "齋藤飛鳥",
        age: 21
      }
    ]
  },
  {
    id: 2,
    name: "欅坂46",
    color: keyakizaka.color,
    memberList: [
      {
        id: 1,
        name: "渡邉理佐",
        age: 21
      },
      {
        id: 2,
        name: "小林由依",
        age: 20
      }
    ]
  },
  {
    id: 3,
    name: "日向坂46",
    color: hinatazaka.color,
    memberList: [
      {
        id: 1,
        name: "齊藤京子",
        age: 22
      },
      {
        id: 2,
        name: "小坂菜緒",
        age: 17
      },
      {
        id: 3,
        name: "上村ひなの",
        age: 15
      }
    ]
  }
];

export default groupList;
