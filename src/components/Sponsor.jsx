import React from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import {useSelector} from 'react-redux'
import {useEffect} from 'react'
import {useState} from 'react'

function Sponsor() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark')
  const themeVal = useSelector((selector) => selector?.themeReducer?.value)
  useEffect(() => {
    setTheme(localStorage.getItem('theme'))
  }, [localStorage.getItem('theme')])
  useEffect(() => {
    console.log('temamız', themeVal)
  }, [themeVal])

  return (
    <Container
      fluid
      className={'theme__sponsor text-center pt-3 pb-3' + ' ' + theme}
    >
      <Row>
        <Col className=' d-flex justify-content-between align-items-center'>
          <svg
            width='100'
            height='43'
            viewBox='0 0 145 43'
            fill='#C9D2D9'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g>
              <path
                d='M44.3181 5.77904H46.9189V6.80983C47.2114 6.43002 47.5948 6.13057 48.0336 5.93935C48.5346 5.72466 49.0754 5.61919 49.6201 5.62992C50.4202 5.61143 51.2094 5.81874 51.8977 6.22827C52.5533 6.63815 53.0755 7.23083 53.4007 7.93382C53.7703 8.73769 53.9526 9.61546 53.9338 10.5006C53.9528 11.3862 53.7571 12.2632 53.3635 13.0561C53.0038 13.7651 52.4503 14.3567 51.7677 14.7617C51.0476 15.1775 50.2278 15.3876 49.3972 15.3693C48.8995 15.3763 48.4052 15.2878 47.9407 15.1084C47.5403 14.9595 47.1859 14.7075 46.9134 14.3777V19.0377H44.3125L44.3181 5.77904ZM47.3982 12.4018C47.8185 12.8462 48.3973 13.105 49.0076 13.1214C49.6179 13.1379 50.2097 12.9106 50.653 12.4894C50.6828 12.4615 50.7125 12.4317 50.7404 12.4018C51.1812 11.8698 51.4078 11.1917 51.3757 10.5006C51.4102 9.80344 51.1835 9.1186 50.7404 8.58063C50.3207 8.13613 49.7423 7.87701 49.1323 7.86023C48.5224 7.84345 47.9307 8.07039 47.4874 8.49116L47.3982 8.58063C46.9557 9.11888 46.7298 9.80369 46.7647 10.5006C46.7319 11.1914 46.9579 11.8697 47.3982 12.4018Z'
                fill='current'
              ></path>
              <path
                d='M57.2754 14.7429C56.5335 14.3401 55.9194 13.7362 55.5031 13.0001C55.0858 12.2331 54.8672 11.3733 54.8672 10.4995C54.8672 9.62575 55.0858 8.76595 55.5031 7.99898C55.919 7.26302 56.5332 6.65962 57.2754 6.258C58.0654 5.84566 58.9429 5.63037 59.8335 5.63037C60.7241 5.63037 61.6015 5.84566 62.3916 6.258C63.1338 6.65962 63.748 7.26302 64.1639 7.99898C64.5812 8.76595 64.7998 9.62575 64.7998 10.4995C64.7998 11.3733 64.5812 12.2331 64.1639 13.0001C63.7476 13.7362 63.1335 14.3401 62.3916 14.7429C61.6015 15.1553 60.7241 15.3706 59.8335 15.3706C58.9429 15.3706 58.0654 15.1553 57.2754 14.7429ZM58.1355 12.3924C58.3479 12.6163 58.6022 12.7959 58.8839 12.9211C59.1656 13.0463 59.469 13.1146 59.777 13.122C60.085 13.1295 60.3914 13.0759 60.6787 12.9645C60.9661 12.8531 61.2287 12.6859 61.4516 12.4726C61.4795 12.4465 61.5055 12.4185 61.5315 12.3924C61.9809 11.8679 62.2146 11.1915 62.1854 10.5005C62.217 9.80341 61.9832 9.1204 61.5315 8.58987C61.3191 8.36601 61.0648 8.18636 60.7831 8.06117C60.5014 7.93598 60.198 7.86771 59.89 7.86027C59.582 7.85283 59.2756 7.90635 58.9883 8.01779C58.7009 8.12922 58.4383 8.29638 58.2154 8.50971C58.1875 8.53581 58.1615 8.56377 58.1355 8.59173C57.6838 9.12226 57.45 9.80528 57.4816 10.5023C57.4524 11.1934 57.6861 11.8698 58.1355 12.3943V12.3924Z'
                fill='current'
              ></path>
              <path
                d='M66.3672 1.67822H68.968V15.2202H66.3672V1.67822Z'
                fill='current'
              ></path>
              <path
                d='M73.5961 15.1456L70.1797 5.77896H72.8289L74.8092 11.8649L76.7692 5.7771H79.4388L76.0223 15.1828L74.6978 19.0413H72.2139L73.5961 15.1456Z'
                fill='current'
              ></path>
              <path
                d='M80.9183 14.0496C80.0916 13.0616 79.6682 11.7963 79.733 10.508C79.7145 9.62309 79.8962 8.74552 80.2644 7.94123C80.5934 7.23499 81.1226 6.64174 81.7859 6.23567C82.5002 5.82158 83.315 5.61445 84.1397 5.63733C84.6612 5.63003 85.1788 5.72895 85.6612 5.92811C86.0814 6.09622 86.4513 6.37038 86.7349 6.72404V5.79204H89.347V15.7794C89.3661 16.2214 89.2893 16.6624 89.1219 17.0718C88.9544 17.4812 88.7003 17.8492 88.3772 18.1504C87.6638 18.7674 86.7413 19.0858 85.8005 19.0395H81.0595V16.9891H85.3899C85.5738 16.9945 85.7567 16.9596 85.9258 16.8869C86.0949 16.8141 86.2461 16.7052 86.369 16.5678C86.6293 16.2752 86.7683 15.8937 86.7572 15.5016V14.2658C86.4952 14.6338 86.1317 14.917 85.7113 15.0803C85.2254 15.2781 84.7049 15.3763 84.1805 15.3693C83.5737 15.4019 82.9671 15.3006 82.4035 15.0726C81.8398 14.8446 81.3329 14.4954 80.9183 14.0496ZM82.9154 12.4111C83.1242 12.6466 83.3825 12.8326 83.6716 12.9557C83.9607 13.0789 84.2735 13.1361 84.5874 13.1232C84.901 13.1341 85.2132 13.076 85.502 12.953C85.7909 12.83 86.0494 12.6451 86.2594 12.4111C86.7029 11.877 86.9297 11.1949 86.8947 10.5005C86.9292 9.8034 86.7026 9.11856 86.2594 8.58059C86.0434 8.3539 85.7839 8.17348 85.4966 8.05022C85.2092 7.92696 84.8999 7.86341 84.5874 7.86341C84.2748 7.86341 83.9656 7.92696 83.6782 8.05022C83.3908 8.17348 83.1313 8.3539 82.9154 8.58059C82.4811 9.12246 82.2614 9.80615 82.2986 10.5005C82.2619 11.1932 82.4846 11.8746 82.9228 12.4111H82.9154Z'
                fill='current'
              ></path>
              <path
                d='M93.3223 14.743C92.5795 14.3408 91.9647 13.7368 91.5481 13.0002C91.132 12.2329 90.9141 11.3732 90.9141 10.4996C90.9141 9.62609 91.132 8.76643 91.5481 7.99909C91.9642 7.26263 92.5792 6.65912 93.3223 6.25812C94.1121 5.84578 94.9892 5.63049 95.8795 5.63049C96.7698 5.63049 97.647 5.84578 98.4367 6.25812C99.1798 6.65912 99.7948 7.26263 100.211 7.99909C100.627 8.76643 100.845 9.62609 100.845 10.4996C100.845 11.3732 100.627 12.2329 100.211 13.0002C99.7944 13.7368 99.1795 14.3408 98.4367 14.743C97.647 15.1554 96.7698 15.3707 95.8795 15.3707C94.9892 15.3707 94.1121 15.1554 93.3223 14.743ZM94.1862 12.3925C94.3986 12.6164 94.6529 12.796 94.9345 12.9212C95.2162 13.0464 95.5197 13.1147 95.8277 13.1221C96.1356 13.1296 96.442 13.0761 96.7294 12.9646C97.0167 12.8532 97.2793 12.686 97.5023 12.4727L97.584 12.3925C98.0326 11.8675 98.2662 11.1915 98.2379 10.5006C98.2695 9.80353 98.0357 9.12051 97.584 8.58998C97.3715 8.36529 97.1168 8.18493 96.8347 8.05925C96.5525 7.93356 96.2484 7.86503 95.9398 7.85758C95.6311 7.85013 95.3241 7.90392 95.0362 8.01585C94.7484 8.12778 94.4854 8.29565 94.2623 8.50983C94.2345 8.53592 94.2066 8.56388 94.1806 8.59184C93.7289 9.12238 93.4951 9.80539 93.5267 10.5024C93.4994 11.1936 93.7352 11.8693 94.1862 12.3925Z'
                fill='current'
              ></path>
              <path
                d='M102.266 5.77898H104.879V7.08378C105.143 6.61855 105.54 6.24329 106.018 6.00639C106.552 5.74241 107.14 5.61072 107.735 5.62241C108.379 5.60852 109.014 5.77022 109.574 6.09027C110.1 6.39919 110.528 6.85168 110.808 7.39507C111.107 7.99319 111.257 8.65514 111.246 9.32431V15.2201H108.632V9.91892C108.648 9.40087 108.465 8.89643 108.121 8.50974C107.958 8.32791 107.757 8.18378 107.532 8.08725C107.308 7.99073 107.065 7.94409 106.821 7.95054C106.559 7.94149 106.298 7.98964 106.056 8.09166C105.814 8.19367 105.597 8.34713 105.42 8.54143C105.052 8.95428 104.859 9.4942 104.879 10.0475V15.2201H102.266V5.77898Z'
                fill='current'
              ></path>
              <path
                d='M45.7777 40.468C45.2013 39.976 44.7346 39.3677 44.4081 38.6826C44.0816 37.9976 43.9026 37.2512 43.8828 36.4921H46.7568C46.778 36.9014 46.8844 37.3017 47.069 37.6674C47.2536 38.033 47.5124 38.3559 47.8287 38.6152C48.548 39.15 49.4295 39.4187 50.3237 39.3757C51.0921 39.4086 51.8506 39.1916 52.4861 38.7569C52.7409 38.589 52.9501 38.3602 53.0951 38.0912C53.24 37.8221 53.3161 37.5212 53.3165 37.2153C53.3327 36.9666 53.2975 36.7171 53.2131 36.4827C53.1287 36.2482 52.9969 36.0337 52.8261 35.8528C52.484 35.5278 52.0663 35.294 51.6111 35.1724C50.946 34.9972 50.2729 34.8549 49.5917 34.7455C48.655 34.6034 47.7312 34.3859 46.8292 34.095C46.1145 33.8477 45.4888 33.3937 45.0309 32.7902C44.4874 31.991 44.2259 31.0324 44.2878 30.0669C44.2705 29.4269 44.4045 28.7918 44.679 28.2138C44.9535 27.6358 45.3606 27.1312 45.8669 26.7415C47.0369 25.8582 48.4763 25.4102 49.9391 25.474C51.517 25.4069 53.0688 25.894 54.3271 26.8515C54.8778 27.2852 55.3271 27.8347 55.6432 28.4614C55.9594 29.0882 56.1348 29.7768 56.157 30.4788H53.2905C53.2559 30.0908 53.1324 29.7159 52.9297 29.3836C52.727 29.0512 52.4506 28.7703 52.122 28.5627C51.475 28.1376 50.718 27.9121 49.9447 27.914C49.2384 27.8775 48.5396 28.0739 47.955 28.4732C47.7167 28.6404 47.5231 28.8639 47.3913 29.124C47.2594 29.384 47.1933 29.6727 47.1989 29.9644C47.166 30.2792 47.232 30.5964 47.3875 30.8718C47.5431 31.1471 47.7804 31.3669 48.0665 31.5003C48.9227 31.8357 49.82 32.0539 50.7342 32.149C51.7086 32.2732 52.6699 32.4854 53.6063 32.7827C54.3635 33.0521 55.0229 33.543 55.4994 34.1919C56.0803 35.0665 56.3578 36.1088 56.2889 37.1576C56.3121 37.8259 56.1768 38.4902 55.8942 39.0958C55.6116 39.7015 55.1898 40.2312 54.6634 40.6414C53.5785 41.5112 52.1319 41.9462 50.3237 41.9462C48.6801 42.021 47.0651 41.4959 45.7777 40.468Z'
                fill='current'
              ></path>
              <path
                d='M64.1486 20.7208V25.7238H68.8525V28.3837H64.1486V36.3654C64.1033 37.0806 64.3349 37.7857 64.7951 38.3338C65.0312 38.5723 65.3151 38.7579 65.628 38.878C65.9409 38.9982 66.2757 39.0503 66.6101 39.0309H68.8525V41.6889H66.3575C65.6553 41.7261 64.9529 41.6218 64.2915 41.3824C63.6301 41.1429 63.0231 40.7731 62.5064 40.2947C62.021 39.7889 61.6445 39.1883 61.4003 38.5303C61.1561 37.8723 61.0495 37.1709 61.087 36.4698V28.3837H57.8359V25.7238H61.087V20.7208H64.1486Z'
                fill='current'
              ></path>
              <path
                d='M85.4286 41.689H82.3671V38.8688C81.9769 39.8255 81.2835 40.6267 80.3941 41.1485C79.4377 41.6929 78.352 41.9667 77.2527 41.9407C76.4495 41.9741 75.6486 41.8328 74.905 41.5265C74.1614 41.2202 73.4926 40.7562 72.9445 40.1661C71.8264 38.8924 71.2438 37.2335 71.319 35.5378V25.7239H74.3806V34.9414C74.3288 36.0578 74.6945 37.1533 75.406 38.0132C75.7407 38.3978 76.1567 38.7026 76.6237 38.9055C77.0906 39.1083 77.5968 39.204 78.1054 39.1857C78.6845 39.2009 79.2597 39.0865 79.7893 38.8508C80.3189 38.6151 80.7895 38.264 81.167 37.8231C81.9854 36.8648 82.4139 35.6322 82.3671 34.371V25.7239H85.4286V41.689Z'
                fill='current'
              ></path>
              <path
                d='M91.9491 40.88C90.812 40.1828 89.9019 39.1685 89.3297 37.961C88.7363 36.6199 88.4297 35.169 88.4297 33.7017C88.4297 32.2345 88.7363 30.7835 89.3297 29.4425C89.902 28.2365 90.8123 27.2241 91.9491 26.5291C93.1851 25.797 94.6014 25.4288 96.0362 25.4666C97.0704 25.4558 98.0913 25.701 99.0086 26.1805C99.8609 26.6073 100.581 27.2587 101.093 28.065V19.0414H104.155V41.689H101.087V39.3105C100.584 40.1318 99.8624 40.7956 99.003 41.2267C98.0978 41.7025 97.0897 41.9477 96.0678 41.9406C94.623 41.9809 93.196 41.6135 91.9491 40.88ZM92.878 37.728C93.3163 38.2291 93.8608 38.6256 94.4715 38.8884C95.0822 39.1513 95.7438 39.2738 96.4077 39.2471C97.075 39.2734 97.7397 39.1507 98.3539 38.888C98.9681 38.6253 99.5166 38.2291 99.9598 37.728C100.893 36.6027 101.371 35.1674 101.301 33.7055C101.371 32.2435 100.893 30.8083 99.9598 29.683C99.5182 29.1838 98.9722 28.7888 98.3607 28.5262C97.7492 28.2635 97.0873 28.1398 96.4226 28.1638C95.7586 
                    28.1371 95.0971 28.2596 94.4864 28.5225C93.8756 28.7853 93.3312 29.1818 92.8929 29.683C91.9691 30.8125 91.4964 32.246 91.5664 33.7055C91.4964 35.1649 91.9691 36.5985 92.8929 37.728H92.878Z'
                fill='current'
              ></path>
              <path
                d='M111.223 19.2502V22.6968H108.18V19.2502H111.223ZM108.187 25.7239H111.249V41.6891H108.187V25.7239Z'
                fill='current'
              ></path>
              <path
                d='M118.189 40.88C116.965 40.1911 115.955 39.1773 115.268 37.9498C114.574 36.6435 114.211 35.1859 114.211 33.7055C114.211 32.225 114.574 30.7674 115.268 29.4611C115.955 28.2339 116.965 27.2205 118.189 26.5328C119.49 25.8362 120.943 25.4718 122.418 25.4718C123.893 25.4718 125.346 25.8362 126.647 26.5328C127.868 27.2184 128.874 28.2327 129.551 29.4611C130.236 30.7704 130.593 32.2269 130.593 33.7055C130.593 35.184 130.236 36.6405 129.551 37.9498C128.873 39.1784 127.868 40.1931 126.647 40.88C125.345 41.5758 123.893 41.9397 122.418 41.9397C120.943 41.9397 119.491 41.5758 118.189 40.88ZM118.746 37.6963C119.69 38.6703 120.982 39.2281 122.336 39.247C123.69 39.2659 124.996 38.7443 125.967 37.7969L126.069 37.6963C126.978 36.566 127.474 35.1576 127.474 33.7055C127.474 32.2533 126.978 30.8449 126.069 29.7146C125.125 28.7405 123.833 28.1826 122.479 28.1637C121.124 28.1449 119.818 28.6665 118.846 29.614L118.746 29.7146C117.837 30.8443 117.34 32.2523 117.339 33.7045C117.338 35.1566 117.833 36.5654 118.741 37.6963H118.746Z'
                fill='current'
              ></path>
              <path
                d='M134.479 40.468C133.903 39.9758 133.437 39.3674 133.11 38.6823C132.784 37.9973 132.606 37.251 132.586 36.4921H135.458C135.479 36.9014 135.586 37.3017 135.77 37.6673C135.955 38.033 136.214 38.3558 136.53 38.6152C137.249 39.15 138.131 39.4186 139.025 39.3757C139.795 39.4094 140.555 39.1923 141.191 38.7568C141.446 38.5901 141.656 38.3625 141.802 38.0945C141.948 37.8265 142.025 37.5263 142.027 37.2209C142.043 36.9723 142.008 36.723 141.924 36.4886C141.84 36.2542 141.709 36.0396 141.538 35.8583C141.196 35.533 140.778 35.2991 140.322 35.178C139.657 35.0027 138.983 34.8605 138.302 34.7511C137.366 34.609 136.442 34.3914 135.54 34.1006C134.825 33.8533 134.199 33.3993 133.741 32.7958C133.198 31.9966 132.936 31.038 132.998 30.0725C132.981 29.4324 133.115 28.7974 133.39 28.2193C133.664 27.6413 134.071 27.1368 134.577 26.7471C135.745 25.862 137.184 25.4113 138.646 25.4721C140.224 25.4047 141.776 25.8919 143.034 26.8496C143.585 27.2833 144.034 27.8328 144.35 28.4595C144.666 29.0863 144.842 29.7749 144.864 30.4769H141.992C141.957 30.0882 141.833 29.7128 141.63 29.3801C141.426 29.0473 141.149 28.7663 140.82 28.5589C140.173 28.1338 139.416 27.9083 138.642 27.9102C137.936 27.8737 137.237 28.0701 136.653 28.4694C136.414 28.6367 136.221 28.8602 136.089 29.1202C135.957 29.3803 135.891 29.6689 135.896 29.9606C135.864 30.2754 135.93 30.5926 136.085 30.868C136.241 31.1434 136.478 31.3631 136.764 31.4966C137.62 31.832 138.518 32.0502 139.432 32.1452C140.406 32.2695 141.367 32.4816 142.304 32.779C143.061 33.0484 143.72 33.5392 144.197 34.1882C144.777 35.0617 145.054 36.1026 144.986 37.1501C145.01 37.8185 144.875 38.4829 144.592 39.0886C144.31 39.6943 143.888 40.224 143.361 40.6339C142.277 41.5037 140.831 41.9387 139.021 41.9387C137.38 42.0148 135.766 41.4924 134.479 40.468Z'
                fill='current'
              ></path>
              <path
                d='M37.5155 32.6339C37.5246 32.6232 37.5322 32.6095 37.5398 32.5988C37.5474 32.5881 37.5626 32.5652 37.5717 32.5484L37.5899 32.524C37.5923 32.5176 37.5954 32.5115 37.599 32.5057L37.6218 32.4568C37.6249 32.4515 37.6275 32.4459 37.6294 32.44C37.6369 32.4272 37.6435 32.414 37.6491 32.4003C37.6491 32.385 37.6613 32.3682 37.6673 32.353C37.6734 32.3377 37.681 32.3148 37.6856 32.2965C37.6901 32.2781 37.6977 32.2613 37.7023 32.2445C37.7068 32.2277 37.7023 32.2201 37.7023 32.2094V32.185C37.7023 32.1667 37.7099 32.1499 37.7129 32.1315C37.7159 32.1132 37.7129 32.0979 37.7129 32.0796C37.7129 32.0613 37.7129 32.043 37.7129 32.0231C37.7129 32.0033 37.7129 31.9834 37.7129 31.9636L37.6962 11.4677C37.6959 11.2723 37.6445 11.0805 37.5472 10.9114C37.45 10.7423 37.3102 10.6018 37.142 10.5041L19.528 0.254678L19.4854 0.234827L19.4323 0.20734L19.3761 0.182908L19.3245 0.16611L19.2774 0.149313L19.2167 0.134042L19.1559 0.121826H19.118H19.1089H19.0466H18.9904H18.954H18.8993C18.8796 0.121826 18.8614 0.121826 18.8431 0.121826H18.8264H18.787L18.7277 0.134042L18.6655 0.149313L18.6184 0.164583L18.5683 0.182908L18.5106 0.20734L18.4575 0.2333L18.4195 0.253151L0.743252 10.5041C0.574386 10.602 0.434121 10.7429 0.336563 10.9125C0.239005 11.0822 0.187594 11.2747 0.1875 11.4708V31.9636C0.1875 31.9834 0.1875 32.0033 0.1875 32.0216C0.1875 32.0399 0.1875 32.0598 0.1875 32.0781C0.1875 32.0964 0.1875 32.1132 0.1875 32.1315C0.1875 32.1499 0.1875 32.1667 0.198129 32.185V32.2094C0.198129 32.2201 0.198129 32.2323 0.198129 32.243C0.198129 32.2537 0.210277 32.2781 0.214832 32.2949C0.219387 32.3117 0.22698 32.3331 0.234572 32.3514L0.251275 32.4003C0.251275 32.414 0.264941 32.4263 0.271015 32.44L0.280125 32.4568C0.280125 32.4721 0.293791 32.4889 0.302902 32.5041L0.312013 32.5209C0.317022 32.5304 0.3226 32.5396 0.328716 32.5484L0.362121 32.5973C0.371232 32.6095 0.378824 32.6232 0.387935 32.637C0.39926 32.6519 0.411428 32.6662 0.424378 32.6797C0.436525 32.695 0.450191 32.7088 0.463857 32.724L0.498782 32.7607L0.535224 32.7928L0.556483 32.8111L0.586852 32.837L0.624813 32.866L0.674922 32.8981L0.726549 32.9317H0.735659L18.4423 42.6711C18.6053 42.7606 18.788 42.8074 18.9737 42.8074C19.1594 42.8074 19.3422 42.7606 19.5052 42.6711L37.1617 32.9516H37.1708L37.2224 32.918L37.271 32.8859C37.2848 32.8771 37.298 32.8674 37.3105 32.8569L37.3409 32.8309L37.3621 32.8126L37.3986 32.7805L37.4335 32.7439C37.4472 32.7286 37.4593 32.7133 37.473 32.6996C37.4866 32.6859 37.4973 32.6721 37.5094 32.6568L37.5155 32.6339ZM11.1294 17.1513L18.9737 3.45534L34.1582 29.9067L34.6988 30.8488H3.22591L11.1294 17.1513ZM35.5081 27.7825L22.0121 4.27994L35.4762 12.1152L35.5081 27.7825ZM15.9368 4.27078L2.40899 27.8024V12.1182L15.9368 4.27078ZM18.9737 40.4188L5.64176 33.089H32.2905L18.9737 40.4188Z'
                fill='current'
              ></path>
            </g>
            <defs>
              <clipPath id='clip0_2574_5721'>
                <rect
                  width='100'
                  height='42.7564'
                  fill='current'
                  transform='translate(0 0.121826)'
                ></rect>
              </clipPath>
            </defs>
          </svg>
          <svg
            width='100'
            height='42'
            viewBox='0 0 136 42'
            fill='#C9D2D9'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g>
              <path
                d='M46.612 20.5939C46.5726 19.6236 46.7258 18.6552 47.0626 17.7445C47.3995 16.8337 47.9133 15.9987 48.5745 15.2876C49.2358 14.5765 50.0312 14.0033 50.9151 13.6012C51.799 13.1991 52.7537 12.9759 53.7242 12.9447H54.0258C57.7768 12.9447 59.9906 15.1512 60.6452 17.7328L58.3137 18.5124C58.1042 17.5504 57.5559 16.6957 56.7687 16.1044C55.9816 15.513 55.0081 15.2243 54.0258 15.2909C51.5986 15.2909 49.1641 17.0635 49.1641 20.638C49.1641 24.2125 51.5398 25.9189 54.0552 25.9189C55.0424 25.9458 56.0101 25.6409 56.8035 25.0529C57.5968 24.4648 58.1701 23.6277 58.4314 22.6753L60.7188 23.4108C60.324 24.8636 59.4457 26.1383 58.229 27.0248C57.0122 27.9113 55.5296 28.3566 54.0258 28.2872C52.0938 28.3226 50.2269 27.5895 48.8353 26.2489C47.4437 24.9083 46.6413 23.0701 46.6046 21.1381C46.5973 20.9616 46.6046 20.7777 46.612 20.5939Z'
                fill='current'
              ></path>
              <path
                d='M65.264 27.9489H62.8516V12.9006H65.264V18.7846C65.6142 18.3692 66.0547 18.0393 66.5518 17.8201C67.0489 17.6008 67.5895 17.498 68.1324 17.5196C70.6258 17.5196 71.8099 19.3068 71.8099 21.5354V27.9489H69.4857V21.9619C69.5554 21.4516 69.4217 20.9343 69.1135 20.5216C68.8054 20.1088 68.3473 19.8337 67.8382 19.7555C67.694 19.7407 67.5486 19.7407 67.4043 19.7555C66.8464 19.7555 66.3114 19.9771 65.9169 20.3716C65.5224 20.7661 65.3008 21.3011 65.3008 21.859C65.2971 21.9202 65.2971 21.9816 65.3008 22.0429L65.264 27.9489Z'
                fill='current'
              ></path>
              <path
                d='M77.2185 22.1531L79.8074 21.7486C80.3958 21.6751 80.5429 21.3735 80.5429 21.0131C80.5429 20.1599 79.9692 19.4759 78.6306 19.4759C78.1251 19.435 77.6238 19.5951 77.2355 19.9214C76.8473 20.2478 76.6033 20.714 76.5565 21.219V21.3294L74.3501 20.8366C74.5339 19.0861 76.1226 17.5269 78.6086 17.5269C81.7271 17.5269 82.9112 19.292 82.9112 21.3514V26.3749C82.9087 26.9192 82.9505 27.4628 83.0363 28.0003H80.8298C80.7503 27.5737 80.7182 27.1395 80.7342 26.7059C80.3993 27.2213 79.935 27.6399 79.3879 27.92C78.8407 28.2 78.2296 28.3317 77.6157 28.3019C76.7771 28.3711 75.9453 28.1049 75.3028 27.5616C74.6602 27.0184 74.2594 26.2424 74.1882 25.404C74.1882 25.3525 74.1882 25.3011 74.1882 25.2569C74.1515 23.3961 75.4827 22.3958 77.2185 22.1531ZM80.5576 23.7786V23.3152L77.9172 23.7124C77.5588 23.7237 77.2186 23.8732 76.9678 24.1295C76.7169 24.3858 76.5749 24.7292 76.5713 25.0878C76.5741 25.2655 76.6123 25.4408 76.6836 25.6036C76.7549 25.7664 76.8579 25.9133 76.9866 26.0359C77.1154 26.1584 77.2672 26.2541 77.4333 26.3174C77.5993 26.3806 77.7764 26.4102 77.954 26.4043H78.0643C78.3654 26.4358 78.6697 26.4074 78.9597 26.3208C79.2498 26.2342 79.5198 26.0911 79.7543 25.8997C79.9888 25.7082 80.1831 25.4723 80.326 25.2055C80.4689 24.9387 80.5577 24.6462 80.5871 24.3449C80.5976 24.1553 80.5852 23.9652 80.5503 23.7786H80.5576Z'
                fill='current'
              ></path>
              <path
                d='M87.0206 12.6946C87.228 12.6917 87.4338 12.7298 87.6264 12.8067C87.8189 12.8835 87.9944 12.9977 88.1427 13.1426C88.291 13.2875 88.4092 13.4602 88.4906 13.651C88.5719 13.8417 88.6148 14.0466 88.6167 14.2539C88.6166 14.5642 88.5249 14.8677 88.3529 15.126C88.1809 15.3843 87.9363 15.5861 87.65 15.7058C87.3637 15.8256 87.0484 15.858 86.7437 15.799C86.439 15.7401 86.1585 15.5923 85.9375 15.3744C85.7165 15.1565 85.5649 14.8781 85.5017 14.5743C85.4385 14.2704 85.4666 13.9547 85.5823 13.6667C85.6981 13.3787 85.8964 13.1314 86.1523 12.9559C86.4082 12.7803 86.7103 12.6843 87.0206 12.6799V12.6946ZM85.8439 27.993V17.8284H88.2563V27.9488L85.8439 27.993Z'
                fill='current'
              ></path>
              <path
                d='M93.7488 27.9489H91.3438V17.8285H93.69V19.1744C93.9959 18.6576 94.4352 18.2326 94.9619 17.944C95.4886 17.6554 96.0832 17.5139 96.6835 17.5343C99.1547 17.5343 100.361 19.3215 100.361 21.5501V27.9489H97.9559V21.962C97.9559 20.719 97.3895 19.7113 95.8744 19.7113C95.5943 19.7133 95.3173 19.7703 95.0593 19.8793C94.8012 19.9883 94.5672 20.147 94.3705 20.3465C94.1738 20.5459 94.0183 20.7821 93.9129 21.0416C93.8075 21.3011 93.7542 21.5789 93.7562 21.859C93.7562 21.9399 93.7562 22.0208 93.7562 22.1017L93.7488 27.9489Z'
                fill='current'
              ></path>
              <path
                d='M103.273 27.9489V12.9006H105.686V27.9489H103.273Z'
                fill='current'
              ></path>
              <path
                d='M109.989 12.6947C110.299 12.6933 110.603 12.7841 110.862 12.9557C111.121 13.1273 111.323 13.3718 111.442 13.6584C111.562 13.945 111.593 14.2606 111.533 14.5651C111.473 14.8697 111.324 15.1495 111.104 15.3691C110.885 15.5886 110.605 15.738 110.3 15.7982C109.996 15.8584 109.68 15.8267 109.393 15.7073C109.107 15.5878 108.862 15.3858 108.691 15.1271C108.519 14.8683 108.428 14.5644 108.43 14.254C108.434 13.8416 108.599 13.4472 108.891 13.1557C109.182 12.8641 109.577 12.6986 109.989 12.6947ZM108.805 27.993V17.8285H111.195V27.9489L108.805 27.993Z'
                fill='current'
              ></path>
              <path
                d='M116.725 27.9489H114.312V17.8285H116.659V19.1744C116.965 18.6581 117.405 18.2335 117.931 17.945C118.458 17.6565 119.052 17.5147 119.652 17.5343C122.123 17.5343 123.33 19.3215 123.33 21.5501V27.9489H120.917V21.9619C120.987 21.4516 120.853 20.9343 120.545 20.5215C120.237 20.1088 119.779 19.8337 119.27 19.7555C119.123 19.7407 118.975 19.7407 118.828 19.7555C118.267 19.7613 117.73 19.9886 117.334 20.3879C116.939 20.7873 116.718 21.3265 116.718 21.8884C116.71 21.974 116.71 22.0602 116.718 22.1458L116.725 27.9489Z'
                fill='current'
              ></path>
              <path
                d='M131.555 22.1017L135.799 27.9857H132.857L129.915 23.8154L128.672 25.1246V27.9489H126.281V12.9006H128.672V21.9178L132.555 17.8285H135.754L131.555 22.1017Z'
                fill='current'
              ></path>
              <path
                d='M18.056 8.82596L28.4853 14.8129V26.8456L18.0854 32.8693L7.66342 26.8971V14.8717L18.056 8.82596ZM18.056 0L14.2314 2.20649L3.81677 8.25227L-0.0078125 10.4588V31.3248L3.81677 33.5313L14.2461 39.5182L18.0707 41.7247L21.8953 39.5182L32.2878 33.4871L36.1124 31.2807V10.3852L32.2878 8.17872L21.8659 2.20649L18.0413 0H18.056Z'
                fill='current'
              ></path>
            </g>
            <defs>
              <clipPath id='clip0_2574_5737'>
                <rect width='135.809' height='41.71' fill='current'></rect>
              </clipPath>
            </defs>
          </svg>
          <svg
            width='151'
            height='28'
            viewBox='0 0 151 28'
            fill='#C9D2D9'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g>
              <path
                d='M0.000965517 11.492C0.13469 5.921 4.63303 1.44824 10.1558 1.44824C15.6872 1.44824 20.1769 5.92342 20.3106 11.492C20.3541 13.3106 18.9357 14.8207 17.1418 14.8651C15.3479 14.909 13.859 13.4709 13.8151 11.6523C13.7668 9.64645 12.1486 8.035 10.1558 8.035C8.17938 8.035 6.56455 9.62859 6.49793 11.6161C6.50855 14.2809 7.50545 16.9023 8.638 18.9854C9.09535 19.8269 9.60502 20.6389 10.164 21.4166C10.3569 21.6845 10.5575 21.9467 10.7655 22.203L10.7877 22.2296L10.7868 22.2281L10.7853 22.2262L10.7887 22.23C11.9632 23.5996 11.8232 25.6755 10.4744 26.8703C10.1548 27.1547 9.78159 27.3725 9.37676 27.5109C8.97193 27.6494 8.54356 27.7057 8.1167 27.6766C7.68984 27.6475 7.27307 27.5336 6.89075 27.3415C6.50844 27.1495 6.16827 26.8831 5.89014 26.558L8.33628 24.3904C5.89014 26.558 5.88966 26.557 5.88869 26.556L5.88483 26.5517L5.8771 26.5425L5.85634 26.5184L5.79359 26.4431C5.72464 26.3598 5.65657 26.2758 5.58938 26.1911C5.35913 25.9009 5.13572 25.6054 4.91931 25.3047C4.19693 24.3005 3.53843 23.2518 2.94772 22.1649C1.54241 19.5797 0 15.8093 0 11.5727V11.5321L0.000965517 11.492ZM10.7843 22.2252L10.7848 22.2262V22.2252H10.7843Z'
                fill='current'
              ></path>
              <path
                d='M20.4589 11.4944V11.9304C20.4591 12.3573 20.3753 12.7801 20.2121 13.1746C20.049 13.5691 19.8098 13.9276 19.5081 14.2297C19.2064 14.5317 18.8481 14.7714 18.4538 14.935C18.0595 15.0986 17.6368 15.183 17.2099 15.1832C16.783 15.183 16.3603 15.0986 15.966 14.935C15.5717 14.7714 15.2134 14.5317 14.9117 14.2297C14.61 13.9276 14.3708 13.5691 14.2077 13.1746C14.0445 12.7801 13.9607 12.3573 13.9609 11.9304V11.409L13.9624 11.3694C14.0961 5.86693 18.5945 1.44824 24.1172 1.44824C29.64 1.44824 34.1383 5.86693 34.272 11.3694L34.273 11.409V11.4486C34.273 14.9018 33.1965 17.9987 32.2044 20.1411C31.7905 21.0368 31.3253 21.9078 30.8111 22.75C30.6114 23.0761 30.4024 23.3964 30.1845 23.7107C30.1638 23.7401 30.1429 23.7694 30.1218 23.7985L30.1155 23.8067L30.1116 23.812C30.1116 23.813 30.1107 23.8135 27.5979 21.9708L30.1107 23.8135C29.8589 24.158 29.5417 24.4496 29.1772 24.6714C28.8126 24.8933 28.4079 25.0411 27.9862 25.1064C27.5645 25.1717 27.1341 25.1531 26.7195 25.0519C26.305 24.9507 25.9145 24.7687 25.5703 24.5164C25.2253 24.2632 24.9335 23.9445 24.7118 23.5785C24.49 23.2125 24.3426 22.8064 24.2779 22.3834C24.2132 21.9603 24.2325 21.5287 24.3347 21.1132C24.437 20.6976 24.6201 20.3063 24.8737 19.9616C25.0121 19.7605 25.145 19.5557 25.2725 19.3475C25.6549 18.7207 26.0009 18.0724 26.3089 17.4058C27.0799 15.7403 27.7664 13.6326 27.7751 11.492C27.7085 9.52866 26.0936 7.95486 24.1172 7.95486C22.1398 7.95486 20.5245 9.5301 20.4589 11.4944Z'
                fill='current'
              ></path>
              <path
                d='M27.5025 25.5683C28.4004 25.5683 29.2615 25.2116 29.8963 24.5768C30.5312 23.9419 30.8879 23.0808 30.8879 22.183C30.8879 21.2851 30.5312 20.424 29.8963 19.7892C29.2615 19.1543 28.4004 18.7976 27.5025 18.7976C26.6047 18.7976 25.7436 19.1543 25.1087 19.7892C24.4739 20.424 24.1172 21.2851 24.1172 22.183C24.1172 23.0808 24.4739 23.9419 25.1087 24.5768C25.7436 25.2116 26.6047 25.5683 27.5025 25.5683Z'
                fill='current'
              ></path>
              <path
                d='M61.432 6.73159C63.2694 6.73159 64.7505 7.31959 65.857 8.49607C66.9726 9.67207 67.5307 11.2314 67.5307 13.1827V22.7432H62.7113V13.5843C62.7113 12.7907 62.5095 12.1747 62.1151 11.717C61.7207 11.2594 61.1433 11.0354 60.3931 11.0354C59.6043 11.0354 58.9888 11.2966 58.5461 11.8102C58.1034 12.333 57.892 13.0427 57.892 13.9575V22.7432H53.0726V13.5843C53.0726 12.7907 52.8708 12.1747 52.4764 11.717C52.082 11.2594 51.5046 11.0354 50.7544 11.0354C49.9655 11.0354 49.35 11.2966 48.9073 11.8102C48.4646 12.333 48.2532 13.0427 48.2532 13.9575V22.7432H43.4531V7.16076H48.2725V8.58972C49.1477 7.34759 50.5811 6.72193 52.5724 6.72193C54.4388 6.72193 55.8335 7.40359 56.7763 8.77607C57.7573 7.41276 59.306 6.73159 61.432 6.73159ZM84.5668 20.7919C82.922 22.3788 80.9113 23.1724 78.5352 23.1724C76.1595 23.1724 74.1489 22.3788 72.5041 20.7919C70.8589 19.2046 70.0319 17.2533 70.0319 14.9472C70.0319 12.641 70.8589 10.6989 72.5041 9.1029C74.1489 7.51559 76.1595 6.72193 78.5352 6.72193C80.9113 6.72193 82.922 7.51559 84.5668 9.1029C86.2115 10.6897 87.039 12.6415 87.039 14.9472C87.039 17.2625 86.2212 19.2046 84.5668 20.7919ZM75.8998 17.599C76.6017 18.2801 77.4866 18.6258 78.5352 18.6258C79.5837 18.6258 80.4595 18.2801 81.1711 17.599C81.8831 16.9173 82.2293 16.03 82.2293 14.9472C82.2293 13.8643 81.8735 12.9867 81.1711 12.2959C80.4691 11.605 79.5837 11.269 78.5352 11.269C77.4866 11.269 76.6114 11.6142 75.8998 12.2959C75.1877 12.9775 74.8416 13.8643 74.8416 14.9472C74.8416 16.0305 75.1974 16.9168 75.8998 17.599ZM94.5806 9.93372C94.879 8.93441 95.4849 8.16924 96.3987 7.64641C97.3126 7.11393 98.3129 6.85276 99.4 6.85276V12.1462C98.2264 11.9594 97.1296 12.1559 96.11 12.7255C95.0904 13.2947 94.5903 14.2843 94.5903 15.7032V22.7428H89.7709V7.16076H94.5903V9.93372H94.5806ZM112.819 7.16076H117.639V22.7336H112.819V21.2679C111.684 22.5376 110.087 23.1724 108.039 23.1724C105.922 23.1724 104.114 22.3788 102.613 20.7919C101.112 19.2046 100.362 17.2533 100.362 14.9472C100.362 12.641 101.112 10.6989 102.613 9.1029C104.114 7.51559 105.922 6.72193 108.039 6.72193C110.097 6.72193 111.684 7.35676 112.819 8.62641V7.16076ZM106.239 17.7293C106.942 18.411 107.865 18.7566 109 18.7566C110.135 18.7566 111.059 18.411 111.761 17.7293C112.463 17.0477 112.819 16.1237 112.819 14.9563C112.819 13.7895 112.463 12.865 111.761 12.1839C111.059 11.5022 110.135 11.1566 109 11.1566C107.865 11.1566 106.942 11.5022 106.239 12.1839C105.537 12.8655 105.182 13.7895 105.182 14.9568C105.172 16.1145 105.528 17.0385 106.239 17.7293ZM121.159 22.7428V0H125.979V22.7428H121.159ZM133.953 4.96662C133.386 5.51745 132.703 5.78828 131.914 5.78828C131.125 5.78828 130.442 5.51793 129.875 4.96662C129.307 4.41628 129.028 3.75297 129.028 2.98731C129.028 2.22214 129.307 1.55931 129.875 1.008C130.442 0.457655 131.125 0.186828 131.914 0.186828C132.703 0.186828 133.386 0.466828 133.953 1.00848C134.521 1.55883 134.8 2.22214 134.8 2.98779C134.8 3.76262 134.521 4.41579 133.953 4.9671V4.96662ZM129.509 22.7428V7.16076H134.329V22.7336H129.509V22.7432V22.7428ZM142.245 11.7166C142.245 12.0255 142.515 12.2862 143.063 12.4827C143.611 12.6787 144.265 12.8747 145.035 13.0707C145.804 13.2667 146.574 13.5187 147.344 13.8363C148.113 14.1443 148.767 14.658 149.315 15.3763C149.864 16.0957 150.133 16.9921 150.133 18.075C150.133 19.7554 149.489 21.0251 148.209 21.8936C146.93 22.7524 145.343 23.1821 143.457 23.1821C140.071 23.1821 137.772 21.9496 136.56 19.4754L140.735 17.1693C141.158 18.3926 142.072 19.0086 143.467 19.0086C144.621 19.0086 145.198 18.691 145.198 18.047C145.198 17.739 144.929 17.4773 144.381 17.2721C143.735 17.0344 143.076 16.8318 142.409 16.6653C141.622 16.4619 140.85 16.203 140.1 15.8905C139.33 15.5728 138.676 15.0688 138.128 14.378C137.58 13.6872 137.311 12.8467 137.311 11.857C137.311 10.2326 137.916 8.98172 139.129 8.08524C140.34 7.18876 141.832 6.74993 143.601 6.74993C144.929 6.74993 146.141 7.03959 147.228 7.60924C148.315 8.1789 149.2 9.00924 149.864 10.0834L145.756 12.2307C145.247 11.3154 144.525 10.8582 143.601 10.8582C142.697 10.8394 142.245 11.1286 142.245 11.717V11.7166Z'
                fill='current'
              ></path>
            </g>
            <defs>
              <clipPath id='clip0_2574_5757'>
                <rect width='150.138' height='28' fill='current'></rect>
              </clipPath>
            </defs>
          </svg>
        </Col>
      </Row>
    </Container>
  )
}

export default Sponsor
