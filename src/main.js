/**
 * Функция для расчета выручки
 * @param purchase запись о покупке
 * @param _product карточка товара
 * @returns {number}
 */
function calculateSimpleRevenue(purchase, _product) {
  const { discount, sale_price, quantity } = purchase;
  const discountFactor = 1 - discount / 100;
  return sale_price * quantity * discountFactor;
  // @TODO: Расчет выручки от операции
}

/**
 * Функция для расчета бонусов
 * @param index порядковый номер в отсортированном массиве
 * @param total общее число продавцов
 * @param seller карточка продавца
 * @returns {number}
 */
function calculateBonusByProfit(index, total, seller) {
  if (первый) {
    return бонус;
} else if (второй или третий) {
    return бонус;
} else if (последний) {
    return 0;
} else { // Для всех остальных
    return бонус;
}
}

/**
 * Функция для анализа данных продаж
 * @param data
 * @param options
 * @returns {{revenue, top_products, bonus, name, sales_count, profit, seller_id}[]}
 */
function analyzeSalesData(data, options) {
  if (!data || !Array.isArray(data.sellers) || data.sellers.length === 0) {
    throw new Error('Некорректные входные данные');
  }

  const { calculateRevenue, calculateBonus } = options;

  if (!calculateRevenue || !calculateBonus) {
    throw new Error('Чего-то не хватает');
  }

  const sellerStats = data.sellers.map((seller) => ({
    id: seller.id,
    name: `${seller.first_name} ${seller.last_name}`,
    revenue: 0,
    profit: 0,
    sales_count: 0,
    products_sold: {},
  }));

  const sellerIndex = (someIndex = Object.fromEntries(
    sellerStats.map((item) => [item.id, item])
  ));

  const productIndex = (someIndex = Object.fromEntries(
    data.products.map((item) => [item.sku, item])
  ));

  data.purchase_records.forEach((record) => {
    // Чек
    const seller = sellerIndex[record.seller_id]; // Продавец
    if (record.seller_id === seller.id) {
      seller.sales_count++;
      seller.revenue += record.total_amount - record.total_discount;
    }
    record.items.forEach((item) => {
      const product = productIndex[item.sku];

      calculateRevenue(item, product);

      if (!seller.products_sold[item.sku]) {
        seller.products_sold[item.sku] = 0;
      }
      seller.products_sold[item.sku]++;
    });
  });

  sellerStats.sort((a, b) => b.revenue - a.revenue);

  sellerStats.forEach((seller, index) => {
        seller.bonus = calculateRevenue()// Считаем бонус
        seller.top_products = // Формируем топ-10 товаров
});
}
