<template>
    <div class="cart-area ptb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12">
                    <form>
                        <div class="cart-table table-responsive">
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">Product</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Unit Price</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="product-thumbnail">
                                            <a href="#">
                                                <img src="../../assets/images/shop/shop1.jpg" alt="item">
                                            </a>
                                        </td>
                                        <td class="product-name">
                                            <a href="#">Note Book Mockup</a>
                                        </td>
                                        <td class="product-price">
                                            <span class="unit-amount">$455.00</span>
                                        </td>
                                        <td class="product-quantity">
                                            <div class="input-counter">
                                                <form>
                                                    <input type="number" class="form-control" id="number" aria-describedby="number" placeholder="0">
                                                </form>
                                            </div>
                                        </td>
                                        <td class="product-subtotal">
                                            <span class="subtotal-amount">$455.00</span>
                                            <a href="#" class="remove">
                                                <i class='bx bx-trash'></i>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="product-thumbnail">
                                            <a href="#">
                                                <img src="../../assets/images/shop/shop2.jpg" alt="item">
                                            </a>
                                        </td>
                                        <td class="product-name">
                                            <a href="#">Motivational Book Cover</a>
                                        </td>
                                        <td class="product-price">
                                            <span class="unit-amount">$541.50</span>
                                        </td>
                                        <td class="product-quantity">
                                            <div class="input-counter">
                                                <form>
                                                    <input type="number" class="form-control" id="number" aria-describedby="number" placeholder="0">
                                                </form>
                                            </div>
                                        </td>
                                        <td class="product-subtotal">
                                            <span class="subtotal-amount">$541.50</span>
                                            <a href="#" class="remove">
                                                <i class='bx bx-trash'></i>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="product-thumbnail">
                                            <a href="#">
                                                <img src="../../assets/images/shop/shop3.jpg" alt="item">
                                            </a>
                                        </td>
                                        <td class="product-name">
                                            <a href="#">Book Cover Softcover</a>
                                        </td>
                                        <td class="product-price">
                                            <span class="unit-amount">$140.50</span>
                                        </td>
                                        <td class="product-quantity">
                                            <div class="input-counter">
                                                <form>
                                                    <input type="number" class="form-control" id="number" aria-describedby="number" placeholder="0">
                                                </form>
                                            </div>
                                        </td>
                                        <td class="product-subtotal">
                                            <span class="subtotal-amount">$140.50</span>
                                            <a href="#" class="remove">
                                                <i class='bx bx-trash'></i>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="product-thumbnail">
                                            <a href="#">
                                                <img src="../../assets/images/shop/shop4.jpg" alt="item">
                                            </a>
                                        </td>
                                        <td class="product-name">
                                            <a href="#">Stop And Take A Second</a>
                                        </td>
                                        <td class="product-price">
                                            <span class="unit-amount">$547.00</span>
                                        </td>
                                        <td class="product-quantity">
                                            <div class="input-counter">
                                                <form>
                                                    <input type="number" class="form-control" id="number" aria-describedby="number" placeholder="0">
                                                </form>
                                            </div>
                                        </td>
                                        <td class="product-subtotal">
                                            <span class="subtotal-amount">$547.00</span>
                                            <a href="#" class="remove">
                                                <i class='bx bx-trash'></i>
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="cart-buttons">
                            <div class="row align-items-center">
                                <div class="col-lg-7 col-sm-7 col-md-7">
                                    <router-link to="/shop-one" class="default-btn">
                                        Back to Shop
                                    </router-link>
                                </div>
                                <div class="col-lg-5 col-sm-5 col-md-5 text-right">
                                    <a href="#" class="default-btn">
                                        Update Cart
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="cart-totals">
                            <h3>Cart Totals</h3>
                            <ul>
                                <li>Subtotal 
                                    <span>$1683.50</span>
                                </li>
                                <li>Shipping 
                                    <span>$30.00</span>
                                </li>
                                <li>Total 
                                    <span><b>$1713.50</b></span>
                                </li>
                            </ul>
                            <a href="#" class="default-btn">
                                Proceed to Checkout
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'CartContent',
}
</script>