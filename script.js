function calculateOrder() {
    let order1 = cartObj(); 
    // let order2 = cartObj(); 
    
    let totalPrice1 = 0;
    // let totalPrice2 = 0;
  
    let deliveryPrice1 = 9000;  
    // let deliveryPrice2 = 9000;    
    console.log('Sizning buyurtmangiz:');
  
    
    console.log("1-buyurtma:");
    for (let item in order1) {
      let product = order1[item];
      console.log(`${item} (${product.info}): ${product.price} so'm`);
      totalPrice1 += product.price;
    }
    
  
    // console.log("2-buyurtma:");
    // for (let item in order2) {
    //   let product = order2[item];
    //   console.log(`${item} (${product.info}): ${product.price} so'm`);
    //   totalPrice2 += product.price;
    // }
  
  
    console.log(`yetkazib berish narxi: ${deliveryPrice1} so'm`);
    // console.log(`2-buyurtma yetkazib berish narxi: ${deliveryPrice2} so'm`);
  
  
    let totalOrderPrice1 = totalPrice1 + deliveryPrice1;
    // let totalOrderPrice2 = totalPrice2 + deliveryPrice2;
  
    console.log(`jami narxi (yetkazib berish bilan): ${totalOrderPrice1} so'm`);
    // console.log(`2 buyurtmaning jami narxi (yetkazib berish bilan): ${totalOrderPrice2} so'm`);
  
  
    let orderSum = totalOrderPrice1 ;
    console.log(`Jami buyurtmalar narxi: ${orderSum} so'm: yetkazib berish narxi:9000 som`);

  }
  
  calculateOrder();