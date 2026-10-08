const CATEGORIES = [
  'Поиск и мониторинг',
  'Люди и контакты',
  'Соцсети и мессенджеры',
  'Домены, сеть и угрозы',
  'Гео и объекты',
  'Медиа и файлы',
  'Реестры и бизнес',
  'Крипто и блокчейн',
  'Рабочая среда',
  'Искусственный интеллект',
  'OPSEC и обучение',
  'Код и репозитории',
  'Дорки',
  'Порты',
  'Зеркала'
];

const svg = document.getElementById('graphSvg');
const container = document.getElementById('graphCategories');

if (svg && container) {
  const startX = 270;
  const startY = 325;

  CATEGORIES.forEach((label, index) => {
    const endY = 70 + index * 40;
    const cp1Y = startY + (endY - startY) * 0.32;
    const cp2Y = startY + (endY - startY) * 0.6;

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', `M ${startX} ${startY} C ${startX + 90} ${startY}, ${startX + 220} ${cp1Y}, 560 ${endY}`);
    path.setAttribute('class', 'graph-branch');
    svg.appendChild(path);

    const item = document.createElement('div');
    item.className = 'graph-item';
    item.style.top = `${endY - 12}px`;
    item.innerHTML = '<span class="graph-dot"></span><span class="graph-label">' + label + '</span>';
    container.appendChild(item);
  });
}
