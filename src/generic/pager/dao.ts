import ArrayList from "./ArrayList";
import {Food} from "./entity";

export class FoodDao {
    arrayListFood!: ArrayList

    init () {
        const foodFish = new Food("F100", "十八碗", "400克泡椒鱼头");
        const foodChafing = new Food("F101", "顶呱呱", "香辣哇哇火锅");
        const foodDatong = new Food("F102", "肯德基", "大桶炸鸡");
        const foodFour = new Food("F103", "麦当劳", "冰淇凌");
        const foodFive = new Food("F104", "华莱士", "冰淇凌2");
        const foodSix = new Food("F105", "成都小吃", "蚂蚁上树");
        const foodSeven = new Food("F106", "郭林家常菜", "大乱炖");
        const foodEight = new Food("F107", "韩正味", "石锅拌饭");
        this.arrayListFood = new ArrayList<Food>();
        this.arrayListFood.add(foodFish);
        this.arrayListFood.add(foodChafing);
        this.arrayListFood.add(foodDatong);
        this.arrayListFood.add(foodFour);
        this.arrayListFood.add(foodFive);
        this.arrayListFood.add(foodSix);
        this.arrayListFood.add(foodSeven);
        this.arrayListFood.add(foodEight);

        return this.arrayListFood
    }

    findAllFoods () {
        return this.init()
    }
}

