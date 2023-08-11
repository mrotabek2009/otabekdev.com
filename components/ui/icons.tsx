type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  logo: (props: IconProps) => (
    <svg
      width="200"
      height="47"
      viewBox="0 0 96 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer w-40 md:w-52 h-12"
    >
      <rect width="96" height="15" fill="white" />
      <path
        d="M0.443182 8.33523V7.80682C0.917614 7.80682 1.24858 7.70739 1.43608 7.50852C1.62642 7.30966 1.72159 6.97727 1.72159 6.51136V5.14773C1.72159 4.75568 1.75852 4.41619 1.83239 4.12926C1.90909 3.84233 2.03267 3.60511 2.20312 3.41761C2.37358 3.23011 2.60085 3.09091 2.88494 3C3.16903 2.90909 3.51989 2.86364 3.9375 2.86364V3.69886C3.60795 3.69886 3.34801 3.75 3.15767 3.85227C2.97017 3.95455 2.83665 4.11364 2.7571 4.32955C2.6804 4.54261 2.64205 4.81534 2.64205 5.14773V6.85227C2.64205 7.07386 2.61222 7.27557 2.55256 7.45739C2.49574 7.6392 2.3892 7.79545 2.23295 7.92614C2.0767 8.05682 1.85369 8.15767 1.56392 8.22869C1.27699 8.29972 0.903409 8.33523 0.443182 8.33523ZM3.9375 13.7727C3.51989 13.7727 3.16903 13.7273 2.88494 13.6364C2.60085 13.5455 2.37358 13.4062 2.20312 13.2188C2.03267 13.0312 1.90909 12.794 1.83239 12.5071C1.75852 12.2202 1.72159 11.8807 1.72159 11.4886V10.125C1.72159 9.65909 1.62642 9.3267 1.43608 9.12784C1.24858 8.92898 0.917614 8.82955 0.443182 8.82955V8.30114C0.903409 8.30114 1.27699 8.33665 1.56392 8.40767C1.85369 8.47869 2.0767 8.57955 2.23295 8.71023C2.3892 8.84091 2.49574 8.99716 2.55256 9.17898C2.61222 9.3608 2.64205 9.5625 2.64205 9.78409V11.4886C2.64205 11.821 2.6804 12.0938 2.7571 12.3068C2.83665 12.5199 2.97017 12.6776 3.15767 12.7798C3.34801 12.8849 3.60795 12.9375 3.9375 12.9375V13.7727ZM0.443182 8.82955V7.80682H1.44886V8.82955H0.443182Z"
        fill="#3E74B5"
      />
      <path
        d="M7.9272 12.1364C7.33629 12.1364 6.81783 11.9957 6.3718 11.7145C5.92862 11.4332 5.58203 11.0398 5.33203 10.5341C5.08487 10.0284 4.96129 9.4375 4.96129 8.76136C4.96129 8.07955 5.08487 7.48437 5.33203 6.97585C5.58203 6.46733 5.92862 6.07244 6.3718 5.79119C6.81783 5.50994 7.33629 5.36932 7.9272 5.36932C8.51811 5.36932 9.03516 5.50994 9.47834 5.79119C9.92436 6.07244 10.271 6.46733 10.5181 6.97585C10.7681 7.48437 10.8931 8.07955 10.8931 8.76136C10.8931 9.4375 10.7681 10.0284 10.5181 10.5341C10.271 11.0398 9.92436 11.4332 9.47834 11.7145C9.03516 11.9957 8.51811 12.1364 7.9272 12.1364ZM7.9272 11.233C8.37607 11.233 8.74538 11.1179 9.03516 10.8878C9.32493 10.6577 9.53942 10.3551 9.67862 9.98011C9.81783 9.60511 9.88743 9.19886 9.88743 8.76136C9.88743 8.32386 9.81783 7.91619 9.67862 7.53835C9.53942 7.16051 9.32493 6.85511 9.03516 6.62216C8.74538 6.3892 8.37607 6.27273 7.9272 6.27273C7.47834 6.27273 7.10902 6.3892 6.81925 6.62216C6.52947 6.85511 6.31499 7.16051 6.17578 7.53835C6.03658 7.91619 5.96697 8.32386 5.96697 8.76136C5.96697 9.19886 6.03658 9.60511 6.17578 9.98011C6.31499 10.3551 6.52947 10.6577 6.81925 10.8878C7.10902 11.1179 7.47834 11.233 7.9272 11.233ZM15.2749 5.45455V6.30682H11.8828V5.45455H15.2749ZM12.8714 3.88636H13.8771V10.125C13.8771 10.4091 13.9183 10.6222 14.0007 10.7642C14.0859 10.9034 14.1939 10.9972 14.3246 11.0455C14.4581 11.0909 14.5987 11.1136 14.7464 11.1136C14.8572 11.1136 14.9482 11.108 15.0192 11.0966C15.0902 11.0824 15.147 11.071 15.1896 11.0625L15.3942 11.9659C15.326 11.9915 15.2308 12.017 15.1087 12.0426C14.9865 12.071 14.8317 12.0852 14.6442 12.0852C14.3601 12.0852 14.0817 12.0241 13.8089 11.902C13.5391 11.7798 13.3146 11.5938 13.1357 11.3438C12.9595 11.0938 12.8714 10.7784 12.8714 10.3977V3.88636ZM18.7138 12.1534C18.299 12.1534 17.9226 12.0753 17.5845 11.919C17.2464 11.7599 16.978 11.5312 16.7791 11.233C16.5803 10.9318 16.4808 10.5682 16.4808 10.142C16.4808 9.76705 16.5547 9.46307 16.7024 9.23011C16.8501 8.99432 17.0476 8.80966 17.2947 8.67614C17.5419 8.54261 17.8146 8.44318 18.1129 8.37784C18.4141 8.30966 18.7166 8.25568 19.0206 8.21591C19.4183 8.16477 19.7408 8.12642 19.9879 8.10085C20.2379 8.07244 20.4197 8.02557 20.5334 7.96023C20.6499 7.89489 20.7081 7.78125 20.7081 7.61932V7.58523C20.7081 7.16477 20.593 6.83807 20.3629 6.60511C20.1357 6.37216 19.7905 6.25568 19.3274 6.25568C18.8473 6.25568 18.4709 6.3608 18.1982 6.57102C17.9254 6.78125 17.7337 7.00568 17.6229 7.24432L16.6683 6.90341C16.8388 6.50568 17.0661 6.19602 17.3501 5.97443C17.6371 5.75 17.9496 5.59375 18.2876 5.50568C18.6286 5.41477 18.9638 5.36932 19.2933 5.36932C19.5036 5.36932 19.745 5.39489 20.0178 5.44602C20.2933 5.49432 20.5589 5.59517 20.8146 5.74858C21.0732 5.90199 21.2876 6.13352 21.4581 6.44318C21.6286 6.75284 21.7138 7.16761 21.7138 7.6875V12H20.7081V11.1136H20.657C20.5888 11.2557 20.4751 11.4077 20.3161 11.5696C20.157 11.7315 19.9453 11.8693 19.6811 11.983C19.4169 12.0966 19.0945 12.1534 18.7138 12.1534ZM18.8672 11.25C19.2649 11.25 19.6001 11.1719 19.8729 11.0156C20.1484 10.8594 20.3558 10.6577 20.495 10.4105C20.6371 10.1634 20.7081 9.90341 20.7081 9.63068V8.71023C20.6655 8.76136 20.5717 8.80824 20.4268 8.85085C20.2848 8.89062 20.12 8.92614 19.9325 8.95739C19.7479 8.9858 19.5675 9.01136 19.3913 9.03409C19.218 9.05398 19.0774 9.07102 18.9695 9.08523C18.7081 9.11932 18.4638 9.17472 18.2365 9.25142C18.0121 9.32528 17.8303 9.4375 17.6911 9.58807C17.5547 9.7358 17.4865 9.9375 17.4865 10.1932C17.4865 10.5426 17.6158 10.8068 17.8743 10.9858C18.1357 11.1619 18.4666 11.25 18.8672 11.25ZM23.6857 12V3.27273H24.6914V6.49432H24.7766C24.8505 6.38068 24.9528 6.2358 25.0835 6.05966C25.217 5.88068 25.4073 5.72159 25.6545 5.58239C25.9045 5.44034 26.2425 5.36932 26.6687 5.36932C27.2198 5.36932 27.7056 5.5071 28.1261 5.78267C28.5465 6.05824 28.8746 6.44886 29.1104 6.95455C29.3462 7.46023 29.4641 8.05682 29.4641 8.74432C29.4641 9.4375 29.3462 10.0384 29.1104 10.5469C28.8746 11.0526 28.5479 11.4446 28.1303 11.723C27.7127 11.9986 27.2312 12.1364 26.6857 12.1364C26.2653 12.1364 25.9286 12.0668 25.6758 11.9276C25.4229 11.7855 25.2283 11.625 25.092 11.446C24.9556 11.2642 24.8505 11.1136 24.7766 10.9943H24.6573V12H23.6857ZM24.6744 8.72727C24.6744 9.22159 24.7468 9.65767 24.8917 10.0355C25.0366 10.4105 25.2482 10.7045 25.5266 10.9176C25.805 11.1278 26.146 11.233 26.5494 11.233C26.9698 11.233 27.3207 11.1222 27.6019 10.9006C27.886 10.6761 28.0991 10.375 28.2411 9.99716C28.386 9.61648 28.4585 9.19318 28.4585 8.72727C28.4585 8.26705 28.3874 7.85227 28.2454 7.48295C28.1062 7.1108 27.8945 6.81676 27.6104 6.60085C27.3292 6.3821 26.9755 6.27273 26.5494 6.27273C26.1403 6.27273 25.7965 6.37642 25.5181 6.58381C25.2397 6.78835 25.0295 7.07528 24.8874 7.4446C24.7454 7.81108 24.6744 8.23864 24.6744 8.72727ZM33.7468 12.1364C33.1161 12.1364 32.5721 11.9972 32.1147 11.7188C31.6602 11.4375 31.3093 11.0455 31.0621 10.5426C30.8178 10.0369 30.6957 9.44886 30.6957 8.77841C30.6957 8.10795 30.8178 7.51705 31.0621 7.00568C31.3093 6.49148 31.6531 6.09091 32.0934 5.80398C32.5366 5.5142 33.0536 5.36932 33.6445 5.36932C33.9854 5.36932 34.3221 5.42614 34.6545 5.53977C34.9869 5.65341 35.2894 5.83807 35.5621 6.09375C35.8349 6.34659 36.0522 6.68182 36.2141 7.09943C36.3761 7.51705 36.457 8.03125 36.457 8.64205V9.06818H31.4116V8.19886H35.4343C35.4343 7.82955 35.3604 7.5 35.2127 7.21023C35.0678 6.92045 34.8604 6.69176 34.5906 6.52415C34.3235 6.35653 34.0082 6.27273 33.6445 6.27273C33.244 6.27273 32.8974 6.37216 32.6048 6.57102C32.315 6.76705 32.092 7.02273 31.9357 7.33807C31.7795 7.65341 31.7013 7.99148 31.7013 8.35227V8.93182C31.7013 9.42614 31.7866 9.84517 31.957 10.1889C32.1303 10.5298 32.3704 10.7898 32.6772 10.9688C32.984 11.1449 33.3406 11.233 33.7468 11.233C34.011 11.233 34.2496 11.196 34.4627 11.1222C34.6786 11.0455 34.8647 10.9318 35.021 10.7812C35.1772 10.6278 35.2979 10.4375 35.3832 10.2102L36.3548 10.483C36.2525 10.8125 36.0806 11.1023 35.8391 11.3523C35.5977 11.5994 35.2994 11.7926 34.9442 11.9318C34.5891 12.0682 34.19 12.1364 33.7468 12.1364ZM38.9244 9.61364L38.9073 8.36932H39.1119L41.9755 5.45455H43.2198L40.1687 8.53977H40.0835L38.9244 9.61364ZM37.9869 12V3.27273H38.9925V12H37.9869ZM42.146 12L39.5891 8.76136L40.305 8.0625L43.4244 12H42.146ZM46.7163 12.1364C46.1708 12.1364 45.6893 11.9986 45.2717 11.723C44.854 11.4446 44.5273 11.0526 44.2915 10.5469C44.0558 10.0384 43.9379 9.4375 43.9379 8.74432C43.9379 8.05682 44.0558 7.46023 44.2915 6.95455C44.5273 6.44886 44.8555 6.05824 45.2759 5.78267C45.6964 5.5071 46.1822 5.36932 46.7333 5.36932C47.1594 5.36932 47.4961 5.44034 47.7433 5.58239C47.9933 5.72159 48.1836 5.88068 48.3143 6.05966C48.4478 6.2358 48.5515 6.38068 48.6254 6.49432H48.7106V3.27273H49.7163V12H48.7447V10.9943H48.6254C48.5515 11.1136 48.4464 11.2642 48.31 11.446C48.1737 11.625 47.979 11.7855 47.7262 11.9276C47.4734 12.0668 47.1367 12.1364 46.7163 12.1364ZM46.8526 11.233C47.256 11.233 47.5969 11.1278 47.8754 10.9176C48.1538 10.7045 48.3654 10.4105 48.5103 10.0355C48.6552 9.65767 48.7276 9.22159 48.7276 8.72727C48.7276 8.23864 48.6566 7.81108 48.5146 7.4446C48.3725 7.07528 48.1623 6.78835 47.8839 6.58381C47.6055 6.37642 47.2617 6.27273 46.8526 6.27273C46.4265 6.27273 46.0714 6.3821 45.7873 6.60085C45.506 6.81676 45.2944 7.1108 45.1523 7.48295C45.0131 7.85227 44.9435 8.26705 44.9435 8.72727C44.9435 9.19318 45.0146 9.61648 45.1566 9.99716C45.3015 10.375 45.5146 10.6761 45.7958 10.9006C46.0799 11.1222 46.4322 11.233 46.8526 11.233ZM54.4421 12.1364C53.8114 12.1364 53.2674 11.9972 52.81 11.7188C52.3555 11.4375 52.0046 11.0455 51.7575 10.5426C51.5131 10.0369 51.391 9.44886 51.391 8.77841C51.391 8.10795 51.5131 7.51705 51.7575 7.00568C52.0046 6.49148 52.3484 6.09091 52.7887 5.80398C53.2319 5.5142 53.7489 5.36932 54.3398 5.36932C54.6808 5.36932 55.0174 5.42614 55.3498 5.53977C55.6822 5.65341 55.9847 5.83807 56.2575 6.09375C56.5302 6.34659 56.7475 6.68182 56.9094 7.09943C57.0714 7.51705 57.1523 8.03125 57.1523 8.64205V9.06818H52.1069V8.19886H56.1296C56.1296 7.82955 56.0558 7.5 55.908 7.21023C55.7631 6.92045 55.5558 6.69176 55.2859 6.52415C55.0188 6.35653 54.7035 6.27273 54.3398 6.27273C53.9393 6.27273 53.5927 6.37216 53.3001 6.57102C53.0103 6.76705 52.7873 7.02273 52.631 7.33807C52.4748 7.65341 52.3967 7.99148 52.3967 8.35227V8.93182C52.3967 9.42614 52.4819 9.84517 52.6523 10.1889C52.8256 10.5298 53.0657 10.7898 53.3725 10.9688C53.6793 11.1449 54.0359 11.233 54.4421 11.233C54.7063 11.233 54.945 11.196 55.158 11.1222C55.3739 11.0455 55.56 10.9318 55.7163 10.7812C55.8725 10.6278 55.9933 10.4375 56.0785 10.2102L57.0501 10.483C56.9478 10.8125 56.7759 11.1023 56.5344 11.3523C56.293 11.5994 55.9947 11.7926 55.6396 11.9318C55.2844 12.0682 54.8853 12.1364 54.4421 12.1364ZM63.8352 5.45455L61.4148 12H60.392L57.9716 5.45455H59.0625L60.8693 10.6705H60.9375L62.7443 5.45455H63.8352ZM65.4854 12.0682C65.2752 12.0682 65.0948 11.9929 64.9442 11.8423C64.7937 11.6918 64.7184 11.5114 64.7184 11.3011C64.7184 11.0909 64.7937 10.9105 64.9442 10.7599C65.0948 10.6094 65.2752 10.5341 65.4854 10.5341C65.6957 10.5341 65.8761 10.6094 66.0266 10.7599C66.1772 10.9105 66.2525 11.0909 66.2525 11.3011C66.2525 11.4403 66.217 11.5682 66.146 11.6847C66.0778 11.8011 65.9854 11.8949 65.869 11.9659C65.7553 12.0341 65.6275 12.0682 65.4854 12.0682ZM70.7163 12.1364C70.1026 12.1364 69.5742 11.9915 69.131 11.7017C68.6879 11.4119 68.3469 11.0128 68.1083 10.5043C67.8697 9.99574 67.7504 9.41477 67.7504 8.76136C67.7504 8.09659 67.8725 7.50994 68.1168 7.00142C68.364 6.49006 68.7077 6.09091 69.1481 5.80398C69.5913 5.5142 70.1083 5.36932 70.6992 5.36932C71.1594 5.36932 71.5742 5.45455 71.9435 5.625C72.3129 5.79545 72.6154 6.03409 72.8512 6.34091C73.087 6.64773 73.2333 7.00568 73.2901 7.41477H72.2844C72.2077 7.11648 72.0373 6.85227 71.7731 6.62216C71.5117 6.3892 71.1594 6.27273 70.7163 6.27273C70.3242 6.27273 69.9805 6.375 69.685 6.57955C69.3924 6.78125 69.1637 7.06676 68.9989 7.43608C68.837 7.80256 68.756 8.23295 68.756 8.72727C68.756 9.23295 68.8356 9.6733 68.9947 10.0483C69.1566 10.4233 69.3839 10.7145 69.6765 10.9219C69.9719 11.1293 70.3185 11.233 70.7163 11.233C70.9776 11.233 71.2148 11.1875 71.4279 11.0966C71.641 11.0057 71.8214 10.875 71.9691 10.7045C72.1168 10.5341 72.2219 10.3295 72.2844 10.0909H73.2901C73.2333 10.4773 73.0927 10.8253 72.8683 11.1349C72.6467 11.4418 72.3526 11.6861 71.9862 11.8679C71.6225 12.0469 71.1992 12.1364 70.7163 12.1364ZM77.4194 12.1364C76.8285 12.1364 76.31 11.9957 75.864 11.7145C75.4208 11.4332 75.0742 11.0398 74.8242 10.5341C74.5771 10.0284 74.4535 9.4375 74.4535 8.76136C74.4535 8.07955 74.5771 7.48437 74.8242 6.97585C75.0742 6.46733 75.4208 6.07244 75.864 5.79119C76.31 5.50994 76.8285 5.36932 77.4194 5.36932C78.0103 5.36932 78.5273 5.50994 78.9705 5.79119C79.4165 6.07244 79.7631 6.46733 80.0103 6.97585C80.2603 7.48437 80.3853 8.07955 80.3853 8.76136C80.3853 9.4375 80.2603 10.0284 80.0103 10.5341C79.7631 11.0398 79.4165 11.4332 78.9705 11.7145C78.5273 11.9957 78.0103 12.1364 77.4194 12.1364ZM77.4194 11.233C77.8683 11.233 78.2376 11.1179 78.5273 10.8878C78.8171 10.6577 79.0316 10.3551 79.1708 9.98011C79.31 9.60511 79.3796 9.19886 79.3796 8.76136C79.3796 8.32386 79.31 7.91619 79.1708 7.53835C79.0316 7.16051 78.8171 6.85511 78.5273 6.62216C78.2376 6.3892 77.8683 6.27273 77.4194 6.27273C76.9705 6.27273 76.6012 6.3892 76.3114 6.62216C76.0217 6.85511 75.8072 7.16051 75.668 7.53835C75.5288 7.91619 75.4592 8.32386 75.4592 8.76136C75.4592 9.19886 75.5288 9.60511 75.668 9.98011C75.8072 10.3551 76.0217 10.6577 76.3114 10.8878C76.6012 11.1179 76.9705 11.233 77.4194 11.233ZM81.9205 12V5.45455H82.892V6.47727H82.9773C83.1136 6.12784 83.3338 5.85653 83.6378 5.66335C83.9418 5.46733 84.3068 5.36932 84.733 5.36932C85.1648 5.36932 85.5241 5.46733 85.8111 5.66335C86.1009 5.85653 86.3267 6.12784 86.4886 6.47727H86.5568C86.7244 6.1392 86.9759 5.87074 87.3111 5.67188C87.6463 5.47017 88.0483 5.36932 88.517 5.36932C89.1023 5.36932 89.581 5.55256 89.9531 5.91903C90.3253 6.28267 90.5114 6.84943 90.5114 7.61932V12H89.5057V7.61932C89.5057 7.13636 89.3736 6.79119 89.1094 6.58381C88.8452 6.37642 88.5341 6.27273 88.1761 6.27273C87.7159 6.27273 87.3594 6.41193 87.1065 6.69034C86.8537 6.96591 86.7273 7.31534 86.7273 7.73864V12H85.7045V7.51705C85.7045 7.14489 85.5838 6.84517 85.3423 6.6179C85.1009 6.38778 84.7898 6.27273 84.4091 6.27273C84.1477 6.27273 83.9034 6.34233 83.6761 6.48153C83.4517 6.62074 83.2699 6.81392 83.1307 7.06108C82.9943 7.3054 82.9261 7.58807 82.9261 7.90909V12H81.9205Z"
        fill="black"
      />
      <path
        d="M95.3331 8.30114V8.82955C94.8587 8.82955 94.5263 8.92898 94.3359 9.12784C94.1484 9.3267 94.0547 9.65909 94.0547 10.125V11.4886C94.0547 11.8807 94.0163 12.2202 93.9396 12.5071C93.8658 12.794 93.7436 13.0312 93.5732 13.2188C93.4027 13.4062 93.1754 13.5455 92.8913 13.6364C92.6072 13.7273 92.2564 13.7727 91.8388 13.7727V12.9375C92.1683 12.9375 92.4268 12.8849 92.6143 12.7798C92.8047 12.6776 92.9382 12.5199 93.0149 12.3068C93.0945 12.0938 93.1342 11.821 93.1342 11.4886V9.78409C93.1342 9.5625 93.1626 9.3608 93.2195 9.17898C93.2791 8.99716 93.3871 8.84091 93.5433 8.71023C93.6996 8.57955 93.9212 8.47869 94.2081 8.40767C94.4979 8.33665 94.8729 8.30114 95.3331 8.30114ZM91.8388 2.86364C92.2564 2.86364 92.6072 2.90909 92.8913 3C93.1754 3.09091 93.4027 3.23011 93.5732 3.41761C93.7436 3.60511 93.8658 3.84233 93.9396 4.12926C94.0163 4.41619 94.0547 4.75568 94.0547 5.14773V6.51136C94.0547 6.97727 94.1484 7.30966 94.3359 7.50852C94.5263 7.70739 94.8587 7.80682 95.3331 7.80682V8.33523C94.8729 8.33523 94.4979 8.29972 94.2081 8.22869C93.9212 8.15767 93.6996 8.05682 93.5433 7.92614C93.3871 7.79545 93.2791 7.6392 93.2195 7.45739C93.1626 7.27557 93.1342 7.07386 93.1342 6.85227V5.14773C93.1342 4.81534 93.0945 4.54261 93.0149 4.32955C92.9382 4.11364 92.8047 3.95455 92.6143 3.85227C92.4268 3.75 92.1683 3.69886 91.8388 3.69886V2.86364ZM95.3331 7.80682V8.82955H94.3274V7.80682H95.3331Z"
        fill="#3E74B5"
      />
    </svg>
  ),
  noThumbnail: (props: IconProps) => (
    <svg
      width="420"
      height="236"
      viewBox="0 0 1920 1080"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full bg-secondary rounded-md"
    >
      <path
        d="M1266.79 240H652.837C639.885 240 627.463 245.145 618.304 254.304C609.145 263.463 604 275.885 604 288.837V791.163C604 804.115 609.145 816.537 618.304 825.696C627.463 834.855 639.885 840 652.837 840H1266.79C1279.74 840 1292.17 834.855 1301.32 825.696C1310.48 816.537 1315.63 804.115 1315.63 791.163V288.837C1315.63 275.885 1310.48 263.463 1301.32 254.304C1292.17 245.145 1279.74 240 1266.79 240ZM652.837 281.86H1266.79C1268.64 281.86 1270.42 282.596 1271.72 283.904C1273.03 285.212 1273.77 286.987 1273.77 288.837V664.081L1170.97 561.279C1166.43 556.744 1161.05 553.146 1155.12 550.691C1149.2 548.237 1142.84 546.973 1136.43 546.973C1130.02 546.973 1123.67 548.237 1117.74 550.691C1111.81 553.146 1106.43 556.744 1101.9 561.279L1027.17 636L868.767 477.558C864.232 473.023 858.848 469.425 852.923 466.97C846.997 464.516 840.646 463.252 834.233 463.252C827.819 463.252 821.468 464.516 815.542 466.97C809.617 469.425 804.233 473.023 799.698 477.558L645.86 631.395V288.837C645.86 286.987 646.596 285.212 647.904 283.904C649.212 282.596 650.987 281.86 652.837 281.86ZM645.86 791.163V690.593L829.279 507.174C829.928 506.52 830.699 506.001 831.549 505.647C832.4 505.293 833.312 505.111 834.233 505.111C835.154 505.111 836.065 505.293 836.916 505.647C837.766 506.001 838.537 506.52 839.186 507.174L1130.15 798.14H652.837C650.987 798.14 649.212 797.404 647.904 796.096C646.596 794.788 645.86 793.013 645.86 791.163ZM1266.79 798.14H1189.35L1056.79 665.581L1131.48 590.86C1132.12 590.212 1132.89 589.697 1133.74 589.346C1134.59 588.995 1135.5 588.814 1136.41 588.814C1137.33 588.814 1138.24 588.995 1139.08 589.346C1139.93 589.697 1140.7 590.212 1141.35 590.86L1273.91 723.419V791.163C1273.91 792.091 1273.72 793.01 1273.36 793.865C1273 794.721 1272.48 795.496 1271.81 796.146C1271.15 796.796 1270.37 797.307 1269.5 797.649C1268.64 797.991 1267.72 798.158 1266.79 798.14ZM1022.6 442.326C1022.6 435.426 1024.65 428.682 1028.48 422.945C1032.32 417.209 1037.76 412.738 1044.14 410.097C1050.51 407.457 1057.53 406.766 1064.29 408.112C1071.06 409.458 1077.28 412.78 1082.15 417.659C1087.03 422.538 1090.36 428.753 1091.7 435.52C1093.05 442.287 1092.36 449.301 1089.72 455.675C1087.08 462.049 1082.61 467.497 1076.87 471.33C1071.13 475.163 1064.39 477.209 1057.49 477.209C1048.24 477.209 1039.36 473.534 1032.82 466.992C1026.28 460.45 1022.6 451.577 1022.6 442.326Z"
        className="fill-background/50 text-primary"
      />
    </svg>
  ),
  twitter: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M21.543 7.104c.015.211.015.423.015.636 0 6.507-4.954 14.01-14.01 14.01v-.003A13.94 13.94 0 0 1 0 19.539a9.88 9.88 0 0 0 7.287-2.041 4.93 4.93 0 0 1-4.6-3.42 4.916 4.916 0 0 0 2.223-.084A4.926 4.926 0 0 1 .96 9.167v-.062a4.887 4.887 0 0 0 2.235.616A4.928 4.928 0 0 1 1.67 3.148a13.98 13.98 0 0 0 10.15 5.144 4.929 4.929 0 0 1 8.39-4.49 9.868 9.868 0 0 0 3.128-1.196 4.941 4.941 0 0 1-2.165 2.724A9.828 9.828 0 0 0 24 4.555a10.019 10.019 0 0 1-2.457 2.549z" />
    </svg>
  ),
  gitHub: (props: IconProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
  radix: (props: IconProps) => (
    <svg viewBox="0 0 25 25" fill="none" {...props}>
      <path
        d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"
        fill="currentcolor"
      ></path>
      <path d="M12 0H4V8H12V0Z" fill="currentcolor"></path>
      <path
        d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"
        fill="currentcolor"
      ></path>
    </svg>
  ),
  aria: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.966 22.624l-1.69-4.281H8.122l3.892-9.144 5.662 13.425zM8.884 1.376H0v21.248zm15.116 0h-8.884L24 22.624Z" />
    </svg>
  ),
  npm: (props: IconProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z"
        fill="currentColor"
      />
    </svg>
  ),
  yarn: (props: IconProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm.768 4.105c.183 0 .363.053.525.157.125.083.287.185.755 1.154.31-.088.468-.042.551-.019.204.056.366.19.463.375.477.917.542 2.553.334 3.605-.241 1.232-.755 2.029-1.131 2.576.324.329.778.899 1.117 1.825.278.774.31 1.478.273 2.015a5.51 5.51 0 0 0 .602-.329c.593-.366 1.487-.917 2.553-.931.714-.009 1.269.445 1.353 1.103a1.23 1.23 0 0 1-.945 1.362c-.649.158-.95.278-1.821.843-1.232.797-2.539 1.242-3.012 1.39a1.686 1.686 0 0 1-.704.343c-.737.181-3.266.315-3.466.315h-.046c-.783 0-1.214-.241-1.45-.491-.658.329-1.51.19-2.122-.134a1.078 1.078 0 0 1-.58-1.153 1.243 1.243 0 0 1-.153-.195c-.162-.25-.528-.936-.454-1.946.056-.723.556-1.367.88-1.71a5.522 5.522 0 0 1 .408-2.256c.306-.727.885-1.348 1.32-1.737-.32-.537-.644-1.367-.329-2.21.227-.602.412-.936.82-1.08h-.005c.199-.074.389-.153.486-.259a3.418 3.418 0 0 1 2.298-1.103c.037-.093.079-.185.125-.283.31-.658.639-1.029 1.024-1.168a.94.94 0 0 1 .328-.06zm.006.7c-.507.016-1.001 1.519-1.001 1.519s-1.27-.204-2.266.871c-.199.218-.468.334-.746.44-.079.028-.176.023-.417.672-.371.991.625 2.094.625 2.094s-1.186.839-1.626 1.881c-.486 1.144-.338 2.261-.338 2.261s-.843.732-.899 1.487c-.051.663.139 1.2.343 1.515.227.343.51.176.51.176s-.561.653-.037.931c.477.25 1.283.394 1.71-.037.31-.31.371-1.001.486-1.283.028-.065.12.111.209.199.097.093.264.195.264.195s-.755.324-.445 1.066c.102.246.468.403 1.066.398.222-.005 2.664-.139 3.313-.296.375-.088.505-.283.505-.283s1.566-.431 2.998-1.357c.917-.598 1.293-.76 2.034-.936.612-.148.57-1.098-.241-1.084-.839.009-1.575.44-2.196.825-1.163.718-1.742.672-1.742.672l-.018-.032c-.079-.13.371-1.293-.134-2.678-.547-1.515-1.413-1.881-1.344-1.997.297-.5 1.038-1.297 1.334-2.78.176-.899.13-2.377-.269-3.151-.074-.144-.732.241-.732.241s-.616-1.371-.788-1.483a.271.271 0 0 0-.157-.046z"
        fill="currentColor"
      />
    </svg>
  ),
  pnpm: (props: IconProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M0 0v7.5h7.5V0zm8.25 0v7.5h7.498V0zm8.25 0v7.5H24V0zM8.25 8.25v7.5h7.498v-7.5zm8.25 0v7.5H24v-7.5zM0 16.5V24h7.5v-7.5zm8.25 0V24h7.498v-7.5zm8.25 0V24H24v-7.5z"
        fill="currentColor"
      />
    </svg>
  ),
  react: (props: IconProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"
        fill="currentColor"
      />
    </svg>
  ),
  tailwind: (props: IconProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"
        fill="currentColor"
      />
    </svg>
  ),
  google: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
      />
    </svg>
  ),
  apple: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <path
        d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
        fill="currentColor"
      />
    </svg>
  ),
  paypal: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <path
        d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z"
        fill="currentColor"
      />
    </svg>
  ),
  spinner: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  ),
};
