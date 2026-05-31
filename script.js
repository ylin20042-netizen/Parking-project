const parkingLots = [
  {
    name: '天河长期停车场',
    area: '广州天河',
    price: '¥680/月起',
    tags: ['长期停放', '位置方便', '适合闲置车'],
    image: 'https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: '白云室外月保车位',
    area: '广州白云',
    price: '¥480/月起',
    tags: ['价格实惠', '车位充足', '适合长期停'],
    image: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: '番禺合作停车场',
    area: '广州番禺',
    price: '¥550/月起',
    tags: ['月保优惠', '人工对接', '支持咨询'],
    image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=900&q=80'
  }
];

const list = document.getElementById('parkingList');
parkingLots.forEach(item => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <img src="${item.image}" alt="${item.name}">
    <div class="card-body">
      <h3>${item.name}</h3>
      <p>${item.area}</p>
      <p class="price">${item.price}</p>
      <div>${item.tags.map(tag => `<span class="label">${tag}</span>`).join('')}</div>
      <a href="#contact">咨询这个车位</a>
    </div>
  `;
  list.appendChild(card);
});

document.getElementById('leadForm').addEventListener('submit', function(e){
  e.preventDefault();
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const area = document.getElementById('area').value;
  const message = document.getElementById('message').value || '暂无补充';
  const text = `客户停车需求：\n称呼：${name}\n电话：${phone}\n区域：${area}\n需求：${message}`;
  const result = document.getElementById('result');
  result.style.display = 'block';
  result.textContent = text + '\n\n请复制以上信息，通过微信发给客户经理。';
});
