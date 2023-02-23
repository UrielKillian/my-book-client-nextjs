import dynamic from 'next/dynamic'
import 'react-quill/dist/quill.snow.css'
import { quillConfiguration } from './quill-configuration'

const QuillNoSSRWrapper = dynamic(import('react-quill'), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
})

export default function QuillComponent() {

    const { modules, formats } = quillConfiguration();

    console.log('modules', modules)
    console.log('formats', formats)

    return (
        <QuillNoSSRWrapper
            theme="snow"
            modules={modules}
            formats={formats}
        />
    )
}