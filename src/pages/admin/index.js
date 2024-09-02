import styles from './admin.module.css';
import Layout from '@/components/BDGuard/admin/layout/layout';

export default function Home() {
  return (
    
      <Layout>
      <main className={styles.mainContent}>
        <h1>Welcome to the Admin Panel</h1>
        <p>This is your dashboard where you can manage your application.</p>
      </main>
    
    </Layout>
  );
}