function authPage(){
  const registerForm=document.getElementById('register-form');
  if(registerForm)registerForm.addEventListener('submit',e=>{e.preventDefault();
    const f=new FormData(registerForm), name=f.get('name').trim(), email=f.get('email').trim().toLowerCase(), roll=f.get('roll').trim(), department=f.get('department'), year=f.get('year'), password=f.get('password'), confirm=f.get('confirm');
    const err=document.getElementById('register-error');
    const fail=msg=>{err.textContent=msg;err.classList.add('show')}; err.classList.remove('show');
    if(!name||!email||!roll||!department||!year||!password||!confirm)return fail('Please complete every required field.');
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))return fail('Enter a valid email address.');
    if(password.length<8)return fail('Password must be at least 8 characters.');
    if(password!==confirm)return fail('Passwords do not match.');
    const users=getData(CC_KEYS.users,[]);if(users.some(u=>u.email===email))return fail('An account with this email already exists.');
    users.push({id:uid('u'),name,email,roll,department,year,password,role:'student',avatar:`https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=4f46e5&color=fff`});saveData(CC_KEYS.users,users);
    registerForm.reset();showToast('Account created successfully. Redirecting to login…','success');setTimeout(()=>location.href='login.html?registered=1',700)
  });
  const loginForm=document.getElementById('login-form');
  if(loginForm){
    const params=new URLSearchParams(location.search);if(params.get('registered'))showToast('Registration complete. Please sign in.','success');
    loginForm.addEventListener('submit',e=>{e.preventDefault();const f=new FormData(loginForm),email=f.get('email').trim().toLowerCase(),password=f.get('password'),error=document.getElementById('login-error');error.classList.remove('show');const user=getData(CC_KEYS.users,[]).find(u=>u.email===email&&u.password===password);if(!user){error.textContent='Invalid email or password.';error.classList.add('show');return}setCurrentUser(user);localStorage.setItem('cc_remember',f.get('remember')?'1':'0');showToast(`Welcome back, ${user.name.split(' ')[0]}!`,'success');setTimeout(()=>location.href=user.role==='admin'?'admin.html':'dashboard.html',500)});
    document.getElementById('forgot-password')?.addEventListener('click',e=>{e.preventDefault();showToast('For this demo, use a registered account or the demo credentials shown below.','info')})
  }
}
document.addEventListener('DOMContentLoaded',authPage);
