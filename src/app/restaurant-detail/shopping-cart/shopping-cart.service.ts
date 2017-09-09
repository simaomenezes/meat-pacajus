import { MenuItem } from './../menu-item/menu-item.model';
import { CartItem } from './cart-item.model';
export class ShoppingCartService {

    items: CartItem[] = []

    //limpa dados do carrinho
    clear(){
        this.items = []
    }

    // adiciniona item no carrinho
    addItem(item: MenuItem){

        //verifica se ja existe o item no carrinho
        let foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id)
        if (foundItem){
            foundItem.quantity = foundItem.quantity + 1
        } else {
            this.items.push(new CartItem(item))
        }

    }

    // remove o item do carrinho
    removeItem(item: CartItem){
        this.items.splice(this.items.indexOf(item), 1)
    }

    // calcula o total do carrinho
    total(): number{
        return this.items
            .map(item => item.value())
            .reduce((prev, value) => prev+value, 0);
    }

}