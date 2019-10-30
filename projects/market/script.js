const AppleList = [
  {
    id: 0,
    name: "iPhone 11",
    price: "8999"
  },
  {
    id: 1,
    name: "iPad Pro",
    price: "4999"
  },
  {
    id: 2,
    name: "Airpods pro",
    price: "1999"
  }
];

const FruitList = [
  {
    id: 3,
    name: "橘子",
    price: "5"
  },
  {
    id: 4,
    name: "苹果",
    price: "3"
  }
];

function withCount(itemList) {
  return itemList.map(i => ({ ...i, count: 0, checked: true }));
}

const App = new Vue({
  el: "#app",
  data() {
    return {
      sectionList: [AppleList, FruitList].map(withCount)
    };
  },
  methods: {
    countChange(id, delta) {
      this.sectionList.forEach(list => {
        let item = list.find(i => i.id === id);
        if (item) item.count += delta;
      });
    },
    removeItem(id) {
      this.sectionList.forEach(itemList => {
        const targetIndex = itemList.findIndex(i => i.id === id);
        if (targetIndex !== -1) itemList.splice(targetIndex, 1);
      });
    }
  },
  computed: {
    totalPrice() {
      let count = 0;
      for (let list of this.sectionList) {
        count += list
          .filter(i => i.checked)
          .reduce((prev, cur) => prev + cur.count * cur.price, 0);
      }
      return count;
    },
    allChecked: {
      get() {
        return this.sectionList.flatMap(i => i).every(i => i.checked);
      },
      set(val) {
        this.sectionList.forEach(itemList =>
          itemList.forEach(item => (item.checked = val))
        );
      }
    }
  }
});
