import React, { useState } from 'react';

interface Interest {
  title: string;
  options?: string[];
  sports?: string[];
}

interface InterestsProps {
  data: {
    screenTitle: string;
    content: Interest[];
    description: string;
  };
  onSubmit: (data: InterestsProps['data']) => void;
}

const Interests: React.FC<InterestsProps> = ({ data, onSubmit }) => {
  const [screenTitle, setScreenTitle] = useState(data.screenTitle);
  const [content, setContent] = useState(data.content);
  const [description, setDescription] = useState(data.description);

  const handleScreenTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setScreenTitle(event.target.value);
  };

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const handleContentChange = (
    index: number,
    key: keyof Interest,
    value: string[]
  ) => {
    setContent((prevContent) =>
      prevContent.map((item, i) =>
        i === index ? { ...item, [key]: value } : item
      )
    );
  };

  const handleSubmit = () => {
    onSubmit({ screenTitle, content, description });
  };

  return (
    <div className="p-4">
      <input
        type="text"
        value={screenTitle}
        onChange={handleScreenTitleChange}
        className="text-2xl font-bold mb-4 border-b-2"
      />
      <input
        type="text"
        value={description}
        onChange={handleDescriptionChange}
        className="mb-4 border-b-2"
      />
      {content.map((item, index) => (
        <div key={index} className="mb-4">
          <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
          <ul className="list-disc list-inside">
            {item.options && (
              <>
                <li>
                  Options:{' '}
                  <input
                    type="text"
                    value={item.options.join(', ')}
                    onChange={(event) =>
                      handleContentChange(
                        index,
                        'options',
                        event.target.value.split(', ')
                      )
                    }
                    className="border-b-2"
                  />
                </li>
              </>
            )}
            {item.sports && (
              <>
                <li>
                  Sports:{' '}
                  <input
                    type="text"
                    value={item.sports.join(', ')}
                    onChange={(event) =>
                      handleContentChange(
                        index,
                        'sports',
                        event.target.value.split(', ')
                      )
                    }
                    className="border-b-2"
                  />
                </li>
              </>
            )}
          </ul>
        </div>
      ))}
      <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">
        Submit
      </button>
    </div>
  );
};

export default Interests;
