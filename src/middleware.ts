@@ .. @@
   const isAuthPath = authPaths.some(path => 
     req.nextUrl.pathname.startsWith(path)
   )
+  
+  // Admin paths require special handling
+  const isAdminPath = req.nextUrl.pathname.startsWith('/admin')

   // Redirect to login if accessing protected route without session
   if (isProtectedPath && !session) {
@@ .. @@
   if (req.nextUrl.pathname === '/dashboard' && session) {
     return NextResponse.redirect(new URL('/user/dashboard', req.url))
   }
+  
+  // Admin access control (basic check - enhance with role-based auth)
+  if (isAdminPath && !session) {
+    const redirectUrl = new URL('/login', req.url)
+    redirectUrl.searchParams.set('redirectTo', req.nextUrl.pathname)
+    return NextResponse.redirect(redirectUrl)
+  }

   return res
 }