export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-xl font-bold text-white mb-4">알주고</h2>
            <p className="text-sm">다양한 정책과 금융정보를 쉽게 찾아보세요.</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-3">회사</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  소개
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  채용
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  블로그
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-3">지원</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  고객센터
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  이용약관
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  개인정보처리방침
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-3">소셜</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#" className="hover:text-white">
                <i className="fab fa-instagram" />
              </a>
              <a href="#" className="hover:text-white">
                <i className="fab fa-twitter" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} ALBAKKI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
