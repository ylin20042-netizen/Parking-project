let parkingData = [];
const contactPhone = '13800000000';
const wechatId = 'youpaicheyouhui';

async function loadParkingData() {
  try {
    const response = await fetch('./data/parking.json');
    if (!response.ok) throw new Error('无法读取 parking.json');
    parkingData = await response.json();
    initAreaFilter(parkingData);
    renderParking(parkingData);
    updateStats(parkingData);
  } catch (error) {
    document.getElementById('parkingList').innerHTML = `<p class="empty">车位数据加载失败，请检查 data/parking.json 文件。</p>`;
    console.error(error);
  }
}

function initAreaFilter(data) {
  const select = document.getElementById('areaFilter');
  const areas = [...new Set(data.map(item => item.area))];
  areas.forEach(area => {
    const option = document.createElement('option');
    option.value = area;
    option.textContent = area;
    select.appendChild(option);
  });
}

function renderParking(data) {
  const list = document.getElementById('parkingList');
  const emptyText = document.getElementById('emptyText');
  list.innerHTML = '';
  emptyText.hidden = data.length > 0;

  data.forEach(item => {
    const statusClass = item.availableSpaces === 0 ? 'full' : item.availableSpaces <= 5 ? 'limited' : 'available';
    const statusText = item.availableSpaces === 0 ? '已满位' : item.availableSpaces <= 5 ? '少量余位' : '有位';
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `
      <div class="card-img">🚗</div>
      <div class="card-body">
        <span class="status ${statusClass}">${statusText}</span>
        <h3>${item.name}</h3>
        <div class="meta">
          <span>📍 区域：${item.area}</span>
          <span>🅿️ 类型：${item.type}</span>
          <span>⏳ 适合：${item.suitableFor}</span>
          <span>🔢 剩余：${item.availableSpaces} 个车位</span>
        </div>
        <div class="price">¥${item.monthlyPrice}/月起</div>
        <p>${item.description}</p>
        <div class="card-actions">
          <a class="btn primary" href="tel:${contactPhone}">电话咨询</a>
          <a class="btn secondary" style="color:#0b1f4d;border-color:#dbe3ef" href="#contact" onclick="prefill('${item.name}')">微信咨询</a>
        </div>
      </div>`;
    list.appendChild(card);
  });
}

function updateStats(data) {
  document.getElementById('totalLots').textContent = data.length + '+';
  document.getElementById('totalSpaces').textContent = data.reduce((sum, item) => sum + Number(item.availableSpaces || 0), 0) + '+';
}

function filterParking() {
  const keyword = document.getElementById('searchInput').value.trim().toLowerCase();
  const area = document.getElementById('areaFilter').value;
  const filtered = parkingData.filter(item => {
    const matchKeyword = !keyword || `${item.name}${item.area}${item.type}${item.description}`.toLowerCase().includes(keyword);
    const matchArea = area === '全部' || item.area === area;
    return matchKeyword && matchArea;
  });
  renderParking(filtered);
}

function prefill(spaceName) {
  document.getElementById('message').value = `我想咨询：${spaceName}，请发我具体位置、价格和办理方式。`;
}

function handleSubmit(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const area = document.getElementById('area').value;
  const message = document.getElementById('message').value;
  const text = `请复制以下内容发送给客服微信：${wechatId}\n\n称呼：${name}\n联系方式：${phone}\n停车区域：${area}\n需求：${message}`;
  const result = document.getElementById('formResult');
  result.textContent = text;
  result.style.display = 'block';
}

document.getElementById('searchInput').addEventListener('input', filterParking);
document.getElementById('areaFilter').addEventListener('change', filterParking);
loadParkingData();
