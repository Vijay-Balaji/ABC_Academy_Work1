(() => {
  const popupMarkup = `
    <div class="card-popup" id="cardPopup" aria-hidden="true">
      <div class="popup-content" role="dialog" aria-modal="true" aria-labelledby="popupTitle">
        <button class="popup-close" type="button" aria-label="Close details">&times;</button>
        <img id="popupImage" src="" alt="">
        <div class="popup-text">
          <span class="popup-kicker">ABC ACADEMY</span>
          <h2 id="popupTitle"></h2>
          <p id="popupDescription"></p>
          <a class="popup-btn" id="popupAction" href="#">Explore details <span>↗</span></a>
        </div>
      </div>
    </div>`;

  document.body.insertAdjacentHTML('beforeend', popupMarkup);
  const popup = document.getElementById('cardPopup');
  const popupTitle = document.getElementById('popupTitle');
  const popupDescription = document.getElementById('popupDescription');
  const popupImage = document.getElementById('popupImage');
  const popupAction = document.getElementById('popupAction');
  const closeButton = popup.querySelector('.popup-close');
  let hoverTimer;

  function closePopup(){
    popup.classList.remove('active');
    popup.setAttribute('aria-hidden','true');
    document.body.classList.remove('popup-open');
  }

  function openPopup(card){
    const title = card.dataset.popupTitle || 'ABC Academy';
    const description = card.dataset.popupDescription || '';
    const image = card.dataset.popupImage || '';
    const actionText = card.dataset.popupAction || 'Explore details';
    const actionHref = card.dataset.popupHref || '#';

    popupTitle.textContent = title;
    popupDescription.textContent = description;
    popupImage.src = image;
    popupImage.alt = title;
    popupAction.textContent = actionText + ' ↗';
    popupAction.href = actionHref;
    popupAction.target = actionHref.startsWith('http') && !actionHref.includes(location.host) ? '_blank' : '_self';
    popup.classList.add('active');
    popup.setAttribute('aria-hidden','false');
    document.body.classList.add('popup-open');
  }

  function bindCards(){
    document.querySelectorAll('.popup-card').forEach(card => {
      if(card.dataset.popupBound === '1') return;
      card.dataset.popupBound = '1';

      card.addEventListener('mouseenter', () => {
        if(window.matchMedia('(hover: hover) and (pointer: fine)').matches){
          clearTimeout(hoverTimer);
          hoverTimer = setTimeout(() => openPopup(card), 360);
        }
      });
      card.addEventListener('mouseleave', () => clearTimeout(hoverTimer));
      card.addEventListener('click', event => {
        const interactive = event.target.closest('a,button,input,select,textarea');
        if(interactive && interactive !== card) return;
        event.preventDefault();
        openPopup(card);
      });
    });
  }

  closeButton.addEventListener('click', closePopup);
  popup.addEventListener('click', event => {
    if(event.target === popup) closePopup();
  });
  document.addEventListener('keydown', event => {
    if(event.key === 'Escape' && popup.classList.contains('active')) closePopup();
  });

  const observer = new MutationObserver(bindCards);
  observer.observe(document.body,{childList:true,subtree:true});
  bindCards();
})();
