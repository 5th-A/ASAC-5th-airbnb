import Link from 'next/link'

const Footer = () => {
  const supportLinks = [
    { text: '도움말 센터', href: '#' },
    { text: '에어커버', href: '#' },
    { text: '차별 반대', href: '#' },
    { text: '장애인 지원', href: '#' },
    { text: '예약 취소 옵션', href: '#' },
    { text: '이웃 민원 신고', href: '#' },
  ]

  const hostingLinks = [
    { text: '당신의 공간을 에어비앤비하세요', href: '#' },
    { text: '호스트를 위한 에어커버', href: '#' },
    { text: '호스팅 자료', href: '#' },
    { text: '커뮤니티 포럼', href: '#' },
    { text: '책임감 있는 호스팅', href: '#' },
    { text: '무료 호스팅 클래스 참여하기', href: '#' },
  ]

  const airbnbLinks = [
    { text: '뉴스룸', href: '#' },
    { text: '새로운 기능', href: '#' },
    { text: '채용정보', href: '#' },
    { text: '투자자 정보', href: '#' },
    { text: 'Airbnb 긴급 숙소', href: '#' },
  ]

  const footerLinks = [
    { text: '개인정보방침', href: '#' },
    { text: '이용약관', href: '#' },
    { text: '사이트맵', href: '#' },
    { text: '한국의 변경된 환불정책', href: '#' },
    { text: '회사 세부정보', href: '#' },
  ]
  // public/image/Footer/twitter.png
  const socialMediaLinks = [
    {
      src: '/image/Footer/facebook.png',
      href: 'https://www.facebook.com/AirbnbKorea/?locale=ko_KR',
    },
    { src: '/image/Footer/twitter.png', href: '#' },
    { src: '/image/Footer/instagram.png', href: '#' },
    { src: '/image/Footer/naverblog.png', href: '#' },
    { src: '/image/Footer/naverpost.png', href: '#' },
  ]

  return (
    <>
      <footer className='bg-gray-100 py-2 w-full'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between w-full max-w-7xl px-4 text-black text-sm my-4'>
          <section className='w-full md:w-1/3 mb-8'>
            <h3 className='font-bold mb-4'>에어비앤비 지원</h3>
            <ul className='list-none p-0 m-0 space-y-1'>
              {supportLinks.map((link, index) => (
                <li key={index} className='my-2'>
                  <a href={link.href} className='text-black no-underline hover:underline'>
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </section>
          <section className='w-full md:w-1/3 mb-8'>
            <h3 className='font-bold mb-4'>호스팅</h3>
            <ul className='list-none p-0 m-0 space-y-1'>
              {hostingLinks.map((link, index) => (
                <li key={index} className='my-2'>
                  <a href={link.href} className='text-black no-underline hover:underline'>
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </section>
          <section className='w-full md:w-1/3 mb-8'>
            <h3 className='font-bold mb-4'>에어비앤비</h3>
            <ul className='list-none p-0 m-0 space-y-1'>
              {airbnbLinks.map((link, index) => (
                <li key={index} className='my-2'>
                  <a href={link.href} className='text-black no-underline hover:underline'>
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <hr className='border-t border-gray-400 my-6 mx-10' />
        <div className='container mx-auto flex flex-col md:flex-row items-center justify-between w-full max-w-7xl px-4 text-black text-sm my-4'>
          <div className='flex items-center space-x-4 order-2 md:order-1 mt-4 md:mt-0'>
            <div>@2024 Airbnb Inc</div>
            <ol className='flex space-x-2 list-none p-0 m-0'>
              {footerLinks.map((link, index) => (
                <li key={index} className='flex items-center my-2'>
                  <a href={link.href} className='text-black no-underline hover:underline'>
                    {link.text}
                  </a>
                  {index < footerLinks.length - 1 && (
                    <span aria-hidden='true' className='ml-1 text-black'>
                      .
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </div>
          <div className='flex items-center space-x-4 order-1 md:order-2'>
            <div>
              <a href='#' className='text-black no-underline hover:underline'>
                한국어 (KR)
              </a>
            </div>
            <div>
              <a href='#' className='text-black no-underline hover:underline'>
                ₩ KRW
              </a>
            </div>
            <div className='flex items-center space-x-2'>
              <div className='flex space-x-1'>
                {socialMediaLinks.map((link, index) => (
                  <Link key={index} href={link.href}>
                    <button className='p-2 bg-transparent border-none'>
                      <img src={link.src} className='w-6 h-6' alt='link icon' />
                    </button>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <hr className='border-t border-gray-400 my-3 mx-10' />
        <div className='container mx-auto flex flex-col md:flex-row items-center justify-between w-full max-w-7xl px-4 text-black text-sm my-4'>
          <a className='block text-left text-xs'>
            웹사이트 제공자: Airbnb Ireland UC, private unlimited company, 8 Hanover Quay Dublin 2,
            D02 DP23 Ireland | 이사: Dermot Clarke, Killian Pattwell, Andrea Finnegan | VAT 번호:
            IE9827384L | 사업자 등록 번호: IE 511825 | 연락처: terms@airbnb.com, 웹사이트,
            080-822-0230 | 호스팅 서비스 제공업체: 아마존 웹서비스 | 에어비앤비는 통신판매 중개자로
            에어비앤비 플랫폼을 통하여 게스트와 호스트 사이에 이루어지는 통신판매의 당사자가
            아닙니다. 에어비앤비 플랫폼을 통하여 예약된 숙소, 체험, 호스트 서비스에 관한 의무와
            책임은 해당 서비스를 제공하는 호스트에게 있습니다.
          </a>
        </div>
      </footer>
    </>
  )
}

export default Footer
