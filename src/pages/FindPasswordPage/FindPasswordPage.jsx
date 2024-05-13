// import React, { useState } from 'react';
// import { useInput } from '../../hooks/inputHook';
// import AuthPageInput from '../../components/AuthPageInput/AuthPageInput';

// function FindPasswordPage(props) {
    
//     const [userInfo, setUserInfo] = useState({
//         userId: '', // 사용자의 식별자를 저장할 상태 추가
//         username: '',
//         name: '',
//         email: '',
//         phone: '',
//         newPassword: '',
//         newPasswordCheck: ''
//       });
    
//       const [step, setStep] = useState(1); // 1: 유저 정보 확인 단계, 2: 새 비밀번호 입력 단계
    
//       const handleUserInfoSubmit = async (e) => {
//         e.preventDefault();
//         // 여기서 사용자 정보 확인 요청을 보냅니다.
//         // 응답으로 사용자의 식별자를 받아와서 상태에 저장합니다.
//         // 응답이 성공적으로 오면 다음 단계로 이동합니다.
//         setStep(2);
//       };
    
//       const handlePasswordChangeSubmit = async (e) => {
//         e.preventDefault();
//         // 여기서 새 비밀번호를 변경하는 요청을 보냅니다.
//         // axios 등을 사용하여 백엔드로 요청을 보내고 응답을 받습니다.
//         // 응답이 성공적으로 오면 완료 메시지를 보여줍니다.
//         // 실패하면 에러 메시지를 보여줍니다.
//       };
    
//       return (
//         <div>
//           {step === 1 && (
//             <form onSubmit={handleUserInfoSubmit}>
//               <input
//                 type="text"
//                 placeholder="Username"
//                 value={userInfo.username}
//                 onChange={(e) => setUserInfo({ ...userInfo, username: e.target.value })}
//               />
//               <input
//                 type="text"
//                 placeholder="Name"
//                 value={userInfo.name}
//                 onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
//               />
//               <input
//                 type="email"
//                 placeholder="Email"
//                 value={userInfo.email}
//                 onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
//               />
//               <input
//                 type="text"
//                 placeholder="Phone"
//                 value={userInfo.phone}
//                 onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })}
//               />
//               <button type="submit">Confirm User Info</button>
//             </form>
//           )}
    
//           {step === 2 && (
//             <form onSubmit={handlePasswordChangeSubmit}>
//               <input
//                 type="password"
//                 placeholder="New Password"
//                 value={userInfo.newPassword}
//                 onChange={(e) => setUserInfo({ ...userInfo, newPassword: e.target.value })}
//               />
//               <input
//                 type="password"
//                 placeholder="Confirm New Password"
//                 value={userInfo.newPasswordCheck}
//                 onChange={(e) => setUserInfo({ ...userInfo, newPasswordCheck: e.target.value })}
//               />
//               <button type="submit">Change Password</button>
//             </form>
//           )}
//         </div>
//       );
//     }


// export default FindPasswordPage;