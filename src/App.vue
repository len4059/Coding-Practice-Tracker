<template>
  <nav style="padding:12px; border-bottom:1px solid #eee;">
    <RouterLink to="/dashboard" style="margin-right:12px;">Dashboard</RouterLink>
    <RouterLink to="/problems">Problems</RouterLink>
  </nav>
  <main style="padding:16px;">
    <RouterView />
  </main>
</template>
