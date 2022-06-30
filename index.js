window.onload = () => {
  const header = `
    <div>
      <header class="main-header">
        <a class="header-link" href="team.html">Team</a>
        <a class="header-link" href="story.html">Story</a>
        <a class="header-link logo" href="index.html">
          <img src="assets/mrc-invert.png" />
        </a>
        <a class="header-link" href="plan.html">The Plan</a>
        <a class="header-link" href="store.html">Store</a>
      </header>
      <header id="mobile-header" class="mobile-header">
        <i id="mobile-header-toggle" class="fa-solid fa-bars"></i>
        <a class="mobile-header-link" href="team.html">Team</a>
        <a class="mobile-header-link" href="story.html">Story</a>
        <a class="logo" href="index.html">
          <img src="assets/mrc-invert.png" />
        </a>
        <a class="mobile-header-link" href="plan.html">The Plan</a>
        <a class="mobile-header-link" href="store.html">Store</a>
      </header>
    </div>
  `
  const div = document.createElement('div');
  div.innerHTML = header.trim();
  document.body.prepend(div.firstChild)

  const backgroundContainer = document.createElement('div')
  backgroundContainer.classList.add('background-container')
  backgroundContainer.id = 'background'
  document.body.prepend(backgroundContainer)

  const mobileMenuToggle = document.getElementById('mobile-header-toggle')
  const mobileHeader = document.getElementById('mobile-header')
  mobileMenuToggle.addEventListener('click', () => {
    mobileHeader.classList.toggle('visible')
  })

  const isHomepage = !['store', 'team', 'story', 'plan'].some(e => window.location.pathname.includes(e))
  if (isHomepage) {
    const dynamite = document.getElementById('dynamite')
    const dynamiteSection = document.getElementById('dynamite-section')
    const explosionBackground = "url('assets/backgrounds/background-explosion.png')"
    const regularBackground = "url('assets/backgrounds/background.png')"
    const toggleBlowUpBackground = () => {
      const background = document.getElementById('background')
      const backgroundImgIsExploded = window.getComputedStyle(background).backgroundImage.includes('explosion')

      background.style.backgroundImage = backgroundImgIsExploded ? regularBackground : explosionBackground
      dynamite.style.display = 'none'
      dynamiteSection.style.display = 'none'
    }
    dynamite.addEventListener('click', toggleBlowUpBackground)

    var img=new Image();
    img.src='assets/backgrounds/background-explosion.png';

    function makeSmoke() {
      const smoke = document.createElement('div');
      const size = (Math.random()*150) + 50;
      const skew = Math.random()*20;
      smoke.classList.add('smoke');
      smoke.style.width = size +'px';
      smoke.style.height = size +'px';
      smoke.style.filter = 'blur(20px)';
      smoke.style.transform = Math.random() < .5 ? 'skew('+skew * (-1) + 'deg)' : 'skew(' + skew + 'deg)';
      smoke.style.borderRadius = '50%';
      smoke.style.background = 'white';
      smoke.style.opacity = '.5';
      smoke.style.position = 'absolute';
      smoke.style.bottom = '37vh';
      smoke.style.opacity = '0';
      smoke.style.left = Math.random() < .5 ? Math.random() * (37 - 36) + 36 + 'vw' : Math.random() * (62 - 60) + 60 + 'vw';
      smoke.style.animationDelay = Math.random() * 10 + 's';
      smoke.style.animationDuration = (Math.random() * 10) + 2 + 's';
      document.body.appendChild(smoke);
    }

    setTimeout(() => {
      for (var i = 0; i < 10; i++) { 
        makeSmoke(); 
      }  
    }, 1000);
  }

  if (window.location.pathname.includes('plan')) {
    // dynamically populate plan text based on which step is clicked
    const planLinks = document.getElementsByClassName('plan-link')
    const planText = document.getElementById('plan-text')
    const planTextContainer = document.getElementById('plan-text-container')
    const togglePlanText = (e) => {
      const id = e.target.id
      var text = ''
      switch (id) {
        case 'the-beginning':
          text = ` 
            <ul>
              <li>Our webpage is being carefully constructed by our web developer.</li>
              <li>Our art is all currently being done by a personal friend of ours and consists of 69+ unique attributes.</li>
              <li>We are allowing anyone and everyone to come and mint their own Robber! No whitelists here.</li>
            </ul>`
          break
        case 'the-score':
          text = `
            <ul>
              <li>We are opening a unique store providing high quality merchandise for the MotoRobbers which is available to all.</li>
              <li>We are giving away all sorts of perks and items to NFT holders consistently.</li>
              <li>The Club was founded on the marigold sands of Egypt. Why not see it for yourself someday?</li>
              <li>Here at the club our scores arent for the money. We work tirelessly to be the modern day Robin Hoods. Why can't we help you?</li>
              <li>We provide high quality crypto signals for anyone who's holding a Robber.</li>
              <li>We are releasing our very own custom Air Force 1 Shoes.</li>
            </ul>`
          break
        case 'the-bomb':
          text = `
            <ul>
              <li>Does your NFT have a golden head? We provide EXCLUSIVE giveaways and more perks to those that do.</li>
              <li>Every single member of the club rides a motorcycle. Why don't you?</li>
              <li>Do you really want to join the club? Maybe you can... we will show you how.</li>
              <li>Obviously, more benefits come from holding a MotoRobbers Club NFT, come and see all of our perks now.</li>
            </ul>`
          break
        case 'the-escape':
          text = `
            <ul>
              <li>We value those members with a golden helmet, we think a matching hoodie or T-Shirt often goes well with them too.</li>
              <li>Our members know how to ride a bike. Fast. Let's test their skills.</li>
              <li>We've hit almost every bank there is, there has to be more we've missed? Let's find them.</li>
              <li>We are growing our community daily, with absolutely no intention of stopping.</li>
            </ul>`
          break
      }
      planText.innerHTML = text
      planTextContainer.classList.toggle('visible')
    }
    Array.from(planLinks).forEach(e => {
      e.addEventListener('click', (e) => togglePlanText(e))
    })
    planTextContainer.addEventListener('click', togglePlanText)

    // position plan steps dynamically based on the image size
    const planImage = document.getElementById('plan-image')
    const beginningElement = document.getElementById('the-beginning')
    const scoreElement = document.getElementById('the-score')
    const bombElement = document.getElementById('the-bomb')
    const escapeElement = document.getElementById('the-escape')
    const planImageWidth = planImage.clientWidth
    const planImageHeight = planImage.clientHeight

    scoreElement.style.width = planImageWidth * 0.105; // 104.58px= 996px
    scoreElement.style.left = planImageWidth * 0.8; // 796.8px = 996px
    scoreElement.style.height = planImageHeight * 0.19; // 125.21px = 659px
    scoreElement.style.top = planImageHeight * 0.035; // 23.065px = 659px

    bombElement.style.width = planImageWidth * 0.1305; // 104.58px= 996px
    bombElement.style.left = planImageWidth * 0.769; // 796.8px = 996px
    bombElement.style.height = planImageHeight * 0.105; // 125.21px = 659px
    bombElement.style.top = planImageHeight * 0.41; // 23.065px = 659px

    escapeElement.style.width = planImageWidth * 0.115; // 104.58px= 996px
    escapeElement.style.left = planImageWidth * 0.777; // 796.8px = 996px
    escapeElement.style.height = planImageHeight * 0.0765; // 125.21px = 659px
    escapeElement.style.bottom = 0; // 23.065px = 659px

    beginningElement.style.width = planImageWidth * 0.17; // 104.58px= 996px
    beginningElement.style.left = planImageWidth * 0.31; // 796.8px = 996px
    beginningElement.style.height = planImageHeight * 0.1; // 125.21px = 659px
    beginningElement.style.bottom = planImageHeight * 0.12; // 23.065px = 659px
  }
}