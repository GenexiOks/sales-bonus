/**
 * Функция для расчета выручки
 * @param purchase запись о покупке
 * @param _product карточка товара
 * @returns {number}
 */
function calculateSimpleRevenue(purchase, _product) {
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
  // @TODO: Расчет бонуса от позиции в рейтинге
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
  // @TODO: Проверка входных данных
  // @TODO: Проверка наличия опций
  // @TODO: Подготовка промежуточных данных для сбора статистики
  // @TODO: Индексация продавцов и товаров для быстрого доступа
  // @TODO: Расчет выручки и прибыли для каждого продавца
  // @TODO: Сортировка продавцов по прибыли
  // @TODO: Назначение премий на основе ранжирования
  // @TODO: Подготовка итоговой коллекции с нужными полями
}

const sellerStats = data.sellers.map((seller) => ({
  id: seller.id,
  name: `${seller.first_name} ${seller.last_name}`,
  revenue: 0,
  profit: 0,
  sales_count: 0,
  products_sold: {},
}));

console.log(sellerStats);

const sellerIndex = (someIndex = Object.fromEntries(sellerStats.map((item) => [item.id, item])));
const productIndex = (someIndex = Object.fromEntries(data.products.map((item) => [item.sku, item])));
//------------------------

// function groupBy(array, keyFn) {
//   return array.reduce((acc, item) => {
//     const key = keyFn(item);
//     if (!acc[key]) acc[key] = [];
//     acc[key].push(item);
//     return acc;
//   }, {});
// }

// const recordsBySeller = groupBy(data.purchase_records, (record) => record.seller_id);
// const recordsByCustomer = groupBy(data.purchase_records, (record) => record.customer_id);
// const recordsByProduct = groupBy(
//   data.purchase_records.flatMap((record) => record.items),
//   (item) => item.sku
// );

// function calculateAverage(value) {
//   const sum = value.reduce((acc, value) => acc + value, 0);
//   return sum / value.length || 0;
// }
