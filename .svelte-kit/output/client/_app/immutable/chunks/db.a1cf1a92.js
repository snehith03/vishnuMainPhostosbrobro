import{c,s as u}from"./index.da8f1b77.js";const i="@supabase/auth-helpers-sveltekit",I="0.8.6";function _(a,e,t,n){var r;const s={...t,global:{...t==null?void 0:t.global,headers:{...(r=t==null?void 0:t.global)==null?void 0:r.headers,"X-Client-Info":`${i}@${I}`}},auth:{storageKey:(n==null?void 0:n.name)??"supabase-auth-token"}},l=c({supabaseUrl:a,supabaseKey:e,options:s,cookieOptions:n});return u({globalInstance:l,supabaseUrl:a,supabaseKey:e,options:s,cookieOptions:{name:"supabase-auth-token",path:"/",sameSite:"lax",maxAge:1e3*60*60*24*365,...n}}),l}const g="https://dnyzkkyplrygcavwrmly.supabase.co",h="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRueXpra3lwbHJ5Z2NhdndybWx5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAyNDY4MzgsImV4cCI6MjAxNTgyMjgzOH0.9ckourW6mk9VY_BM4jjlvBCCqzYHHQCABaMAMB9Rx5I",f="https://www.photosbro.com/",d=_(g,h);function C({error:a}){if(a)throw new Error(a.message,{cause:a})}function b({data:a,error:e}){if(e)throw new Error(e.message,{cause:e});if(a)return a;throw new Error("Missig db data")}const o=async()=>{const{error:a,data:e}=await d.from("user_info").select("*",{count:"exact"}).single();return a?{id:"",paid:!1,in_training:!1,trained:!1,counter:0,created_at:null,end_training:null,instance_class:null,replicate_model_id:null,replicate_train_status:null,replicate_version_id:null,start_training:null}:e};export{f as P,C as a,o as g,b as h,d as s};
