import Pager from "./pager";
import {FoodDao} from "./dao";
import {Food} from "./entity";


const pager = new Pager<Food>(2);
const foodDao = new FoodDao();
const allFoods = foodDao.findAllFoods();
pager.dataList = allFoods;
pager.showCurrentPageData().forEach((food) => {
    // console.log("food:", food.foodId)
})