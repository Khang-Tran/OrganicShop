import { Vegetables } from './categories/vegetables';
import { Seasonings } from './categories/seasonings';
import { Fruits } from './categories/fruits';
import { Dairy } from './categories/dairy';
import { Bread } from './categories/bread';
export interface Categories {
    bread: Bread;
    dairy: Dairy;
    fruits: Fruits;
    seasonings: Seasonings;
    vegetables: Vegetables;
}