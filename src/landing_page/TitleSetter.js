// TitleSetter.js
import { useEffect } from 'react';

export default function TitleSetter({ title }) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return null; // doesn't render anything
}
