import { Suspense } from 'react';
import { getAllPublishers, getBooksByPublisherId } from '@/lib/data';
import PublishersClient from '@/components/PublishersClient';

export default function PublishersPage() {
  const publishers = getAllPublishers().map((p) => ({
    ...p,
    bookCount: getBooksByPublisherId(p.id).length,
  }));

  return (
    <Suspense>
      <PublishersClient publishers={publishers} />
    </Suspense>
  );
}
